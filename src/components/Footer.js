import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import scoopy from "../images/Scooby.jpg";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">
          {/* Top area: Blocks */}
          <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">
            {/* 1st block */}
            <div className="col-span-12 lg:col-span-4">
              <div className="box-border border-b-4 border-yellow-500 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto flex flex-col items-center">
                <HashLink smooth to="/#hero">
                  <img
                    src={scoopy}
                    alt="Hero Image"
                    className="w-20 h-20 mb-3 object-contain rounded-full transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </HashLink>
                <div className="text-md font-medium text-gray-600">
                  <h5>Scoopy</h5>
                  <p>pvt limit</p>
                  <p>Coimbatore</p>
                </div>
              </div>
            </div>

            {/* 2nd block */}
            <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
              <h6 className="text-black hover:text-white text-xl font-bold mb-4">
                LINKS
              </h6>
              <ul className="text-md">
                <li className="mb-2">
                  <HashLink
                    to="#"
                    className="text-black hover:text-white hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    About
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="#"
                    className="text-black hover:text-white hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Services
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="#"
                    className="text-black hover:text-white hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Contact
                  </HashLink>
                </li>
              </ul>
            </div>

            {/* 3rd block */}
            <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
              <h6 className="text-black hover:text-white text-xl font-bold mb-4">
                OUR SERVICES
              </h6>
              <ul className="text-md">
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-black hover:text-white hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Web Development
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-black hover:text-white hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Mobile App Development
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-black hover:text-white hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Domain and Hosting
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-black hover:text-white hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    General IT Consultations
                  </Link>
                </li>
              </ul>
            </div>

            {/* 4th block */}
            <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-900">
              <div className="text-xl text-black hover:text-white mb-6">
                Social Media Links.
              </div>

              <div className="text-md text-black hover:text-white font-medium mb-6">
                Follow us on social media.
              </div>
              <div className="mx-auto text-center mt-2">
                <ul className="flex justify-center mb-4 md:mb-0 space-x-6">
                  <li>
                    <a
                      href="https://www.facebook.com/share/1A3AUrR1DC/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center text-yellow-500 hover:text-gray-500 bg-white hover:bg-gray-100 rounded-full shadow transition duration-150 ease-in-out w-12 h-12" /* Reduced container size */
                      aria-label="Facebook"
                    >
                      <svg
                        className="w-6 h-6 fill-current" /* Reduced icon size */
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                      </svg>
                    </a>
                  </li>

                  {/* Instagram */}
                  <li>
                    <a
                      href="https://www.instagram.com/scoopydigital/?fbclid=IwZXh0bgNhZW0CMTEAAR07qPSGgBolTMBd60xvL0qXsIqcBwcP4Docnjpm9sccvt5D2obgaISxHIg_aem_v9XDXJk8xBoWIx2m487M3Q"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center text-yellow-500 hover:text-gray-500 bg-white hover:bg-gray-100 rounded-full shadow transition duration-150 ease-in-out w-12 h-12" /* Reduced container size */
                      aria-label="Instagram"
                    >
                      <svg
                        className="w-6 h-6 fill-current" /* Reduced icon size */
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16 10.4c-3.1 0-5.6 2.5-5.6 5.6s2.5 5.6 5.6 5.6 5.6-2.5 5.6-5.6-2.5-5.6-5.6-5.6zm0 9.2c-2 0-3.6-1.6-3.6-3.6S14 12.4 16 12.4s3.6 1.6 3.6 3.6-1.6 3.6-3.6 3.6z" />
                        <circle cx="24.4" cy="7.6" r="1.2" />
                        <path d="M25.6 3H6.4C4.5 3 3 4.5 3 6.4v19.2C3 27.5 4.5 29 6.4 29h19.2c1.9 0 3.4-1.5 3.4-3.4V6.4C29 4.5 27.5 3 25.6 3zM16 22.8c-4.1 0-7.6-3.4-7.6-7.6S11.9 7.6 16 7.6 23.6 11 23.6 15s-3.5 7.6-7.6 7.6zm9.6-13.6c0 .7-.5 1.2-1.2 1.2S23.2 9.9 23.2 9.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2z" />
                      </svg>
                    </a>
                  </li>

                  {/* LinkedIn */}
                  <li>
                    <a
                      href="https://www.linkedin.com/company/scoopy-digital-markeing-company/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center text-yellow-500 hover:text-gray-500 bg-white hover:bg-gray-100 rounded-full shadow transition duration-150 ease-in-out w-12 h-12" /* Reduced container size */
                      aria-label="LinkedIn"
                    >
                      <svg
                        className="w-6 h-6 fill-current" /* Reduced icon size */
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M27 4H5C3.3 4 2 5.3 2 7v18c0 1.7 1.3 3 3 3h22c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3zM11 24H7V13h4v11zm-2-12.7c-1.3 0-2.3-1-2.3-2.3S7.7 7 9 7s2.3 1 2.3 2.3-1 2.3-2.3 2.3zm15 12.7h-4v-5.6c0-1.3 0-3-1.8-3-1.8 0-2.1 1.4-2.1 2.9v5.7h-4V13h4v1.5h.1c.6-1.1 2-2.3 4.1-2.3 4.4 0 5.2 2.9 5.2 6.6v5.2z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
              <div className="text-sm text-gray-200 font-semibold py-1">
                Copyright &copy; {new Date().getFullYear()}
                {"  "}
                <HashLink to="#" className=" hover:text-gray-900">
                  Scoopy
                </HashLink>
                . All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
