import React, { useState, useEffect } from 'react';
import products from './data/products';
import Home from './pages/Home';
import Women from './pages/Women';
import Men from './pages/Men';

export default function App() {
  const getPath = () => {
    // Support pathname or hash-based routing (#/women)
    const hash = window.location.hash.replace(/^#/, '');
    if (hash === '/women' || hash === 'women') return '/women';
    if (hash === '/men' || hash === 'men') return '/men';

    const pathname = window.location.pathname;
    if (pathname.includes('/women')) return '/women';
    if (pathname.includes('/men')) return '/men';
    return '/';
  };

  const [currentPath, setCurrentPath] = useState(getPath());

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getPath());
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigate = (path) => {
    window.history.pushState(null, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  // Render appropriate page
  if (currentPath === '/women') {
    return <Women products={products} onNavigate={navigate} />;
  }

  if (currentPath === '/men') {
    return <Men products={products} onNavigate={navigate} />;
  }

  return <Home products={products} onNavigate={navigate} />;
}
