// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });
    
    // Sticky Header
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
    
    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    // Image Slider
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.dots-container');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    
    // Create dots for each slide
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.dot');
    
    // Function to show a specific slide
    function goToSlide(slideIndex) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[slideIndex].classList.add('active');
        dots[slideIndex].classList.add('active');
        currentSlide = slideIndex;
    }
    
    // Function to show the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    }
    
    // Function to show the previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        goToSlide(currentSlide);
    }
    
    // Event listeners for slider controls
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Auto slide change
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause auto slide on hover
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    sliderContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialDotsContainer = document.querySelector('.testimonial-dots');
    const prevTestimonialBtn = document.querySelector('.prev-testimonial');
    const nextTestimonialBtn = document.querySelector('.next-testimonial');
    let currentTestimonial = 0;
    
    // Create dots for each testimonial
    testimonials.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('testimonial-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToTestimonial(index));
        testimonialDotsContainer.appendChild(dot);
    });
    
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    
    // Function to show a specific testimonial
    function goToTestimonial(testimonialIndex) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        testimonialDots.forEach(dot => dot.classList.remove('active'));
        
        testimonials[testimonialIndex].classList.add('active');
        testimonialDots[testimonialIndex].classList.add('active');
        currentTestimonial = testimonialIndex;
    }
    
    // Function to show the next testimonial
    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        goToTestimonial(currentTestimonial);
    }
    
    // Function to show the previous testimonial
    function prevTestimonial() {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        goToTestimonial(currentTestimonial);
    }
    
    // Event listeners for testimonial controls
    prevTestimonialBtn.addEventListener('click', prevTestimonial);
    nextTestimonialBtn.addEventListener('click', nextTestimonial);
    
    // Auto testimonial change
    let testimonialInterval = setInterval(nextTestimonial, 6000);
    
    // Gallery Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (filterValue === 'all' || filterValue === itemCategory) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Star Rating System
    const stars = document.querySelectorAll('.stars i');
    const ratingValue = document.getElementById('rating-value');
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const value = this.getAttribute('data-rating');
            ratingValue.value = value;
            
            // Update stars display
            stars.forEach(s => {
                if (s.getAttribute('data-rating') <= value) {
                    s.classList.remove('far');
                    s.classList.add('fas');
                } else {
                    s.classList.remove('fas');
                    s.classList.add('far');
                }
            });
        });
    });
    
    // Form Submission
    const feedbackForm = document.getElementById('feedback-form');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your feedback! We appreciate your input.');
            this.reset();
            // Reset star rating
            stars.forEach(s => {
                s.classList.remove('fas');
                s.classList.add('far');
            });
            ratingValue.value = 0;
        });
    }
    
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // alert('Thank you for contacting us! We will get back to you soon.');
            this.reset();
        });
    }
    
    const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for subscribing to our YouTube channel!');
        // After alert, open YouTube channel in a new tab
        window.open('https://youtu.be/ffnw65zray8?si=7Vq2bZprK4yxhwY', '_blank');
        this.reset();
    });
}

    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active menu item based on scroll position
    const sections = document.querySelectorAll('section');
    
    function setActiveNavItem() {
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('nav ul li a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', setActiveNavItem);
    
    // Initialize the page
    setActiveNavItem();
});

// Add this to your existing JavaScript file or create a new one

document.addEventListener('DOMContentLoaded', function() {
    // Get all gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Create a popup container and add it to the body
    const popupContainer = document.createElement('div');
    popupContainer.className = 'gallery-popup-container';
    popupContainer.innerHTML = `
        <div class="gallery-popup">
            <div class="popup-header">
                <h3 class="popup-title"></h3>
                <button class="popup-close">&times;</button>
            </div>
            <div class="popup-content">
                <img class="popup-image" src="/placeholder.svg" alt="">
                <p class="popup-description"></p>
            </div>
        </div>
    `;
    document.body.appendChild(popupContainer);
    
    // Get popup elements
    const popup = document.querySelector('.gallery-popup');
    const popupTitle = document.querySelector('.popup-title');
    const popupImage = document.querySelector('.popup-image');
    const popupDescription = document.querySelector('.popup-description');
    const popupClose = document.querySelector('.popup-close');
    
    // Function to show popup
    function showPopup(title, imgSrc, description) {
        popupTitle.textContent = title;
        popupImage.src = imgSrc;
        popupDescription.textContent = description;
        
        // Add active class with a slight delay to trigger animation
        setTimeout(() => {
            popupContainer.classList.add('active');
        }, 10);
    }
    
    // Function to close popup
    function closePopup() {
        popupContainer.classList.remove('active');
    }
    
    // Add click event to each gallery item
    galleryItems.forEach(item => {
        // Get data from the gallery item
        const img = item.querySelector('img');
        const overlay = item.querySelector('.gallery-overlay');
        const title = overlay.querySelector('h3').textContent;
        const description = overlay.querySelector('p').textContent;
        
        // Show popup on click (not hover)
        item.addEventListener('click', function() {
            showPopup(title, img.src, description);
        });
    });
    
    // Close popup when clicking the close button
    popupClose.addEventListener('click', function(e) {
        e.stopPropagation();
        closePopup();
    });
    
    // Close popup when clicking outside
    popupContainer.addEventListener('click', function(e) {
        if (e.target === popupContainer) {
            closePopup();
        }
    });
    
    // Close popup with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closePopup();
        }
    });
});

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Testimonial Slider
    const testimonials = document.querySelectorAll(".testimonial")
    const testimonialDotsContainer = document.querySelector(".testimonial-dots")
    const prevTestimonialBtn = document.querySelector(".prev-testimonial")
    const nextTestimonialBtn = document.querySelector(".next-testimonial")
    let currentTestimonial = 0
  
    // Create dots for each testimonial
    testimonials.forEach((_, index) => {
      const dot = document.createElement("div")
      dot.classList.add("testimonial-dot")
      if (index === 0) dot.classList.add("active")
      dot.addEventListener("click", () => goToTestimonial(index))
      testimonialDotsContainer.appendChild(dot)
    })
  
    const testimonialDots = document.querySelectorAll(".testimonial-dot")
  
    // Function to show a specific testimonial
    function goToTestimonial(testimonialIndex) {
      testimonials.forEach((testimonial) => testimonial.classList.remove("active"))
      testimonialDots.forEach((dot) => dot.classList.remove("active"))
  
      testimonials[testimonialIndex].classList.add("active")
      testimonialDots[testimonialIndex].classList.add("active")
      currentTestimonial = testimonialIndex
    }
  
    // Function to show the next testimonial
    function nextTestimonial() {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length
      goToTestimonial(currentTestimonial)
    }
  
    // Function to show the previous testimonial
    function prevTestimonial() {
      currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length
      goToTestimonial(currentTestimonial)
    }
  
    // Event listeners for testimonial controls
    if (prevTestimonialBtn) {
      prevTestimonialBtn.addEventListener("click", prevTestimonial)
    }
  
    if (nextTestimonialBtn) {
      nextTestimonialBtn.addEventListener("click", nextTestimonial)
    }
  
    // Auto testimonial change
    const testimonialInterval = setInterval(nextTestimonial, 6000)
  
    // Star Rating System
    const stars = document.querySelectorAll(".stars i")
    const ratingValue = document.getElementById("rating-value")
  
    stars.forEach((star) => {
      star.addEventListener("click", function () {
        const value = this.getAttribute("data-rating")
        ratingValue.value = value
  
        // Update stars display
        stars.forEach((s) => {
          if (s.getAttribute("data-rating") <= value) {
            s.classList.remove("far")
            s.classList.add("fas")
          } else {
            s.classList.remove("fas")
            s.classList.add("far")
          }
        })
      })
  
      // Add hover effect
      star.addEventListener("mouseover", function () {
        const value = this.getAttribute("data-rating")
  
        stars.forEach((s) => {
          if (s.getAttribute("data-rating") <= value) {
            s.classList.remove("far")
            s.classList.add("fas")
          } else {
            s.classList.remove("fas")
            s.classList.add("far")
          }
        })
      })
  
      // Reset stars on mouseout if no rating is selected
      star.addEventListener("mouseout", () => {
        if (ratingValue.value === "0") {
          stars.forEach((s) => {
            s.classList.remove("fas")
            s.classList.add("far")
          })
        } else {
          stars.forEach((s) => {
            if (s.getAttribute("data-rating") <= ratingValue.value) {
              s.classList.remove("far")
              s.classList.add("fas")
            } else {
              s.classList.remove("fas")
              s.classList.add("far")
            }
          })
        }
      })
    })
  
    // Form Submission with WhatsApp Integration
    const feedbackForm = document.getElementById("feedback-form")
  
    if (feedbackForm) {
      feedbackForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form values
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const feedbackType = document.getElementById("feedback-type").value
        const message = document.getElementById("feedback-message").value
        const rating = ratingValue.value
  
        // Format the message for WhatsApp
        const whatsappNumber = "9030209797" // The target WhatsApp number
        const whatsappMessage = `
  *Feedback from Brightwood Academy Website*
  Name: ${name}
  Email: ${email}
  Feedback Type: ${feedbackType}
  Rating: ${rating}/5
  Message: ${message}
  `
  
        // Encode the message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage)
  
        // Create WhatsApp URL
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
  
        // Redirect to WhatsApp
        window.open(whatsappUrl, "_blank")
  
        // Reset form
        feedbackForm.reset()
  
        // Reset star rating
        stars.forEach((s) => {
          s.classList.remove("fas")
          s.classList.add("far")
        })
        ratingValue.value = "0"
  
        // Show success message
        alert("Thank you for your feedback! You will be redirected to WhatsApp to send your message.")
      })
    }
  })
  
  document.getElementById("feedback-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const type = document.getElementById("feedback-type").value;
    const message = document.getElementById("feedback-message").value.trim();
    const rating = document.getElementById("rating-value").value;

    const whatsappMessage = `Feedback from ${name} (${email})%0AType: ${type}%0ARating: ${rating}/5%0AMessage: ${message}`;

    // Open WhatsApp chat with pre-filled message
    const whatsappURL = `https://wa.me/919030209797?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");
  });

  // If you want to dynamically create the message link after form submission
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("contact-name").value;
    const email = document.getElementById("contact-email").value;
    const phone = document.getElementById("contact-phone").value;
    const inquiry = document.getElementById("inquiry-type").value;
    const message = document.getElementById("contact-message").value;

    // Pre-fill WhatsApp message
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AInquiry Type: ${inquiry}%0AMessage: ${message}`;

    // Create WhatsApp link
    const whatsappLink = `https://wa.me/9198019992444?text=${whatsappMessage}`;

    // Set the href attribute of the WhatsApp link dynamically
    document.getElementById("whatsapp-link").setAttribute("href", whatsappLink);

    // Redirect to WhatsApp (optional)
    window.open(whatsappLink, "_blank");
});


var modal = document.getElementById("thank-you-modal");
var closeBtn = document.getElementById("close-modal");

// Form submission event
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("contact-name").value;
    const email = document.getElementById("contact-email").value;
    const phone = document.getElementById("contact-phone").value;
    const inquiry = document.getElementById("inquiry-type").value;
    const message = document.getElementById("contact-message").value;

    // Pre-fill WhatsApp message
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AInquiry Type: ${inquiry}%0AMessage: ${message}`;

    // Create WhatsApp link
    const whatsappLink = `https://wa.me/9198019992444?text=${whatsappMessage}`;

    // Set the href attribute of the WhatsApp link dynamically
    document.getElementById("whatsapp-link").setAttribute("href", whatsappLink);

    // Show the modal
    modal.style.display = "block";

    // Redirect to WhatsApp after 3 seconds
    setTimeout(function() {
        window.open(whatsappLink, "_blank");
    }, 3000);
});

// Close the modal when the user clicks the close button
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close the modal if the user clicks anywhere outside the modal
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}