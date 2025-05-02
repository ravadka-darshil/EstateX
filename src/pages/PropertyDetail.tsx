import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { properties } from '@/data/properties';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PropertyGallery from '@/components/property/PropertyGallery';
import { Heart, Share2, Phone, Mail, Calendar, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const property = properties.find(p => p.id === id);
  const [isFavorite, setIsFavorite] = useState(false);
  
  // Load favorite status from localStorage on component mount
  useEffect(() => {
    if (id) {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      setIsFavorite(favorites.includes(id));
    }
  }, [id]);
  
  if (!property) {
    return (
      <div className="container py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Property Not Found</h2>
        <p className="text-gray-600 mb-8">The property you are looking for might have been removed or is no longer available.</p>
        <Button asChild>
          <Link to="/properties">View All Properties</Link>
        </Button>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const toggleFavorite = () => {
    // Get current favorites from localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    let newFavorites;
    if (isFavorite) {
      // Remove from favorites
      newFavorites = favorites.filter((favId: string) => favId !== id);
      toast.info("Property removed from favorites");
    } else {
      // Add to favorites
      newFavorites = [...favorites, id];
      toast.success("Property added to favorites");
    }
    
    // Update localStorage and state
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard");
  };

  const handleContactAgent = () => {
    toast.success("Request sent to agent. They will contact you soon!");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-realestate-primary py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">{property.title}</h1>
              <div className="flex items-center text-white/80 mt-2">
                <MapPin size={16} className="mr-1" />
                <span>{property.location.address}, {property.location.city}, {property.location.state}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-realestate-secondary">{property.status === 'for-sale' ? 'For Sale' : property.status}</Badge>
              <span className="text-2xl font-bold text-white">{formatPrice(property.price)}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <PropertyGallery images={property.images} title={property.title} />
            
            <div className="mt-8">
              <Tabs defaultValue="details">
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                </TabsList>
                
                <TabsContent value="details" className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">Property Details</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 mb-6">
                    <div>
                      <p className="text-gray-500 text-sm">Property Type</p>
                      <p className="font-medium">{property.type}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Bedrooms</p>
                      <p className="font-medium">{property.bedrooms}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Bathrooms</p>
                      <p className="font-medium">{property.bathrooms}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Area</p>
                      <p className="font-medium">{property.size} sqft</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Year Built</p>
                      <p className="font-medium">{property.yearBuilt}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Status</p>
                      <p className="font-medium capitalize">{property.status.replace('-', ' ')}</p>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4">Description</h3>
                  <p className="text-gray-700 leading-relaxed">{property.description}</p>
                </TabsContent>
                
                <TabsContent value="features" className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">Property Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <svg className="w-5 h-5 text-realestate-secondary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="location" className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">Location</h3>
                  <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-4">
                    <p className="text-gray-600">Map would be displayed here</p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <strong>Address:</strong> {property.location.address}, {property.location.city}, {property.location.state} {property.location.zipCode}
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          <div>
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="flex items-center gap-6 border-b pb-6">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={property.agent.avatar} />
                    <AvatarFallback>{property.agent.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">{property.agent.name}</h3>
                    <p className="text-sm text-gray-600">Real Estate Agent</p>
                  </div>
                </div>
                
                <div className="py-6 border-b">
                  <div className="flex items-center mb-4">
                    <Phone size={18} className="text-realestate-secondary mr-3" />
                    <span>{property.agent.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail size={18} className="text-realestate-secondary mr-3" />
                    <span>{property.agent.email}</span>
                  </div>
                </div>
                
                <div className="pt-6">
                  <Button className="w-full mb-3 bg-realestate-primary hover:bg-realestate-primary/90" asChild>
                    <Link to={`/contact/${property.agent.id}?property=${property.id}`}>Contact Agent</Link>
                  </Button>
                  <Button className="w-full mb-3" variant="outline">
                    <Calendar size={18} className="mr-2" />
                    Schedule Viewing
                  </Button>
                  <div className="flex gap-3 mt-4">
                    <Button 
                      className="flex-1" 
                      variant="outline"
                      onClick={toggleFavorite}
                    >
                      <Heart 
                        size={18} 
                        className={`mr-2 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} 
                      />
                      {isFavorite ? 'Saved' : 'Save'}
                    </Button>
                    <Button 
                      className="flex-1" 
                      variant="outline" 
                      onClick={handleShare}
                    >
                      <Share2 size={18} className="mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Similar Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties
              .filter(p => p.id !== property.id && p.type === property.type)
              .slice(0, 3)
              .map(p => (
                <a key={p.id} href={`/properties/${p.id}`} className="block">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-lg">
                    <div className="relative">
                      <img 
                        src={p.images[0]} 
                        alt={p.title}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute bottom-2 left-2 bg-realestate-secondary">{p.type}</Badge>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-1">{p.title}</h3>
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <MapPin size={14} className="mr-1" />
                        <span>{p.location.city}, {p.location.state}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-realestate-primary">
                          {formatPrice(p.price)}
                        </span>
                        <div className="flex gap-2 text-sm text-gray-500">
                          <span>{p.bedrooms} bed</span>
                          <span>{p.bathrooms} bath</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
