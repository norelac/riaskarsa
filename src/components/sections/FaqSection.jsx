"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqData } from "@/data/faqData";
import useScrollReveal from "@/hooks/useScrollReveal";

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="border border-border rounded-[20px] overflow-hidden bg-surface card-hover cursor-default">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-surface-dark/5"
      >
        <span className="font-sans text-sm md:text-base font-medium text-text-main pr-4">
          {item.question}
        </span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-text-muted transition-transform duration-300 ease-out ${
            isOpen ? "rotate-180 text-primary" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-5 pt-0 border-t border-border">
          <p className="font-sans text-sm text-text-muted leading-relaxed mt-4">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openId, setOpenId] = useState(null);
  const headerRef = useScrollReveal();
  const listRef = useScrollReveal({ threshold: 0.1 });

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-background section-pad scroll-mt-24">
      <div className="container-rias">
        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="heading-section mb-4">
            Pertanyaan Umum
          </h2>
          <p className="text-sm md:text-base text-text-on-dark/80 leading-relaxed">
            Temukan jawaban atas pertanyaan yang sering ditanyakan seputar
            Rias Karsa.
          </p>
        </div>

        {/* FAQ List */}
        <div ref={listRef} className="reveal max-w-2xl mx-auto flex flex-col gap-3">
          {faqData.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
