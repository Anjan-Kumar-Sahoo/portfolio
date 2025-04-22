import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              &copy; {year} - All Rights Reserved
            </p>
          </div>
          
          <div className="flex items-center text-sm">
            <span className="text-gray-400">Made with</span>
            <Heart size={16} className="mx-1 text-red-500" />
            <span className="text-gray-400">by Anjan Kumar Sahoo</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;