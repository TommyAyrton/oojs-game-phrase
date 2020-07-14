/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
'use strict';
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
     * Create phrases for use in game
     * @return {array} An array of phrases that could be used in the game
     */
    createPhrases() {
        const arrPhrases = [
            new Phrase('Life is like a box of chocolates'),
            new Phrase('there is no trying'),
            new Phrase('may the force be with you'),
            new Phrase('you have to see the matrix for yourself'),
            new Phrase('YOU TALKING TO ME'),
        ];
        return arrPhrases;
    }

    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase() {
        let len = this.phrases.length;
        const index = Math.floor(Math.random() * len);
        return this.phrases[index];
    }

    /**
     * Begins game by selecting a random phrase and displaying it to user
     * */
    startGame() {
        const divOverlay = document.querySelector('div#overlay');
        divOverlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        console.log('start game');
    }

    /**
     * Checks for winning move
     * @return {boolean} True if game has been won, false if game wasn't won
     */
    checkForWin() {
        const liElements = document.querySelectorAll('li.hide');
        const lengthLi = liElements.length;
        const res = lengthLi === 0 ? true : false;
        return res;
    }

    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife() {
        const imgTries = document.querySelectorAll('img');
        const len = imgTries.length;
        // if (!this.checkForWin()) {
        if (this.missed < len) {
            imgTries[this.missed].setAttribute('src', 'images/lostHeart.png');
            this.missed++;
        }
        if (len - this.missed === 0) {
            this.gameOver(false);
        }
    }

    /** * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */
    gameOver(gameWon) {
        const divOverlay = document.querySelector('div#overlay');
        const messageGame = document.getElementById('game-over-message');
        divOverlay.style.display = 'block';
        if (gameWon) {
            divOverlay.classList.replace('start', 'win');
            messageGame.innerText = 'Congratulations you win the game';
        } else {
            divOverlay.classList.replace('start', 'lose');
            messageGame.innerText = 'You lose, better luck next time';
        }
    }

    /**
     * Handles onscreen keyboard button clicks
     * @param (HTMLButtonElement) button - The clicked button element
     */
    handleInteraction(button) {
        console.log(button);
        button.disabled = true;
        if (this.activePhrase.showMatchedLetter(button.innerText)) {
            button.classList.add('chosen');
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }
        if (this.checkForWin()) {
            this.gameOver(true);
        }
    }

    /**
     * Reset for a new game
     * Initial values
     */
    resetGame() {
        this.missed = 0;
        this.activePhrase = null;
        const deleteLiPhrase = document.querySelector('div#phrase');
        deleteLiPhrase.innerHTML = '';
        const images = document.querySelectorAll('img');
        for (let i = 0, len = images.length; i < len; i++) {
            images[i].setAttribute('src', 'images/liveHeart.png');
        }
        const keys = document.querySelectorAll('button.key');
        for (let i = 0; i < keys.length; i++) {
            keys[i].className = 'key';
            keys[i].disabled = '';
        }
    }
}
