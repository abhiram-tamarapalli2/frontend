import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, FileText, Award } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Brain },
    { path: '/assistant', label: 'AI Assistant', icon: FileText },
    { path: '/about', label: 'About', icon: Award },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Bajaj Finserv AI</h1>
              <p className="text-xs text-gray-600">Document Intelligence</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`px-4 py-2 rounded-xl transition-all duration-300 flex items-center space-x-2 ${
                  location.pathname === path
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-white/20 hover:text-blue-600'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;