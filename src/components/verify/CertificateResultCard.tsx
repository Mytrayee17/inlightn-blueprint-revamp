import React, { useEffect, useState } from 'react';
import { Certificate } from '@/data/certificateMockData';

interface CertificateResultCardProps {
  data: Certificate;
}

export default function CertificateResultCard({ data }: CertificateResultCardProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on component mount
    setVisible(true);
    // TODO: Add confetti animation on load
  }, []);

  return (
    <div 
      className={`max-w-2xl mx-auto p-8 rounded-2xl border-2 border-green-500 bg-white mt-4 mb-12 shadow-2xl transition-all duration-700 ease-out transform ${
        visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mr-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-green-700">Certificate Verified</h2>
      </div>
      <ul className="space-y-3 text-lg text-gray-700">
        <li className="flex justify-between border-b pb-2">
          <strong className="text-gray-500">Name:</strong>
          <span>{data.name}</span>
        </li>
        <li className="flex justify-between border-b pb-2">
          <strong className="text-gray-500">Course:</strong>
          <span>{data.course}</span>
        </li>
        <li className="flex justify-between border-b pb-2">
          <strong className="text-gray-500">Certificate ID:</strong>
          <span className="font-mono">{data.id}</span>
        </li>
        <li className="flex justify-between border-b pb-2">
          <strong className="text-gray-500">Duration:</strong>
          <span>{data.duration}</span>
        </li>
        <li className="flex justify-between">
          <strong className="text-gray-500">Issued On:</strong>
          <span>{data.issuedOn}</span>
        </li>
      </ul>
      {/* TODO: Add download/print PDF button */}
      <div className="mt-8 text-center">
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg inline-flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
          </svg>
          <span>Download PDF</span>
        </button>
      </div>
    </div>
  );
} 