
import React from 'react';
import { Leaf } from 'lucide-react';

const SustainabilityHeader: React.FC = () => {
  return (
    <header className="text-center mb-12">
      <div className="flex items-center justify-center mb-4">
        <div className="bg-eco-100 p-3 rounded-full">
          <Leaf className="h-8 w-8 text-eco-600" />
        </div>
      </div>
      <h1 className="text-4xl font-bold text-eco-900 dark:text-eco-100 mb-4">
        Eco Web Compass
      </h1>
      <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
        Analyze and improve your website's environmental impact with our comprehensive sustainability evaluation tool.
      </p>
      <p className="max-w-2xl mx-auto text-muted-foreground mt-2">
        Now with improved green hosting detection for Cloudflare, AWS, Google Cloud, and other providers committed to renewable energy.
      </p>
    </header>
  );
};

export default SustainabilityHeader;
