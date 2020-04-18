const getCallbacks = function(){
    const callbacks = {};
    callbacks['new-game-button'] = newGameMenu;
    return callbacks;

}

const addController = function(...buttonIDs){
    const callbacks = getCallbacks();
    for(let id of buttonIDs){
        const button = document.getElementById(id);
        button.addEventListener('click', callbacks[id])
    }
}