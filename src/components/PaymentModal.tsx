import React, { useState } from 'react';
import { X, CreditCard, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import type { Package } from '../App';

interface PaymentModalProps {
  package: Package;
  semester: string;
  branch: string;
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  package: pkg,
  semester,
  branch,
  onClose
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const [paymentUrl, setPaymentUrl] = useState<string>('');
  const [orderId, setOrderId] = useState<string>('');

  const generateOrderId = () => {
    return `JUT${Date.now()}${Math.random().toString(36).substr(2, 5).toUpperCase()}`;
  };

  const createPaymentOrder = async () => {
    setIsProcessing(true);
    setPaymentStatus('processing');
    
    const newOrderId = generateOrderId();
    setOrderId(newOrderId);

    try {
      const formData = new FormData();
      formData.append('token_key', 'c104bb9e5a72a5bc9bbd8b15ee18641f');
      formData.append('secret_key', '9b2ed95f353a62ca2af39a25bf29b4e4');
      formData.append('amount', pkg.price.toString());
      formData.append('order_id', newOrderId);

      const response = await fetch('/api/zapupi/api/create-order', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.status === 'success') {
        setPaymentUrl(data.payment_url);
        setPaymentStatus('success');
        // Open payment URL in new tab
        window.open(data.payment_url, '_blank');
      } else {
        setPaymentStatus('error');
      }
    } catch (error) {
      console.error('Payment error:', error);
      setPaymentStatus('error');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800">Complete Your Purchase</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6">
          {/* Order Summary */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-gray-800 mb-3">Order Summary</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Package:</span>
                <span className="font-medium">{pkg.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Semester:</span>
                <span className="font-medium">{semester.toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Branch:</span>
                <span className="font-medium">{branch.toUpperCase()}</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                <span className="font-semibold text-gray-800">Total Amount:</span>
                <span className="font-bold text-blue-600 text-lg">₹{pkg.price}</span>
              </div>
            </div>
          </div>

          {/* Payment Status */}
          {paymentStatus === 'idle' && (
            <div className="text-center">
              {/* Payment Instructions */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-left">
                <h4 className="font-semibold text-blue-800 mb-3 text-center">💳 Payment Instructions</h4>
                <div className="space-y-2 text-sm text-blue-700">
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                    <span>Click "Proceed to Payment" button below</span>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                    <span>Scan the QR code or take screenshot and scan from your payment app</span>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                    <span>Complete payment using UPI, Net Banking, or Card</span>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                    <span>Download materials instantly after successful payment</span>
                  </div>
                </div>
              </div>
              
              <CreditCard className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <p className="text-gray-600 mb-6">
                Click the button below to proceed with secure payment
              </p>
              <button
                onClick={createPaymentOrder}
                disabled={isProcessing}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center">
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Processing...
                  </div>
                ) : (
                  'Proceed to Payment'
                )}
              </button>
            </div>
          )}

          {paymentStatus === 'processing' && (
            <div className="text-center">
              <Loader2 className="w-12 h-12 text-blue-600 mx-auto mb-4 animate-spin" />
              <p className="text-gray-600">Creating payment order...</p>
            </div>
          )}

          {paymentStatus === 'success' && (
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Payment Link Generated!</h4>
              <p className="text-gray-600 mb-4">
                A new tab has opened with your payment link. Complete the payment to access your materials.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                <p className="text-sm text-green-800">
                  <strong>Order ID:</strong> {orderId}
                </p>
              </div>
              <button
                onClick={() => window.open(paymentUrl, '_blank')}
                className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors mb-3"
              >
                Open Payment Link Again
              </button>
              <button
                onClick={onClose}
                className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          )}

          {paymentStatus === 'error' && (
            <div className="text-center">
              <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Payment Error</h4>
              <p className="text-gray-600 mb-4">
                There was an error creating your payment order. Please try again.
              </p>
              <button
                onClick={() => {
                  setPaymentStatus('idle');
                  setIsProcessing(false);
                }}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Security Notice */}
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-xs text-blue-800">
              🔒 Your payment is secured with industry-standard encryption. 
              All transactions are processed through our secure payment gateway.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;