// CREATES THE 16x16 GRID WHEN LOADING PAGE
const gridContainer = document.getElementById('gridContainer');
for (let i = 0; i < (16 * 16); i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('gridDiv');
    gridContainer.appendChild(newDiv);
};

gridContainer.addEventListener('mouseover', (e) => {
    function getRandomRgbColor() {
        const r = Math.floor(Math.random() * 256); // Random integer between 0 and 255 for Red
        const g = Math.floor(Math.random() * 256); // Random integer between 0 and 255 for Green
        const b = Math.floor(Math.random() * 256); // Random integer between 0 and 255 for Blue
        return `rgb(${r}, ${g}, ${b})`; // Returns the RGB color string
    }
    if (e.target.classList.contains('gridDiv')) {
        e.target.style.background = getRandomRgbColor();
    }
})
// CREATE BUTTON BLOCK
const input = document.getElementById('input');
function createGrid() {
    const gridNumber = Number(input.value);
    gridContainer.innerHTML = '';
    for (let i = 0; i < (gridNumber * gridNumber); i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('gridDiv');
        newDiv.style.width = `calc(100% / ${gridNumber})`;
        newDiv.style.maxHeight = `calc(100% / ${gridNumber})`
        gridContainer.appendChild(newDiv);
    }
};
const subBtn = document.getElementById('subBtn');
subBtn.addEventListener('click', createGrid);

// RESET BUTTON BLOCK
function resetGrid() {
    input.value = 16;
    gridContainer.innerHTML = '';
    for (let i = 0; i < (16 * 16); i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('gridDiv');
        gridContainer.appendChild(newDiv);
    };
};
const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', resetGrid);