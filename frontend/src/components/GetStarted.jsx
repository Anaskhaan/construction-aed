import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, ChevronRight, Sparkles, Zap, Shield, Settings } from 'lucide-react';

const GetStarted = ({ theme = 'light', animationDuration = 0.5 }) => {
  const steps = [
    {
      id: 'account',
      title: 'Create your account',
      description: 'Set up your personal profile with a secure password and verify your email address to get started.',
      icon: <Zap size={20} />,
    },
    {
      id: 'security',
      title: 'Set up security',
      description: 'Enable two-factor authentication and set up recovery options to keep your account secure.',
      icon: <Shield size={20} />,
    },
    {
      id: 'preferences',
      title: 'Customize preferences',
      description: 'Tailor the experience to your needs by adjusting notification settings and display options.',
      icon: <Settings size={20} />,
    },
    {
      id: 'explore',
      title: 'Explore features',
      description: 'Discover all the powerful tools and features available to help you make the most of our platform.',
      icon: <Sparkles size={20} />,
    },
  ];

  const [activeTab, setActiveTab] = useState(steps[0].id);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome to Our Platform</h1>
        <p className="text-gray-600 mb-8">Follow these steps to get started with your new account.</p>
        
        <div className="rounded-xl shadow-xl bg-white p-8">
          <div className="space-y-4 mb-8">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveTab(step.id)}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-200 flex items-start gap-4 ${activeTab === step.id ? 'bg-indigo-50 border-indigo-600' : 'bg-white border-gray-200 hover:bg-gray-50'}`}
              >
                <div className={`p-2 rounded-lg ${activeTab === step.id ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-500'}`}>{step.icon}</div>
                <div>
                  <h3 className="font-medium">{step.title}</h3>
                  {activeTab === step.id && <p className="mt-2 text-sm text-gray-600">{step.description}</p>}
                </div>
                <ChevronRight size={18} className="ml-auto text-gray-400" />
              </button>
            ))}
          </div>
          
          <motion.div key={activeTab} className="h-full flex flex-col">
            <h3 className="text-xl font-semibold mb-2">{steps.find(step => step.id === activeTab)?.title}</h3>
            <p className="text-gray-600 mb-4">{steps.find(step => step.id === activeTab)?.description}</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-all duration-200 mt-auto"
            >
              Continue
              <ArrowRight size={18} className="ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
