/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

const startScreenOverlay = document.querySelector('#overlay');
let randomPhrase;
const overlay = document.querySelector('#overlay');
const gameOverMessage = document.querySelector('#game-over-message');

class Game {
    constructor () {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = 'null';
    }


        // Creates phrases for use in game
        // @return [array] An array of phrases that could be used in the game
    createPhrases() {
        const phrases = [new Phrase('They call me Prank Sinatra'),
                        new Phrase('This is going to be legendary'),
                        new Phrase('Suit up'),
                        new Phrase('Designers make it work'),
                        new Phrase('Winter is coming')
        ];
        return phrases
    }

        // returns a new Phrase object at random
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

        // starts the game
    startGame(){
        this.reset();
        overlay.style.display = 'none';
        const currentPhrase = this.getRandomPhrase()
        currentPhrase.addPhraseToDisplay();
        this.activePhrase = currentPhrase;

    }

        // Checks for winning move
        // @return {boolean} True if game has been won, false if game wasn't
    checkForWin() {
        const hide = document.querySelectorAll('.hide')
        if (this.missed < 5 && hide.length === 0) {
            return true;
        } else {
            return false;
        }
    }

        // Increases the value of the missed property
        // Removes a life from the scoreboard
        // Checks if player has remaining lives and ends game if player is out
    removeLife() {
        this.missed += 1;
        const heart = document.querySelector("img[src*='live']")
        if (heart){
        heart.setAttribute('src', 'images/lostHeart.png');
        }
        else if (!heart) {
            this.gameOver();
        }
    }

        // Displays game over message
        // @param {boolean} gameWon - Whether or not the user won the game
    gameOver(gameWon) {
        overlay.style.display = 'block';
        if (this.checkForWin()){
            gameOverMessage.textContent = 'Great Job - You Win!'
            overlay.style.backgroundColor = 'green';
        } else {
            gameOverMessage.textContent = 'Yikes. Better luck next time.'
            overlay.style.backgroundColor = '#FF6545';
        }
        resetButton.textContent = 'Play Again';

    }

        // Handles keyboard button clicks
        // @param (key) the keyboard button that has been clicked or pressed
    handleInteraction(key) {
        if (game.activePhrase.checkLetter(key.textContent)) {
            key.setAttribute('disabled', true);
            game.activePhrase.showMatchedLetter(key.textContent);
            key.className = 'key chosen';
            if (this.checkForWin()){
                setTimeout(function () {
                    game.gameOver(true)
                    }, 1500
                );
            } 
        }
        else {
            key.className = 'key wrong';
            key.setAttribute('disabled', true); 
            this.removeLife()
            this.checkForWin();
            if (this.missed === 5){
                setTimeout(function () {
                    game.gameOver(false)
                    }, 500
                );
            }
        }
    }

        // resets the board to default settings
    reset() {
        const phraseUL = document.querySelector('#phrase ul');
        const phraseLIs = document.querySelectorAll('#phrase li')
        phraseLIs.forEach(li => {
            phraseUL.removeChild(li);
        })

        const keys = document.querySelectorAll('.key');
        keys.forEach(key => {
            key.disabled = false;      
            key.className = 'key';   
        })

        this.missed = 0;
        const hearts = document.querySelectorAll("img[src*='Heart']")
        hearts.forEach(heart => {
            heart.setAttribute('src', 'images/liveHeart.png');
        })
        
        
    }

}
