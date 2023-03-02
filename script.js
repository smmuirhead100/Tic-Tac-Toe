// Signatures that connect to game display. 
const space1 = document.querySelector(".container");
space1.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
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
    this.symbol = symbol;
    return {name, symbol};
}

// Module that manipulates gameBoard


const Game = ((player1, player2) => {
    
}
)

