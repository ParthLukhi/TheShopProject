//Tablet filters

const filtersHeading = document.querySelector("#filters-heading")
const filters = document.querySelector(".filters")

filtersHeading.addEventListener("click", () => {
    filters.classList.toggle("filters-clicked")
})