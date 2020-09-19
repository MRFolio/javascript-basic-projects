// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** select items ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const navbar = document.getElementById("nav");
const goTopLink = document.querySelector(".top-link");
const scrollLinks = document.querySelectorAll(".scroll-link");

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** show links ************

function toggleNav() {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  containerHeight === 0
    ? (linksContainer.style.height = `${linksHeight}px`)
    : (linksContainer.style.height = 0);
  /* linksContainer.classList.toggle("show-links"); */
}

// ********** show fixed navbar + goTop ************

function fixedNavbar() {
  // Fixed nav reveal
  const navHeight = navbar.getBoundingClientRect().height;
  const scrollHeight = window.pageYOffset;

  scrollHeight > navHeight
    ? navbar.classList.add("fixed-nav")
    : navbar.classList.remove("fixed-nav");

  scrollHeight > 500
    ? goTopLink.classList.add("show-link")
    : goTopLink.classList.remove("show-link");
}

// ********** smooth scroll ************
function smoothScroll(e) {
  e.preventDefault();
  // navigate to specific spot
  const id = e.currentTarget.getAttribute("href").slice(1);
  const element = document.getElementById(id);
  // calculate the heights
  const navHeight = navbar.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;

  const fixedNav = navbar.classList.contains("fixed-nav");
  let position = element.offsetTop - navHeight;
  !fixedNav ? (position -= navHeight) : false;
  navHeight > 82 ? (position += containerHeight) : false;
  window.scrollTo(0, position);
  linksContainer.style.height = 0;
}

// Eventlisteners
navToggle.addEventListener("click", toggleNav);
document.addEventListener("scroll", fixedNavbar);
scrollLinks.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});
