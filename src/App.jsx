import React, { useState, useEffect } from 'react';
import products from './data/products';
import Home from './pages/Home';
import Women from './pages/Women';
import Men from './pages/Men';
import { Analytics } from '@vercel/analytics/react';

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

  // Decide which page to display
  let page;

  if (currentPath === '/women') {
    page = <Women products={products} onNavigate={navigate} />;
  } else if (currentPath === '/men') {
    page = <Men products={products} onNavigate={navigate} />;
  } else {
    page = <Home products={products} onNavigate={navigate} />;
  }

  return (
    <>
      {page}
      <Analytics />
    </>
  );
}