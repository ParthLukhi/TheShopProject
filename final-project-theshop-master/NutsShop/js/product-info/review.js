//Creating review block elements for posting there reviews
function createReview(name, text, heading, time, numStars) {
    //parent element - reviewBlock
    const reviewBlock = document.querySelector(".review-block")

    //Children of reviewBlock: 
    // 1. reviewName
    // 2. rating
    // 3. review-text
    // 4. who
    // 5. when

    //1
    const reviewName = document.createElement("div")
    reviewName.classList.add("review-name")
    reviewName.innerText = heading
    reviewBlock.appendChild(reviewName)

    //2
    const rating = document.createElement("div")
    rating.classList.add("rating")
    reviewBlock.appendChild(rating)

    //Children of rating:
    // 2.1. ratingName
    // 2.2. stars

    //2.1
    const ratingName = document.createElement("div")
    rating.appendChild(ratingName)

    //2.2
    const stars = document.createElement("div")
    stars.classList.add("stars")
    rating.appendChild(stars)

    //Children of stars
    for (let i = 0; i < numStars; i++) {
        const greenStars = document.createElement("i")
        greenStars.classList.add("fa")
        greenStars.classList.add("fa-regular")
        greenStars.classList.add("fa-star")
        greenStars.classList.add("starGreen")
        stars.appendChild(greenStars)
    }

    //3
    const reviewText = document.createElement("div")
    reviewText.classList.add("review-text")
    reviewText.innerText = text
    reviewBlock.appendChild(reviewText)

    //4
    const who = document.createElement("div")
    who.classList.add("who")
    who.innerText = name
    reviewBlock.appendChild(who)

    //5
    const when = document.createElement("div")
    when.classList.add("when")
    when.innerText = time
    reviewBlock.appendChild(when)

}


function getPostDate() {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + ' ' + time;
    return dateTime
}


// Getting data from submission form to post this review
const nickname = document.querySelector("#nickname")
const summary = document.querySelector("#summary")
const formReview = document.querySelector("#form-review")
const submitReview = document.querySelector("#submit-review")

const nicknameWarning = document.querySelector("#nickname-warning")
const summaryWarning = document.querySelector("#summary-warning")
const reviewWarning = document.querySelector("#review-warning")



// clicking on submit review button the review will be posted
submitReview.addEventListener("click", () => {

    nicknameWarning.innerHTML = ""
    summaryWarning.innerText = ""
    reviewWarning.innerText = ""

    //checking if all inputs were entered by user
    if (nickname.value == "") {
        nicknameWarning.innerHTML = "Enter your nickname"
    } else if (summary.value == "") {
        summaryWarning.innerText = "Enter your summary"
    } else if (formReview.value == "") {
        reviewWarning.innerText = "Enter your review"
    } else {

        // counting how many stars in review
        const greenGrayStars = document.querySelectorAll("#review-form .stars *")
        let greens = 0
        for (let i = 0; i < greenGrayStars.length; i++) {
            if (greenGrayStars[i].classList.contains("starGreen")) {
                greens++
            }

        }

        console.log(greens)
        // Storing user's data in reviewData object
        const reviewData = {
            nickname: nickname.value,
            text: formReview.value,
            heading: summary.value,
            time: getPostDate(),
            numStars: greens
        }

        // Each object reviewData will be stored as a value in localStorage. Key for each object will be number starting from 0.
        // Here this number is generated each time the user submit his review.
        // For the first review it will be null, so if it is null, it is set to 0,
        // otherwise the nameNumber key is incremented each time the user submit the review
        if (localStorage.getItem("nameNumber") == null) {
            localStorage.setItem("nameNumber", 0)
        } else {
            localStorage.setItem("nameNumber", Number(localStorage.getItem("nameNumber")) + 1)
        }

        // Storing each reviewData object in localstorage. Each object can be retrived by his key
        // that was set as a number from 0 to the number of submited reviews
        localStorage.setItem(localStorage.getItem("nameNumber"), JSON.stringify(reviewData))



        //show review
        createReview(nickname.value, formReview.value, summary.value, getPostDate(), greens)

        //giving all stars again grey colour after submitting the review
        for (let i = 0; i < greenGrayStars.length; i++) {
            greenGrayStars[i].classList.add("starGrey")
            greenGrayStars[i].classList.remove("starGreen")
            
        }

        //clear all inputs after sub,itting the review
        nickname.value = ""
        formReview.value = ""
        summary.value = ""

    }


})

// Retrieving data from local storage so when the window is reload the data will be displayed there in any case.
// As a nameNumber key in local storage is a number from zero till amount of all submited reviews,
// loop will go throug all this reviews using nameNumber key as an index and retrieveing all objects that are stored there.
// Then it will print all of them
if (!(localStorage.getItem("nameNumber") == null)) {
    for (let i = 0; i <= Number(localStorage.getItem("nameNumber")); i++) {
        let objectData = JSON.parse(localStorage.getItem(i))
        console.log(objectData)
        createReview(objectData.nickname, objectData.text, objectData.heading, objectData.time, objectData.numStars)
    }
}




//rating by stars

const reviewStars = document.querySelectorAll("#review-form .stars *")

for (let i = 0; i < reviewStars.length; i++) {
    reviewStars[i].addEventListener("mouseover", () => {
        for (let j = 0; j < reviewStars.length; j++) {
            if (j <= i) {
                reviewStars[j].classList.add("starGreen")
                reviewStars[j].classList.remove("starGray")
            } else {
                reviewStars[i].classList.add("starGreen")
                reviewStars[i].classList.remove("starGray")
                reviewStars[j].classList.remove("starGreen")
                reviewStars[j].classList.add("starGray")
            }

        }
    })

    reviewStars[i].addEventListener("mouseout", () => {
        for (let j = 0; j < reviewStars.length; j++) {
            if (j > i) {
                reviewStars[j].classList.remove("starGreen")
                reviewStars[j].classList.add("starGray")
            }

        }
    })

    reviewStars[i].addEventListener("click", () => {
        reviewStars[i].classList.add("starGreen")
        reviewStars[i].classList.remove("starGray")
    })

}


// display stars in posting reviews



