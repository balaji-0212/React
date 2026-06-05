export default function LoadingState({ label = 'Loading content' }) {
  return (
    <div className="loading-state" aria-live="polite">
      <span />
      <p>{label}</p>
    </div>
  );
}
