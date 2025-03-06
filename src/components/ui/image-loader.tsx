
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ImageLoaderProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: React.ReactNode;
  containerClassName?: string;
}

export function ImageLoader({
  src,
  alt,
  className,
  containerClassName,
  fallback,
  loading = "lazy",
  ...props
}: ImageLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Reset state when src changes
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {(!isLoaded || hasError) && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          {fallback || 
            <div className="w-8 h-8 border-4 border-secondary/20 border-t-secondary rounded-full animate-spin"></div>
          }
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={cn(
          "transition-opacity duration-300",
          isLoaded && !hasError ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
}
