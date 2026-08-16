"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import Image from "next/image";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const total = testimonials.length;
  const headerRef = useScrollReveal();
  const cardRef = useScrollReveal({ threshold: 0.2 });

  const goTo = useCallback(
    (idx) => {
      if (idx === current || isAnimating) return;
      setIsAnimating(true);
      setCurrent(idx);
      setTimeout(() => setIsAnimating(false), 400);
    },
    [current, isAnimating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % total);
  }, [current, total, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + total) % total);
  }, [current, total, goTo]);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const item = testimonials[current];

  return (
    <section className="bg-background section-pad">
      <div className="container-rias">
        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="heading-section mb-4">
            Apa Kata Mereka?
          </h2>
          <p className="text-sm md:text-base text-text-on-dark/80 leading-relaxed">
            Cerita nyata dari anggota komunitas Rias Karsa.
          </p>
        </div>

        {/* Testimonial Card */}
        <div ref={cardRef} className="reveal max-w-3xl mx-auto">
          <div className="bg-surface border border-border rounded-[20px] p-6 md:p-12 text-center relative shadow-soft min-h-[320px] flex flex-col items-center justify-center">
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30 animate-float-delay">
                <Quote size={20} className="text-primary" />
              </div>
            </div>

            {/* Testimonial Text */}
            <p
              key={current}
              className="tab-fade-enter font-sans text-base md:text-lg text-text-main leading-relaxed italic mb-8 max-w-xl mx-auto"
            >
              &ldquo;{item.testimonial}&rdquo;
            </p>

            {/* Author */}
            <div
              key={`author-${current}`}
              className="tab-fade-enter flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-surface-dark border border-border flex items-center justify-center overflow-hidden relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div>
                <p className="font-sans text-sm font-semibold text-text-main">
                  {item.name}
                </p>
                <p className="font-sans text-xs text-text-muted">
                  {item.role}
                </p>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-sm transition-colors duration-300 ${
                      i < item.rating ? "text-primary" : "text-border"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 md:gap-6 mt-8 md:mt-10">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-border bg-surface text-text-main shadow-soft hover:text-primary hover:border-primary hover:bg-primary/5 hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-[3px] focus:ring-primary-ring"
              aria-label="Testimoni sebelumnya"
            >
              <ChevronLeft size={18} className="mx-auto" />
            </button>

            {/* Dots */}
            <div className="flex gap-4 items-center">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`p-5 -m-5 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-[3px] focus:ring-primary-ring ${
                    idx === current
                      ? "bg-primary w-10"
                      : "bg-border hover:bg-primary/30 w-3"
                  }`}
                  aria-label={`Ke testimoni ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-border bg-surface text-text-main shadow-soft hover:text-primary hover:border-primary hover:bg-primary/5 hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-[3px] focus:ring-primary-ring"
              aria-label="Testimoni berikutnya"
            >
              <ChevronRight size={18} className="mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
