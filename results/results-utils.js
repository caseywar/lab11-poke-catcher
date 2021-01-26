// import { getPokeStats } from '../localStorageUtils.js';
import { findByUnderscoreId } from '../utils.js';
import pokemon from '../data.js';
// import { getPokeStats } from '../localStorageUtils.js';

export function renderTableRows(pokemonInArray) {
    if (pokemonInArray.caught > 0) {
        const row = document.createElement('tr');
        const imageTd = document.createElement('td');
        const image = document.createElement('img');
        const nameTd = document.createElement('td');
        const seenTd = document.createElement('td');
        const caughtTd = document.createElement('td');

        const rowItem = findByUnderscoreId(pokemon, pokemonInArray._id);

        image.src = rowItem.url_image;
        imageTd.appendChild(image);
        nameTd.textContent = rowItem.pokemon;
        seenTd.textContent = pokemonInArray.seen;
        caughtTd.textContent = pokemonInArray.caught;

        row.append(imageTd, nameTd, seenTd, caughtTd);
        return row;
    } else {
        return [];
    }
}


export function renderSeenResults(pokemonInArray) {
    if (pokemonInArray.caught === 0) {
        const row = document.createElement('tr');
        const imageTd = document.createElement('td');
        const image = document.createElement('img');
        const nameTd = document.createElement('td');
        const seenTd = document.createElement('td');

        const rowItem = findByUnderscoreId(pokemon, pokemonInArray._id);
        image.src = rowItem.url_image;
        imageTd.appendChild(image);
        nameTd.textContent = rowItem.pokemon;
        seenTd.textContent = pokemonInArray.seen;
        row.append(imageTd, nameTd, seenTd,);
        return row;
    } else {

        return [];
    }
}