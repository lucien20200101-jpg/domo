type InfoCardProps = {
  title: string;
  value: string;
  detail: string;
};

export function InfoCard({ title, value, detail }: InfoCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <h2 className="text-sm font-medium text-slate-600">{title}</h2>
      <p className="mt-2 text-2xl font-semibold text-slate-900">{value}</p>
      <p className="mt-1 text-xs text-slate-500">{detail}</p>
    </article>
  );
}
