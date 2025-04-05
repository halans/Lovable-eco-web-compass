
import React from 'react';
import { Download, FileText, Files, ExternalLink } from 'lucide-react';
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
import { jsPDF } from 'jspdf';
import { useToast } from '@/hooks/use-toast';

interface ResultsSummaryProps {
  result: WebsiteAnalysisResult;
  url: string;
}

const ResultsSummary: React.FC<ResultsSummaryProps> = ({ result, url }) => {
  const displayUrl = new URL(url).hostname;
  const { toast } = useToast();
  
  const handleExportPDF = () => {
    try {
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      
      // Add title
      doc.setFontSize(20);
      doc.text(`Sustainability Report: ${displayUrl}`, 20, 20);
      
      // Add date
      doc.setFontSize(12);
      const today = new Date().toLocaleDateString();
      doc.text(`Generated on: ${today}`, 20, 30);
      
      // Add URL
      doc.text(`Website: ${url}`, 20, 40);
      
      // Add overall score
      doc.setFontSize(16);
      doc.text('Overall Sustainability Score', 20, 55);
      doc.setFontSize(24);
      doc.text(`${result.overallScore}%`, 20, 65);
      
      // Add assessment summary
      doc.setFontSize(14);
      doc.text('Assessment Summary:', 20, 80);
      doc.setFontSize(12);
      const summaryText = result.overallScore >= 80 
        ? 'Excellent! This site follows many eco-friendly web practices.'
        : result.overallScore >= 60 
        ? 'Good progress! This site implements some sustainable practices.'
        : result.overallScore >= 40 
        ? 'Needs improvement in several sustainability areas.'
        : 'This site has significant room for sustainability improvements.';
      doc.text(summaryText, 20, 90);
      
      // Add detailed scores
      doc.setFontSize(14);
      doc.text('Detailed Category Scores:', 20, 110);
      doc.setFontSize(12);
      
      const categories = [
        { name: 'Performance', score: result.performanceScore },
        { name: 'Page Weight', score: result.pageWeightScore },
        { name: 'Carbon Footprint', score: result.carbonFootprintScore },
        { name: 'Hosting', score: result.hostingScore },
        { name: 'Best Practices', score: result.bestPracticesScore }
      ];
      
      let yPosition = 120;
      categories.forEach(category => {
        doc.text(`${category.name}: ${category.score}%`, 20, yPosition);
        yPosition += 8;
      });
      
      // Add footer
      const footerText = 'Eco Web Compass — Evaluating digital sustainability';
      const textWidth = doc.getStringUnitWidth(footerText) * doc.internal.getFontSize() / doc.internal.scaleFactor;
      const textOffset = (pageWidth - textWidth) / 2;
      doc.setFontSize(10);
      doc.text(footerText, textOffset, 280);
      
      // Save the PDF
      doc.save(`${displayUrl}-sustainability-report.pdf`);
      
      toast({
        title: "PDF Generated",
        description: "Your sustainability report has been downloaded.",
      });
    } catch (error) {
      console.error('PDF generation error:', error);
      toast({
        title: "Error",
        description: "Failed to generate PDF report. Please try again.",
        variant: "destructive",
      });
    }
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
    
    toast({
      title: "CSV Generated",
      description: "Your sustainability data has been downloaded.",
    });
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
                    <FileText className="mr-2 h-4 w-4" />
                    <span>PDF Report</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleExportCSV} className="cursor-pointer">
                    <Files className="mr-2 h-4 w-4" />
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
