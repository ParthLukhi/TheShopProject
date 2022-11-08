//Data about items and their types. Each item has an image, name and price

//Almonds Data
const almondsImg = nutsImages(13, "almonds")
const almondsNames = nutsNames(13, "almonds")
const almondsPrices = nutsPrices(13)
//Brazil Nuts Data
const brazilImg = nutsImages(4, "brazil")
const brazilNames = nutsNames(4, "brazil")
const brazilPrices = nutsPrices(4)
//Cashews Data
const cashewsImg = nutsImages(7, "cashews")
const cashewsNames = nutsNames(7, "cashews")
const cashewsPrices = nutsPrices(7)
//Hazelnuts Data
const hazelnutsImg = nutsImages(2, "hazelnuts")
const hazelnutsNames = nutsNames(2, "hazelnuts")
const hazelnutsPrices = nutsPrices(2)
//Macadamia Data
const macadamiaImg = nutsImages(2, "macadamia")
const macadamiaNames = nutsNames(2, "macadamia")
const macadamiaPrices = nutsPrices(2)
//Nut Butters Data
const buttersImg = nutsImages(4, "butters")
const buttersNames = nutsNames(4, "butters")
const buttersPrices = nutsPrices(4)
//Pecans Data
const pecansImg = nutsImages(3, "pecans")
const pecansNames = nutsNames(3, "pecans")
const pecansPrices = nutsPrices(3)
//Pistachios Data
const pistachiosImg = nutsImages(3, "pistachios")
const pistachiosNames = nutsNames(3, "pistachios")
const pistachiosPrices = nutsPrices(3)
//Peanuts Data
const peanutsImg = nutsImages(8, "peanuts")
const peanutsNames = nutsNames(8, "peanuts")
const peanutsPrices = nutsPrices(8)
//Walnuts Data
const walnutsImg = nutsImages(2, "walnuts")
const walnutsNames = nutsNames(2, "walnuts")
const walnutsPrices = nutsPrices(2)


// All data was retrived in this way
function nutsImages(n, name) {
    const images = [];
    for (let i = 1; i < n + 1; i++) {
        images.push("../images/nuts-items/" + name + "/" + name + i + ".jpg");
    }

    return images
}
function nutsNames(n, name) {
    const names = [];
    for (let i = 0; i < n; i++) {
        names.push("NAME OF " + name.toUpperCase() + "#" + (i + 1));
    }

    return names
}
function nutsPrices(n) {
    const prices = [];
    for (let i = 0; i < n; i++) {
        prices.push((Math.floor(Math.random() * 20) + 10) + 0.99);
    }

    return prices
}

//Object that has all above in an organized way
const nutsTypes = {
    type: ["almonds", "brazil", "cashews", "hazelnuts", "macadamia", "butters", "pecans", "pistachios", "peanuts", "walnuts"],
    number: [13, 4, 7, 2, 2, 4, 3, 3, 8, 2], // the length of each type of nuts( how many elements are there (13-almonds, 4-brazil...))
    image: [almondsImg, brazilImg, cashewsImg, hazelnutsImg, macadamiaImg, buttersImg, pecansImg, pistachiosImg, peanutsImg, walnutsImg],
    name: [almondsNames, brazilNames, cashewsNames, hazelnutsNames, macadamiaNames, buttersNames, pecansNames, pistachiosNames, peanutsNames, walnutsNames],
    price: [almondsPrices, brazilPrices, cashewsPrices, hazelnutsPrices, macadamiaPrices, buttersPrices, pecansPrices, pistachiosPrices, peanutsPrices, walnutsPrices]
}

//main div(container) that is a parent for all items
const productsContainer = document.querySelector("#products-container")

//array of all items. One item(element in the array) its an object that stores 
//number of name(example: cashews = 2) and number of nuts(example: there are 7 nuts/elements in cashews category/type) in one type
const orderedArray = arrayItemsOrder();

//the same array but objects there are not ordered. 
//It is made to display not only nuts in one type after another but different types of nuts in mixed order
const mixedArray = mixArray(orderedArray);

//show the array of items
displayArray(mixedArray)


function arrayItemsOrder() {
    let itemsOrder = []
    for (let i = 0; i < nutsTypes.type.length; i++) {
        for (let j = 0; j < nutsTypes.number[i]; j++) {
            itemsOrder.push({ arg1: i, arg2: j })
        }
    }

    return itemsOrder
}

function mixArray(array) {
    const mixedArray = []
    let randomIndex;

    for (let i = 0; i < array.length; i++) {
        randomIndex = Math.floor(Math.random() * array.length)
        if (mixedArray[randomIndex] == null) {
            mixedArray[randomIndex] = array[i]
        } else {
            i--
        }
    }

    return mixedArray
}

function displayArray(array) {
    for (let i = 0; i < array.length; i++) {
        addItemNutsTypes(array[i].arg1, array[i].arg2)
    }

}

//modify addItem to use it with two parameters
function addItemNutsTypes(typeN, i) {
    addItem(nutsTypes.type[typeN], "url(" + nutsTypes.image[typeN][i] + ")", nutsTypes.name[typeN][i], nutsTypes.price[typeN][i])
}

//pattern of item how it looks in html
function addItem(itemClass, image, name, itemPrice) {
    //child of priductsContainer - productItem
    const productItem = document.createElement("div")
    productItem.classList.add("product-item")
    productsContainer.appendChild(productItem)


    //chilfren of productItem
    //first child  - imageWrapper
    const imageWrapper = document.createElement("div")
    imageWrapper.classList.add("image-wrapper")
    imageWrapper.classList.add(itemClass)
    imageWrapper.style.backgroundImage = image
    productItem.appendChild(imageWrapper)
    //second child - itemLink
    const itemLink = document.createElement("a")
    itemLink.classList.add("item-link")
    itemLink.setAttribute("href", "#")
    itemLink.innerText = name
    productItem.appendChild(itemLink)
    //third child - priceBlock
    const priceBlock = document.createElement("div")
    priceBlock.classList.add("price-block")
    productItem.appendChild(priceBlock)
    //fourth child - addSomewhereAfter
    const addSomewhereAfter = document.createElement("div")
    addSomewhereAfter.classList.add("add-somewhere-after")
    productItem.appendChild(addSomewhereAfter)


    //child of imageWrapper - addSomewhere
    const addSomewhere = document.createElement("div")
    addSomewhere.classList.add("add-somewhere")
    imageWrapper.appendChild(addSomewhere)


    //chilfren of priceBlock
    //first child - priceLabel
    const priceLabel = document.createElement("span")
    priceLabel.classList.add("price-label")
    priceLabel.innerText = "Starting from "
    priceBlock.appendChild(priceLabel)
    //second child - price
    const price = document.createElement("span")
    price.classList.add("price")
    price.innerText = "CA$" + itemPrice
    priceBlock.appendChild(price)


    //children of addSomewhereAfter
    //first child - addToCartAfter
    const addToCartAfter = document.createElement("div")
    addToCartAfter.classList.add("add-to-cart")
    addSomewhereAfter.appendChild(addToCartAfter)
    //second child - heartIconAfter
    const heartIconAfter = document.createElement("span")
    heartIconAfter.classList.add("heart-icon-after")
    addSomewhereAfter.appendChild(heartIconAfter)


    //children of addSomewhere
    //first child - addToCart
    const addToCart = document.createElement("div")
    addToCart.classList.add("add-to-cart")
    addSomewhere.appendChild(addToCart)
    //second child - heartIcon
    const heartIcon = document.createElement("span")
    heartIcon.classList.add("heart-icon")
    addSomewhere.appendChild(heartIcon)


    //children of addToCartAfter
    //first child - cartIconAfter
    const cartIconAfter = document.createElement("span")
    cartIconAfter.classList.add("cart-icon")
    addToCartAfter.appendChild(cartIconAfter)
    //second child - spanTextAddAfter
    const spanTextAddAfter = document.createElement("span")
    spanTextAddAfter.innerText = "Add to cart"
    addToCartAfter.appendChild(spanTextAddAfter)


    //children of addToCart
    //first child - cartIcon
    const cartIcon = document.createElement("span")
    cartIcon.classList.add("cart-icon")
    addToCart.appendChild(cartIcon)
    //second child - spanTextAdd
    const spanTextAdd = document.createElement("span")
    spanTextAdd.innerText = "Add to cart"
    addToCart.appendChild(spanTextAdd)


    //child of cartIconAfter
    const faCartPlusAfter = document.createElement("i")
    faCartPlusAfter.classList.add("fa")
    faCartPlusAfter.classList.add("fa-solid")
    faCartPlusAfter.classList.add("fa-cart-plus")
    cartIconAfter.appendChild(faCartPlusAfter)


    //child of cartIcon
    const faCartPlus = document.createElement("i")
    faCartPlus.classList.add("fa")
    faCartPlus.classList.add("fa-solid")
    faCartPlus.classList.add("fa-cart-plus")
    cartIcon.appendChild(faCartPlus)


    //child of heartIconAfter
    const faHeartAfter = document.createElement("i")
    faHeartAfter.classList.add("fa")
    faHeartAfter.classList.add("fa-regular")
    faHeartAfter.classList.add("fa-heart")
    heartIconAfter.appendChild(faHeartAfter)


    //child of heartIcon
    const faHeart = document.createElement("i")
    faHeart.classList.add("fa")
    faHeart.classList.add("fa-regular")
    faHeart.classList.add("fa-heart")
    heartIcon.appendChild(faHeart)
}

/////////////////////////////////////////////////////////////////////////////////////////////

//Onclick functions that filter what exactly type of nuts (almonds/cashews/etc) you want to be represented on page

//Create arrayys for storing only specific type of nuts items.
//For each type separate array
const almondsArr = [];
const brazilArr = [];
const cashewsArr = [];
const hazelnutsArr = [];
const macadamiaArr = [];
const buttersArr = [];
const pecansArr = [];
const pistachiosArr = [];
const peanutsArr = [];
const walnutsArr = [];

function nutsTypesArrs() {
    for (let i = 0; i < orderedArray.length; i++) {
        switch (orderedArray[i].arg1) {
            case 0:
                almondsArr.push(orderedArray[i])
                break;
            case 1:
                brazilArr.push(orderedArray[i])
                break;
            case 2:
                cashewsArr.push(orderedArray[i])
                break;
            case 3:
                hazelnutsArr.push(orderedArray[i])
                break;
            case 4:
                macadamiaArr.push(orderedArray[i])
                break;
            case 5:
                buttersArr.push(orderedArray[i])
                break;
            case 6:
                pecansArr.push(orderedArray[i])
                break;
            case 7:
                pistachiosArr.push(orderedArray[i])
                break;
            case 8:
                peanutsArr.push(orderedArray[i])
                break;
            case 9:
                walnutsArr.push(orderedArray[i])
                break;
            default:
                break;
        }

    }
}

nutsTypesArrs()

const typesArrs = {
    arrays: [almondsArr, brazilArr, cashewsArr, hazelnutsArr, macadamiaArr, buttersArr, pecansArr, pistachiosArr, peanutsArr, walnutsArr, mixedArray],
    description: ["Almonds contain vitamins, minerals, protein, and fiber, and so they may offer a number of health benefits. Just a handful of almonds — approximately 1 ounce — contains one-eighth of a person’s daily protein needs.",
        "Brazil nuts are tree nuts native to the Amazon rainforest in Brazil, Bolivia, and Peru. Their smooth, buttery texture and nutty flavor are typically enjoyed raw or blanched. These nuts are energy dense, highly nutritious, and one of the most concentrated dietary sources of the mineral selenium.",
        "Cashews are low in sugar and rich in fiber, heart-healthy fats, and plant protein. They’re also a good source of copper, magnesium, and manganese — nutrients important for energy production, brain health, immunity, and bone health.",
        "Hazelnuts make a tasty snack and are a great addition to many dishes. When a person includes them in a balanced, calorie-controlled diet, the nuts also provide several health benefits.",
        "Macadamia nuts are a versatile addition to most diets. They can be eaten whole, ground, raw, roasted, or as a nut butter and make for an interesting addition to main courses, snacks, and desserts.",
        "Generally, nut butters provide a nice balance of healthy fats, protein, and fiber, as well as vitamins (like vitamin A, vitamin E, and B vitamins) and minerals (like iron, zinc, magnesium, and potassium)",
        "Pecans are rich in many vitamins and minerals important for healthy skin, eyes, teeth, bones, muscles, and nerves.",
        "Pistachios are high in protein, fiber, and antioxidants. They also boast several other important nutrients, including vitamin B6 and potassium.",
        "Peanuts have a strong nutritional profile. They are an excellent source of plant-based protein, fiber, and many key vitamins and minerals.",
        "Walnuts are primarily made up of protein and polyunsaturated fat. They contain a relatively high percentage of omega-3 fat, which has been linked to various health benefits.",
        "Eating nuts as part of a healthy diet may be good for your heart. Nuts contain unsaturated fatty acids and other nutrients. And they're a great snack food — inexpensive, easy to store and easy to pack when you're on the go."
    ]
}

function displayNutsType(i) {
    clear()
    displayArray(typesArrs.arrays[i])
}
function clear() {
    productsContainer.innerHTML = ""
}
function rename(element, i) {
    const headerName = document.querySelector("#header-name h1")
    const headerDescription = document.querySelector("#header-description")
    const currentLocation = document.querySelector("#current-location")

    headerName.innerText = element.innerText
    headerDescription.innerText = typesArrs.description[i]
    currentLocation.innerText = element.innerText
}

const filterLiDesktop = document.querySelectorAll("#desktop .filter-options-content .category li")
const filterLiTablet = document.querySelectorAll("#tablet .filter-options-content .category li")
function showNutsTypePage(filterLi){
    for (let i = 0; i < filterLi.length; i++) {
        filterLi[i].addEventListener("click", () => {
            displayNutsType(i)
            rename(filterLi[i], i)
        });
    
    }
}
showNutsTypePage(filterLiDesktop)
showNutsTypePage(filterLiTablet)
///////////////////////////////////////////////////////////////////////////

//Sorted lists functions. Represent all items on the page by two oprions: product name or price

function sortByPrice() {
    let items = {
        names: [],
        prices: [],
        images: [],
        class: []
    }

    const itemsPrices = document.querySelectorAll(".price")
    const itemsNames = document.querySelectorAll(".item-link")
    const itemsImg = document.querySelectorAll(".image-wrapper")
    for (let i = 0; i < itemsPrices.length; i++) {
        items.prices.push(itemsPrices[i].innerText.substring(3))
        items.names.push(itemsNames[i].innerText)
        items.images.push(itemsImg[i].style.backgroundImage)
        items.class.push(itemsImg[i].classList[1])
    }

    let sortedItems = {
        names: [],
        prices: [],
        images: [],
        class: []
    }

    let index;
    let min;
    for (let i = 0; i < items.prices.length; i++) {
        for (let k = 0; k < items.prices.length; k++) {
            if (items.prices[k] != 0) {
                min = items.prices[k]
                index = k
                break;
            }
        }
        for (let j = 0; j < items.prices.length; j++) {
            if (items.prices[j] < min && items.prices[j] != 0) {
                min = items.prices[j]
                index = j
            }
        }
        items.prices[index] = 0
        sortedItems.prices.push(min)
        sortedItems.names.push(items.names[index])
        sortedItems.images.push(items.images[index])
        sortedItems.class.push(items.class[index])
    }

    return sortedItems

}

function sortByName(){
    const name = document.querySelector("#header-name h1")
    const li = document.querySelectorAll("#desktop .category li")
    for(let i=0; i<li.length; i++){
        if(name.innerText == li[i].innerText){
            return typesArrs.arrays[i]
        }
    }
}

function displaySort(sorted) {
    clear()
    for (let i = 0; i < sorted.prices.length; i++) {
        addItemSorted(sorted, i)
        console.log(sorted.images[i])
    }
}

//modify addItem function to use it with two parameters
function addItemSorted(items, i) {
    addItem(items.class[i], items.images[i], items.names[i], items.prices[i])
}

const sortButton = document.querySelector("#sort-button")


sortButton.addEventListener("click", () => {
    const sortedItemsByPrice = sortByPrice()
    const sortValue = document.querySelector("#sort").value
    if (sortValue == "price") {
        displaySort(sortedItemsByPrice)
    } else if (sortValue == "product-name") {
        clear()
        displayArray(sortByName())
    } else {
        clear()
        displayArray(mixedArray)
    }
})

///////////////////////////////////////////////////////////////////////////////////////////////////

//Filters-options / categories show them on '+' click and hide on '-' click

const filterOptionsContent = document.querySelectorAll(".filter-options-content")
const filterOptionsTitle = document.querySelectorAll(".filter-options-title")
const filterOptionsContentUl = document.querySelectorAll(".filter-options-content ul")
const expand = document.querySelectorAll(".expand i")

for (let i = 0; i < filterOptionsTitle.length; i++) {
    filterOptionsTitle[i].addEventListener("click", () => {
        filterOptionsContent[i].classList.toggle("hide")
        if (filterOptionsContent[i].classList.contains("hide")) {
            expand[i].classList.remove("fa-minus")
            expand[i].classList.add("fa-plus")
        } else {
            expand[i].classList.remove("fa-plus")
            expand[i].classList.add("fa-minus")
        }
        filterOptionsContentUl[i].classList.toggle("none")

    })
}
