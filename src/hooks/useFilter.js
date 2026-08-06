"use client";

import { useState, useMemo } from "react";

export default function useFilter(initialList) {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("all");
  const [style, setStyle] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const filteredList = useMemo(() => {
    return initialList.filter((item) => {
      // 1. Search filter (nama / spesialisasi)
      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.specialties.some((s) => s.toLowerCase().includes(search.toLowerCase()));

      // 2. City filter
      const matchesCity = city === "all" || item.city.toLowerCase() === city.toLowerCase();

      // 3. Style filter
      const matchesStyle = style === "all" || item.style.toLowerCase() === style.toLowerCase();

      // 4. Price range filter
      // low (< 500k), medium (500k - 1.5M), high (> 1.5M)
      let matchesPrice = true;
      if (priceRange !== "all") {
        if (priceRange === "low") {
          matchesPrice = item.price < 500000;
        } else if (priceRange === "medium") {
          matchesPrice = item.price >= 500000 && item.price <= 1500000;
        } else if (priceRange === "high") {
          matchesPrice = item.price > 1500000;
        }
      }

      return matchesSearch && matchesCity && matchesStyle && matchesPrice;
    });
  }, [initialList, search, city, style, priceRange]);

  const resetFilters = () => {
    setSearch("");
    setCity("all");
    setStyle("all");
    setPriceRange("all");
  };

  return {
    filters: { search, city, style, priceRange },
    setSearch,
    setCity,
    setStyle,
    setPriceRange,
    filteredList,
    resetFilters,
  };
}
