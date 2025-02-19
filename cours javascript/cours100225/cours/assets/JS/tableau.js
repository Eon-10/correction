/* --------------------

Les tableaux
------------------------------*/

// créer un tableau

let tabl= new Array("element0","element1")
let tab2= Array("element0","element1")
let tab3=["element0","element1"] //à prioriser plus clair 

// déclaration d'une liste (tableau)

// tableau simple de nombre

let nombre=[1,2,3,4,5]

// tableau de chaine de caractere

let fruits=["banane","pomme", "orange"]

//tableau mixte (différent type de données)

let mixte=[42,"hello", true, {nom:"alice"},[1,2,3] ]

// affichage de tableau
console.log("nombres ;", nombres)
console.log("fruits ;", fruits)
console.log("test",[...fruits]); // Copie du tableau pour voir la vraie version

console.log("mixte ;", mixte)


//***** Acceder aux elements d'un tableau

console.log( "premier fruit :", fruits[0])
console.log( "2eme fruit :", fruits[1])
console.log("dernuit fruit :", fruits[fruits.length-1])

console.log("mixte", mixte[0])
console.log("mixte", mixte[3])
console.log("mixte", mixte[4][2])
console.log("mixte", mixte[3].nom)
console.log("mixte", mixte[3]["nom"])

//trouver l'index d'un element du table

//********* Modifier un element du tableau

fruits[0]="fraise"
console.log("fruits modifier", fruits)

//************** Ajouter un elements dans un tableau

fruits.push("mangue")//ajoute à la fin
console.log("fruit avec mangue",fruits)

fruits.unshift("cerise")//ajoute en premier
console.log( fruits)

fruits.splice(1,0,"clémentine")// ajoute en deuxiemnt
console.log( fruits)

// **************** supprimer des elements
fruits.pop()// supprime dernier éléménts 
console.log( fruits)