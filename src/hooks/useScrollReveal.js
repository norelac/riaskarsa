"use client";

import { useEffect, useRef } from "react";

export default function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const revealChildren = (el) => {
      el.classList.add("visible");
      el.querySelectorAll(".reveal").forEach((child) => {
        child.classList.add("visible");
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          revealChildren(entry.target);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? "0px 0px -20px 0px",
      }
    );

    observer.observe(node);

    // Fallback: if element is already in viewport on mount, reveal immediately
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setTimeout(() => revealChildren(node), 100);
    }

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return ref;
}
