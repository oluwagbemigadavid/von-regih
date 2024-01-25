import { useEffect, useRef } from 'react';

const LazyImage = ({ src, alt }) => {
  const imageRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Load the image when it comes into view
            imageRef.current.src = src;
            observer.disconnect();
          }
        });
      },
      { threshold: 0 } // Adjust the threshold as needed
    );

    observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, [src]);

  return <img ref={imageRef} alt={alt} />;
};

export default LazyImage;