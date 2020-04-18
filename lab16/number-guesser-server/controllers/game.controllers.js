const game = require('../models/game.model');
class Controllers{
    test(request, response){
        response.json({'success': true});
    }

    newGame(request, response){
        const {start, end} = request.query;
        const id = game.create(start, end);
        response.json({'success': true , 'gameID': id});
    }

    getGame(request, response){
        const id = request.params.id;
        const data = game.get(id)
        if(data){
            data["success"] = true;
            response.json(data);
        }
        else{
            response.json({"success": false})
        } 
    }

        guess(request, response){
            const id = request.params.id;
            const { guess} = request.query;
            const result = game.guess(id, guess);
            if(result){
                result['success'] = true;
                response.json(result);
            }
            else{
                response.json({'success': false})
            }
        }

        resetGame(request, response){
            const id = request.params.id;
            const result = game.reset(id);
            if(result){
                result['success'] = true;
                response.json(result)
            }
            else{
                response.json( {'success' :false})
            }
        }
}

module.exports = new Controllers();