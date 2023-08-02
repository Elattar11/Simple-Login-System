let regExSignupName = /^[A-Z]/;

let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

let regexPass = /^[0-9a-zA-Z]{8}/;

let btnSignUp = document.getElementById("btnSignUp");

let exist = document.getElementById("exist");

let signupEmail = document.getElementById("signupEmail");

let signupPassword = document.getElementById("signupPassword");

let signupName = document.getElementById("signupName");

let incorrectSignU = document.getElementById("incorrectSignU");

let popUp = document.querySelector(".popUp");

let ok = document.getElementById("ok");

let alertSpan = document.getElementById("alertSpan");

let closeIcn = document.querySelector(".fa-rectangle-xmark");

let existName;

let myData; 
if(localStorage.getItem("ourStorage") == null)
    {
        myData = [];
    }
    else
    {
        myData = JSON.parse(localStorage.getItem("ourStorage"));
    }


btnSignUp.addEventListener("click" , function()
{
    if (signupName.value == "") 
    {
        incorrectSignU.innerHTML = "Please Enter Your Name";
        exist.classList.replace("d-none","d-block" );
        return;
    }
    if(signupEmail.value == "")
    {
        incorrectSignU.innerHTML = "Please Enter Your Email Address";
        exist.classList.replace("d-none","d-block" );
        return;
    }

    if(signupPassword.value == "")
    {
        incorrectSignU.innerHTML = "Please Enter Your Password";
        exist.classList.replace("d-none","d-block" );
        return;
    }
    if(!regExSignupName.test(signupName.value))
    {
        incorrectSignU.innerHTML = "First Character of name must be capital";
        exist.classList.replace("d-none","d-block" );
        return;
    }
    if(!regexEmail.test(signupEmail.value))
    {
        incorrectSignU.innerHTML = "Please enter valid email address";
        exist.classList.replace("d-none","d-block" );
        return;
    }
    if(!regexPass.test(signupPassword.value))
    {
        incorrectSignU.innerHTML = "Password must contain 8 digits";
        exist.classList.replace("d-none","d-block" );
        return;
    }

    exist.classList.replace("d-block", "d-none");
    addUser();


});



function addUser()
{
    for (let i = 0; i < myData.length; i++) {
        if(myData[i].email == signupEmail.value)
        {
            popUp.classList.remove("d-none");
            alertSpan.textContent = "Email Already Exist !!!";
            alertSpan.classList.add("text-danger");
            existName = true;
            clearData();
            break;
        }
        
    }
    if( existName != true)
    {
        var userData = 
        {
            name : signupName.value, 
            email : signupEmail.value, 
            pass : signupPassword.value
        };

        pushInArray(myData , userData); 
        clearData();

        reloadPage();
    }
    else
    {
        return;
    }
    
}

function pushInArray(arr , obj)
{
    arr.push(obj);
    addInLocalStorage(arr);
}

function addInLocalStorage(arr)
{
    localStorage.setItem("ourStorage" , JSON.stringify(arr))
}


function clearData()
{
    signupEmail.value = "";
    signupName.value = "";
    signupPassword.value = "";
}

function reloadPage()
{
    popUp.classList.remove("d-none");
    alertSpan.textContent = "User Added Successfully";
    alertSpan.classList.add("text-success");
}




ok.addEventListener("click" , function(){
    popUp.classList.add("d-none");
});

closeIcn.addEventListener("click" , function(){
    popUp.classList.add("d-none");
});



