import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Frame1Welcome } from './components/frames/Frame1Welcome';
import { Frame2Prevention } from './components/frames/Frame2Prevention';
import { Frame3Awareness } from './components/frames/Frame3Awareness';
import { Frame4Rehabilitation } from './components/frames/Frame4Rehabilitation';
import { Frame5Reflection } from './components/frames/Frame5Reflection';
import { Frame6Credits } from './components/frames/Frame6Credits';
import { NavigationControls } from './components/NavigationControls';
import { AutoAdvanceOverlay } from './components/AutoAdvanceOverlay';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner';
import { PosterView } from './components/PosterView';
import { Button } from './components/ui/button';

// Detect touch device
const isTouchDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

export default function App() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(!isTouchDevice()); // Auto-play only on non-touch by default
  const [progress, setProgress] = useState(0);
  const [posterMode, setPosterMode] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const autoAdvanceDelay = prefersReducedMotion ? 10000 : 6000; // Slower for reduced motion

  const frames = [
    { component: <Frame1Welcome key="frame1" onNext={() => handleNext()} autoPlay={isAutoPlaying} />, title: "Welcome" },
    { component: <Frame2Prevention key="frame2" autoPlay={isAutoPlaying} />, title: "Barangay Patrol" },
    { component: <Frame3Awareness key="frame3" autoPlay={isAutoPlaying} />, title: "Youth Engagement" },
    { component: <Frame4Rehabilitation key="frame4" autoPlay={isAutoPlaying} />, title: "Rehabilitation" },
    { component: <Frame5Reflection key="frame5" />, title: "Unity & Reflection" },
    { component: <Frame6Credits key="frame6" />, title: "Credits" }
  ];

  const totalFrames = frames.length;

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Prevent default for space key to avoid page scroll
    if (e.code === 'Space' && e.target === document.body) {
      e.preventDefault();
    }

    switch (e.key) {
      case 'ArrowRight':
      case ' ':
        handleNext();
        break;
      case 'ArrowLeft':
        handlePrevious();
        break;
      case 'Home':
        setCurrentFrame(0);
        setProgress(0);
        break;
      case 'End':
        setCurrentFrame(frames.length - 1);
        setProgress(0);
        break;
      case 'p':
      case 'P':
        setPosterMode(prev => !prev);
        break;
      case ' ':
        toggleAutoPlay();
        break;
    }
  }, [currentFrame, frames.length]);

  // Set up keyboard event listeners
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  // Auto-advance logic
  useEffect(() => {
    if (!isAutoPlaying) {
      setProgress(0);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + (100 / (autoAdvanceDelay / 100));
      });
    }, 100);

    const timer = setTimeout(() => {
      if (currentFrame < totalFrames - 1) {
        handleNext();
        setProgress(0);
      } else {
        setIsAutoPlaying(false);
        setProgress(0);
      }
    }, autoAdvanceDelay);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [currentFrame, isAutoPlaying]);


  // Touch event handlers for swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const diff = touchStart - touchEnd;
    const swipeThreshold = 50; // Minimum distance for a swipe
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        handleNext(); // Swipe left
      } else {
        handlePrevious(); // Swipe right
      }
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleNext = () => {
    if (currentFrame < totalFrames - 1) {
      setCurrentFrame(prev => {
        const nextFrame = Math.min(prev + 1, totalFrames - 1);
        // Focus on the main content area for screen readers
        document.getElementById(`frame-${nextFrame}`)?.focus();
        return nextFrame;
      });
      setProgress(0);
    }
  };

  const handlePrevious = () => {
    if (currentFrame > 0) {
      setCurrentFrame(prev => {
        const prevFrame = Math.max(prev - 1, 0);
        // Focus on the main content area for screen readers
        document.getElementById(`frame-${prevFrame}`)?.focus();
        return prevFrame;
      });
      setProgress(0);
    }
  };

  const handleRestart = useCallback(() => {
    setCurrentFrame(0);
    setProgress(0);
    setIsAutoPlaying(true);
    toast.info("🇵🇭 Story restarted");
  }, []);

  const handleHome = useCallback(() => {
    setCurrentFrame(0);
    setProgress(0);
    setIsAutoPlaying(false);
    toast.info("Back to home");
  }, []);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
    setProgress(0);
    toast.info(isAutoPlaying ? "⏸ Paused" : "▶ Playing");
  };

  if (posterMode) {
    return (
      <div className="relative min-h-screen bg-gray-50">
        <div className="fixed top-2 sm:top-4 right-2 sm:right-4 z-50">
          <Button size="sm" variant="outline" onClick={() => setPosterMode(false)} title="Switch to Slides">
            Slides
          </Button>
        </div>
        <PosterView />
        <Toaster position="top-center" />
      </div>
    );
  }

  // Animation variants based on user preference
  const animationVariants = prefersReducedMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 }, exit: { opacity: 1 } }
    : { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-gray-900 touch-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="presentation"
    >
      {/* Frame Content - z-0 */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentFrame}
          id={`frame-${currentFrame}`}
          tabIndex={-1}
          initial={animationVariants.initial}
          animate={animationVariants.animate}
          exit={animationVariants.exit}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3 }}
          className="outline-none"
          role="region"
          aria-label={`Slide ${currentFrame + 1} of ${totalFrames}: ${frames[currentFrame].title}`}
        >
          {frames[currentFrame].component}
        </motion.div>
      </AnimatePresence>

      {/* UI Overlay Layer - Carefully positioned to avoid overlaps */}
      
      {/* Top Left - Pause/Resume - z-50 */}
      <AutoAdvanceOverlay
        isPlaying={isAutoPlaying}
        onToggle={toggleAutoPlay}
        progress={progress}
        currentScene={frames[currentFrame].title}
      />

      {/* Top Center - Assignment Badge - z-40 */}
      <div className="fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg sm:rounded-xl px-3 sm:px-6 py-1.5 sm:py-2.5 shadow-lg z-40 border border-blue-400 max-w-[85%] sm:max-w-none">
        <p className="text-[10px] sm:text-xs whitespace-nowrap">🇵🇭 CLJ1 Assignment • Oct 29, 2025</p>
      </div>

      {/* Top Right - Frame Counter & Controls - z-40 */}
      <div className="fixed top-2 sm:top-4 right-2 sm:right-4 flex items-center gap-2 z-40">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl px-2.5 sm:px-4 py-1.5 sm:py-2.5 shadow-lg border border-gray-200">
          <p className="text-[10px] sm:text-xs">
            <span className="text-blue-600">{currentFrame + 1}</span>/{totalFrames}
          </p>
        </div>
        <button 
          onClick={toggleAutoPlay}
          className="bg-white/95 hover:bg-gray-50 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 shadow-lg border border-gray-200"
          aria-label={isAutoPlaying ? 'Pause auto-advance' : 'Play auto-advance'}
          title={isAutoPlaying ? 'Pause (Space)' : 'Play (Space)'}
        >
          {isAutoPlaying ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>

      <div className="fixed top-2 sm:top-4 right-20 sm:right-28 z-40">
        <Button size="sm" variant="outline" onClick={() => setPosterMode(true)} title="Switch to Poster View">
          Poster
        </Button>
      </div>

      {/* Bottom Navigation - z-40 - Centered with proper clearance */}
      <NavigationControls
        currentFrame={currentFrame}
        totalFrames={totalFrames}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onRestart={handleRestart}
        onHome={handleHome}
      />

      {/* Contextual Messages - z-30 - Above nav controls */}
      {currentFrame > 0 && isAutoPlaying && (
        <div className="fixed bottom-16 sm:bottom-24 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white rounded-lg px-4 sm:px-5 py-1.5 sm:py-2 shadow-lg z-30 max-w-[90%] sm:max-w-md text-center animate-pulse">
          <p className="text-[10px] sm:text-xs">Auto-playing... Use controls to navigate</p>
        </div>
      )}



      {/* Toast Notifications - z-50 */}
      <Toaster position="top-center" />
    </div>
  );
}
