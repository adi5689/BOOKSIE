import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-auto">
            <p className="text-sm">&copy; {new Date().getFullYear()} Booksie. All rights reserved.</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center mt-4 sm:mt-0">
            <a href="/privacy-policy" className="text-sm text-gray-400 hover:text-white mr-4">Privacy Policy</a>
            <a href="/terms-of-service" className="text-sm text-gray-400 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
