"use client";

import { useState, useEffect } from 'react';

interface GlobalPreloaderProps {
  onLoadComplete: () => void;
  allImages?: string[];
  projectData?: any[];
  teamMembers?: any[];
}

export default function GlobalPreloader({ 
  onLoadComplete, 
  allImages = [],
  projectData = [],
  teamMembers = []
}: GlobalPreloaderProps) {
  const [loadedAssets, setLoadedAssets] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [minimumLoadTime, setMinimumLoadTime] = useState(false);
  const [currentLoadingItem, setCurrentLoadingItem] = useState("");
  
  // Collect all images from different sources
  const getAllImageUrls = () => {
    const images = [...allImages];
    
    // Add project images
    projectData.forEach(project => {
      if (project.data?.Images) {
        project.data.Images.forEach((img: any) => {
          if (img.url) images.push(img.url);
        });
      }
    });
    
    // Add team member images
    teamMembers.forEach(member => {
      if (member.image) images.push(member.image);
    });
    
    // Remove duplicates
    return [...new Set(images)];
  };

  const allAssets = getAllImageUrls();
  const totalAssets = allAssets.length;
  const progress = totalAssets > 0 ? Math.min((loadedAssets / totalAssets) * 100, 100) : 100;

  // Ensure minimum loading time for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinimumLoadTime(true);
    }, 1500); // Minimum 1.5 seconds for everything to load

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (totalAssets === 0) {
      setCurrentLoadingItem("Finalizing...");
      return;
    }

    setCurrentLoadingItem("Loading assets...");

    // Preload all images
    let loadedCount = 0;
    const loadPromises = allAssets.map((src, index) => {
      return new Promise<void>((resolve) => {
        const img = new window.Image();
        img.onload = () => {
          loadedCount++;
          setLoadedAssets(loadedCount);
          setCurrentLoadingItem(`Loading... (${loadedCount}/${totalAssets})`);
          resolve();
        };
        img.onerror = () => {
          loadedCount++;
          setLoadedAssets(loadedCount);
          setCurrentLoadingItem(`Loading... (${loadedCount}/${totalAssets})`);
          resolve();
        };
        img.src = src;
      });
    });

    // Add timeout to prevent infinite loading
    Promise.race([
      Promise.all(loadPromises),
      new Promise(resolve => setTimeout(resolve, 10000)) // 10 second timeout
    ]).then(() => {
      setLoadedAssets(totalAssets);
      setCurrentLoadingItem("Complete!");
    });
  }, [allAssets, totalAssets]);

  useEffect(() => {
    const allAssetsLoaded = totalAssets === 0 || loadedAssets >= totalAssets;
    
    if (allAssetsLoaded && minimumLoadTime && !isComplete) {
      setTimeout(() => {
        setIsComplete(true);
        onLoadComplete();
      }, 500);
    }
  }, [loadedAssets, totalAssets, minimumLoadTime, isComplete, onLoadComplete]);

  if (isComplete) return null;

  return (
    <div className="fixed inset-0 bg-[var(--color-black)] z-[9999] flex items-center justify-center">
      <div className="text-center">
        {/* Logo or Brand */}
        <div className="mb-8">
          <h1 className="text-[var(--color-secondary)] text-4xl font-bold tracking-wider">
            PAWENS
          </h1>
          <p className="text-[var(--color-secondary)] text-sm opacity-60 mt-2">
            Portfolio Agency
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
          <div 
            className="h-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-secondary)] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Text */}
        <p className="text-[var(--color-secondary)] text-sm opacity-60 mb-2">
          {Math.round(progress)}%
        </p>
        <p className="text-[var(--color-secondary)] text-xs opacity-40">
          {currentLoadingItem}
        </p>

        {/* Animated Dots */}
        <div className="flex justify-center mt-6 space-x-1">
          <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}
