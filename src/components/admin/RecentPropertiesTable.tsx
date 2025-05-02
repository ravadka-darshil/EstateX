
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export function RecentPropertiesTable() {
  const recentProperties = [
    {
      id: "PRO123",
      title: "Modern Downtown Apartment",
      price: "$765,000",
      location: "Seattle, WA",
      type: "Apartment",
      status: "for-sale",
      date: "2 days ago"
    },
    {
      id: "PRO122",
      title: "Suburban Family Home",
      price: "$450,000",
      location: "Portland, OR",
      type: "House",
      status: "pending",
      date: "3 days ago"
    },
    {
      id: "PRO121",
      title: "Beach Front Luxury Villa",
      price: "$1,250,000",
      location: "San Diego, CA",
      type: "Villa",
      status: "for-sale",
      date: "5 days ago"
    },
    {
      id: "PRO120",
      title: "Cozy Mountain Cabin",
      price: "$320,000",
      location: "Denver, CO",
      type: "Cabin",
      status: "sold",
      date: "1 week ago"
    },
    {
      id: "PRO119",
      title: "Downtown Condo with View",
      price: "$560,000",
      location: "Chicago, IL",
      type: "Condo",
      status: "for-sale",
      date: "1 week ago"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "for-sale":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "sold":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Property</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Added</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentProperties.map((property) => (
          <TableRow key={property.id}>
            <TableCell className="font-medium">{property.id}</TableCell>
            <TableCell>
              <div>
                <div className="font-medium">{property.title}</div>
                <div className="text-sm text-gray-500">{property.location}</div>
              </div>
            </TableCell>
            <TableCell>{property.price}</TableCell>
            <TableCell>{property.type}</TableCell>
            <TableCell>
              <Badge variant="outline" className={getStatusColor(property.status)}>
                {property.status === "for-sale" 
                  ? "For Sale" 
                  : property.status.charAt(0).toUpperCase() + property.status.slice(1)}
              </Badge>
            </TableCell>
            <TableCell>{property.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
