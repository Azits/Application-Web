

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

        addNotes[0].onclick=function(){
            document.querySelectorAll("#math  #MoyenneMath").classList.toggle("afficher");
            
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Moyenne(T){
    let moyenne=0;
    

    for (let i=0; i<T.length; i++ ){
      moyenne= T[i]+moyenne;
    }
    return moyenne;

}
function noteCoeff(note,coeffiscient){
    let noteFinal=0;
    if (coeffiscient>0 && coeffiscient<= 1){
        noteFinal=note*coeffiscient;
    }
    else if (coeffiscient>1 && coeffiscient<=100){
        noteFinal=note*coeffiscient/100;
    }
    else{
        alert("veuillez sesir un coeffiscient valide")
    }
    
}
function ajouterNotesAvecCoefficient(matiere,notes){
    matiere.notesAvecCoeffiscient.push(notes);
}

const math={
    notes:[20,10],
    notesAvecCoeffiscient:[],
    coeffiscient:12,
    moyenne:0,
};
ajouterNotesAvecCoefficient(math,noteCoeff(12,50));
math.moyenne=Moyenne(math.notesAvecCoeffiscient);






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Ajouter=document.querySelectorAll(".ajouter");
var moyenneMath=document.getElementById("MoyenneMath");

for (const ajouter of Ajouter){
    ajouter.addEventListener("click",function(){
        Ajouter[0].onclick=function(){
            document.getElementById("math").classList.remove("afficher");
            ajouterNotesAvecCoefficient(math,noteCoeff(parseFloat(document.getElementById("Math").value),parseFloat(document.getElementById("coeffMath").value )));
            math.moyenne=Moyenne(math.notesAvecCoeffiscient);
            let moyenne=math.moyenne;
            let placeAfffichage=document.getElementById("MoyenneMath");
            placeAfffichage.innerHTML=moyenne;
            
            
        }
        Ajouter[1].onclick=function(){
            document.getElementById("scienceDeLaMatiere").classList.remove("afficher");
        }
        Ajouter[2].onclick=function(){
            document.getElementById("informatique").classList.remove("afficher");
        }
        Ajouter[3].onclick=function(){
            document.getElementById("langue").classList.remove("afficher");
        }
        Ajouter[4].onclick=function(){
            document.getElementById("sport").classList.remove("afficher");
        }
        Ajouter[5].onclick=function(){
            document.getElementById("pix").classList.remove("afficher");
        }
    })
}


