/**
 * Created by apuc0 on 23.09.2017.
 */
function Ttt() {

    this.activeType = 1;
    //Инициализация доски
    this.initBoard = function (id, options) {

        this.defaultParams = {
            width:'300px',
            height:'300px',
            backgroundColor: 'Black',
            backgroundColorCell: 'White'
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

        this.board = document.getElementById(id);
        this.board.style.width = this.options.width;
        this.board.style.height = this.options.height;
        this.board.style.backgroundColor = this.options.backgroundColor;
        this.createCells();
    };

    this.test = function () {

    };

    this.createCells = function () {
        for (var i=0;i<9;i++){
            var cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('data-type', 0);
            cell.setAttribute('data-position', i+1);
            cell.onclick = this.clickToCell.bind(this);
            cell.style.backgroundColor = this.options.backgroundColorCell;
            this.board.appendChild(cell);
        }
    }

    this.clickToCell = function (event) {
        if(event.target.getAttribute('data-type') == 0){
            event.target.innerHTML = this.activeType === 1 ? 'x' : 'o';
            event.target.setAttribute('data-type', this.activeType);
            this.activeType = this.activeType === 1 ? 2 : 1;
            console.log(event.target);
            console.log(this);
        }
    }

    this.getElementByAttr = function (attr, value) {
        var elems = document.getElementsByTagName( '*' );
        for( var i =0; elems.length; i++ ) {
            if ( elems[i].getAttribute( attr ) == value ) {
                return elems[i];
            }
        }
    }

    this.setCellColor = function (position, color) {
        var cell = this.getElementByAttr('data-position', position);
        cell.style.backgroundColor = color;
    }

}