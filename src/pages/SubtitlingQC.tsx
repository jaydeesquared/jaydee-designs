import Navigation from '@/components/Navigation';
import SubtitlingQCSection from '@/components/SubtitlingQCSection';
import ContactSection from '@/components/ContactSection';
import { Helmet } from 'react-helmet-async';

const SubtitlingQC = () => {
  const canonicalUrl = typeof window !== 'undefined' ? `${window.location.origin}/subtitling-qc` : '/subtitling-qc';
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Subtitling QC | Jaydee Designs</title>
        <meta name="description" content="Professional subtitling, closed-captioning, scripting and quality checking services with 10+ years experience working with Netflix, Disney, Sony, Warner Bros, Sky, Discovery, Amazon Prime and BBC." />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Navigation />
      <main>
        <header className="sr-only">
          <h1>Subtitling QC</h1>
        </header>
        <SubtitlingQCSection />
        <ContactSection />
      </main>
      <footer className="py-8 px-4 text-center border-t border-border glass-card">
        <p className="text-muted-foreground">© 2024 Jaydee Designs.</p>
      </footer>
    </div>
  );
};

export default SubtitlingQC;