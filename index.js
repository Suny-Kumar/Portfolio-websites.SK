// Smooth scrolling for navigation links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation on scroll
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});
$(document).ready(function() {
    $('#services .service-box').each(function() {
      $(this).hover(function() {
        $(this).addClass('animated fadeIn');
      }, function() {
        $(this).removeClass('animated fadeIn');
      });
    });
  });
  $(document).ready(function() {
    $('#skills .skill-box').each(function() {
      $(this).hover(function() {
        $(this).addClass('animated fadeIn');
      }, function() {
        $(this).removeClass('animated fadeIn');
      });
    });
    $('#skills .progress-bar').each(function() {
      $(this).animate({
        width: $(this).attr('aria-valuenow') + '%'
      }, 1000);
    });
  });
  $(document).ready(function() {
    $('#projects .project-box').each(function() {
      $(this).hover(function() {
        $(this).addClass('animated fadeIn');
      }, function() {
        $(this).removeClass('animated fadeIn');
      });
    });
    $('#projects .project-box').on('click', function() {
      $(this).toggleClass('project-box-active');
    });
  });
  $(document).ready(function() {
    $('#contact .contact-info').hover(function() {
      $(this).addClass('animated fadeIn');
    }, function() {
      $(this).removeClass('animated fadeIn');
    });
    $('#contact form').on('submit', function() {
      $(this).toggleClass('form-submitted');
    });
  });
  $(document).ready(function() {
    $('#about .about-image').hover(function() {
      $(this).addClass('animated fadeIn');
    }, function() {
      $(this).removeClass('animated fadeIn');
    });
    $('#about .about-text').hover(function() {
      $(this).addClass('animated fadeIn');
    }, function() {
      $(this).removeClass('animated fadeIn');
    });
  });
        