import DashboardLayout from "@/components/layout/DashboardLayout";
import React from "react";
import withAuth from "../withAuth";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="bg-gray-50">
       

        {/* Hero Section */}
        <section className="relative bg-gray-800 text-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Smarter Water Monitoring
              </h1>
              <p className="mt-4 text-lg">
                Automate your water management with real-time status updates and
                backup systems. Designed for efficiency and reliability.
              </p>
              <div className="mt-6 flex justify-center lg:justify-start gap-x-4">
                <a
                  href="#"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg font-medium"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className="bg-gray-100 hover:bg-gray-200 text-indigo-600 px-5 py-3 rounded-lg font-medium"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <img
                src="/water-monitor.jpg" // Replace with an actual image
                alt="Water Monitoring System"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
              <p className="mt-4 text-gray-600">
                Explore the features that make Shrasshine unique and reliable.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Real-Time Updates", icon: "📡" },
                { title: "Backup Power", icon: "🔋" },
                { title: "Easy Setup", icon: "⚙️" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-100 rounded-lg shadow-md text-center"
                >
                  <div className="text-4xl">{feature.icon}</div>
                  <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
                  <p className="mt-2 text-gray-600">
                    A detailed explanation of the feature.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900">What Our Users Say</h2>
            <p className="mt-4 text-gray-600">
              Hear from satisfied customers who love Shrasshine.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "John Doe", text: "This system saved us so much time!", rating: 5 },
                { name: "Jane Smith", text: "Highly recommend this to everyone.", rating: 4 },
                { name: "Samuel Green", text: "Reliable and easy to use.", rating: 5 },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-md text-left"
                >
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-gray-300"></div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">
                        {"⭐".repeat(testimonial.rating)}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700">{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-8">
          <div className="max-w-7xl mx-auto text-center">
            <p>© 2024 Shrasshine. All rights reserved.</p>
            <nav className="mt-4">
              <a href="#" className="hover:underline mx-2">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline mx-2">
                Terms of Service
              </a>
              <a href="#" className="hover:underline mx-2">
                Contact
              </a>
            </nav>
          </div>
        </footer>
      </div>
    </DashboardLayout>
  );
};

export default withAuth(Index);
