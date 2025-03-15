import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useSelectedService } from "../SelecedServiceProvider";

const NavLinks = ({ isMobile }) => {
  const [showServices, setShowServices] = useState(false);
  const [disableDropdown, setDisableDropdown] = useState(false); // New state to control dropdown
  const { setSelectedService } = useSelectedService(); 

  const navigate = useNavigate();
  const location = useLocation();

  const servicesList = [
    "Digital marketing",
    "seo",
    "Consultation",
    "Contentmarketing",
    "Strategybanding",
    "Performance Marketing",
    "Pay-Per-Click Ads",
    "Ecommerce Website Development",
  ];

  const toggleServices = () => {
    if (!disableDropdown) {
      setShowServices(!showServices);
    }
    setDisableDropdown(false); // Reset after toggling
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setShowServices(false);
  
    if (location.pathname === "/payservices") {
      navigate("/", { replace: true }); // Navigate back to home first
      setTimeout(() => {
        window.location.hash = "services";
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else if (location.pathname !== "/") {
      navigate("/"); // Navigate to home first
      setTimeout(() => {
        window.location.hash = "services";
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      window.location.hash = "services";
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  return (
    <div className={`${isMobile ? "flex flex-col space-y-4" : "flex space-x-6"}`}>
      {/* About */}
      <HashLink className="px-4 font-extrabold text-gray-500 hover:text-yellow-500" smooth to="/#about">
        About
      </HashLink>

      {/* Services */}
      {isMobile ? (
        <div>
          <button
            className="px-4 font-extrabold text-gray-500 hover:text-yellow-500 flex items-center"
            onClick={toggleServices}
          >
            Services <span className="ml-2">{showServices ? "▲" : "▼"}</span>
          </button>

          {showServices && (
            <div className="ml-8 space-y-2">
              {servicesList.map((service) => (
                <HashLink
                  key={service}
                  smooth
                  to="#services"
                  onClick={() => handleServiceClick(service)}
                  className="block text-gray-500 hover:text-yellow-500 cursor-pointer"
                >
                  {service}
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
              {servicesList.map((service) => (
                <HashLink
                  key={service}
                  smooth
                  to="#services"
                  onClick={() => handleServiceClick(service)}
                  className="block text-gray-500 hover:text-yellow-500 cursor-pointer"
                >
                  {service}
                </HashLink>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Payservices */}
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-yellow-500"
        to="/payservices#payservices"
        onClick={() => setDisableDropdown(true)} // Disable dropdown when coming from Payservices
      >
        Payservices
      </HashLink>

      {/* Contact Us */}
      <HashLink className="px-4 font-extrabold text-gray-500 hover:text-yellow-500" to="/contact#contact">
        Contact Us
      </HashLink>
    </div>
  );
};

export default NavLinks;
