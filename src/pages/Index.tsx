
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Search, Building, Home, MapPin } from 'lucide-react';
import { properties } from '@/data/properties';
import FeaturedProperties from '@/components/property/FeaturedProperties';

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-realestate-primary h-[500px] md:h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-realestate-primary to-transparent opacity-90 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80" 
            alt="Modern house exterior" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Find Your Dream Property Today</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Discover the perfect home from thousands of listings in your area.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/properties">View Properties</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm" asChild>
                <Link to="/contact">Contact Agent</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="bg-white py-8 border-b">
        <div className="container">
          <div className="bg-white rounded-lg shadow-lg p-6 -mt-16 md:-mt-24 relative z-30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-realestate-primary focus:border-realestate-primary"
                />
              </div>
              
              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-realestate-primary focus:border-realestate-primary appearance-none">
                  <option value="">Property Type</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                  <option value="villa">Villa</option>
                  <option value="townhouse">Townhouse</option>
                </select>
              </div>
              
              <div>
                <Button className="w-full py-6 bg-realestate-primary hover:bg-realestate-primary/90">
                  <Search className="mr-2" size={18} />
                  Search Properties
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <FeaturedProperties properties={properties} />

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Why Choose EstateX?</h2>
              <p className="text-gray-600 mb-6">
                With over 15 years of experience in the real estate market, we've helped thousands of clients find their perfect home or investment property. Our team of professional agents combines market knowledge with personalized service to make your real estate journey smooth and successful.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-realestate-secondary/10 p-3 rounded-full text-realestate-secondary mr-4">
                    <Home size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">5000+ Properties</h3>
                    <p className="text-gray-600 text-sm">A vast selection of properties to fit all needs and budgets</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-realestate-secondary/10 p-3 rounded-full text-realestate-secondary mr-4">
                    <Building size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Top Rated Agents</h3>
                    <p className="text-gray-600 text-sm">Expert professionals ready to guide you through every step</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-realestate-secondary/10 p-3 rounded-full text-realestate-secondary mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Verified Listings</h3>
                    <p className="text-gray-600 text-sm">All our properties are carefully verified for your peace of mind</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-realestate-secondary/10 p-3 rounded-full text-realestate-secondary mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Secure Transactions</h3>
                    <p className="text-gray-600 text-sm">Safe and transparent processes from start to finish</p>
                  </div>
                </div>
              </div>
              <Button asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80" 
                  alt="Real estate agent with clients" 
                  className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg z-20">
                <div className="text-realestate-primary font-bold text-xl mb-1">15+</div>
                <div className="text-gray-600 text-sm">Years of Experience</div>
              </div>
              <div className="absolute -z-10 top-10 -right-10 w-60 h-60 bg-realestate-secondary/10 rounded-full"></div>
              <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-realestate-primary/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-realestate-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Find Your Dream Home?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let our experts guide you through the process of finding and purchasing your perfect property.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-realestate-primary hover:bg-gray-100" asChild>
              <Link to="/properties">Browse Properties</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-realestate-light">
        <div className="container">
          <h2 className="section-title text-center">What Our Clients Say</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            Hear from clients who found their perfect properties with our help
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <p className="text-gray-600 italic mb-6">
                  "Working with RealEstatePro was an excellent experience. Our agent was knowledgeable, responsive, and helped us navigate the entire process with ease. We found our dream home faster than we expected!"
                </p>
                <div className="flex items-center">
                  <img src={`https://i.pravatar.cc/150?img=${30+i}`} alt="Client" className="w-10 h-10 rounded-full mr-4" />
                  <div>
                    <h4 className="font-bold">John & Sarah Thompson</h4>
                    <p className="text-sm text-gray-500">Homeowners in Seattle</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
