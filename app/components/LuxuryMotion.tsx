'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export function LuxuryMotion() {
  const progressRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const header = document.querySelector<HTMLElement>('.site-header');
    const revealTargets = document.querySelectorAll<HTMLElement>(
      'main > section:not(.hero):not(.page-hero):not(.welcome-strip), .site-footer, .menu-card, .night-menu-card, .photo-grid figure',
    );

    root.classList.add('motion-enhanced');
    revealTargets.forEach((element, index) => {
      element.classList.add('reveal-item');
      element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: prefersReducedMotion ? 0 : 0.12, rootMargin: '0px 0px -7% 0px' },
    );

    revealTargets.forEach((element) => observer.observe(element));

    let ticking = false;
    const updateScrollEffects = () => {
      const scrollTop = window.scrollY;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? scrollTop / scrollable : 0;
      header?.classList.toggle('is-scrolled', scrollTop > 36);
      progressRef.current?.style.setProperty('transform', `scaleX(${progress})`);
      root.style.setProperty('--page-scroll', `${Math.min(scrollTop, 1200)}px`);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateScrollEffects);
    };

    const onPointerMove = (event: PointerEvent) => {
      root.style.setProperty('--pointer-x', `${(event.clientX / window.innerWidth) * 100}%`);
      root.style.setProperty('--pointer-y', `${(event.clientY / window.innerHeight) * 100}%`);
    };

    updateScrollEffects();
    window.addEventListener('scroll', onScroll, { passive: true });
    if (!prefersReducedMotion) window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.requestAnimationFrame(() => root.classList.add('site-entered'));

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, [pathname]);

  return (
    <>
      <div className="page-curtain" aria-hidden="true"><span>Ti Amo</span></div>
      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
    </>
  );
}
