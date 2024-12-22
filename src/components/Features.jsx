import React from "react";

const features = [
  {
    id: 1,
    icon: "👑",
    title: "Educational games",
    link: "/educational-games",
  },
  {
    id: 2,
    icon: "🎈",
    title: "Fun outdoor activities",
    link: "/outdoor-activities",
  },
  {
    id: 3,
    icon: "⏰",
    title: "Last minute babysitter service",
    link: "/babysitter-service",
  },
  {
    id: 4,
    icon: "🎨",
    title: "Drawing, coloring, and painting",
    link: "/drawing-coloring",
  },
  {
    id: 5,
    icon: "🔔",
    title: "Online booking",
    link: "/online-booking",
  },
];

const Features = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {features.map((feature) => (
          <a
            key={feature.id}
            href={feature.link}
            className="flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-md p-4 hover:bg-gray-200 transition"
          >
            <div
              className="text-4xl mb-3"
              aria-label={feature.title}
              role="img"
            >
              {feature.icon}
            </div>
            <p className="text-center text-sm font-medium text-gray-700">
              {feature.title}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Features;
