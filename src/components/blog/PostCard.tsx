import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface PostCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
}

const PostCard = ({ id, title, excerpt, category, date, imageUrl }: PostCardProps) => {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-zinc-50 dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 text-sm rounded-full julius-sans-one-regular">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-2 julius-sans-one-regular">
          {date}
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-100 playfair-display-regular">
          <Link to={`/post/${id}`} className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
            {title}
          </Link>
        </h3>
        
        <p className="text-zinc-600 dark:text-zinc-300 mb-4 julius-sans-one-regular">
          {excerpt}
        </p>
        
        <Link 
          to={`/post/${id}`}
          className="inline-flex items-center text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors julius-sans-one-regular"
        >
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.article>
  );
};

export default PostCard;
