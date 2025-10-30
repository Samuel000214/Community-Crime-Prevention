import { motion } from 'motion/react';
import { Users, Search, Palette, FileText, Presentation, Crown, UserCheck } from 'lucide-react';

export function GroupCredits() {
  const leader = {
    name: "Campion",
    role: "Team Leader & Project Coordinator",
    icon: Crown
  };

  const members = [
    { name: "Bagas", role: "Research & Data Collection", icon: Search },
    { name: "Carcido", role: "Design & Layout", icon: Palette },
    { name: "Idulsa Jacob", role: "Illustration & Graphics", icon: Palette },
    { name: "Dumangas", role: "Caption & Reflection Writing", icon: FileText },
    { name: "Rosilem", role: "Content Development", icon: FileText },
    { name: "Magallanes Francis", role: "Presentation & Integration", icon: Presentation }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-200"
    >
      <div className="flex items-center gap-3 mb-6">
        <Users className="w-8 h-8 text-blue-600" />
        <h3 className="text-2xl text-blue-900">Project Team</h3>
      </div>

      {/* Team Leader - Highlighted */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 150 }}
        className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-xl p-5 border-2 border-yellow-400 mb-6 shadow-lg"
      >
        <div className="flex items-start gap-4">
          <div className="bg-gradient-to-br from-yellow-500 to-amber-600 p-3 rounded-lg shadow-md">
            <leader.icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <p className="text-lg text-gray-900">{leader.name}</p>
              <span className="bg-yellow-500 text-white text-xs px-2 py-0.5 rounded-full">Leader</span>
            </div>
            <p className="text-sm text-gray-600">{leader.role}</p>
          </div>
        </div>
      </motion.div>

      {/* Team Members */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map((member, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7 + index * 0.1 }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <member.icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-blue-900">{member.name}</p>
                <p className="text-xs text-gray-600 mt-1">{member.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
        <p className="text-sm text-gray-700">
          <strong>🇵🇭 CLJ1 Assignment:</strong> "Bayanihan sa Kapayapaan" - A collaborative project demonstrating teamwork and research excellence.
        </p>
      </div>
    </motion.div>
  );
}
