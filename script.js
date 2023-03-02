// Module that creates gameBoard grid
const gameBoard = (() => {
    const grids = [[], [], []];
    return {
        grids
    }
})();

// Factory that stores player info
const Player = (name) => {
    this.name = name;
    return {name};
}

