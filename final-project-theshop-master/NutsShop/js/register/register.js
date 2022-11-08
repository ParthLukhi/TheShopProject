const fname = document.querySelector("#fname")
const lname = document.querySelector("#lname")
const birth = document.querySelector("#birth")
const gender = document.querySelector("#gender")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirm")
const createAccount = document.querySelector("#create-account")

const inputArray = [fname, lname, email, password, confirmPassword]
const user = {
    firstname: "",
    lastname: "",
    dateOfBirth: "",
    genderOfUser: "",
    emailOfUser: "",
    passwordOfUser: ""
}
let users = []
let count = 0
createAccount.addEventListener("click", () => {
    count = 0

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].value == "") {
            inputArray[i].nextElementSibling.innerText = "Please enter valid information"
            inputArray[i].nextElementSibling.style.color = "red"
        } else {
            inputArray[i].nextElementSibling.innerText = ""
            if (confirmPassword.value != password.value) {
                confirmPassword.nextElementSibling.innerText = "not match with password"
                confirmPassword.nextElementSibling.style.color = "red"
            } else {
                count++
            }
        }

    }

    if (count == inputArray.length) {
        user.firstname = fname.value
        user.lastname = lname.value
        user.dateOfBirth = birth.value
        user.genderOfUser = gender.value
        user.emailOfUser = email.value
        user.passwordOfUser = password.value

        users = JSON.parse(localStorage.getItem("users") || "[]");

        users.push(user)

        localStorage.setItem("users", JSON.stringify(users));

        location.href = "./login.html"
    }

})








