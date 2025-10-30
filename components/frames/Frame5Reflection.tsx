import { motion } from 'motion/react';
import { Sun, Bird, Users, Heart, Shield, GraduationCap, HeartHandshake } from 'lucide-react';
import { ResearchReferences } from '../ResearchReferences';

export function Frame5Reflection() {
  const communityMembers = [
    { icon: Shield, label: "Barangay Tanod", color: "#1E3A8A" },
    { icon: GraduationCap, label: "Students", color: "#FACC15" },
    { icon: Users, label: "Elders", color: "#22C55E" },
    { icon: HeartHandshake, label: "Ex-Offenders", color: "#DC2626" },
    { icon: Heart, label: "Parents", color: "#EC4899" }
  ];

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      transition={{ type: "spring", stiffness: 60, damping: 20 }}
      className="relative w-full min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-yellow-50"
    >
      {/* Scrollable Content with proper padding */}
      <div className="h-screen overflow-y-auto pt-14 sm:pt-20 pb-24 sm:pb-32 px-4 sm:px-8">
        {/* Animated Background Orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-blue-200/20 to-yellow-200/20 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.7
            }}
            style={{
              width: Math.random() * 120 + 60,
              height: Math.random() * 120 + 60,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 80 + 10}%`
            }}
          />
        ))}

        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-6 sm:mb-12 relative z-10"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-purple-600 via-blue-600 to-yellow-600 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-xl mb-3">
            <Sun className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl">Unity for Peace & Reflection</h2>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 px-4">Collective Action for Community Safety</p>
        </motion.div>

        {/* Unity Circle Visualization */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 80 }}
          className="relative z-10 max-w-4xl mx-auto mb-8 sm:mb-16"
        >
          {/* Center Emblem */}
          <div className="relative flex items-center justify-center mb-16">
            {/* Glow Effect */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.15, 1]
              }}
              transition={{ 
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity }
              }}
              className="absolute w-72 h-72 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 rounded-full opacity-25 blur-2xl"
            />
            
            {/* Sun Symbol */}
            <div className="relative bg-white rounded-full p-10 shadow-2xl border-4 border-yellow-400">
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <Sun className="w-36 h-36 text-yellow-500" />
              </motion.div>
              
              {/* Peace Bird */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{ 
                  y: [-8, 8, -8],
                  rotate: [0, 3, -3, 0]
                }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                <Bird className="w-14 h-14 text-blue-600" />
              </motion.div>
            </div>
          </div>

          {/* Community Members Circle */}
          <div className="relative h-96 mb-12">
            {communityMembers.map((member, index) => {
              const angle = (index / communityMembers.length) * 2 * Math.PI - Math.PI / 2;
              const radius = 190;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.12, type: "spring", stiffness: 120 }}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 3 }}
                    className="flex flex-col items-center cursor-pointer"
                  >
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center shadow-xl border-4 border-white transition-transform"
                      style={{ backgroundColor: member.color }}
                    >
                      <member.icon className="w-9 h-9 text-white" />
                    </div>
                    <p className="text-sm mt-2 bg-white px-4 py-1.5 rounded-full shadow-lg border border-gray-200" style={{ color: member.color }}>
                      {member.label}
                    </p>
                  </motion.div>

                  {/* Connection Line to Center */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    className="absolute top-1/2 left-1/2 h-0.5 origin-left"
                    style={{
                      width: `${radius}px`,
                      backgroundColor: member.color,
                      opacity: 0.4,
                      transform: `translate(-100%, -50%) rotate(${angle * (180 / Math.PI) + 180}deg)`
                    }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Main Caption */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-center bg-gradient-to-r from-purple-100 via-blue-100 to-yellow-100 border-2 border-blue-400 p-8 rounded-2xl shadow-2xl"
          >
            <p className="text-2xl text-gray-800 mb-5 leading-relaxed">
              "True peace begins with unity —<br/>
              <strong>every Filipino plays a role in keeping our community safe.</strong>"
            </p>
            
            {/* Philippine Identity */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.8, type: "spring" }}
              className="flex items-center justify-center gap-4 mt-6"
            >
              <div className="flex gap-2">
                <div className="w-7 h-7 bg-blue-600 rounded-full shadow-md"></div>
                <div className="w-7 h-7 bg-yellow-400 rounded-full shadow-md"></div>
                <div className="w-7 h-7 bg-red-600 rounded-full shadow-md"></div>
              </div>
              <span className="text-5xl">🇵🇭</span>
              <p className="text-xl text-gray-700">
                Bayanihan sa Kapayapaan
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Credits & References Section */}
        <div className="relative z-10 max-w-6xl mx-auto space-y-10 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-2xl shadow-xl mb-8">
              <Users className="w-6 h-6" />
              <h3 className="text-2xl">Project Credits & References</h3>
            </div>
          </motion.div>

          {/* Research References Component */}
          <ResearchReferences />

          {/* Assignment Completion Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3 }}
            className="bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-200"
          >
            <h3 className="text-2xl text-purple-900 mb-5 flex items-center gap-2">
              <span className="text-green-600">✓</span> Assignment Completed
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                <span className="text-green-600 text-xl">✓</span>
                <div>
                  <p className="text-sm text-gray-900 mb-1"><strong>Content Relevance</strong></p>
                  <p className="text-xs text-gray-600">Community's role in CJS demonstrated through prevention, rehabilitation, and reintegration</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                <span className="text-blue-600 text-xl">✓</span>
                <div>
                  <p className="text-sm text-gray-900 mb-1"><strong>Creativity</strong></p>
                  <p className="text-xs text-gray-600">Interactive auto-animated storytelling with Philippine cultural elements</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-purple-50 p-4 rounded-lg">
                <span className="text-purple-600 text-xl">✓</span>
                <div>
                  <p className="text-sm text-gray-900 mb-1"><strong>Accuracy</strong></p>
                  <p className="text-xs text-gray-600">5 verified Philippine research studies from SCIRP, Davao, Enverga, ResearchGate, IJISRT</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-yellow-50 p-4 rounded-lg">
                <span className="text-yellow-600 text-xl">✓</span>
                <div>
                  <p className="text-sm text-gray-900 mb-1"><strong>Teamwork</strong></p>
                  <p className="text-xs text-gray-600">Collaborative group roles and credits displayed</p>
                </div>
              </div>
            </div>
            <div className="mt-5 p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600 rounded-lg">
              <p className="text-sm text-gray-800">
                <strong>CLJ1 Assignment</strong> • Deadline: October 29, 2025 • Submit this link to instructor for auto-play experience
              </p>
            </div>
          </motion.div>

          {/* Final Thank You Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white rounded-2xl p-10 text-center shadow-2xl"
          >
            <h3 className="text-3xl mb-4">Salamat po! 🙏</h3>
            <p className="text-lg mb-6 leading-relaxed max-w-2xl mx-auto">
              Thank you for experiencing this interactive journey through Philippine community crime prevention. Together, we build a safer Philippines for all.
            </p>
            <div className="flex justify-center gap-3 mb-6">
              <div className="w-24 h-1.5 bg-blue-400 rounded-full"></div>
              <div className="w-24 h-1.5 bg-yellow-400 rounded-full"></div>
              <div className="w-24 h-1.5 bg-red-400 rounded-full"></div>
            </div>
            <p className="text-sm text-gray-300">
              🇵🇭 Bayanihan sa Kapayapaan • Community Unity for Peace
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
