const url = 'data/members.json';
const cards = document.querySelector('#members-container');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data);
}

const displayMembers = (members) => {
    cards.innerHTML = "";

    members.forEach((member) => {
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let name = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');

        card.setAttribute('class', 'member-card');

        // Setup Content
        name.textContent = member.companyName;
        address.textContent = member.address;
        phone.textContent = member.contactNumber;
        website.textContent = "Visit Website";
        website.setAttribute('href', `http://${member.website}`);
        website.setAttribute('target', '_blank');

        // Setup Image
        logo.setAttribute('src', member.imageUrl);
        logo.setAttribute('alt', `Logo of ${member.companyName}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '300');
        logo.setAttribute('height', '200');

        // Append to card
        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);
    });
}

getMemberData();

const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");
const display = document.querySelector("#members-container");

gridBtn.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
    
    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
});

listBtn.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
    
    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
}