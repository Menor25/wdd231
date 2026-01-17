// Use the JavaScript querySelector method to grab a reference to the hamburger button element. Setup a click event listener for the button. When the button is touched, it will toggle the class attribute value of 'show' on the button. 
const navButton = document.querySelector('#nav-button');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
});