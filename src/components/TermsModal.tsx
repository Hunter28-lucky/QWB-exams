import React, { useState, useEffect, useRef } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface TermsModalProps {
    onAccept: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ onAccept }) => {
    const [canAccept, setCanAccept] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
            // Check if user has scrolled to near the bottom (within 10px)
            if (scrollHeight - scrollTop - clientHeight < 10) {
                setCanAccept(true);
            }
        }
    };

    useEffect(() => {
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-3">
            <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full max-h-[60vh] flex flex-col animate-fadeIn">
                {/* Header - Smaller and friendlier */}
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-t-2xl">
                    <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="w-5 h-5" />
                        <div className="text-center">
                            <h2 className="text-base font-bold">Quick Agreement</h2>
                            <p className="text-green-100 text-xs">Almost done! Just one step</p>
                        </div>
                    </div>
                </div>

                {/* Scrollable Content - Much smaller viewport */}
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="flex-1 overflow-y-auto p-4 space-y-2 text-xs leading-relaxed bg-gray-50"
                >
                    <div>
                        <h3 className="text-sm font-semibold text-gray-800 mb-1">Terms of Service</h3>
                        <p className="text-gray-600 mb-2">
                            Welcome to QWB Question Wala Bank. By using our services, you agree to these terms. Please review the following important information.
                        </p>

                        <h3 className="text-sm font-semibold text-gray-800 mb-1">Service Overview</h3>
                        <p className="text-gray-600 mb-2">
                            QWB provides educational materials, question papers, and study resources for students. We offer various packages for different semesters and branches to help with exam preparation.
                        </p>

                        <h3 className="text-sm font-semibold text-gray-800 mb-1">Your Account</h3>
                        <p className="text-gray-600 mb-2">
                            You are responsible for maintaining the security of your account and all activities under it. Please keep your login credentials safe and notify us immediately of any unauthorized access.
                        </p>

                        <h3 className="text-sm font-semibold text-orange-600 mb-1">⚠️ Important Notice</h3>
                        <p className="text-gray-700 mb-2">
                            <strong>Please note carefully:</strong> Some content on our platform may be generated or enhanced using AI technology. While we strive for quality, the materials are provided as study aids and reference materials only.
                        </p>
                        <p className="text-gray-700 mb-2">
                            <strong className="text-red-600">Important:</strong> The questions and materials we provide are for practice purposes. We cannot guarantee that specific questions will appear in your actual examinations. The content is meant to help you prepare, but exam questions are set by your institution.
                        </p>
                        <p className="text-gray-700 mb-2">
                            <strong className="text-red-600">Refund Policy:</strong> All purchases are final and non-refundable once access is granted. By proceeding, you acknowledge this policy and agree that refunds will not be provided for any reason, including if questions do not match your exam or if you're unsatisfied with the content.
                        </p>

                        <h3 className="text-sm font-semibold text-gray-800 mb-1">Payment</h3>
                        <p className="text-gray-600 mb-2">
                            All fees are due in advance. Prices may change without notice for future purchases. You're responsible for all charges and applicable taxes on your account.
                        </p>

                        <h3 className="text-sm font-semibold text-gray-800 mb-1">Content Rights</h3>
                        <p className="text-gray-600 mb-2">
                            All materials are owned by QWB or licensed to us. You may use them for personal educational purposes only. Sharing, distributing, or reproducing content without permission is prohibited.
                        </p>

                        <h3 className="text-sm font-semibold text-gray-800 mb-1">Acceptable Use</h3>
                        <p className="text-gray-600 mb-2">
                            Use our service legally and respectfully. Don't misuse it, attempt to breach security, share your account, or engage in any activity that could harm the platform or other users.
                        </p>

                        <h3 className="text-sm font-semibold text-gray-800 mb-1">Privacy</h3>
                        <p className="text-gray-600 mb-2">
                            We protect your personal information and use it only to provide our services. We implement security measures to safeguard your data from unauthorized access.
                        </p>

                        <h3 className="text-sm font-semibold text-gray-800 mb-1">Liability Limitations</h3>
                        <p className="text-gray-600 mb-2">
                            QWB provides materials "as is" without warranties. We're not liable for indirect damages, lost profits, exam results, or other losses arising from using our service.
                        </p>

                        <h3 className="text-sm font-semibold text-gray-800 mb-1">Your Responsibility</h3>
                        <p className="text-gray-600 mb-2">
                            You agree to indemnify QWB from any claims arising from your use of our service or violation of these terms.
                        </p>

                        <h3 className="text-sm font-semibold text-gray-800 mb-1">Changes to Terms</h3>
                        <p className="text-gray-600 mb-2">
                            We may update these terms at any time. Continued use of our service means you accept any changes. We'll provide notice for significant changes.
                        </p>

                        <h3 className="text-sm font-semibold text-gray-800 mb-1">Account Termination</h3>
                        <p className="text-gray-600 mb-2">
                            We may suspend or terminate your account at our discretion if you violate these terms. Upon termination, your access ends immediately.
                        </p>

                        <h3 className="text-sm font-semibold text-gray-800 mb-1">Governing Law</h3>
                        <p className="text-gray-600 mb-2">
                            These terms are governed by Indian law. Any disputes will be resolved through arbitration in accordance with applicable rules.
                        </p>

                        <h3 className="text-sm font-semibold text-gray-800 mb-1">Contact Us</h3>
                        <p className="text-gray-600 mb-2">
                            Questions about these terms? Contact us through our support channels. We'll respond as quickly as possible.
                        </p>

                        <h3 className="text-sm font-semibold text-green-600 mb-1">✓ Your Agreement</h3>
                        <p className="text-gray-700 mb-3">
                            By clicking "I Accept Terms and Conditions" below, you confirm you've read and agree to these terms. You understand: <strong>all sales are final, no refunds are provided, content may be AI-generated,</strong> and <strong>questions may not match your exams.</strong> You're at least 18 or have guardian permission to use this service.
                        </p>

                        <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                            <p className="text-xs text-green-800 font-medium">
                                ✓ Ready to continue! Click the button below to start accessing quality study materials.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer with green button - Psychologically optimized */}
                <div className="border-t border-gray-200 p-4 bg-white rounded-b-2xl">
                    {!canAccept && (
                        <div className="mb-3 flex items-start text-xs text-amber-700 bg-amber-50 p-2.5 rounded-lg border border-amber-200">
                            <AlertCircle className="w-4 h-4 mr-1.5 flex-shrink-0 mt-0.5" />
                            <span>👆 Please scroll to bottom to activate the continue button</span>
                        </div>
                    )}

                    {canAccept && (
                        <div className="mb-3 flex items-center text-xs text-green-700 bg-green-50 p-2.5 rounded-lg border border-green-200 animate-pulse">
                            <CheckCircle className="w-4 h-4 mr-1.5 flex-shrink-0" />
                            <span>✓ Great! You can now continue →</span>
                        </div>
                    )}

                    <button
                        onClick={onAccept}
                        disabled={!canAccept}
                        className={`w-full py-3.5 px-6 rounded-xl font-bold text-base transition-all shadow-lg ${canAccept
                                ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 cursor-pointer hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]'
                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            }`}
                    >
                        {canAccept ? '✓ I Accept Terms and Conditions' : 'Scroll Down to Continue'}
                    </button>

                    {canAccept && (
                        <p className="text-center text-xs text-gray-500 mt-2">
                            🎓 Join thousands of successful students
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TermsModal;
