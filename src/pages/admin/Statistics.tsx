
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';

// Sample visualization data - in a real app, this would come from an API
const propertyViewsData = [
  { name: 'Jan', views: 4000 },
  { name: 'Feb', views: 3000 },
  { name: 'Mar', views: 5000 },
  { name: 'Apr', views: 4500 },
  { name: 'May', views: 6000 },
  { name: 'Jun', views: 5500 },
  { name: 'Jul', views: 7000 },
  { name: 'Aug', views: 6500 },
  { name: 'Sep', views: 8000 },
  { name: 'Oct', views: 7500 },
  { name: 'Nov', views: 9000 },
  { name: 'Dec', views: 8500 },
];

const propertiesByTypeData = [
  { name: 'Apartment', value: 35 },
  { name: 'House', value: 25 },
  { name: 'Condo', value: 20 },
  { name: 'Townhouse', value: 10 },
  { name: 'Land', value: 7 },
  { name: 'Commercial', value: 3 },
];

const pieColors = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57'];

const salesData = [
  { name: 'Jan', sales: 100000 },
  { name: 'Feb', sales: 120000 },
  { name: 'Mar', sales: 150000 },
  { name: 'Apr', sales: 140000 },
  { name: 'May', sales: 180000 },
  { name: 'Jun', sales: 200000 },
  { name: 'Jul', sales: 190000 },
  { name: 'Aug', sales: 220000 },
  { name: 'Sep', sales: 250000 },
  { name: 'Oct', sales: 230000 },
  { name: 'Nov', sales: 270000 },
  { name: 'Dec', sales: 300000 },
];

const userRegistrationData = [
  { name: 'Jan', users: 10 },
  { name: 'Feb', users: 15 },
  { name: 'Mar', users: 25 },
  { name: 'Apr', users: 20 },
  { name: 'May', users: 30 },
  { name: 'Jun', users: 35 },
  { name: 'Jul', users: 40 },
  { name: 'Aug', users: 38 },
  { name: 'Sep', users: 45 },
  { name: 'Oct', users: 42 },
  { name: 'Nov', users: 50 },
  { name: 'Dec', users: 55 },
];

const chartConfig = {
  propertyViews: { label: "Property Views", theme: { light: "#8884d8", dark: "#8884d8" } },
  sales: { label: "Sales ($)", theme: { light: "#82ca9d", dark: "#82ca9d" } },
  userRegistrations: { label: "User Registrations", theme: { light: "#ffc658", dark: "#ffc658" } },
};

const AdminStatistics = () => {
  const formatCurrency = (value: number) => `$${value.toLocaleString()}`;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Statistics</h1>
        <p className="text-gray-500">Analytics and insights for your real estate business</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="properties">Properties</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="sales">Sales</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Property Views</CardTitle>
                <CardDescription>Total views over time</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ChartContainer config={chartConfig} className="h-[200px]">
                  <LineChart data={propertyViewsData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="views" name="propertyViews" stroke="var(--color-propertyViews)" />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Sales</CardTitle>
                <CardDescription>Total sales over time</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ChartContainer config={chartConfig} className="h-[200px]">
                  <BarChart data={salesData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
                    <Tooltip formatter={(value) => formatCurrency(Number(value))} content={<ChartTooltipContent />} />
                    <Bar dataKey="sales" name="sales" fill="var(--color-sales)" />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>User Registrations</CardTitle>
                <CardDescription>New users over time</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ChartContainer config={chartConfig} className="h-[200px]">
                  <LineChart data={userRegistrationData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="users" name="userRegistrations" stroke="var(--color-userRegistrations)" />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Properties by Type</CardTitle>
              <CardDescription>Distribution of property listings by type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={propertiesByTypeData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {propertiesByTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value} listings`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="properties" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Property Views</CardTitle>
              <CardDescription>Monthly property view statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ChartContainer config={chartConfig} className="h-full">
                  <LineChart data={propertyViewsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Line type="monotone" dataKey="views" name="propertyViews" stroke="var(--color-propertyViews)" strokeWidth={2} />
                  </LineChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Property Types</CardTitle>
              <CardDescription>Distribution of properties by type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={propertiesByTypeData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={150}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {propertiesByTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value} listings`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>User Registrations</CardTitle>
              <CardDescription>Monthly user registration statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ChartContainer config={chartConfig} className="h-full">
                  <BarChart data={userRegistrationData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="users" name="userRegistrations" fill="var(--color-userRegistrations)" />
                  </BarChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sales" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Sales Revenue</CardTitle>
              <CardDescription>Monthly sales revenue</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ChartContainer config={chartConfig} className="h-full">
                  <BarChart data={salesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
                    <Tooltip formatter={(value) => formatCurrency(Number(value))} content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="sales" name="sales" fill="var(--color-sales)" />
                  </BarChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminStatistics;
