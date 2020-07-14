/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

'use strict';

const game = new Game();
const btnStart = document.getElementById('btn__reset');
btnStart.addEventListener('click', () => {
    game.resetGame();
    game.startGame();
});

const divQuerty = document.querySelector('div#qwerty');
divQuerty.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName === 'BUTTON') {
        game.handleInteraction(target);
    }
});
