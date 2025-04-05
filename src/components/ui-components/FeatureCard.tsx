
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Check, X } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  status: 'good' | 'bad' | 'warning' | 'neutral';
  description: string;
  recommendation?: string;
  className?: string;
  icon?: React.ReactNode;
}

const FeatureCard = ({
  title,
  status,
  description,
  recommendation,
  className,
  icon,
}: FeatureCardProps) => {
  
  const getStatusIcon = () => {
    switch (status) {
      case 'good':
        return <Check className="text-green-500" size={18} />;
      case 'bad':
        return <X className="text-red-500" size={18} />;
      case 'warning':
        return <div className="w-4 h-4 bg-yellow-500 rounded-full" />;
      case 'neutral':
        return <div className="w-4 h-4 bg-gray-300 rounded-full" />;
      default:
        return null;
    }
  };

  const getStatusClass = () => {
    switch (status) {
      case 'good':
        return 'border-l-green-500';
      case 'bad':
        return 'border-l-red-500';
      case 'warning':
        return 'border-l-yellow-500';
      case 'neutral':
        return 'border-l-gray-300';
      default:
        return '';
    }
  };

  return (
    <Card className={cn('border-l-4 transition-all', getStatusClass(), className)}>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="mt-0.5">{getStatusIcon()}</div>
          <div>
            <h3 className="font-medium text-sm flex items-center gap-2">
              {title}
              {icon && <span className="text-muted-foreground">{icon}</span>}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
            {recommendation && (
              <p className="text-sm mt-2 text-primary font-medium">{recommendation}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
