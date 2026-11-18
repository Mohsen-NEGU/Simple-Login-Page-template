var fullName = document.getElementById("fullname");
var email = document.getElementById("email");
var phoneNumber = document.getElementById("phone-number");
var password = document.getElementById("password");


fullName.addEventListener("input", function(event){
    document.getElementById("fullNameError").innerHTML = validation("string" , event.target.value);
});
email.addEventListener("input", function(event){
    document.getElementById("emailError").innerHTML = validation("email" , event.target.value);
});
phoneNumber.addEventListener("input", function(event){
    document.getElementById("phoneNumberError").innerHTML = validation("number" , event.target.value);
});

password.addEventListener("input", function(event){
    document.getElementById("passwordError").innerHTML = validation("password" , event.target.value);
});


function validation(type , value){
    var errorMessage = "";

    switch(type){
        case "nothing":
            if(1 == true){
                errorMessage = "Your input is empty";
            }
            break
        case "number":
            var regex = /^-?\d+$/;
            if (!regex.test(value)){
                errorMessage = "Sorry , Your input is not number";
            }
            break
        case "string":
            var regex = /^[A-Za-zآ-ی ]+$/;
            if (!regex.test(value)){
                errorMessage = "Sorry , Your input is not string";
            }
            break
        case "email":
            var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regex.test(value)){
                errorMessage = "Sorry , Your email not assesdinite";
            }
            break
        case "password":
            var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!regex.test(value)){
                errorMessage = "Sorry , Your email not assesdinite";
            }
            break
    }
    return errorMessage;
}