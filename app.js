(function runApp() {
    console.log('Don\'t look at me, I\'m hideous! --Cueur Delacour _ Harry Potter.')
    let countDisplay = document.querySelector('#count');
    let time = 0;
    let timer;

    function startTimer() {
        window.setInterval(() => {
            incrementTime(1);
            setDisplayCount(time);
        }, 1000);
    }

    function incrementTime(inc) {
        time += inc;
    }

    function setDisplayCount(num) {
        countDisplay.textContent = num;
    }

    startTimer();
})();