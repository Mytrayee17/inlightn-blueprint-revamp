import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactDetails from '@/components/contact/ContactDetails';
import EmbeddedMap from '@/components/contact/EmbeddedMap';
import ContactCTA from '@/components/contact/ContactCTA';

export default function ContactUsPage() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <Navigation />
      <main>
        <ContactHero />
        <ContactForm />
        <ContactDetails />
        <EmbeddedMap />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
} 