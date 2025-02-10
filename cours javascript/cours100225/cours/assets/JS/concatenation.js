/* --------------------------------- La concaténation ------------------------------ */

let annee,mois,semaine

annee=2025
mois=12
semaine=7

let year,month,week

year=2025
month="fevrier"
week="lundi"

const resultat= annee + mois
console.log(resultat)

//concatenez ces 4 variables dans une nouvelle variable et affichez cette nouvelle variabme dans une console log
const parti1 ="nous sommes le"
const parti2 =10
const parti3= "du mois de"
const parti4="fevrier"

const resultat1=(`${parti1} ${parti2} ${parti3} ${parti4}`)
console.log(resultat1)

console.log( parti1 + " " + parti2 + " " + parti3 + " " + parti4)

console.log(`${parti1} ${parti2} ${parti3} ${parti4}`)