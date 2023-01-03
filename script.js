/* Exercice 1 */

//Utilisation de Javascript :
// Récupérez le div et console.log it

let elt = document.getElementById('#container')
console.log(elt)

// Changez le nom "Pete" en "Richard".
let tag_li = document.getElementsByTagName('li')
tag_li[1].textContent = "Richard"

// Remplacez chaque prénom des deux < ul > 'par votre nom.
let tag_ul = document.getElementsByTagName('ul')
for (let tags of tag_ul) {
    tags.children[0].textContent = "Gilles-Chris"
}

// Supprimez le < li > qui contient le nœud de texte "Sarah"
for (let tag of tag_ul) {

}