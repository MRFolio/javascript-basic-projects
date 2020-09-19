const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");
const btns = document.querySelectorAll(".tab-btn");

function changeActive(e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons first
    btns.forEach((btn) => btn.classList.remove("active"));
    // add active
    e.target.classList.add("active");
    // hide other articles
    articles.forEach((article) => article.classList.remove("active"));
    const element = document.getElementById(id);
    element.classList.add("active");
  }
}

about.addEventListener("click", changeActive);
