let menu=document.querySelector('.menue');
let navigation=document.querySelector('.navigation');
let main=document.querySelector('.main');
let racourcie=document.querySelector('.racourcie')
menu.onclick= function(){
    navigation.classList.toggle('active');
    main.classList.toggle('active');
    racourcie.classList.toggle('active')

};
let list=document.querySelectorAll(".navigation li");
function activeLink(){
    list.forEach((item)=>
    item.classList.remove("hovered"));
    this.classList.add("hovered");
    
}
let tbody=document.getElementsByTagName("tbody");

const modalContener=document.querySelector(".modalContener");
const modaltrigger= document.querySelectorAll(".modal-trigger");
modaltrigger.forEach(trigger => trigger.addEventListener("click",toogleModal))
function toogleModal(){
    modalContener.classList.toggle("active");
}
