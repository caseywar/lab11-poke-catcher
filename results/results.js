import { getPokeStats, setPokeStats } from '../localStorageUtils.js';
import { renderTableRows, renderSeenResults } from './results-utils.js';
import { makeSeenArray, makeCaughtArray, makeLabelsArray } from './mungeUtils.js';

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

const pokeStats = getPokeStats();

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: makeLabelsArray(pokeStats),
        datasets: [{
            label: 'number of times seenn',
            data: makeSeenArray(pokeStats),
            backgroundColor: 'rgba(252, 85, 218, 0.79)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2
        },
        {
            label: 'number of times caught',
            data: makeCaughtArray(pokeStats),
            backgroundColor: 'rgba(190, 250, 25, 0.79)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 2
        }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});