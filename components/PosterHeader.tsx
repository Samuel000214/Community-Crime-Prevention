import { Sun, Home } from 'lucide-react';

export function PosterHeader() {
  return (
    <div className="relative h-64 overflow-hidden rounded-t-2xl bg-gradient-to-b from-blue-900 via-blue-700 to-amber-100">
      {/* Sunrise Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <Sun className="w-96 h-96 text-yellow-300" />
      </div>
      
      {/* Barangay Silhouettes */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-around px-8 pb-4">
        <Home className="w-12 h-12 text-amber-900/30" />
        <Home className="w-16 h-16 text-amber-900/30" />
        <Home className="w-10 h-10 text-amber-900/30" />
        <Home className="w-14 h-14 text-amber-900/30" />
        <Home className="w-12 h-12 text-amber-900/30" />
      </div>

      {/* Title Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full pt-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-3 h-16 bg-blue-600 rounded"></div>
          <h1 className="text-5xl text-center text-white drop-shadow-lg">
            <span className="text-yellow-400">Bayanihan</span> sa <span className="text-blue-200">Kapayapaan</span>
          </h1>
          <div className="w-3 h-16 bg-red-600 rounded"></div>
        </div>
        <p className="text-xl text-center text-white/90 drop-shadow-md max-w-3xl px-4">
          How the Community Builds Peace and Prevents Crime
        </p>
        <div className="flex gap-2 mt-4">
          <div className="w-12 h-2 bg-blue-600 rounded"></div>
          <div className="w-12 h-2 bg-yellow-400 rounded"></div>
          <div className="w-12 h-2 bg-red-600 rounded"></div>
        </div>
      </div>
    </div>
  );
}
