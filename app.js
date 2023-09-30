let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle("active");
}

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .navbar a");


window.onscroll = () =>{
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
    section.forEach( sec =>{
      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute("id");
      if(top  >= offset && top < offset + height){
        navLinks.forEach(links =>{
          links.classList.remove("active");
          document.querySelector('header .navbar a[href*='+id+']').classList.add("active");
        });
      };
    });
}

document.querySelector("#search-icon").onclick= () =>{
    document.querySelector("#search-form").classList.toggle("active");
}

document.querySelector("#close").onclick= () =>{
    document.querySelector("#search-form").classList.remove("active");
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });