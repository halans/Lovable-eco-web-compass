
import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import CircularProgress from './ui-components/CircularProgress';
import { WebsiteAnalysisResult } from '@/types/analysis';

interface ResultsSummaryProps {
  result: WebsiteAnalysisResult;
  url: string;
}

const ResultsSummary: React.FC<ResultsSummaryProps> = ({ result, url }) => {
  const displayUrl = new URL(url).hostname;
  
  return (
    <Card className="bg-white/70 dark:bg-forest-950/50 backdrop-blur-sm border-eco-200 dark:border-forest-800">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-shrink-0">
            <CircularProgress 
              value={result.overallScore} 
              size={160} 
              progressColor={
                result.overallScore >= 80 ? 'rgb(34, 197, 94)' : 
                result.overallScore >= 60 ? 'rgb(234, 179, 8)' : 
                result.overallScore >= 40 ? 'rgb(249, 115, 22)' : 
                'rgb(239, 68, 68)'
              }
              label="Overall Score"
            />
          </div>
          
          <div className="flex-grow text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-2 gap-2">
              <h2 className="text-xl font-semibold">{displayUrl}</h2>
              <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <ExternalLink size={16} />
              </a>
            </div>
            
            <p className="text-muted-foreground mb-4">
              {result.overallScore >= 80 
                ? '🌟 Excellent! This site follows many eco-friendly web practices.'
                : result.overallScore >= 60 
                ? '👍 Good progress! This site implements some sustainable practices.'
                : result.overallScore >= 40 
                ? '⚠️ Needs improvement in several sustainability areas.'
                : '⚠️ This site has significant room for sustainability improvements.'}
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Button 
                variant="outline" 
                size="sm" 
                className="border-eco-200 hover:bg-eco-100 dark:border-forest-700 dark:hover:bg-forest-800"
              >
                Download Report <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="border-eco-200 hover:bg-eco-100 dark:border-forest-700 dark:hover:bg-forest-800"
              >
                Share Results <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultsSummary;
