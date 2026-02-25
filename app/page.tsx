import { InfoCard } from '@/components/info-card';

const cards = [
  {
    title: '静态导出',
    value: '已启用',
    detail: '通过 next.config.mjs 中 output: export 配置'
  },
  {
    title: '路由模式',
    value: 'App Router',
    detail: '使用 app/ 目录组织页面与布局'
  },
  {
    title: 'UI 样式',
    value: 'Tailwind CSS',
    detail: '简洁风格，优先信息密度与可读性'
  }
] as const;

export default function HomePage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl p-6 md:p-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Domo 仪表盘起始页</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
          该项目已按要求使用 TypeScript、Next.js App Router 与 Tailwind CSS，并支持静态导出（next export）。
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <InfoCard key={card.title} title={card.title} value={card.value} detail={card.detail} />
        ))}
      </section>
    </main>
  );
}
