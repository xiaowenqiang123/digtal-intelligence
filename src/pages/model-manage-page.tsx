import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const modelRows = [
  { name: '星瞰-目标检测-v1', type: '视觉识别', status: '运行中', version: 'v1.2.0' },
  { name: 'EFA-语义分割-beta', type: '图像分割', status: '待发布', version: 'v0.9.4' },
  { name: '数智-异常识别-lite', type: '异常检测', status: '已停用', version: 'v2.1.1' },
];

export function ModelManagePage() {
  return (
    <main className="mx-auto flex w-full max-w-[1680px] flex-col gap-6 px-4 py-4 sm:px-6 lg:px-8">
      <Card className="border-border/70 bg-card/90 shadow-sm">
        <CardHeader className="gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">模型管理</Badge>
            <Badge variant="outline">测试页面</Badge>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <CardTitle className="text-2xl">模型管理</CardTitle>
              <CardDescription className="mt-2">
                这里先放模型列表、搜索和操作区域，用于验证 /app/manage 路由内容。
              </CardDescription>
            </div>
            <Button className="rounded-full bg-primary px-5 text-primary-foreground">
              新建模型
            </Button>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_160px_160px]">
            <Input placeholder="搜索模型名称" />
            <Button variant="outline">模型类型</Button>
            <Button variant="outline">运行状态</Button>
          </div>
          <Separator />
          <div className="grid gap-3">
            {modelRows.map((model) => (
              <div
                key={model.name}
                className="grid gap-3 rounded-2xl border border-border/70 bg-muted/30 p-4 lg:grid-cols-[minmax(0,1fr)_140px_120px_120px]"
              >
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium">{model.name}</div>
                  <div className="mt-1 text-sm text-muted-foreground">版本 {model.version}</div>
                </div>
                <div className="text-sm text-muted-foreground">{model.type}</div>
                <Badge variant={model.status === '运行中' ? 'secondary' : 'outline'}>
                  {model.status}
                </Badge>
                <Button variant="outline" size="sm">
                  查看详情
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
