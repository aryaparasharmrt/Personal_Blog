// Get the current date and display it in the header
const currentDate = new Date();
const header = document.querySelector('header');
header.innerHTML += `<p>Today's Date: ${currentDate.toDateString()}</p>`;
