// Signatures that connect to game display. 
const startGameBtn = document.querySelector(".startBtn");
startGameBtn.addEventListener('click', function (e) {
    clearBoard();
})

const container = document.querySelector(".container");
container.addEventListener('click', function (e) {
    currGame.playRound();
    e.target.textContent = charTracker.char;
    e.target.style.color = 'black';
});


// Module that creates gameBoard grid
const gameBoard = (() => {
    const grids = [[], [], []];
    return {
        grids
    }
})();

// Factory that stores player info
const Player = (name, symbol) => {
    this.name = name;
    let isUp = true;
    this.symbol = symbol;
    return {name, symbol, isUp};
}

// Module that starts Game and asks for input. 
const startGame = () => {
    const hasStarted = false;
    return {hasStarted};
}


const player1 = Player('George', 'X')
const player2 = Player('Tyson', 'O')

const currChar = () => {
    this.char = 'H';
    return {char};
}

charTracker = currChar(); 

const Game = (player1, player2) => {
    const playRound = () => {
        if (player1.isUp) {
            charTracker.char = player1.symbol;
            player1.isUp = false;
            player2.isUp = true;
        } else if (player2.isUp) {
            charTracker.char = player2.symbol;
            player1.isUp = true;
            player2.isUp = false;
        }
    }
    return {playRound};
};


//function that clears current board
function clearBoard() {
    const spaces = document.querySelector(".container").children
    for (var i=0; i<spaces.length; i++) {
        spaces[i].style.color = 'rgba(209, 80, 80, 0)';
        spaces[i].textContent = 'Y';
    }
}

// Need this to initialize game
let currGame = Game(player1, player2);
