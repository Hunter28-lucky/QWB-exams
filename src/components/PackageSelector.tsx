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
<<<<<<< HEAD
      name: 'Complete Guess Paper',
      price: 299,
      description: 'Complete examination guess paper with all sections',
      features: [
        '📄 Complete guess paper',
        '✅ All sections included',
        '📝 Detailed solutions',
        '📊 Marking scheme',
        '🎯 Current year pattern'
=======
      name: 'Complete Predicted Question Paper',
      price: 299,
      originalPrice: 999,
      description: 'Study material with predicted questions based on past patterns',
      features: [
        '📄 Predicted question paper',
        '✅ All sections covered',
        '📝 Reference solutions',
        '📊 Past pattern analysis',
        '🎯 Based on current syllabus'
>>>>>>> 4f2c9ea (Add psychology triggers: dynamic live viewers, scarcity counters, price anchoring, color psychology, and professional UI enhancements)
      ]
    },
    {
      id: 'important-questions',
<<<<<<< HEAD
      name: 'Important Guess Questions Pack',
      price: 50,
      description: '3 most important guess questions for exam preparation',
      features: [
        '🎯 3 important guess questions',
        '⭐ High exam probability',
        '📖 Complete answers',
        '📚 Topic-wise sorted',
        '⚡ Quick revision'
=======
      name: 'Important Topics Pack',
      price: 50,
      originalPrice: 199,
      description: '3 important topics for exam preparation',
      features: [
        '🎯 3 important topics',
        '⭐ Based on past trends',
        '📖 Reference answers',
        '📚 Topic-wise organized',
        '⚡ Study aid'
>>>>>>> 4f2c9ea (Add psychology triggers: dynamic live viewers, scarcity counters, price anchoring, color psychology, and professional UI enhancements)
      ]
    }
  ];

  const [sureQuestions, setSureQuestions] = React.useState(1);

  const sureQuestionPackage: Package = {
    id: 'sure-questions',
<<<<<<< HEAD
    name: 'Sure Guess Questions',
    price: sureQuestions * 100,
    description: `${sureQuestions} premium guess question${sureQuestions > 1 ? 's' : ''} - 70% accuracy guarantee`,
    features: [
      `🔥 ${sureQuestions} sure guess question${sureQuestions > 1 ? 's' : ''}`,
      '💯 70% accuracy guarantee',
      '📋 Exact format',
      '✍️ Model answers',
      '⏰ Last-minute prep'
=======
    name: 'Predicted Questions',
    price: sureQuestions * 100,
    description: `${sureQuestions} predicted question${sureQuestions > 1 ? 's' : ''} - Study aid only`,
    features: [
      `🔥 ${sureQuestions} predicted question${sureQuestions > 1 ? 's' : ''}`,
      '💯 Based on analysis',
      '📋 Suggested format',
      '✍️ Reference answers',
      '⏰ Study material'
>>>>>>> 4f2c9ea (Add psychology triggers: dynamic live viewers, scarcity counters, price anchoring, color psychology, and professional UI enhancements)
    ]
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          📦 Choose Your Premium Package
        </h3>
<<<<<<< HEAD
        <p className="text-gray-600 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full inline-block">
          {semester.toUpperCase()} Semester • {branch.toUpperCase()} Branch
=======
        <p className="text-sm text-gray-600 text-center mb-2">
          {semester.toUpperCase()} Semester - {branch.toUpperCase()} Branch
>>>>>>> 4f2c9ea (Add psychology triggers: dynamic live viewers, scarcity counters, price anchoring, color psychology, and professional UI enhancements)
        </p>
        {/* Commitment Progress Bar */}
        <div className="mt-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold text-gray-700">✓ Step 2 of 3</span>
            <span className="text-xs text-orange-600 font-bold">Almost there!</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full" style={{ width: '66%' }}></div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      
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
=======

      <div className="space-y-4 mb-4">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-orange-300 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h4 className="text-lg font-bold text-gray-800">{pkg.name}</h4>
                <p className="text-sm text-gray-600">{pkg.description}</p>
              </div>
              <div className="text-right">
                {pkg.originalPrice && (
                  <div className="flex flex-col items-end">
                    <div className="text-xs text-gray-500 line-through">₹{pkg.originalPrice}</div>
                    <div className="text-2xl font-bold text-orange-600">₹{pkg.price}</div>
                    <div className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">
                      {Math.round((1 - pkg.price / pkg.originalPrice) * 100)}% OFF
                    </div>
                  </div>
                )}
                {!pkg.originalPrice && (
                  <div className="text-2xl font-bold text-orange-600">₹{pkg.price}</div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-1 mb-4">
              {pkg.features.map((feature, index) => (
                <div key={index} className="text-xs text-gray-700 bg-gray-50 p-2 rounded">
>>>>>>> 4f2c9ea (Add psychology triggers: dynamic live viewers, scarcity counters, price anchoring, color psychology, and professional UI enhancements)
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

<<<<<<< HEAD
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
=======
      {/* Sure Questions Package */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-lg p-4">
        <div className="text-center mb-4">
          <div className="inline-flex items-center bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
            📚 PREDICTED QUESTIONS
          </div>
          <h4 className="text-lg font-bold text-gray-800">Predicted Questions Pack</h4>
          <p className="text-sm text-orange-600 font-medium">Study Aid</p>
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
            <span className="text-xl font-bold text-red-600">₹{sureQuestions * 100}</span>
          </div>
          <p className="text-xs text-gray-600">{sureQuestionPackage.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-1 mb-4">
          {sureQuestionPackage.features.map((feature, index) => (
            <div key={index} className="text-xs text-gray-700 bg-white p-2 rounded border">
              {feature}
>>>>>>> 4f2c9ea (Add psychology triggers: dynamic live viewers, scarcity counters, price anchoring, color psychology, and professional UI enhancements)
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
<<<<<<< HEAD
=======

        <button
          onClick={() => onPurchase(sureQuestionPackage)}
          className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-sm"
        >
          🎯 Get Predicted Questions - ₹{sureQuestions * 100}
        </button>
>>>>>>> 4f2c9ea (Add psychology triggers: dynamic live viewers, scarcity counters, price anchoring, color psychology, and professional UI enhancements)
      </div>
    </div>
  );
};

export default PackageSelector;