
const swiper = new Swiper('.swiper', {
  scrollbar: {
    el: '.swiper-scrollbar',

  },
});

let menuBtn = document.querySelector("#menu-btn");
let closeBtn = document.querySelector("#close-btn");
let menu = document.querySelector("nav .container ul");

//Show Menu

menuBtn.addEventListener("click", () => {
  menu.style.display = "block";
  menuBtn.style.display = "none"
  closeBtn.style.display = "inline-block"

})

//Hide menu
closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  menuBtn.style.display = "inline-block";
  closeBtn.style.display = "none"
})

let navItems = menu.querySelectorAll("li");

let changeActiveItem = () => {
  navItems.forEach(item => {
    let link = item.querySelector("a");
    link.classList.remove("active")

  })
}

navItems.forEach(item => {
  let link = item.querySelector("a");
  link.addEventListener("click", () => {
    changeActiveItem()
    link.classList.add("active")
  })
})

//Skill items Toggle
let skillItems = document.querySelectorAll("section.skills .skill");

skillItems.forEach(skill => {
  skill.querySelector(".head").addEventListener("click", () => {
    skill.querySelector(".items").classList.toggle("show-items")
  })
})

// Add box shadow on scroll
window.addEventListener ("scroll", () => {
  document.querySelector("nav").classList.toggle("show-box-shadow",window.scrollY > 0)
})
window.addEventListener ("scroll", () => {
  document.querySelector("section.company-info").classList.toggle("show-box-shadow",window.scrollY > 0)
})


// Nav Items Drop down
var _hmt = _hmt || [];
(function() {
var hm = document.createElement("script");
hm.src = "//hm.baidu.com/hm.js?73c27e26f610eb3c9f3feb0c75b03925";
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(hm, s);
})();

// Animation Effect on cards

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);