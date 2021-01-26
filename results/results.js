import { getPokeStats, setPokeStats } from '../localStorageUtils.js';
import { renderTableRows } from './results-utils.js';

const table = document.getElementById('caught-table');
const resetButton = document.getElementById('reset-button');
const currentStats = getPokeStats();

for (let stat of currentStats) {
    table.append(renderTableRows(stat));
}

resetButton.addEventListener('click', () => {
    const emptyArray = [];
    setPokeStats(emptyArray);
    window.location = '../';
    console.log('hey');
});