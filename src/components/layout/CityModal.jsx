'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { getBannerDateForCity } from '@/lib/eventConstants';

const CITY_SELECTION_KEY = 'aws-community-day-city-selected';

const CITIES = [
  { id: 'vancouver', label: 'Vancouver' },
  { id: 'toronto', label: 'Toronto' },
];

export default function CityModal() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);

  const search = searchParams?.toString() ?? '';

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(search);
    const hasCityInUrl = params.has('city');
    const hasSelectedCity = sessionStorage.getItem(CITY_SELECTION_KEY) === 'true';

    if (hasCityInUrl || hasSelectedCity) {
      return;
    }

    const t = window.setTimeout(() => {
      setOpen(true);
      document.body.style.overflow = 'hidden';
    }, 300);

    return () => {
      window.clearTimeout(t);
    };
  }, [search]);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = '';
    }
  }, [open]);

  const selectCity = (city) => {
    sessionStorage.setItem(CITY_SELECTION_KEY, 'true');
    setOpen(false);
    document.body.style.overflow = '';

    const params = new URLSearchParams(searchParams?.toString() || '');
    params.set('city', city);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="city-modal-title">
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" aria-hidden />
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        <h2
          id="city-modal-title"
          className="font-heroDate text-2xl md:text-3xl font-extrabold text-center text-text-primary mb-2">
          Select Your City
        </h2>
        <p className="text-center text-text-primary/80 text-sm md:text-base mb-8 font-body">
          Choose your location to see city-specific event information
        </p>
        <div className="flex flex-col gap-4">
          {CITIES.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => selectCity(id)}
              className="flex flex-col items-center rounded-xl border-2 border-black/10 bg-white px-6 py-5 text-center font-body transition-all hover:border-[#232F3E] hover:bg-black/[0.03] hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#232F3E]">
              <span className="font-heroDate text-lg md:text-xl font-extrabold text-text-primary">
                {label}
              </span>
              <span className="mt-1 text-sm text-text-primary/70">
                {getBannerDateForCity(id)}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
