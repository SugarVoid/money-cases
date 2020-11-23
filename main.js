class Game {
    constructor() { }

    playerName = ''
    activeGame = true
    playerWinnings = 0
    bankerOffer = 0
    round = 0
}

class Case {
    constructor() { }

}

const game = {
    activeBoard: true,
    playerName: 'Player',
    playerWinnings: 0,
    offerValue: 0,
    round: 0,
    casesToOpen: 26,
    prizeValues: [.01, 1, 5, 10, 50, 100, 250, 500, 750, 1000, 3000, 5000, 10000, 15000, 25000, 50000, 75000, 100000, 250000, 500000],
    selectedValues: [0],
}

const lbl1 = document.getElementById('1case')


function toggleLabel() {
    lbl1.classList.toggle('grayedOut')

}

function Simp() {
    console.log('test')
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}