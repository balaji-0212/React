import Square from './Square.jsx';

function Board({ squares, winningCells, disabled, onSquareClick }) {
  return (
    <div className="board" role="grid" aria-label="XO game board">
      {squares.map((squareValue, index) => (
        <Square
          key={index}
          value={squareValue}
          isWinningSquare={winningCells.includes(index)}
          disabled={disabled}
          onClick={() => onSquareClick(index)}
        />
      ))}
    </div>
  );
}

export default Board;
