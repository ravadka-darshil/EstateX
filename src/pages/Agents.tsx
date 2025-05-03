
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { agents } from '@/data/agents';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Search, Mail, Phone } from 'lucide-react';

const Agents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredAgents = agents.filter(agent =>
    agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    agent.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    agent.specialties?.some(specialty => specialty.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-realestate-primary py-12">
        <div className="container">
          <h1 className="text-3xl font-bold text-white">Our Agents</h1>
          <p className="text-white/80 mt-2">Find and contact our expert real estate agents</p>
        </div>
      </div>
      
      <div className="container py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Meet Our Team</h2>
          
          <div className="relative max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search agents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map((agent) => (
            <Card key={agent.id} className="overflow-hidden h-full flex flex-col">
              <CardHeader className="pb-0">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={agent.avatar} alt={agent.name} />
                    <AvatarFallback>{agent.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold">{agent.name}</h3>
                    <p className="text-sm text-gray-500">{agent.location}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="flex-1">
                <p className="text-gray-700 mt-4">{agent.bio}</p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {agent.specialties?.map((specialty, index) => (
                    <Badge key={index} variant="outline">{specialty}</Badge>
                  ))}
                </div>
                
                <div className="mt-6 space-y-2">
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-realestate-secondary" />
                    <span>{agent.phone}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2 text-realestate-secondary" />
                    <span>{agent.email}</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="border-t pt-4">
                <Button asChild className="w-full bg-realestate-primary hover:bg-realestate-primary/90">
                  <Link to={`/contact/${agent.id}`}>
                    Contact Agent
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
          
          {filteredAgents.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">No agents found matching your search criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Agents;
