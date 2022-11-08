const nutritionClick = document.querySelector("#nutrition-minus")
const nutritionTable = document.querySelector(".nutrition-table")
const nutritionTableInner = document.querySelector(".nutrition-table-inner")
const nutritionMinusPlus = document.querySelector("#nutrition-minus i")

nutritionClick.addEventListener("click", () => {
    nutritionTable.classList.toggle("nutrition-table-toggle")
    nutritionTableInner.classList.toggle("nutrition-table-inner-toggle")
    if(nutritionMinusPlus.classList.contains("fa-minus")){
        nutritionMinusPlus.classList.add("fa-plus")
        nutritionMinusPlus.classList.remove("fa-minus")
    }else{
        nutritionMinusPlus.classList.add("fa-minus")
        nutritionMinusPlus.classList.remove("fa-plus")
    }
})