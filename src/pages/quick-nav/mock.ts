export const metrics = [
  { label: '模型总数', value: '128' },
  { label: '今日任务数', value: '37' },
  { label: '总任务数', value: '2,486' },
];

export const features = [
  {
    title: '模型管理',
    description: '围绕模型资产沉淀、权重版本管理、业务参数与资源参数定义进行统一维护。',
    tags: ['模型资产', '权重版本', '参数定义'],
    action: '模型维护',
    to: '/app/manage',
    variant: 'manage',
  },
  {
    title: '模型推理',
    description: '推理任务工作台，统一维护和监控任务。',
    tags: ['算力调度', '状态跟踪', '运行状态'],
    action: '推理任务',
    to: '/app/infer',
    variant: 'infer',
  },
] as const;

export const runningTasks = [
  {
    title: '变化检测任务-3261',
    meta: ['模型：变化检测-高分二号', '环节：推理中', '运行时间：08:14'],
    progress: 72,
    badge: '推理中',
    tone: 'running',
  },
  {
    title: '道路分割任务-1873',
    meta: ['模型：道路分割-遥感场景', '环节：待入库', '运行时间：04:00'],
    progress: 92,
    badge: '待入库',
    tone: 'waiting',
  },
  {
    title: '目标识别任务-2418',
    meta: ['模型：目标检测-机场跑道', '环节：结果回传', '运行时间：12:36'],
    progress: 54,
    badge: '运行中',
    tone: 'running',
  },
  {
    title: '建筑分类任务-1024',
    meta: ['模型：建筑分类-v26.6.3', '环节：参数补充', '运行时间：02:18'],
    progress: 36,
    badge: '需处理',
    tone: 'error',
  },
] as const;
