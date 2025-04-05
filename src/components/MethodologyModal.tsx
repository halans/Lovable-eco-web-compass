
import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Book } from 'lucide-react';

interface MethodologyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MethodologyModal: React.FC<MethodologyModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-white/95 dark:bg-forest-950/95 backdrop-blur-sm">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl font-semibold">
            <Book className="h-5 w-5 text-eco-600" /> Our Methodology
          </DialogTitle>
          <DialogDescription>
            How we analyze and score websites
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 text-left">
          <p>
            Eco Web Compass uses a comprehensive methodology to evaluate website sustainability across multiple dimensions.
            Our scoring system is built on established industry guidelines and environmental research.
          </p>
          
          <h3 className="text-lg font-semibold mt-4">Scoring Categories</h3>
          
          <div className="space-y-3">
            <div>
              <h4 className="font-medium">Performance</h4>
              <p className="text-sm text-muted-foreground">
                We measure loading speeds, time to interactive, and other performance metrics that impact 
                energy consumption. Faster websites use less processing power and therefore less energy.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium">Page Weight</h4>
              <p className="text-sm text-muted-foreground">
                The total size of a web page affects data transfer and storage requirements. We analyze HTML, 
                CSS, JavaScript, images, and other resources to calculate total weight.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium">Carbon Footprint</h4>
              <p className="text-sm text-muted-foreground">
                Using data on energy consumption and average emissions factors, we estimate the carbon footprint 
                of each page view. This includes energy used by data centers, networks, and end-user devices.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium">Hosting</h4>
              <p className="text-sm text-muted-foreground">
                We check whether a website is hosted on servers powered by renewable energy, based on data 
                from The Green Web Foundation and publicly available information from hosting providers.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium">Best Practices</h4>
              <p className="text-sm text-muted-foreground">
                We evaluate whether a site follows sustainable web design principles, such as efficient caching, 
                proper image optimization, and minimal use of energy-intensive animations.
              </p>
            </div>
          </div>
          
          <h3 className="text-lg font-semibold mt-4">Data Sources</h3>
          <p>
            Our analysis combines data from multiple sources, including:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Lighthouse performance audits</li>
            <li>The Green Web Foundation's hosting database</li>
            <li>HTTP Archive industry benchmarks</li>
            <li>Carbon intensity data from electricity maps</li>
            <li>W3C Web Performance Working Group standards</li>
          </ul>
          
          <p className="text-sm text-muted-foreground mt-4">
            Our methodology is continuously updated as industry standards evolve and new research emerges in the field of digital sustainability.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MethodologyModal;
