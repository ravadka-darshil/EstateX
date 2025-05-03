
import { useState, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { properties } from '@/data/properties';
import { agents } from '@/data/agents';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Phone, Mail, MapPin, User, MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Contact = () => {
  const navigate = useNavigate();
  const { agentId } = useParams<{ agentId: string }>();
  const [searchParams] = useSearchParams();
  const propertyId = searchParams.get('property');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const property = propertyId ? properties.find(p => p.id === propertyId) : null;
  
  // Find agent details from our agents data
  const agent = agents.find(a => a.id === agentId);
  
  useEffect(() => {
    // If agent doesn't exist, redirect to agents page
    if (!agent) {
      toast.error("Agent not found");
      navigate('/agents');
      return;
    }
    
    if (property) {
      setFormData(prev => ({
        ...prev,
        message: `I'm interested in ${property.title} at ${property.location.address}, ${property.location.city}. Please provide more information.`
      }));
    }
  }, [agent, property, navigate]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData);
    
    toast.success("Message sent successfully! Our agent will contact you soon.");
    
    // Reset form
    setFormData({
      ...formData,
      name: '',
      email: '',
      phone: ''
    });
  };

  if (!agent) return null;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-realestate-primary py-12">
        <div className="container">
          <h1 className="text-3xl font-bold text-white">Contact Agent</h1>
          <p className="text-white/80 mt-2">Get in touch with our expert real estate agent</p>
        </div>
      </div>
      
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Send a Message to {agent.name}</h2>
                
                {property && (
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium">Regarding Property:</h3>
                    <p className="text-realestate-primary font-medium">{property.title}</p>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <MapPin size={14} className="mr-1" />
                      <span>{property.location.address}, {property.location.city}</span>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-400">
                        <User size={18} />
                      </span>
                      <Input 
                        id="name"
                        name="name"
                        className="pl-10"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-400">
                        <Mail size={18} />
                      </span>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        className="pl-10"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-400">
                        <Phone size={18} />
                      </span>
                      <Input 
                        id="phone"
                        name="phone"
                        className="pl-10"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-400">
                        <MessageSquare size={18} />
                      </span>
                      <Textarea 
                        id="message"
                        name="message"
                        className="pl-10 min-h-32"
                        placeholder="Type your message here"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-realestate-primary hover:bg-realestate-primary/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={agent.avatar} />
                    <AvatarFallback>{agent.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold text-lg">{agent.name}</h3>
                    <p className="text-sm text-gray-600">
                      {agent.role === 'admin' ? 'Senior Real Estate Agent' : 'Real Estate Agent'}
                    </p>
                  </div>
                </div>
                
                {agent.bio && (
                  <>
                    <p className="text-sm text-gray-700 mt-3">{agent.bio}</p>
                    <Separator className="my-4" />
                  </>
                )}
                
                {agent.specialties && agent.specialties.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm font-semibold mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {agent.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline">{specialty}</Badge>
                      ))}
                    </div>
                    <Separator className="my-4" />
                  </div>
                )}
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-realestate-secondary mr-3" />
                    <span>{agent.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-realestate-secondary mr-3" />
                    <span>{agent.email}</span>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Office Hours:</h4>
                  <p className="text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-sm">Sunday: Closed</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
