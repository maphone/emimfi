let subMenu = document.getElementById("subMenu");

function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}

// login system menu
let loginMenu = document.getElementById("MenuLogin");

function toggleLogin(){
  loginMenu.classList.toggle("open-login");  
}


// close forms
let closeBtn = document.getElementById("forms");

function toggleOpen(){
  closeBtn.classList.toggle("open-forms");
}


// slide image
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}







let headerScroll = document.getElementById("headerScrolling");

window.addEventListener("scroll", function() {    
  if (window.scrollY >= 100) {
    headerScroll.classList.add('scrolled');
  } else {
    headerScroll.classList.remove('scrolled');
  }
});


// counter value
const counters = document.querySelectorAll('.count');
const speed = 200;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('value');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});



















