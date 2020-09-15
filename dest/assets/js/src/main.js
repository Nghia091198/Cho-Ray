// For Search
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}
// End For Search
function mobileMenu() {
    var x = document.getElementById("mobile-menu");
    var y = document.getElementById("icon");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        } else {
        x.style.display = "none";
        y.style.display = "flex";
    }
}

function closeBTN() {
    document.getElementById("mobile-menu").style.display = "none";
    document.getElementById("icon").style.display = "flex";
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
} 

function closeForm(){
    var disActive = document.getElementsByClassName("active");
    var disActive2 = document.getElementsByClassName("box-form");
    if ((disActive[0] && disActive2[0]).style.display === "flex") {
        disActive[0].style.display = "none";
        disActive2[0].style.display = "none";
    }
    else {
        disActive[0].style.display = "flex";
        disActive2[0].style.display = "flex";
    }     
}

// End Dang ky tu van

function scrollBody(){
    var elmnt = document.getElementById("headding");
  elmnt.scrollIntoView();
  console.log(elmnt);

}

    