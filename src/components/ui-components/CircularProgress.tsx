
import React from 'react';
import { cn } from '@/lib/utils';

interface CircularProgressProps {
  value: number;
  className?: string;
  size?: number;
  strokeWidth?: number;
  backgroundColor?: string;
  progressColor?: string;
  showValue?: boolean;
  label?: string;
}

const CircularProgress = ({
  value,
  className,
  size = 120,
  strokeWidth = 10,
  backgroundColor = 'rgb(230, 230, 230)',
  progressColor,
  showValue = true,
  label,
}: CircularProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;
  
  // Determine progress color based on value if not provided
  const getProgressColor = () => {
    if (progressColor) return progressColor;
    
    if (value >= 80) return 'rgb(34, 197, 94)'; // Green
    if (value >= 60) return 'rgb(234, 179, 8)'; // Yellow
    if (value >= 40) return 'rgb(249, 115, 22)'; // Orange
    return 'rgb(239, 68, 68)'; // Red
  };

  return (
    <div className={cn('relative flex flex-col items-center justify-center', className)}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={getProgressColor()}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-out"
        />
      </svg>
      {showValue && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold">{value}%</span>
          {label && <span className="text-xs text-muted-foreground mt-1">{label}</span>}
        </div>
      )}
    </div>
  );
};

export default CircularProgress;
