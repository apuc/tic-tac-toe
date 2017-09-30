/**
 * Created by apuc0 on 23.09.2017.
 */
function Ttt() {

    this.activeType = 1;
    this.gameStop = 0;
    this.vc = [];
    this.step = 0;
    this.ai = false;

    this.initBoard = function (id, options) {

        this.defaultParams = {
            width: '300px',
            height: '300px',
            backgroundColor: 'Black',
            backgroundColorCell: 'White',
            backgroundColorCellVictory: 'GREEN',
            ai: false,
            customVictoryScenario: function (victoryType, titleBoard) {
            },
            customTieScenario: function (titleBoard) {
            }
        };

        this.finalParams = this.defaultParams;

        for (var key in options) {
            if (options.hasOwnProperty(key)) {
                if (options[key] !== undefined) {
                    this.finalParams[key] = options[key];
                }
            }
        }
        this.options = this.finalParams;

        this.ai = this.options.ai;
        this.board = document.getElementById(id);
        this.createMainTags();
        this.boardBody.style.width = this.options.width;
        this.board.style.width = this.options.width;
        this.boardBody.style.height = this.options.height;
        this.boardBody.style.backgroundColor = this.options.backgroundColor;
        this.createCells();
    };

    this.test = function () {

    };

    this.createCells = function () {
        for (var i = 0; i < 9; i++) {
            var cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('data-type', 0);
            cell.setAttribute('data-position', i + 1);
            cell.onclick = this.clickToCell.bind(this);
            cell.style.backgroundColor = this.options.backgroundColorCell;
            this.boardBody.appendChild(cell);
        }
    };

    this.createMainTags = function () {
        this.boardTitle = document.createElement('div');
        this.boardBody = document.createElement('div');
        this.boardTitle.classList.add('boardTitle');
        this.boardBody.classList.add('boardBody');
        this.board.appendChild(this.boardTitle);
        this.board.appendChild(this.boardBody);
    }

    this.clickToCell = function (event) {
        if (event.target.getAttribute('data-type') == 0) {
            this.turn(event.target.getAttribute('data-position'), this.activeType);
            if (this.ai) {
                var move = this.ai.MakeAMove(this.getCells(), this.activeType);
                this.turn(move.position, move.type);
            }
        }
    };

    this.turn = function (position, type) {
        if (this.gameStop === 0) {
            var cell = this.getElementByAttr('data-position', position);
            this.step++;
            cell.innerHTML = type === 1 ? 'x' : 'o';
            cell.setAttribute('data-type', type);
            this.vc = this.hasVictory(this.activeType);
            if (this.vc) {
                this.victoryScenario();
            }
            else {
                if (this.step === 9) {
                    this.tieScenario();
                }
                else {
                    this.activeType = this.activeType === 1 ? 2 : 1;
                }
            }
        }
    };

    this.getElementByAttr = function (attr, value) {
        var elems = document.getElementsByTagName('*');
        for (var i = 0; elems.length; i++) {
            if (elems[i].getAttribute(attr) == value) {
                return elems[i];
            }
        }
    };

    this.getCells = function () {
        var arr = [];
        for (var i = 1; i <= 9; i++) {
            arr[i] = this.getElementByAttr('data-position', i).getAttribute('data-type');
        }
        return arr;
    };

    this.setCellColor = function (position, color) {
        var cell = this.getElementByAttr('data-position', position);
        cell.style.backgroundColor = color;
    };

    this.victoryScenario = function () {
        this.gameStop = 1;
        this.step = 0;
        for (var i = 0; i < this.vc.length; i++) {
            this.setCellColor(this.vc[i], this.options.backgroundColorCellVictory);
        }
        var newGameBtn = document.createElement('a');
        newGameBtn.classList.add('newGameBtn');
        newGameBtn.innerHTML = 'Новая игра';
        this.boardTitle.appendChild(newGameBtn);
        newGameBtn.onclick = this.newGameScenario.bind(this);
        this.options.customVictoryScenario(this.activeType, this.boardTitle);
    };

    this.tieScenario = function () {
        this.gameStop = 1;
        this.step = 0;
        var newGameBtn = document.createElement('a');
        newGameBtn.classList.add('newGameBtn');
        newGameBtn.innerHTML = 'Новая игра';
        this.boardTitle.appendChild(newGameBtn);
        newGameBtn.onclick = this.newGameScenario.bind(this);
        this.options.customTieScenario(this.boardTitle);
    };

    this.newGameScenario = function () {
        this.clearCells();
        this.activeType = 1;
        this.gameStop = 0;
        this.boardTitle.innerHTML = '';
        this.vc = false;
    };

    this.clearCells = function () {
        for (var i = 1; i <= 9; i++) {
            this.setCellColor(i, this.options.backgroundColorCell);
            this.getElementByAttr('data-position', i).innerHTML = '';
            this.getElementByAttr('data-position', i).setAttribute('data-type', 0);
        }
    };

    this.hasVictory = function (activeType) {
        for (var i = 0; i < this.victoriousCombinations.length; i++) {
            var comb = this.victoriousCombinations[i];
            var type_1 = this.getElementByAttr('data-position', comb[0]).getAttribute('data-type');
            var type_2 = this.getElementByAttr('data-position', comb[1]).getAttribute('data-type');
            var type_3 = this.getElementByAttr('data-position', comb[2]).getAttribute('data-type');
            if (type_1 == activeType && type_2 == activeType && type_3 == activeType) {
                return comb;
            }
        }
        return false;
    };

    this.victoriousCombinations = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ]

}