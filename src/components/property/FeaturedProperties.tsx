
import { useState } from 'react';
import { PropertyType } from '@/types/property';
import PropertyCard from './PropertyCard';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FeaturedPropertiesProps {
  properties: PropertyType[];
}

const FeaturedProperties = ({ properties }: FeaturedPropertiesProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(properties.length / itemsPerPage);
  const displayedProperties = properties.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-realestate-light">
      <div className="container">
        <h2 className="section-title">Featured Properties</h2>
        <p className="section-subtitle">Explore our handpicked selection of premium properties</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {displayedProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        {totalPages > 1 && (
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevPage}
              className="rounded-full"
            >
              <ChevronLeft />
              <span className="sr-only">Previous</span>
            </Button>
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }).map((_, i) => (
                <Button
                  key={i}
                  variant={i === currentPage ? "default" : "outline"}
                  className={`w-8 h-8 p-0 ${i === currentPage ? 'bg-realestate-primary' : ''}`}
                  onClick={() => setCurrentPage(i)}
                >
                  {i + 1}
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextPage}
              className="rounded-full"
            >
              <ChevronRight />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProperties;
