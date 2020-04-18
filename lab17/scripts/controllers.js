const getMin = () => document.getElementById('min-value').value;
const getMax = () => document.getElementById('max-value').value;

const getCallbacks = function(){
    const callbacks = {};
    callbacks['new-game-button'] = newGameMenu;
    callbacks['start-game-button'] = startGame;
    return callbacks;

}

const addController = function(...buttonIDs){
    const callbacks = getCallbacks();
    for(let id of buttonIDs){
        const button = document.getElementById(id);
        button.addEventListener('click', callbacks[id])
    }
}
