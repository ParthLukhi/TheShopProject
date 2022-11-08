// TOGGLE BUTTON CODE STARTS
const toggleBtn = document.querySelector(".toggle-btn");
const mainNavList = document.querySelector(".main-nav-list");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  mainNavList.classList.toggle("active");
})

document.querySelectorAll(".main-nav-link").forEach(e => e.addEventListener("click", () => {
  toggleBtn.classList.remove("active");
  mainNavList.classList.remove("active");
}))

// Hiding the menu when you click outside it
document.addEventListener("click", function(e) {
  if (!toggleBtn.contains(e.target) && !mainNavList.contains(e.target)) {
    toggleBtn.classList.remove("active");
    mainNavList.classList.remove("active");
  }
})
// TOGGLE BUTTON CODE ENDS