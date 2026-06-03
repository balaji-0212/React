import { AlertCircle } from 'lucide-react';

function ErrorMessage({ message }) {
  return (
    <div className="error-message" role="alert">
      <AlertCircle size={22} aria-hidden="true" />
      <span>{message}</span>
    </div>
  );
}

export default ErrorMessage;
