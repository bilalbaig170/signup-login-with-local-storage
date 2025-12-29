let email = document.querySelector("#email");
let password = document.querySelector("#password");
let userName = document.querySelector("#name");

let userData = [
    
];

function signUp(){
    if(userName.value == ""){
        Toastify({
            text: "Please Enter Your Name",
            className: "info",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    }

    else if(email.value == ""){
        Toastify({
            text: "Please Enter Your Email",
            className: "info",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    }
    else if(password.value == ""){
        Toastify({
            text: "Please Enter Your Password",
            className: "info",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    }
    else {
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
            Toastify({
            text: "Email Already Exist",
            className: "info",
            gravity: "bottom",
            position: "center",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
        }
        else{
            userData.push({
                email: email.value,
                password: password.value,
                name: userName.value
            })

            Toastify({
            text: "Signup s-u-c-c-e-s-s-f-u-l-l-y",
            className: "info",
            gravity: "bottom",
            position: "center",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();

            localStorage.setItem("users",JSON.stringify(userData));


            setTimeout(() => {
                window.location.href = "./login.html"
            },1000)
            
        }
    }
}

function setData(){
    let userInfo = localStorage.getItem("users");
    userData = JSON.parse(userInfo) || [];
    console.log(userInfo);
    console.log(userData)
}

setData()