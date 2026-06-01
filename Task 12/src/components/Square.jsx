function Square({ value, isWinningSquare, disabled, onClick }) {
  const squareClassName = [
    'square',
    value ? 'square-filled' : '',
    value ? `square-${value.toLowerCase()}` : '',
    isWinningSquare ? 'square-winning' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={squareClassName}
      type="button"
      onClick={onClick}
      disabled={disabled || Boolean(value)}
      aria-label={value ? `Square marked ${value}` : 'Empty square'}
    >
      {value}
    </button>
  );
}

export default Square;
