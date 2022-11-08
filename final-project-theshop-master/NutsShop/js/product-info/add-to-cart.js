// Interactive input of amount of chosen items
// 1. When click on + it adds one item
// 2. When click on - it minuses one item

const quentityMinus = document.querySelector("#quentity-minus")
const quentityPlus = document.querySelector("#quentity-plus")
const productAmount = document.querySelector("#product-amount")

quentityMinus.addEventListener("click", () => {
    if (productAmount.value > 0) {
        productAmount.value -= 1
    }
})

quentityPlus.addEventListener("click", () => {
    productAmount.value = Number(productAmount.value) + 1
})



// Styling divs when user choose what weigh of item to add to cart
// 1. Get divs with amount of grams (500 grams/1 kg/20 kg) to add to cart.
// 2. Style them with toggle class when it chosen 
// 3. Change the weigh of item  
//   3.1. add style to chosen div
//   3.2. remove all "chosing" styles from another divs

const gram = document.querySelector("#gram")
const oneKg = document.querySelector("#one-kg")
const lotKg = document.querySelector("#lot-kg")

gram.addEventListener("click", () => {
    gram.classList.toggle("weight-toggle")
    if (oneKg.classList.contains("weight-toggle")) {
        oneKg.classList.remove("weight-toggle")
    }
    if (lotKg.classList.contains("weight-toggle")) {
        lotKg.classList.remove("weight-toggle")
    }
})

oneKg.addEventListener("click", () => {
    oneKg.classList.toggle("weight-toggle")
    if (gram.classList.contains("weight-toggle")) {
        gram.classList.remove("weight-toggle")
    }
    if (lotKg.classList.contains("weight-toggle")) {
        lotKg.classList.remove("weight-toggle")
    }
})

lotKg.addEventListener("click", () => {
    lotKg.classList.toggle("weight-toggle")
    if (gram.classList.contains("weight-toggle")) {
        gram.classList.remove("weight-toggle")
    }
    if (oneKg.classList.contains("weight-toggle")) {
        oneKg.classList.remove("weight-toggle")
    }
})



// While clicking on add to cart button programm checks if everything that needed was chosen
// 1. If the amount of items was chosen
//   1.1. check if it is a number
//   1.2. check if it is bigger than 0
// 2. If the weight was chosen (500 grams/1 kg/20 kg)
// 3. Put appropriate warning message if something is missing

const weight = [gram, oneKg, lotKg]

const numberPattern = /^[0-9]+$/
const addToCart = document.querySelector("#add-to-cart")
const warningMessage = document.querySelector("#warning-message")

addToCart.addEventListener("click", () => {
    //checking amount of items to add to cart
    if (!(numberPattern.test(productAmount.value))) {
        warningMessage.innerText = "Not a Number."
        productAmount.value = 0
    } else if (productAmount.value == 0) {
        warningMessage.innerText = "Cannot add 0 items to the cart."
    } else {
        warningMessage.innerText = ""
    }

    //checking if any item was choosen
    let count = 0 // count how many types of weight was not chosen (can be maximum 3)
    for (let i = 0; i < weight.length; i++) {
        if (!(weight[i].classList.contains("weight-toggle"))) {
            count++
        }
    }

    if (count == weight.length) {
        warningMessage.innerText += " Chose weight to add to cart"
    }

    if(warningMessage.innerText == ""){
        warningMessage.innerText = "Successfully added to cart!"
        warningMessage.style.color = "green"
        for (let i = 0; i < weight.length; i++) {
            weight[i].style.border = "none"
            weight[i].style.fontWeight = "normal"
        }
    }
})
