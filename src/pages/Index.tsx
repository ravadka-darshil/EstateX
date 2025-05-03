
import { useState, useEffect } from 'react';
import { properties } from '@/data/properties';
import { agents } from '@/data/agents';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Check, Star } from 'lucide-react';
import HeroBg from '/hero-bg.jpg';
import FeaturedProperties from '@/components/property/FeaturedProperties';

const Index = () => {
  const [search, setSearch] = useState('');
  const [randomProperties, setRandomProperties] = useState(properties);
  
  useEffect(() => {
    // Shuffle and select random properties for display
    const shuffled = [...properties].sort(() => 0.5 - Math.random());
    setRandomProperties(shuffled.slice(0, 12));
  }, []);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would filter based on the search term
    window.location.href = `/properties?search=${search}`;
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[80vh]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HeroBg || '/hero-bg.jpg'})`,
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-6xl text-white font-bold text-center mb-6">
            Find Your Dream Property
          </h1>
          <p className="text-xl text-white text-center mb-8 max-w-2xl">
            Discover the perfect property in your favorite location. We have a wide range of properties to suit your needs.
          </p>
          
          <form 
            onSubmit={handleSearch} 
            className="w-full max-w-3xl flex flex-col md:flex-row gap-2"
          >
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for properties by location, type, etc."
                className="pl-10 py-6 rounded-lg w-full text-lg"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Button type="submit" className="bg-realestate-secondary py-6 px-8 text-lg">
              Search
            </Button>
          </form>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full flex justify-center">
          <div className="bg-white shadow-lg p-4 rounded-t-lg flex gap-8 overflow-x-auto justify-center">
            {['Houses', 'Apartments', 'Condos', 'Land', 'Commercial'].map((category, index) => (
              <Link 
                key={index} 
                to={`/properties?type=${category.toLowerCase()}`} 
                className="flex flex-col items-center px-3 py-2 min-w-[80px] hover:text-realestate-primary transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 mb-1">
                  <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <span className="text-sm">{category}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Properties */}
      <FeaturedProperties properties={randomProperties} />
      
      {/* How It Works */}
      <section className="py-16">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Find your dream property in 3 simple steps</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="flex flex-col items-center text-center px-6">
              <div className="w-16 h-16 rounded-full bg-realestate-light flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-realestate-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Search Properties</h3>
              <p className="text-gray-600">Browse our extensive catalog of properties across various locations and types.</p>
            </div>
            
            <div className="flex flex-col items-center text-center px-6">
              <div className="w-16 h-16 rounded-full bg-realestate-light flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-realestate-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Book a Visit</h3>
              <p className="text-gray-600">Schedule a visit to the property with one of our professional agents.</p>
            </div>
            
            <div className="flex flex-col items-center text-center px-6">
              <div className="w-16 h-16 rounded-full bg-realestate-light flex items-center justify-center mb-4">
                <Check className="w-8 h-8 text-realestate-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Close the Deal</h3>
              <p className="text-gray-600">Our experts will guide you through the process of finalizing your property deal.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-realestate-light">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Discover why clients love EstateX</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="border-none">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">
                    "EstateX made finding our dream home so easy! The agents were professional and really understood our needs."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold">Jane Smith</h4>
                      <p className="text-sm text-gray-500">Homeowner</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Locations */}
      <section className="py-16">
        <div className="container">
          <h2 className="section-title">Popular Locations</h2>
          <p className="section-subtitle">Explore properties in these popular areas</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              { name: 'New York', count: '245 properties' },
              { name: 'Los Angeles', count: '184 properties' },
              { name: 'Miami', count: '113 properties' },
              { name: 'Chicago', count: '97 properties' }
            ].map((location, index) => (
              <Link to={`/properties?location=${location.name}`} key={index} className="group relative h-72 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gray-400"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-5 text-white">
                  <h3 className="text-2xl font-bold">{location.name}</h3>
                  <p className="text-sm text-white/80">{location.count}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Agents */}
      <section className="py-16 bg-realestate-light">
        <div className="container">
          <h2 className="section-title">Our Expert Agents</h2>
          <p className="section-subtitle">Meet our professional team ready to help you</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {agents.slice(0, 4).map((agent) => (
              <Card key={agent.id} className="overflow-hidden">
                <div className="h-60 bg-gray-200"></div>
                <CardContent className="p-5 text-center">
                  <h3 className="font-bold text-xl mb-1">{agent.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">Real Estate Agent</p>
                  <div className="flex justify-center gap-3">
                    <a href="#" className="text-gray-400 hover:text-realestate-primary">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-realestate-primary">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-realestate-primary">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-10">
            <Button asChild variant="outline" className="font-medium px-8">
              <Link to="/agents">View All Agents</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-realestate-primary text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Dream Property?</h2>
            <p className="text-white/80 mb-8 text-lg">
              Browse our collection of premium properties or get in touch with one of our agents to help you find the perfect match.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-realestate-primary hover:bg-white/90 px-8 py-6 text-lg">
                <Link to="/properties">Browse Properties</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
