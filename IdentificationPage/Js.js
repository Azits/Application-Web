document.getElementById("LienConnection").addEventListener("click",function(e){
    var erreur;
    var identifiant=document.getElementById("Pseudonyme");
    var password=document.getElementById("password");
    if (!identifiant.value){
        erreur="Il faut l'identifiant";
    }
    else if (!password.value){
        erreur="il faut un mot de pass";
    }
    else if(identifiant.value!= "Azits"){
        erreur="Pseudonyme incorrecte"
    }
    else if (password.value!= "Azits" ){
        erreur= "Mot de passe incorrecte";
    }

    
    if (!password.value && !identifiant.value){
        erreur="les champs Pseudonyme et mot de passe doivent etre saisie"
    }
 
    if (erreur){
        e.preventDefault();
        document.getElementById("erreur").innerHTML=erreur;

    }

})