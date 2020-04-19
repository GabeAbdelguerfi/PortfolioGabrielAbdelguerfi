const mainMenu = function(){
    const view = document.getElementById('view')
    const html = `<section>
                    <button id='new-game-button'>New Game</button>
                    <button id='join-game-button'>Join Game</button>
                    </section>`
    view.innerHTML = html;
    addController('new-game-button');

}

const newGameMenu = function(){
    const view = document.getElementById('view');
    const html = `<section>
                    Start: <input id='min-value' type=number value=0>
                    End: <input id='max-value' type=number value=1000>
                    <button id='start-game-button'>Start</button>
                    </section>`
                    view.innerHTML = html;
                    addController('start-game-button');
}

const viewGame = function(){
    console.log(gameID, min, max);
}
