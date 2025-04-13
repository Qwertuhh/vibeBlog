import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../common/Logo';

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link to={to} className="relative group">
      <span className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
        {children}
      </span>
      <motion.div
        className="absolute -bottom-1 left-0 h-[2px] bg-zinc-900 dark:bg-zinc-100"
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.2 }}
      />
    </Link>
  );
};

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-4 mt-4">
        <nav className="bg-zinc-100/34 dark:bg-zinc-900/60 backdrop-blur-3xl rounded-2xl shadow-lg shadow-zinc-900/10 dark:shadow-zinc-50/5">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Logo />
              <div className="flex items-center gap-8">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/posts">Post</NavLink>
                <NavLink to="/about">About</NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
