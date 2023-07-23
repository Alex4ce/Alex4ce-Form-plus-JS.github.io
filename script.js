let login = document.getElementById("login");
let password = document.getElementById("password");
let text = document.querySelector("p");
let button = document.querySelector("button");
let hide = document.querySelector(".hide");


//Button SPAN to hide and show the password
hide.addEventListener('click', function(){
    if(password.type == "text"){
        password.type = "password";
    } else{
        password.type = "text";
    }
});

//Action button to submit the data and say what's wrong
function Submit(){
    if(login.value.length == 0 || password.value.length == 0){
        text.textContent = "Enter login or password";
        text.style.color = 'rgb(252, 87, 87)';
    }else if(login.value == password.value){
        text.textContent = "Login and password can't be the same";
        text.style.color = 'rgb(252, 87, 87)';
    } else if(+password.value[0] === Number(0) || password.value[0] === password.value[0].toLowerCase()){
        text.textContent = "The password can't start with a number or with the lowercase";
        text.style.color = 'rgb(252, 87, 87)';
    } else if (String(password.value).length <= 7) {
        text.textContent = "Password must have at least 8 characters";
        text.style.color = 'rgb(252, 87, 87)';
    }else {
        text.textContent = "Welcome!";
        text.style.color = 'green';
    }
}

