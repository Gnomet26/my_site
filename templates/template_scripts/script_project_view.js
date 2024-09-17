
const dd = document.getElementById('about_');

const params = new URLSearchParams(window.location.search);
const text = params.get('text');

dd.textContent = text;