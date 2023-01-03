// Dans le < div > , modifiez la valeur de l 'attribut id de navBar à socialNetworkNavigation , à l'
// aide de la setAttributeméthode
let elmtDiv = document.querySelector('#navBar')
elmtDiv.setAttribute('id', "socialNetworkNavigation")

//Nous allons ajouter un nouveau <li>au <ul>.
let newLi = document.createElement('li')
let elmtUl = document.querySelector('ul')
let newA = document.createElement('a')
newA.textContent = "Deconnexion"
newA.setAttribute('href', "#")
newLi.appendChild(newA)
elmtUl.appendChild(newLi)

// Prime
// Utilisez les firstElementChildpropriétés et lastElementChildpour récupérer le premier et le dernier < li > élément de leur élément parent( < ul > ).Affichez le texte de chaque lien.(Astuce: utilisez la textContentpropriété).
console.log(elmtUl.firstElementChild.textContent)
console.log(elmtUl.lastElementChild.textContent)