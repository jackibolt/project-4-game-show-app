/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

const phraseUL = document.querySelector('#phrase ul');


class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase();
        
    }

        // adds seleceted phrase to the screen
    addPhraseToDisplay() {
        const letters = this.phrase.split('');
        letters.forEach(letter => {
            const letterLI = document.createElement('li');
            if (letter === ' '){
                letterLI.className = 'space';
            } else {
            letterLI.className = `hide letter ${letter}`;
            }
            letterLI.textContent = `${letter}`
            phraseUL.append(letterLI);
        })
    }


        // Checks if passed letter is in phrase
        // @param (string) letter - Letter to check
    checkLetter(letter) {
        if (this.phrase.includes(letter)){
            return true
        } else {
            return false
        }
    }

        // Displays passed letter on screen after a match is found
        // @param (string) letter - Letter to display
    showMatchedLetter(letter) {
        const currentLetters = document.querySelectorAll(`.${letter}`)
        if (this.checkLetter(letter)) {
            currentLetters.forEach(li => li.className = `show letter ${letter}`)
        }
    }
}
