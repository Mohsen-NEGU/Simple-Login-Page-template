var fullName = document.getElementById("fullname");
var phoneNumber = document.getElementById("phone-number");
// var password = document.getElementById("password");

firstName.addEventListener("input", function(event){
    document.querySelector("error-massage").innerHTML = validation("string" , event.target.value)
});

phoneNumber.addEventListener("input", function(event){
    document.querySelector("error-massage").innerHTML = validation("number" , event.target.value)
});
// password.addEventListener("input", function(event){
//     document.querySelector("error-massage").innerHTML = validation("password" , event.target.value)
// });


function validation(type , value){
    var errorMessage = '';

    switch(type){
        case "nothing":
            if(1 == true){
                errorMessage = "Your input is empty";
            }
        break
        case "number":
            var regex = /^-?\d*$/;
            if (!regex.test(value)){
                errorMessage = "Sorry , Your input is not number";
            }
            break
        case "string":
            var regex = /^[A-Za-z]*$/;
            if (!regex.test(value)){
                errorMessage = "Sorry , Your input is not string";
            }
            break
        // case "password":
        //     var regex = /^[A-Za-z]*$/;
        //     if (!regex.test(value)){
        //         errorMessage = "Sorry , Your password not assesdinite";
        //     }
        //     break
    }
}