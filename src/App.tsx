import { TooltipProvider } from '@/components/ui/tooltip';

type AppProps = {
  children: React.ReactNode;
};

export default function App({ children }: AppProps) {
  return <TooltipProvider>{children}</TooltipProvider>;
}
