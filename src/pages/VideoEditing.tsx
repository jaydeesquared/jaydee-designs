import Navigation from '@/components/Navigation';
import VideoSection from '@/components/VideoSection';
import ContactSection from '@/components/ContactSection';
import { Helmet } from 'react-helmet-async';

const VideoEditing = () => {
  const canonicalUrl = typeof window !== 'undefined' ? `${window.location.origin}/video-editing` : '/video-editing';
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Video Editing | Jaydee Designs</title>
        <meta name="description" content="Professional video editing services and portfolio." />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Navigation />
      <main>
        <header className="sr-only">
          <h1>Video Editing</h1>
        </header>
        <VideoSection />
        <ContactSection />
      </main>
      <footer className="py-8 px-4 text-center border-t border-border glass-card">
        <p className="text-muted-foreground">© 2024 Jaydee Designs.</p>
      </footer>
    </div>
  );
};

export default VideoEditing;
