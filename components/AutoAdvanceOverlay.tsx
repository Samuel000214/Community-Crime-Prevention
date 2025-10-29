import { motion } from 'motion/react';
import { Pause, Play } from 'lucide-react';
import { Progress } from './ui/progress';

interface AutoAdvanceOverlayProps {
  isPlaying: boolean;
  onToggle: () => void;
  progress: number;
  currentScene: string;
}

export function AutoAdvanceOverlay({ isPlaying, onToggle, progress, currentScene }: AutoAdvanceOverlayProps) {
  return (
    <div className="fixed top-2 sm:top-6 left-2 sm:left-6 z-40 flex items-center gap-2 sm:gap-3">
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggle}
        className="bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-xl border border-blue-200 transition-all"
        title={isPlaying ? 'Pause' : 'Resume'}
      >
        {isPlaying ? (
          <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
        ) : (
          <Play className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
        )}
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        className="hidden sm:flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full pl-2.5 pr-3 py-1.5 shadow-xl border border-blue-200"
      >
        <span className="text-[10px] sm:text-xs text-blue-700 font-medium whitespace-nowrap">
          {currentScene}
        </span>
        <div className="w-20 sm:w-28">
          <Progress value={Math.max(0, Math.min(100, progress))} className="h-1.5" />
        </div>
      </motion.div>
    </div>
  );
}
