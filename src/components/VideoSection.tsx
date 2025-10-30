import { Play, ExternalLink } from 'lucide-react';

const VideoSection = () => {
  const videos = [
    {
      url: 'https://youtu.be/glMgKYBMkAU',
      title: 'Music Video with VFX and Transitions',
      description: "High-energy music video featuring advanced visual effects and seamless transitions. Creative use of VFX to mimick the VHS opening credits of HBO's Succession.",
      techniques: ['Visual Effects', 'Transition Design', 'Music Video']
    },
    {
      url: 'https://youtu.be/9xH3KlkBNSw',
      title: 'Lyric Video Demo',
      description: 'Professional lyric video demonstration with animated text and visual effects. Perfect synchronisation between music and typography for engaging content.',
      techniques: ['Typography Animation', 'Lyric Sync', 'Text Effects']
    },
    {
      url: 'https://youtu.be/XtZxUojvEQg',
      title: 'Lyric Video Inside Text',
      description: 'Creative lyric video using inside-text effects for modern music presentation and animation experimentation.',
      techniques: ['Text Effects', 'Modern Animation', 'Music Video']
    },
    {
      url: 'https://youtu.be/Irx1Tymn2gs',
      title: 'Karaoke Subtitled Wedding Video',
      description: 'Wedding celebration video with karaoke subtitles and emotional moments. Creating memorable keepsakes with professional subtitle integration and heartfelt editing.',
      techniques: ['Subtitle Design', 'Wedding Editing', 'Emotional Flow']
    },
    {
      url: 'https://youtu.be/KSDkzQUe2is',
      title: 'Short Form Activist Content',
      description: 'Documentary-style summary of climate activism with informative subtitles. Powerful storytelling focused on environmental awareness and social impact.',
      techniques: ['Documentary Style', 'Subtitle Integration', 'Social Impact']
    },
    {
      url: 'https://youtu.be/qLdwM71ZrjQ',
      title: 'Multi-Angle Piano with Karaoke',
      description: 'Piano performance captured from multiple angles with karaoke-style lyrics. Professional multi-camera editing showcasing musical performance with sing-along elements.',
      techniques: ['Multi-Angle', 'Piano Performance', 'Karaoke Style']
    }
  ];

  const getYouTubeId = (url: string) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  return (
    <section id="videos" className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 mt-6">
            <span className="hero-text">Video Editing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional video editing showcasing expertise in storytelling, visual effects, 
            and post-production techniques across various genres and styles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => {
            const youtubeId = getYouTubeId(video.url);
            return (
              <div key={index} className="portfolio-item group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-video mb-6 rounded-lg overflow-hidden bg-muted">
                  {youtubeId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${youtubeId}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Play size={48} className="text-muted-foreground" />
                    </div>
                  )}
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <a 
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {video.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {video.techniques.map((technique, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {technique}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;