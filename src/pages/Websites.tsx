import Navigation from '@/components/Navigation';
import WebsitesSection from '@/components/WebsitesSection';
import ContactSection from '@/components/ContactSection';
import { Helmet } from 'react-helmet-async';

const Websites = () => {
  const canonicalUrl = typeof window !== 'undefined' ? `${window.location.origin}/websites` : '/websites';
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Website Development | Jaydee Designs</title>
        <meta name="description" content="Custom website development and portfolio." />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Navigation />
      <main>
        <header className="sr-only">
          <h1>Website Development</h1>
        </header>
        <WebsitesSection />
        <ContactSection />
      </main>
      <footer className="py-8 px-4 text-center border-t border-border glass-card">
        <p className="text-muted-foreground">© 2024 Jaydee Designs.</p>
      </footer>
    </div>
  );
};

export default Websites;
