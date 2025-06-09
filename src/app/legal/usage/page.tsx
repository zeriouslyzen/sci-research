import React from 'react';

export default function UsagePage() {
  return (
    <div className="container mx-auto px-6 py-32 legal-doc">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Usage Agreement</h2>
        <p><strong>Last Updated:</strong> June 8, 2025</p>
        <p>By using the SCI Research System, you agree to engage with it in a manner consistent with its purpose: the responsible exploration of next-generation intelligence for the betterment of humanity.</p>
        <h3 className="text-xl font-semibold mt-8 mb-2">1. Principle of Coherent Use</h3>
        <p>This System is a tool for inquiry, discovery, and creativity. You agree to use it with a clear and coherent intent, respecting its experimental nature and its potential to generate profound or novel outputs.</p>
        <h3 className="text-xl font-semibold mt-8 mb-2">2. Prohibited Uses</h3>
        <p>You agree not to use the System for any of the following purposes:</p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li><strong>Deception or Misrepresentation:</strong> Generating content intended to impersonate individuals, spread disinformation, or create fraudulent materials.</li>
          <li><strong>Manipulation:</strong> Developing or deploying applications designed to psychologically or emotionally manipulate individuals or groups without their consent.</li>
          <li><strong>Harmful or Malicious Content:</strong> Creating or promoting hate speech, harassment, or content that incites violence.</li>
          <li><strong>Weaponization:</strong> Any use related to the development, planning, or execution of military or autonomous weapons systems is strictly forbidden.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-8 mb-2">3. Responsibility for Outputs</h3>
        <p>While we architect our systems for safety and coherence, you are ultimately responsible for how you use and interpret the outputs generated. You agree to apply critical thinking and ethical consideration to any information or symbolic content provided by the System.</p>
      </div>
    </div>
  );
} 