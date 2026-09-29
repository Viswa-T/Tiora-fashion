import React, { useState, useEffect, useRef, useCallback } from 'react';

const SLIDES = [
  {
    id: 1,
    tagline: 'TRENDY FASHION FINDS\nFOR EVERY YOU',
    line1: 'Find',
    line2: 'Feel',
    line3: 'Flex ✦',
    subtitle: "Curated outfits. Everyday style.\nLooks you'll love.",
    cta: 'EXPLORE NOW →',
    target: '/discover',
    image: '/products/women/women-002.jpg',
    imageAlt: 'TIORA Editorial Fashion Look 1',
    bgColor: '#EBE3DA',
    imgPosition: 'center 20%'
  },
  {
    id: 2,
    tagline: 'NEW SEASON ARRIVALS\nFOR EVERY VIBE',
    line1: 'Clean',
    line2: 'Urban',
    line3: 'Vibe ✦',
    subtitle: 'Contemporary silhouettes.\nEffortless casual wear.',
    cta: 'EXPLORE NOW →',
    target: '/discover',
    image: '/products/men-cover.jpg',
    imageAlt: 'TIORA Editorial Fashion Look 2',
    bgColor: '#E6DED5',
    imgPosition: 'center 15%'
  },
  {
    id: 3,
    tagline: 'EVERYDAY AESTHETICS\nCURATED DAILY',
    line1: 'Daily',
    line2: 'Capsule',
    line3: 'Fit ✦',
    subtitle: 'Handpicked wardrobe essentials.\nDirect links to Amazon.',
    cta: 'EXPLORE NOW →',
    target: '/discover',
    image: '/products/women/women-017.jpg',
    imageAlt: 'TIORA Editorial Fashion Look 3',
    bgColor: '#EDE6DE',
    imgPosition: 'center 25%'
  },
  {
    id: 4,
    tagline: 'ELEVATED ESSENTIALS\nHEAD TO TOE',
    line1: 'Elevate',
    line2: 'Style',
    line3: 'Shine ✦',
    subtitle: 'Discover trending pieces.\nExpress your aesthetic effortlessly.',
    cta: 'EXPLORE NOW →',
    target: '/discover',
    image: '/products/women-cover.jpg',
    imageAlt: 'TIORA Editorial Fashion Look 4',
    bgColor: '#EAE1D7',
    imgPosition: 'center 20%'
  }
];

export default function HeroCarousel({ onNavigate }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartXRef = useRef(null);
  const touchEndXRef = useRef(null);
  const autoplayTimerRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);


  // Autoplay functionality
  useEffect(() => {

    autoplayTimerRef.current = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [nextSlide]);

  
  // Touch swipe support
  const handleTouchStart = (e) => {
    
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    
    if (!touchStartXRef.current || !touchEndXRef.current) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  const handleCtaClick = (e, target) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(target);
    } else {
      window.history.pushState(null, '', target);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <section
      className="tiora-hero-section"
      aria-label="Hero Carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="tiora-hero-container">
        {SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`tiora-hero-slide ${isActive ? 'active' : ''}`}
              style={{ backgroundColor: slide.bgColor }}
              aria-hidden={!isActive}
            >
              {/* Left/Overlay Editorial Content */}
              <div className="tiora-hero-content">
                <p className="tiora-hero-tagline">
                  {slide.tagline.split('\n').map((line, i) => (
                    <span key={i} className="tiora-hero-tagline-line">
                      {line}
                    </span>
                  ))}
                </p>

                <h2 className="tiora-hero-title">
                  <span className="tiora-hero-title-word">{slide.line1}</span>
                  <span className="tiora-hero-title-word">{slide.line2}</span>
                  <span className="tiora-hero-title-word tiora-hero-title-star">
                    {slide.line3}
                  </span>
                </h2>

                <p className="tiora-hero-subtitle">
                  {slide.subtitle.split('\n').map((line, i) => (
                    <span key={i} className="tiora-hero-sub-line">
                      {line}
                    </span>
                  ))}
                </p>

                <button
                  type="button"
                  className="tiora-hero-cta"
                  onClick={(e) => handleCtaClick(e, slide.target)}
                  aria-label={`${slide.cta} - Go to fashion discovery`}
                >
                  <span>{slide.cta}</span>
                </button>
              </div>

              {/* Right Fashion Model Image */}
              <div className="tiora-hero-image-wrap">
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  className="tiora-hero-image"
                  style={{ objectPosition: slide.imgPosition }}
                  loading="eager"
                />
              </div>
            </div>
          );
        })}

        {/* Carousel Pagination Dots */}
        <div className="tiora-hero-pagination" role="tablist" aria-label="Slides">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={index === currentSlide}
              aria-label={`Go to slide ${index + 1}`}
              className={`tiora-hero-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
