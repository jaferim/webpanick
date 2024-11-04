
const grid = document.getElementById('numberGrid');
const totalCells = 200;
const uniqueIndex = Math.floor(Math.random() * totalCells);

const init = () => {

    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('p');
        cell.classList.add('number');
        cell.textContent = i === uniqueIndex ? '0' : '8';

        if (i === uniqueIndex) {
            cell.classList.add('unique');
            cell.addEventListener('click', () => {
                window.location.href = 'index.html';
            });
        }
        grid.appendChild(cell);
    }


}
init();
