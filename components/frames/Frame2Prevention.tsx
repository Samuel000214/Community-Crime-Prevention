import { motion } from 'motion/react';
import { Shield, Lightbulb, Users, Eye, MapPin, TrendingDown, Heart } from 'lucide-react';
import { InteractiveIcon } from '../InteractiveIcon';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState, useEffect } from 'react';

interface Frame2PreventionProps {
  autoPlay?: boolean;
}

export function Frame2Prevention({ autoPlay = false }: Frame2PreventionProps) {
  const [highlightedElement, setHighlightedElement] = useState<number | null>(null);

  useEffect(() => {
    if (autoPlay) {
      const timer = setTimeout(() => setHighlightedElement(0), 2000);
      const timer2 = setTimeout(() => setHighlightedElement(null), 4000);
      return () => {
        clearTimeout(timer);
        clearTimeout(timer2);
      };
    }
  }, [autoPlay]);

  return (
    <motion.div
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
      className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50"
    >
      {/* Content Container - with proper padding to avoid nav overlap */}
      <div className="h-full pt-14 sm:pt-20 pb-20 sm:pb-28 px-4 sm:px-8 overflow-y-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-6 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-700 to-blue-900 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-xl mb-3">
            <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400 flex-shrink-0" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl">Barangay Patrol & Community Policing</h2>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 px-4">Crime Prevention Through Active Community Patrols</p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 max-w-7xl mx-auto">
          {/* Left: Image Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-600">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1679507828705-1ea34c319c7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaGlsaXBwaW5lJTIwcG9saWNlJTIwcGF0cm9sJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2MTc1MjM0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Philippine Police Patrol - Community Policing"
                className="w-full h-48 sm:h-64 lg:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-900/20 to-transparent" />
              
              {/* Zoom highlight effect for auto-play */}
              {autoPlay && highlightedElement === 0 && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-blue-900/60 backdrop-blur-sm"
                >
                  <div className="bg-blue-600 p-10 rounded-full shadow-2xl">
                    <Lightbulb className="w-20 h-20 text-yellow-300" />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Philippine Setting Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-blue-200"
            >
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-900 mb-1">
                    <strong>Philippine Barangay Setting</strong>
                  </p>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Barangay tanods wearing blue "Barangay Peacekeeping Action Team" vests • Streetlights illuminating community roads • Tricycles and sari-sari stores • Barangay hall with Philippine flag
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Interactive Elements & Research */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl text-blue-900 mb-4"
            >
              Key Crime Prevention Elements
            </motion.h3>

            {/* Interactive Icons */}
            <div className="grid grid-cols-2 gap-5">
              <InteractiveIcon
                icon={Lightbulb}
                tooltip="Well-lit barangay streets reduce crime. Community lighting projects are a priority in Philippine barangays."
                color="#1E3A8A"
                delay={0.6}
              />
              <InteractiveIcon
                icon={Users}
                tooltip="Barangay Peacekeeping Action Teams provide 24/7 vigilance and rapid response to incidents."
                color="#22C55E"
                delay={0.7}
              />
              <InteractiveIcon
                icon={Eye}
                tooltip="Community cooperation and neighborhood watch programs build trust and collective responsibility for safety."
                color="#FACC15"
                delay={0.8}
              />
              <InteractiveIcon
                icon={Heart}
                tooltip="Clean-up drives create community pride and ownership, discouraging vandalism and crime."
                color="#DC2626"
                delay={0.9}
              />
            </div>

            {/* Research Citation - CORRECT SOURCE */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="bg-gradient-to-br from-green-50 to-emerald-100 border-l-4 border-green-600 p-5 rounded-xl shadow-lg"
            >
              <div className="flex items-start gap-3 mb-2">
                <div className="bg-green-600 rounded-full p-1.5">
                  <TrendingDown className="w-4 h-4 text-white" />
                </div>
                <p className="text-xs text-gray-700">
                  <strong>📚 Verified Philippine Research Finding:</strong>
                </p>
              </div>
              <p className="text-sm text-gray-800 italic mb-3 leading-relaxed">
                "Barangay community policing in <strong>Ilocos Norte</strong> increased resident trust and lowered fear of crime."
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span>Source:</span>
                <span className="text-green-700">Pola, A. et al. (2025)</span>
                <span>•</span>
                <span>SCIRP Journal of Social Sciences</span>
              </div>
            </motion.div>

            {/* Main Caption */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="bg-gradient-to-r from-blue-100 to-cyan-100 border-l-4 border-blue-600 p-6 rounded-xl shadow-lg"
            >
              <p className="text-lg italic text-gray-800 leading-relaxed">
                "Clean, well-lit, and united barangays discourage crime through active patrols and cooperation."
              </p>
            </motion.div>

            {/* Impact Stats */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="grid grid-cols-3 gap-3"
            >
              <div className="bg-white rounded-xl p-4 text-center shadow-md border border-blue-100">
                <div className="text-3xl mb-1">↑</div>
                <p className="text-xs text-gray-600">Increased Trust</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-md border border-green-100">
                <div className="text-3xl mb-1">↓</div>
                <p className="text-xs text-gray-600">Lower Fear</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-md border border-yellow-100">
                <div className="text-2xl mb-1">🇵🇭</div>
                <p className="text-xs text-gray-600">Ilocos Norte</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
