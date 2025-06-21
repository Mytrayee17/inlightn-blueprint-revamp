import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // TODO: Backend integration - Replace with actual API call
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success state
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setErrors({});
      
      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section data-section="contact-form" className="bg-white dark:bg-slate-900 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-3xl p-12">
              <div className="text-6xl mb-6">✅</div>
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-200 mb-4">
                Message Sent Successfully!
              </h2>
              <p className="text-lg text-green-700 dark:text-green-300 mb-8">
                Thank you for reaching out to us. We'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section data-section="contact-form" className="bg-white dark:bg-slate-900 px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Send us a{' '}
            <span className="bg-gradient-to-r from-inlighn-accent to-purple-600 bg-clip-text text-transparent">
              Message
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Have questions about our programs? Want to learn more? We'd love to hear from you.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 dark:border-slate-700">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-inlighn-accent/20 dark:bg-slate-800 dark:text-white ${
                  errors.name 
                    ? 'border-red-300 bg-red-50 dark:bg-red-900/20' 
                    : 'border-slate-200 dark:border-slate-600 focus:border-inlighn-accent'
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-inlighn-accent/20 dark:bg-slate-800 dark:text-white ${
                  errors.email 
                    ? 'border-red-300 bg-red-50 dark:bg-red-900/20' 
                    : 'border-slate-200 dark:border-slate-600 focus:border-inlighn-accent'
                }`}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-inlighn-accent/20 resize-none dark:bg-slate-800 dark:text-white ${
                  errors.message 
                    ? 'border-red-300 bg-red-50 dark:bg-red-900/20' 
                    : 'border-slate-200 dark:border-slate-600 focus:border-inlighn-accent'
                }`}
                placeholder="Tell us about your inquiry or questions..."
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-inlighn-accent to-purple-600 hover:from-inlighn-accent-dark hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
} 