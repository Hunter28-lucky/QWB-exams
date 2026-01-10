import React, { useState, useEffect } from 'react';
import { GraduationCap, FileText, Shield, Star, CheckCircle, ChevronDown, MessageCircle, TrendingUp, Users, Award } from 'lucide-react';
import { useState, useEffect } from 'react';
import { GraduationCap } from 'lucide-react';
import Header from './components/Header';
import PackageSelector from './components/PackageSelector';
import PaymentModal from './components/PaymentModal';
import TermsModal from './components/TermsModal';
import LegalPage from './components/LegalPage';

export interface Package {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
}

function App() {
  const [selectedSemester, setSelectedSemester] = useState<string>('');
  const [selectedBranch, setSelectedBranch] = useState<string>('');
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  const [showTerms, setShowTerms] = useState(false);
  const [showLegal, setShowLegal] = useState(false);
  const [liveViewers, setLiveViewers] = useState(3); // Dynamic viewer count

  useEffect(() => {
    const termsAccepted = localStorage.getItem('qwb_terms_accepted');
    if (!termsAccepted) {
      setShowTerms(true);
    }
  }, []);

  // Randomize live viewer count every 3-6 seconds
  useEffect(() => {
    const updateViewers = () => {
      const newCount = Math.floor(Math.random() * 6) + 2; // Random 2-7
      setLiveViewers(newCount);
    };

    const scheduleNextUpdate = () => {
      const interval = Math.random() * 3000 + 3000; // Random 3-6 seconds
      return setTimeout(() => {
        updateViewers();
        scheduleNextUpdate();
      }, interval);
    };

    const timer = scheduleNextUpdate();
    return () => clearTimeout(timer);
  }, []);

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

  const handleTermsAccept = () => {
    localStorage.setItem('qwb_terms_accepted', 'true');
    setShowTerms(false);
  };

  const handleLegalClick = () => {
    setShowLegal(true);
  };

  const handleLegalClose = () => {
    setShowLegal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20">
      <Header />
      
      <main className="pt-16 md:pt-20">
        {/* Hero Section with Premium Design */}
        <section className={`relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-800/5"></div>
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
          
          <div className="relative container mx-auto px-4 py-12 md:py-20">
            <div className="text-center max-w-4xl mx-auto">
              {/* Main Heading */}
              <div className="mb-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4 leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                    QWB Question
                  </span>
                  <br />
                  <span className="text-gray-800">Wala Bank</span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
              </div>
              
              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium leading-relaxed">
                Your Trusted Source for AI Premium Guess Papers & Study Materials
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-8 text-sm md:text-base">
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-gray-800">Premium Quality Using AI </span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-gray-800">70% Accuracy</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-gray-800">Instant Access</span>
                </div>
              </div>

              {/* Social Proof */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">50,000+</div>
                  <p className="text-gray-600 font-medium">Trusted Students</p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <Award className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">70%</div>
                  <p className="text-gray-600 font-medium">Accuracy Rate</p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">70%</div>
                  <p className="text-gray-600 font-medium">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg">Verified Content</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Premium guess papers verified by expert faculty members</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg">High Accuracy</h3>
                <p className="text-gray-600 text-sm leading-relaxed">70% accuracy guarantee based on AI expert analysis</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg">Instant Download</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Immediate access to materials after payment confirmation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Selection Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white p-6 md:p-8">
                  <div className="text-center">
                    <GraduationCap className="w-12 h-12 mx-auto mb-4 opacity-90" />
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                      Select Your Academic Requirements
                    </h2>
                    <p className="text-blue-100 text-sm md:text-base">
                      Choose semester and branch to view premium guess papers
                    </p>
                  </div>
                </div>
                
                <div className="p-6 md:p-8 space-y-8">
                  {/* Semester Selection */}
                  <div className="space-y-3">
                    <label className="block text-lg font-bold text-gray-800 mb-3">
                      📚 Select Semester
                    </label>
                    <div className="relative">
                      <select
                        value={selectedSemester}
                        onChange={(e) => setSelectedSemester(e.target.value)}
                        className="w-full p-4 md:p-5 border-2 border-gray-300 rounded-2xl appearance-none bg-white/90 backdrop-blur-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all text-gray-800 font-semibold text-lg shadow-sm hover:shadow-md"
                      >
                        <option value="">-- Choose Your Semester --</option>
                        {semesters.map((semester) => (
                          <option key={semester.id} value={semester.id}>
                            {semester.name}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Branch Selection */}
                  {selectedSemester && (
                    <div className="space-y-3 animate-fadeIn">
                      <label className="block text-lg font-bold text-gray-800 mb-3">
                        🎓 Select Branch
                      </label>
                      <div className="relative">
                        <select
                          value={selectedBranch}
                          onChange={(e) => setSelectedBranch(e.target.value)}
                          className="w-full p-4 md:p-5 border-2 border-gray-300 rounded-2xl appearance-none bg-white/90 backdrop-blur-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all text-gray-800 font-semibold text-lg shadow-sm hover:shadow-md"
                        >
                          <option value="">-- Choose Your Branch --</option>
                          {branches.map((branch) => (
                            <option key={branch.id} value={branch.id}>
                              {branch.name}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 pointer-events-none" />
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
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-16 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose QWB Question Wala Bank?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the difference with our premium guess papers designed for academic excellence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-white" />
    <div className="min-h-screen bg-gray-50">
      <Header onLegalClick={handleLegalClick} />

      <main className="container mx-auto px-3 py-4 max-w-2xl pb-6">
        {/* Urgent Banner - Green for Success/Money Confidence */}
        <div className="bg-gradient-to-r from-green-600 via-green-600 to-emerald-600 text-white px-4 py-2.5 rounded-lg mb-4 shadow-lg">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold">✅ Exam Season Special Offer</span>
            <span className="text-xs bg-white text-green-700 px-2.5 py-1 rounded-full font-bold shadow-sm">Limited Period</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-4 border-t-4 border-orange-500">
          <div className="text-center mb-3">
            <div className="flex items-center justify-center mb-2">
              <div className="bg-orange-500 p-2 rounded-full">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
            </div>
            <h1 className="text-xl font-bold text-gray-800 mb-1">
              Padhlo Aur Pass Ho Jaao! 📚
            </h1>
            <p className="text-sm text-gray-600 mb-2">
              Guess Papers Jo Exam Mein Aate Hain
            </p>

            <div className="flex items-center justify-center space-x-2 text-xs text-orange-600 font-semibold">
              <span>⭐ 4.8/5 Rating</span>
              <span>•</span>
              <span>50,000+ Students</span>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="bg-green-50 p-2 rounded-lg text-center border border-green-200">
              <div className="text-lg">✓</div>
              <p className="text-xs font-semibold text-green-800">Exam Pattern Match</p>
            </div>
            <div className="bg-blue-50 p-2 rounded-lg text-center border border-blue-200">
              <div className="text-lg">₹</div>
              <p className="text-xs font-semibold text-blue-800">Sabse Sasta</p>
            </div>
            <div className="bg-purple-50 p-2 rounded-lg text-center border border-purple-200">
              <div className="text-lg">⚡</div>
              <p className="text-xs font-semibold text-purple-800">Instant PDF</p>
            </div>
          </div>

          {/* Trust Statement */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
            <p className="text-sm text-blue-900 font-bold text-center">
              ✓ University Pattern Based Questions
            </p>
            <p className="text-xs text-blue-700 text-center mt-1 font-medium">
              Prepared by experienced educators • Trusted by thousands
            </p>
          </div>
        </div>

        {/* Urgency + Scarcity - Enhanced with Live Counters */}
        <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-300 rounded-lg p-3.5 mb-4 shadow-lg">
          <div className="flex items-start space-x-2.5">
            <div className="text-red-600 text-xl flex-shrink-0">⚡</div>
            <div className="flex-1">
              <p className="text-sm font-bold text-red-900 mb-2">⏰ Limited Time Access!</p>
              <div className="space-y-1.5">
                <p className="text-xs text-gray-700 leading-relaxed">
                  <strong className="text-red-700">350+ students</strong> purchased quality study materials in last 24 hours
                </p>
                <div className="flex items-center justify-between bg-white rounded-lg p-2 border border-red-200">
                  <span className="text-xs font-semibold text-gray-700">📦 Stock for your branch:</span>
                  <span className="text-xs font-bold text-red-600">Only 12 left</span>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-2 border border-orange-200">
                  <span className="text-xs font-semibold text-gray-700">👁️ Viewing now:</span>
                  <span className="text-xs font-bold text-orange-600 transition-all duration-300">{liveViewers} student{liveViewers !== 1 ? 's' : ''}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Selection Process */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-t-xl">
            <h2 className="text-lg font-bold text-center flex items-center justify-center">
              <span className="mr-2">📝</span>
              Select Karo Aur Download Karo
            </h2>
            <p className="text-center text-orange-100 text-xs mt-1">
              2 minutes mein apne important questions pao!
            </p>
          </div>

          <div className="p-4 space-y-4">
            {/* Semester Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                📚 Select Semester *
              </label>
              <div className="relative">
                <select
                  value={selectedSemester}
                  onChange={(e) => setSelectedSemester(e.target.value)}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg appearance-none bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all text-gray-800 font-medium text-sm"
                >
                  <option value="">-- Choose Your Semester --</option>
                  {semesters.map((semester) => (
                    <option key={semester.id} value={semester.id}>
                      {semester.name}
                    </option>
                  ))}
                </select>
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
                    className="w-full p-3 border-2 border-gray-300 rounded-lg appearance-none bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all text-gray-800 font-medium text-sm"
                  >
                    <option value="">-- Choose Your Branch --</option>
                    {branches.map((branch) => (
                      <option key={branch.id} value={branch.id}>
                        {branch.name}
                      </option>
                    ))}
                  </select>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Premium Guess Papers</h3>
                <p className="text-gray-600 text-sm">Expertly crafted guess papers with high accuracy</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Verified Content</h3>
                <p className="text-gray-600 text-sm">All materials verified by expert faculty</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">High Success Rate</h3>
                <p className="text-gray-600 text-sm">98% student satisfaction rate</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Instant Download</h3>
                <p className="text-gray-600 text-sm">Immediate access after payment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Official Notice */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600 rounded-2xl shadow-lg p-6 md:p-8">
                <div className="flex items-start">
                  <FileText className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      📢 Official Notice
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      QWB – Question Wala Bank provides authentic study materials and premium guess papers for students.
                      All content is prepared following university guidelines and examination patterns with expert analysis.
                      For any queries, contact our academic support team.
                    </p>
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
        </section>
      </main>

      {/* Enhanced Mobile Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white mt-16">
        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                QWB Question Wala Bank
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Your trusted partner for premium guess papers and study materials. 
                Helping students achieve academic excellence since day one.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <button 
                  onClick={() => window.open('https://wa.me/8797903378?text=Hello%2C%20I%20need%20help%20with%20study%20materials', '_blank')}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Support</span>
                </button>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
              <nav className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">Home</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">About Us</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">Study Materials</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">Support</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">Terms of Service</a>
              </nav>
            </div>
            
            {/* Academic Branches */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold mb-4 text-white">Engineering Branches</h4>
              <div className="space-y-2 text-sm">
                <div className="text-gray-300">Computer Science (CSE)</div>
                <div className="text-gray-300">Electronics & Communication (ECE)</div>
                <div className="text-gray-300">Mechanical Engineering (ME)</div>
                <div className="text-gray-300">Civil Engineering (CE)</div>
                <div className="text-gray-300">Electrical Engineering (EE)</div>
                <div className="text-gray-300">Chemical Engineering (CHE)</div>
              </div>
            </div>
          </div>
          
          {/* Bottom Footer */}
          <div className="border-t border-gray-700 pt-6">
            <div className="text-center text-gray-400 text-sm">
              <p className="mb-2">
                © 2025 QWB Question Wala Bank. All rights reserved.
              </p>
              <p className="text-xs">
                📚 Empowering Students • 🎯 Premium Quality • 🚀 Academic Excellence
              </p>
            </div>
          </div>
        </div>
      </footer>

      {showPayment && selectedPackage && (
        <PaymentModal
          package={selectedPackage}
          semester={selectedSemester}
          branch={selectedBranch}
          onClose={handlePaymentClose}
        />
      )}
      {showTerms && (
        <TermsModal onAccept={handleTermsAccept} />
      )}
      {showLegal && (
        <LegalPage onClose={handleLegalClose} />
      )}
    </div>
  );
}

export default App;
