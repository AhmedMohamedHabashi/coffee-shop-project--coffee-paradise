let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
  navbar.classList.toggle('active');
}

const queryString = window.location.search;


const urlParams = new URLSearchParams(queryString);


const tableNumber = urlParams.get('table');


if (tableNumber) {
  
  document.getElementById('tableDisplay').textContent = `Welcome to Menu, Table ${tableNumber}`;
} else {
  
  document.getElementById('tableDisplay').textContent = `Welcome to Menu! Please Enter your table number.`;
}
