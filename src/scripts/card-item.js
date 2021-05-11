const exploreEl = document.getElementById('explore-section');

function getCardItem() {
    fetch('https://gerrygeop.github.io/restaurante-apps/src/DATA.json')
        .then(response => response.json())
        .then(data => {
            console.log(data.restaurants);
            // showCard(data);
        })
        .catch(error => console.log(`Anda yang salah: ${error}`) );
};

// function showCard(data) {
//     const cards = data.restaurants;
//     cards.forEach(item => {
//         console.log(item);
//         // exploreEl.insertAdjacentHTML('beforeend', `
//         //     <li onclick='detail("${item.url}")'>${item.name}</li>
//         // `);
//     });
// }

getCardItem();