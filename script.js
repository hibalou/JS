
//Les dfférentes variables

//var est function scope
    var toto ="bonjour"; 

//let et const sont block scope elle sont valable au bloc auquel elle sont rattaché (elle doivent etre applé au début pour être utilise sur tous le document
// si elle est appelé dans un bloc elle ne seras utilisée que dans se bloc)
    let by = 12; 
    const jojo = "au revoir"; //stocker les constantes (variables qui ne change jamais)


const API = 120196140394;

// Les types de variables : 

// string = chaine de caractère
// number = nombre
// boolean = booléen (true or false)
// object = objet
// array = tableau
// function = fonction

console.log(API);

// mon commentaire sur une ligne

/*
mon commentaire
sur plusieurs lignes
*/


/* Opérations

    + l'addition
    -  la soustraction
    *  la multiplication
    / la division
    % le modulo

*/

let ma_chaine1 = "Hello " + "monde" ;
console.log(ma_chaine1)


let ma_chaine2 = "55";
ma_chaine2 = parseInt(ma_chaine2)
let ma_chaine3 = 8;

let result = ma_chaine2 + ma_chaine3;

console.log(result);

// parseInt --> permet de changer une chaine de caractère en nombre 
// ex = ma_chaine1 = parseInt(ma_chaine1);

console.log (typeof(ma_chaine1)); // permet d'afficher le type de caractère utilise (nb, chaine de caractères..)

/* Incrémentation /décrémentation

    ++ ajoute 1
    -- enlève 1
    += ajouter un nombre a un autre
    -= , *= , /=; %=

*/

let nombre= 85 ; 
nombre++
nombre -= 15;

console.log(nombre);

/* Opérateur logique 

&& le ET
|| le OU

*/

let pomme = "verte";

// si il y a pomme ET poire
// pomme && poire, renvoie faux
// pomme || poire, renvoie true



/* Opérateur de comparaison

    == , égal à ..
    ===, contenu et type de la variable est égal

*/

let nombre1 = 5 
nombre1 === 5
let chaine1 = "5"

// nombre1 == chaine1, renvoie true
// nombre1 === chaine1, renvoie false



/* 
    !=, différent de 
    !==, contenu et type différent de 
    >, supérieur à 
    >=, supérieur ou égal 
    <, inférieur à 
    <=, inférieur ou égal 
*/ 

// 6 > 5, true
// 5 != 5, false 



/* Les Conditions


    if... else = une conddition SI SINON

    mot clé: if, else, else if




    if(condition) {
        si elle est vrai je fais ça
    }else if(condition){

    }
    else{
        sinon je fais ca si c'est faux
    }

*/

let num = 25; 
let Num = 25; 
let num2 = 25;


if (num=== num2) {
    console.log("C'est vrai");
    num++; //incrémente de 1
    if (num !== num2){
        console.log("Enfaite c'est faux");
    }
} else {
    console.log ("C'est faux");
}


//méthode prompt(), ça permet de générer une zone de saisie sur le navigateur et de récupérer la valeur

// let age = prompt ("Veuillez saisir votre âges");

// console.log(age);

// Exercice : 

/*

    Avec la méthode prompt(), comparer l'âge avec un nombre fixe.
    exemple âge < 18,  et afficher dans la console un texte en rapport
    Enchainer les if, else if et else pour tester tous les cas de figure


*/

let age = prompt ("veuillez saisir votre âge");
if (age<18){
    console.log("vous êtes mineur");
}
else if(age>18 && age<25){
    console.log("vous êtes majeurs");

} else if (age >= 25 && age <= 30) {
    console.log("Vous avez peut être des enfants")

}else if (age > 65){
    console.log("vous êtes en bonne santé")
}
else{
    console.log("erreur")
}





