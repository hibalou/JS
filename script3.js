/*le jeu devine le nombre
* 
* Réaliser l'algo qui permet de générer un nombre aléatoire de 1 à 10, l'utilisateur à 3 essai pour trouver le nombre .
*Indiquer à l'utilisateur si le nombre est au dessus ou en dessous 
* Utilisez la boucle while
* Afficher avec un alert(), victoire ou echec.
*
*aide : Math.round arrondi à l'unité supérieur et Math.random générer un nombre aléatoire.
*/
let nbre = prompt("saisir un nombre")
let nbrAlea = Math.round(Math.random() * 10);
let essai= 3;

while(essai != 0 && nbrAlea != nbre){
    essai--
    if (nbre > nbrAlea){
        alert("le nombre est au dessous");
    } else{
        alert("le nombre est au dessus");
    }
    if (essai != 0){
        nbre = prompt("saisir un nouveau nombre");
    }

}
if (essai === 0){
    alert("echec");

} else if (nbrAlea == nbre){
    alert("Victoire")
}

// let i = 0

// while (i<=3, ){

// }

// if (nbreAle > nbr && nbreA < nbr){
//     console.log()
// }

