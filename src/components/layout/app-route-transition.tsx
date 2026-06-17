import { Outlet, useRouterState } from '@tanstack/react-router';

export function AppRouteTransition() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <div
      key={pathname}
      className="animate-[route-enter_420ms_cubic-bezier(0.22,1,0.36,1)_both]"
    >
      <Outlet />
    </div>
  );
}
