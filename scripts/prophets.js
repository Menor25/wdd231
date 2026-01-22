const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.table(data.prophets);
        displayProphets(data.prophets);
        return data;
    } catch (error) {
        console.log(error);
    }
}

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        const section = document.createElement('section');
        const fullName = document.createElement('h2');
        const portrait = document.createElement('img');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        section.appendChild(fullName);
        section.appendChild(portrait);
        cards.appendChild(section);
    })
}
getProphetData();