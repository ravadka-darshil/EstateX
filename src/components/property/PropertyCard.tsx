
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, MapPin } from 'lucide-react';
import { PropertyType } from '@/types/property';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';

interface PropertyCardProps {
  property: PropertyType;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Load favorite status from localStorage on component mount
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.includes(property.id));
  }, [property.id]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Get current favorites from localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    let newFavorites;
    if (isFavorite) {
      // Remove from favorites
      newFavorites = favorites.filter((id: string) => id !== property.id);
      toast.info("Property removed from favorites");
    } else {
      // Add to favorites
      newFavorites = [...favorites, property.id];
      toast.success("Property added to favorites");
    }
    
    // Update localStorage and state
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link to={`/properties/${property.id}`}>
      <Card className="overflow-hidden property-card h-full">
        <div className="relative">
          <img 
            src={property.images[0]} 
            alt={property.title}
            className="w-full h-48 object-cover"
          />
          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-2 right-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white ${
              isFavorite ? "text-red-500" : "text-gray-600"
            }`}
            onClick={toggleFavorite}
          >
            <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
          </Button>
          <Badge className="absolute bottom-2 left-2 bg-realestate-secondary">{property.type}</Badge>
        </div>
        <CardContent className="p-4">
          <h3 className="font-bold text-lg line-clamp-1">{property.title}</h3>
          <div className="flex items-center text-gray-500 mt-1 mb-2 text-sm">
            <MapPin size={14} className="mr-1" />
            <span className="line-clamp-1">{property.location.address}, {property.location.city}</span>
          </div>
          
          <div className="flex justify-between items-center mt-4">
            <span className="text-lg font-bold text-realestate-primary">
              {formatPrice(property.price)}
            </span>
            <div className="flex gap-3 text-sm text-gray-500">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                {property.bedrooms}
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                {property.bathrooms}
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
                {property.size} sqft
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PropertyCard;
