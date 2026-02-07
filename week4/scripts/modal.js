// To control the modal dialog with JavaScript, you can use the show() and close() methods to display and hide the modal dialog. You can also use the addEventListener() method to add event listeners to the modal dialog and its elements.

const modal = document.querySelector('#myModal');
const closeModal = document.querySelector('#closeModal');
modal.showModal(); // display the modal dialog right away.
// Usually you will want to wait for a user action to show the modal dialog
closeModal.addEventListener('click', () => {
  modal.close();
});