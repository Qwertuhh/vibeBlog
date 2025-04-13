import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link 
        to="/" 
        className="relative inline-block"
      >
        <h2 className="text-3xl font-bold bodoni-moda-regular dark:text-zinc-100">VibeBlog</h2>
      </Link>
    </motion.div>
  );
};

export default Logo;
