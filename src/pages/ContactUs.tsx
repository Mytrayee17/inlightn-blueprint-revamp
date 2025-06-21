import React from 'react';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactDetails from '@/components/contact/ContactDetails';
import EmbeddedMap from '@/components/contact/EmbeddedMap';
import ContactCTA from '@/components/contact/ContactCTA';

export default function ContactUsPage() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <main>
        <ContactHero />
        <ContactForm />
        <ContactDetails />
        <EmbeddedMap />
        <ContactCTA />
      </main>
    </div>
  );
} 