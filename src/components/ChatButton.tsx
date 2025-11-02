import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ChatButton: React.FC = () => {
  const navigate = useNavigate();

  const handleChatClick = () => {
    navigate('/contact');
  };

  return (
    <button
      onClick={handleChatClick}
      className="fixed bottom-6 right-6 p-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 z-50 flex items-center justify-center"
      aria-label="Chat with us"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default ChatButton;