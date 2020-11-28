const lbl1 = document.getElementById('1case')

const dollarAmounts = [.01, 1, 5, 10, 25, 50, 75, 100, 200, 300, 400, 500, 750, 1000, 5000,
    10000, 25000, 50000, 75000, 100000, 200000, 300000, 400000, 500000, 750000, 1000000]

let shuffledAmounts = null
let numberZ = []

class Case {

    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
        this.isOpen - false;
    }

    showCase() {
        console.log(`Case Data:\n Case Number: ${this.name}\n Amount: ${dollarMe(this.amount)}`)
    }

}

class Game {

    constructor() {
        this.playerName = '';
        this.activeGame = true
        this.playerWinnings = 0
        this.bankerOffer = 0
        this.round = 0
        this.casesLeft = 26
        this.gameCases = []
    }
}

function dollarMe(num) {
    // Create our number formatter.
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    return formatter.format(num);
}

shuffledAmounts = dollarAmounts.sort(() => Math.random() - 0.5)

// Instantiate an object of type Case(): 

let butts = new Case("1", 1500)
let g = new Game()

for (let step = 1; step < 27; step++) {
    // Runs 5 times, with values of step 0 through 4.
    let newCase = new Case(step, shuffledAmounts[step - 1])
    g.gameCases.push(newCase)
    // numberZ.push(step)
}

shuffledAmounts.forEach(c => {
    let newCase = new Case()
});



console.log(g.casesLeft)
butts.showCase();


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