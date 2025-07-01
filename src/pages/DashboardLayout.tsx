
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const DashboardLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar isCollapsed={sidebarCollapsed} onToggle={toggleSidebar} />
      <Header sidebarCollapsed={sidebarCollapsed} />
      
      <main className={`transition-all duration-300 pt-16 pb-12 ${
        sidebarCollapsed ? 'ml-16' : 'ml-64'
      }`}>
        <div className="container mx-auto px-6 py-6">
          <Outlet />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DashboardLayout;
