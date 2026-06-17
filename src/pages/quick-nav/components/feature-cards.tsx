import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { features } from '../mock';
import { SmallPill } from './quick-nav-primitives';

export function FeatureCards() {
  return (
    <div className="grid gap-[18px] md:grid-cols-2">
      {features.map((feature) => (
        <article
          key={feature.title}
          className="group relative min-h-[238px] overflow-hidden rounded-[24px] border border-[rgba(125,167,255,0.14)] bg-[rgba(255,255,255,0.035)] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.38)] backdrop-blur-2xl transition-[transform,border-color,box-shadow] duration-250 hover:-translate-y-1 hover:border-[rgba(98,211,255,0.3)] hover:shadow-[0_28px_72px_rgba(9,18,38,0.55)]"
        >
          <div className="absolute -bottom-20 -right-20 size-60 rounded-full bg-[radial-gradient(circle,rgba(98,211,255,0.18),transparent_66%)]" />
          <div
            className={cn(
              'absolute right-[30px] top-8 size-[92px] rounded-[26px] border border-[rgba(125,167,255,0.2)] bg-[linear-gradient(135deg,rgba(98,211,255,0.2),rgba(122,123,255,0.2)),rgba(255,255,255,0.04)] shadow-[inset_0_0_18px_rgba(255,255,255,0.06)]',
              feature.variant === 'manage' &&
                '[clip-path:polygon(16%_20%,84%_20%,84%_80%,16%_80%,16%_20%,26%_32%,74%_32%,74%_43%,26%_43%,26%_32%,26%_55%,74%_55%,74%_66%,26%_66%,26%_55%)]',
              feature.variant === 'infer' &&
                '[clip-path:polygon(50%_14%,86%_34%,86%_67%,50%_86%,14%_67%,14%_34%)]',
            )}
          />
          <div className="relative">
            <h3 className="mt-[22px] text-[28px] font-bold tracking-[0.8px] text-[#edf4ff]">
              {feature.title}
            </h3>
            <p className="mt-2.5 max-w-[360px] text-sm leading-[1.8] text-[#8ea8c8]">
              {feature.description}
            </p>
            <div className="mt-[22px] flex flex-wrap gap-2.5">
              {feature.tags.map((tag) => (
                <SmallPill key={tag}>{tag}</SmallPill>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3.5">
              <Button
                asChild
                className="rounded-[14px] bg-[linear-gradient(135deg,#56d7ff,#6670ff_78%)] px-[18px] py-[13px] text-[#edf4ff] shadow-[0_16px_30px_rgba(74,129,255,0.3)] hover:-translate-y-0.5"
              >
                <Link to={feature.to}>{feature.action}</Link>
              </Button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
