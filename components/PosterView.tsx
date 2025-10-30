import { useCallback, useRef, useState } from 'react'
import { Shield, Users, Heart, Download, Activity } from 'lucide-react'
import { PosterHeader } from './PosterHeader'
import { ReflectionSection } from './ReflectionSection'
import { GroupCredits } from './GroupCredits'
import { ResearchReferences } from './ResearchReferences'
import { GradingReference } from './GradingReference'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Button } from './ui/button'
import { toPng } from 'html-to-image'

export function PosterView() {
  const posterRef = useRef<HTMLDivElement>(null)
  const [reduceMotion, setReduceMotion] = useState(false)

  const handleExport = useCallback(async () => {
    if (!posterRef.current) return
    const dataUrl = await toPng(posterRef.current, { cacheBust: true, pixelRatio: 2, backgroundColor: '#ffffff' })
    const link = document.createElement('a')
    link.download = 'community-crime-prevention-poster.png'
    link.href = dataUrl
    link.click()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white" data-reduce-motion={reduceMotion ? 'true' : 'false'}>
      <div className="fixed top-3 right-3 z-50 poster-controls flex gap-2">
        <Button size="sm" variant="outline" onClick={handleExport} title="Export PNG">
          <Download className="w-4 h-4" />
        </Button>
        <Button size="sm" variant={reduceMotion ? 'secondary' : 'outline'} onClick={() => setReduceMotion(v => !v)} title="Toggle Reduce Motion">
          <Activity className="w-4 h-4" />
        </Button>
      </div>

      <div ref={posterRef} className="max-w-6xl mx-auto p-4 sm:p-6 poster-root">
        <PosterHeader />

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-blue-700" />
              <h2 className="text-xl text-blue-900">Barangay Patrol & Community Policing</h2>
            </div>
            <div className="rounded-xl overflow-hidden border mb-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1584306670957-acf935f5032b?q=80&w=1200&auto=format&fit=crop"
                alt="Barangay Patrol"
                className="w-full h-40 object-cover"
              />
            </div>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Increased visibility and foot patrols build trust.</li>
              <li>• Barangay tanod coordination strengthens rapid response.</li>
              <li>• Community watch programs reduce opportunity for crime.</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-green-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-green-700" />
              <h2 className="text-xl text-green-900">Awareness & Youth Engagement</h2>
            </div>
            <div className="rounded-xl overflow-hidden border mb-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop"
                alt="Youth Engagement"
                className="w-full h-40 object-cover"
              />
            </div>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• School seminars and sports clinics promote positive choices.</li>
              <li>• Anti-drug campaigns and peer mentoring empower youth.</li>
              <li>• Partnerships with barangay, PNP, and NGOs amplify impact.</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-rose-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-rose-700" />
              <h2 className="text-xl text-rose-900">Rehabilitation & Reintegration</h2>
            </div>
            <div className="rounded-xl overflow-hidden border mb-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
                alt="Rehabilitation"
                className="w-full h-40 object-cover"
              />
            </div>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• TESDA skills training and livelihood grants open opportunities.</li>
              <li>• Community acceptance and counseling reduce recidivism.</li>
              <li>• Faith-based and NGO partners sustain long-term support.</li>
            </ul>
          </div>
        </div>

        <ReflectionSection imageUrl="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop" />

        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          <GroupCredits />
          <ResearchReferences />
        </div>

        <div className="mt-6">
          <GradingReference />
        </div>
      </div>
    </div>
  )
}
