export default function Skeleton({ rows = 3 }) {
  return (
    <div className="space-y-3" aria-label="Loading content">
      {Array.from({ length: rows }).map((_, index) => (
        <div
          key={index}
          className="h-12 animate-pulse rounded bg-slate-200/80 dark:bg-slate-700/70"
          style={{ width: `${100 - index * 12}%` }}
        />
      ))}
    </div>
  );
}
