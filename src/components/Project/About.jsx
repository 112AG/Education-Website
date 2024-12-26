import React from 'react';

const About = () => {
  const features = [
    {
      title: "Software Development",
      description: "Learn modern programming languages and frameworks from industry experts. Our comprehensive curriculum covers web, mobile, and cloud development."
    },
    {
      title: "UI/UX Design",
      description: "Master the art of creating beautiful and functional user interfaces. Explore design principles, prototyping tools, and user research methods."
    },
    {
      title: "Software Engineering",
      description: "Dive deep into software architecture, system design, and best practices for building scalable applications."
    }
  ];

  const stats = [
    { number: "10K+", label: "Students Enrolled" },
    { number: "50+", label: "Expert Instructors" },
    { number: "200+", label: "Courses Available" },
    { number: "95%", label: "Success Rate" }
  ];

  const highlights = [
    "Industry-led curriculum",
    "Supportive learning community",
    "Career-focused outcomes"
  ];

  return (
    <div className="min-h-screen bg-teal-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-teal-900 mb-6">
          Empowering the Next Generation of Tech Leaders
        </h1>
        <p className="text-xl text-teal-700 max-w-3xl mx-auto">
          We provide world-class education in software development, design, and engineering. 
          Our mission is to make technology education accessible, engaging, and effective.
        </p>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center border border-teal-100 hover:border-teal-200 transition-colors">
              <div className="text-3xl font-bold text-teal-600 mb-2">{stat.number}</div>
              <div className="text-teal-700">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-teal-100 hover:border-teal-200 transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-teal-600 font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-teal-800">{feature.title}</h3>
                <p className="text-teal-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8 border border-teal-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-teal-900">Our Mission</h2>
              <p className="text-teal-700 mb-6">
                We believe in the power of education to transform lives and shape the future of technology. 
                Our platform combines expert instruction, hands-on projects, and industry-relevant curriculum 
                to prepare students for successful careers in tech.
              </p>
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-4 text-teal-700">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-teal-50 h-64 rounded-lg flex items-center justify-center">
              <img 
                src="/api/placeholder/400/320" 
                alt="Educational environment" 
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;