
import { useState, useEffect } from 'react';
import PropertyCard from '@/components/property/PropertyCard';
import { properties } from '@/data/properties';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { PropertyType } from '@/types/property';

const Favorites = () => {
  const [favoriteProperties, setFavoriteProperties] = useState<PropertyType[]>([]);

  useEffect(() => {
    // Load favorites from localStorage
    const loadFavorites = () => {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      const favoriteProps = properties.filter(property => favorites.includes(property.id));
      setFavoriteProperties(favoriteProps);
    };

    loadFavorites();
    
    // Add event listener to update favorites if changed in another component
    window.addEventListener('storage', loadFavorites);
    
    return () => {
      window.removeEventListener('storage', loadFavorites);
    };
  }, []);

  const removeFromFavorites = (id: string) => {
    // Update localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const newFavorites = favorites.filter((favId: string) => favId !== id);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    
    // Update state
    setFavoriteProperties(favoriteProperties.filter(property => property.id !== id));
    
    // Dispatch storage event to notify other components
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-realestate-primary py-12">
        <div className="container">
          <h1 className="text-3xl font-bold text-white">My Favorite Properties</h1>
          <p className="text-white/80 mt-2">Manage your saved properties</p>
        </div>
      </div>
      
      <div className="container py-8">
        {favoriteProperties.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">No Favorites Yet</h2>
            <p className="text-gray-600 mb-6">
              You haven't added any properties to your favorites list yet. Browse our properties and click the heart icon to save them.
            </p>
            <Button asChild>
              <Link to="/properties">Browse Properties</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteProperties.map(property => (
                <div key={property.id} className="relative">
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute -top-2 -right-2 z-10 bg-white rounded-full shadow-md"
                    onClick={() => removeFromFavorites(property.id)}
                  >
                    <X size={16} />
                  </Button>
                  <PropertyCard property={property} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Favorites;
