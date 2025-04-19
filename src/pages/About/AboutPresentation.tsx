import React from "react";

interface AboutPresentationProps {
  churchInfo: {
    title: string;
    description: string;
  };
  vision: {
    title: string;
    description: string;
  };
  history: {
    title: string;
    events: {
      year: string;
      description: string;
    }[];
  };
  pastor: {
    name: string;
    education: string;
    experience: string;
  };
}

const AboutPresentation: React.FC<AboutPresentationProps> = ({
  churchInfo,
  vision,
  history,
  pastor,
}) => {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">
          {churchInfo.title}
        </h1>
        <p className="text-gray-600 text-lg">{churchInfo.description}</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            {vision.title}
          </h2>
          <p className="text-gray-600">{vision.description}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            {history.title}
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {history.events.map((event, index) => (
              <li key={index}>
                {event.year}: {event.description}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">담임 목사</h2>
        <div className="flex items-center space-x-4">
          <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              {pastor.name}
            </h3>
            <p className="text-gray-600">{pastor.education}</p>
            <p className="text-gray-600">{pastor.experience}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPresentation;
