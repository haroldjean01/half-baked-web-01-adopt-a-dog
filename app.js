// Imports
import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

// Elements
const dogListContainer = document.getElementById('dog-list-container');
let allDogs = [];

// on load
window.addEventListener('load', async () => {
    const response = await getDogs();
    allDogs = response.data;
    displayDogs();
});
// fetch all dogs
getDogs();
// render and append all dog cards to the container
function displayDogs() {
    for (let dog of allDogs) {
        const dogEl = renderDogCard(dog);
        dogListContainer.append(dogEl);
    }
}
