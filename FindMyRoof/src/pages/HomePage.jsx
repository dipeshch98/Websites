import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import PropertyCard from '../components/PropertyCard';
import { Link } from 'react-router-dom';
import propertiesData from '../data/properties.json';

const HomePage = () => {
  const featuredProperties = propertiesData.filter(property => property.featured);
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Student",
      content: "Found the perfect apartment for my university studies. The process was quick and easy!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Professional",
      content: "Great platform for finding rental properties. Found my dream home in just a few days.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Young Family",
      content: "The search filters made it easy to find exactly what we needed. Highly recommended!",
      rating: 5
    }
  ];

  const categories = [
    { name: 'Apartment', icon: '🏢', count: 12 },
    { name: 'House', icon: '🏠', count: 10 },
    { name: 'Studio', icon: '🏘️', count: 3 },
    { name: 'Shared Room', icon: '👥', count: 5 }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes scale-in {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          .animate-fade-in {
            animation: fade-in 0.6s ease-out forwards;
          }
          
          .animate-slide-up {
            animation: slide-up 0.6s ease-out forwards;
          }
          
          .animate-scale-in {
            animation: scale-in 0.4s ease-out forwards;
          }
        `
      }} />
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
      
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-24 md:py-32 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300 rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-300 rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Decorative patterns */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">50,000+ Properties Available</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up">
                Find Your Perfect
                <span className="block mt-2 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Rental Home
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-lg md:text-xl mb-10 text-blue-100 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Discover thousands of verified rental properties across Australia. 
                Your dream home is just a search away.
              </p>

              {/* Search Bar */}
              <div className="max-w-3xl mx-auto animate-scale-in" style={{ animationDelay: '0.3s' }}>
                <div className="bg-white rounded-2xl shadow-2xl p-2">
                  <SearchBar placeholder="Search by city, suburb, or postcode..." showSuggestions={true} />
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="backdrop-blur-sm bg-white bg-opacity-10 rounded-xl p-4 border border-white border-opacity-20">
                  <div className="text-3xl font-bold text-orange-400">50K+</div>
                  <div className="text-sm text-blue-100">Properties</div>
                </div>
                <div className="backdrop-blur-sm bg-white bg-opacity-10 rounded-xl p-4 border border-white border-opacity-20">
                  <div className="text-3xl font-bold text-orange-400">200+</div>
                  <div className="text-sm text-blue-100">Cities</div>
                </div>
                <div className="backdrop-blur-sm bg-white bg-opacity-10 rounded-xl p-4 border border-white border-opacity-20">
                  <div className="text-3xl font-bold text-orange-400">100K+</div>
                  <div className="text-sm text-blue-100">Happy Tenants</div>
                </div>
                <div className="backdrop-blur-sm bg-white bg-opacity-10 rounded-xl p-4 border border-white border-opacity-20">
                  <div className="text-3xl font-bold text-orange-400">4.8★</div>
                  <div className="text-sm text-blue-100">Average Rating</div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 mt-12 text-sm text-blue-200 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>No Hidden Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Verified Listings</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom wave decoration */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white" fillOpacity="0.1"/>
            </svg>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-blue-700 mb-4">Browse by Category</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Find exactly what you're looking for with our detailed property categories</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => (
                <Link 
                  key={category.name} 
                  to={`/properties?type=${category.name}`}
                  className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-orange-200 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl mb-4 transform transition-transform duration-300 hover:scale-110">{category.icon}</div>
                  <h3 className="text-xl font-bold text-blue-700 mb-2">{category.name}</h3>
                  <p className="text-gray-600 font-medium">{category.count} Properties</p>
                  <div className="mt-3 text-sm text-orange-400 font-medium">View All →</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Properties Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
              Featured Properties
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProperties.slice(0, 8).map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                to="/properties"
                className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors"
              >
                View All Properties
              </Link>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Wide Property Selection</h3>
                <p className="text-gray-600">Access to thousands of rental properties across all major Australian cities and regional areas.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Advanced Search Filters</h3>
                <p className="text-gray-600">Find your perfect match with our comprehensive filtering system for location, price, and amenities.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Direct Communication</h3>
                <p className="text-gray-600">Connect directly with property owners and managers without any middleman or hidden fees.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Mobile Friendly</h3>
                <p className="text-gray-600">Browse and apply for properties on the go with our responsive mobile-optimized platform.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Verified Listings</h3>
                <p className="text-gray-600">All properties are verified to ensure authenticity and protect you from potential scams.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Market Insights</h3>
                <p className="text-gray-600">Get detailed information about rental trends and average prices in your desired area.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100 rounded-full filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block">
                <span className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Your Trusted Rental Partner
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the difference with Australia's most innovative rental platform
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Content Side */}
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-400 opacity-10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">
                      Making Rental Search Simple Since 2020
                    </h3>
                    <p className="text-blue-100 mb-6 leading-relaxed">
                      Aus Rental Service has been connecting tenants with their ideal homes across Australia. 
                      Our platform is designed with simplicity and efficiency in mind, making your rental search 
                      journey as smooth as possible.
                    </p>
                    <p className="text-blue-100 mb-8 leading-relaxed">
                      We understand that finding the right rental property can be challenging. That's why we've 
                      built intelligent tools and features that help you make informed decisions quickly, saving 
                      you time and reducing stress.
                    </p>

                    {/* Features List */}
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 hover:bg-opacity-20 transition-all duration-300">
                        <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">No Hidden Fees</h4>
                          <p className="text-sm text-blue-100">100% transparent pricing with zero commission charges</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 hover:bg-opacity-20 transition-all duration-300">
                        <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">24/7 Customer Support</h4>
                          <p className="text-sm text-blue-100">Always here to help you find your perfect home</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 hover:bg-opacity-20 transition-all duration-300">
                        <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">Instant Property Alerts</h4>
                          <p className="text-sm text-blue-100">Be the first to know when new properties match your criteria</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 hover:bg-opacity-20 transition-all duration-300">
                        <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">Secure Application Process</h4>
                          <p className="text-sm text-blue-100">Your personal data is protected with bank-level encryption</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Side */}
              <div className="order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-6">
                  {/* Stat Card 1 */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-600">
                    <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-xl mb-4 mx-auto">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                      </svg>
                    </div>
                    <p className="text-4xl font-bold text-gray-900 mb-2 text-center">50,000+</p>
                    <p className="text-gray-600 text-center font-medium">Properties Listed</p>
                  </div>

                  {/* Stat Card 2 */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-orange-500">
                    <div className="flex items-center justify-center w-14 h-14 bg-orange-100 rounded-xl mb-4 mx-auto">
                      <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                      </svg>
                    </div>
                    <p className="text-4xl font-bold text-gray-900 mb-2 text-center">100,000+</p>
                    <p className="text-gray-600 text-center font-medium">Happy Tenants</p>
                  </div>

                  {/* Stat Card 3 */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-green-500">
                    <div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-xl mb-4 mx-auto">
                      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <p className="text-4xl font-bold text-gray-900 mb-2 text-center">200+</p>
                    <p className="text-gray-600 text-center font-medium">Cities Covered</p>
                  </div>

                  {/* Stat Card 4 */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-yellow-500">
                    <div className="flex items-center justify-center w-14 h-14 bg-yellow-100 rounded-xl mb-4 mx-auto">
                      <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                    <p className="text-4xl font-bold text-gray-900 mb-2 text-center">4.8/5</p>
                    <p className="text-gray-600 text-center font-medium">Average Rating</p>
                  </div>
                </div>

                {/* Additional Feature Highlight */}
                <div className="mt-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Fast & Easy Process</h4>
                      <p className="text-sm text-orange-100">Find and apply for properties in under 5 minutes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Trusted by Leading Organizations</h3>
                <p className="text-gray-600">Join thousands who've found their perfect rental with us</p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-8">
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-semibold">Verified Secure</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-semibold">Licensed Platform</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                  </svg>
                  <span className="font-semibold">100K+ Users</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span className="font-semibold">4.8 Star Rating</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="About Aus Rental Service" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-blue-700 mb-6">About Us</h2>
                <p className="text-gray-600 mb-4">
                  Aus Rental Service is Australia's leading online rental marketplace, dedicated to making the rental 
                  process transparent, efficient, and user-friendly for both tenants and property owners.
                </p>
                <p className="text-gray-600 mb-4">
                  Founded by a team of real estate professionals and technology experts, we identified the need for 
                  a more streamlined rental platform that puts users first. Our mission is to revolutionize how Australians 
                  find and manage rental properties.
                </p>
                <p className="text-gray-600 mb-6">
                  We're committed to continuous innovation, regularly updating our platform with new features based on 
                  user feedback and market trends to ensure we're meeting the evolving needs of the Australian rental market.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">What Our Tenants Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map(testimonial => (
                <div 
                  key={testimonial.id} 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                >
                  <div className="mb-4">{renderStars(testimonial.rating)}</div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-blue-700">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Find Your Next Home?</h2>
            <p className="text-xl mb-8">Join thousands of satisfied tenants who found their perfect rental</p>
            <Link 
              to="/properties" 
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transform hover:scale-105 transition-transform"
            >
              Start Searching
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;