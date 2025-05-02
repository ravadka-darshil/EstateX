
import { Building, Users, ArrowUp, ArrowDown, DollarSign, Eye } from 'lucide-react';
import StatsCard from '@/components/admin/StatsCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RecentPropertiesTable } from '@/components/admin/RecentPropertiesTable';
import { RecentUsersTable } from '@/components/admin/RecentUsersTable';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-gray-500">Overview of your real estate business</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Properties"
          value="145"
          icon={Building}
          description="from last month"
          trend={{ value: "12%", isPositive: true }}
          iconBgColor="bg-blue-100"
          iconColor="text-blue-600"
        />
        <StatsCard
          title="Total Users"
          value="2,341"
          icon={Users}
          description="from last month"
          trend={{ value: "8.4%", isPositive: true }}
          iconBgColor="bg-green-100"
          iconColor="text-green-600"
        />
        <StatsCard
          title="Total Sales"
          value="$823,500"
          icon={DollarSign}
          description="from last month"
          trend={{ value: "5.6%", isPositive: false }}
          iconBgColor="bg-yellow-100"
          iconColor="text-yellow-600"
        />
        <StatsCard
          title="Total Views"
          value="45.2K"
          icon={Eye}
          description="from last month"
          trend={{ value: "24%", isPositive: true }}
          iconBgColor="bg-purple-100"
          iconColor="text-purple-600"
        />
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Recent Properties</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentPropertiesTable />
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Users</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentUsersTable />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
