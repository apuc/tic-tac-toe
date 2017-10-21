function TttPlayer() {

    this.MakeAMove = function (cells, activeType, victoriousCombinations) {
        return this.move(cells, activeType, victoriousCombinations);
    };

    this.randomMove = function (cells, activeType) {
        var emptyCells = [];
        for (var i = 1; i <= 9; i++) {
            if (cells[i] == 0) {
                emptyCells.push(i);
            }
        }
        var rand = Math.floor(Math.random() * emptyCells.length);
        return {position: emptyCells[rand], type: activeType};
    };

    this.move = function (cells, activeType, victoriousCombinations) {
        var tttPlayerCells = this.scanCells(cells, 2);
        var playerCells = this.scanCells(cells, 1);
        var tttMove = this.scanForWinTttPlayer(cells, playerCells, victoriousCombinations);
        var playerMove = this.scanForWinTttPlayer(cells, tttPlayerCells, victoriousCombinations);

        if(playerMove !== false && cells[playerMove] == 0){
            return {position: playerMove, type: activeType};
        }
        if(tttMove !== false && cells[tttMove] == 0){
            return {position: tttMove, type: activeType};
        }
        return this.randomMove(cells, activeType);

    };

    this.scanForWinTttPlayer = function(cells, tttPlayerCells, victoriousCombinations){

        for (var i = 0; i < victoriousCombinations.length; i++){
            var result = this.scanForMove(victoriousCombinations[i], tttPlayerCells);
            if(result.length === 1){
                if (cells[result[0]] == 0){
                    return result[0];
                }
            }
        }
        return false;
    };

    this.scanCells = function(cells, type){
        var result = [];
        for (var i = 0; i < cells.length; i++){
            if(cells[i] == type){
                result.push(i);
            }
        }
        return result;
    };

    this.scanForMove = function(victoriousCombination, playerCells){
        var turns = [];
        var move = [];

        victoriousCombination.map(function (elem) {
            if (playerCells.indexOf(elem) >= 0){
                turns.push(elem);
            }else{
                move.push(elem);
            }
        });

        return move;
    }

}