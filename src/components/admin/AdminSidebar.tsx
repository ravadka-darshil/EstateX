
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Building,
  Users,
  MessageSquare,
  Settings,
  LogOut,
  PieChart,
  Calendar,
  ArrowLeft,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface AdminSidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

const AdminSidebar = ({ isCollapsed, setIsCollapsed }: AdminSidebarProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: <Home size={20} /> },
    { name: 'Properties', path: '/admin/properties', icon: <Building size={20} /> },
    { name: 'Users', path: '/admin/users', icon: <Users size={20} /> },
    { name: 'Messages', path: '/admin/messages', icon: <MessageSquare size={20} /> },
    { name: 'Statistics', path: '/admin/statistics', icon: <PieChart size={20} /> },
    { name: 'Calendar', path: '/admin/calendar', icon: <Calendar size={20} /> },
    { name: 'Settings', path: '/admin/settings', icon: <Settings size={20} /> },
  ];

  return (
    <aside className={`bg-realestate-primary text-white border-r border-gray-700 h-screen flex flex-col transition-all ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <div className="p-4 flex items-center justify-between border-b border-gray-700">
        {!isCollapsed && (
          <Link to="/admin" className="text-xl font-bold">
            RealEstate<span className="text-realestate-secondary">Pro</span>
          </Link>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-white hover:bg-white/10 ml-auto"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <ArrowLeft size={20} className={`transition-all ${isCollapsed ? 'rotate-180' : ''}`} />
        </Button>
      </div>
      
      <ScrollArea className="flex-grow">
        <nav className="p-2">
          <div className={`space-y-1 ${isCollapsed ? 'items-center' : ''}`}>
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  isActive(item.path)
                    ? 'bg-white/20 text-white'
                    : 'text-gray-200 hover:bg-white/10'
                } ${isCollapsed ? 'justify-center' : ''}`}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                {!isCollapsed && <span>{item.name}</span>}
              </Link>
            ))}
          </div>
        </nav>
      </ScrollArea>
      
      <div className={`p-4 border-t border-gray-700 ${isCollapsed ? 'flex justify-center' : ''}`}>
        <Button 
          variant="ghost" 
          className={`text-white hover:bg-white/10 ${isCollapsed ? 'w-10 h-10 p-0' : 'w-full'}`}
          asChild
        >
          <Link to="/">
            <LogOut size={20} className={isCollapsed ? 'mx-auto' : 'mr-2'} />
            {!isCollapsed && <span>Exit Admin</span>}
          </Link>
        </Button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
