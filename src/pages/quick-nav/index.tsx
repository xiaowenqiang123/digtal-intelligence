import { FeatureCards } from './components/feature-cards';
import { QuickNavHero } from './components/quick-nav-hero';
import { RunningTasksPanel } from './components/running-tasks-panel';

export function QuickNavPage() {
  return (
    <main className="mx-auto flex w-full max-w-[1680px] flex-col px-4 py-4 sm:px-6 lg:px-8">
      <QuickNavHero />

      <section className="mt-6 grid items-start gap-6 xl:grid-cols-[1.35fr_0.95fr]">
        <FeatureCards />
        <RunningTasksPanel />
      </section>
    </main>
  );
}
