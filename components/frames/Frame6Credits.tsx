import { motion } from 'motion/react';
import { Award, CheckCircle } from 'lucide-react';
import { GroupCredits } from '../GroupCredits';
import { ResearchReferences } from '../ResearchReferences';

export function Frame6Credits() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-screen overflow-y-auto bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 pt-20 pb-28 px-8"
    >
      {/* Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full shadow-xl mb-4">
          <Award className="w-8 h-8" />
          <h2 className="text-3xl">Project Information</h2>
        </div>
        <p className="text-xl text-gray-700">
          CLJ1 Assignment: Community's Role in Crime Prevention
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Assignment Details */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-200"
        >
          <h3 className="text-2xl text-purple-900 mb-4">Assignment Completion</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm">
                    <strong>Content Relevance:</strong> Clear demonstration of community's role in CJS
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm">
                    <strong>Creativity & Presentation:</strong> Interactive digital storytelling format
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm">
                    <strong>Accuracy of Information:</strong> Philippine-specific data and research
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm">
                    <strong>Teamwork:</strong> Collaborative roles and contributions
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm">
                    <strong>Reflection:</strong> Real-life community involvement awareness
                  </p>
                </div>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded">
                <p className="text-sm">
                  <strong>Deadline:</strong> October 29, 2025
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Group Credits */}
        <GroupCredits />

        {/* Research References */}
        <ResearchReferences />

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white rounded-2xl p-8 text-center shadow-2xl"
        >
          <h3 className="text-2xl mb-4">Bayanihan sa Kapayapaan</h3>
          <p className="text-lg mb-6">
            Thank you for experiencing this interactive journey through Philippine community crime prevention.
          </p>
          <div className="flex justify-center gap-2">
            <div className="w-20 h-1 bg-blue-400 rounded"></div>
            <div className="w-20 h-1 bg-yellow-400 rounded"></div>
            <div className="w-20 h-1 bg-red-400 rounded"></div>
          </div>
          <p className="text-sm mt-6 text-gray-300">
            Together, we build a safer Philippines for all.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
