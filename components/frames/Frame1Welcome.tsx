import { motion } from 'motion/react';
import { Sun, Home, Flag, Bird, Users, Crown } from 'lucide-react';
import { Button } from '../ui/button';

interface Frame1WelcomeProps {
  onNext: () => void;
  autoPlay?: boolean;
}

export function Frame1Welcome({ onNext, autoPlay = false }: Frame1WelcomeProps) {
  const leader = "Campion";
  
  const teamMembers = [
    "Bagas",
    "Carcido", 
    "Idulsa Jacob",
    "Dumangas",
    "Rosilem",
    "Magallanes Francis"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-blue-900 via-blue-700 to-amber-100"
    >
      {/* Animated Sun with Glow - positioned to avoid overlap */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        exit={{ scale: 2, opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute top-20 sm:top-16 right-1/4 pointer-events-none"
      >
        <div className="relative">
          <Sun className="w-60 sm:w-80 h-60 sm:h-80 text-yellow-300" />
          <div className="absolute inset-0 blur-3xl bg-yellow-400/30 rounded-full" />
        </div>
      </motion.div>

      {/* Flying Birds */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ x: -100, y: 100 + i * 50, opacity: 0 }}
          animate={{ x: 1200, y: 50 + i * 30, opacity: 0.3 }}
          transition={{
            duration: 12,
            delay: i * 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute"
        >
          <Bird className="w-6 h-6 text-gray-800" />
        </motion.div>
      ))}

      {/* Barangay Houses Silhouettes - at very bottom */}
      <div className="hidden">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 0.25 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ delay: 0.5 + i * 0.08, duration: 0.6 }}
          >
            <Home 
              className="text-amber-900" 
              style={{ 
                width: `${40 + (i % 3) * 12}px`, 
                height: `${40 + (i % 3) * 12}px` 
              }} 
            />
          </motion.div>
        ))}
      </div>

      {/* Philippine Flag Icon - positioned to avoid overlap with play/pause button */}
      <motion.div
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0, rotate: 45 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 150 }}
        className="absolute top-16 sm:top-6 left-16 sm:left-6 z-5"
      >
        <div className="relative">
          <Flag className="w-8 h-8 sm:w-12 sm:h-12 text-red-600 drop-shadow-lg" />
          <div className="absolute inset-0 blur-md bg-red-600/30" />
        </div>
      </motion.div>

      {/* Main Content - Centered with proper padding to avoid top/bottom overlaps */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-8 pt-16 sm:pt-20 pb-48 sm:pb-56">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center max-w-5xl w-full"
        >
          {/* Philippine Flag Emoji */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-4 sm:mb-6 mt-2 sm:mt-0"
          >
            <span className="text-6xl sm:text-8xl drop-shadow-2xl">🇵🇭</span>
          </motion.div>

          {/* Title with Flag Colors */}
          <div className="flex items-center justify-center gap-2 sm:gap-6 mb-6 sm:mb-8">
            <motion.div
              animate={{ scaleY: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 sm:w-2.5 h-12 sm:h-20 bg-blue-600 rounded-full shadow-lg"
            />
            
            <h1 className="text-3xl sm:text-5xl lg:text-7xl text-white drop-shadow-2xl sm:whitespace-nowrap">
              <span className="text-yellow-400">Bayanihan</span>
              <span className="text-white mx-1 sm:mx-3">sa</span>
              <span className="text-blue-200">Kapayapaan</span>
            </h1>
            
            <motion.div
              animate={{ scaleY: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
              className="w-1.5 sm:w-2.5 h-12 sm:h-20 bg-red-600 rounded-full shadow-lg"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-base sm:text-xl lg:text-2xl text-white/95 drop-shadow-lg max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed px-4 text-balance"
          >
            How the Filipino Community Builds Peace and Prevents Crime
          </motion.p>

          {/* Flag Color Stripes */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
          >
            <div className="w-12 sm:w-20 h-1 sm:h-1.5 bg-blue-600 rounded-full shadow-md"></div>
            <div className="w-12 sm:w-20 h-1 sm:h-1.5 bg-yellow-400 rounded-full shadow-md"></div>
            <div className="w-12 sm:w-20 h-1 sm:h-1.5 bg-red-600 rounded-full shadow-md"></div>
          </motion.div>

          {/* Start Button */}
          {!autoPlay && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 150 }}
            >
              <Button
                onClick={onNext}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 sm:px-14 py-5 sm:py-7 text-base sm:text-xl rounded-full shadow-2xl transform transition-all hover:scale-105"
              >
                ▶ Start Journey
              </Button>
            </motion.div>
          )}

          {/* Auto-play indicator */}
          {autoPlay && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/80 text-sm sm:text-lg flex items-center gap-2 justify-center"
            >
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span>Auto-advancing...</span>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Group Members - Bottom (above navigation controls with proper clearance) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-28 sm:bottom-36 md:bottom-40 left-3 right-3 sm:left-6 sm:right-6 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-xl border border-gray-200 max-w-4xl mx-auto z-20"
      >
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
          <p className="text-xs sm:text-sm text-gray-800">CLJ1 Project Team</p>
        </div>
        
        {/* Leader */}
        <div className="mb-3 sm:mb-4 bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 rounded-lg p-2 sm:p-3">
          <div className="flex items-center gap-2">
            <Crown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-600" />
            <p className="text-xs sm:text-sm">
              <strong className="text-gray-900">Team Leader:</strong> 
              <span className="text-gray-800 ml-1 sm:ml-2">{leader}</span>
            </p>
          </div>
        </div>

        {/* Members */}
        <div>
          <p className="text-[10px] sm:text-xs text-gray-600 mb-2">Team Members:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1.5 sm:gap-2">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-blue-50 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-center border border-blue-200">
                <p className="text-[10px] sm:text-xs text-gray-900">{member}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
