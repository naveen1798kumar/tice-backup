import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileSidebar from "../components/MobileSidebar"

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}/>
      <main className="flex-grow overflow-hidden">{children}</main>
      <Footer />
      <MobileSidebar
        isSidebarOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </div>
  );
};

export default Layout;
