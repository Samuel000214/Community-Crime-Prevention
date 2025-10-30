import { motion } from 'motion/react';
import { Lightbulb, GraduationCap, Megaphone, Heart, MapPin, TrendingUp, Users } from 'lucide-react';
import { InteractiveIcon } from '../InteractiveIcon';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState, useEffect } from 'react';

interface Frame3AwarenessProps {
  autoPlay?: boolean;
}

export function Frame3Awareness({ autoPlay = false }: Frame3AwarenessProps) {
  const [muralRevealed, setMuralRevealed] = useState(false);

  useEffect(() => {
    if (autoPlay) {
      const timer = setTimeout(() => setMuralRevealed(true), 2000);
      const timer2 = setTimeout(() => setMuralRevealed(false), 5000);
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
      className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50"
    >
      {/* Content Container */}
      <div className="h-full pt-14 sm:pt-20 pb-20 sm:pb-28 px-4 sm:px-8 overflow-y-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-6 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-xl mb-3">
            <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl">Awareness & Youth Engagement</h2>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 px-4">Prevention Through Education and Youth Empowerment</p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 max-w-7xl mx-auto">
          {/* Left: Interactive Mural */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl text-amber-900 mb-4"
            >
              {autoPlay ? "Anti-Drug Youth Campaign" : "Interactive Mural • Hover to Reveal"}
            </motion.h3>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative"
              onMouseEnter={() => !autoPlay && setMuralRevealed(true)}
              onMouseLeave={() => !autoPlay && setMuralRevealed(false)}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-500 cursor-pointer">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1724315069759-3bac28f679f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaGlsaXBwaW5lJTIwanVzdGljZSUyMGNvdXJ0cm9vbSUyMGdhdmVsfGVufDF8fHx8MTc2MTc1MjM0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Philippine Justice System - Youth Legal Awareness"
                  className="w-full h-48 sm:h-64 lg:h-80 object-cover"
                />
                
                {/* Hover Glow Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: muralRevealed ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400/50 to-orange-500/50 backdrop-blur-[2px]"
                />
                
                {/* Revealed Campaign Message */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: muralRevealed ? 1 : 0,
                    opacity: muralRevealed ? 1 : 0
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="absolute inset-0 flex items-center justify-center p-6"
                >
                  <motion.div
                    animate={autoPlay && muralRevealed ? { scale: [1, 1.05, 1] } : {}}
                    transition={{ duration: 0.8, repeat: 2 }}
                    className="bg-white/98 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl max-w-md text-center border-4 border-yellow-400"
                  >
                    <h4 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-yellow-600 mb-3 break-words hyphens-auto px-2 leading-tight">#KabataanKontraDrogaAtTerorismo</h4>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Filipino students in school uniforms painting powerful anti-drug messages on barangay walls
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Philippine Setting Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-yellow-200"
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-900 mb-1">
                    <strong>Philippine Classroom / Covered Court Setting</strong>
                  </p>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Youth volunteers with "Kabataan Kontra Droga" posters • Pulis sa Barangay seminars • Students in school uniforms • Community information drives
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Education Programs & Research */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl text-amber-900 mb-4"
            >
              Education & Awareness Programs
            </motion.h3>

            {/* Interactive Icons */}
            <div className="grid grid-cols-2 gap-5">
              <InteractiveIcon
                icon={GraduationCap}
                tooltip="School seminars with PNP and barangay officials teach students about drug prevention and legal awareness."
                color="#FACC15"
                delay={0.6}
              />
              <InteractiveIcon
                icon={Megaphone}
                tooltip="Anti-drug awareness campaigns using social media, murals, and community events reach thousands of Filipino youth."
                color="#DC2626"
                delay={0.7}
              />
              <InteractiveIcon
                icon={Heart}
                tooltip="Youth sports programs and peer education empower young Filipinos as peace advocates in their communities."
                color="#22C55E"
                delay={0.8}
              />
              <InteractiveIcon
                icon={Users}
                tooltip="Kabataan Kontra Droga at Kriminalidad programs build awareness and resilience among Filipino youth."
                color="#1E3A8A"
                delay={0.9}
              />
            </div>

            {/* Research Citations - TWO CORRECT SOURCES */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="space-y-4"
            >
              {/* Research 1 - Llanto et al. (2024) */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 border-l-4 border-green-600 p-5 rounded-xl shadow-lg">
                <div className="flex items-start gap-3 mb-2">
                  <div className="bg-green-600 rounded-full p-1.5">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-xs text-gray-700">
                    <strong>📚 Research Finding 1:</strong>
                  </p>
                </div>
                <p className="text-sm text-gray-800 italic mb-3 leading-relaxed">
                  "Community awareness programs in <strong>Davao Oriental</strong> greatly improved police–citizen trust."
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span>Source:</span>
                  <span className="text-green-700">Llanto, J. et al. (2024)</span>
                  <span>•</span>
                  <span>Davao Research Journal</span>
                </div>
              </div>

              {/* Research 2 - Enverga (2023) */}
              <div className="bg-gradient-to-br from-blue-50 to-sky-100 border-l-4 border-blue-600 p-5 rounded-xl shadow-lg">
                <div className="flex items-start gap-3 mb-2">
                  <div className="bg-blue-600 rounded-full p-1.5">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-xs text-gray-700">
                    <strong>📚 Research Finding 2:</strong>
                  </p>
                </div>
                <p className="text-sm text-gray-800 italic mb-3 leading-relaxed">
                  "Barangay-led youth seminars and sports programs reduced youth-related offenses."
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span>Source:</span>
                  <span className="text-blue-700">Enverga University (2023)</span>
                  <span>•</span>
                  <span>MSU Enverga Foundation</span>
                </div>
              </div>
            </motion.div>

            {/* Main Caption */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="bg-gradient-to-r from-yellow-100 to-orange-100 border-l-4 border-yellow-600 p-6 rounded-xl shadow-lg"
            >
              <p className="text-lg italic text-gray-800 leading-relaxed">
                "Awareness and education empower the youth to resist drugs, crime, and violence."
              </p>
            </motion.div>

            {/* Program Badges */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              <div className="bg-white rounded-full px-5 py-2 shadow-md border border-blue-200 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-blue-600" />
                <span className="text-xs">Pulis sa Barangay</span>
              </div>
              <div className="bg-white rounded-full px-5 py-2 shadow-md border border-red-200 flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-600" />
                <span className="text-xs">Youth Empowerment</span>
              </div>
              <div className="bg-white rounded-full px-5 py-2 shadow-md border border-yellow-200 flex items-center gap-2">
                <span className="text-xs">🇵🇭 Nationwide Programs</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
