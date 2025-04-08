import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface DashboardCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}

export function GenericCard({
  title,
  description,
  className,
  children,
  ...props
}: DashboardCardProps) {
  return (
    <Card className={cn('p-3 gap-2 md:p-5 md:gap-4', className)} {...props}>
      <CardHeader className='p-0'>
        <CardTitle className='text-sm sm:text-base md:text-lg font-medium'>
          {title}
        </CardTitle>
        {description && (
          <p className='text-xs sm:text-sm md:text-base text-muted-foreground'>
            {description}
          </p>
        )}
      </CardHeader>
      <CardContent className='flex-1 p-0'>{children}</CardContent>
    </Card>
  );
}
