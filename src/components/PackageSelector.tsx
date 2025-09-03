import React from 'react';
import { FileText, Target, Zap, ChevronDown } from 'lucide-react';
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
      name: 'Complete guess Question Paper',
      price: 299,
      description: 'Complete examination Guess paper with all sections',
      features: [
        '📄 Complete guess question paper',
        '✅ All sections included',
        '📝 Detailed solutions',
        '📊 Marking scheme',
        '🎯 Current year pattern'
      ]
    },
    {
      id: 'important-questions',
      name: 'Important guess Questions Pack',
      price: 50,
      description: '3 most important questions for exam preparation',
      features: [
        '🎯 3 important questions',
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
    name: 'Sure guess Questions',
    price: sureQuestions * 50,
    description: `${sureQuestions} confirmed guess question${sureQuestions > 1 ? 's' : ''} - 70% guarantee`,
    features: [
      `🔥 ${sureQuestions} sure question${sureQuestions > 1 ? 's' : ''}`,
      '💯 70% guarantee',
      '📋 Exact format',
      '✍️ Model answers',
      '⏰ Last-minute prep'
    ]
  };

  return (
    <div>
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
        <h3 className="text-lg font-bold text-gray-800 text-center mb-2">
          📦 Choose Your Package
        </h3>
        <p className="text-sm text-gray-600 text-center">
          {semester.toUpperCase()} Semester - {branch.toUpperCase()} Branch
        </p>
      </div>
      
      <div className="space-y-4 mb-4">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-orange-300 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h4 className="text-lg font-bold text-gray-800">{pkg.name}</h4>
                <p className="text-sm text-gray-600">{pkg.description}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-orange-600">₹{pkg.price}</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-1 mb-4">
              {pkg.features.map((feature, index) => (
                <div key={index} className="text-xs text-gray-700 bg-gray-50 p-2 rounded">
                  {feature}
                </div>
              ))}
            </div>
            
            <button
              onClick={() => onPurchase(pkg)}
              className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-sm"
            >
              🛒 Purchase Now - ₹{pkg.price}
            </button>
          </div>
        ))}
      </div>

      {/* Sure Questions Package */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-lg p-4">
        <div className="text-center mb-4">
          <div className="inline-flex items-center bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
            🔥 PREMIUM GUARANTEE
          </div>
          <h4 className="text-lg font-bold text-gray-800">Sure Questions</h4>
          <p className="text-sm text-red-600 font-medium">100% Confirmed Questions</p>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Select Number of Questions
          </label>
          <div className="relative">
            <select
              value={sureQuestions}
              onChange={(e) => setSureQuestions(Number(e.target.value))}
              className="w-full p-3 border-2 border-gray-300 rounded-lg appearance-none bg-white focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all font-medium"
            >
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>
                  {num} Question{num > 1 ? 's' : ''} - ₹{num * 50}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-3 mb-4 border border-red-200">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-gray-800 text-sm">Total Amount:</span>
            <span className="text-xl font-bold text-red-600">₹{sureQuestions * 50}</span>
          </div>
          <p className="text-xs text-gray-600">{sureQuestionPackage.description}</p>
        </div>
        
        <div className="grid grid-cols-1 gap-1 mb-4">
          {sureQuestionPackage.features.map((feature, index) => (
            <div key={index} className="text-xs text-gray-700 bg-white p-2 rounded border">
              {feature}
            </div>
          ))}
        </div>
        
        <button
          onClick={() => onPurchase(sureQuestionPackage)}
          className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm"
        >
          🎯 Get Sure Questions - ₹{sureQuestions * 50}
        </button>
      </div>
    </div>
  );
};

export default PackageSelector;
