import { Link, useMatches } from '@tanstack/react-router';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

type TopbarStaticData = {
  topbar?: {
    title: string;
    subtitle: string;
  };
};

export function AppTopBar() {
  const copy = useMatches({
    select: (matches) => {
      const match = [...matches]
        .reverse()
        .find((item) => (item.staticData as TopbarStaticData).topbar);

      return (
        (match?.staticData as TopbarStaticData | undefined)?.topbar ?? {
          title: '快捷导航',
          subtitle: '星瞰数智系统',
        }
      );
    },
  });

  return (
    <header className="relative z-2 flex h-[78px] items-center justify-between border-b border-b-[rgba(125,167,255,0.1)] bg-[linear-gradient(180deg,rgba(5,12,21,0.7),rgba(5,12,21,0.18))] pl-[30px] pr-7 backdrop-blur-[18px]">
      <div className="min-w-0">
        <strong className="block truncate text-lg font-semibold tracking-[0.6px] text-[#edf4ff]">
          {copy.title}
        </strong>
        <span className="mt-1 block truncate text-xs text-[#8ea8c8]">{copy.subtitle}</span>
      </div>
      <div className="flex items-center gap-[14px]">
        <Button
          asChild
          className="rounded-full border border-[rgba(98,211,255,0.2)] bg-[linear-gradient(135deg,rgba(86,215,255,0.18),rgba(102,112,255,0.22))] px-[14px] py-[9px] text-[#edf4ff] shadow-[0_12px_24px_rgba(74,129,255,0.16)] transition-transform duration-200 hover:-translate-y-px hover:bg-[linear-gradient(135deg,rgba(86,215,255,0.18),rgba(102,112,255,0.22))]"
        >
          <Link to="/app/data">我的数据</Link>
        </Button>
        <Button
          asChild
          className="rounded-full border border-[rgba(125,167,255,0.16)] bg-white/[0.04] px-[14px] py-[9px] text-[#edf4ff] transition-transform duration-200 hover:-translate-y-px hover:bg-white/[0.04]"
        >
          <Link to="/app/docs">帮助文档</Link>
        </Button>
        <Avatar className="size-[42px] bg-[linear-gradient(135deg,rgba(122,123,255,0.8),rgba(98,211,255,0.85))] shadow-[0_12px_24px_rgba(67,119,255,0.2)]">
          <AvatarFallback className="bg-transparent font-bold text-[#edf4ff]">
            兰
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
