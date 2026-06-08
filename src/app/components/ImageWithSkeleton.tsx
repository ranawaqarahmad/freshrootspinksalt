import { useEffect, useRef, useState } from 'react';
import { cloudinaryImageProps } from '../../data/imageUrls';

interface ImageWithSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
  imgClassName?: string;
}

export function ImageWithSkeleton({
  wrapperClassName = '',
  imgClassName = '',
  onLoad,
  sizes,
  src,
  srcSet,
  ...props
}: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const responsiveImageProps =
    typeof src === 'string' && sizes && !srcSet ? cloudinaryImageProps(src, sizes) : { sizes, srcSet };

  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, [src]);

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
        src={src}
        {...responsiveImageProps}
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
