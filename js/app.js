/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const resetButton = document.querySelector('#btn__reset');
const qwerty = document.querySelector('#qwerty');
const keys = document.querySelectorAll('.key')

    // starts the game
resetButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
})

    // adds interactions when user clicks on-screen keyboard
keys.forEach(key => {
    key.addEventListener('click', () => {
        game.handleInteraction(key);
    })
})

    // adds interaction with user presses keys on actual keyboard
document.body.addEventListener('keyup', (e) => {
    keys.forEach(keyPressed => {
        if (e.key === keyPressed.textContent) {
            game.handleInteraction(keyPressed)
        }
    })
})
 
