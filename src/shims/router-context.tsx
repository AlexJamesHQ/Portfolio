import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface RouterContextType {
  pathname: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  pathname: '/',
  navigate: () => {},
});

export const RouterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pathname, setPathname] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path === '/projects' || path === '/about') {
        return path;
      }
      if (window.location.hash === '#projects' || window.location.hash === '#/projects') {
        return '/projects';
      }
      if (window.location.hash === '#about' || window.location.hash === '#/about') {
        return '/about';
      }
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/projects' || path === '/about' || path === '/') {
        setPathname(path);
      } else if (window.location.hash) {
        const hash = window.location.hash.replace('#', '').replace('/', '');
        if (hash === 'projects' || hash === 'about') {
          setPathname(`/${hash}`);
        } else {
          setPathname('/');
        }
      } else {
        setPathname('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string) => {
    if (to.startsWith('http') || to.startsWith('mailto:')) {
      window.location.href = to;
      return;
    }
    const target = to.split('?')[0].split('#')[0] || '/';
    setPathname(target);
    try {
      window.history.pushState({}, '', to);
    } catch (e) {
      // Fallback
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ pathname, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const ctx = useContext(RouterContext);
  return {
    push: (href: string) => ctx.navigate(href),
    replace: (href: string) => ctx.navigate(href),
    pathname: ctx.pathname,
  };
};

export const usePathname = () => {
  const ctx = useContext(RouterContext);
  return ctx.pathname;
};
