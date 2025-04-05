
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { WebsiteAnalysisResult } from '@/types/analysis';
import { Check } from 'lucide-react';

interface RecommendationSectionProps {
  result: WebsiteAnalysisResult;
}

const RecommendationSection: React.FC<RecommendationSectionProps> = ({ result }) => {
  const getTopRecommendations = () => {
    const recommendations = [];
    
    // Performance recommendations
    if (result.details.performance.firstContentfulPaint >= 1.8) {
      recommendations.push({
        category: 'Performance',
        text: 'Reduce server response time and minimize render-blocking resources to improve First Contentful Paint.'
      });
    }
    
    if (result.details.performance.timeToInteractive >= 3.8) {
      recommendations.push({
        category: 'Performance',
        text: 'Minimize main thread work and reduce JavaScript execution time for better Time to Interactive.'
      });
    }
    
    // Page weight recommendations
    if (result.details.pageWeight.totalSize >= 1000) {
      recommendations.push({
        category: 'Page Weight',
        text: 'Reduce overall page size by optimizing resources, especially images and scripts.'
      });
    }
    
    if (!result.details.pageWeight.imagesOptimized) {
      recommendations.push({
        category: 'Page Weight',
        text: 'Use WebP format and properly size images for their display dimensions.'
      });
    }
    
    // Carbon footprint recommendations
    if (result.details.carbonFootprint.emissionsPerPage >= 0.5) {
      recommendations.push({
        category: 'Carbon Footprint',
        text: 'Reduce page weight and server energy usage to lower carbon emissions per visit.'
      });
    }
    
    // Hosting recommendations
    if (!result.details.hosting.renewableEnergy) {
      recommendations.push({
        category: 'Hosting',
        text: 'Switch to a hosting provider that uses 100% renewable energy.'
      });
    }
    
    // Best practices recommendations
    if (!result.details.bestPractices.efficientJavaScript) {
      recommendations.push({
        category: 'Best Practices',
        text: 'Reduce JavaScript bundle size and avoid CPU-intensive operations.'
      });
    }
    
    // Return top 5 recommendations
    return recommendations.slice(0, 5);
  };
  
  const topRecommendations = getTopRecommendations();
  
  return (
    <Card className="bg-white/70 dark:bg-forest-950/50 backdrop-blur-sm border-eco-200 dark:border-forest-800">
      <CardHeader>
        <CardTitle className="text-lg">Top Recommendations</CardTitle>
        <CardDescription>
          Implement these changes to improve your website's sustainability and efficiency
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {topRecommendations.map((rec, index) => (
            <li key={index} className="flex gap-3 p-3 rounded-md bg-eco-50 dark:bg-forest-900">
              <div className="mt-0.5 bg-eco-200 dark:bg-forest-700 rounded-full p-1 h-6 w-6 flex items-center justify-center">
                <Check className="h-3.5 w-3.5 text-eco-700 dark:text-eco-300" />
              </div>
              <div>
                <p className="text-sm font-medium mb-0.5">{rec.category}</p>
                <p className="text-sm text-muted-foreground">{rec.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default RecommendationSection;
