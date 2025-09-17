import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  const canonicalUrl = typeof window !== 'undefined' ? `${window.location.origin}/` : '/';
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Jaydee Designs | Video editing and website development</title>
        <meta name="description" content="Video editing and website development portfolio." />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Navigation />
      <main>
        <HeroSection />
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-border glass-card">
        <p className="text-muted-foreground">
          © 2024 Jaydee Designs.
        </p>
      </footer>
    </div>
  );
};

export default Index;
