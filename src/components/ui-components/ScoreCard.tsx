
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Info } from 'lucide-react';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from '@/components/ui/tooltip';

interface ScoreCardProps {
  title: string;
  score: number;
  info?: string;
  className?: string;
  icon?: React.ReactNode;
}

const ScoreCard = ({
  title,
  score,
  info,
  className,
  icon,
}: ScoreCardProps) => {
  const getScoreColor = () => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    if (score >= 40) return 'text-orange-500';
    return 'text-red-500';
  };

  return (
    <Card className={cn('transition-all hover:shadow-md', className)}>
      <CardContent className="pt-6">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            {icon && <div className="text-muted-foreground">{icon}</div>}
            <h3 className="font-medium text-sm">{title}</h3>
            {info && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button type="button" className="text-muted-foreground hover:text-foreground">
                      <Info size={14} />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p className="text-xs">{info}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
          <span className={cn('text-xl font-bold', getScoreColor())}>{score}%</span>
        </div>
        <div className="w-full bg-secondary rounded-full h-2 mt-2">
          <div 
            className="h-2 rounded-full transition-all duration-500 ease-out"
            style={{ 
              width: `${score}%`, 
              backgroundColor: score >= 80 ? '#22c55e' : 
                              score >= 60 ? '#eab308' : 
                              score >= 40 ? '#f97316' : 
                              '#ef4444' 
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ScoreCard;
