/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
'use strict';
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     *
     * Display phrase on game board
     * */
    addPhraseToDisplay() {
        const divPhrase = document.querySelector('div#phrase');
        const ul = document.createElement('ul');
        const splitPhrase = this.phrase.split('');
        for (let i = 0, len = splitPhrase.length; i < len; i++) {
            const li = document.createElement('li');
            if (splitPhrase[i] === ' ') {
                li.className = `space`;
            } else {
                li.className = `hide letter ${splitPhrase[i]}`;
                li.innerText = `${splitPhrase[i]}`;
            }
            ul.appendChild(li);
        }
        divPhrase.appendChild(ul);
    }

    /**
     * Checks if passed letter is in phrase
     * @param (string) letter - Letter to check
     */
    checkLetter(letter) {
        const splitPhrase = this.phrase.split('');
        let res = splitPhrase.indexOf(letter) != -1 ? true : false;
        return res;
    }

    /**
     * Displays passed letter on screen after a match is found
     * @param (string) letter - Letter to display
     */
    showMatchedLetter(letter) {
        if (this.checkLetter(letter)) {
            const arrOfLi = document.getElementsByClassName(`${letter}`);
            console.log(arrOfLi);
            for (let i = 0, len = arrOfLi.length; i < len; i++) {
                arrOfLi[i].classList.replace('hide', 'show');
            }
            return true;
        }
    }
}
