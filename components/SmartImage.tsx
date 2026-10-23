"use client";

import { useEffect, useRef, useState } from "react";

type SmartImageProps = {
  src: string;
  alt: string;
};

const isVideo = (src: string) => /\.(mp4|webm|ogg)$/i.test(src);

/**
 * Renders an <img> or <video> for a file served from public. If the file is not
 * there yet, the element is removed and its parent gets the `image-missing`
 * class so the layout keeps a placeholder box instead of a broken icon.
 */
export default function SmartImage({ src, alt }: SmartImageProps) {
  const [missing, setMissing] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted by user agent policies
      });
    }
  }, [src]);

  function handleError(event: React.SyntheticEvent<HTMLElement>) {
    event.currentTarget.parentElement?.classList.add("image-missing");
    setMissing(true);
  }

  if (missing) {
    return null;
  }

  if (isVideo(src)) {
    return (
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
        onError={handleError}
      >
        <source src={src} type={src.endsWith(".webm") ? "video/webm" : "video/mp4"} />
      </video>
    );
  }

  return <img src={src} alt={alt} onError={handleError} />;
}
