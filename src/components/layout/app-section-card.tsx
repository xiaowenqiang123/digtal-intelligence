import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type AppSectionCardProps = {
  title: string;
  value: string;
};

export function AppSectionCard({ title, value }: AppSectionCardProps) {
  return (
    <Card className="border-border/70 bg-muted/20">
      <CardHeader className="gap-2 p-4">
        <CardDescription>{title}</CardDescription>
        <CardTitle className="text-3xl">{value}</CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-4 text-sm text-muted-foreground">
        作为布局占位，后续补具体统计内容。
      </CardContent>
    </Card>
  );
}
