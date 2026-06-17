import { createRootRoute, createRoute, createRouter, redirect } from '@tanstack/react-router';
import { AppShell } from '@/components/layout/app-shell';
import { ModelManagePage } from '@/pages/model-manage-page';
import { QuickNavPage } from '@/pages/quick-nav';

const topbar = (title: string, subtitle: string) => ({
  topbar: {
    title,
    subtitle,
  },
});

const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  beforeLoad: () => {
    throw redirect({ to: '/app/home' });
  },
});

const appRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'app',
  component: AppShell,
});

const homeRoute = createRoute({
  getParentRoute: () => appRoute,
  path: 'home',
  component: QuickNavPage,
  staticData: topbar('快捷导航', '星瞰数智系统'),
});

const manageRoute = createRoute({
  getParentRoute: () => appRoute,
  path: 'manage',
  component: ModelManagePage,
  staticData: topbar('模型管理', '统一管理模型资产、版本信息与参数配置。'),
});

const inferRoute = createRoute({
  getParentRoute: () => appRoute,
  path: 'infer',
  component: QuickNavPage,
  staticData: topbar('模型推理', '统一查看任务状态、创建任务并处理入库流程。'),
});

const dataRoute = createRoute({
  getParentRoute: () => appRoute,
  path: 'data',
  component: QuickNavPage,
  staticData: topbar('我的数据', '统一查看和选择数据文件，支持搜索、上传和确认导入。'),
});

const docsRoute = createRoute({
  getParentRoute: () => appRoute,
  path: 'docs',
  component: QuickNavPage,
  staticData: topbar('帮助文档', '查看系统模块说明、操作流程和使用规范。'),
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  appRoute.addChildren([homeRoute, manageRoute, inferRoute, dataRoute, docsRoute]),
]);

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
