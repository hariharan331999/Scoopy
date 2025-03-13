import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick"; // Import React Slick
import heroImg from "../images/digimarket1.jpeg"; // Update path as per your directory structure
import heroImg1 from "../images/digitmarket2.jpeg"; 
import heroImg2 from "../images/digitmarket3.jpeg"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "../components/Navbar/NavBar";

// Sample items for the carousel
const items = [
  {
    key: "1",
    title: "Social Media Growth & Engagement",
    content:
      "Instagram Services: Followers, likes, views, and reel promotionsYouTube Services: Subscribers, likes, views, and watch hours Facebook Services: Page likes, video views, and ad promotions",
    image: heroImg, // Use hero image or provide a different image for each slide
  },
  {
    key: "2",
    title: "Paid Advertising & Promotions",
    content:
      "Targeted ad campaigns for Instagram, YouTube, and Facebook Optimized ad strategies for better reach and engagement Custom promotions to maximize ROI",
    image: heroImg1, // Replace with another image if required
  },
  {
    key: "3",
    title: "Content Marketing & Branding",
    content:
      "Engaging posts and reels for social media Custom graphics and video content Brand positioning and storytelling",
    image: heroImg2, // Replace with another image if required
  },

  {
    key: "4",
    title: "SEO & Website Optimization",
    content:
      "Keyword research and ranking strategies-page and off-page SEO optimizationWebsite audits for better visibility",
    image: heroImg2, // Replace with another image if required
  },
  {
    key: "5",
    title: "Analytics & Performance Tracking",
    content:
      "Social media insights and reports Growth tracking and improvement strategies Custom analytics for ad performance",
    image: heroImg2, // Replace with another image if required
  },
];

const Hero = () => {
  // Slick slider settings
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite loop of slides
    speed: 500, // Speed of slide transition
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Speed of autoplay
    arrows: false, // Disable arrows
  };

  return (
    <div className="hero" id="hero" style={{ marginTop: "80px",backgroundColor:'rgb(60, 57, 57)' }}> {/* Adjust margin-top here */}
      <div>
        {/* Your NavBar */}
        <NavBar />
      </div>

      <div className="m-auto overflow-hidden my-5 mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">
        <Slider {...settings}> {/* Using React Slick Slider */}
          {items.map((item) => (
            <div key={item.key} className="container-fluid">
              {/* Content and Image Section */}
              <div className="flex flex-row items-center justify-between gap-8">
                {/* Content Section */}
                <div className="content w-full md:w-1/2">
                  <h3 className="mb-5 md:text-5xl text-3xl font-bold text-white">{item.title}</h3>
                  <p className="text-lg font-medium tracking-tight mb-5 text-yellow-500">{item.content}</p>
                  <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                    <Link
                      to="/contact"
                      className="text-black bg-yellow-500 hover:bg-yellow-400 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
                    >
                      Learn more
                      <svg
                        className="w-4 h-4 ml-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Image Section */}
                <div className="heroImage w-full md:w-1/3">
                  <img
                    alt="Hero"
                    className="rounded-full float-right duration-1000 w-full"
                    src={item.image}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
