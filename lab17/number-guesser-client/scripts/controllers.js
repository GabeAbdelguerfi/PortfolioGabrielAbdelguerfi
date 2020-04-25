const getMin = () => document.getElementById('min-value').value;
const getMax = () => document.getElementById('max-value').value;
const getGameID = () => document.getElementById('room-code').value;
const getGuess = () => document.getElementById('guess-input').value;

const getCallbacks = function(){
    const callbacks = {};
    callbacks['new-game-button'] = newGameMenu;
    callbacks['start-game-button'] = startGame;
    callbacks['join-game-button'] = joinGameMenu;
    callbacks['find-game-button'] = findGame;
    callbacks['submit-guess-button'] = submitGuess;
    callbacks['reset-game-button'] = resetGame;
    callbacks['quit-game-button'] = mainMenu;
    return callbacks;

}

const addController = function(...buttonIDs){
    const callbacks = getCallbacks();
    for(let id of buttonIDs){
        const button = document.getElementById(id);
        button.addEventListener('click', callbacks[id])
    }
}
