import { Link } from '@tanstack/react-router';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
} from '@/components/ui/sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AppRouteTransition } from './app-route-transition';
import { AppSidebarNav } from './app-sidebar-nav';
import { AppTopBar } from './app-top-bar';

export function AppShell() {
  return (
    <SidebarProvider
      defaultOpen
      className="h-svh overflow-hidden bg-[hsl(var(--background))] text-foreground"
      style={{ '--sidebar-width': '248px' } as React.CSSProperties}
    >
      <Sidebar
        collapsible="none"
        className="relative z-2 h-svh shrink-0 gap-6 border-r border-r-[rgba(125,167,255,0.12)] bg-[linear-gradient(180deg,rgba(5,10,18,0.95),rgba(6,14,27,0.86))] px-[18px] pb-[22px] pt-[26px] text-[#edf4ff] backdrop-blur-2xl"
      >
        <SidebarHeader className="p-0">
          <div className="flex items-center gap-[14px] px-2 py-1.5">
            <div className="brand-mark flex size-[46px] shrink-0 items-center justify-center rounded-[14px] bg-[linear-gradient(135deg,rgba(122,123,255,0.8),rgba(98,211,255,0.85))] text-sm font-semibold text-white shadow-[0_12px_24px_rgba(67,119,255,0.2)]">
              星
            </div>
            <div className="brand-copy min-w-0">
              <strong className="block truncate text-[18px] font-semibold tracking-[1px] text-[#edf4ff]">
                星瞰数智
              </strong>
              <span className="mt-[3px] block truncate text-xs tracking-[0.4px] text-[#8ea8c8]">
                EFA-SMART
              </span>
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent className="min-h-0 flex-none gap-0 overflow-visible p-0">
          <SidebarGroup className="p-0">
            <SidebarGroupContent>
              <AppSidebarNav />
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="mt-auto p-0">
          <div className="sidebar-card rounded-[20px] border border-[rgba(125,167,255,0.15)] bg-[linear-gradient(180deg,rgba(11,31,53,0.95),rgba(7,17,31,0.94))] p-[18px] shadow-[0_22px_60px_rgba(0,0,0,0.38)]">
            <strong className="block text-[15px] font-semibold text-[#edf4ff]">
              系统入口
            </strong>
            <p className="mb-4 mt-2 text-xs leading-[1.7] text-[#8ea8c8]">
              快速进入首页、模型管理和模型推理模块。
            </p>
            <Link
              to="/app/home"
              className="flex w-full items-center justify-center rounded-[14px] border border-transparent bg-[linear-gradient(135deg,#56d7ff,#6670ff_78%)] px-4 py-3 text-sm font-medium text-white shadow-[0_16px_30px_rgba(74,129,255,0.3)] transition-transform duration-[220ms] hover:-translate-y-0.5"
            >
              返回导航首页
            </Link>
          </div>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className="bg-background">
        <AppTopBar />
        <ScrollArea className="h-[calc(100svh-78px)]">
          <AppRouteTransition />
        </ScrollArea>
      </SidebarInset>
    </SidebarProvider>
  );
}
