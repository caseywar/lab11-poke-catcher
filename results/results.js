import { getPokeStats, setPokeStats } from '../localStorageUtils.js';
import { renderTableRows, renderSeenResults } from './results-utils.js';

const table = document.getElementById('caught-table');
const resetButton = document.getElementById('reset-button');
const currentStats = getPokeStats();
const SeenTable = document.getElementById('seen-table');


for (let stat of currentStats) {
    table.append(renderTableRows(stat));
}
for (let stat of currentStats) {
    SeenTable.append(renderSeenResults(stat));
}

resetButton.addEventListener('click', () => {
    const emptyArray = [];
    setPokeStats(emptyArray);
    window.location = '../';
});