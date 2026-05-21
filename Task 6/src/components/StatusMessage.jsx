function StatusMessage({ type, message }) {
  return (
    <div className={`status-message ${type}`} role={type === 'error' ? 'alert' : 'status'}>
      {type === 'loading' && <span className="loader" aria-hidden="true" />}
      <p>{message}</p>
    </div>
  );
}

export default StatusMessage;
