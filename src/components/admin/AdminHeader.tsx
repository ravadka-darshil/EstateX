
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, User, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const AdminHeader = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="border-b bg-background z-10">
      <div className="flex h-16 items-center px-4">
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <div className="py-4">
                <div className="px-3 py-2">
                  <h2 className="text-lg font-semibold tracking-tight">
                    EstateX Admin
                  </h2>
                </div>
                <div className="space-y-1 px-3 py-2">
                  <Link
                    to="/admin"
                    className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/admin/properties"
                    className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                  >
                    Properties
                  </Link>
                  <Link
                    to="/admin/users"
                    className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                  >
                    Users
                  </Link>
                  <Link
                    to="/admin/messages"
                    className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                  >
                    Messages
                  </Link>
                  <Link
                    to="/admin/statistics"
                    className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                  >
                    Statistics
                  </Link>
                  <Link
                    to="/admin/settings"
                    className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                  >
                    Settings
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/" className="font-semibold text-lg mr-4 md:mr-6">
            Estate<span className="text-realestate-secondary">X</span>
          </Link>
        </div>

        {searchOpen ? (
          <div className="flex-1 ml-4">
            <form className="flex items-center">
              <Input
                type="search"
                placeholder="Search..."
                className="h-9 md:w-[300px] lg:w-[400px]"
                autoFocus
                onBlur={() => setSearchOpen(false)}
              />
            </form>
          </div>
        ) : (
          <Button 
            variant="ghost" 
            size="icon" 
            className="ml-4 md:ml-0" 
            onClick={() => setSearchOpen(true)}
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
        )}

        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-realestate-primary" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span className="font-medium">New Message</span>
                <span className="ml-2 text-xs text-muted-foreground">2m ago</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="font-medium">Property Listed</span>
                <span className="ml-2 text-xs text-muted-foreground">1h ago</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="font-medium">New User Registered</span>
                <span className="ml-2 text-xs text-muted-foreground">3h ago</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/admin/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/">Visit Website</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/login">Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
