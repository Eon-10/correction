// exo 1 operation de base sur un tableau
// créer un tableau contenant "pomme""banane" "cerise" "orange"

let fruits=["banane","pomme", "cerise", "orange"]

//ajouter "kiwi" a la fin

fruits.push("kiwi")

// et "ananas" au début 

fruits.unshift("ananas")
// supprimer dernier élément
fruits.pop()
// afficher la longeur du tableau

console.log(fruits.length);


// utliliser les consoles log

//exo 2 recherche dans un tableau
// créer un tableau let nombres = [10,25,38,50]

let nombres = [10,25,45,38,50]

// verifier si le nombre 30 est présent dans le tableau

//---------------------------------------------------

function func(array, value) {
   
    let isPresent = array.some(function(arrVal) {
        return arrVal === value;
    });

    return isPresent; 
}

console.log(func([10, 25, 45, 38, 50], 30)); // 
console.log(func([10, 25, 45, 38, 50], 45)); // 


// function func(array, value) {
    
//     let array = [10, 25, 45, 38, 50]

//     let value = array.some;
// }

// console.log(func(30));



// function verif(array, valeur) {
//     return array.some(function (arrVal) {
//         return valeur === arrVal;
//     });
// }

// function func() {
//     // Nouveau tableau "nombres"
//     let nombres = [10, 25, 45, 38, 50];

//     // Vérification de la présence de différentes valeurs
//     console.log(verif(nombres, 30)); 
//     console.log(verif(nombres, 45)); 
// }



// trouvez l'index de 45

// exo3 3 filter un tableau
// créer un tableau contenant 2 5 8 11 14 17
// creer un nouveau tableau contenant des nombre supérieur à 10

let utilisateurs = [
    ["Jean Dupont", "jean.dupont@email.com", "admin"],
    ["Marie Lemoine", "marie.lemoine@email.com", "utilisateur"],
    ["Pierre Durand", "pierre.durand@email.com", "modérateur"]
];

function ajouterUnUser(nom,mail,role){
    utilisateurs.push([nom,mail,role])
}

ajouterUnUser("john doe","g@mail.com","admin")
console.log("user",utilisateurs);

