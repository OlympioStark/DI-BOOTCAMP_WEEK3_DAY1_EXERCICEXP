let elmt = document.getElementsByTagName('div')


// ajouter une couleur d'arrière-plan "bleu clair" et un peu de rembourrage à la div
elmt.style.backgroundColor = 'lightblue';
elmt.style.padding = '10px';

// cacher le premier élément li
let liFirst = document.getElementsByTagName('li');
liFirst.style.display = 'none';

// ajouter une bordure au second élément li
let scdLi = document.getElementsByTagName('li')[1];
scdLi.style.border = '1px solid black';

// modifier la taille de la police de tout le corps
document.body.style.fontSize = '20px';

// bonus : afficher une alerte si la couleur de fond de la div est "bleu clair"
if (elmt.style.backgroundColor === 'lightblue') {
    alert(`Bonjour ${liFirst.textContent} et ${scdLi.textContent}`);
}