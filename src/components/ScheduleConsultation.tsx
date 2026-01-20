import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User } from 'lucide-react';

const ScheduleConsultation: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  const today = new Date();
  const month = today.toLocaleString('default', { month: 'long' });
  
  const dates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() + i);
    return {
      day: date.getDate(),
      weekday: date.toLocaleString('default', { weekday: 'short' }).toUpperCase(),
      full: date.toISOString().split('T')[0]
    };
  });
  
  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="bg-gradient-to-br from-primary-900 to-primary-700 rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <User size={52} className="text-secondary-400 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">Rohit agarwal</h3>
                    <p className="text-primary-100">Financial Consultant</p>
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Take Control of Your Finances?
                </h2>
                
                <p className="text-xl text-primary-100 mb-8">
                  Schedule your FREE 30-minute consultation with our expert bookkeeping team today.
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start text-primary-100">
                    <div className="bg-primary-800 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span>Personalized financial assessment</span>
                  </li>
                  <li className="flex items-start text-primary-100">
                    <div className="bg-primary-800 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span>Tax-saving strategies</span>
                  </li>
                  <li className="flex items-start text-primary-100">
                    <div className="bg-primary-800 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span>Bookkeeping system recommendations</span>
                  </li>
                  <li className="flex items-start text-primary-100">
                    <div className="bg-primary-800 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span>Growth planning guidance</span>
                  </li>
                </ul>
                
                <div className="flex items-center text-primary-100">
                  <Clock size={20} className="mr-2" />
                  <span>30 minutes • Virtual Meeting</span>
                </div>
              </div>
              
              <div className="bg-white p-8 md:p-12">
                <h3 className="text-xl font-bold text-primary-900 mb-6">
                  Select a Date & Time
                </h3>
                
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <Calendar size={20} className="text-primary-600 mr-2" />
                    <span className="font-medium">{month}</span>
                  </div>
                  
                  <div className="grid grid-cols-7 gap-2">
                    {dates.slice(0, 7).map((date) => (
                      <button
                        key={date.full}
                        onClick={() => setSelectedDate(date.full)}
                        className={`p-2 rounded-lg transition-colors ${
                          selectedDate === date.full
                            ? 'bg-primary-600 text-white'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <div className="text-xs font-medium">{date.weekday}</div>
                        <div className="text-lg">{date.day}</div>
                      </button>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-7 gap-2 mt-2">
                    {dates.slice(7, 14).map((date) => (
                      <button
                        key={date.full}
                        onClick={() => setSelectedDate(date.full)}
                        className={`p-2 rounded-lg transition-colors ${
                          selectedDate === date.full
                            ? 'bg-primary-600 text-white'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <div className="text-xs font-medium">{date.weekday}</div>
                        <div className="text-lg">{date.day}</div>
                      </button>
                    ))}
                  </div>
                </div>
                
                {selectedDate && (
                  <div>
                    <h4 className="font-medium text-primary-900 mb-3">Available Times</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.slice(0, 6).map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-2 border rounded-md text-sm transition-colors ${
                            selectedTime === time
                              ? 'bg-primary-600 text-white border-primary-600'
                              : 'border-gray-300 hover:border-primary-400'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedTime && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-8"
                  >
                    <div className="space-y-4 mb-6">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                      />
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-blue-400 hover:bg-secondary-600 text-white font-medium py-3 px-4 rounded-md transition-colors"
                    >
                      Schedule Consultation
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleConsultation;