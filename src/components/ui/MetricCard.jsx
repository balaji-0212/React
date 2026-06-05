export default function MetricCard({ label, value, icon: Icon }) {
  return (
    <div className="glass rounded p-5">
      {Icon && <Icon className="mb-4 text-2xl text-ocean dark:text-sky-300" aria-hidden="true" />}
      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{label}</p>
      <p className="mt-2 text-lg font-bold text-slate-950 dark:text-white">{value}</p>
    </div>
  );
}
