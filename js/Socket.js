function Socket() {

    this.connect = function (ip, port) {
        this.socket = new WebSocket("ws://"+ip+":"+port);
        this.socket.onopen = this.connectSuccessful;
        this.socket.onclose = this.onclose;
    };

    this.connectSuccessful = function () {
        console.log("Соединение установлено.");
    };

    this.onclose = function (event) {
        if (event.wasClean) {
               alert('Соединение закрыто чисто');
           } else {
               alert('Обрыв соединения'); // например, "убит" процесс сервера
           }
           alert('Код: ' + event.code + ' причина: ' + event.reason);
    }

}

var victoriousCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

var victoriousCombinations2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];
