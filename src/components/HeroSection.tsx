import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-glow"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="hero-text">Jaydee</span>
            <br />
            <span className="text-foreground">Designs</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Creative digital experiences through 
            <span className="text-primary font-semibold"> video editing</span>, 
            <span className="text-secondary font-semibold"> web design</span>, and 
            <span className="text-accent font-semibold"> subtitling & quality checking</span>.
            Transforming ideas into stunning visual stories.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link 
              to="/video-editing"
              className="btn-primary flex items-center gap-3 text-lg group"
            >
              Video Editing
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link 
              to="/websites"
              className="btn-primary flex items-center gap-3 text-lg group"
            >
              Websites
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link 
              to="/subtitling-qc"
              className="btn-primary flex items-center gap-3 text-lg group"
            >
              Subtitling QC
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/contact"
              className="btn-primary flex items-center gap-3 text-lg group"
            >
              Get In Touch
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="glass-card p-6 text-center">
              <h3 className="text-lg font-bold text-primary mb-2">Quality Content</h3>
              <p className="text-muted-foreground">Quickly</p>
            </div>
            <div className="glass-card p-6 text-center">
              <h3 className="text-lg font-bold text-secondary mb-2">Options For All</h3>
              <p className="text-muted-foreground">Budgets</p>
            </div>
            <div className="glass-card p-6 text-center">
              <h3 className="text-lg font-bold text-accent mb-2">Creative & Ethical</h3>
              <p className="text-muted-foreground">Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;