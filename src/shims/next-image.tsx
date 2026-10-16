import React, { ImgHTMLAttributes } from 'react';

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt = '',
  fill,
  priority,
  sizes,
  quality,
  style,
  className,
  ...props
}) => {
  const combinedStyle: React.CSSProperties = fill
    ? {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        ...style,
      }
    : { ...style };

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      className={className}
      style={combinedStyle}
      {...props}
    />
  );
};

export default Image;
