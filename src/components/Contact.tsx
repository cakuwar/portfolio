'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Let&apos;s Connect</h2>
            <p className="text-neutral-600">Looking for a data scientist or applied AI role in Malaysia. Have an opportunity or project in mind?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <p className="text-neutral-600 text-sm mb-2">EMAIL</p>
                <a
                  href="mailto:afiq04aiman10@gmail.com"
                  className="text-black text-lg hover:text-black transition"
                >
                  afiq04aiman10@gmail.com
                </a>
              </div>

              <div>
                <p className="text-neutral-600 text-sm mb-2">PHONE</p>
                <a
                  href="tel:+601156450439"
                  className="text-black text-lg hover:text-black transition"
                >
                  +60 11-5645 0439
                </a>
              </div>

              <div>
                <p className="text-neutral-600 text-sm mb-2">LOCATION</p>
                <p className="text-black text-lg">Kota Bharu, Kelantan, Malaysia</p>
              </div>

              <div>
                <p className="text-neutral-600 text-sm mb-4">CONNECT ON SOCIAL</p>
                <div className="flex gap-4">
                  <a href="https://linkedin.com/in/afiq-aiman-420165281" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-black transition text-2xl">
                    LinkedIn
                  </a>
                  <a href="https://github.com/cakuwar" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-black transition text-2xl">
                    GitHub
                  </a>
                  <a href="mailto:afiq04aiman10@gmail.com" className="text-neutral-600 hover:text-black transition text-2xl">
                    Email
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-neutral-200 text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-600 placeholder-neutral-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-neutral-200 text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-600 placeholder-neutral-500"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-neutral-200 text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-600 placeholder-neutral-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-neutral-200 text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-600 placeholder-neutral-500"
              />
              <button
                type="submit"
                className="w-full bg-black hover:bg-neutral-800 text-white font-semibold py-3 rounded-lg transition"
              >
                {submitted ? 'Message Sent! ✓' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
