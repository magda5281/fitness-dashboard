import { useState, useEffect } from 'react';

/**
 *
 * @param breakpoint - The width in pixels at which the layout should switch from mobile to desktop.
 * Default is 768 pixels.
 * @returns
 */
export function useIsMobile(breakpoint: number = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < breakpoint);
    }

    // Check immediately on mount
    handleResize();

    // Listen for window resizes
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
}
