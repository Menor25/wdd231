document.addEventListener("DOMContentLoaded", () => {
    const timestampField = document.getElementById("timestamp");
    const now = new Date();

    const formattedDate = now.toISOString().split('T')[0] + ' ' + now.toTimeString().split(' ')[0];
    timestampField.value = formattedDate;
});

const modalButtons = document.querySelectorAll(".modal-btn");
const closeButtons = document.querySelectorAll(".close-modal");

modalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modalId = button.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        modal.showModal();
    });
});

closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest("dialog");
        modal.close();
    });
});


const modals = document.querySelectorAll("dialog");
modals.forEach(modal => {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.close();
        }
    });
});