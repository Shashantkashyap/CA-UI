import React from 'react';
import { motion } from 'framer-motion';
import Banner from '../components/Banner';
import ClientTestimonials from '../components/ClientTestimonials';
import VideoTestimonials from '../components/VideoTestimonials';
import ProcessSteps from '../components/ProcessSteps';
import ScheduleConsultation from '../components/ScheduleConsultation';
import ChatButton from '../components/ChatButton';


const handleChatClick = () => {
  window.location.href = '/contact';
};

const ConsultationPage: React.FC = () => {
  const bannerImage = "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <div className='pt-20'>
      <Banner 
        title="Schedule Your Free Consultation" 
        subtitle="Take the first step towards optimizing your business finances" 
        backgroundImage={bannerImage}
        height="h-[40vh]"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Why Choose SNA?
            </h2>
            <div className="w-20 h-1 bg-secondary-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join hundreds of satisfied clients who trust us with their bookkeeping and accounting needs. Schedule your free consultation today and discover how we can help your business thrive.
            </p>
          </motion.div>
        </div>
      </section>
      
      <ProcessSteps />
      
      <VideoTestimonials />
      
      <ClientTestimonials />

      <div id="schedule-consultation">
        <ScheduleConsultation />
      </div>
      
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Financial Management?
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Book your free consultation now and let's discuss how we can help you achieve your financial goals.
            </p>
            <p className="text-lg text-primary-200">
              Our expert team is ready to provide you with personalized solutions tailored to your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      <ChatButton />

    </div>
  );
};

export default ConsultationPage;