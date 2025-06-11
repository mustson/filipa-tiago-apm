
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              <span className="text-gray-900">Bruno works with your</span>
              <br />
              <span className="gradient-text">dreams, not</span>
              <br />
              <span className="text-gray-900">instead of them.</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              By handling <span className="text-orange-500 font-semibold">complex logistics</span>, 
              improving <span className="text-purple-600 font-semibold">travel safety</span>, 
              and learning from <span className="text-orange-500 font-semibold">every journey</span>, 
              Bruno helps travelers focus on what they do best: 
              <span className="text-purple-600 font-semibold"> explore, discover, and create memories.</span>
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg text-gray-700">Personalized itinerary planning</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg text-gray-700">24/7 travel support</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg text-gray-700">Exclusive local experiences</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg text-gray-700">Flexible booking options</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="gradient-orange-purple noise-overlay rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">The Details</h3>
                <p className="text-white/90">Precision travel planning meets adaptive intelligence</p>
              </div>
              
              <div className="gradient-blue-purple noise-overlay rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">See it for yourself</h3>
                <p className="text-white/90">Experience the difference firsthand</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
