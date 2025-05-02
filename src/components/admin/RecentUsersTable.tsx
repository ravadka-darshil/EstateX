
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function RecentUsersTable() {
  const recentUsers = [
    {
      id: "U123",
      name: "Alex Johnson",
      email: "alex@example.com",
      role: "User",
      status: "Active",
      date: "2 days ago",
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    {
      id: "U122",
      name: "Morgan Williams",
      email: "morgan@example.com",
      role: "Agent",
      status: "Active",
      date: "4 days ago",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    {
      id: "U121",
      name: "Taylor Smith",
      email: "taylor@example.com",
      role: "User",
      status: "Inactive",
      date: "1 week ago",
      avatar: "https://i.pravatar.cc/150?img=13"
    },
    {
      id: "U120",
      name: "Jamie Brown",
      email: "jamie@example.com",
      role: "Admin",
      status: "Active",
      date: "1 week ago",
      avatar: "https://i.pravatar.cc/150?img=14"
    },
    {
      id: "U119",
      name: "Casey Davis",
      email: "casey@example.com",
      role: "Agent",
      status: "Active",
      date: "2 weeks ago",
      avatar: "https://i.pravatar.cc/150?img=15"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-gray-100 text-gray-800";
      case "suspended":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getRoleBadge = (role: string) => {
    switch (role.toLowerCase()) {
      case "admin":
        return "bg-purple-100 text-purple-800";
      case "agent":
        return "bg-blue-100 text-blue-800";
      case "user":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>User</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Joined</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentUsers.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{user.name}</div>
                  <div className="text-sm text-gray-500">{user.email}</div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Badge variant="outline" className={getRoleBadge(user.role)}>
                {user.role}
              </Badge>
            </TableCell>
            <TableCell>
              <Badge variant="outline" className={getStatusColor(user.status)}>
                {user.status}
              </Badge>
            </TableCell>
            <TableCell>{user.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
