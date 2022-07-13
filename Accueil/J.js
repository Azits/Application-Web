let menu=document.querySelector('.menue');
let navigation=document.querySelector('.navigation');
let main=document.querySelector('.main');
menu.onclick= function(){
    navigation.classList.toggle('active');
    main.classList.toggle('active');

};
let list=document.querySelectorAll(".navigation li");
function activeLink(){
    list.forEach((item)=>
    item.classList.remove("hovered"));
    this.classList.add("hovered");
    
}
list.forEach((item)=>
item.addEventListener("mouseover",activeLink))

document.querySelector("aideEnvoi").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();
    let email=document.querySelector(".email").value;
    let message=document.querySelector(".message").value;
    saveContectInfo(email,message);
}
