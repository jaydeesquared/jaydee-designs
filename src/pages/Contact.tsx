import Navigation from '@/components/Navigation';
import ContactSection from '@/components/ContactSection';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const canonicalUrl = typeof window !== 'undefined' ? `${window.location.origin}/contact` : '/contact';
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Contact | Jaydee Designs</title>
        <meta name="description" content="Get in touch with Jaydee Designs for video editing, web development, and subtitling services." />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Navigation />
      <main>
        <header className="sr-only">
          <h1>Contact</h1>
        </header>
        <ContactSection />
      </main>
      <footer className="py-8 px-4 text-center border-t border-border glass-card">
        <p className="text-muted-foreground">© 2024 Jaydee Designs.</p>
      </footer>
    </div>
  );
};

export default Contact;
