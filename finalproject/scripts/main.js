import { fetchWorkouts } from './dataModule.js';

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("current-year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;

    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("open");

            const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
            menuToggle.setAttribute("aria-expanded", !isExpanded);
        });
    }

    const visitMsgElement = document.getElementById("visit-message");
    if (visitMsgElement) {
        const lastVisit = localStorage.getItem("menorLastVisit");
        const today = Date.now();
        
        if (!lastVisit) {
            visitMsgElement.textContent = "Welcome! Let's start your fitness journey today.";
        } else {
            const daysBetween = Math.floor((today - parseInt(lastVisit)) / 86400000);
            if (daysBetween < 1) {
                visitMsgElement.textContent = "Back so soon? Awesome!";
            } else {
                visitMsgElement.textContent = `You last visited ${daysBetween} days ago. Keep up the momentum!`;
            }
        }
        localStorage.setItem("menorLastVisit", today.toString());
    }

    const workoutContainer = document.getElementById("workout-container");
    if (workoutContainer) {
        initWorkouts();
    }

    // Form Data Handling (Runs only on the Thank You page)
    const currentUrl = window.location.href;
    if (currentUrl.includes("thankyou.html")) {
       
        const formData = new URLSearchParams(window.location.search);
        
        const showFname = document.getElementById("show-fname");
        const showLname = document.getElementById("show-lname");
        const showEmail = document.getElementById("show-email");
        const showGoal = document.getElementById("show-goal");

        if (showFname) showFname.textContent = formData.get("fname") || "Not provided";
        if (showLname) showLname.textContent = formData.get("lname") || "Not provided";
        if (showEmail) showEmail.textContent = formData.get("email") || "Not provided";
        
        if (showGoal) {
            let goalValue = formData.get("goal") || "Not provided";
            showGoal.textContent = goalValue.charAt(0).toUpperCase() + goalValue.slice(1);
        }
    }
});

async function initWorkouts() {
    const workouts = await fetchWorkouts('data/workouts.json');
    const container = document.getElementById("workout-container");
    const modal = document.getElementById("workout-modal");
    
    renderCards(workouts, container);

    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            const category = e.target.getAttribute('data-filter');
            
            const filteredData = category === 'All' 
                ? workouts 
                : workouts.filter(w => w.category === category);
            
            renderCards(filteredData, container);
        });
    });

    document.getElementById("close-modal").addEventListener("click", () => {
        modal.close();
    });

    window.openModal = (title, desc) => {
        document.getElementById("modal-title").textContent = title;
        document.getElementById("modal-desc").textContent = desc;
        modal.showModal();
    };
}

function renderCards(data, container) {
    container.innerHTML = "";
    if(data.length === 0) {
        container.innerHTML = "<p>No workouts found.</p>";
        return;
    }

    data.forEach(item => {
        const card = document.createElement("article");
        card.className = "card";
        
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" loading="lazy" width="300" height="200">
            <h3>${item.name}</h3>
            <p><strong>Category:</strong> ${item.category}</p>
            <p><strong>Difficulty:</strong> ${item.difficulty}</p>
            <p><strong>Duration:</strong> ${item.duration}</p>
            <button class="btn-primary" onclick="openModal('${item.name}', '${item.description}')">View Details</button>
        `;
        container.appendChild(card);
    });
}