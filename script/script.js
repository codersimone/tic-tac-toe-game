const gameboard = (function () {
    let board = ['', '', '', '', '', '', '', '', ''];

    function getBoard() {
        return board;
    }

    function setCell(index, cell) {
        if (board[index] === '') {
            board[index] = cell;
            return true;
        }
        return false;
    }

    function resetBoard() {
        board = ['', '', '', '', '', '', '', '', ''];
    }

    return {
        getBoard,
        setCell,
        resetBoard,
    };
})();

function Player(name, symbol) {
    return {
        getName: () => name,
        getSymbol: () => symbol,
    };
}
