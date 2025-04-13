import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Space from '../components/common/Space';

// Mock data - Replace with your actual data source
const mockPosts = [
  {
    id: '1',
    title: 'Getting Started with React',
    content: 'Full article content here with more details about React...',
    category: 'React',
    date: 'April 13, 2024',
    author: 'John Doe',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
  },
  {
    id: '2',
    title: 'TypeScript Best Practices',
    content: 'TypeScript adds optional static types to JavaScript. It can help you catch errors early through a type system and enable you to safely refactor and maintain your code. Here are some best practices when working with TypeScript...',
    category: 'TypeScript',
    date: 'April 13, 2024',
    author: 'Jane Smith',
    imageUrl: 'https://images.unsplash.com/photo-1580894894513-541e068a3e2b',
  },
];

const mockComments = [
  {
    id: '1',
    postId: '1',
    author: 'Alice Johnson',
    content: 'Great article! Very helpful for beginners.',
    date: 'April 13, 2024',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice'
  },
  {
    id: '2',
    postId: '1',
    author: 'Bob Smith',
    content: 'Thanks for sharing these insights!',
    date: 'April 13, 2024',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob'
  },
  {
    id: '3',
    postId: '2',
    author: 'Carol White',
    content: 'TypeScript has been a game-changer for our team.',
    date: 'April 13, 2024',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carol'
  },
];

interface Post {
  id: string;
  title: string;
  content: string;
  category: string;
  date: string;
  author: string;
  imageUrl: string;
}

interface Comment {
  id: string;
  postId: string;
  author: string;
  content: string;
  date: string;
  avatar: string;
}

const Post = () => {
  const { id } = useParams();
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<Comment[]>(mockComments);

  // Find the post
  const post: Post | undefined = mockPosts.find(p => p.id === id);

  // If post not found, redirect to posts page
  if (!post) {
    return <Navigate to="/posts" replace />;
  }

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !id) return;

    const comment: Comment = {
      id: String(comments.length + 1),
      postId: id,
      author: 'Guest User',
      content: newComment,
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=Guest${comments.length}`
    };

    setComments([...comments, comment]);
    setNewComment('');
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <Space />
      <motion.article 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto px-4 py-8"
      >
        {/* Post Header */}
        <motion.div 
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 rounded-full mb-4 julius-sans-one-regular">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100 playfair-display-regular">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-zinc-600 dark:text-zinc-400 julius-sans-one-regular">
            <span>{post.date}</span>
            <span>•</span>
            <span>By {post.author}</span>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.img 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-2xl mb-8"
        />

        {/* Post Content */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="dark:text-white prose-zinc prose-lg dark:prose-invert max-w-none mb-12 julius-sans-one-regular"
        >
          {post.content}
        </motion.div>

        {/* Comments Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mt-12 border-t border-zinc-200 dark:border-zinc-700 pt-8"
        >
          <h2 className="text-2xl font-bold mb-8 text-zinc-900 dark:text-zinc-100 playfair-display-regular">
            Comments ({comments.filter(c => c.postId === id).length})
          </h2>

          {/* Add Comment Form */}
          <form onSubmit={handleAddComment} className="mb-8">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="w-full p-4 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:outline-none min-h-[100px] julius-sans-one-regular"
            />
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 rounded-full hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors julius-sans-one-regular"
            >
              Post Comment
            </button>
          </form>

          {/* Comments List */}
          <div className="space-y-6 mb-12">
            {comments
              .filter(comment => comment.postId === id)
              .map(comment => (
                <motion.div
                  key={comment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-4 p-6 rounded-xl bg-zinc-50 dark:bg-zinc-800/50"
                >
                  <img
                    src={comment.avatar}
                    alt={comment.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-zinc-900 dark:text-zinc-100 julius-sans-one-regular">
                        {comment.author}
                      </span>
                      <span className="text-sm text-zinc-500 dark:text-zinc-400 julius-sans-one-regular">
                        {comment.date}
                      </span>
                    </div>
                    <p className="text-zinc-700 dark:text-zinc-300 julius-sans-one-regular">
                      {comment.content}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </motion.article>
    </div>
  );
};

export default Post;
