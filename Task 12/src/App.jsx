import { useState } from 'react';
import { RotateCcw, Sparkles } from 'lucide-react';
import Board from './components/Board.jsx';
import GameStatus from './components/GameStatus.jsx';
import './App.css';

const initialBoard = Array(9).fill(null);

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function findGameResult(board) {
  for (const combination of winningCombinations) {
    const [firstIndex, secondIndex, thirdIndex] = combination;

    if (
      board[firstIndex] &&
      board[firstIndex] === board[secondIndex] &&
      board[firstIndex] === board[thirdIndex]
    ) {
      return {
        winner: board[firstIndex],
        winningCells: combination,
        isDraw: false,
      };
    }
  }

  return {
    winner: null,
    winningCells: [],
    isDraw: board.every(Boolean),
  };
}

function App() {
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [score, setScore] = useState({ X: 0, O: 0 });

  const gameResult = findGameResult(board);
  const isGameOver = Boolean(gameResult.winner) || gameResult.isDraw;

  function handleSquareClick(squareIndex) {
    if (board[squareIndex] || isGameOver) {
      return;
    }

    const nextBoard = board.map((squareValue, index) =>
      index === squareIndex ? currentPlayer : squareValue,
    );
    const nextResult = findGameResult(nextBoard);

    setBoard(nextBoard);

    if (nextResult.winner) {
      setScore((previousScore) => ({
        ...previousScore,
        [nextResult.winner]: previousScore[nextResult.winner] + 1,
      }));
      return;
    }

    if (!nextResult.isDraw) {
      setCurrentPlayer((player) => (player === 'X' ? 'O' : 'X'));
    }
  }

  function resetGame() {
    setBoard(initialBoard);
    setCurrentPlayer('X');
  }

  return (
    <main className="app-shell">
      <section className="game-card" aria-label="Tic Tac Toe game">
        <div className="game-header">
          <div>
            <p className="eyebrow">Task 12</p>
            <h1>XO Game</h1>
          </div>
          <div className="header-badge" aria-label="Game mode">
            <Sparkles size={18} aria-hidden="true" />
            <span>2 Players</span>
          </div>
        </div>

        <GameStatus
          currentPlayer={currentPlayer}
          winner={gameResult.winner}
          isDraw={gameResult.isDraw}
          score={score}
        />

        <Board
          squares={board}
          winningCells={gameResult.winningCells}
          disabled={isGameOver}
          onSquareClick={handleSquareClick}
        />

        <button className="reset-button" type="button" onClick={resetGame}>
          <RotateCcw size={19} aria-hidden="true" />
          Reset Game
        </button>
      </section>
    </main>
  );
}

export default App;
