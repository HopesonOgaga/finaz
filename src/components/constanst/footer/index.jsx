import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Pursue Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Pursue</h3>
            <ul className="space-y-3">
              <li>
                <a href="#contact" className="hover:text-gray-400 transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="#careers" className="hover:text-gray-400 transition-colors">Career</a>
              </li>
              <li>
                <a href="#quest" className="hover:text-gray-400 transition-colors">Quest</a>
              </li>
              <li>
                <a href="#sitemap" className="hover:text-gray-400 transition-colors">Site Map</a>
              </li>
            </ul>
          </div>

          {/* Service Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Service</h3>
            <ul className="space-y-3">
              <li>
                <a href="#help" className="hover:text-gray-400 transition-colors">Help</a>
              </li>
              <li>
                <a href="#advertising" className="hover:text-gray-400 transition-colors">Advertising</a>
              </li>
            </ul>
          </div>

          {/* Information Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Information</h3>
            <ul className="space-y-3">
              <li>
                <a href="#contact" className="hover:text-gray-400 transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="#imprint" className="hover:text-gray-400 transition-colors">Imprint</a>
              </li>
              <li>
                <a href="#data-protection" className="hover:text-gray-400 transition-colors">Data Protection</a>
              </li>
              <li>
                <a href="#disclaimer" className="hover:text-gray-400 transition-colors">Disclaimer</a>
              </li>
              <li>
                <a href="#terms" className="hover:text-gray-400 transition-colors">Terms of Use</a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-gray-400 transition-colors">Privacy</a>
              </li>
              <li>
                <a href="#revocation" className="hover:text-gray-400 transition-colors">Revocation Tracking</a>
              </li>
            </ul>
          </div>

          {/* Social Media / Follow Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#facebook" className="text-gray-300 hover:text-white transition-colors">
                <img  src="" alt=""></img>
              </a>
              <a href="#twitter" className="text-gray-300 hover:text-white transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#linkedin" className="text-gray-300 hover:text-white transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#instagram" className="text-gray-300 hover:text-white transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Apps Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Apps</h3>
            <ul className="space-y-3">
              <li>
                <a href="#finanzen-app" className="hover:text-gray-400 transition-colors">Finanzen.net App</a>
              </li>
              <li>
                <a href="#currency-converter" className="hover:text-gray-400 transition-colors">Currency Converter</a>
              </li>
              <li>
                <a href="#broker" className="hover:text-gray-400 transition-colors">Broker</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pursue. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
