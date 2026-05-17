import { useState, useEffect } from 'react';

function useTheme() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    const saved = window.localStorage.getItem('portfolio-theme');
    if (saved) return saved === 'dark';
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches || false;
  });

  useEffect(() => {
    const theme = dark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', theme);
    window.localStorage.setItem('portfolio-theme', theme);
  }, [dark]);

  const toggleTheme = () => {
    setDark((prevDark) => !prevDark);
  };

  return { dark, toggleTheme };
}

export default useTheme;