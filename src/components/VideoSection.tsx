import { Play, ExternalLink } from 'lucide-react';

const VideoSection = () => {
  const videos = [
    {
      url: 'https://youtu.be/vKzclZEsT60',
      title: 'Multi-instrumental Music Video',
      description: 'Multi-camera music video featuring various instruments with synchronised editing and creative transitions. Showcasing musical talent through dynamic visual storytelling.',
      techniques: ['Multi-Camera', 'Music Sync', 'Creative Transitions']
    },
    {
      url: 'https://youtu.be/Irx1Tymn2gs',
      title: 'Karaoke Subtitled Wedding Video',
      description: 'Wedding celebration video with karaoke subtitles and emotional moments. Creating memorable keepsakes with professional subtitle integration and heartfelt editing.',
      techniques: ['Subtitle Design', 'Wedding Editing', 'Emotional Flow']
    },
    {
      url: 'https://youtu.be/KSDkzQUe2is',
      title: 'Climate Protest Summary Subtitled',
      description: 'Documentary-style summary of climate activism with informative subtitles. Powerful storytelling focused on environmental awareness and social impact.',
      techniques: ['Documentary Style', 'Subtitle Integration', 'Social Impact']
    },
    {
      url: 'https://youtu.be/mnoADIY8eEQ',
      title: 'Lyric Video Demo',
      description: 'Professional lyric video demonstration with animated text and visual effects. Perfect synchronisation between music and typography for engaging content.',
      techniques: ['Typography Animation', 'Lyric Sync', 'Text Effects']
    },
    {
      url: 'https://youtu.be/glMgKYBMkAU',
      title: 'Music Video with VFX and Transitions',
      description: 'High-energy music video featuring advanced visual effects and seamless transitions. Creative use of VFX to enhance musical performance and artistic vision.',
      techniques: ['Visual Effects', 'Transition Design', 'Music Video']
    },
    {
      url: 'https://youtu.be/qLdwM71ZrjQ',
      title: 'Multi-Angle Piano with Karaoke',
      description: 'Piano performance captured from multiple angles with karaoke-style lyrics. Professional multi-camera editing showcasing musical performance with sing-along elements.',
      techniques: ['Multi-Angle', 'Piano Performance', 'Karaoke Style']
    },
    {
      url: 'https://youtu.be/Em8V4KJj0vk',
      title: 'Media Studies A2 Horror Trailer',
      description: 'Academic horror trailer project demonstrating genre conventions and cinematic techniques. Professional-grade trailer editing for media studies coursework.',
      techniques: ['Horror Genre', 'Trailer Editing', 'Academic Project']
    },
    {
      url: 'https://youtube.com/shorts/LD807v015t4',
      title: 'Short-Form Activist Content',
      description: 'Impactful short-form content designed for social media activism. Concise messaging with powerful visuals optimised for maximum engagement and social change.',
      techniques: ['Activism', 'Short-Form', 'Social Media']
    }
  ];

  const getYouTubeId = (url: string) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  return (
    <section id="videos" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
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