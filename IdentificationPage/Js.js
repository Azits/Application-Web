document.getElementById("connection").addEventListener("submit",function(){
    var erreur;
    var identifiant=document.getElementById("identifiant");
    var password=document.getElementById("password");
    if (!identifiant.value){
        erreur="Il faut l'identifiant";
    }
    if (!password.value){
        erreur="il faut un mot de pass";
    }
    if (erreur){
        document.getElementById("erreur").innerHTML=erreur;
    }

})