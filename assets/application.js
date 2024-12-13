const header = document.querySelector("#header");
const headerPhone = document.querySelector("#header-phone");

window.addEventListener("scroll", function () {
  if (window.scrollY > 30) {
    header.classList.add("header-scroll");
    headerPhone.classList.add("header-scroll");
  } else {
    header.classList.remove("header-scroll");
    headerPhone.classList.remove("header-scroll");
  }
});

let inputBox = document.querySelector(".input-box"),
  searchIcon = document.querySelector(".icon"),
  spanIcon = document.querySelector("#delete-this"),
  closeIcon = document.querySelector(".close-icon");

searchIcon.addEventListener("click", () => {
  inputBox.classList.add("open");
  spanIcon.style.display = "none";
});
closeIcon.addEventListener("click", () => {
  inputBox.classList.remove("open");
  spanIcon.style.display = "block";
});

const toggleButton = document.querySelector("#toggle-menu-phone");
const navPhone = document.querySelector("#nav-phone");
const bgOverlay = document.querySelector("#bg-overlay");
const crossIcon = document.querySelector(".cross-icon");
const body = document.querySelector("body");

toggleButton.addEventListener("click", function () {
  if (navPhone.classList.contains("active")) {
    navPhone.classList.remove("active");
    bgOverlay.classList.remove("active");
    body.style.overflow = "auto";
  } else {
    navPhone.classList.add("active");
    bgOverlay.classList.add("active");
    body.style.overflow = "hidden";
  }
});
bgOverlay.addEventListener("click", function () {
  navPhone.classList.remove("active");
  bgOverlay.classList.remove("active");
  body.style.overflow = "auto";
});
crossIcon.addEventListener("click", function () {
  navPhone.classList.remove("active");
  bgOverlay.classList.remove("active");
  body.style.overflow = "auto";
});

if (screen.height < 481) {
  navPhone.classList.add("lil-phone");
}

const question = document.getElementsByClassName("question");

function faq(elem) {
  var reponse = elem.parentNode.querySelector(".reponse");

  // reponse.style.display = reponse.style.display === "block" ? "none" : "block";

  reponse.classList.contains("show")
    ? reponse.classList.remove("show")
    : reponse.classList.add("show");

  var arrow = elem.querySelector(".faqArrow");

  arrow.classList.contains("rotateFaq")
    ? arrow.classList.remove("rotateFaq")
    : arrow.classList.add("rotateFaq");
}

window.addEventListener("load", function () {
  if (window.innerWidth < 1000) {
    let slides = document.querySelectorAll(".slide");
    slides.forEach(function (slide) {
      slide.classList.remove("overflow");
    });
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth < 1000) {
    let slides = document.querySelectorAll(".slide");
    slides.forEach(function (slide) {
      slide.classList.remove("overflow");
    });
  } else {
    let slides = document.querySelectorAll(".slide");
    slides.forEach(function (slide) {
      slide.classList.add("overflow");
    });
  }
});

const toggleProfile = document.querySelector("#login");

toggleProfile.addEventListener("click", function () {
  const dropdown = document.querySelector(".login-dropdown");
  dropdown.classList.toggle("open");
});
