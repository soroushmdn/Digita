// @@@@@@@@@@@@  toggle menu @@@@@@@@@@@@@
let toggle = document.querySelector(".toggle");
let collapse = document.querySelector(".collapse");

toggle.addEventListener("click", function () {
  collapse.classList.toggle("active");
});

window.onscroll = () => {
  collapse.classList.remove("active");
};

// @@@@@@@@@@@@  unhide transparent nav @@@@@@@@@@@@@
window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});


// @@@@@@@@@@@@  masonry js @@@@@@@@@@@@@
// masonry.desandro.com

let grid = document.querySelector(".recent-work-grid");

let msnry = new Masonry(grid, {
  itemSelector: ".recent-work-box",
  gutter: 68,
  fitWidth: true,
});

// @@@@@@@@@@@@  rellax js @@@@@@@@@@@@@
// dixonandmoe.com/rellax/
var rellax = new Rellax(".rellax", {
  center: true,
});
