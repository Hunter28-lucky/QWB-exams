import React, { useState } from 'react';
import { GraduationCap, BookOpen, FileText, Shield, Star, CheckCircle, ChevronDown } from 'lucide-react';
import Header from './components/Header';
import PackageSelector from './components/PackageSelector';
import PaymentModal from './components/PaymentModal';

export interface Package {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
}

function App() {
  const [selectedSemester, setSelectedSemester] = useState<string>('');
  const [selectedBranch, setSelectedBranch] = useState<string>('');
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [showPayment, setShowPayment] = useState(false);

  const semesters = [
    { id: '1st', name: '1st Semester' },
    { id: '2nd', name: '2nd Semester' },
    { id: '3rd', name: '3rd Semester' },
    { id: '4th', name: '4th Semester' },
    { id: '5th', name: '5th Semester' },
    { id: '6th', name: '6th Semester' },
    { id: '7th', name: '7th Semester' },
    { id: '8th', name: '8th Semester' },
    { id: 'yearly', name: 'Yearly Pattern' }
  ];

  const branches = [
    { id: 'cse', name: 'Computer Science & Engineering (CSE)' },
    { id: 'ece', name: 'Electronics & Communication (ECE)' },
    { id: 'me', name: 'Mechanical Engineering (ME)' },
    { id: 'ce', name: 'Civil Engineering (CE)' },
    { id: 'ee', name: 'Electrical Engineering (EE)' },
    { id: 'che', name: 'Chemical Engineering (CHE)' }
  ];

  const handlePurchase = (pkg: Package) => {
    setSelectedPackage(pkg);
    setShowPayment(true);
  };

  const handlePaymentClose = () => {
    setShowPayment(false);
    setSelectedPackage(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-orange-600 p-3 rounded-full">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            JUT Official Hub
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Official Portal for Examination Materials & Important Questions
          </p>
          <div className="mt-3 text-sm text-orange-600 font-medium">
            Jharkhand University of Technology (JUT)
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 px-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border text-center">
            <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-1 text-sm">Official Content</h3>
            <p className="text-gray-600 text-xs">Verified examination materials</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border text-center">
            <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-1 text-sm">High Accuracy</h3>
            <p className="text-gray-600 text-xs">Trusted by thousands of students</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border text-center">
            <CheckCircle className="w-8 h-8 text-orange-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-1 text-sm">Instant Download</h3>
            <p className="text-gray-600 text-xs">Immediate access after payment</p>
          </div>
        </div>

        {/* Selection Process */}
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg border-t-4 border-orange-600">
            {/* Header */}
            <div className="bg-orange-600 text-white p-4 rounded-t-lg">
              <h2 className="text-xl font-bold text-center">
                📋 Select Your Academic Requirements
              </h2>
              <p className="text-center text-orange-100 text-sm mt-1">
                Choose semester and branch to view available materials
              </p>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Semester Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  📚 Select Semester *
                </label>
                <div className="relative">
                  <select
                    value={selectedSemester}
                    onChange={(e) => setSelectedSemester(e.target.value)}
                    className="w-full p-4 border-2 border-gray-300 rounded-lg appearance-none bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all text-gray-800 font-medium"
                  >
                    <option value="">-- Choose Your Semester --</option>
                    {semesters.map((semester) => (
                      <option key={semester.id} value={semester.id}>
                        {semester.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Branch Selection */}
              {selectedSemester && (
                <div className="animate-fadeIn">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    🎓 Select Branch *
                  </label>
                  <div className="relative">
                    <select
                      value={selectedBranch}
                      onChange={(e) => setSelectedBranch(e.target.value)}
                      className="w-full p-4 border-2 border-gray-300 rounded-lg appearance-none bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all text-gray-800 font-medium"
                    >
                      <option value="">-- Choose Your Branch --</option>
                      {branches.map((branch) => (
                        <option key={branch.id} value={branch.id}>
                          {branch.name}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              )}

              {/* Package Selection */}
              {selectedSemester && selectedBranch && (
                <div className="animate-fadeIn">
                  <PackageSelector 
                    semester={selectedSemester}
                    branch={selectedBranch}
                    onPurchase={handlePurchase}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Government Footer Notice */}
        <div className="mt-12 max-w-4xl mx-auto px-4">
          <div className="bg-white border-l-4 border-orange-600 rounded-lg shadow-sm p-4">
            <div className="flex items-start">
              <FileText className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-gray-800 mb-1">
                  📢 Official Notice
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  This portal provides authentic study materials and important questions for JUT students. 
                  All content is prepared following university guidelines and examination patterns. 
                  For any queries, contact the academic office.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {showPayment && selectedPackage && (
        <PaymentModal 
          package={selectedPackage}
          semester={selectedSemester}
          branch={selectedBranch}
          onClose={handlePaymentClose}
        />
      )}
    </div>
  );
}

export default App;