
export interface PerformanceDetails {
  firstContentfulPaint: number;
  timeToInteractive: number;
  cumulativeLayoutShift: number;
  efficientCachePolicy: boolean;
  noHeavyAnimations: boolean;
}

export interface PageWeightDetails {
  totalSize: number; // in KB
  imagesOptimized: boolean;
  minifiedCode: boolean;
  textCompression: boolean;
  responsiveImages: boolean;
}

export interface CarbonFootprintDetails {
  emissionsPerPage: number; // in grams of CO2
  cleanerThanAverage: boolean;
  annualEmissions: number; // in kg of CO2
  lowCarbonDesign: boolean;
  greenWebFoundation: boolean;
}

export interface HostingDetails {
  renewableEnergy: boolean;
  efficientServerLocation: boolean;
  usesCDN: boolean;
  usesHTTPS: boolean;
  modernHTTP: boolean;
  hostingProvider: string; // Added to track the detected hosting provider
  isCloudflare: boolean; // Added specifically for Cloudflare detection
}

export interface BestPracticesDetails {
  efficientJavaScript: boolean;
  sustainableWebDesign: boolean;
  fontStrategy: boolean;
  lazyLoading: boolean;
  accessibility: boolean;
}

export interface AnalysisDetails {
  performance: PerformanceDetails;
  pageWeight: PageWeightDetails;
  carbonFootprint: CarbonFootprintDetails;
  hosting: HostingDetails;
  bestPractices: BestPracticesDetails;
}

export interface WebsiteAnalysisResult {
  url: string;
  overallScore: number;
  performanceScore: number;
  pageWeightScore: number;
  carbonFootprintScore: number;
  hostingScore: number;
  bestPracticesScore: number;
  details: AnalysisDetails;
}
