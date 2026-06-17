import { metrics } from '../mock';
import { MetricCard } from './quick-nav-primitives';

export function QuickNavHero() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-[rgba(125,167,255,0.14)] bg-[linear-gradient(135deg,rgba(10,21,39,0.92),rgba(13,29,54,0.86)),radial-gradient(circle_at_12%_18%,rgba(98,211,255,0.18),transparent_22%)] p-[34px] shadow-[0_22px_60px_rgba(0,0,0,0.38)]">
      <div className="absolute -right-[120px] -top-[100px] size-[360px] rounded-full border border-[rgba(98,211,255,0.18)]" />
      <div className="absolute -right-[200px] -top-[180px] size-[520px] rounded-full border border-[rgba(122,123,255,0.14)]" />
      <div className="relative z-1 grid items-center gap-6 xl:grid-cols-[minmax(480px,1.3fr)_minmax(320px,0.9fr)]">
        <div>
          <h1 className="m-0 text-[clamp(34px,4.2vw,54px)] font-bold leading-[1.08] tracking-[1.2px] text-[#edf4ff]">
            欢迎使用星瞰数智
          </h1>
          <p className="mt-3.5 max-w-[760px] text-[15px] leading-[1.85] text-[#b5cae7]">
            面向模型全生命周期的一站式模型管理与推理平台。
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {metrics.map((metric) => (
              <MetricCard key={metric.label} label={metric.label} value={metric.value} />
            ))}
          </div>
        </div>

        <div className="relative grid min-h-[360px] place-items-center">
          <div className="relative size-[210px] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.9),rgba(98,211,255,0.42)_28%,rgba(122,123,255,0.24)_45%,rgba(8,19,35,0.9)_72%)] shadow-[inset_0_0_40px_rgba(255,255,255,0.12),0_0_60px_rgba(98,211,255,0.16)] before:absolute before:inset-[-34px] before:rounded-full before:border before:border-[rgba(98,211,255,0.2)] before:animate-[spin_16s_linear_infinite] after:absolute after:inset-[-68px] after:rounded-full after:border after:border-[rgba(122,123,255,0.16)] after:animate-[spin_24s_linear_infinite_reverse]" />
          <OrbitNode className="right-[42px] top-[22px]" value="128" label="模型资产" />
          <OrbitNode className="-right-2 top-[146px]" value="37" label="今日任务" />
          <OrbitNode className="bottom-[34px] right-[50px]" value="16" label="处理中" />
        </div>
      </div>
    </section>
  );
}

type OrbitNodeProps = {
  value: string;
  label: string;
  className: string;
};

function OrbitNode({ value, label, className }: OrbitNodeProps) {
  return (
    <div
      className={`absolute grid size-[70px] animate-[float_4.2s_ease-in-out_infinite] place-items-center rounded-[22px] border border-[rgba(125,167,255,0.18)] bg-[linear-gradient(180deg,rgba(13,29,54,0.96),rgba(8,17,31,0.96))] text-center text-xs leading-[1.4] text-[#d7ecff] shadow-[0_22px_60px_rgba(0,0,0,0.38)] ${className}`}
    >
      <span>
        <strong className="block text-lg text-[#62d3ff]">{value}</strong>
        {label}
      </span>
    </div>
  );
}
