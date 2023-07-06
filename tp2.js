//TP compte bancaire

class Titulaire{
    constructor(nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
        this.compte = null;
        this.compteEpargne = null;

      
        
    }
    createCount(montant){
        this.compte = new Compte(this, montant);
    }

    createCountEpargne(montant){
        this.compteEpargne = new CompteEpargne(this, montant, 0.01, 1000);
    }

}


class Compte{
    constructor(letitulaire, montant){
        this.letitulaire = letitulaire;
        this.montant = montant;

    }
    crediter(montant){
        this.montant += montant
}
    debiter(montant){
        this.montant -= montant
    }
    affichersolde(){
        console.log("le solde est de " +this.montant)
    }
}

class CompteEpargne extends Compte{
    constructor(letitulaire, montant, taux, temps){
        super(letitulaire, montant);
        this.taux = taux;
        this.temps = temps;
console.log(this.taux)
        setInterval(function(){
            this.montant *= this.taux;
            console.log(this.montant);
        }, 1000)
    }

    affichersolde(){
        console.log("le solde est de " + this.montant)
        console.log('le taux est de' + this.taux )
    }
    
}

const tab = [
    new Titulaire('bob', "M"),
    new Titulaire('charles', "B"),
    new Titulaire('marie','L'),
];

for (let titulaires of tab ){
    titulaires.createCount(50);
    titulaires.createCountEpargne(60);
}
for (titulaires of tab){
    titulaires.compte.crediter(40)
    titulaires.compte.affichersolde();
    titulaires.compteEpargne.affichersolde()
}

