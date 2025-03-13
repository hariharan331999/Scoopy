// NavLinks Component
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaArrowDown } from "react-icons/fa";
import { useSelectedService } from "../SelecedServiceProvider";

const NavLinks = ({ isMobile }) => {
  const [showServices, setShowServices] = useState(false);
  const { setSelectedService } = useSelectedService(); // Get the setSelectedService function from context

  const toggleServices = () => {
    setShowServices(!showServices);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleServiceClick = (service) => {
    setSelectedService(service); // Update the selected service in context
    setShowServices(false); // Close the dropdown

    if (location.pathname !== '/payservices') {
      navigate('/payservices');
      setTimeout(() => {
        const element = document.getElementById('services');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById('services');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    <div
      className={`${isMobile ? "flex flex-col space-y-4" : "flex space-x-6"}`}
    >
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-yellow-500"
        smooth
        to="/#about"
      >
        About
      </HashLink>
       
      {isMobile ? (
        <div>
          <button
            className="px-4 font-extrabold text-gray-500 hover:text-yellow-500 flex items-center"
            onClick={toggleServices}
          >
            Services
            <span className="ml-2">{showServices ? "▲" : "▼"}</span>
          </button>

          {showServices && (
            <div className="ml-8 space-y-2">
              {['Digital marketing', 'seo', 'Consultation', 'Contentmarketing', 'Strategybanding', 'Performencemarketing', 'Pay-per-click-ads', 'Ecommerce-website-development'].map(service => (
                <HashLink
                  key={service}
                  smooth
                  to="#services"
                  onClick={() => handleServiceClick(service)}
                  className="block text-gray-500 hover:text-yellow-500 cursor-pointer"
                >
                  {service.replace('-', ' ')}
                </HashLink>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="relative">
          <HashLink
            smooth
            to="#services"
            onClick={toggleServices}
            className="px-4 font-extrabold text-gray-500 hover:text-yellow-500 flex items-center"
          >
            Services
          </HashLink>
          {showServices && (
            <div className="absolute rounded-lg bg-white shadow-lg p-4 w-80 border-2 border-yellow-500">
              {['Digital marketing', 'seo', 'Consultation', 'Contentmarketing', 'Strategybanding', 'Performencemarketing', 'Pay-per-click-ads', 'Ecommerce-website-development'].map(service => (
                <HashLink
                  key={service}
                  smooth
                  to="#services"
                  onClick={() => handleServiceClick(service)}
                  className="block text-gray-500 hover:text-yellow-500 cursor-pointer"
                >
                  {service.replace('-', ' ')}
                </HashLink>
              ))}
            </div>
          )}
        </div>
      )}

      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-yellow-500"
        to="/payservices#payservices"
      >
        Payservices
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-yellow-500"
        to="/contact#contact"
      >
        Contact Us
      </HashLink>
    </div>
  );
};

export default NavLinks;
