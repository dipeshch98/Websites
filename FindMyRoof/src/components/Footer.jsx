import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">FindMyRoof</h3>
            <p className="mb-4">Your trusted partner in finding the perfect rental property across Australia.</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/properties" className="hover:text-secondary transition-colors">Properties</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="mb-2">Email: info@findmyroof.com.au</p>
            <p className="mb-2">Phone: 1300 RENTAL</p>
            <p>Address: 123 Main St, Sydney, NSW 2000</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue-700 text-center">
          <p>&copy; 2025 FindMyRoof . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
