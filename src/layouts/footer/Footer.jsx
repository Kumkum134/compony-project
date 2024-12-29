import React from 'react';

function Footer() {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-base md:text-lg lg:text-xl font-semibold mb-4">INFORMATION</h4>
            <ul className="space-y-2 text-sm md:text-base ">
              <li className="hover:text-orange-500">Home</li>
              <li className="hover:text-orange-500">About Us</li>
              <li className="hover:text-orange-500">Ingredients</li>
              <li className="hover:text-orange-500">Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-base md:text-lg lg:text-xl font-semibold mb-4">PRODUCTS</h4>
            <ul className="space-y-2 text-sm md:text-base ">
              <li className="hover:text-orange-500">Health Supplements</li>
              <li className="hover:text-orange-500">Personal Care</li>
              <li className="hover:text-orange-500">Livestock</li>
              <li className="hover:text-orange-500">Poultry</li>
              <li className="hover:text-orange-500">Aqua</li>
              <li className="hover:text-orange-500">Swine</li>
              <li className="hover:text-orange-500">Pet</li>
              <li className="hover:text-orange-500">Equine</li>
            </ul>
          </div>
          <div>
            <h4 className="text-base md:text-lg lg:text-xl font-semibold mb-4">SERVICES</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li className="hover:text-orange-500">Account / Login</li>
              <li className="hover:text-orange-500">FAQ</li>
              <li className="hover:text-orange-500">Privacy Policy</li>
              <li className="hover:text-orange-500">Return and Refund Policy</li>
              <li className="hover:text-orange-500">Terms and Conditions</li>
            </ul>
          </div>
          <div>
            <h4 className="text-base md:text-lg lg:text-xl font-semibold mb-4">GET IN TOUCH</h4>
            <ul className="space-y-2 text-sm md:text-base ">
              <li className="hover:text-orange-500">
                <i className="fa fa-phone mr-2"></i> 01296662200
              </li>
              <li className="hover:text-orange-500">
                <i className="fa fa-envelope mr-2"></i> info@aurinkohealthcare.com
              </li>
              <li className="hover:text-orange-500">
                <i className="fa fa-map-marker mr-2"></i> Address
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
