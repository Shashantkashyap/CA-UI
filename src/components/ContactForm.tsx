import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Mail, MessageCircle, Tag, Loader2, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';


const ContactForm: React.FC = () => {

  const service_id = "service_2ngatjl"
  const auto_reply_template_id = "template_ujl101u"
  const contact_us_template_id = "template_4gj68h9"
  const PUBLIC_KEY = "HfjstsbOuioabFME_";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // 1️⃣ Admin Notification Email (tumko)
    await emailjs.send(
      service_id,
      contact_us_template_id,
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      PUBLIC_KEY
    );

    // 2️⃣ Auto Reply Email (user ko)
    await emailjs.send(
      service_id,
      auto_reply_template_id,
      {
        name: formData.name,
        email: formData.email,
        year: new Date().getFullYear(),
      },
      PUBLIC_KEY
    );

    // ✅ Success
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

  } catch (error) {
    console.error("EmailJS Error:", error);
    alert("❌ Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      viewport={{ once: true }}
      className="bg-white backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-10 relative overflow-hidden"
    >
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-white opacity-70"></div>
      
      {/* Form Content */}
      <div className="relative z-10">
        <motion.h3 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-outfit font-bold text-gray-900 mb-2"
        >
          Get In Touch
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 mb-8 font-outfit"
        >
          We'll get back to you within 24 hours
        </motion.p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="group"
          >
            <label htmlFor="name" className="flex items-center text-sm font-medium text-gray-700 mb-2 font-outfit">
              <User size={16} className="mr-2 text-blue-600" />
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none font-outfit placeholder:text-gray-400"
              placeholder="John Doe"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="group"
          >
            <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700 mb-2 font-outfit">
              <Mail size={16} className="mr-2 text-blue-600" />
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none font-outfit placeholder:text-gray-400"
              placeholder="john@example.com"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="group"
          >
            <label htmlFor="subject" className="flex items-center text-sm font-medium text-gray-700 mb-2 font-outfit">
              <Tag size={16} className="mr-2 text-blue-600" />
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none font-outfit appearance-none bg-white"
            >
              <option value="">Select a subject</option>
              <option value="Tax & Accounting Services">Tax & Accounting Services</option>
              <option value="Business Advisory">Business Advisory</option>
              <option value="Audit & Assurance">Audit & Assurance</option>
              <option value="Financial Planning">Financial Planning</option>
              <option value="Other Services">Other Services</option>
            </select>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="group"
          >
            <label htmlFor="message" className="flex items-center text-sm font-medium text-gray-700 mb-2 font-outfit">
              <MessageCircle size={16} className="mr-2 text-blue-600" />
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none font-outfit placeholder:text-gray-400 resize-none"
              placeholder="Tell us about your requirements..."
            ></textarea>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 font-outfit disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={20} className="mr-2" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </motion.div>
        </form>

        {/* Success Message */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-95 backdrop-blur-sm"
            >
              <div className="text-center p-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4"
                >
                  <Check size={32} className="text-green-600" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-outfit">Thank You!</h3>
                <p className="text-gray-600 mb-6 font-outfit">Your message has been sent successfully. We'll get back to you soon.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-blue-600 hover:text-blue-700 font-medium font-outfit"
                >
                  Send another message
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
  
};

export default ContactForm;