const shortid = require('shortid');

class Game{
    constructor(){
        this.games = {};
    }

    create(start, end){
        const number = ~~(Math.random() * end + start)
        const id = shortid.generate();
        let game = {'number': number,'start':start,'end':end,'gameover':false};
        this.games[id] = game;
        console.log(this.games);
        return id;
    }

    get(id){
        if (this.games[id]){
            const {number, ...data} = this.games[id];
            return data;
        }
        else{
            return null;
        }
    }

    guess(id,guess){
        if(!this.games[id]){
            return null;
        }
        const game = this.games[id];
        if(game.gameover == true){
            return {'guess': 'gameover'}
        }
        else if(game.number == guess){
            game.gameover = true;
            return {'guess': 'correct'}
        }
        else if(game.number > +guess){
            return {'guess': 'too low'}
        }
        else if(game.number < +guess){
            return {'guess': 'too high'}
        }
        else{
            return {'guess': 'error'}
        }
    }

    reset(id){
        if(this.games[id] && this.games[id].gameover){
            const game = this.games[id];
            game.number = ~~(Math.random() * game.end + game.start)
            game.gameover = false;
            const {number, ...data} = game;
            return data;
        }
        return null;
    }
}

module.exports = new Game();