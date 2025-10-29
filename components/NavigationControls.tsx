import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, RotateCcw, Home } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationControlsProps {
  currentFrame: number;
  totalFrames: number;
  onPrevious: () => void;
  onNext: () => void;
  onRestart: () => void;
  onHome: () => void;
}

export function NavigationControls({
  currentFrame,
  totalFrames,
  onPrevious,
  onNext,
  onRestart,
  onHome
}: NavigationControlsProps) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
      className="fixed bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-40 w-[95%] sm:w-auto max-w-2xl"
    >
      <div className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-2xl border border-gray-200 px-2 sm:px-4 py-2 sm:py-3">
        <div className="flex items-center justify-center gap-1 sm:gap-2">
          {/* Home Button */}
          <Button
            onClick={onHome}
            variant="ghost"
            size="sm"
            className="rounded-lg sm:rounded-xl hover:bg-blue-50 transition-all p-2 sm:p-2.5"
            disabled={currentFrame === 0}
            title="Go to Home"
          >
            <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Button>

          {/* Divider */}
          <div className="w-px h-5 sm:h-6 bg-gray-300" />

          {/* Previous Button */}
          <Button
            onClick={onPrevious}
            variant="ghost"
            size="sm"
            disabled={currentFrame === 0}
            className="rounded-lg sm:rounded-xl hover:bg-blue-50 transition-all p-2 sm:p-2.5 flex items-center gap-0.5 sm:gap-1"
            title="Previous Scene"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-[10px] sm:text-xs hidden sm:inline">Back</span>
          </Button>

          {/* Progress Dots */}
          <div className="flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-3">
            {Array.from({ length: totalFrames }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7 + index * 0.05 }}
                className={`rounded-full transition-all duration-300 ${
                  index === currentFrame
                    ? 'w-6 sm:w-8 h-1.5 sm:h-2 bg-blue-600'
                    : index < currentFrame
                    ? 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-500'
                    : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <Button
            onClick={onNext}
            variant="ghost"
            size="sm"
            disabled={currentFrame === totalFrames - 1}
            className="rounded-lg sm:rounded-xl hover:bg-blue-50 transition-all p-2 sm:p-2.5 flex items-center gap-0.5 sm:gap-1"
            title="Next Scene"
          >
            <span className="text-[10px] sm:text-xs hidden sm:inline">Next</span>
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>

          {/* Divider */}
          <div className="w-px h-5 sm:h-6 bg-gray-300" />

          {/* Restart Button */}
          <Button
            onClick={onRestart}
            variant="ghost"
            size="sm"
            className="rounded-lg sm:rounded-xl hover:bg-green-50 text-green-700 transition-all p-2 sm:p-2.5"
            title="Restart Presentation"
          >
            <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
