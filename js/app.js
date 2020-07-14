/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
'use strict';
// const phrase = new Phrase('LIFE IS GOOD, enjoy');
// console.log(` Phrase - phrase : ${phrase.phrase}`);

// Step 4
// const game = new Game();
// game.phrases.forEach((phrase, index) => {
//     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

// Step 5
// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
// };
// const game = new Game();
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

// Step 6
// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

// Step 7
// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

// Step 8
const game = new Game();
const btnStart = document.getElementById('btn__reset');
btnStart.addEventListener('click', () => {
    game.resetGame();
    game.startGame();

    // game.resetGame();
    // pruebas en consola
    console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
});

const divQuerty = document.querySelector('div#qwerty');
divQuerty.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName === 'BUTTON') {
        game.handleInteraction(target);
    }
});
