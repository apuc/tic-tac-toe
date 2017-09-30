/**
 * Created by apuc0 on 23.09.2017.
 */
document.addEventListener('DOMContentLoaded', function(){
    var ttt = new Ttt();

    ttt.initBoard('tttWrap', {
        width:'350px',
        backgroundColorCell:'Yellow',
        backgroundColorCellVictory:'RED',
        customVictoryScenario: function (type, title) {
            var msg = document.createElement('div');
            msg.innerHTML = 'Победили: ' + (type === 1 ? 'Крестики' : 'Нолики');
            title.appendChild(msg);
            console.log(title);
        },
        customTieScenario: function (title) {
            var msg = document.createElement('div');
            msg.innerHTML = 'Победила дружба';
            title.appendChild(msg);
            console.log(title);
        },
        ai: new TttPlayer()
    });
});

