import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, User, ChevronDown, ChevronUp } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  fullContent?: string;
  tags?: string[];
  relatedLinks?: { title: string; url: string }[];
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  image,
  author,
  date,
  readTime,
  category,
  fullContent,
  tags,
  relatedLinks
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-primary-500 text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        
        <AnimatePresence>
          {isExpanded && fullContent && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="prose prose-sm max-w-none text-gray-700">
                  {fullContent.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-3">{paragraph}</p>
                  ))}
                </div>
                
                {tags && tags.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Tags:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {relatedLinks && relatedLinks.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Related Resources:</h4>
                    <ul className="space-y-1">
                      {relatedLinks.map((link, index) => (
                        <li key={index}>
                          <a 
                            href={link.url} 
                            className="text-primary-600 hover:text-primary-800 text-sm underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="flex items-center text-sm text-gray-500">
          <div className="flex items-center mr-4">
            <User size={14} className="mr-1" />
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{readTime}</span>
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-400">{date}</div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={toggleExpanded}
          className="mt-4 text-primary-600 font-medium hover:text-primary-800 flex items-center"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
          {isExpanded ? (
            <ChevronUp size={16} className="ml-1" />
          ) : (
            <ChevronDown size={16} className="ml-1" />
          )}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default BlogCard;