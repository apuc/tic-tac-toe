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
