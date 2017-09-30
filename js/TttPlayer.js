function TttPlayer() {

    this.MakeAMove = function (cells, activeType) {
        return this.randomMove(cells, activeType);
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
    }

}