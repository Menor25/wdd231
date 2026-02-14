import { places } from '../data/places.mjs';

const messageContainer = document.querySelector('#visitor-message');
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();

if (!lastVisit) {
    messageContainer.textContent = "Welcome! Let us know if you have any questions.";
} else {

    const diff = now - parseInt(lastVisit);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days < 1) {
        messageContainer.textContent = "Back so soon! Awesome!";
    } else {
        const dayString = days === 1 ? "day" : "days";
        messageContainer.textContent = `You last visited ${days} ${dayString} ago.`;
    }
}

localStorage.setItem('lastVisit', now);


const gridContainer = document.querySelector('#places-grid');

function displayPlaces(placesList) {
    gridContainer.innerHTML = ''; 

    placesList.forEach((place, index) => {
        const card = document.createElement('div');
        card.classList.add('place-card');
        
        // Assign a unique grid-area name based on index (area1, area2, etc.)
        card.style.gridArea = `area${index + 1}`;

        const title = document.createElement('h2');
        title.textContent = place.name;

        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.src = place.image;
        img.alt = place.name;
        img.width = 300;
        img.height = 200;
        img.loading = 'lazy';
        figure.appendChild(img);

        const addr = document.createElement('address');
        addr.textContent = place.address;

        const desc = document.createElement('p');
        desc.textContent = place.description;

        const btn = document.createElement('button');
        btn.textContent = "Learn More";
        btn.classList.add('learn-btn');

        // Append to card
        card.appendChild(title);
        card.appendChild(figure);
        card.appendChild(addr);
        card.appendChild(desc);
        card.appendChild(btn);

        // Append to grid
        gridContainer.appendChild(card);
    });
}

displayPlaces(places);