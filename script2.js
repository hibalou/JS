var toto = "bonjour"; //var est function scope 
let bye = 12; // let et const sont block scope
const jojo = "au revoir"; // stocker des constante

const API = "24s5f4esfsefes54se";

let calcul = 5 + 6;

let isTrue = false;
//LES TYPES DE VARIABLES

// string = chaine de caractère
// number = nombre
// boolean = booléen
// object = objet
// array = tableau
// function = fonction

console.log(calcul);

// mon commentaire sur une ligne

/*
mon commentaire
sur plusieurs lignes
*/

// Opérations

// + l'addition 
// - la soustraction
// * la multiplication
// / la division
// % le modulo

let ma_chaine1 = "5";
//ma_chaine1 = parseInt(ma_chaine1); // transformer une chaine de caractère en nombre
let ma_chaine2 = 45;

let result = ma_chaine1 + ma_chaine2

console.log(result);
console.log(typeof(ma_chaine1));

// Incrémentation / décrémentation

// ++ ajoute 1
// -- enlève 1
// += ajouter un nombre à un autre
// -=, *=, /=; %=

let nombre = 85;
nombre -= 15;

console.log(nombre);

// Opérateur logique

// && le ET
// || le OU 

let pomme = "verte"
// si il y a pomme ET poire
// pomme && poire, revoie faux
// pomme || poire, revoie true

// Opérateur de comparaison 

// ==, égal à
// ===, contenu et type de la variable est égal

let nombre1 = 5
let chaine1 = "5"
// nombre1 == chaine1, renvoie true
// nombre1 === chaine1, renvoie false

// !=, différent de
// !==, contenu et type différent de
// >, supérieur à
// >= supérieur ou égal
// < inférieur à
// <= inférieur ou égal 

// 6 > 5, true
// 5 != 5, false




// if...else

// Une condition SI SINON

// mot clé: if, else, else if

/*
if(condition){
    si elle est vraie alors je fais ça
}else{
    sinon je fais ça si c'est faux
}
*/

let num = 25;
let num2 = 25;

if(num === num2){
    console.log("C'est vrai");
    num++;
    
}else if(num !== num2){
    console.log("fesfes");
}else{
    console.log("C'est faux");
}

// méthode prompt(), ça permet de générer un zone de saisie sur le navigateur
// et de récupérer la valeur. 



// Exercice: 
/*
    Avec la méthode prompt, comparer l'âge avec un nombre fixe. 
    exemple age < 18, et afficher dans la console un texte en rapport
    Enchainer les if, else if et else pour tester tous les cas de figure
*/
// let age = prompt("Veuillez saisir votre âge");

// age = parseInt(age);

// if(typeof age === 'number' && !isNaN(age)){
//     if(age < 18){
//         console.log("Vous êtes mineur");
//     }else if(age >= 18 && age <= 65 ){
//         console.log("Vous êtes majeur");
//     }else if(age >= 66 && age <= 80){
//         console.log("Vous êtes vieux");
//     }else{
//         console.log("Belle perf");
//     }
// }else{
//     console.error("Erreur, vous n'avez pas saisie de nombre");
// }

// La condition Ternaire

// condition ? mon code si vrai : mon code si faux

// condition ? si vrai : condition ? si vrai : si faux

// age < 18 ? console.log("Vous êtes mineur") : console.log("Vous êtes majeur")


// La condition Switch case

// switch(true){
//     case age == 18:
//         console.log("La majorité");
//     break;
//     case age > 67:
//         console.log("vieux");
//     break;
// }

let fruit = 'pasteque'

switch(fruit){
    case 'poire':
        console.log("c'est une poire");
    break;
    case 'pomme':
        console.log("c'est une pomme");
    break;
    default:
        console.log("fruit inconnu");
}

/*
Exercice mélange de couleur: 
    Réaliser un script qui permet de mélanger deux couleurs en fonction de ce que 
    l'utlisateur saisie. Exemple: blue et rouge = violet
    jaune et rouge = orange
    blue et jaune = vert

    Vous devez utiliser les opérateurs logiques && et ||

*/
let couleur1 = prompt ("saisir la couleur 1")
let couleur2 = prompt ("saisir la couleur 2")
switch(true){
    case (couleur1 == 'bleue' && couleur2 == 'rouge' ) || (couleur1 == 'rouge' && couleur2 == 'bleue') :
        console.log("violet");
    break;
    case 'jaune || rouge':
        console.log("orange")
    break;
    case 'blue || jaune':
        console.log("vert");
    default:
        console.log("couleur inconnue")
}



// let color1 = prompt("Saisir bleu, jaune ou rouge");
// let color2 = prompt("Saisir bleu, jaune ou rouge");


// if((color1 == "rouge" && color2 == "bleu") || (color1 == "bleu" && color2 == "rouge")){
//     console.log("Le mélange fait du violet");
// }else if((color1 == "rouge" && color2 == "jaune") || (color1 == "jaune" && color2 == "rouge")){
//     console.log("Le mélange fait du orange");
// }else if((color1 == "jaune" && color2 == "bleu") || (color1 == "bleu" && color2 == "jaune")){
//     console.log("Le mélange fait du vert");
// }else{
//     console.log("la couleur renseigné n'est pas prit en charge");
// }


// Les Tableaux

let list_number = [5, 9, 3, 8];
let list_fruits = ["banane", "poire", "abricot", "pêche"];

let tab_multi = [5, "coucou", true, [25, 'age', 'male']]

let super_heros = "batman,wonder woman,flash"

console.log(list_fruits[2]);// récupère la valeur cible
console.log(tab_multi[3][2]);// récupère la valeur cible

tab_multi[3][0] = 35; // modifie la valeur cible
console.log(tab_multi);
console.log(list_number.length); // connaitre la longueur du tableau

super_heros = super_heros.split(',');//transforme un string en array en excluant la ,
console.log(super_heros);

super_heros = super_heros.toString();// array en string
console.log(super_heros);

list_fruits.push("fraise");// ajoute un élément à la fin du tableau
 list_fruits.pop() // supprime le dernier élément du tableau
console.log(list_fruits);

// shift(), unshift() qui font la même chose mais pour la tête du tableau

console.log(list_fruits.indexOf('poire'));// trouve l'index en fonction de la valeur

/*
réaliser un script qui permet d'ajouter un élément dans un tableau 
en fonction de la valeur saisie pas l'user, il pourra choisir de le mettre
au début ou à la fin
*/


// let new_fruit = prompt("Ajouter un fruit");
// let position = prompt("début ou fin")

// if(position == "début"){
//     list_fruits.unshift(new_fruit);
// }else if(position == "fin"){
//     list_fruits.push(new_fruit);
// }else{
//     console.error("Mauvaise position");
// }

console.log(list_fruits);

// tableau associatif

let object = {"un": 1, "deux": 2, "trois": 3, "tab": ["banane", "poire", "abricot", "pêche"]};
console.log(object.tab);



//Les Boucles

// FOR

/* for(expression initial; condition; incrément){
    instruction 
}
*/

// for(let i = 0; i < list_fruits.length; i++){
//     console.log(list_fruits[i]);
// }

/*
    Vous avez un tableau avec des nombres de 1 à 10, 
    afficher dans la console les nombres pairs
    Ajouter la somme des nombre pairs
*/

let sum = 0;
for(let i = 0; i <= 10; i++){
    if(i%2 === 0){
        console.log(i);
        sum += i
    }
}

console.log("La somme des nombres pairs est: " + sum);

// WHILE

/*
    while(condition){ // Tant que
        code...
    }
*/

let nb = 0;

while(nb < 3){
    console.log(nb);
    nb++
}

/*
 Permettre à l'utilisateur de saisir un nombre et lui retourner la table
 de multiplication de ce nombre

 Trouver le premier nombre divisible par 7, 9 et 13, en partant de 1 et s'arrêter
*/
let chiffr = prompt("saisir un nombre");
let multip = 1;

while ( multip <= 10){
    console.log("pour le chiffre " + chiffr+" la table de multi " + chiffr*multip);
    multip++
}



let saisi_nb = prompt("Saisir un nombre à multiplier")
let multiple = 1;

while(multiple <= 10){
    console.log("La multiplication de "+saisi_nb+" et "+multiple+" donne "+ saisi_nb*multiple );
    multiple++
}

let chiffre = 1
let divisible = false

while(!divisible){
    if(chiffre % 7 === 0 && chiffre % 9 === 0 && chiffre % 13 === 0){
        divisible = true
    }else{
        chiffre++
    }
}

console.log("Le premier nombre divisible par 7 9 et 13 est "+ chiffre);


// La boucle for ... of 

for(let fruit of list_fruits){
    console.log(fruit);
}

// la boucle for ... in

for(let element in object){
    console.log(element+": " +object[element]);
}

/*

Creer un tableau de contact: 
Exemple 
let users = [
    {
        "nom": "toto",
        "prenom": "jojo",
        "adresse": "85 rue de momo",
        "age": 12,
        "mail": ["mail1", "mail2"]
    }, 
    {
        autre utilisateur
    }
]
Affiche le mail2 de chaque utilisateur avec son nom devant.
*/


let users = [
    {
        "nom": "toto",
        "prenom": "jojo",
        "adresse": "85 rue de momo",
        "age": 12,
        "mail": ["mail1", "mail2"]
    }, 
    {
        "nom": "tata",
        "prenom": "jaja",
        "adresse": "85 rue de momo",
        "age": 12,
        "mail": ["mail1", "mail2"]
    }
]

for(let user of users){
    console.log(user.nom + " " + user.prenom + " : " + user.mail[1]);
}



/**
 * Compter le nombre total de voyelle dans un tableau de mots.
 * Affiche le nombre de voyelle par mots.
 * Aide: 
 * - la méthode toLowerCase permet de mettre en minuscule une chaine de caractère
 * - la méthode includes permet de déterminer si un tableau contient une valeur.
 */

const tab1 = [2,5,8,10,20];
const tab2 = [6,3,9,11,23];

function somme (tab){
    let somme = 0;
    for(const element of tab){
        somme += element;
    }
    return somme;
}

console.log(somme(tab1));
console.log(somme(tab2));




/* créer deux tableau contenant des objets représentant des élèves. chaque éléve à un nom et un tableau de notes
*
*réaliser une fonction qui permet de calculer la moyenne de chaque élève et la moyenne de la classe.
*/ /*voir correction js

// const eleves1 = [
//     {name:"Alice", 
//     notes:[15 ,12 ,13, 16] },
//     {name:"Julie",
//     notes:["17","12","15","11"]},
//     {name:"sara",
//     notes: ["18", "20","12","15"]}
// ]

// const eleves2 = [
//     {name:"Ali", 
//     notes:["14","12","13","16"] },
//     {name:"Jul",
//     notes:["17","14","9","5"]},
//     {name:"sar",
//     notes: ["18", "20","12","15"]}
// ]

    
// function moyenne (eleves){
//     let somme = 0;
//     let tab = eleves.length

//     for(const eleve of eleves){
//         somme = 0;
//         for(const note of eleve.notes){
//             somme += note;           
//         }
//         somme /= eleve.note.length;
    
//         console.log("La moyenne de " + eleve.name + "des de : " + somme);
//         // ou on peut faire aussi
//         //eleves.moyenneGeneral = moyenneEleve / eleves.notes.length
//         console.log('${eleves.nom} a 
    
        

                  
//     }
    

    

// }

// moyenne(eleves1);

/*le jeu devine le nombre
* 
* Réaliser l'algo qui permet de générer un nombre aléatoire de 1 à 10, l'utilisateur à 3 essai pour trouver le nombre .
*Indiquer à l'utilisateur si le nombre est au dessus ou en dessous 
* Utilisez la boucle while
* Afficher avec un alert(), victoire ou echec.
*
*aide : Math.round arrondi à l'unité supérieur et Math.random générer un nombre aléatoire.
*/
let nbreAle = prompt("saisir un nombre aléatoire")
let nbr = 5
while (nbr >= 1 && nbr <= 10){
    console.log()

}
























