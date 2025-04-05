
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

interface SearchFormProps {
  onSubmit: (url: string) => void;
  loading: boolean;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSubmit, loading }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic URL validation
    if (!url.trim()) {
      toast.error('Please enter a URL');
      return;
    }

    // Process the URL to ensure it has https:// prefix
    let processedUrl = url.trim();
    if (!/^https?:\/\//i.test(processedUrl)) {
      processedUrl = 'https://' + processedUrl;
    }

    try {
      // Check if it's a valid URL format
      new URL(processedUrl);
      onSubmit(processedUrl);
    } catch (error) {
      toast.error('Please enter a valid URL');
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="flex w-full items-center space-x-2">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Enter website URL (e.g., example.com)"
            value={url}
            onChange={handleUrlChange}
            className="pl-10 pr-4 py-6 bg-white/50 dark:bg-forest-950/30 backdrop-blur-sm focus-visible:ring-eco-600"
            aria-label="Website URL"
          />
        </div>
        <Button 
          type="submit" 
          size="lg" 
          disabled={loading} 
          className="bg-eco-600 hover:bg-eco-700 text-white"
        >
          {loading ? 'Analyzing...' : 'Analyze'}
        </Button>
      </div>
    </form>
  );
};

export default SearchForm;
