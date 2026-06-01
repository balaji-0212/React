function GameStatus({ currentPlayer, winner, isDraw, score }) {
  const statusText = winner
    ? `Player ${winner} Wins!`
    : isDraw
      ? 'Match Draw!'
      : `Current Turn: ${currentPlayer}`;

  return (
    <div className="status-panel">
      <div className="status-copy" aria-live="polite">
        <span className="status-label">Game Status</span>
        <strong>{statusText}</strong>
      </div>

      <div className="scoreboard" aria-label="Scoreboard">
        <div className="score-card">
          <span>Player X</span>
          <strong>{score.X}</strong>
        </div>
        <div className="score-card">
          <span>Player O</span>
          <strong>{score.O}</strong>
        </div>
      </div>
    </div>
  );
}

export default GameStatus;
