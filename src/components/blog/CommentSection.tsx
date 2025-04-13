import { useState } from 'react';
import { motion } from 'framer-motion';

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
  avatar: string;
}

interface CommentSectionProps {
  postId: string;
  comments: Comment[];
}

const CommentSection = ({ comments }: CommentSectionProps) => {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle comment submission
    setNewComment('');
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Comments</h3>
      
      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-12">
        <div className="mb-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
            rows={4}
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-200"
        >
          Post Comment
        </button>
      </form>
      
      {/* Comments List */}
      <div className="space-y-8">
        {comments.map((comment) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-4"
          >
            <img
              src={comment.avatar}
              alt={comment.author}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {comment.author}
                  </h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {comment.date}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {comment.content}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
