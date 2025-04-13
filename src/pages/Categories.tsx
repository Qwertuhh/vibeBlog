import { motion } from "framer-motion";

// Mock data - replace with real data later
const categories = [
  {
    id: "1",
    name: "Design",
    description: "UI/UX design principles and best practices",
    postCount: 12,
    color: "from-blue-500 to-purple-500",
  },
  {
    id: "2",
    name: "Technology",
    description: "Latest tech trends and innovations",
    postCount: 8,
    color: "from-green-500 to-teal-500",
  },
  {
    id: "3",
    name: "Development",
    description: "Coding tutorials and development tips",
    postCount: 15,
    color: "from-orange-500 to-red-500",
  },
  {
    id: "4",
    name: "Productivity",
    description: "Tools and tips for better productivity",
    postCount: 6,
    color: "from-purple-500 to-pink-500",
  },
];

const Categories = () => {
  return (
    <div>
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl font-bold mb-8 text-gray-900 dark:text-white"
      >
        Categories
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-75 group-hover:opacity-85 transition-opacity`}
            />

            <div className="relative p-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                {category.name}
              </h2>

              <p className="text-white/90 mb-4">{category.description}</p>

              <div className="flex items-center justify-between">
                <span className="text-white/80">
                  {category.postCount} posts
                </span>

                <button className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg backdrop-blur-sm transition-colors">
                  View Posts
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
