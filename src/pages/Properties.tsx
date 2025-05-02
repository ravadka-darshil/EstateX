
import { useState, useEffect } from 'react';
import { properties } from '@/data/properties';
import PropertyCard from '@/components/property/PropertyCard';
import PropertyFilter, { FilterValues } from '@/components/property/PropertyFilter';
import { PropertyType } from '@/types/property';

const Properties = () => {
  const [filteredProperties, setFilteredProperties] = useState<PropertyType[]>(properties);
  const [loading, setLoading] = useState(false);

  const handleFilter = (filters: FilterValues) => {
    setLoading(true);
    
    // Simulate loading time
    setTimeout(() => {
      const filtered = properties.filter(property => {
        // Search text filter
        if (filters.search && !property.title.toLowerCase().includes(filters.search.toLowerCase()) &&
            !property.location.address.toLowerCase().includes(filters.search.toLowerCase()) &&
            !property.location.city.toLowerCase().includes(filters.search.toLowerCase())) {
          return false;
        }
        
        // Price range filter
        if (property.price < filters.priceRange[0] || property.price > filters.priceRange[1]) {
          return false;
        }
        
        // Bedrooms filter
        if (filters.bedrooms !== 'any' && property.bedrooms < parseInt(filters.bedrooms)) {
          return false;
        }
        
        // Property type filter
        if (filters.propertyType !== 'any' && 
            property.type.toLowerCase() !== filters.propertyType) {
          return false;
        }
        
        return true;
      });
      
      setFilteredProperties(filtered);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-realestate-primary py-12 md:py-20">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Find Your Perfect Property</h1>
          <p className="text-white/80 mt-2 text-lg">Browse our selection of premium properties</p>
        </div>
      </div>
      
      <div className="container py-8">
        <PropertyFilter onFilter={handleFilter} />
        
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-realestate-secondary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'}
              </p>
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-sm text-gray-600">Sort by:</label>
                <select id="sort" className="border rounded p-1 text-sm">
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>
            
            {filteredProperties.length === 0 ? (
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No properties found</h3>
                <p className="text-gray-600">Try adjusting your search criteria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties.map(property => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Properties;
