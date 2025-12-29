let email = document.querySelector("#email");
let password = document.querySelector("#password");

// let userEmail = "bilal@gmail.com";
// let userPassword = "abc123";

// document.addEventListener("keydown", function(val){
//     console.log(val)
//     if(val.key == "Enter"){
//         val.preventDefault();
//         logInUser()
//     }
// })

let userData = []

function reDirect() {
    let status = localStorage.getItem("login")
    if (status == true) {
        window.location.href = "./dashboard.html"
    }
}
reDirect()

function logInUser() {
    if (email.value == "") {
        Toastify({
            text: " please Enter Email",
            className: "info",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    }

    else if (password.value == "") {
        Toastify({
            text: "please Enter Password",
            className: "info",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    }
    else{
        let existUser = false;
        let selectedIndex = "";
        for(var i=0; i < userData.length; i++){
            if(userData[i].email== email.value){
                existUser = true;
                selectedIndex = i;
                break
            }
        }
        if(existUser == true){
            console.log(userData[selectedIndex])
            if(userData[selectedIndex].password == password.value){
                localStorage.setItem("login", true)
                localStorage.setItem("email", email.value)
                localStorage.setItem("name",userData[selectedIndex].name)
                Toastify({
            text: "Login s-u-c-c-e-s-s-f-u-l-l-y",
            className: "info",
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            style: {
                background: "linear-gradient(to right, #48f0ddff, #3dafc9ff)",
            }
        }).showToast();
        setTimeout(() => {
            window.location.href = "./dashboard.html"
        }, 1000)

            }

            else{
                Toastify({
            text: "Invalid Password ",
            className: "info",
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
            }
        }
        else{
            Toastify({
            text: "Please Signup...!! You are not Register ",
            className: "info",
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
        }
    }

    function setData(){
    let userInfo = localStorage.getItem("users");
    userData = JSON.parse(userInfo);
    console.log(userInfo);
    console.log(userData)
}

setData()


    // else if (email.value != userEmail) {
    //     Toastify({
    //         text: "User is not register",
    //         className: "info",
    //         style: {
    //             background: "linear-gradient(to right, #00b09b, #96c93d)",
    //         }
    //     }).showToast();
    // }


    // else if (password.value != userPassword) {
    //     Toastify({
    //         text: "invalid Password",
    //         className: "info",
    //         style: {
    //             background: "linear-gradient(to right, #00b09b, #96c93d)",
    //         }
    //     }).showToast();
    // }
    // else {
    //     console.log(email.value, password.value);
    //     localStorage.setItem("login", true);
    //     localStorage.setItem("email", email.value);
    //     Toastify({
    //         text: "Login s-u-c-c-e-s-s-f-u-l-l-y",
    //         className: "info",
    //         gravity: "bottom", // `top` or `bottom`
    //         position: "center", // `left`, `center` or `right`
    //         style: {
    //             background: "linear-gradient(to right, #48f0ddff, #3dafc9ff)",
    //         }
    //     }).showToast();
    //     setTimeout(() => {
    //         window.location.href = "./dashboard.html"
    //     }, 1000)


    // }




}