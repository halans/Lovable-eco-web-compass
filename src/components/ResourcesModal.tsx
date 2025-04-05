
import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { FileText, Link } from 'lucide-react';

interface ResourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResourcesModal: React.FC<ResourcesModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-white/95 dark:bg-forest-950/95 backdrop-blur-sm">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl font-semibold">
            <FileText className="h-5 w-5 text-eco-600" /> Resources
          </DialogTitle>
          <DialogDescription>
            Helpful resources for sustainable web development
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 text-left">
          <div>
            <h3 className="text-lg font-semibold">Learning Resources</h3>
            <ul className="mt-2 space-y-2">
              <li className="flex items-start">
                <Link className="h-4 w-4 text-eco-600 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <a href="https://sustainablewebdesign.org" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-eco-600 transition-colors">
                    Sustainable Web Design
                  </a>
                  <p className="text-sm text-muted-foreground">Comprehensive guide to creating environmentally friendly websites.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Link className="h-4 w-4 text-eco-600 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <a href="https://www.wholegraindigital.com/blog/website-energy-efficiency" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-eco-600 transition-colors">
                    Wholegraindigital Blog
                  </a>
                  <p className="text-sm text-muted-foreground">Practical articles on reducing website carbon emissions.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Tools</h3>
            <ul className="mt-2 space-y-2">
              <li className="flex items-start">
                <Link className="h-4 w-4 text-eco-600 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <a href="https://websitecarbon.com" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-eco-600 transition-colors">
                    Website Carbon Calculator
                  </a>
                  <p className="text-sm text-muted-foreground">Estimate the carbon emissions of your website.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Link className="h-4 w-4 text-eco-600 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <a href="https://developers.google.com/web/tools/lighthouse" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-eco-600 transition-colors">
                    Google Lighthouse
                  </a>
                  <p className="text-sm text-muted-foreground">Audit performance, accessibility, and best practices of web pages.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Link className="h-4 w-4 text-eco-600 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <a href="https://www.thegreenwebfoundation.org" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-eco-600 transition-colors">
                    The Green Web Foundation
                  </a>
                  <p className="text-sm text-muted-foreground">Directory of hosting providers using renewable energy.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Publications</h3>
            <ul className="mt-2 space-y-2">
              <li className="flex items-start">
                <Link className="h-4 w-4 text-eco-600 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <a href="https://branch.climateaction.tech" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-eco-600 transition-colors">
                    Branch Magazine
                  </a>
                  <p className="text-sm text-muted-foreground">Online magazine written by and for people who are working on digital sustainability.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Link className="h-4 w-4 text-eco-600 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <a href="https://designingforasustainablefuture.com" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-eco-600 transition-colors">
                    Designing for a Sustainable Future
                  </a>
                  <p className="text-sm text-muted-foreground">Book on sustainable design principles for the digital world.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <p className="text-sm text-muted-foreground pt-2 border-t border-eco-200 dark:border-forest-800">
            These resources are regularly updated. Last updated: April 2025.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResourcesModal;
