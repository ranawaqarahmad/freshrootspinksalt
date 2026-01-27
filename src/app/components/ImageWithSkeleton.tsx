import { useEffect, useRef, useState } from 'react';

interface ImageWithSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
  imgClassName?: string;
}

export function ImageWithSkeleton({
  wrapperClassName = '',
  imgClassName = '',
  onLoad,
  ...props
}: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, [props.src]);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      <div
        className={`absolute inset-0 bg-stone-200 dark:bg-stone-800 transition-opacity duration-300 pointer-events-none ${
          loaded ? 'opacity-0' : 'opacity-100 animate-pulse'
        }`}
        aria-hidden="true"
      />
      <img
        {...props}
        ref={imgRef}
        onLoad={(event) => {
          setLoaded(true);
          onLoad?.(event);
        }}
        className={`${imgClassName} transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}
