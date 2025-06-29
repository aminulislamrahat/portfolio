import React from 'react';
import { MapPin, Phone, Mail, Send, MessageSquare } from 'lucide-react';
import { motion } from "motion/react"

export const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! In a real application, this would send your message.');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Info Card */}
          <motion.div
            className="md:w-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Location */}
              <ContactItem icon={<MapPin />} title="Location" content="San Francisco, California" />

              {/* Email */}
              <ContactItem
                icon={<Mail />}
                title="Email"
                content={<a href="mailto:john@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">john@example.com</a>}
              />

              {/* Phone */}
              <ContactItem
                icon={<Phone />}
                title="Phone"
                content={<a href="tel:+11234567890" className="text-blue-600 dark:text-blue-400 hover:underline">+1 (123) 456-7890</a>}
              />

              {/* WhatsApp */}
              <ContactItem
                icon={<MessageSquare />}
                title="WhatsApp"
                content={<a href="https://wa.me/11234567890" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">+1 (123) 456-7890</a>}
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="md:w-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit}>
              <FormInput id="name" type="text" label="Name" placeholder="Your name" />
              <FormInput id="email" type="email" label="Email" placeholder="Your email" />
              <FormInput id="subject" type="text" label="Subject" placeholder="Subject" />

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  placeholder="Your message"
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                />
              </div>

              <motion.button
                type="submit"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Send size={16} /> Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Reusable Contact Item Component
const ContactItem = ({ icon, title, content }) => (
  <motion.div
    className="flex items-start"
    whileHover={{ x: 5 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4 text-blue-600 dark:text-blue-400">
      {icon}
    </div>
    <div>
      <h4 className="font-medium text-gray-800 dark:text-gray-200">{title}</h4>
      <p className="text-gray-600 dark:text-gray-300">{content}</p>
    </div>
  </motion.div>
);

// Reusable Input Field
const FormInput = ({ id, label, placeholder, type = 'text' }) => (
  <div className="mb-6">
    <label htmlFor={id} className="block text-gray-700 dark:text-gray-300 mb-2">
      {label}
    </label>
    <motion.input
      type={type}
      id={id}
      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
      placeholder={placeholder}
      required
      whileFocus={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
    />
  </div>
);
