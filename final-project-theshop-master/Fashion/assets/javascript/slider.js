// 'hero-img' SLIDESHOW CODE STARTS
let slideIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("slides");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > x.length) {
    slideIndex = 1;
  }

  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 3000);
}
// 'hero-img' SLIDESHOW CODE ENDS

var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";
function menutoggle() {
    if (MenuItems.style.maxHeight == "20px") {
        MenuItems.style.maxHeight = "200px";
    }
    else {
        MenuItems.style.maxHeight = "0px";
    }
}