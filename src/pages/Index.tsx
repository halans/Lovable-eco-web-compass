
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';
import SustainabilityHeader from '@/components/SustainabilityHeader';
import SearchForm from '@/components/SearchForm';
import ResultsSummary from '@/components/ResultsSummary';
import CategoryScores from '@/components/CategoryScores';
import DetailedResults from '@/components/DetailedResults';
import RecommendationSection from '@/components/RecommendationSection';
import InfoSection from '@/components/InfoSection';
import AboutModal from '@/components/AboutModal';
import MethodologyModal from '@/components/MethodologyModal';
import ResourcesModal from '@/components/ResourcesModal';
import { WebsiteAnalysisResult } from '@/types/analysis';
import { analyzeWebsite } from '@/services/analysisService';

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<WebsiteAnalysisResult | null>(null);
  const [url, setUrl] = useState<string>('');
  
  // Modal states
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [methodologyModalOpen, setMethodologyModalOpen] = useState(false);
  const [resourcesModalOpen, setResourcesModalOpen] = useState(false);

  const handleAnalyze = async (websiteUrl: string) => {
    setLoading(true);
    setUrl(websiteUrl);
    
    try {
      const analysisResult = await analyzeWebsite(websiteUrl);
      setResult(analysisResult);
    } catch (error) {
      console.error('Analysis error:', error);
      // In a real app, we would handle this error properly
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-eco-50 to-eco-100 dark:from-forest-950 dark:to-forest-900">
      <div className="container px-4 py-12 mx-auto max-w-6xl">
        <SustainabilityHeader />
        
        {/* Search form */}
        <div className="mb-12">
          <SearchForm onSubmit={handleAnalyze} loading={loading} />
        </div>
        
        {loading && (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-16 h-16 border-t-4 border-eco-600 border-solid rounded-full animate-spin"></div>
            <p className="mt-4 text-muted-foreground">Analyzing website sustainability...</p>
          </div>
        )}
        
        {result && !loading && (
          <div className="space-y-8 animate-in fade-in duration-500">
            {/* Results summary */}
            <ResultsSummary result={result} url={url} />
            
            {/* Category scores */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Category Scores</h2>
              <CategoryScores result={result} />
            </div>
            
            {/* Detailed results */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Detailed Analysis</h2>
              <DetailedResults result={result} />
            </div>
            
            {/* Recommendations */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Recommendations</h2>
              <RecommendationSection result={result} />
            </div>
          </div>
        )}
        
        {!loading && (
          <div className="mt-16">
            <h2 className="text-xl font-semibold mb-6 text-center">Understanding Digital Sustainability</h2>
            <InfoSection />
          </div>
        )}
        
        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-eco-200 dark:border-forest-800 text-center">
          <p className="text-sm text-muted-foreground">
            Eco Web Compass — Evaluating digital sustainability since 2025
          </p>
          <div className="flex items-center justify-center mt-4 space-x-4">
            <Button 
              variant="link" 
              size="sm" 
              className="text-muted-foreground hover:text-foreground"
              onClick={() => setAboutModalOpen(true)}
            >
              About
            </Button>
            <Button 
              variant="link" 
              size="sm" 
              className="text-muted-foreground hover:text-foreground"
              onClick={() => setMethodologyModalOpen(true)}
            >
              Methodology
            </Button>
            <Button 
              variant="link" 
              size="sm" 
              className="text-muted-foreground hover:text-foreground"
              onClick={() => setResourcesModalOpen(true)}
            >
              Resources
            </Button>
          </div>
        </footer>
        
        {/* Modals */}
        <AboutModal isOpen={aboutModalOpen} onClose={() => setAboutModalOpen(false)} />
        <MethodologyModal isOpen={methodologyModalOpen} onClose={() => setMethodologyModalOpen(false)} />
        <ResourcesModal isOpen={resourcesModalOpen} onClose={() => setResourcesModalOpen(false)} />
      </div>
    </div>
  );
};

export default Index;
