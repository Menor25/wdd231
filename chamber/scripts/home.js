const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#current-desc');
const forecastContainer = document.querySelector('#forecast');

const myKey = 'b642bb9337fd08ff2952ee67f83ea05d';
const myLat = '6.3392'; // Benin City Latitude
const myLong = '5.6176'; // Benin City Longitude

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

async function apiFetchForecast() {
    try {
      const response = await fetch(forecastUrl);
      if (response.ok) {
        const data = await response.json();
        displayForecast(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

function displayResults(data) {
  currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
  const iconsrc = `images/icons/weather_clouds_icon.svg`;
  let desc = data.weather[0].description;
  
  // Create image element for icon
  const weatherImg = document.createElement('img');
  weatherImg.setAttribute('src', iconsrc);
  weatherImg.setAttribute('alt', desc);
  
  weatherIcon.innerHTML = '';
  weatherIcon.appendChild(weatherImg);
  captionDesc.textContent = `${desc.toUpperCase()}`;
}

function displayForecast(data) {
    const forecastList = data.list.filter(reading => reading.dt_txt.includes("12:00:00")).slice(0, 3);
    
    forecastContainer.innerHTML = '';

    forecastList.forEach(day => {
        const temp = Math.round(day.main.temp);
        const date = new Date(day.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('forecast-day');
        dayDiv.innerHTML = `<p>${dayName}</p><p>${temp}&deg;F</p>`;
        forecastContainer.appendChild(dayDiv);
    });
}

apiFetch();
apiFetchForecast();


// --- SPOTLIGHTS ---
const membersUrl = 'data/members.json';
const spotlightContainer = document.querySelector('#spotlight-container');

async function getSpotlights() {
    const response = await fetch(membersUrl);
    const data = await response.json();
    
    // Filter for Gold and Silver members
    const qualifiedMembers = data.filter(member => member.membershipLevel === 2 || member.membershipLevel === 3);

    // Shuffle the array randomly
    const shuffled = qualifiedMembers.sort(() => 0.5 - Math.random());

    // Slice the first 3
    const selected = shuffled.slice(0, 3);

    displaySpotlights(selected);
}

function displaySpotlights(members) {
    spotlightContainer.innerHTML = '';
    
    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('spotlight-card');
        
        // Determine membership text
        const level = member.membershipLevel === 3 ? "Gold Member" : "Silver Member";

        card.innerHTML = `
            <h3>${member.companyName}</h3>
            <p class="tag">${level}</p>
            <img src="${member.imageUrl}" alt="${member.companyName}" loading="lazy" width="100">
            <p>Phone: <a href="tel:${member.contactNumber}">${member.contactNumber}</a></p>
            <p>Address: ${member.address}</p>
            <a href="http://${member.website}" target="_blank">Visit Website</a>
        `;
        spotlightContainer.appendChild(card);
    });
}

getSpotlights();