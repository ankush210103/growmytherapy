// src/components/Services.tsx
import { therapistData } from '@/constants/data'
import Image from 'next/image'

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Services & Specialties</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {therapistData.services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image 
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                {service.price && (
                  <p className="text-primary font-semibold">{service.price}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}