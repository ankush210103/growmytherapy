// src/components/Contact.tsx
'use client'

import { useState } from 'react'
import { therapistData } from '@/constants/data'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agreeToContact: false
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    if (!formData.preferredTime.trim()) newErrors.preferredTime = 'Preferred time is required'
    if (!formData.agreeToContact) newErrors.agreeToContact = 'You must agree to be contacted'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validate()) {
      // In a real app, you would send the data to your backend
      console.log('Form submitted:', formData)
      setIsSubmitted(true)
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        preferredTime: '',
        agreeToContact: false
      })
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="max-w-2xl mx-auto">
          {isSubmitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              Thank you for your message! Dr. Blake will contact you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  What brings you here? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>
              
              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred time to reach you *
                </label>
                <input
                  type="text"
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  placeholder="e.g., Weekdays after 5pm"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary ${errors.preferredTime ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.preferredTime && <p className="mt-1 text-sm text-red-600">{errors.preferredTime}</p>}
              </div>
              
              <div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="agreeToContact"
                      name="agreeToContact"
                      type="checkbox"
                      checked={formData.agreeToContact}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                  </div>
                  <label htmlFor="agreeToContact" className="ml-2 block text-sm text-gray-700">
                    I agree to be contacted by Dr. Blake *
                  </label>
                </div>
                {errors.agreeToContact && <p className="mt-1 text-sm text-red-600">{errors.agreeToContact}</p>}
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
          
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Or contact directly</h3>
            <p className="text-gray-600 mb-2">
              <span className="font-medium">Phone:</span> {therapistData.contact.phone}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Email:</span> {therapistData.contact.email}
            </p>
            <p className="text-gray-600 mt-4">
              <span className="font-medium">Office:</span> {therapistData.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}