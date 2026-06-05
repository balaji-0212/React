import { useEffect, useState } from 'react';

function readSize() {
  if (typeof window === 'undefined') return { width: 0, height: 0 };
  return { width: window.innerWidth, height: window.innerHeight };
}

export function useWindowSize() {
  const [size, setSize] = useState(readSize);

  useEffect(() => {
    const handleResize = () => setSize(readSize());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}
