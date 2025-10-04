'use client';
import { Mail, Phone } from "lucide-react";
const ContactLink: React.FC<{
  href: string;
  icon: React.ElementType;
  text: string;
  gradient: string;
}> = ({ href, icon: Icon, text, gradient }) => (
  <a 
    href={href}
    className={`flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r ${gradient} rounded-lg transition-all transform hover:scale-105 hover:shadow-lg text-lg`}
  >
    <Icon size={24} /> {text}
  </a>
);

// Contact Section Component
const ContactSection = () => {
  const contactLinks = [
    { href: "mailto:shinobicode77@gmail.com", icon: Mail, text: "shinobicode77@gmail.com", gradient: "from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" },
    { href: "tel:+2349114608484", icon: Phone, text: "+234 911 460 8484", gradient: "from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
        <p className="text-xl text-gray-300 mb-12">
          Open to junior developer, internship, or freelance opportunities
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {contactLinks.map((link, idx) => (
            <ContactLink key={idx} {...link} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ContactSection;