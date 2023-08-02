let signinEmail = document.getElementById("signinEmail");

let signinPassword = document.getElementById("signinPassword");

let btnSignIn = document.getElementById("btnSignIn");

let inncorrectSpan = document.getElementById("inncorrectSpan");

let incorrect = document.getElementById("incorrect");

let userData = JSON.parse(localStorage.getItem("ourStorage"));

let popUp = document.querySelector(".popUp");

let ok = document.getElementById("ok");

let alertSpan = document.getElementById("alertSpan");

let closeIcn = document.querySelector(".fa-rectangle-xmark");

let myName = document.getElementById("myName");

let homeLink = document.getElementById("homeLink");

let homePage = "home.html";

let existUser;

let loggedUser = [];

console.log(userData);



function loginUser()
{
    if(signinEmail.value == "")
    {
        inncorrectSpan.innerHTML = "Please Enter your Email Address";
        incorrect.classList.replace("d-none","d-block" );
        return;
    }
    if (signinPassword.value == "") 
    {
        inncorrectSpan.innerHTML = "Please Enter your Password";
        incorrect.classList.replace("d-none","d-block" );
        return;
    }

    for (let i = 0; i < userData.length; i++) 
    {
        if((userData[i].email == signinEmail.value) && (userData[i].pass == signinPassword.value))
        {
            
            
            existUser = true;
            localStorage.setItem("loggedUser" , JSON.stringify(userData[i].name))
            break;
        }
        else
        {
            popUp.classList.remove("d-none");
            alertSpan.textContent = "Invalid Email or Password !!!";
            alertSpan.classList.add("text-danger");
            clearData();
        }



    }

    if(existUser == true)
    {
        location.replace('./home.html');
    }

}

function cancelAlert()
{
    popUp.classList.add("d-none");
}



function clearData()
{
    signinEmail.value = "";
    signinPassword.value = "";
}



