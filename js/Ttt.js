/**
 * Created by apuc0 on 23.09.2017.
 */
function Ttt() {

    this.activeType = 1;

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


    var cellArr = [];
    var cell_1;
    var cell_2;
    var cell_3;
    var cell_4;
    var cell_5;
    var cell_6;
    var cell_7;
    var cell_8;
    var cell_9;
    this.createCells = function () {
        for (var i=0;i<9;i++){
            var cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('data-type', 0);
            cell.setAttribute('data-position', i+1);
            cell.onclick = this.clickToCell.bind(this);
            cell.style.backgroundColor = this.options.backgroundColorCell;
            this.board.appendChild(cell);
            cellArr.push(cell);
        }
        cell_1 = cellArr[0];
        cell_2 = cellArr[1];
        cell_3 = cellArr[2];
        cell_4 = cellArr[3];
        cell_5 = cellArr[4];
        cell_6 = cellArr[5];
        cell_7 = cellArr[6];
        cell_8 = cellArr[7];
        cell_9 = cellArr[8];
    };


    this.clickToCell = function (event) {
        if(event.target.getAttribute('data-type') == 0){
            event.target.innerHTML = this.activeType === 1 ? 'x' : 'o';
            event.target.setAttribute('data-type', this.activeType);
            this.activeType = this.activeType === 1 ? 2 : 1;
            // console.log(event.target);
            // console.log(this);
            if(cell_1.dataset.type + cell_2.dataset.type + cell_3.dataset.type === 111) {
                console.log(111)
            }
            // console.log(cell_1.dataset.type + cell_2.dataset.type + cell_3.dataset.type)

        }
    };

    this.getElementByAttr = function (attr, value) {
        var elems = document.getElementsByTagName( '*' );
        for( var i =0; elems.length; i++ ) {
            if ( elems[i].getAttribute( attr ) == value ) {
                return elems[i];
            }
        }
    };

    this.setCellColor = function (position, color) {
        var cell = this.getElementByAttr('data-position', position);
        cell.style.backgroundColor = color;
    };

}