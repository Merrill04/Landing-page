'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Cutting-edge drone solutions for photography, surveying, and aerial inspections. Experience innovation that takes your vision to new heights.";
  
  useEffect(() => {
    const words = fullText.split(' ');
    let currentIndex = 0;
    
    // Start animation after 5 seconds
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex < words.length) {
          setDisplayedText(prev => 
            prev + (prev ? ' ' : '') + words[currentIndex]
          );
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 150); // Each word appears every 150ms
      
      return () => clearInterval(interval);
    }, 5000);
    
    return () => clearTimeout(startDelay);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/dronevideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          {/* Left Side - Company Name */}
          <div className="flex items-center">
            <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight">
              VyomGuard
              <span className="block text-4xl lg:text-5xl font-normal mt-4 text-gray-300">
                Drones
              </span>
            </h1>
          </div>
          
          {/* Right Side - Animated Description */}
          <div className="flex items-center">
            <p className="text-xl lg:text-2xl text-white leading-relaxed min-h-[200px]">
              {displayedText}
              {displayedText && displayedText !== fullText && (
                <span className="inline-block w-1 h-6 bg-white ml-1 animate-pulse" />
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}