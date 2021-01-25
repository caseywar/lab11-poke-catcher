import { pokemon } from './data.js';

let numberOfTurns = 0;

export function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokemon.length);

    return pokemon[randomIndex];
}

export function findByUnderscoreId(array, id) {
    for (let item of array) {
        if (item._id === id)
            return item;
    }
}

export function setThreePokemon() {
    numberOfTurns++;

    let pokeOne = getRandomPokemon();
    let pokeTwo = getRandomPokemon();
    let pokeThree = getRandomPokemon();

    const anyOfThePokemonMatch = pokeOne._id === pokeTwo._id || pokeOne._id === pokeThree._id || pokeTwo._id === pokeThree._id);

    while (anyOfThePokemonMatch) {
        pokeOne = getRandomPokemon();
        pokeTwo = getRandomPokemon();
        pokeThree = getRandomPokemon();

    }




}