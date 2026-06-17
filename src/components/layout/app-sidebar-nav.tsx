import { Link, useRouterState } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const mainItems = [
  {
    label: '快捷导航',
    to: '/app/home',
    path: 'M12 3l8 6v11H4V9l8-6zm0 2.6L6 10v8h4v-5h4v5h4v-8l-6-4.4z',
  },
  {
    label: '模型管理',
    to: '/app/manage',
    path: 'M4 5h16v4H4V5zm0 5.5h16V15H4v-4.5zM4 16.5h16V19H4v-2.5z',
  },
  {
    label: '模型推理',
    to: '/app/infer',
    path: 'M12 2l8 4.5v11L12 22l-8-4.5v-11L12 2zm0 2.3L6 7.5v8.9l6 3.3 6-3.3V7.5L12 4.3zm-1 3.2h2v5h-2v-5zm0 6h2v2h-2v-2z',
  },
];

export function AppSidebarNav() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <div className="grid gap-[10px]">
      {mainItems.map((item) => (
        <NavItem
          key={item.label}
          label={item.label}
          path={item.path}
          to={item.to}
          active={pathname === item.to}
        />
      ))}
    </div>
  );
}

type NavItemProps = {
  label: string;
  path: string;
  to: string;
  active?: boolean;
};

function NavItem({ label, path, to, active }: NavItemProps) {
  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        'h-auto w-full justify-start gap-3 rounded-[16px] border border-transparent bg-transparent px-[14px] py-[15px] text-left text-sm font-normal text-[#8ea8c8] shadow-none transition-[transform,border-color,background,color] duration-[220ms] hover:translate-x-1 hover:border-[rgba(98,211,255,0.18)] hover:bg-[rgba(98,211,255,0.08)] hover:text-[#edf4ff]',
        active &&
          'border-[rgba(98,211,255,0.28)] bg-[linear-gradient(135deg,rgba(98,211,255,0.18),rgba(122,123,255,0.18)),rgba(10,21,39,0.6)] text-[#edf4ff] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]',
      )}
    >
      <Link to={to}>
        <span className="grid size-5 shrink-0 place-items-center rounded-md bg-white/[0.06]">
          <svg className="size-[13px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d={path} />
          </svg>
        </span>
        <span className="truncate">{label}</span>
      </Link>
    </Button>
  );
}
