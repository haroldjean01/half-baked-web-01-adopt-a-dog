// Imports
import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

// Elements
const dogListContainer = document.getElementById('dog-list-container');

// on load

// fetch all dogs
window.addEventListener('load', async () => {
    await getDogs();
});
// render and append all dog cards to the container
renderDogCard();
