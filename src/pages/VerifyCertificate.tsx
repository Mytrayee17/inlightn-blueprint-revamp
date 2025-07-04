import VerifyHero from '@/components/verify/VerifyHero';
import VerifyForm from '@/components/verify/VerifyForm';
import CertificateResultCard from '@/components/verify/CertificateResultCard';
import VerifyFAQ from '@/components/verify/VerifyFAQ';
import { useState } from 'react';
import { Certificate } from '@/data/certificateMockData';

export default function VerifyCertificatePage() {
  const [certificateData, setCertificateData] = useState<Certificate | null>(null);

  return (
    <div className="bg-white">
      <VerifyHero />
      <VerifyForm setCertificateData={setCertificateData} />
      {certificateData && <CertificateResultCard data={certificateData} />}
      <VerifyFAQ />
    </div>
  );
} 