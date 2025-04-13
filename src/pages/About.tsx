import { motion } from 'framer-motion';
import Space from '../components/common/Space';
import GithubIcon from '../assets/social/github.svg';
import LinkedinIcon from '../assets/social/linkedin.svg';
import TwitterIcon from '../assets/social/twitter.svg';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Founder & Editor',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    bio: 'Tech enthusiast and writer with 10+ years of experience in web development.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Jane Smith',
    role: 'Lead Developer',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
    bio: 'Full-stack developer passionate about creating seamless user experiences.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Mike Johnson',
    role: 'Content Strategist',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
    bio: 'Content expert focused on creating engaging and informative tech articles.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <Space />
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-zinc-100 playfair-display-regular">
            About VibeBlog
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto julius-sans-one-regular">
            A modern blogging platform where technology meets creativity. We share insights, tutorials, and the latest trends in web development and design.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 playfair-display-regular">
              Our Mission
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 julius-sans-one-regular">
              We believe in making technology accessible and engaging. Our platform combines beautiful design with insightful content to create an immersive learning experience.
            </p>
            <ul className="space-y-4 text-zinc-600 dark:text-zinc-400 julius-sans-one-regular">
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-zinc-900 dark:text-zinc-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Share knowledge and experiences
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-zinc-900 dark:text-zinc-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Foster a community of learners
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-zinc-900 dark:text-zinc-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Inspire through innovation
              </li>
            </ul>
          </div>
          <div className="relative h-[300px] md:h-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-700 rounded-2xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-600 rounded-2xl"></div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-12 text-zinc-900 dark:text-zinc-100 playfair-display-regular">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto mb-4 rounded-full"
                />
                <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-100 playfair-display-regular">
                  {member.name}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-2 julius-sans-one-regular">
                  {member.role}
                </p>
                <p className="text-zinc-500 dark:text-zinc-500 mb-4 julius-sans-one-regular">
                  {member.bio}
                </p>
                <div className="flex gap-4 mt-4">
                  <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-900 dark:text-white">
                    <img src={GithubIcon} alt="GitHub" className="w-6 h-6" />
                  </a>
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-900 dark:text-white">
                    <img src={LinkedinIcon} alt="LinkedIn" className="w-6 h-6" />
                  </a>
                  <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-900 dark:text-white">
                    <img src={TwitterIcon} alt="Twitter" className="w-6 h-6" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-100 playfair-display-regular">
            Get in Touch
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto julius-sans-one-regular">
            Have questions or want to collaborate? We'd love to hear from you.
          </p>
          <a
            href="mailto:contact@vibeblog.com"
            className="inline-flex items-center px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 rounded-full hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors julius-sans-one-regular"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
