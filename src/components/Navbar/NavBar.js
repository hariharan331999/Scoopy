import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import { HashLink } from "react-router-hash-link";
import scoopy from "../../images/Scooby.jpg";

const NavBar = () => {
  const [top, setTop] = useState(!window.scrollY);
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <nav
      className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-20 ${
        !top && "bg-white shadow-lg"
      }`}
    >
      <div className="flex flex-row justify-between items-center py-1">
        <div className="flex flex-row justify-center mb-3 md:px-12 md:mx-12 items-center text-center font-semibold">
          <HashLink smooth to="/#hero">
            <img
              src={scoopy}
              alt="Hero Image"
              className="w-16 h-16 object-contain rounded-full transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </HashLink>
        </div>
        <div className="group flex flex-col items-center">
          <button
            className="p-2 rounded-lg lg:hidden text-blue-900"
            onClick={handleClick}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                />
              )}
            </svg>
          </button>

          {/* Mobile Navigation */}
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl p-8 transform transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } lg:hidden`}
          >
            <div className="flex flex-col space-y-8">
              <NavLinks isMobile={true} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6 lg:space-x-12 p-5">
            <NavLinks isMobile={false} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
