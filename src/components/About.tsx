// src/components/About.tsx
import Image from 'next/image'
import { therapistData } from '@/constants/data'

export default function About() {
  return (
    <section id="about" className="py-20 bg-neutral">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image 
              src="/images/image.png" 
              alt={therapistData.name}
              width={500}
              height={600}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">About Dr. Blake</h2>
            <p className="text-lg mb-6">{therapistData.about}</p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">{therapistData.experience}</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">
                  <span className="font-medium">In-person:</span> {therapistData.hours.inPerson}<br />
                  <span className="font-medium">Virtual:</span> {therapistData.hours.virtual}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}