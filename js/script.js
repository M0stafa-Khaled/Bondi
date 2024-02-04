let workLis = document.querySelectorAll(".our-work .list-switer-work li");
let imgBoxs = document.querySelectorAll(".our-work .all");

workLis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", fillterWork);
});

// Remove Active Class
function removeActive() {
  workLis.forEach((li) => {
    li.classList.remove("active");
    li.classList.remove("rounded-3");
  });
  this.classList.add("active");
  this.classList.add("rounded-3");
}
// Fillter Work
function fillterWork() {
  imgBoxs.forEach((box) => {
    box.classList.add("d-none");
  });
  document.querySelectorAll(this.dataset.work).forEach((box) => {
    box.classList.remove("d-none");
  });
}

// year in footer 
let year = document.querySelector(".year");
year.innerHTML = new Date().getFullYear();
