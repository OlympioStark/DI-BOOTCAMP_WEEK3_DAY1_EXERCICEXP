// créer le tableau de livres
const allBooks = [{
        title: "Les frasques d'Ebimpé",
        author: 'Amadou Koné',
        image: 'https://i.imgur.com/gGcYXvT.jpg',
        alreadyRead: true
    },
    {
        title: 'Une si longue lettre',
        author: 'Mariama Bâ',
        image: 'https://i.imgur.com/1v0nYAS.jpg',
        alreadyRead: false
    }
];
// sélectionner le div
const div = document.querySelector('.listBooks');
// parcourir le tableau de livres et générer du HTML pour chaque livre
allBooks.forEach((book) => {
    // créer le HTML pour chaque livre
    const bookHTML = `
    <div class="book">
    <table>
            <tr>
                <td>${book.title}</td>
                <td>${book.title}</td>
                <td><img src="${book.image}" width="100" /></td>
                <td>${book.alreadyRead ? 'Already read' : 'Not read yet'}</td>
            </tr>
        </table>
      
    </div>
  `;
    // ajouter le HTML généré au div
    div.innerHTML += bookHTML;
});
// sélectionner tous les éléments p du div
const tdElements = div.querySelectorAll('td');
// mettre en surbrillance en rouge tous les éléments p qui indiquent que le livre a déjà été lu
tdElements.forEach((td) => {
    if (td.textContent === 'Already read') {
        td.style.color = 'red';
    }
})