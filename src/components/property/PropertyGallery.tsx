
import { useState } from 'react';
import { Card } from '@/components/ui/card';

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

const PropertyGallery = ({ images, title }: PropertyGalleryProps) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div>
      <Card className="overflow-hidden mb-4">
        <div className="relative h-[300px] md:h-[500px]">
          <img
            src={mainImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </Card>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`cursor-pointer transition-all rounded-md overflow-hidden ${
              mainImage === image ? "ring-2 ring-realestate-primary" : "opacity-70 hover:opacity-100"
            }`}
            onClick={() => setMainImage(image)}
          >
            <img
              src={image}
              alt={`${title} - image ${index + 1}`}
              className="w-full h-20 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyGallery;
