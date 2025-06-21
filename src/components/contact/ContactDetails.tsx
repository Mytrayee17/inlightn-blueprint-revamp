import React from 'react';

const contactInfo = [
  {
    icon: '📍',
    title: 'Address',
    details: '2nd Floor, 2-14, New Gajuwaka, Visakhapatnam, AP - 530026',
    link: null,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: '📧',
    title: 'Email',
    details: 'support@inlighntech.com',
    link: 'mailto:support@inlighntech.com',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: '📞',
    title: 'Phone',
    details: '+91 79951 55855',
    link: 'tel:+917995155855',
    color: 'from-green-500 to-emerald-500'
  }
];

export default function ContactDetails() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Get in{' '}
            <span className="bg-gradient-to-r from-inlighn-accent to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Reach out to us through any of these channels. We're here to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100/50 dark:border-slate-700/50 hover:border-slate-200/50 dark:hover:border-slate-600/50"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{item.icon}</span>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
                  {item.title}
                </h3>
                
                {item.link ? (
                  <a
                    href={item.link}
                    className="block text-slate-600 dark:text-slate-300 hover:text-inlighn-accent transition-colors duration-300 leading-relaxed"
                  >
                    {item.details}
                  </a>
                ) : (
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.details}
                  </p>
                )}
              </div>
              
              {/* Subtle glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-3xl blur-xl transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm px-8 py-6 rounded-2xl border border-slate-100/50 dark:border-slate-700/50 shadow-lg">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Business Hours</h3>
            <p className="text-slate-600 dark:text-slate-300">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
            <p className="text-slate-600 dark:text-slate-300">Saturday: 10:00 AM - 4:00 PM IST</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">We typically respond within 24 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
} 