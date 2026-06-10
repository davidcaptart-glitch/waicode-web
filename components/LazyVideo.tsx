"use client";

import { useEffect, useRef, useState } from "react";

type LazyVideoProps = {
  src: string;
  className?: string;
  label: string;
};

/**
 * Autoplaying looped video that only downloads once it approaches the
 * viewport, and pauses while off-screen to save battery and bandwidth.
 */
export default function LazyVideo({ src, className, label }: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const loader = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          loader.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    loader.observe(video);
    return () => loader.disconnect();
  }, []);

  useEffect(() => {
    const video = ref.current;
    if (!video || !load) return;

    const player = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            /* autoplay blocked — poster gradient stays visible */
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 }
    );
    player.observe(video);
    return () => player.disconnect();
  }, [load]);

  return (
    <video
      ref={ref}
      className={className}
      muted
      loop
      playsInline
      preload="none"
      autoPlay
      disablePictureInPicture
      aria-label={label}
      src={load ? src : undefined}
    />
  );
}
