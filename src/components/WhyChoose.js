import React, { useState } from "react";
import "./WhyChooseUs.css";  // Import the CSS for animations

const WhyChooseUs = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    // Collapse all other cards and only expand the clicked one
    setExpandedCard((prev) => (prev === index ? null : index));
  };

  const data = [
    {
      title: "Proven Expertise",
      content:
        "Our team of digital marketing specialists brings years of experience in SEO, PPC, social media marketing, content creation, and more.",
    },
    {
      title: "Customer Satisfaction",
      content:
        "We take pride in our growing list of happy clients who have witnessed tangible results through our customized strategies.",
    },
    {
      title: "Data-Driven Approach",
      content:
        "Every marketing decision we make is backed by data, ensuring maximum ROI for our clients.",
    },
    {
      title: "Customized Strategies",
      content:
        "We create tailored marketing solutions that align with your specific goals, recognizing that every business is unique.",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Why Choose Us?</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {data.map((item, index) => (
          <div key={index} className="card">
            
            {/* Blue Heading Section (Always visible) */}
            <div className="card-header" onClick={() => toggleCard(index)}>
              <h3 className="card-title">{item.title}</h3>
              <div className="arrow">
                {expandedCard === index ? "▲" : "▼"}
              </div>
            </div>

            {/* Expandable White Box (Visible only on click) */}
            {expandedCard === index && (
              <div className="card-content">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
