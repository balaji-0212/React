function Loading({ message = 'Loading data...' }) {
  return (
    <div className="state-message loading-state" role="status" aria-live="polite">
      <span className="loader" aria-hidden="true" />
      <p>{message}</p>
    </div>
  );
}

export default Loading;
