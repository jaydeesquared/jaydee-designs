import website1 from '@/assets/website-1.jpg';
import website2 from '@/assets/website-2.jpg';
import website3 from '@/assets/website-3.jpg';

const WebsitesSection = () => {
  

  const websites = [
    {
      image: website1,
      title: 'Interactive Climate Hub',
      description: 'Environmental awareness campaign website focused on climate action and sustainability initiatives.',
      videoId: 'fs9WIB7MaSo'
    },
    {
      image: website2,
      title: 'Awareness Campaign Website',
      description: 'Human rights advocacy platform raising awareness about the Uyghur crisis and promoting social justice.',
      videoId: 'BfbIve0OzuQ'
    },
    {
      image: website3,
      title: 'Progressive Resource Website',
      description: 'Political platform promoting progressive policies and social reform initiatives.',
      videoId: '1cE9rx07-w8'
    },
    {
      image: website1,
      title: 'English Tutor Website',
      description: 'Professional English tutoring services with personalised learning programmes and flexible scheduling.',
      videoId: 'BJUfCASMdgI'
    }
  ];


  return (
    <section id="websites" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            <span className="hero-text">Website</span> Development
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Custom web solutions crafted with modern technologies and user-centred design. 
            From e-commerce to enterprise applications, delivering exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {websites.map((website, index) => (
            <div key={index} className="portfolio-item group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="aspect-video mb-6 rounded-lg overflow-hidden bg-muted">
                <iframe
                  src={`https://www.youtube.com/embed/${website.videoId}`}
                  title={website.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {website.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {website.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default WebsitesSection;
