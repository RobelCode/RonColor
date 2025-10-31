
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
const h1 = document.querySelector('h1');
h1.style.color = getRandomColor();

setInterval(function() {
    h1.style.color = getRandomColor();
}, 1000);