import { cn } from '@/lib/utils';

type MetricCardProps = {
  label: string;
  value: string;
};

export function MetricCard({ label, value }: MetricCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[24px] border border-[rgba(125,167,255,0.14)] bg-[rgba(255,255,255,0.035)] px-[22px] py-5 shadow-[0_22px_60px_rgba(0,0,0,0.38)] backdrop-blur-2xl">
      <div className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 bg-[linear-gradient(135deg,rgba(98,211,255,0.12),transparent_55%)]" />
      <div className="relative text-[13px] text-[#8ea8c8]">{label}</div>
      <div className="relative mt-2.5 flex items-end gap-2.5">
        <strong className="text-4xl leading-none tracking-[1px] text-[#edf4ff]">{value}</strong>
      </div>
    </div>
  );
}

type SmallPillProps = {
  children: React.ReactNode;
  className?: string;
};

export function SmallPill({ children, className }: SmallPillProps) {
  return (
    <span
      className={cn(
        'inline-flex rounded-full border border-[rgba(125,167,255,0.16)] bg-white/[0.04] px-3 py-2 text-xs text-[#c7dbf5]',
        className,
      )}
    >
      {children}
    </span>
  );
}

type StatusBadgeProps = {
  tone: 'running' | 'waiting' | 'error';
  children: React.ReactNode;
};

export function StatusBadge({ tone, children }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex whitespace-nowrap rounded-full border px-2.5 py-1.5 text-xs',
        tone === 'running' && 'border-[rgba(98,211,255,0.18)] bg-[rgba(98,211,255,0.08)] text-[#c0f2ff]',
        tone === 'waiting' && 'border-[rgba(255,202,104,0.18)] bg-[rgba(255,202,104,0.08)] text-[#ffdf9e]',
        tone === 'error' && 'border-[rgba(255,123,155,0.16)] bg-[rgba(255,123,155,0.08)] text-[#ffd3dd]',
      )}
    >
      {children}
    </span>
  );
}
