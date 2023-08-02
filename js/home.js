let myName = document.getElementById("myName");


let loggedName =JSON.parse(localStorage.getItem('loggedUser')) ;

let btnLogOut = document.getElementById("btnLogOut");

let popUp = document.querySelector(".popUp");

let closeIcn = document.querySelector(".fa-rectangle-xmark");

let btnYes = document.getElementById("Yes");

let btnNo = document.getElementById("No");

myName.innerHTML = `Welcome ${loggedName}`



function logout()
{
    popUp.classList.replace("d-none" , "d-block");
    alertSpan.textContent = "Are you want to logout? ";
    alertSpan.classList.add("text-danger");
}

btnNo.addEventListener("click" , function(){
    popUp.classList.add("d-none");
});

closeIcn.addEventListener("click" , function(){
    popUp.classList.add("d-none");
});

btnYes.addEventListener("click" , function(){
    location.replace('./index.html');
});




