import Footer from "./Footer";
import NavBar from "./Navbar/NavBar";

const plans = [
  {
    title: "DM Launch Plan",
    price: "₹ 25,999",
    icon: "✈️",
    features: [
      "Logo",
      "Brochure",
      "Business Card",
      "Basic Website",
      "Google Maps",
      "Social Media Pages"
    ]
  },
  {
    title: "DM Growth Plan",
    price: "₹ 75,999",
    icon: "🛩️",
    features: [
      "Everything in launch plan +",
      "Standard Website",
      "SEO 3 Months",
      "SMM 3 Months",
      "Content 3X"
    ]
  },
  {
    title: "DM Domination Plan",
    price: "₹ 1,75,999",
    icon: "🚀",
    features: [
      "Everything in launch plan +",
      "Advanced Website",
      "SEO 6 Months",
      "SMM 6 Months",
      "Content 6X"
    ]
  }
];

const Payservices = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="flex flex-col lg:flex-row justify-center space-y-8 lg:space-y-0 lg:space-x-8 p-10 items-center mt-20 w-full bg-gray-400 py-4 lg:py-24">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className="bg-white rounded-2xl shadow-lg p-8 text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl w-full max-w-sm"
          >
            <h2 className="text-2xl font-bold mb-2">{plan.title}</h2>
            <p className="text-lg text-gray-600 mb-4">Starting @ {plan.price}</p>
            <div className="text-5xl mb-4">{plan.icon}</div>
            <ul className="text-left space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="text-gray-700">• {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Payservices;

