
import { useEffect, useState } from 'react';
import { removeBackground, loadImage } from '../utils/backgroundRemoval';

const HeroImage = () => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processImage = async () => {
      setIsProcessing(true);
      try {
        // Load the original image
        const response = await fetch('/lovable-uploads/ddf25775-03fd-4ded-b65a-61316061dad2.png');
        const blob = await response.blob();
        const imageElement = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(imageElement);
        const url = URL.createObjectURL(processedBlob);
        setProcessedImageUrl(url);
      } catch (error) {
        console.error('Failed to process image:', error);
        // Fallback to original image
        setProcessedImageUrl('/lovable-uploads/ddf25775-03fd-4ded-b65a-61316061dad2.png');
      } finally {
        setIsProcessing(false);
      }
    };

    processImage();
  }, []);

  return (
    <div className="flex justify-center mb-8">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        <div className="relative">
          {isProcessing ? (
            <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-800/50 rounded-full flex items-center justify-center border-4 border-white/10">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
            </div>
          ) : (
            <img
              src={processedImageUrl || '/lovable-uploads/ddf25775-03fd-4ded-b65a-61316061dad2.png'}
              alt="Anfas KP"
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-white/10 shadow-2xl transform group-hover:scale-105 transition-all duration-500"
            />
          )}
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
