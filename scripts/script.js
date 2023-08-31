(function($) { 
  $(function() { 

    $('#navbar-toggle').click(function() {
      $('nav ul').slideToggle();
    });

    $('#navbar-toggle').on('click', function() {
      this.classList.toggle('active');
    });

    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.navbar-dropdown').slideToggle("slow");

      $('.navbar-dropdown').not($(this).siblings()).hide("slow");
      e.stopPropagation();
    });

    $('html').click(function() {
      $('.navbar-dropdown').hide();
    });
  }); 
})(jQuery); 


var slideIndex = 1;
showSlide(slideIndex);

function openLightbox() {
  document.getElementById('Lightbox').style.display = 'block';
}

function closeLightbox() {
  document.getElementById('Lightbox').style.display = 'none';
}

function changeSlide(n) {
	showSlide(slideIndex += n);
}

function toSlide(n) {
	showSlide(slideIndex = n);
}

function showSlide(n) {

  const slides = document.getElementsByClassName('slide');
  let modalPreviews = document.getElementsByClassName('modal-preview');

  if (n > slides.length) {
    slideIndex = 1;	
  }
  
  if (n < 1) {
  	slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (let i = 0; i < modalPreviews.length; i++) {
      modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  }
  
  slides[slideIndex - 1].style.display = 'block';
  modalPreviews[slideIndex - 1].className += ' active';
}