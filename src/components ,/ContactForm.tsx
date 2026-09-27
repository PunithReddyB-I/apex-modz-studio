import { useState } from 'react'

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

const initialFields = { name: '', phone: '', service: '', message: '' }

export function ContactForm() {
  const [fields, setFields] = useState(initialFields)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setFields((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'enquiry', ...fields }),
      })
      if (!response.ok) throw new Error('Submission failed')
      setStatus('submitted')
      setFields(initialFields)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'submitted') {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
        <h3 className="text-xl font-bold text-white">Thanks — we&apos;ve got your enquiry!</h3>
        <p className="mt-2 text-neutral-300">
          Our team will reach out shortly. For a faster response, tap the WhatsApp button.
        </p>
      </div>
    )
  }

  return (
    <form
      name="enquiry"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2"
    >
      <input type="hidden" name="form-name" value="enquiry" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" onChange={handleChange} />
        </label>
      </p>

      <div className="sm:col-span-1">
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-neutral-300">
          Full name
        </label>
        <input
          id="name"
          name="name"
          required
          value={fields.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-[#39ff14] focus:outline-none"
          placeholder="Your name"
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-neutral-300">
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={fields.phone}
          onChange={handleChange}
          className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-[#39ff14] focus:outline-none"
          placeholder="+91 98765 43210"
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="service" className="mb-1 block text-sm font-medium text-neutral-300">
          Interested in
        </label>
        <select
          id="service"
          name="service"
          required
          value={fields.service}
          onChange={handleChange}
          className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white focus:border-[#39ff14] focus:outline-none"
        >
          <option value="" disabled>
            Select a service
          </option>
          <option value="Custom Paint Job">Custom Paint Job</option>
          <option value="Accessories & Installation">Accessories & Installation</option>
          <option value="Wraps & Paint Protection">Wraps & Paint Protection</option>
          <option value="Dent Removal & Bodywork">Dent Removal & Bodywork</option>
          <option value="Full Restyling Package">Full Restyling Package</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-neutral-300">
          Tell us about your car & vision
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={fields.message}
          onChange={handleChange}
          className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-[#39ff14] focus:outline-none"
          placeholder="Make, model, and the look you're going for..."
        />
      </div>

      <div className="sm:col-span-2 flex items-center gap-4">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="rounded-full bg-[#39ff14] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#62ff45] disabled:opacity-60"
        >
          {status === 'submitting' ? 'Sending...' : 'Send Enquiry'}
        </button>
        {status === 'error' && (
          <span className="text-sm text-[#ff6b6b]">
            Something went wrong. Please try WhatsApp instead.
          </span>
        )}
      </div>
    </form>
  )
}
