const gameBoard = (function () {
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

const gameController = (function () {
    let firstPlayer;
    let secondPlayer;
    let currentPlayer;
    let gameOver = false;

    function setPlayers(firstPlayerName, secondPlayerName) {
        firstPlayer = Player(firstPlayerName, 'X');
        secondPlayer = Player(secondPlayerName, 'O');
        currentPlayer = firstPlayer;
    }

    function getCurrentPlayer() {
        return currentPlayer;
    }

    function switchPlayer() {
        currentPlayer =
            currentPlayer === firstPlayer ? secondPlayer : firstPlayer;
    }

    function playRound(index) {
        const board = gameBoard.getBoard();

        if (gameOver || !gameBoard.setCell(index, currentPlayer.getSymbol())) {
            return;
        }

        if (checkWinner(board)) {
            console.log(`${currentPlayer.getName()} wins!`);
            gameOver = true;
        } else if (checkDraw(board)) {
            console.log(`It's a draw!`);
            gameOver = true;
        } else {
            switchPlayer();
        }
    }

    function checkWinner(board) {
        const winningRules = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < winningRules.length; i++) {
            const [a, b, c] = winningRules[i];
            if (
                board[a] !== '' &&
                board[a] === board[b] &&
                board[a] === board[c]
            ) {
                return true;
            }
        }
        return false;
    }

    function checkDraw(board) {
        if (checkWinner(board)) {
            return false;
        }

        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                return false;
            }
        }
        return true;
    }

    function restart() {
        gameBoard.resetBoard();
        currentPlayer = firstPlayer;
        gameOver = false;
    }

    return {
        setPlayers,
        getCurrentPlayer,
        playRound,
        restart,
    };
})();
