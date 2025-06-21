import React from 'react';

export default function VerifyFAQ() {
  const faqList = [
    {
      question: "What if I enter the wrong certificate ID?",
      answer: "You will receive a message saying 'No certificate found.' Please double-check the ID and optional email, then try again."
    },
    {
      question: "Can companies verify candidate certificates here?",
      answer: "Yes, this portal is open to companies, recruiters, and academic institutions for quick verification of credentials."
    },
    {
      question: "How long does verification take?",
      answer: "Verification is instant. As soon as you submit, our system checks the records and provides a result immediately."
    },
    {
      question: "Who do I contact if my certificate isn't found but should be?",
      answer: "Please contact our support team at support@inlighntech.com with your full name, course details, and batch information."
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqList.map((faq, idx) => (
            <details key={idx} className="bg-white rounded-lg p-4 shadow-md group" open={idx === 0}>
              <summary className="cursor-pointer font-semibold text-lg text-gray-800 list-none flex justify-between items-center">
                {faq.question}
                <div className="transform transition-transform duration-200 group-open:rotate-180">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <p className="mt-4 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
} 