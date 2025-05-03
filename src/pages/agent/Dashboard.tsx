
import { useState } from 'react';
import { properties } from '@/data/properties';
import { agents } from '@/data/agents';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Eye, Edit, Trash2 } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { PropertyForm } from '@/components/admin/PropertyForm';
import { toast } from 'sonner';
import { PropertyType } from '@/types/property';

// For demo, we'll assume the agent is the second one in our list
const currentAgentId = "agent2";

const AgentDashboard = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [propertyToEdit, setPropertyToEdit] = useState<PropertyType | null>(null);
  
  // Get current agent
  const currentAgent = agents.find(a => a.id === currentAgentId);
  
  // Get properties for this agent only
  const agentProperties = properties.filter(p => p.agent.id === currentAgentId);
  
  const handleAddProperty = (property: PropertyType) => {
    // In a real app, this would send data to an API
    toast.success("Property added successfully!");
    setIsAddDialogOpen(false);
  };

  const handleUpdateProperty = (property: PropertyType) => {
    // In a real app, this would send data to an API
    toast.success("Property updated successfully!");
    setPropertyToEdit(null);
  };

  const handleDeleteProperty = (propertyId: string) => {
    // In a real app, this would send a request to an API
    toast.success("Property deleted successfully!");
  };

  if (!currentAgent) return null;

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Agent Dashboard</h1>
          <p className="text-gray-500">Welcome, {currentAgent.name}</p>
        </div>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="mr-2" size={16} />
          Add Property
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Your Properties</CardTitle>
        </CardHeader>
        <CardContent>
          {agentProperties.length > 0 ? (
            <div className="space-y-6">
              {agentProperties.map(property => (
                <div key={property.id} className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 bg-gray-100 rounded flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">{property.title}</h3>
                      <p className="text-sm text-gray-500">{property.location.city}, {property.location.state}</p>
                      <p className="text-sm font-medium">${property.price.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" asChild>
                      <a href={`/properties/${property.id}`} target="_blank" rel="noopener noreferrer">
                        <Eye className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => setPropertyToEdit(property)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => handleDeleteProperty(property.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">You haven't added any properties yet.</p>
              <Button 
                variant="outline" 
                onClick={() => setIsAddDialogOpen(true)}
                className="mt-2"
              >
                Add Your First Property
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
      
      {/* Add Property Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="max-w-4xl w-[95%] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Add New Property</DialogTitle>
            <DialogDescription>
              Fill in the details below to add a new property listing.
            </DialogDescription>
          </DialogHeader>
          <PropertyForm onSubmit={handleAddProperty} />
        </DialogContent>
      </Dialog>

      {/* Edit Property Dialog */}
      <Dialog open={!!propertyToEdit} onOpenChange={(open) => !open && setPropertyToEdit(null)}>
        <DialogContent className="max-w-4xl w-[95%] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Property</DialogTitle>
            <DialogDescription>
              Update the property details below.
            </DialogDescription>
          </DialogHeader>
          {propertyToEdit && <PropertyForm property={propertyToEdit} onSubmit={handleUpdateProperty} />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AgentDashboard;
