function ErrorMessage({ title = 'Something went wrong', message }) {
  return (
    <div className="state-message error-state" role="alert">
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;
