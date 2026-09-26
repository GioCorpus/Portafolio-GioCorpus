import { useState } from 'react';
import { personal } from '../data/personal';
import { socialLinks } from '../data/social';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';
import { Card } from './ui/Card';
import { Github, Linkedin, Twitter, Mail, Send, CheckCircle, AlertCircle, Loader2, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';

const socialIcons = { github: Github, linkedin: Linkedin, twitter: Twitter, mail: Mail };

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error' | 'demo'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if Web3Forms key is configured
    const web3formsKey = import.meta.env.VITE_WEB3FORMS_KEY;
    if (!web3formsKey || web3formsKey === 'YOUR_WEB3FORMS_KEY') {
      // Demo mode - form doesn't actually submit
      setStatus('demo');
      setErrorMessage('Demo mode: Form submission is disabled. Please use the email link below to contact me directly.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: web3formsKey,
          ...formData,
          subject: `Portfolio Contact: ${formData.subject}`,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} status={status} errorMessage={errorMessage} />
        </div>
      </div>
    </section>
  );
}

function ContactInfo() {
  return (
    <div>
      <div className="mb-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">06 / Contact</p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Let's Collaborate</h2>
        <p className="mt-4 leading-7 text-dark-400 max-w-xl">
          I'm always open to discussing new projects, research collaborations, or technical opportunities.
          Whether you have a question about quantum computing, distributed systems, or just want to say hello.
        </p>
      </div>

      <div className="space-y-6">
        {socialLinks.map((social) => {
          const Icon = socialIcons[social.icon as keyof typeof socialIcons];
          return (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 glass-panel rounded-xl transition-all duration-300 hover:border-accent-cyan/30 hover:bg-accent-cyan/5">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-green/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6 text-accent-cyan" aria-hidden="true" />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-dark-500">{social.name}</p>
                <p className="text-sm text-white truncate max-w-xs">{social.url.replace(/^https?:\/\//, '')}</p>
              </div>
              <ExternalLink className="ml-auto w-5 h-5 text-dark-500 group-hover:text-accent-cyan transition-colors" aria-hidden="true" />
            </a>
          );
        })}
      </div>
    </div>
  );
}

interface ContactFormProps {
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  formData: { name: string; email: string; subject: string; message: string };
  status: 'idle' | 'submitting' | 'success' | 'error';
  errorMessage: string;
}

function ContactForm({ handleSubmit, handleChange, formData, status, errorMessage }: ContactFormProps) {
  return (
    <div className="relative">
      <div className="relative glow-border rounded-2xl p-1">
        <Card padding="lg">
          <h3 className="font-display text-xl font-bold text-white mb-6">Send a Message</h3>
          
          {status === 'success' && (
            <div className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center gap-3 text-green-400 animate-fade-in">
              <CheckCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="font-medium">Message Sent!</p>
                <p className="text-sm">I'll get back to you as soon as possible.</p>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center gap-3 text-red-400 animate-fade-in">
              <AlertCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm">{errorMessage}</p>
            </div>
          )}

          {status === 'demo' && (
            <div className="mb-6 p-4 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center gap-3 text-amber-400 animate-fade-in">
              <AlertCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="font-medium">Demo Mode</p>
                <p className="text-sm">{errorMessage}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                disabled={status === 'submitting'}
                autoComplete="name"
              />
              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                disabled={status === 'submitting'}
                autoComplete="email"
              />
            </div>
            <Input
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project inquiry, collaboration, etc."
              required
              disabled={status === 'submitting'}
            />
            <Textarea
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or idea..."
              rows={5}
              required
              disabled={status === 'submitting'}
            />
            <Button type="submit" size="lg" className="w-full" loading={status === 'submitting'}>
              {status === 'submitting' ? (
                <>
                  <Loader2 className="mr-2 w-4 h-4 animate-spin" aria-hidden="true" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 w-4 h-4" aria-hidden="true" />
                </>
              )}
            </Button>
            <p className="text-center text-xs text-dark-500">
              By submitting this form, you agree to receive a response via email.
            </p>
          </form>
        </Card>
      </div>
    </div>
  );
}