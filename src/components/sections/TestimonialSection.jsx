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

  const goTo = useCallback((idx) => {
    if (idx === current || isAnimating) return;
    setIsAnimating(true);
    setCurrent(idx);
    setTimeout(() => setIsAnimating(false), 400);
  }, [current, isAnimating]);

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
    <section className="bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-main mb-4">
            Apa Kata Mereka?
          </h2>
          <p className="text-base md:text-lg text-text-muted leading-relaxed">
            Cerita nyata dari anggota komunitas Rias Karsa.
          </p>
        </div>

        {/* Testimonial Card */}
        <div ref={cardRef} className="reveal max-w-3xl mx-auto">
          <div className="bg-white rounded-md border border-border p-8 md:p-12 text-center relative shadow-soft min-h-[320px] flex flex-col items-center justify-center">
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center animate-float-delay">
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
              <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center overflow-hidden relative">
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
                <p className="font-sans text-xs text-text-muted">{item.role}</p>
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
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center text-text-muted hover:text-text-main hover:border-primary hover:scale-110 transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === current ? "bg-primary w-6" : "bg-border hover:bg-supporting-light w-2"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center text-text-muted hover:text-text-main hover:border-primary hover:scale-110 transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
