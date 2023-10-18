import { useState, useEffect } from 'react';

const useMediaQuery = (mediaQueryString: string): boolean | undefined => {
  const [matches, setMatches] = useState<boolean>();

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString);
    const listener = (): React.SetStateAction<void> => {
      return setMatches(mediaQueryList.matches === true);
    };
    listener();
    mediaQueryList.addEventListener('change', listener);
    return () => mediaQueryList.removeEventListener('change', listener);
  }, [mediaQueryString]);

  return matches;
};

export default useMediaQuery;
