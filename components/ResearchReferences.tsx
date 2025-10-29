import { motion } from 'motion/react';
import { BookOpen, ExternalLink } from 'lucide-react';

export function ResearchReferences() {
  const references = [
    {
      title: "Threshold of Community Policing in the Philippines: A Public Safety and Security Study",
      authors: "Pola, A. et al.",
      source: "SCIRP Journal of Social Sciences",
      description: "Barangay community policing in Ilocos Norte increased resident trust and lowered fear of crime.",
      link: "https://www.scirp.org/pdf/jss_6500357.pdf",
      year: "2025"
    },
    {
      title: "Community Awareness and Performance of Revitalized Pulis sa Barangay in the City of Mati",
      authors: "Llanto, J. et al.",
      source: "Davao Research Journal",
      description: "Community awareness programs in Davao Oriental greatly improved police–citizen trust.",
      link: "https://www.davaoresearchjournal.ph/index.php/main/article/download/248/153",
      year: "2024"
    },
    {
      title: "The Role of Barangay Police in Reducing Crime Rate Involving Youth",
      authors: "Enverga University Research Center",
      source: "MSU Enverga University Foundation",
      description: "Barangay-led youth seminars and sports programs reduced youth-related offenses.",
      link: "https://mseuf.edu.ph/research/read/1794",
      year: "2023"
    },
    {
      title: "The Reintegration of Ex-Convicts in Society: A Case Study",
      authors: "Vivares, D. & Cuevas Jr., C.",
      source: "ResearchGate",
      description: "Ozamiz City's community support and acceptance help former inmates reintegrate successfully.",
      link: "https://www.researchgate.net/publication/374933254_The_Reintegration_of_Ex-Convicts_in_Society_A_Case_Study",
      year: "2023"
    },
    {
      title: "Rebuilding Lives of Former Drug Dependents through Rehabilitation",
      authors: "Casinao, E. et al.",
      source: "IJISRT Journal",
      description: "Community and family support are key to long-term recovery of former dependents.",
      link: "https://www.ijisrt.com/assets/upload/files/IJISRT24DEC448.pdf",
      year: "2024"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-200"
    >
      <div className="flex items-center gap-3 mb-6">
        <BookOpen className="w-8 h-8 text-green-600" />
        <h3 className="text-2xl text-green-900">Philippine Research References</h3>
      </div>

      <div className="space-y-4">
        {references.map((ref, index) => (
          <motion.div
            key={index}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 + index * 0.15 }}
            className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-5 border border-green-200"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h4 className="text-sm text-green-900 mb-1">{ref.title}</h4>
                <p className="text-xs text-gray-600 mb-2">{ref.authors}</p>
                <p className="text-xs text-gray-700 mb-2 italic">{ref.description}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>{ref.source}</span>
                  <span>•</span>
                  <span>{ref.year}</span>
                </div>
              </div>
              <a
                href={ref.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 p-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                title="View Research Paper"
              >
                <ExternalLink className="w-4 h-4 text-white" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
        <p className="text-sm text-gray-700">
          <strong>🇵🇭 Verified Philippine Context:</strong> All research references are from verified Philippine studies on community policing, youth engagement, and rehabilitation programs.
        </p>
      </div>
    </motion.div>
  );
}
