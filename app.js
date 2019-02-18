(function runApp() {
    let countDisplay = Document.getElementById('count');
    let time;
    let timer;

    function startTimer() {
        time = Window.setInterval(() => {
            incrementTime();
            setDisplayCount(time);
        }, 1000);
    }

    function incrementTime(){
        time += 1;
    }

    function setDisplayCount(num) {
        countDisplay.INNERHTML = num;
    }

})();