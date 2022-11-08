const email = document.querySelector("#email")
const password = document.querySelector("#password")
const signInButton = document.querySelector("#sign-in-button")


signInButton.addEventListener("click", ()=>{
email.nextElementSibling.innerText = ""
password.nextElementSibling.innerText = ""
let countEmail = 0
let countPassword = 0
    if(email.value == ""){
        email.nextElementSibling.innerText = "Put your email, please"
        email.nextElementSibling.style.color = "red"
    }else if(password.value == ""){
        password.nextElementSibling.innerText = "Put your password, please"
        password.nextElementSibling.style.color = "red"
    }else{
        let users = JSON.parse(localStorage.getItem("users") || "[]");
        for (let i = 0; i < users.length; i++) {
            if(users[i].emailOfUser != email.value){
                countEmail++
            }
            if(users[i].passwordOfUser != password.value){
                countPassword++
            }
            
        }

        if(countEmail==users.length){
            email.nextElementSibling.innerText = "There is no such email in our registered users. Please, register first"
        }else if(countPassword==users.length){
            password.nextElementSibling.innerText = "Incorrect password"
        }else{
            location.href="../html/signed-in.html"
            console.log("hello")
        }

        
    }


})


const registerButton = document.querySelector("#register-button")

registerButton.addEventListener("click", ()=>{
    location.href="../html/register.html"
});


const signUpButton = document.querySelector("#sign-up-button")

signUpButton.addEventListener("click", ()=>{
    location.href="../../Books/sign_in.html"
})