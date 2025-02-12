// // concaténer ces variables et afficher dans le dom resultat

let n1="nous"
let n2="sommes"
let n3="mercredi"
let n4=12

let phrase=`${n1} ${n2} ${n3} ${n4}`

console.log(phrase)

// // afficher un promp qui demande l'age si l'age est inférieur à 18 creer une alert de refis si l'age est supérieur 18 alert d'acceptiation

// let ageresult = prompt('quel est votre age ?')
// if (ageresult < 18){
//     alert("Sorcellerie !")
// }else{
//     alert("Bienvenue ! ")
// }

// // créer une boucle pour afficher 3 fois une phrase dans le dom

for( let i=0; i<=2; i++){

    document.write("<h3 style='color:red'> " + phrase + "</h3>")
}

// // avec prompt demander au user deux chiffre vous aller stocker les valeurs du promt puis additionner ces valeur et les afficher dans le dom avec une phrase : "le resultat est :"

// let c1, c2 

// c1 = Number(prompt(" donner deux chiffre :"))
// c2 = Number(prompt(" donner deux chiffre :"))
// result= c1 + c2
// console.log(result);



// demander age de l'utilisateur avec prompt et verifier s'il peut entrer dans une salle de cinema selon les regles suivantes (utliser console log pour les resultat des condition)
// -- moins de 13 ans === accès refuser 
// -- entre 13 et 17 ans === acces autorisé avec accompagnateur
// --- 18 et + === accès libre

let acces = Number(prompt( "userAge ?" ))

if (acces < 13){
    console.log("FBI !!!");
} else if (acces >= 13 && 17 >= acces){
    console.log("You need Gandalf");   
} else {
    console.log("Abracadabra !!!!!");
    
}