import React from 'react';

export default function CollaboratePage() {
  return (
    <div className="min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-title inline-block">Collaborate With Us</h2>
          <p className="text-lg text-gray-300 mb-8">The frontier of intelligence requires transdisciplinary expertise. We invite partnerships with research institutions, sovereign labs, and exceptional individuals dedicated to building conscious, aligned AI.</p>
          <p className="text-gray-400 mb-10">We are seeking collaborators in quantum AI, consciousness science, formal logic, cognitive architecture, and system governance design. If your work aligns with our mission, we encourage you to connect with our research council.</p>
          <form className="w-full max-w-xl mx-auto text-left">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-400 text-sm font-mono mb-2">Full Name / Organization</label>
              <input type="text" id="name" name="name" className="w-full bg-gray-900/50 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:border-teal-400 transition-colors" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-400 text-sm font-mono mb-2">Email Address</label>
              <input type="email" id="email" name="email" className="w-full bg-gray-900/50 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:border-teal-400 transition-colors" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-400 text-sm font-mono mb-2">Message / Area of Interest</label>
              <textarea id="message" name="message" rows={5} className="w-full bg-gray-900/50 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:border-teal-400 transition-colors"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn-primary font-bold py-3 px-10 rounded-full w-full md:w-auto">Initiate Contact</button>
            </div>
            <p className="text-center mt-4 text-teal-400 h-5"></p>
          </form>
        </div>
      </div>
    </div>
  );
} 