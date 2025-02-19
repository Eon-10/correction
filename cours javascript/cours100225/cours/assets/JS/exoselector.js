//         /*------------------------------------------------------
//         ---------------MANIPULATION DU DOM----------------------
//         ------------------------------------------------------*/
   
// // 1. Selectionne des éléments
// //------------------------------
// const titre=document.getElementById("titre") // selectionner un ID
// const paragraphe=document.getElementsByTagName("p") // selectionner une  balise
// const elementClass=document.getElementsByClassName("ma-classe") // selectionne la premiere class qu'il trouve avec ce nom
// const premierParagraphe=document.querySelector("p") // selectionne le 1er paragraphe
// const unId=document.querySelector("#monId") // selectionne id
// const allParagraphe=document.querySelectorAll("p") // selectionne tous les paragraphes
// const toutesLesClass=document.querySelectorAll(".ma-classe") // selectionne tous les class "ma-classe"
// const text=document.querySelector("#text")
 
 
// // 2. Modification du contenu
// //------------------------------
// if(titre){
//     titre.textContent="nouveau texte" // change le texte de titre
//     titre.innerHTML="<span>titre</span>" // modifier le html on peut ajouter des balises     // utiliser une ou l'autre
// }
 
 
// // 2. Modification du contenu
// //------------------------------
// if(titre){
//     titre.style.color="blue"
//     titre.style.fontSize="50px"
//     titre.style.padding="10px"
//     titre.style.textTransform="uppercase"
// }
 
 
// // 4. Gestion de class en CSS
// //------------------------------
// titre.classList.add("ajout-de-class") // ajouter une class à un élément du DOM
// titre.classList.remove("supprimer-ma-class") // supprimer une class
// titre.classList.toggle("ma-class2") // ajouter une class si absente, ou supprime la class si présente
 
 
// // 5. Création et Insertion
// //---------------------------
// const newParagraphe=document.createElement("p") // creation d'une balise p
// newParagraphe.textContent="ceci est un paragraphe ajouté par js"
// text.appendChild(newParagraphe)
// newParagraphe.style.color="violet"
// newParagraphe.classList.add("ajout-class-js")
 
// // selectionner id text2 dans le fichier html et le mettre dans une variable
 
// // creer une h1en ajoutant un titre : "titre2" qui sera l'enfant de texte2
 
// // ajouter une class à text2 et modifier son css via la balise style dans fichier css
 
// // const text2 = document.getElementsByTagName("text2")
// // const newTitre=document.createElement("h1")
// // newTitre.textContent="ceci est un Titre ajouté par js"
// // text2.appendChild(newTitre)
// // newTitre.classList.add("newTitre1")

// function alertClick() {
//     alert("bouton cliqué")  
// }

// function colorChange() {
    
//     button.style.background ="blue"
    
// }

// const text3 = document.querySelector("#text3")
// text3.style.border = '1px solid red '
// text3.style.height = "20px"
// text3.textContent="ceci est hello world"

// text3.addEventListener("mouseenter",function () {
//     text3.style.height = "100px"
// }) 

const modal = document.querySelector(".modal")
const bouton = document.querySelector(".bouton")

bouton.addEventListener("click", () => {
    modal.classList.toggle("block");
    
});

