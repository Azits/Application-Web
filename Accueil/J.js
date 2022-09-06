let menu=document.querySelector('.menue');
let navigation=document.querySelector('.navigation');
let main=document.querySelector('.main');
let racourcie=document.querySelector('.racourcie');

menu.onclick= function(){
    navigation.classList.toggle('active');
    main.classList.toggle('active');
    racourcie.classList.toggle('active');

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
////////////////////////////////////////////////Modale Pour Ajouter des notes//////////////////////////////////////////

const addNotes=document.querySelectorAll(".addNotes");
for (const addNote of addNotes){
    addNote.addEventListener("click", function(){

        let matieres=document.querySelectorAll(".matiere");
        addNotes[0].onclick=function(){
            document.getElementById("math").classList.toggle("afficher");
        }
        addNotes[1].onclick=function(){
            document.getElementById("scienceDeLaMatiere").classList.toggle("afficher");
        }
        addNotes[2].onclick=function(){
            document.getElementById("informatique").classList.toggle("afficher");
        }
        addNotes[3].onclick=function(){
            document.getElementById("langue").classList.toggle("afficher");
        }
        addNotes[4].onclick=function(){
            document.getElementById("sport").classList.toggle("afficher");
        }
        addNotes[5].onclick=function(){
            document.getElementById("pix").classList.toggle("afficher");
        }

    });
}
////////////////////////////////////////////////Donné sur les matiere/////////////////////////////////////////////
function Moyenne(matiere){
    let tailleTableau=matiere.notes.length;

    let somme=0;
    let moyenne=0;
    for(let i=0; i<tailleTableau; i++){
        somme = matiere.notes[i]+somme;
    }
    moyenne=somme/tailleTableau;
    return moyenne;

}
const math={
    notes:[20,10],
    coeffiscient:12,
    moyenne:Moyenne(math),
};
const scienceDeLaMatiere={
    notes:[],
    coeffiscient:6,
    moyenne:Moyenne(math),
};
const Informatique={
    notes:[],
    coeffiscient:6,
    moyenne:Moyenne(math),
};
const Langue={
    notes:[],
    coeffiscient:2,
    moyenne:Moyenne(math),
};
const sport={
    notes:[],
    coeffiscient:1,
    moyenne:Moyenne(math),
};
const Pix={
    notes:[],
    coeffiscient:3,
    moyenne:Moyenne(math),
};





