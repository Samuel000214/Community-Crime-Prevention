import { motion } from 'motion/react';
import { HeartHandshake, Hammer, Sprout, Users, HandHeart, MapPin, TrendingUp, Wrench } from 'lucide-react';
import { InteractiveIcon } from '../InteractiveIcon';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState, useEffect } from 'react';

interface Frame4RehabilitationProps {
  autoPlay?: boolean;
}

export function Frame4Rehabilitation({ autoPlay = false }: Frame4RehabilitationProps) {
  const [handshakeZoom, setHandshakeZoom] = useState(false);

  useEffect(() => {
    if (autoPlay) {
      const timer = setTimeout(() => setHandshakeZoom(true), 2000);
      const timer2 = setTimeout(() => setHandshakeZoom(false), 4500);
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
      className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"
    >
      {/* Handshake Zoom Overlay */}
      {autoPlay && handshakeZoom && (
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-green-900/30 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="bg-green-600 p-16 rounded-full shadow-2xl"
          >
            <HeartHandshake className="w-28 h-28 text-white" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-1/4 bg-white px-6 py-3 rounded-xl shadow-xl"
          >
            <p className="text-lg text-green-700">Compassion + Livelihood = Second Chance</p>
          </motion.div>
        </motion.div>
      )}

      {/* Content Container */}
      <div className="h-full pt-14 sm:pt-20 pb-20 sm:pb-28 px-4 sm:px-8 overflow-y-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-6 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-xl mb-3">
            <HeartHandshake className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl">Rehabilitation & Reintegration</h2>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 px-4">Restoring Lives and Dignity After Offense</p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 max-w-7xl mx-auto">
          {/* Left: Image & Setting */}
          <div className="space-y-4">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-green-600"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1660796116030-6a51a1acdf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWhhYmlsaXRhdGlvbiUyMHRyYWluaW5nJTIwd29ya3Nob3AlMjBza2lsbHN8ZW58MXx8fHwxNzYxNzUyMzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Philippine Rehabilitation - Skills Training Program"
                className="w-full h-48 sm:h-64 lg:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 via-green-900/20 to-transparent" />
              
              {/* Interactive Handshake Icons on Image */}
              <div className="absolute inset-0 flex items-center justify-around p-8">
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.15, type: "spring" }}
                    whileHover={{ scale: 1.2 }}
                    className="cursor-pointer"
                  >
                    <div className="w-14 h-14 bg-green-500/90 rounded-full flex items-center justify-center shadow-xl border-2 border-white">
                      <HeartHandshake className="w-7 h-7 text-white" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Philippine Programs & Organizations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-green-200"
            >
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-900 mb-1">
                    <strong>TESDA Training Center / Barangay Hall</strong>
                  </p>
                  <p className="text-xs text-gray-700 leading-relaxed mb-3">
                    Ex-offenders joining livelihood training programs: carpentry, tailoring, agriculture • Community and NGO support • Skills development for dignified employment
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">TESDA</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">DSWD</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">Barangay LGU</span>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">NGOs</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Programs & Research */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl text-green-900 mb-4"
            >
              Livelihood & Support Programs
            </motion.h3>

            {/* Interactive Icons */}
            <div className="grid grid-cols-2 gap-5">
              <InteractiveIcon
                icon={Hammer}
                tooltip="TESDA carpentry and construction training provide stable employment opportunities for former offenders."
                color="#22C55E"
                delay={0.6}
              />
              <InteractiveIcon
                icon={Wrench}
                tooltip="Tailoring, welding, and technical skills training help rebuild lives through dignified work."
                color="#84CC16"
                delay={0.7}
              />
              <InteractiveIcon
                icon={HandHeart}
                tooltip="Community mentorship pairs ex-offenders with local Filipino business owners and supportive families."
                color="#DC2626"
                delay={0.8}
              />
              <InteractiveIcon
                icon={Users}
                tooltip="Support groups through barangay, church, and DSWD programs ensure successful community reintegration."
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
              {/* Research 1 - Vivares & Cuevas (2023) */}
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
                  "<strong>Ozamiz City's</strong> community support and acceptance help former inmates reintegrate successfully."
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span>Source:</span>
                  <span className="text-green-700">Vivares, D. & Cuevas Jr., C. (2023)</span>
                  <span>•</span>
                  <span>ResearchGate</span>
                </div>
              </div>

              {/* Research 2 - Casinao et al. (2024) */}
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
                  "Community and family support are key to long-term recovery of former dependents."
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span>Source:</span>
                  <span className="text-blue-700">Casinao, E. et al. (2024)</span>
                  <span>•</span>
                  <span>IJISRT Journal</span>
                </div>
              </div>
            </motion.div>

            {/* Main Caption */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="bg-gradient-to-r from-green-100 to-emerald-100 border-l-4 border-green-600 p-6 rounded-xl shadow-lg"
            >
              <p className="text-lg italic text-gray-800 leading-relaxed">
                "Through compassion and livelihood, we rebuild lives and restore dignity."
              </p>
            </motion.div>

            {/* Success Indicators */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="grid grid-cols-3 gap-3"
            >
              <div className="bg-white rounded-xl p-4 text-center shadow-md border border-green-100">
                <div className="text-3xl mb-1">🤝</div>
                <p className="text-xs text-gray-600">Community Support</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-md border border-blue-100">
                <div className="text-3xl mb-1">🛠️</div>
                <p className="text-xs text-gray-600">Skills Training</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-md border border-purple-100">
                <div className="text-3xl mb-1">🇵🇭</div>
                <p className="text-xs text-gray-600">Ozamiz Success</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
