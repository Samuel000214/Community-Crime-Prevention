import { Heart, Shield, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ReflectionSectionProps {
  imageUrl: string;
}

export function ReflectionSection({ imageUrl }: ReflectionSectionProps) {
  return (
    <div className="relative mt-8 rounded-2xl overflow-hidden bg-gradient-to-r from-blue-50 via-yellow-50 to-green-50 border-4 border-yellow-400">
      <div className="grid md:grid-cols-2 gap-8 p-8">
        {/* Left Side - Image */}
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-yellow-400/20 rounded-full blur-2xl"></div>
            <ImageWithFallback
              src={imageUrl}
              alt="Community Unity"
              className="relative w-full max-w-md h-64 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Right Side - Reflection Content */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="flex items-center gap-3">
            <Shield className="w-10 h-10 text-blue-600" />
            <h2 className="text-3xl text-blue-900">
              Reflection: Unity in Action
            </h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow">
              <Users className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">
                <strong>Community Participation:</strong> Every citizen plays an active role in maintaining peace and order through vigilance, cooperation, and shared responsibility.
              </p>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow">
              <Heart className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">
                <strong>Bayanihan Spirit:</strong> Through compassion, education, and rehabilitation programs, communities rebuild lives and prevent crime from taking root.
              </p>
            </div>
          </div>

          <div className="bg-blue-900 text-white p-6 rounded-xl shadow-lg">
            <p className="text-xl text-center italic">
              "True peace begins with unity. Together, we create a safer Philippines for all."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
