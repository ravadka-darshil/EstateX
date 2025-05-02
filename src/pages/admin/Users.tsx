
import { useState } from 'react';
import { Search, User, Mail, Phone, Edit, Trash2, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
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
} from "@/components/ui/dialog";
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';

interface UserType {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'admin' | 'user' | 'agent';
  status: 'active' | 'inactive';
  avatar: string;
  createdAt: string;
}

// Sample data - in a real app, this would come from an API
const sampleUsers: UserType[] = [
  {
    id: "1",
    name: "John Smith",
    email: "john@example.com",
    phone: "555-123-4567",
    role: "admin",
    status: "active",
    avatar: "/placeholder.svg",
    createdAt: "2023-01-15"
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "555-987-6543",
    role: "agent",
    status: "active",
    avatar: "/placeholder.svg",
    createdAt: "2023-02-10"
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "michael@example.com",
    phone: "555-456-7890",
    role: "user",
    status: "active",
    avatar: "/placeholder.svg",
    createdAt: "2023-03-05"
  },
  {
    id: "4",
    name: "Emily Wilson",
    email: "emily@example.com",
    phone: "555-321-6547",
    role: "user",
    status: "inactive",
    avatar: "/placeholder.svg",
    createdAt: "2023-03-22"
  },
];

const AdminUsers = () => {
  const [users, setUsers] = useState<UserType[]>(sampleUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [userToDelete, setUserToDelete] = useState<string | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const filteredUsers = users.filter(
    user => user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const confirmDelete = () => {
    if (userToDelete) {
      // In a real app, this would send a request to an API
      setUsers(users.filter(user => user.id !== userToDelete));
      setIsDeleteDialogOpen(false);
      setUserToDelete(null);
      toast({
        title: "User deleted",
        description: "The user has been successfully removed.",
      });
    }
  };

  const toggleUserStatus = (id: string) => {
    // In a real app, this would send a request to an API
    setUsers(users.map(user => 
      user.id === id 
        ? {...user, status: user.status === 'active' ? 'inactive' : 'active'}
        : user
    ));
    
    toast({
      title: "Status updated",
      description: "The user status has been updated successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Users</h1>
        <p className="text-gray-500">Manage registered users and their permissions</p>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>User Management</CardTitle>
          <div className="flex items-center mt-2">
            <Search className="h-4 w-4 mr-2 opacity-50" />
            <Input
              placeholder="Search users..."
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
                  <TableHead>User</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Joined</TableHead>
                  <TableHead className="w-[150px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center">
                            {user.avatar ? (
                              <img 
                                src={user.avatar} 
                                alt={user.name} 
                                className="h-full w-full rounded-full object-cover"
                              />
                            ) : (
                              <User className="h-5 w-5 text-gray-500" />
                            )}
                          </div>
                          <div className="font-medium">{user.name}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-gray-500" />
                          {user.email}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-gray-500" />
                          {user.phone}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={
                          user.role === 'admin' ? 'destructive' : 
                          user.role === 'agent' ? 'default' : 'outline'
                        }>
                          {user.role === 'admin' && <Shield className="h-3 w-3 mr-1" />}
                          {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={user.status === 'active' ? 'outline' : 'secondary'}>
                          {user.status === 'active' ? 'Active' : 'Inactive'}
                        </Badge>
                      </TableCell>
                      <TableCell>{new Date(user.createdAt).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => toggleUserStatus(user.id)}
                          >
                            <Badge 
                              variant={user.status === 'active' ? 'destructive' : 'default'} 
                              className="cursor-pointer"
                            >
                              {user.status === 'active' ? 'Deactivate' : 'Activate'}
                            </Badge>
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => {
                              setUserToDelete(user.id);
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
                    <TableCell colSpan={7} className="h-24 text-center">
                      No users found.
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

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this user? This action cannot be undone.
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

export default AdminUsers;
