const Footer = () => {
  return (
    <footer className="bg-zinc-50 dark:bg-zinc-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-zinc-500 to-zinc-600 bg-clip-text text-transparent">
              VibeBlog
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              A modern blog platform with stunning 3D elements and seamless interactions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-zinc-800 dark:text-zinc-200">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-500">
                  Latest Posts
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-500">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-500">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-zinc-800 dark:text-zinc-200">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-500">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-500">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-500">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-200 dark:border-zinc-800 mt-8 pt-8 text-center text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} VibeBlog. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
