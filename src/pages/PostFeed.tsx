import { useState } from 'react';
import { motion } from 'framer-motion';
import PostCard from '../components/blog/PostCard';
import Space from '../components/common/Space';

// Mock data - Replace with your actual data source
const mockPosts = [
  {
    id: '1',
    title: 'Getting Started with React',
    excerpt: 'Learn the basics of React and start building modern web applications.',
    category: 'React',
    date: 'April 13, 2024',
    author: 'John Doe',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
    content: 'Full article content here...'
  },
  {
    id: '2',
    title: 'TypeScript Best Practices',
    excerpt: 'Discover TypeScript best practices for large-scale applications.',
    category: 'TypeScript',
    date: 'April 12, 2024',
    author: 'Jane Smith',
    imageUrl: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656',
    content: 'Full article content here...'
  },
  // Add more mock posts...
];

const categories = ['All', 'React', 'TypeScript', 'JavaScript', 'Web Development'];
const sortOptions = ['Latest', 'Oldest', 'Most Popular'];

const PostFeed = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('Latest');

  // Filter and sort posts
  const filteredPosts = mockPosts
    .filter(post => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'Oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'Most Popular':
          // Add your popularity logic here
          return 0;
        default: // Latest
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <Space />
      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8 space-y-6"
        >
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-4 pl-12 rounded-xl bg-zinc-100/50 dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:outline-none julius-sans-one-regular"
            />
            <svg
              className="absolute left-4 top-4 h-6 w-6 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Filters Row */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-colors julius-sans-one-regular ${
                    selectedCategory === category
                      ? 'bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="ml-auto px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 julius-sans-one-regular"
              aria-label="Sort posts by"
            >
              {sortOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Posts Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map(post => (
            <PostCard key={post.id} {...post} />
          ))}
        </motion.div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 text-zinc-500 dark:text-zinc-400 julius-sans-one-regular"
          >
            No posts found matching your criteria.
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PostFeed;
