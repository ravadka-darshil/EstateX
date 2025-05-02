
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Search, Filter, X } from 'lucide-react';

interface PropertyFilterProps {
  onFilter: (filters: FilterValues) => void;
}

export interface FilterValues {
  search: string;
  priceRange: [number, number];
  bedrooms: string;
  propertyType: string;
}

const PropertyFilter = ({ onFilter }: PropertyFilterProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterValues>({
    search: '',
    priceRange: [0, 2000000],
    bedrooms: 'any',
    propertyType: 'any',
  });

  const handleChange = (field: keyof FilterValues, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(filters);
  };

  const resetFilters = () => {
    setFilters({
      search: '',
      priceRange: [0, 2000000],
      bedrooms: 'any',
      propertyType: 'any',
    });
    onFilter({
      search: '',
      priceRange: [0, 2000000],
      bedrooms: 'any',
      propertyType: 'any',
    });
  };

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                placeholder="Search by location, property name..."
                className="pl-10"
                value={filters.search}
                onChange={(e) => handleChange('search', e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button 
                type="button" 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <Filter size={16} />
                <span>Filter</span>
              </Button>
              <Button type="submit" className="bg-realestate-primary hover:bg-realestate-primary/90">
                Search
              </Button>
            </div>
          </div>

          {isFilterOpen && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
              <div>
                <Label className="mb-2 block">Price Range</Label>
                <div className="px-2">
                  <Slider
                    defaultValue={filters.priceRange}
                    max={2000000}
                    step={50000}
                    onValueChange={(value) => handleChange('priceRange', value)}
                    className="mt-6"
                  />
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>{formatPrice(filters.priceRange[0])}</span>
                  <span>{formatPrice(filters.priceRange[1])}</span>
                </div>
              </div>
              
              <div>
                <Label htmlFor="bedrooms" className="mb-2 block">Bedrooms</Label>
                <Select
                  value={filters.bedrooms}
                  onValueChange={(value) => handleChange('bedrooms', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                    <SelectItem value="5">5+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="propertyType" className="mb-2 block">Property Type</Label>
                <Select
                  value={filters.propertyType}
                  onValueChange={(value) => handleChange('propertyType', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                    <SelectItem value="land">Land</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="md:col-span-3 flex justify-end">
                <Button 
                  type="button" 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={resetFilters}
                >
                  <X size={16} />
                  <span>Reset Filters</span>
                </Button>
              </div>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default PropertyFilter;
