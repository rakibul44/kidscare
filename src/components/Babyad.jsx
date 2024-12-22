import React from 'react';
import { Link } from 'react-router-dom';

const Babyad = () => {
  const ads = [
    {
      id: 1,
      text: "Find a babysitter for your kids during the holidays so you can shop, attend parties and wrap presents!",
      buttonText: "BOOK A SITTER",
      buttonLink: "/book-sitter",
    },
  ];

  return (
    <div className="bg-green-500 flex flex-col md:flex-row justify-between items-center px-6 py-8 md:px-12 md:py-16">
      {ads.map((ad) => (
        <div key={ad.id} className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
          {/* Text Section */}
          <div className="text-white font-semibold text-lg md:text-xl lg:text-2xl text-center md:text-left">
            {ad.text.split(", ").map((line, index) => (
              <span key={index}>
                {line}
                {index !== ad.text.split(", ").length - 1 && <br />}
              </span>
            ))}
          </div>
          {/* Button Section */}
          <Link to={ad.buttonLink}>
            <button className="bg-white text-green-700 font-bold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all border-[3px] border-green-600 hover:bg-green-100">
              {ad.buttonText}
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Babyad;
