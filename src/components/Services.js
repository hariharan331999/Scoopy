import React from "react";
import img from "../images/web.svg";
import img2 from "../images/app.svg";
import img3 from "../images/hosting.svg";
import img4 from "../images/consultation.svg";
import { useSelectedService } from "./SelecedServiceProvider";

const Services = () => {
  const { selectedService } = useSelectedService(); // Get the selectedService from context

  let serviceContent = null;

  if (selectedService === "Digital marketing") {
    serviceContent = (
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-yellow-400 hover:text-grey rounded-lg shadow-2xl p-3 group">
          <div className="m-2 text-justify text-sm">
            <img
              alt="card img"
              className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
              src={img}
            />
            <h2 className="font-semibold my-4 text-xl lg:text-1xl text-center">
              Why Digital Marketing Matters?
            </h2>
            <p className="text-md font-bold">
              Increase Brand Awareness: Get noticed by the right audience. Boost
              Engagement: More likes, comments, and shares. Drive Traffic &
              Sales: Turn visitors into loyal customers.
            </p>
          </div>
        </div>

        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-yellow-400 hover:text-grey rounded-lg shadow-2xl p-3 group">
          <div className="m-2 text-justify text-sm">
            <img
              alt="card img"
              className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
              src={img2}
            />
            <h2 className="font-semibold my-4 text-2xl text-center">
              Blog Section – Stay Updated with Digital Trends
            </h2>
            <ul className="text-md font-medium list-none p-0">
              <li className="font-bold">How to Grow Your Instagram in 2025</li>
              <li className="font-bold">
                The Importance of Watch Hours on YouTube
              </li>
              <li className="font-bold">
                Facebook Marketing Hacks for Small Businesses
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-yellow-400 hover:text-grey rounded-lg shadow-2xl p-3 group">
          <div className="m-2 text-justify text-sm">
            <img
              alt="card img"
              className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
              src={img3}
            />
            <h2 className="font-semibold my-4 text-2xl text-center ">
              Service Differentiation
            </h2>

            <ul className="text-md font-medium list-none p-0">
              <li className="font-bold">
                Highlight unique selling points (e.g., organic growth, no bots,
                fast delivery, affordable pricing).
              </li>
              <li className="font-bold">
                Offer customized marketing packages based on customer needs.
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-yellow-400 hover:text-grey rounded-lg shadow-2xl p-3 group">
          <div className="m-2 text-justify text-sm">
            <img
              alt="card img"
              className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
              src={img4}
            />
            <h2 className="font-semibold my-4 text-2xl text-center ">
              Trust & Credibility
            </h2>

            <ul className="text-md font-medium list-none p-0">
              <li className="font-bold">
                Display client testimonials or case studies.
              </li>
              <li className="font-bold">
                Showcase verified results with screenshots or analytics. Add a
                money-back guarantee or a trial offer to build trust.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else if (selectedService === "seo") {
    serviceContent = (
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-yellow-400 hover:text-grey rounded-lg shadow-2xl p-3 group">
          <div className="m-2 text-justify text-sm">
            <img
              alt="SEO audit image"
              className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
              src={img} // Replace with an SEO-related image, e.g., audit report
            />
            <h2 className="font-semibold my-4 text-xl lg:text-1xl text-center">
              SEO Audit & Analysis
            </h2>
            <p className="text-md font-bold">
              Conduct comprehensive SEO audits to identify site issues and
              opportunities. We provide detailed insights to enhance your search
              engine rankings.
            </p>
          </div>
        </div>

        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-yellow-400 hover:text-grey rounded-lg shadow-2xl p-3 group">
          <div className="m-2 text-justify text-sm">
            <img
              alt="SEO Content Strategy"
              className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
              src={img2} // Replace with an image related to SEO content (e.g., content writing)
            />
            <h2 className="font-semibold my-4 text-2xl text-center">
              SEO Content Strategy
            </h2>
            <ul className="text-md font-medium list-none p-0">
              <li className="font-bold">
                Optimize your content for targeted keywords.
              </li>
              <li className="font-bold">
                Create high-quality content to boost search rankings.
              </li>
              <li className="font-bold">
                Focus on user intent and relevance to drive traffic.
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-yellow-400 hover:text-grey rounded-lg shadow-2xl p-3 group">
          <div className="m-2 text-justify text-sm">
            <img
              alt="On-page SEO"
              className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
              src={img3} // Replace with an on-page SEO-related image (e.g., website optimization)
            />
            <h2 className="font-semibold my-4 text-2xl text-center">
              On-Page SEO Optimization
            </h2>
            <ul className="text-md font-medium list-none p-0">
              <li className="font-bold">
                Optimize meta titles, descriptions, and header tags.
              </li>
              <li className="font-bold">
                Improve internal linking and website structure.
              </li>
              <li className="font-bold">
                Enhance user experience and site speed.
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-yellow-400 hover:text-grey rounded-lg shadow-2xl p-3 group">
          <div className="m-2 text-justify text-sm">
            <img
              alt="Link Building"
              className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
              src={img4} // Replace with a link building or backlinks-related image
            />
            <h2 className="font-semibold my-4 text-2xl text-center">
              Link Building & Backlinks
            </h2>
            <ul className="text-md font-medium list-none p-0">
              <li className="font-bold">
                Gain high-quality backlinks from authoritative websites to
                improve domain authority.
              </li>
              <li className="font-bold">
                Focus on ethical link-building strategies that provide lasting
                results.
              </li>
              <li className="font-bold">
                Engage in guest blogging and partnerships to build backlinks.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else if (selectedService === "Consultation") {
    serviceContent = (
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* SEO Consultation */}
        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-yellow-400 hover:text-grey rounded-lg shadow-2xl p-3 group">
          <div className="m-2 text-justify text-sm">
            <img
              alt="SEO Consultation Image"
              className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
              src={img} // Replace with an SEO-related consultation image (e.g., team meeting or strategy session)
            />
            <h2 className="font-semibold my-4 text-xl lg:text-1xl text-center">
              SEO Consultation Services
            </h2>
            <p className="text-md font-bold">
              Work with our experts to understand how SEO can benefit your
              business. We offer personalized consultation to develop tailored
              SEO strategies that align with your goals.
            </p>
          </div>
        </div>

        {/* Strategy Development Consultation */}
        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-yellow-400 hover:text-grey rounded-lg shadow-2xl p-3 group">
          <div className="m-2 text-justify text-sm">
            <img
              alt="Strategy Development Consultation"
              className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
              src={img2} // Replace with an image of strategy development, such as a brainstorming session
            />
            <h2 className="font-semibold my-4 text-2xl text-center">
              Strategy Development Consultation
            </h2>
            <ul className="text-md font-medium list-none p-0">
              <li className="font-bold">
                We help you build a customized digital marketing strategy.
              </li>
              <li className="font-bold">
                Tailor strategies for improving online visibility and lead
                generation.
              </li>
              <li className="font-bold">
                Align business objectives with marketing goals for effective
                results.
              </li>
            </ul>
          </div>
        </div>

        {/* Market Research Consultation */}
        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-yellow-400 hover:text-grey rounded-lg shadow-2xl p-3 group">
          <div className="m-2 text-justify text-sm">
            <img
              alt="Market Research Consultation"
              className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
              src={img3} // Replace with an image of market research (e.g., analyzing data or reports)
            />
            <h2 className="font-semibold my-4 text-2xl text-center">
              Market Research Consultation
            </h2>
            <ul className="text-md font-medium list-none p-0">
              <li className="font-bold">
                Understand market trends and consumer behavior with data-driven
                insights.
              </li>
              <li className="font-bold">
                Leverage research to identify new business opportunities and
                growth areas.
              </li>
              <li className="font-bold">
                Refine product offerings and improve customer engagement.
              </li>
            </ul>
          </div>
        </div>

        {/* Digital Transformation Consultation */}
        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-yellow-400 hover:text-grey rounded-lg shadow-2xl p-3 group">
          <div className="m-2 text-justify text-sm">
            <img
              alt="Digital Transformation Consultation"
              className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
              src={img4} // Replace with an image of digital transformation (e.g., people working on technology solutions)
            />
            <h2 className="font-semibold my-4 text-2xl text-center">
              Digital Transformation Consultation
            </h2>
            <ul className="text-md font-medium list-none p-0">
              <li className="font-bold">
                Guide your business through digital innovation and optimization.
              </li>
              <li className="font-bold">
                Implement new technologies to streamline operations and boost
                efficiency.
              </li>
              <li className="font-bold">
                Focus on improving digital customer experiences for growth and
                retention.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else if (selectedService === "Contentmarketing") {
    serviceContent = (
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {/* Content Creation */}
      <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-yellow-400 hover:text-grey rounded-lg shadow-2xl p-3 group">
        <div className="m-2 text-justify text-sm">
          <img
            alt="Content Creation Image"
            className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
            src={img} // Replace with an image related to content creation (e.g., writing or video production)
          />
          <h2 className="font-semibold my-4 text-xl lg:text-1xl text-center">
            Content Creation
          </h2>
          <p className="text-md font-bold">
            We produce high-quality content tailored to your brand's voice. Whether it's blogs, videos, or infographics, our content helps engage and educate your audience.
          </p>
        </div>
      </div>
    
      {/* Content Distribution */}
      <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-yellow-400 hover:text-grey rounded-lg shadow-2xl p-3 group">
        <div className="m-2 text-justify text-sm">
          <img
            alt="Content Distribution"
            className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
            src={img2} // Replace with an image related to content distribution (e.g., social media sharing or email marketing)
          />
          <h2 className="font-semibold my-4 text-2xl text-center">
            Content Distribution
          </h2>
          <ul className="text-md font-medium list-none p-0">
            <li className="font-bold">Distribute your content across multiple channels to reach a larger audience.</li>
            <li className="font-bold">Leverage social media, blogs, newsletters, and more for maximum reach.</li>
            <li className="font-bold">Ensure your content reaches the right people at the right time for better engagement.</li>
          </ul>
        </div>
      </div>
    
      {/* Audience Engagement */}
      <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-yellow-400 hover:text-grey rounded-lg shadow-2xl p-3 group">
        <div className="m-2 text-justify text-sm">
          <img
            alt="Audience Engagement"
            className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
            src={img3} // Replace with an image related to audience engagement (e.g., community interaction or comments)
          />
          <h2 className="font-semibold my-4 text-2xl text-center">
            Audience Engagement
          </h2>
          <ul className="text-md font-medium list-none p-0">
            <li className="font-bold">Boost engagement with compelling calls-to-action and interactive content.</li>
            <li className="font-bold">Foster meaningful conversations and build brand loyalty.</li>
            <li className="font-bold">Track analytics to measure audience interaction and adjust strategies.</li>
          </ul>
        </div>
      </div>
    
      {/* Content Strategy */}
      <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-yellow-400 hover:text-grey rounded-lg shadow-2xl p-3 group">
        <div className="m-2 text-justify text-sm">
          <img
            alt="Content Strategy"
            className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
            src={img4} // Replace with an image related to content strategy (e.g., planning or mapping out content)
          />
          <h2 className="font-semibold my-4 text-2xl text-center">
            Content Strategy
          </h2>
          <ul className="text-md font-medium list-none p-0">
            <li className="font-bold">Develop a content strategy that aligns with your business objectives and target audience.</li>
            <li className="font-bold">Create a content calendar to ensure consistent and relevant content delivery.</li>
            <li className="font-bold">Optimize your content for SEO to increase organic traffic and visibility.</li>
          </ul>
        </div>
      </div>
    </div>
    
    );
  } else if (selectedService === "Strategybanding") {
    serviceContent = (
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {/* Brand Development */}
      <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-yellow-400 hover:text-grey rounded-lg shadow-2xl p-3 group">
        <div className="m-2 text-justify text-sm">
          <img
            alt="Brand Development Image"
            className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
            src={img} // Replace with an image related to brand development (e.g., logo design, market research)
          />
          <h2 className="font-semibold my-4 text-xl lg:text-1xl text-center">
            Brand Development
          </h2>
          <p className="text-md font-bold">
            We help businesses define their core values, mission, and vision. Our brand development services include everything from logo design to strategic market positioning to create a memorable brand identity.
          </p>
        </div>
      </div>
    
      {/* Brand Positioning */}
      <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-yellow-400 hover:text-grey rounded-lg shadow-2xl p-3 group">
        <div className="m-2 text-justify text-sm">
          <img
            alt="Brand Positioning"
            className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
            src={img2} // Replace with an image related to brand positioning (e.g., market segmentation, customer analysis)
          />
          <h2 className="font-semibold my-4 text-2xl text-center">
            Brand Positioning
          </h2>
          <ul className="text-md font-medium list-none p-0">
            <li className="font-bold">Position your brand effectively in the market to stand out from the competition.</li>
            <li className="font-bold">Define your unique selling proposition (USP) to attract your ideal customer base.</li>
            <li className="font-bold">Ensure your brand communicates value through every touchpoint.</li>
          </ul>
        </div>
      </div>
    
      {/* Brand Identity */}
      <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-yellow-400 hover:text-grey rounded-lg shadow-2xl p-3 group">
        <div className="m-2 text-justify text-sm">
          <img
            alt="Brand Identity"
            className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
            src={img3} // Replace with an image related to brand identity (e.g., logos, color schemes, typography)
          />
          <h2 className="font-semibold my-4 text-2xl text-center">
            Brand Identity
          </h2>
          <ul className="text-md font-medium list-none p-0">
            <li className="font-bold">Create a cohesive and recognizable visual identity that resonates with your audience.</li>
            <li className="font-bold">Develop a consistent tone of voice across all communication channels.</li>
            <li className="font-bold">Ensure your brand identity reflects your values and mission.</li>
          </ul>
        </div>
      </div>
    
      {/* Brand Awareness */}
      <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-yellow-400 hover:text-grey rounded-lg shadow-2xl p-3 group">
        <div className="m-2 text-justify text-sm">
          <img
            alt="Brand Awareness"
            className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
            src={img4} // Replace with an image related to brand awareness (e.g., advertising, social media marketing)
          />
          <h2 className="font-semibold my-4 text-2xl text-center">
            Brand Awareness
          </h2>
          <ul className="text-md font-medium list-none p-0">
            <li className="font-bold">Increase your brand's visibility across digital and traditional channels.</li>
            <li className="font-bold">Leverage social media, influencer partnerships, and content marketing for greater reach.</li>
            <li className="font-bold">Measure brand awareness with analytics to refine strategies and drive results.</li>
          </ul>
        </div>
      </div>
    </div>
    
    );
  }else if(selectedService === "Performencemarketing") {
    serviceContent = (
      <div>
        <h3>Performence Marketing</h3>
      </div>
    );
  }

  return (
    <div
      id="services"
      className="bg-gray-100 py-12"
      style={{ backgroundColor: "rgb(60, 57, 57)" }}
    >
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-yellow-500 uppercase font-bold">
            services
          </h2>

          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-yellow-500"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-white">
            We are deeply committed to the growth and success of our clients.
          </h2>
        </div>

        <div
          className="px-12 font-poppins"
          data-aos="fade-down"
          data-aos-delay="600"
        >
          {serviceContent}
        </div>
      </section>

      <section>
        <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6 font-poppins">
          <div
            className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
            data-aos="zoom-out"
          >
            {/* Digital Marketing Strategy Section */}
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center bg-yellow-400 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:rotate-3">
              <div className="text-white mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="72"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path>
                  <path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path>
                </svg>
              </div>
              <h3 className="text-2xl text-white font-bold">
                SEO & <span className="font-black">Website Optimization</span>
              </h3>
              <div>
                <p className="my-3 text-lg text-black-500 font-medium">
                  Implement SEO-friendly content for better ranking. Optimize
                  for mobile users and fast loading speeds. Include a blog
                  section to drive organic traffic.
                </p>
              </div>
            </div>

            {/* Social Media Management Section */}
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center bg-yellow-400 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:rotate-3">
              <div className="text-white mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="72"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path>
                </svg>
              </div>
              <h3 className="text-2xl text-white font-bold">
                Social Media Marketing{" "}
                <span className="font-black">Marketing</span> (SMM) Budget
              </h3>
              <div>
                <p className="my-3 text-lg text-black-500 font-medium">
                  Instagram Growth (Followers, Likes, Views, Promotions): ₹2,000
                  - ₹50,000/month YouTube Growth (Subscribers, Views, Watch
                  Hours, Ads): ₹5,000 - ₹1,00,000/month Facebook Page Promotions
                  & Ads: ₹2,000 - ₹50,000/month Complete Social Media
                  Management: ₹10,000 - ₹1,50,000/month
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
