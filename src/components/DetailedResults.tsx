
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FeatureCard from './ui-components/FeatureCard';
import { WebsiteAnalysisResult } from '@/types/analysis';
import { 
  Zap, Image, Leaf, Cloud, Grid, Cpu, Database, 
  FileImage, FileText, Waves, FileBadge2, Server
} from 'lucide-react';

interface DetailedResultsProps {
  result: WebsiteAnalysisResult;
}

const DetailedResults: React.FC<DetailedResultsProps> = ({ result }) => {
  return (
    <Tabs defaultValue="performance" className="w-full">
      <TabsList className="grid grid-cols-5 mb-6">
        <TabsTrigger value="performance">Performance</TabsTrigger>
        <TabsTrigger value="pageWeight">Page Weight</TabsTrigger>
        <TabsTrigger value="carbonFootprint">Carbon</TabsTrigger>
        <TabsTrigger value="hosting">Hosting</TabsTrigger>
        <TabsTrigger value="bestPractices">Best Practices</TabsTrigger>
      </TabsList>
      
      <TabsContent value="performance" className="space-y-4">
        <FeatureCard 
          title="First Contentful Paint"
          status={result.details.performance.firstContentfulPaint < 1.8 ? 'good' : 
                 result.details.performance.firstContentfulPaint < 3 ? 'warning' : 'bad'}
          description={`${result.details.performance.firstContentfulPaint}s - First Contentful Paint marks the time at which the first text or image is painted.`}
          recommendation={result.details.performance.firstContentfulPaint >= 1.8 ? "Reduce server response times and minimize render-blocking resources." : undefined}
          icon={<Zap size={16} />}
        />
        <FeatureCard 
          title="Time to Interactive"
          status={result.details.performance.timeToInteractive < 3.8 ? 'good' : 
                 result.details.performance.timeToInteractive < 7.3 ? 'warning' : 'bad'}
          description={`${result.details.performance.timeToInteractive}s - Time to Interactive measures when the page becomes fully interactive.`}
          recommendation={result.details.performance.timeToInteractive >= 3.8 ? "Minimize main thread work and reduce JavaScript execution time." : undefined}
          icon={<Cpu size={16} />}
        />
        <FeatureCard 
          title="Cumulative Layout Shift"
          status={result.details.performance.cumulativeLayoutShift < 0.1 ? 'good' : 
                 result.details.performance.cumulativeLayoutShift < 0.25 ? 'warning' : 'bad'}
          description={`${result.details.performance.cumulativeLayoutShift} - Cumulative Layout Shift measures visual stability.`}
          recommendation={result.details.performance.cumulativeLayoutShift >= 0.1 ? "Set explicit width and height for images and videos." : undefined}
          icon={<Waves size={16} />}
        />
        <FeatureCard 
          title="Efficient Cache Policy"
          status={result.details.performance.efficientCachePolicy ? 'good' : 'bad'}
          description={`${result.details.performance.efficientCachePolicy ? 'Implemented' : 'Not implemented'} - Caching enables browsers to store resources locally, reducing network requests.`}
          recommendation={!result.details.performance.efficientCachePolicy ? "Set appropriate cache headers for static resources." : undefined}
          icon={<Database size={16} />}
        />
        <FeatureCard 
          title="No Resource-Heavy Animations"
          status={result.details.performance.noHeavyAnimations ? 'good' : 'bad'}
          description={`${result.details.performance.noHeavyAnimations ? 'No heavy animations detected' : 'Resource-intensive animations found'} - Heavy animations can cause excessive CPU usage.`}
          recommendation={!result.details.performance.noHeavyAnimations ? "Optimize animations to use GPU acceleration and reduce complexity." : undefined}
          icon={<FileBadge2 size={16} />}
        />
      </TabsContent>
      
      <TabsContent value="pageWeight" className="space-y-4">
        <FeatureCard 
          title="Total Page Size"
          status={result.details.pageWeight.totalSize < 1000 ? 'good' : 
                 result.details.pageWeight.totalSize < 3000 ? 'warning' : 'bad'}
          description={`${result.details.pageWeight.totalSize}KB - Total size of all resources.`}
          recommendation={result.details.pageWeight.totalSize >= 1000 ? "Reduce overall page size by optimizing resources." : undefined}
          icon={<FileText size={16} />}
        />
        <FeatureCard 
          title="Image Optimization"
          status={result.details.pageWeight.imagesOptimized ? 'good' : 'bad'}
          description={`${result.details.pageWeight.imagesOptimized ? 'Images are well optimized' : 'Images could be further optimized'} - Optimized images load faster and use less bandwidth.`}
          recommendation={!result.details.pageWeight.imagesOptimized ? "Use WebP format and properly size images for their display dimensions." : undefined}
          icon={<FileImage size={16} />}
        />
        <FeatureCard 
          title="Minified CSS & JavaScript"
          status={result.details.pageWeight.minifiedCode ? 'good' : 'bad'}
          description={`${result.details.pageWeight.minifiedCode ? 'Code is properly minified' : 'Unminified code detected'} - Minified code reduces file sizes.`}
          recommendation={!result.details.pageWeight.minifiedCode ? "Minify CSS and JavaScript to reduce download size." : undefined}
          icon={<FileText size={16} />}
        />
        <FeatureCard 
          title="Text Compression"
          status={result.details.pageWeight.textCompression ? 'good' : 'bad'}
          description={`${result.details.pageWeight.textCompression ? 'Text compression enabled' : 'No text compression'} - Compression reduces the size of text-based resources.`}
          recommendation={!result.details.pageWeight.textCompression ? "Enable Gzip or Brotli compression on your server." : undefined}
          icon={<FileText size={16} />}
        />
        <FeatureCard 
          title="Responsive Images"
          status={result.details.pageWeight.responsiveImages ? 'good' : 'bad'}
          description={`${result.details.pageWeight.responsiveImages ? 'Using responsive images' : 'Not using responsive images'} - Responsive images serve appropriate sizes for different devices.`}
          recommendation={!result.details.pageWeight.responsiveImages ? "Implement srcset and sizes attributes for images." : undefined}
          icon={<Image size={16} />}
        />
      </TabsContent>
      
      <TabsContent value="carbonFootprint" className="space-y-4">
        <FeatureCard 
          title="Carbon Emissions Per Visit"
          status={result.details.carbonFootprint.emissionsPerPage < 0.5 ? 'good' : 
                 result.details.carbonFootprint.emissionsPerPage < 1 ? 'warning' : 'bad'}
          description={`${result.details.carbonFootprint.emissionsPerPage.toFixed(2)}g CO2 - The estimated carbon emissions generated per page view.`}
          recommendation={result.details.carbonFootprint.emissionsPerPage >= 0.5 ? "Reduce page weight and server energy usage to lower emissions." : undefined}
          icon={<Leaf size={16} />}
        />
        <FeatureCard 
          title="Cleaner Than Average"
          status={result.details.carbonFootprint.cleanerThanAverage ? 'good' : 'bad'}
          description={`${result.details.carbonFootprint.cleanerThanAverage ? 'Cleaner than average websites' : 'More polluting than average'} - Comparison to the average website carbon footprint.`}
          recommendation={!result.details.carbonFootprint.cleanerThanAverage ? "Follow green web design principles to reduce your site's carbon footprint." : undefined}
          icon={<Leaf size={16} />}
        />
        <FeatureCard 
          title="Annual CO2 Emissions"
          status={result.details.carbonFootprint.annualEmissions < 100 ? 'good' : 
                 result.details.carbonFootprint.annualEmissions < 500 ? 'warning' : 'bad'}
          description={`${result.details.carbonFootprint.annualEmissions.toFixed(2)}kg CO2/year - Estimated based on current traffic.`}
          recommendation={result.details.carbonFootprint.annualEmissions >= 100 ? "Optimize for sustainability to reduce annual emissions." : undefined}
          icon={<Leaf size={16} />}
        />
        <FeatureCard 
          title="Low-Carbon Design Patterns"
          status={result.details.carbonFootprint.lowCarbonDesign ? 'good' : 'bad'}
          description={`${result.details.carbonFootprint.lowCarbonDesign ? 'Uses low-carbon design patterns' : 'Not using low-carbon design'} - Design choices that minimize energy usage.`}
          recommendation={!result.details.carbonFootprint.lowCarbonDesign ? "Implement dark mode and reduce resource-intensive UI elements." : undefined}
          icon={<Grid size={16} />}
        />
        <FeatureCard 
          title="Green Web Foundation Listed"
          status={result.details.carbonFootprint.greenWebFoundation ? 'good' : 'bad'}
          description={`${result.details.carbonFootprint.greenWebFoundation ? 'Listed in Green Web Foundation' : 'Not listed in Green Web Foundation'} - Recognition from sustainable web organizations.`}
          recommendation={!result.details.carbonFootprint.greenWebFoundation ? "Consider switching to a certified green hosting provider." : undefined}
          icon={<Leaf size={16} />}
        />
      </TabsContent>
      
      <TabsContent value="hosting" className="space-y-4">
        <FeatureCard 
          title="Hosting Provider"
          status={result.details.hosting.renewableEnergy ? 'good' : 'neutral'}
          description={`Detected: ${result.details.hosting.hostingProvider}${result.details.hosting.isCloudflare ? ' (Cloudflare)' : ''} - ${result.details.hosting.renewableEnergy ? 'This hosting provider uses or commits to renewable energy.' : 'Consider switching to a provider that uses renewable energy.'}`}
          recommendation={!result.details.hosting.renewableEnergy ? "Green hosting providers include Cloudflare, Google Cloud, Azure, AWS, GreenGeeks, and others with renewable energy commitments." : undefined}
          icon={<Server size={16} />}
        />
        <FeatureCard 
          title="Renewable Energy Hosting"
          status={result.details.hosting.renewableEnergy ? 'good' : 'bad'}
          description={`${result.details.hosting.renewableEnergy ? 'Hosted on renewable energy' : 'Not using renewable energy hosting'} - Indicates if the server uses renewable energy.`}
          recommendation={!result.details.hosting.renewableEnergy ? "Switch to a hosting provider that uses 100% renewable energy." : undefined}
          icon={<Cloud size={16} />}
        />
        <FeatureCard 
          title="Server Location Efficiency"
          status={result.details.hosting.efficientServerLocation ? 'good' : 'bad'}
          description={`${result.details.hosting.efficientServerLocation ? 'Efficient server location' : 'Suboptimal server location'} - Proximity of servers to the majority of users.`}
          recommendation={!result.details.hosting.efficientServerLocation ? "Use a CDN or hosting in locations closer to your main audience." : undefined}
          icon={<Cloud size={16} />}
        />
        <FeatureCard 
          title="Content Delivery Network"
          status={result.details.hosting.usesCDN ? 'good' : 'bad'}
          description={`${result.details.hosting.usesCDN ? 'Uses a CDN' : 'No CDN detected'} - CDNs reduce data travel distance and improve efficiency.`}
          recommendation={!result.details.hosting.usesCDN ? "Implement a CDN to reduce energy used in data transmission." : undefined}
          icon={<Cloud size={16} />}
        />
        <FeatureCard 
          title="HTTPS Implementation"
          status={result.details.hosting.usesHTTPS ? 'good' : 'bad'}
          description={`${result.details.hosting.usesHTTPS ? 'HTTPS implemented' : 'Not using HTTPS'} - Secure connections are more efficient with HTTP/2.`}
          recommendation={!result.details.hosting.usesHTTPS ? "Implement HTTPS to enable more efficient data transfer with HTTP/2." : undefined}
          icon={<Cloud size={16} />}
        />
        <FeatureCard 
          title="HTTP/2 or HTTP/3"
          status={result.details.hosting.modernHTTP ? 'good' : 'bad'}
          description={`${result.details.hosting.modernHTTP ? 'Using modern HTTP protocols' : 'Using older HTTP protocol'} - Modern protocols are more efficient.`}
          recommendation={!result.details.hosting.modernHTTP ? "Upgrade to HTTP/2 or HTTP/3 for more efficient data transfer." : undefined}
          icon={<Cloud size={16} />}
        />
      </TabsContent>
      
      <TabsContent value="bestPractices" className="space-y-4">
        <FeatureCard 
          title="Efficient JavaScript"
          status={result.details.bestPractices.efficientJavaScript ? 'good' : 'bad'}
          description={`${result.details.bestPractices.efficientJavaScript ? 'JavaScript is efficient' : 'JavaScript inefficiencies detected'} - Efficient code uses less CPU and battery.`}
          recommendation={!result.details.bestPractices.efficientJavaScript ? "Reduce JavaScript bundle size and avoid CPU-intensive operations." : undefined}
          icon={<Cpu size={16} />}
        />
        <FeatureCard 
          title="Sustainable Web Design"
          status={result.details.bestPractices.sustainableWebDesign ? 'good' : 'bad'}
          description={`${result.details.bestPractices.sustainableWebDesign ? 'Uses sustainable web design principles' : 'Not following sustainable design'} - Design that minimizes environmental impact.`}
          recommendation={!result.details.bestPractices.sustainableWebDesign ? "Adopt sustainable design principles that reduce resource usage." : undefined}
          icon={<Grid size={16} />}
        />
        <FeatureCard 
          title="Font Loading Strategy"
          status={result.details.bestPractices.fontStrategy ? 'good' : 'bad'}
          description={`${result.details.bestPractices.fontStrategy ? 'Efficient font loading' : 'Inefficient font loading'} - How fonts are loaded affects performance.`}
          recommendation={!result.details.bestPractices.fontStrategy ? "Use system fonts or optimize web font loading with font-display." : undefined}
          icon={<FileText size={16} />}
        />
        <FeatureCard 
          title="Lazy Loading"
          status={result.details.bestPractices.lazyLoading ? 'good' : 'bad'}
          description={`${result.details.bestPractices.lazyLoading ? 'Implements lazy loading' : 'Not using lazy loading'} - Loads resources only when needed.`}
          recommendation={!result.details.bestPractices.lazyLoading ? "Implement lazy loading for images and non-critical resources." : undefined}
          icon={<Image size={16} />}
        />
        <FeatureCard 
          title="Accessibility"
          status={result.details.bestPractices.accessibility ? 'good' : 'bad'}
          description={`${result.details.bestPractices.accessibility ? 'Good accessibility practices' : 'Accessibility issues detected'} - Accessible sites often use less resources.`}
          recommendation={!result.details.bestPractices.accessibility ? "Improve accessibility which often results in more efficient designs." : undefined}
          icon={<Grid size={16} />}
        />
      </TabsContent>
    </Tabs>
  );
};

export default DetailedResults;
