import { useState } from 'react';
import { 
  Plus, 
  Search, 
  Eye, 
  Edit, 
  Trash2, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PropertyForm } from '@/components/admin/PropertyForm';
import { toast } from '@/hooks/use-toast';
import { PropertyType } from '@/types/property';

// Sample data - in a real app, this would come from an API
const sampleProperties: PropertyType[] = [
  {
    id: "1",
    title: "Modern Apartment in City Center",
    description: "A beautiful modern apartment in the heart of the city",
    price: 250000,
    type: "apartment",
    status: "for-sale",
    bedrooms: 2,
    bathrooms: 1,
    size: 850,
    yearBuilt: 2020,
    features: ["Balcony", "Parking", "Air Conditioning"],
    images: ["/placeholder.svg"],
    location: {
      address: "123 City Center",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "USA",
      coordinates: {
        lat: 40.7128,
        lng: -74.0060
      }
    },
    createdAt: "2023-01-15",
    updatedAt: "2023-03-20",
    agent: {
      id: "agent1",
      name: "John Smith",
      phone: "555-123-4567",
      email: "john@estatex.com",
      avatar: "/placeholder.svg"
    }
  },
  {
    id: "2",
    title: "Suburban Family Home",
    description: "Spacious family home in quiet suburban area",
    price: 450000,
    type: "house",
    status: "for-sale",
    bedrooms: 4,
    bathrooms: 2.5,
    size: 2200,
    yearBuilt: 2015,
    features: ["Garden", "Garage", "Fireplace"],
    images: ["/placeholder.svg"],
    location: {
      address: "456 Maple Street",
      city: "Arlington",
      state: "VA",
      zipCode: "22201",
      country: "USA",
      coordinates: {
        lat: 38.8816,
        lng: -77.0910
      }
    },
    createdAt: "2023-02-10",
    updatedAt: "2023-03-15",
    agent: {
      id: "agent2",
      name: "Sarah Johnson",
      phone: "555-987-6543",
      email: "sarah@estatex.com",
      avatar: "/placeholder.svg"
    }
  },
];

const AdminProperties = () => {
  const [properties, setProperties] = useState<PropertyType[]>(sampleProperties);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [propertyToEdit, setPropertyToEdit] = useState<PropertyType | null>(null);
  const [propertyToDelete, setPropertyToDelete] = useState<string | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const filteredProperties = properties.filter(
    property => property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
               property.location.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddProperty = (property: PropertyType) => {
    // In a real app, this would send data to an API
    setProperties([...properties, property]);
    setIsAddDialogOpen(false);
    toast({
      title: "Property added",
      description: "The property has been successfully added.",
    });
  };

  const handleUpdateProperty = (property: PropertyType) => {
    // In a real app, this would send data to an API
    setProperties(properties.map(p => p.id === property.id ? property : p));
    setPropertyToEdit(null);
    toast({
      title: "Property updated",
      description: "The property has been successfully updated.",
    });
  };

  const confirmDelete = () => {
    if (propertyToDelete) {
      // In a real app, this would send a request to an API
      setProperties(properties.filter(p => p.id !== propertyToDelete));
      setIsDeleteDialogOpen(false);
      setPropertyToDelete(null);
      toast({
        title: "Property deleted",
        description: "The property has been successfully removed.",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Properties</h1>
          <p className="text-gray-500">Manage your real estate listings</p>
        </div>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="mr-2" size={16} />
          Add Property
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Property Listings</CardTitle>
          <div className="flex items-center mt-2">
            <Search className="h-4 w-4 mr-2 opacity-50" />
            <Input
              placeholder="Search properties..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[150px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProperties.length > 0 ? (
                  filteredProperties.map((property) => (
                    <TableRow key={property.id}>
                      <TableCell className="font-medium">{property.title}</TableCell>
                      <TableCell className="capitalize">{property.type}</TableCell>
                      <TableCell>${property.price.toLocaleString()}</TableCell>
                      <TableCell>{`${property.location.city}, ${property.location.state}`}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          property.status === 'for-sale' 
                            ? 'bg-green-100 text-green-800'
                            : property.status === 'for-rent'
                            ? 'bg-blue-100 text-blue-800'
                            : property.status === 'sold'
                            ? 'bg-gray-100 text-gray-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {property.status === 'for-sale' 
                            ? 'For Sale' 
                            : property.status === 'for-rent'
                            ? 'For Rent'
                            : property.status === 'sold'
                            ? 'Sold'
                            : 'Pending'}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="icon" asChild>
                            <a href={`/properties/${property.id}`} target="_blank" rel="noopener noreferrer">
                              <Eye className="h-4 w-4" />
                              <span className="sr-only">View</span>
                            </a>
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => setPropertyToEdit(property)}
                          >
                            <Edit className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => {
                              setPropertyToDelete(property.id);
                              setIsDeleteDialogOpen(true);
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center">
                      No properties found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          
          <div className="flex items-center justify-end space-x-2 py-4">
            <Button variant="outline" size="sm">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Add Property Dialog - Modified for better responsiveness */}
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

      {/* Edit Property Dialog - Modified for better responsiveness */}
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

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this property? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminProperties;
