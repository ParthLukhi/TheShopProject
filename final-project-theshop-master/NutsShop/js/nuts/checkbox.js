//Click checkboxes

const checkboxesDesktop = document.querySelectorAll("#desktop .checkbox-clicked")
const checkboxesTablet = document.querySelectorAll("#tablet .checkbox-clicked")
const checkboxAreaDesktop = document.querySelectorAll("#desktop .checkboxArea")
const checkboxAreaTablet = document.querySelectorAll("#tablet .checkboxArea")

function clickCheckbox(checkboxArea, checkboxes){
    for(let i=0; i< checkboxArea.length; i++){
        checkboxArea[i].addEventListener("click", () => {
            checkboxes[i].classList.toggle("checkbox-clicked2")
        })
    }
}


clickCheckbox(checkboxAreaDesktop, checkboxesDesktop)
clickCheckbox(checkboxAreaTablet, checkboxesTablet)