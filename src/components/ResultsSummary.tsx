
import React from 'react';
import { Download, FilePdf, FileCsv, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import CircularProgress from './ui-components/CircularProgress';
import { WebsiteAnalysisResult } from '@/types/analysis';

interface ResultsSummaryProps {
  result: WebsiteAnalysisResult;
  url: string;
}

const ResultsSummary: React.FC<ResultsSummaryProps> = ({ result, url }) => {
  const displayUrl = new URL(url).hostname;
  
  const handleExportPDF = () => {
    // In a real implementation, this would generate and download a PDF
    console.log('Exporting PDF report for', url);
    alert('PDF Export initiated. In a production app, this would generate a detailed PDF report.');
  };
  
  const handleExportCSV = () => {
    // In a real implementation, this would generate and download a CSV
    console.log('Exporting CSV data for', url);
    
    // Create a simple CSV from the analysis data
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Category,Score\n";
    csvContent += `Overall,${result.overallScore}\n`;
    csvContent += `Performance,${result.performanceScore}\n`;
    csvContent += `Page Weight,${result.pageWeightScore}\n`;
    csvContent += `Carbon Footprint,${result.carbonFootprintScore}\n`;
    csvContent += `Hosting,${result.hostingScore}\n`;
    csvContent += `Best Practices,${result.bestPracticesScore}\n`;
    
    // Create a download link and trigger it
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${displayUrl}-sustainability-report.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
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
            
            <div className="flex justify-center md:justify-start">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-eco-200 hover:bg-eco-100 dark:border-forest-700 dark:hover:bg-forest-800"
                  >
                    Download Report <Download className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem onClick={handleExportPDF} className="cursor-pointer">
                    <FilePdf className="mr-2 h-4 w-4" />
                    <span>PDF Report</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleExportCSV} className="cursor-pointer">
                    <FileCsv className="mr-2 h-4 w-4" />
                    <span>CSV Data</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultsSummary;
