import React from 'react';
import { X, AlertTriangle, Scale, FileText } from 'lucide-react';

interface LegalPageProps {
    onClose: () => void;
}

const LegalPage: React.FC<LegalPageProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full my-8">
                {/* Header */}
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-t-2xl relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white hover:bg-red-800 rounded-full p-2 transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <div className="flex items-center space-x-3">
                        <Scale className="w-10 h-10" />
                        <div>
                            <h1 className="text-3xl font-bold">Legal Notice & Binding Agreement</h1>
                            <p className="text-red-100 text-sm mt-1">Enforceable Legal Terms - Please Read Carefully</p>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
                    {/* Critical Warning */}
                    <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
                        <div className="flex items-start space-x-3">
                            <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                            <div>
                                <h2 className="text-xl font-bold text-red-900 mb-2">⚠️ CRITICAL LEGAL WARNING</h2>
                                <p className="text-red-800 font-semibold text-base leading-relaxed">
                                    By accepting our Terms and Conditions and using our services, you enter into a legally binding contract.
                                    Any attempt to make fraudulent refund claims, chargebacks, or false disputes after accepting these
                                    terms will be considered a breach of contract and may result in <strong className="underline">legal action
                                        including but not limited to civil litigation for damages and breach of contract.</strong>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Main Legal Content */}
                    <div className="space-y-6">
                        <section>
                            <div className="flex items-center space-x-2 mb-3">
                                <FileText className="w-6 h-6 text-gray-700" />
                                <h2 className="text-2xl font-bold text-gray-900">Binding Agreement Terms</h2>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                This document constitutes a legally binding agreement between you (the "User" or "Purchaser") and
                                QWB Question Wala Bank (the "Company" or "Service Provider"). By clicking "I Accept Terms and Conditions"
                                or by using our services, downloading materials, or making any payment, you explicitly acknowledge that
                                you have read, understood, and agree to be bound by all terms outlined in this legal notice and our
                                complete Terms and Conditions.
                            </p>
                        </section>

                        <section className="bg-yellow-50 border border-yellow-300 rounded-lg p-5">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                <Scale className="w-5 h-5 mr-2 text-yellow-700" />
                                No Refund Policy - Legally Enforceable
                            </h3>
                            <p className="text-gray-800 leading-relaxed mb-3">
                                <strong className="text-red-700">ALL SALES ARE FINAL AND NON-REFUNDABLE.</strong> Once you have accepted
                                our terms and accessed or downloaded any materials, study guides, question papers, or other content,
                                NO REFUNDS will be issued under any circumstances whatsoever.
                            </p>
                            <p className="text-gray-800 leading-relaxed mb-3">
                                This no-refund policy applies regardless of:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>Your satisfaction or dissatisfaction with the content</li>
                                <li>Whether questions from our materials appear in your examinations</li>
                                <li>The quality, quantity, or relevance of materials provided</li>
                                <li>Any errors or inaccuracies in AI-generated content</li>
                                <li>Difficulty level or format of the materials</li>
                                <li>Your exam results or academic performance</li>
                                <li>Mistaken purchases or change of mind</li>
                                <li>Any other reason, circumstance, or claim</li>
                            </ul>
                        </section>

                        <section className="bg-red-100 border-2 border-red-500 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-red-900 mb-3 flex items-center">
                                <AlertTriangle className="w-6 h-6 mr-2" />
                                Legal Consequences of Fraudulent Claims
                            </h3>
                            <p className="text-gray-900 leading-relaxed mb-4 font-semibold">
                                You are hereby notified that if you attempt to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-800 ml-4 mb-4">
                                <li><strong>File a chargeback</strong> with your payment provider after receiving access to materials</li>
                                <li><strong>Initiate a refund request</strong> despite our clearly stated no-refund policy</li>
                                <li><strong>Make false claims</strong> about the service, quality, or delivery of materials</li>
                                <li><strong>Dispute legitimate charges</strong> that you authorized</li>
                                <li><strong>Engage in payment fraud</strong> of any kind</li>
                            </ul>
                            <div className="bg-white border-l-4 border-red-700 p-4 rounded">
                                <p className="text-red-900 font-bold text-lg mb-2">
                                    ⚖️ YOU WILL BE SUBJECT TO LEGAL ACTION
                                </p>
                                <p className="text-gray-900 leading-relaxed">
                                    QWB Question Wala Bank reserves the right to pursue all available legal remedies, including but not limited to:
                                </p>
                                <ul className="list-decimal list-inside space-y-2 text-gray-800 ml-4 mt-3">
                                    <li><strong>Civil lawsuit</strong> for breach of contract and recovery of damages</li>
                                    <li><strong>Legal fees and court costs</strong> to be borne by the breaching party</li>
                                    <li><strong>Claims for financial damages</strong> including the original purchase amount, processing fees,
                                        legal costs, and punitive damages where applicable</li>
                                    <li><strong>Reporting to appropriate authorities</strong> for fraudulent activity or payment fraud</li>
                                    <li><strong>Permanent ban</strong> from all QWB services and platforms</li>
                                    <li><strong>Collection agency referral</strong> for outstanding amounts and penalties</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Content Disclaimer & Risk Acknowledgment</h3>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                You explicitly acknowledge and accept that:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-3">
                                <li>Content provided may be <strong>generated or enhanced using Artificial Intelligence (AI)</strong>
                                    and may contain errors, inaccuracies, or inconsistencies</li>
                                <li>Materials are provided <strong>"AS IS"</strong> without any warranties or guarantees of accuracy,
                                    completeness, or suitability for any specific purpose</li>
                                <li><strong>No guarantee is made</strong> that questions, topics, or content will appear in your actual examinations</li>
                                <li>QWB Question Wala Bank bears <strong>NO LIABILITY OR RESPONSIBILITY</strong> if materials do not
                                    match your curriculum, exam pattern, or expectations</li>
                                <li>You are using these materials <strong>at your own risk</strong> and for supplementary study purposes only</li>
                                <li>The Company makes <strong>no representations or warranties</strong> regarding exam results,
                                    academic performance, or educational outcomes</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Jurisdiction and Governing Law</h3>
                            <p className="text-gray-700 leading-relaxed">
                                This agreement and all disputes arising from it shall be governed by and construed in accordance with
                                the laws of India. You hereby consent to the exclusive jurisdiction of the courts located in
                                [Your City/State], India for the resolution of any disputes. Any legal proceedings must be conducted
                                in the English language.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Severability</h3>
                            <p className="text-gray-700 leading-relaxed">
                                If any provision of this agreement is found to be unenforceable or invalid by a court of competent
                                jurisdiction, such provision shall be limited or eliminated to the minimum extent necessary, and the
                                remaining provisions shall remain in full force and effect.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Acknowledgment of Understanding</h3>
                            <p className="text-gray-700 leading-relaxed">
                                By accepting our Terms and Conditions, you certify that:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-3">
                                <li>You are at least 18 years of age OR have obtained explicit parental/guardian consent</li>
                                <li>You have read and fully understand this Legal Notice and all Terms and Conditions</li>
                                <li>You accept all risks associated with using our services</li>
                                <li>You agree to the no-refund policy without exception</li>
                                <li>You understand the legal consequences of attempting fraudulent claims or chargebacks</li>
                                <li>You waive any right to dispute legitimate charges or request refunds</li>
                                <li>You will not hold QWB Question Wala Bank liable for any claims, damages, or losses</li>
                            </ul>
                        </section>

                        <section className="bg-gray-100 border border-gray-300 rounded-lg p-5">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Information</h3>
                            <p className="text-gray-700 leading-relaxed">
                                For questions regarding these legal terms or to resolve any concerns BEFORE making a purchase,
                                please contact us through our support channels. Once you have accepted the terms and made a purchase,
                                the no-refund policy is in effect and cannot be waived.
                            </p>
                        </section>

                        <section className="bg-green-50 border-l-4 border-green-600 p-5 rounded-lg">
                            <p className="text-gray-800 leading-relaxed">
                                <strong className="text-green-800">We value transparency and fair dealing.</strong> This legal notice
                                is provided to ensure you fully understand your rights and obligations before using our services.
                                By being clear about our policies upfront, we aim to prevent misunderstandings and ensure a positive
                                experience for all users who proceed with informed consent.
                            </p>
                        </section>
                    </div>

                    {/* Footer */}
                    <div className="border-t pt-6 mt-8">
                        <p className="text-sm text-gray-600 text-center">
                            Last Updated: January 2026 | QWB Question Wala Bank - All Rights Reserved
                        </p>
                        <div className="text-center mt-4">
                            <button
                                onClick={onClose}
                                className="px-8 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition-colors"
                            >
                                Close Legal Notice
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegalPage;
