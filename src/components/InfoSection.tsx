
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const InfoSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="bg-white/70 dark:bg-forest-950/50 backdrop-blur-sm border-eco-200 dark:border-forest-800">
        <CardHeader>
          <CardTitle className="text-lg">Why Digital Sustainability?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            The internet consumes about 416.2 TWh of electricity annually - more than many countries. Every website 
            visit contributes to carbon emissions through data center energy usage, data transfer, and device energy consumption.
            By optimizing websites, we can significantly reduce their environmental impact.
          </p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/70 dark:bg-forest-950/50 backdrop-blur-sm border-eco-200 dark:border-forest-800">
        <CardHeader>
          <CardTitle className="text-lg">Our Methodology</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Our analysis is based on established guidelines from The Green Web Foundation, Sustainable Web Design, and 
            environmentally-focused web metrics. We evaluate performance, efficiency, hosting practices, and design choices 
            to provide a comprehensive sustainability score and actionable recommendations.
          </p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/70 dark:bg-forest-950/50 backdrop-blur-sm border-eco-200 dark:border-forest-800">
        <CardHeader>
          <CardTitle className="text-lg">Take Action</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Implement our recommendations to reduce your website's carbon footprint. Share the results to raise awareness 
            about digital sustainability. Together, we can make the web more environmentally friendly by creating efficient, 
            streamlined websites that provide great user experiences while minimizing resource consumption.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default InfoSection;
