import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-800">
      <div className="fixed inset-0 z-0"></div>

      <Header />
      <main className="flex-grow relative z-10 h-screen">
        {isHomePage? (
          children
        ) : (
          <div className="flex-grow mx-auto relative z-10 backdrop-blur-sm">
            {children}
          </div>
        )}
      </main>
      {!isHomePage && <Footer />}
    </div>
  );
};

export default Layout;
