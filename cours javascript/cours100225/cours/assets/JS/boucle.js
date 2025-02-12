// // /* ------------------

// // Les boucles 

// // --------------------*/ 

// // // une boucle permet d'executer un bloc de code plusieurs fois, tant que la condition est vrai

// // // les boucles sont utilisé pour parcourir des tableaux, répeter des actions et automatiser des taches

// // //Bouche while ( tant que )
// // // cette boucle est très utilisé quand on ne connais pas le nombre de tours a l'avance


// //  let j=1;
// //  while(j<=10){ // tant que J est inférieur ou égal a 10

// //      document.write("<h1 style='color:red'> Je passe par ici  " +j+ "</h1>")
// //      j++
// //      document.write("<h2 style='color:red'> Je passe par ici  " +j+ "</h2>")
// //     j++
// // }

// // let maxAge=25
// // let age=NaN // initialisation avec une valeur invalide "not a number"
// // console.log(typeof age);
// // // comme 
// // while(isNaN(age)){
// //     // La boucle continue tant que l'age n'est pas un nombre
// //     age=Number(prompt("Indiquez votre age"))

// //     if(isNaN(age)){

// //         alert("erreur : veuillez ecrire un nombre")
// //     }
// // }

// // console.log(age);

// // if (age < maxAge){
// //     alert("bonne nuit")
// // }
// // else{
// //     alert ("Bienvenue")
// // }

// // la boucle FOR
// // for a besoin de 3 arguments 

// for( let i=1; i<=10; i++){
//     document.write("<h3 style='color:red'>je passe par la :"+i+"</h3>")

// }

// //parcourir un tableau

// let fruits=["pomme","banane","cerise"]

// const obj={
//     age:26,
//     adresse:"4 rue de la chlululu"
// }
// console.log(fruits [2]);

// for(let i=0;i<fruits.length;i++){
//     console.log("fruits :", fruits[i]);
    
// }
const products=[
    {name:"smartphone",price: 500},
    {name:"ordinateur",price: 800},
    {name:"casque",price: 100}
]

let html=""; // on initialise une variable vide

for(let i=0 ;i < products.length;i++){

    // a chaque itération on ajoute ( += ) une nouvelle div avec le produit correspondant

    html += `<div class="product">
    <h3> ${products[i].name}</h3>
    <p>prix : ${products[i].price} € </p>
    </div>`
}
// le "${}" pour insérer des variables directement dans la chaine de caractère
//après la boucle html contient maintenant TOUT LE CODE GENERE 

let productList=document.getElementById("product-list")
productList.innerHTML=html
