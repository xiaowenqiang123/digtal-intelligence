import { Button } from '@/components/ui/button';
import { runningTasks } from '../mock';
import { SmallPill, StatusBadge } from './quick-nav-primitives';

export function RunningTasksPanel() {
  return (
    <section className="rounded-[24px] border border-[rgba(125,167,255,0.14)] bg-[rgba(255,255,255,0.035)] p-[22px] shadow-[0_22px_60px_rgba(0,0,0,0.38)] backdrop-blur-2xl">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <strong className="block text-lg tracking-[0.5px] text-[#edf4ff]">当前运行任务</strong>
          <span className="mt-1 block text-xs text-[#8ea8c8]">查看当前任务执行情况</span>
        </div>
        <div className="flex gap-2.5">
          <TaskTab active>全部</TaskTab>
          <TaskTab>运行中</TaskTab>
          <TaskTab>待处理</TaskTab>
        </div>
      </div>

      <div className="grid gap-3">
        {runningTasks.map((task) => (
          <article
            key={task.title}
            className="grid cursor-pointer grid-cols-[1fr_auto] items-center gap-3 rounded-[18px] border border-[rgba(125,167,255,0.1)] bg-white/[0.035] px-[18px] py-4 transition-[transform,border-color] duration-200 hover:translate-x-[3px] hover:border-[rgba(98,211,255,0.22)]"
          >
            <div>
              <strong className="block text-[15px] text-[#edf4ff]">{task.title}</strong>
              <div className="mt-2.5 flex flex-wrap gap-2.5">
                {task.meta.map((item) => (
                  <SmallPill key={item} className="px-2.5 py-[7px]">
                    {item}
                  </SmallPill>
                ))}
              </div>
              <div className="mt-2.5 h-2 w-[126px] overflow-hidden rounded-full bg-white/[0.08]">
                <div
                  className="h-full rounded-full bg-[linear-gradient(90deg,#56d7ff,#66ffbd)] shadow-[0_0_20px_rgba(98,211,255,0.36)]"
                  style={{ width: `${task.progress}%` }}
                />
              </div>
            </div>
            <StatusBadge tone={task.tone}>{task.badge}</StatusBadge>
          </article>
        ))}
      </div>
    </section>
  );
}

type TaskTabProps = {
  active?: boolean;
  children: React.ReactNode;
};

function TaskTab({ active, children }: TaskTabProps) {
  return (
    <Button
      variant="ghost"
      className={`h-auto rounded-full border px-3 py-2 text-xs ${
        active
          ? 'border-[rgba(98,211,255,0.24)] bg-[linear-gradient(135deg,rgba(98,211,255,0.16),rgba(122,123,255,0.16))] text-[#edf4ff]'
          : 'border-[rgba(125,167,255,0.12)] bg-white/[0.03] text-[#8ea8c8]'
      }`}
    >
      {children}
    </Button>
  );
}
