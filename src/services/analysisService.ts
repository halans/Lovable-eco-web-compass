
import { WebsiteAnalysisResult } from '@/types/analysis';

// List of known green hosting providers
const GREEN_HOSTING_PROVIDERS = [
  'cloudflare',    // Cloudflare has committed to 100% renewable energy
  'google cloud',  // Google Cloud is carbon neutral
  'azure',         // Microsoft Azure has carbon neutral commitments
  'aws',           // AWS has renewable energy goals
  'greengeeks',    // GreenGeeks is 300% renewable energy
  'green house data',
  'dreamhost',     // 100% carbon neutral
  'acquia',
  'rackspace',
  'digital ocean', // Working towards sustainability goals
  'netlify',       // Uses carbon neutral AWS infrastructure 
  'vercel'         // Optimized deployments reduce carbon footprint
];

// This is a mock implementation for demonstration purposes
// In a real app, this would make API calls to a sustainability analysis service
export const analyzeWebsite = async (url: string): Promise<WebsiteAnalysisResult> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Create a deterministic but seemingly random value based on the URL
  const getValueFromUrl = (url: string, min: number, max: number): number => {
    let hash = 0;
    for (let i = 0; i < url.length; i++) {
      hash = ((hash << 5) - hash) + url.charCodeAt(i);
      hash |= 0;
    }
    const normalizedHash = (Math.abs(hash) % 100) / 100;
    return min + normalizedHash * (max - min);
  };
  
  // Detect hosting provider from URL or domain patterns
  const detectHostingProvider = (url: string): string => {
    const domainLower = url.toLowerCase();
    
    // Check for Cloudflare by domain patterns
    if (domainLower.includes('cloudflare') || 
        // Common Cloudflare domain patterns
        domainLower.includes('workers.dev') ||
        domainLower.includes('pages.dev')) {
      return 'cloudflare';
    }
    
    // Random hosting provider selection for demonstration
    // In a real implementation, this would use actual DNS, HTTP headers, or other methods
    const hostingProviders = [
      'cloudflare', 'aws', 'google cloud', 'azure', 'digital ocean',
      'netlify', 'vercel', 'dreamhost', 'siteground', 'bluehost'
    ];
    
    // For certain domains, make specific attributions to showcase the feature
    if (domainLower.includes('google')) return 'google cloud';
    if (domainLower.includes('microsoft')) return 'azure';
    if (domainLower.includes('amazon')) return 'aws';
    if (domainLower.includes('cloudflare')) return 'cloudflare';
    if (domainLower.includes('netlify')) return 'netlify';
    if (domainLower.includes('vercel')) return 'vercel';
    
    // For other domains, use a hash-based approach for consistency
    const hashValue = getValueFromUrl(url + 'host', 0, hostingProviders.length - 0.01);
    return hostingProviders[Math.floor(hashValue)];
  };
  
  // Detect if the hosting provider is "green"
  const isGreenHosting = (provider: string): boolean => {
    return GREEN_HOSTING_PROVIDERS.some(greenProvider => 
      provider.toLowerCase().includes(greenProvider.toLowerCase())
    );
  };
  
  // Generate performance scores
  const firstContentfulPaint = getValueFromUrl(url + 'fcp', 0.8, 4.0);
  const timeToInteractive = getValueFromUrl(url + 'tti', 2.5, 8.0);
  const cumulativeLayoutShift = getValueFromUrl(url + 'cls', 0.01, 0.4);
  const efficientCachePolicy = getValueFromUrl(url + 'cache', 0, 1) > 0.5;
  const noHeavyAnimations = getValueFromUrl(url + 'anim', 0, 1) > 0.4;
  
  // Generate page weight scores
  const totalSize = getValueFromUrl(url + 'size', 500, 5000);
  const imagesOptimized = getValueFromUrl(url + 'img', 0, 1) > 0.5;
  const minifiedCode = getValueFromUrl(url + 'min', 0, 1) > 0.6;
  const textCompression = getValueFromUrl(url + 'comp', 0, 1) > 0.7;
  const responsiveImages = getValueFromUrl(url + 'resp', 0, 1) > 0.5;
  
  // Generate carbon footprint scores
  const emissionsPerPage = getValueFromUrl(url + 'emit', 0.2, 2.0);
  const cleanerThanAverage = getValueFromUrl(url + 'clean', 0, 1) > 0.5;
  const annualEmissions = getValueFromUrl(url + 'annual', 50, 1000);
  const lowCarbonDesign = getValueFromUrl(url + 'design', 0, 1) > 0.6;
  const greenWebFoundation = getValueFromUrl(url + 'green', 0, 1) > 0.3;
  
  // Detect hosting provider and determine if it's green
  const hostingProvider = detectHostingProvider(url);
  const isCloudflare = hostingProvider.toLowerCase() === 'cloudflare';
  const renewableEnergy = isGreenHosting(hostingProvider);
  
  // Generate other hosting scores
  const efficientServerLocation = getValueFromUrl(url + 'server', 0, 1) > 0.6;
  const usesCDN = isCloudflare || getValueFromUrl(url + 'cdn', 0, 1) > 0.7; // Cloudflare is always a CDN
  const usesHTTPS = getValueFromUrl(url + 'https', 0, 1) > 0.9; // Most sites use HTTPS now
  const modernHTTP = isCloudflare || getValueFromUrl(url + 'http', 0, 1) > 0.6; // Cloudflare supports modern HTTP
  
  // Generate best practices scores
  const efficientJavaScript = getValueFromUrl(url + 'js', 0, 1) > 0.5;
  const sustainableWebDesign = getValueFromUrl(url + 'sust', 0, 1) > 0.4;
  const fontStrategy = getValueFromUrl(url + 'font', 0, 1) > 0.6;
  const lazyLoading = getValueFromUrl(url + 'lazy', 0, 1) > 0.7;
  const accessibility = getValueFromUrl(url + 'a11y', 0, 1) > 0.5;
  
  // Calculate category scores
  const performanceScore = Math.round(
    (((firstContentfulPaint < 1.8 ? 100 : firstContentfulPaint < 3 ? 60 : 30) +
    (timeToInteractive < 3.8 ? 100 : timeToInteractive < 7.3 ? 60 : 30) +
    (cumulativeLayoutShift < 0.1 ? 100 : cumulativeLayoutShift < 0.25 ? 60 : 30) +
    (efficientCachePolicy ? 100 : 40) +
    (noHeavyAnimations ? 100 : 50)) / 5)
  );
  
  const pageWeightScore = Math.round(
    (((totalSize < 1000 ? 100 : totalSize < 3000 ? 60 : 30) +
    (imagesOptimized ? 100 : 40) +
    (minifiedCode ? 100 : 50) +
    (textCompression ? 100 : 40) +
    (responsiveImages ? 100 : 50)) / 5)
  );
  
  const carbonFootprintScore = Math.round(
    (((emissionsPerPage < 0.5 ? 100 : emissionsPerPage < 1 ? 60 : 30) +
    (cleanerThanAverage ? 100 : 40) +
    (annualEmissions < 100 ? 100 : annualEmissions < 500 ? 60 : 30) +
    (lowCarbonDesign ? 100 : 40) +
    (greenWebFoundation ? 100 : 50)) / 5)
  );
  
  // Update hosting score calculation to properly value Cloudflare and other green providers
  const hostingScore = Math.round(
    ((renewableEnergy ? 100 : 40) +
    (efficientServerLocation ? 100 : 60) +
    (usesCDN ? 100 : 50) +
    (usesHTTPS ? 100 : 30) +
    (modernHTTP ? 100 : 50)) / 5
  );
  
  const bestPracticesScore = Math.round(
    ((efficientJavaScript ? 100 : 40) +
    (sustainableWebDesign ? 100 : 40) +
    (fontStrategy ? 100 : 60) +
    (lazyLoading ? 100 : 50) +
    (accessibility ? 100 : 60)) / 5
  );
  
  // Calculate overall score
  const overallScore = Math.round(
    (performanceScore + pageWeightScore + carbonFootprintScore + hostingScore + bestPracticesScore) / 5
  );
  
  return {
    url,
    overallScore,
    performanceScore,
    pageWeightScore,
    carbonFootprintScore,
    hostingScore,
    bestPracticesScore,
    details: {
      performance: {
        firstContentfulPaint,
        timeToInteractive,
        cumulativeLayoutShift,
        efficientCachePolicy,
        noHeavyAnimations
      },
      pageWeight: {
        totalSize,
        imagesOptimized,
        minifiedCode,
        textCompression,
        responsiveImages
      },
      carbonFootprint: {
        emissionsPerPage,
        cleanerThanAverage,
        annualEmissions,
        lowCarbonDesign,
        greenWebFoundation
      },
      hosting: {
        renewableEnergy,
        efficientServerLocation,
        usesCDN,
        usesHTTPS,
        modernHTTP,
        hostingProvider,
        isCloudflare
      },
      bestPractices: {
        efficientJavaScript,
        sustainableWebDesign,
        fontStrategy,
        lazyLoading,
        accessibility
      }
    }
  };
};
