 import { useState, useEffect} from 'react';

 export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState(undefined);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", resizeThrottler);


    let resizeTimeout;

    function resizeThrottler() {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(() => {
          resizeTimeout = null;
          handleResize();
        }, 200);
      }
    }

    handleResize();

    return () => window.removeEventListener("resize", resizeThrottler);
  }, []);

  return windowSize;
}
