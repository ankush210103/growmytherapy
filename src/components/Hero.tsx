// src/components/Hero.tsx
import { therapistData } from '@/constants/data'

export default function Hero() {
  return (
    <section 
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/pexels-ollivves-1078981.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 text-center px-6 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Compassionate Therapy for Your Wellbeing
        </h1>
        <h2 className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          With {therapistData.name}, {therapistData.title}
        </h2>
        <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full text-lg transition">
          Book a Free Consult
        </button>
      </div>
    </section>
  )
}