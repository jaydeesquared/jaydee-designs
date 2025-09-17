import { useState } from 'react';
import { Mail, MessageSquare, Send, Check, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: 'Please fix the errors below',
        description: 'All fields are required and must be valid.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to Netlify Forms
      const payload: Record<string, string> = {
        'form-name': 'contact',
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(payload),
      });

      toast({
        title: 'Message sent!',
        description: 'Thanks for reaching out. I will get back to you shortly.',
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please email jaydeesquared93@gmail.com directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text">Get In</span> Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your creative vision to life? Let's collaborate on your next project. 
            I'd love to hear about your ideas and how I can help make them reality.
          </p>
          <p className="text-lg text-primary/80 max-w-3xl mx-auto mt-2">Discounted prices for grassroots activist groups.</p>
        </div>

        <div className="max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="glass-card p-8 space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human:
                  <input name="bot-field" onChange={() => {}} />
                </label>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg bg-input border ${
                      errors.name ? 'border-destructive' : 'border-border'
                    } focus:ring-2 focus:ring-primary focus:border-transparent transition-colors`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-destructive flex items-center gap-1">
                      <AlertCircle size={16} />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg bg-input border ${
                      errors.email ? 'border-destructive' : 'border-border'
                    } focus:ring-2 focus:ring-primary focus:border-transparent transition-colors`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-destructive flex items-center gap-1">
                      <AlertCircle size={16} />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg bg-input border ${
                    errors.subject ? 'border-destructive' : 'border-border'
                  } focus:ring-2 focus:ring-primary focus:border-transparent transition-colors`}
                  placeholder="What's your project about?"
                />
                {errors.subject && (
                  <p className="mt-2 text-sm text-destructive flex items-center gap-1">
                    <AlertCircle size={16} />
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg bg-input border ${
                    errors.message ? 'border-destructive' : 'border-border'
                  } focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none`}
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-destructive flex items-center gap-1">
                    <AlertCircle size={16} />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
        </div>

        {/* Email Direct Contact - Moved Below Form */}
        <div className="mt-12 max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="glass-card p-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email Me Directly</h3>
                <p className="text-muted-foreground">Quick response guaranteed</p>
              </div>
            </div>
          <a 
            href="mailto:jaydeesquared93@gmail.com" 
              className="text-primary hover:text-secondary transition-colors text-lg font-medium"
            >
            jaydeesquared93@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;