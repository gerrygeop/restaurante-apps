import data from '../DATA.json';

showCard(data.restaurants);

function showCard(restaurants) {
    const exploreEl = document.getElementById('explore-section');
    restaurants.forEach(item => {
        exploreEl.insertAdjacentHTML('beforeend', `
            <div class="card">
                <div class="card-location">
                    <svg class="pin" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <p tabindex="0">${item.city}</p>
                </div>
                <img src="${item.pictureId}" alt="Gambar Restoran ${item.name}">
                <div class="card-body">
                    <div class="card-rating">
                        <svg class="star" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                        </svg>
                        <p tabindex="0">${item.rating}</p>
                    </div>
                    <div class="card-title">
                        <h3 tabindex="0">${item.name}</h3>
                    </div>
                    <div class="card-desc">
                        <p>${item.description}</p>
                    </div>
                </div>
            </div>
        `);
    });
}