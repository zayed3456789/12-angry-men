import React from 'react';
import { motion } from 'framer-motion';
import { FileImage as ImageIcon, Download } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';


const GallerySection = ({ galleryImages }) => {
  const { toast } = useToast();

  const handleDownload = (imageSrc, imageName) => {
    fetch(imageSrc)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = imageName || 'gallery-image.jpg';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
        toast({
          title: "Image Download Started",
          description: `${imageName} is being downloaded.`,
          className: "bg-green-700 text-white border-green-700",
        });
      })
      .catch(() => toast({
        title: "Download Failed",
        description: "Could not download the image. Please try again.",
        variant: "destructive",
      }));
  };

  return (
    <SectionWrapper id="gallery" title="Gallery" icon={ImageIcon}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            className="rounded-lg overflow-hidden shadow-xl group relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <img src={image.src} alt={image.alt} className="w-full h-72 md:h-80 object-cover transform transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
              <p className="text-white text-center text-sm mb-3 bg-black/60 p-2 rounded">{image.alt}</p>
              <Button
                variant="outline"
                size="sm"
                className="bg-[#E0A040] text-black hover:bg-[#D49030] border-[#E0A040] hover:border-[#D49030] font-semibold"
                onClick={() => handleDownload(image.src, image.alt.replace(/ /g, '_') + '.jpg')}
              >
                <Download className="mr-2 h-4 w-4" /> Download
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default GallerySection;