let userEmail = document.querySelector("#userEmail")
let userName = document.querySelector("#name") ;

function setUserEmail(){
    let email = localStorage.getItem("email");
    userEmail.innerText = email;
    let name = localStorage.getItem("name");
    userName.innerText = name

    if(email == null){
        window.location.href ="./login.html"
    }
    
}
function logout(){
        // localStorage.clear()
        localStorage.setItem("login", false)
        Toastify({
            text: "Logout s-u-c-c-e-s-s-f-u-l-l-y",
            className: "info",
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            style: {
                background: "linear-gradient(to right, #48f0ddff, #3dafc9ff)",
            }
        }).showToast();
        setTimeout(() => {
            window.location.href = "./login.html"
        }, 1000)
    }

setUserEmail()