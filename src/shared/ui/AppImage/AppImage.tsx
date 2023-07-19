import {
  ImgHTMLAttributes, ReactElement, memo, useLayoutEffect, useState,
} from 'react';

interface IAppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  fallback?: ReactElement;
  errorFallback?: ReactElement;
}

export const AppImage = memo((props: IAppImageProps) => {
  const {
    className, src, alt = '', fallback, errorFallback, ...rest
  } = props;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  useLayoutEffect(() => {
    const image = new Image();
    image.src = src ?? '';
    image.onload = () => {
      setIsLoading(false);
    };
    image.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
  }, [src]);

  if (isLoading && fallback) {
    return fallback;
  }

  if (hasError && errorFallback) {
    return errorFallback;
  }

  return (
    <img className={className} alt={alt} src={src} {...rest} />
  );
});
