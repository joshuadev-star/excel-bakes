'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', subject: '', message: '' })
    alert('Thank you! We&apos;ll get back to you soon.')
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Have questions or want to place a special order? We&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 border-border hover:shadow-lg transition">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-foreground/70">123 Baking Street, Lagos Nigeria</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border hover:shadow-lg transition">
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-foreground/70">+234 (0) 123-456-7890</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border hover:shadow-lg transition">
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-foreground/70">hello@excelbakes.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border hover:shadow-lg transition">
              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                  <p className="text-foreground/70">Mon - Sat: 8:00 AM - 8:00 PM</p>
                  <p className="text-foreground/70">Sun: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your order or question..."
                  required
                  className="w-full min-h-32"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-base"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
