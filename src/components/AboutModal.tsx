
import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Info } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-white/95 dark:bg-forest-950/95 backdrop-blur-sm">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl font-semibold">
            <Info className="h-5 w-5 text-eco-600" /> About Eco Web Compass
          </DialogTitle>
          <DialogDescription>
            Our mission and purpose
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 text-left">
          <p>
            Eco Web Compass was founded in 2025 with a clear mission: to make the web more sustainable, 
            one website at a time. As digital technologies continue to grow, so does their environmental 
            impact. Our platform provides tools to measure, understand, and reduce the carbon footprint of 
            websites.
          </p>
          
          <div className="p-3 bg-eco-50 dark:bg-forest-900 rounded-md border border-eco-200 dark:border-forest-800">
            <p className="text-sm text-muted-foreground italic">
              Note: This is a demo application using mock services for educational purposes. The analysis results and 
              recommendations are simulated and would require real backend services for production use.
            </p>
          </div>
          
          <h3 className="text-lg font-semibold mt-4">Our Team</h3>
          <p>
            Our diverse team of developers, environmental scientists, and digital sustainability experts 
            work together to create accurate, actionable insights for website owners. We're passionate about 
            the intersection of technology and environmental responsibility.
          </p>
          
          <h3 className="text-lg font-semibold mt-4">Our Values</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><span className="font-medium">Transparency:</span> We're open about our methodology and calculations.</li>
            <li><span className="font-medium">Accessibility:</span> Digital sustainability should be available to everyone.</li>
            <li><span className="font-medium">Accuracy:</span> We continually refine our metrics to provide the most reliable data.</li>
            <li><span className="font-medium">Impact:</span> We focus on practical recommendations that make a real difference.</li>
          </ul>
          
          <h3 className="text-lg font-semibold mt-4">Contact Us</h3>
          <p>
            Have questions or suggestions? We'd love to hear from you at <span className="text-eco-600">contact@ecowebcompass.org</span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AboutModal;
