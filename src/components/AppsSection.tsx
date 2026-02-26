const AppsSection = () => {
  return (
    <section id="apps" className="pt-20 pb-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 mt-6 pb-1 leading-snug hero-text">
            Apps
          </h2>
          <div className="text-xl text-muted-foreground max-w-4xl mx-auto space-y-6">
           <p>Check out my <a href="https://jaydeedesigns.co.uk/FlagIt" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">FlagIt app</a> for a preview of my app development capabilities.</p>
            <p>More App Previews coming soon.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppsSection;
