import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      title: "Email Us",
      info: "contact@yourbusiness.com",
      description: "We'll respond within 24 hours"
    },
    {
      title: "Call Us",
      info: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      title: "Visit Us",
      info: "123 Business Street, Suite 100",
      description: "New York, NY 10001"
    }
  ];

  return (
    <div className="min-h-screen bg-teal-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-teal-900 mb-6">
          Get in Touch
        </h1>
        <p className="text-xl text-teal-700 max-w-3xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8 border border-teal-100">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((item, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-teal-50">
                <h3 className="font-semibold text-teal-900 text-lg mb-2">{item.title}</h3>
                <p className="text-teal-800 font-medium mb-1">{item.info}</p>
                <p className="text-teal-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-teal-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-teal-200 rounded-lg focus:outline-none focus:border-teal-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-teal-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-teal-200 rounded-lg focus:outline-none focus:border-teal-500"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-teal-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-teal-200 rounded-lg focus:outline-none focus:border-teal-500"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-teal-700 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-2 border border-teal-200 rounded-lg focus:outline-none focus:border-teal-500"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Map or Additional Info Section */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-8 border border-teal-100">
          <h2 className="text-2xl font-bold text-teal-900 mb-6 text-center">
            Other Ways to Connect
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="font-semibold text-teal-800 mb-3">Business Hours</h3>
              <ul className="space-y-2 text-teal-700">
                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 10:00 AM - 4:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="font-semibold text-teal-800 mb-3">Follow Us</h3>
              <p className="text-teal-700 mb-4">
                Stay updated with our latest news and updates on social media.
              </p>
              <div className="space-y-2 text-teal-700">
                <p>LinkedIn: /your-business</p>
                <p>Twitter: @yourbusiness</p>
                <p>Facebook: /yourbusiness</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;