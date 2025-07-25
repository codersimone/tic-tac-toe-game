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
            gameOver = true;
        } else if (checkDraw(board)) {
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

    function isGameOver() {
        return gameOver;
    }

    return {
        setPlayers,
        getCurrentPlayer,
        playRound,
        restart,
        checkWinner,
        checkDraw,
        isGameOver,
    };
})();

const dispayController = (function () {
    const boardElement = document.querySelector('.board');
    const massageElement = document.querySelector('.massage');
    const startButton = document.querySelector('.start-btn');
    const restartButton = document.querySelector('.restart-btn');
    const playerXInput = document.getElementById('x-player-name');
    const playerOInput = document.getElementById('o-player-name');

    function renderBoard() {
        const board = gameBoard.getBoard();

        boardElement.innerHTML = '';

        board.forEach((cell, index) => {
            const boardCell = document.createElement('div');
            boardCell.classList.add('board-cell');
            boardCell.textContent = cell;
            boardCell.dataset.index = index;

            boardCell.addEventListener('click', () => {
                if (cell !== '' || gameController.isGameOver()) {
                    return;
                }
                gameController.playRound(index);
                renderBoard();
                updateMessage();
            });
            boardElement.appendChild(boardCell);
        });
    }

    function updateMessage() {
        const board = gameBoard.getBoard();
        if (gameController.checkWinner(board)) {
            const winner = gameController.getCurrentPlayer().getName();
            massageElement.textContent = `${winner} wins!`;
        } else if (gameController.checkDraw(board)) {
            massageElement.textContent = `It's a draw!`;
        } else {
            const current = gameController.getCurrentPlayer().getName();
            massageElement.textContent = `The turn of the player ${current}!`;
        }
    }

    startButton.addEventListener('click', () => {
        const playerX = playerXInput.value.trim() || 'Player X';
        const playerO = playerOInput.value.trim() || 'Player O';

        gameController.setPlayers(playerX, playerO);
        gameController.restart();
        renderBoard();
        updateMessage();
    });

    restartButton.addEventListener('click', () => {
        gameController.restart();
        renderBoard();
        updateMessage();
    });

    renderBoard();
})();
