import React from 'react';
import { FileText, Target, Zap, ChevronDown, Crown, Sparkles } from 'lucide-react';
import type { Package } from '../App';

interface PackageSelectorProps {
  semester: string;
  branch: string;
  onPurchase: (pkg: Package) => void;
}

const PackageSelector: React.FC<PackageSelectorProps> = ({
  semester,
  branch,
  onPurchase
}) => {
  const packages: Package[] = [
    {
      id: 'complete-paper',
      name: 'Complete Guess Paper',
      price: 299,
      description: 'Complete examination guess paper with all sections',
      features: [
        '📄 Complete guess paper',
        '✅ All sections included',
        '📝 Detailed solutions',
        '📊 Marking scheme',
        '🎯 Current year pattern'
      ]
    },
    {
      id: 'important-questions',
      name: 'Important Guess Questions Pack',
      price: 50,
      description: '3 most important guess questions for exam preparation',
      features: [
        '🎯 3 important guess questions',
        '⭐ High exam probability',
        '📖 Complete answers',
        '📚 Topic-wise sorted',
        '⚡ Quick revision'
      ]
    }
  ];

  const [sureQuestions, setSureQuestions] = React.useState(1);

  const sureQuestionPackage: Package = {
    id: 'sure-questions',
    name: 'Sure Guess Questions',
    price: sureQuestions * 100,
    description: `${sureQuestions} premium guess question${sureQuestions > 1 ? 's' : ''} - 70% accuracy guarantee`,
    features: [
      `🔥 ${sureQuestions} sure guess question${sureQuestions > 1 ? 's' : ''}`,
      '💯 70% accuracy guarantee',
      '📋 Exact format',
      '✍️ Model answers',
      '⏰ Last-minute prep'
    ]
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          📦 Choose Your Premium Package
        </h3>
        <p className="text-gray-600 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full inline-block">
          {semester.toUpperCase()} Semester • {branch.toUpperCase()} Branch
        </p>
      </div>
      
      {/* Regular Packages */}
      <div className="space-y-4">
        {packages.map((pkg, index) => (
          <div key={pkg.id} className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div className="mb-4 md:mb-0">
                <div className="flex items-center space-x-2 mb-2">
                  <div className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-blue-500' : 'bg-green-500'}`}></div>
                  <h4 className="text-xl font-bold text-gray-800">{pkg.name}</h4>
                </div>
                <p className="text-gray-600">{pkg.description}</p>
              </div>
              <div className="text-center md:text-right">
                <div className="text-3xl font-black text-blue-600 mb-1">₹{pkg.price}</div>
                <div className="text-xs text-gray-500 font-medium">One-time payment</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
              {pkg.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="text-sm text-gray-700 bg-gray-50/80 backdrop-blur-sm p-3 rounded-xl border border-gray-200/50">
                  {feature}
                </div>
              ))}
            </div>
            
            <button
              onClick={() => onPurchase(pkg)}
              className={`w-full ${index === 0 ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800' : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800'} text-white py-4 px-6 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-0.5 group-hover:scale-105`}
            >
              <div className="flex items-center justify-center space-x-2">
                <Sparkles className="w-5 h-5" />
                <span>Purchase Now - ₹{pkg.price}</span>
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Premium Sure Questions Package */}
      <div className="relative">
        {/* Premium Badge */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center space-x-2">
            <Crown className="w-4 h-4" />
            <span>PREMIUM GUARANTEE</span>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 border-2 border-red-300 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 mt-3">
          <div className="text-center mb-6">
            <h4 className="text-2xl font-bold text-gray-800 mb-2">Sure Guess Questions</h4>
            <p className="text-red-600 font-bold text-lg">🎯 70% Accuracy Guarantee</p>
            <p className="text-gray-600 text-sm mt-1">Premium guess papers with expert analysis</p>
          </div>
          
          <div className="mb-6">
            <label className="block text-lg font-bold text-gray-700 mb-3">
              Select Number of Questions
            </label>
            <div className="relative">
              <select
                value={sureQuestions}
                onChange={(e) => setSureQuestions(Number(e.target.value))}
                className="w-full p-4 border-2 border-red-300 rounded-xl appearance-none bg-white/90 backdrop-blur-sm focus:border-red-500 focus:ring-4 focus:ring-red-200 transition-all font-semibold text-lg shadow-sm hover:shadow-md"
              >
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>
                    {num} Question{num > 1 ? 's' : ''} - ₹{num * 100}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 pointer-events-none" />
            </div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 mb-6 border border-red-200 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <span className="font-bold text-gray-800">Total Investment:</span>
              <span className="text-3xl font-black text-red-600">₹{sureQuestions * 100}</span>
            </div>
            <p className="text-sm text-gray-600">{sureQuestionPackage.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
            {sureQuestionPackage.features.map((feature, index) => (
              <div key={index} className="text-sm text-gray-700 bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-red-200/50">
                {feature}
              </div>
            ))}
          </div>
          
          <button
            onClick={() => onPurchase(sureQuestionPackage)}
            className="w-full bg-gradient-to-r from-red-600 via-orange-600 to-red-700 hover:from-red-700 hover:via-orange-700 hover:to-red-800 text-white py-4 px-6 rounded-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-center space-x-2">
              <Target className="w-5 h-5" />
              <span>Get Sure Guess Questions - ₹{sureQuestions * 100}</span>
            </div>
          </button>
          
          {/* Guarantee Badge */}
          <div className="mt-4 text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-red-800 px-4 py-2 rounded-full text-xs font-bold">
              <Shield className="w-4 h-4 mr-2" />
              70% Accuracy Guarantee or Money Back
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageSelector;