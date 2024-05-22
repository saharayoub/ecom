import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">About Us</h1>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-8">
            <img 
              src="https://www.skincenterofsouthmiami.com/wp-content/uploads/2018/06/Skin-Center-of-South-Miami-Facials-and-Skin-Care.jpg" 
              alt="Company Image" 
              className="w-full h-64 object-cover rounded-lg mb-8"
            />
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Welcome to Luxe, your number one source for all things beauty. We're dedicated to giving you the very best of makeup and skincare products, with a focus on quality, customer service, and uniqueness.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Founded in 2024 by Sahar Ayoub, Luxe has come a long way from its beginnings in a small home office. When Sahar first started out, her passion for eco-friendly and cruelty-free cosmetics drove her to do tons of research so that Luxe can offer you the world's most advanced beauty products. We now serve customers all over the world and are thrilled that we're able to turn our passion into our own website.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Sincerely,
              <br />
              <span className="font-bold">Sahar Ayoub, Founder</span>
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img src="https://e7.pngegg.com/pngimages/11/946/png-clipart-quality-control-computer-icons-quality-assurance-quality-miscellaneous-service.png" alt="Quality" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">We strive to provide the highest quality products to our customers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img src="https://e7.pngegg.com/pngimages/762/226/png-clipart-customer-service-call-centre-technical-support-help-desk-business-angle-microphone.png" alt="Customer Service" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer Service</h3>
              <p className="text-gray-600">Our team is dedicated to ensuring the best experience for our customers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img src="https://static.thenounproject.com/png/4847153-200.png" alt="Uniqueness" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Uniqueness</h3>
              <p className="text-gray-600">We offer unique products that stand out in the market.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
