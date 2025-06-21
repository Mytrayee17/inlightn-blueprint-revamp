import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navigation';
import ProgramHero from '@/components/programDetail/ProgramHero';
import HighlightsGrid from '@/components/programDetail/HighlightsGrid';
import CurriculumAccordion from '@/components/programDetail/CurriculumAccordion';
import ToolsGrid from '@/components/programDetail/ToolsGrid';
import ProjectsSection from '@/components/programDetail/ProjectsSection';
import MentorSection from '@/components/programDetail/MentorSection';
import PricingSection from '@/components/programDetail/PricingSection';
import FAQAccordion from '@/components/programDetail/FAQAccordion';
import RelatedPrograms from '@/components/programDetail/RelatedPrograms';
import Footer from '@/components/Footer';
import programsData from '@/data/programsData'; // Use default import

export default function ProgramDetailPage() {
  const { slug } = useParams();
  console.log("URL Slug:", slug);
  console.log("Imported programsData:", programsData);
  
  // Find the program data based on slug
  const program = programsData.find(p => p.slug === slug);
  console.log("Found program:", program);
  
  if (!program) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Program Not Found</h1>
            <p className="text-slate-600 mb-8">The program you're looking for doesn't exist.</p>
            <a href="/programs" className="bg-inlighn-accent hover:bg-inlighn-accent-dark text-white px-6 py-3 rounded-xl transition-all">
              View All Programs
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      <ProgramHero 
        title={program.title} 
        subtitle={program.subtitle}
        description={program.description}
        icon={program.icon}
        gradient={program.gradient}
      />
      <HighlightsGrid highlights={program.highlights} />
      <CurriculumAccordion curriculum={program.curriculum} />
      <ToolsGrid tools={program.tools} />
      <ProjectsSection projects={program.projects} />
      <MentorSection mentors={program.mentors} />
      <PricingSection pricing={program.pricing} />
      <FAQAccordion faq={program.faq} />
      <RelatedPrograms currentSlug={program.slug} />
      <Footer />
    </div>
  );
} 