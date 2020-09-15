
    $(".education").slick({
        arrows:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true,
                autoplay: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                dots: true,
                autoplay: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                infinite: true,
                dots: true,
                autoplay: true,
                slidesToScroll: 1
            }
        } 
  ]
    });
    //-----------//
    
    $(".box__connect").slick({
        arrows:true,
        slidesToShow: 8,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                arrows: false,
                dots: true,
                autoplay: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                dots: true,
                autoplay: true,
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                infinite: true,
                dots: true,
                autoplay: true,
                slidesToScroll: 1
            }
        } 
  ]
    });

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}