import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
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

export default function App() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [posterMode, setPosterMode] = useState(false);
  const autoAdvanceDelay = 6000; // 6 seconds per scene for better viewing

  const frames = [
    { component: <Frame1Welcome key="frame1" onNext={() => handleNext()} autoPlay={isAutoPlaying} />, title: "Welcome" },
    { component: <Frame2Prevention key="frame2" autoPlay={isAutoPlaying} />, title: "Barangay Patrol" },
    { component: <Frame3Awareness key="frame3" autoPlay={isAutoPlaying} />, title: "Youth Engagement" },
    { component: <Frame4Rehabilitation key="frame4" autoPlay={isAutoPlaying} />, title: "Rehabilitation" },
    { component: <Frame5Reflection key="frame5" />, title: "Unity & Reflection" },
    { component: <Frame6Credits key="frame6" />, title: "Credits" }
  ];

  const totalFrames = frames.length;

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

  const handleNext = () => {
    if (currentFrame < totalFrames - 1) {
      setCurrentFrame(currentFrame + 1);
      setProgress(0);
    }
  };

  const handlePrevious = () => {
    if (currentFrame > 0) {
      setCurrentFrame(currentFrame - 1);
      setProgress(0);
    }
  };

  const handleRestart = () => {
    setCurrentFrame(0);
    setProgress(0);
    setIsAutoPlaying(true);
    toast.info("🇵🇭 Story restarted");
  };

  const handleHome = () => {
    setCurrentFrame(0);
    setProgress(0);
    setIsAutoPlaying(false);
    toast.info("Back to home");
  };

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

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Frame Content - z-0 */}
      <AnimatePresence mode="wait">
        {frames[currentFrame].component}
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

      {/* Top Right - Frame Counter - z-40 */}
      <div className="fixed top-2 sm:top-4 right-2 sm:right-4 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl px-2.5 sm:px-4 py-1.5 sm:py-2.5 shadow-lg z-40 border border-gray-200">
        <p className="text-[10px] sm:text-xs">
          <span className="text-blue-600">{currentFrame + 1}</span>/{totalFrames}
        </p>
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
