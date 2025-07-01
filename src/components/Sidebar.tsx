
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  FileText, 
  Calendar, 
  User, 
  MessageSquare, 
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const Sidebar = ({ isCollapsed, onToggle }: SidebarProps) => {
  const location = useLocation();
  
  const menuItems = [
    { icon: Home, label: 'Tổng quan', path: '/dashboard' },
    { icon: FileText, label: 'Tài liệu', path: '/dashboard/documents' },
    { icon: Calendar, label: 'Lịch cá nhân', path: '/dashboard/calendar' },
    { icon: User, label: 'Hồ sơ', path: '/dashboard/profile' },
    { icon: MessageSquare, label: 'Góp ý / Yêu cầu', path: '/dashboard/feedback' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className={`fixed left-0 top-0 h-full bg-sidebar border-r border-sidebar-border transition-all duration-300 z-20 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-vsm-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">VSM</span>
            </div>
            <span className="font-semibold text-sidebar-foreground">VSM CMS</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className="p-2 hover:bg-sidebar-accent"
        >
          {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
              isActive(item.path)
                ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
            }`}
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {!isCollapsed && <span className="font-medium">{item.label}</span>}
          </Link>
        ))}
        
        {/* Logout */}
        <button
          onClick={() => {
            // Handle logout logic here
            console.log('Logout clicked');
          }}
          className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-destructive hover:bg-destructive/10 transition-colors duration-200"
        >
          <LogOut className="h-5 w-5 flex-shrink-0" />
          {!isCollapsed && <span className="font-medium">Đăng xuất</span>}
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
