import React, { useState } from 'react';
import mockData, { Certificate } from '@/data/certificateMockData';

interface VerifyFormProps {
  setCertificateData: (data: Certificate | null) => void;
}

export default function VerifyForm({ setCertificateData }: VerifyFormProps) {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setCertificateData(null);
    setLoading(true);

    if (!id) {
      setError('Certificate ID is required');
      setLoading(false);
      return;
    }

    // Mock API call delay to simulate loading
    setTimeout(() => {
      const cert = mockData.find(c =>
        c.id.toLowerCase() === id.toLowerCase() || (email && c.email.toLowerCase() === email.toLowerCase())
      );

      if (!cert) {
        setError('No certificate found with the provided details.');
        setCertificateData(null);
      } else {
        setCertificateData(cert);
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto px-6 py-12">
      <div className="mb-6">
        <label className="block mb-2 font-semibold text-gray-700">Certificate ID</label>
        <input
          type="text"
          value={id}
          onChange={e => setId(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-inlighn-accent focus:border-transparent transition-all"
          placeholder="e.g., INL-FS-2025-0023"
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-semibold text-gray-700">Email Address (Optional)</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-inlighn-accent focus:border-transparent transition-all"
          placeholder="you@example.com"
        />
      </div>
      {error && <p className="text-red-500 mb-4 animate-shake">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="bg-inlighn-accent text-white px-6 py-3 rounded-lg hover:bg-inlighn-accent-dark transition-all w-full font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {loading ? (
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : 'Verify Certificate'}
      </button>
      {/* TODO: Animate form shake on error (added animate-shake placeholder) */}
      {/* TODO: Show loading spinner on submit (implemented) */}
    </form>
  );
} 