import { useState } from 'react'

export function CustomRequirementForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.set('form-name', 'custom-requirement')

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        body: formData,
      })
      if (!response.ok) throw new Error('Submission failed')
      form.reset()
      setStatus('submitted')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'submitted') {
    return (
      <div className="rounded-2xl border border-[#39ff14]/40 bg-[#39ff14]/10 p-8 text-center">
        <h3 className="text-xl font-bold text-[#39ff14]">Requirement received!</h3>
        <p className="mt-2 text-neutral-300">
          We&apos;ll review your requirement and the uploaded image and get back to you shortly.
        </p>
      </div>
    )
  }

  return (
    <form
      name="custom-requirement"
      method="POST"
      action="/"
      data-netlify="true"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="custom-requirement" />

      <div>
        <label htmlFor="custom-requirement-text" className="mb-2 block text-xl font-extrabold text-[#39ff14]">
          Please type your custom requirement
        </label>
        <p className="mb-3 text-sm text-neutral-400">
          Tell us what you want to modify, paint, install or create for your vehicle.
        </p>
        <textarea
          id="custom-requirement-text"
          name="requirement"
          required
          rows={5}
          className="w-full rounded-2xl border border-[#39ff14]/30 bg-black/70 px-4 py-4 text-white placeholder:text-neutral-500 focus:border-[#39ff14] focus:outline-none focus:ring-2 focus:ring-[#39ff14]/20"
          placeholder="Example: I want a sporty body kit, custom paint and upgraded lighting for my car..."
        />
      </div>

      <div>
        <label htmlFor="custom-requirement-image" className="mb-2 block text-lg font-bold text-white">
          You can please upload the image of your requirement so we can help you out much better
        </label>
        <input
          id="custom-requirement-image"
          name="requirement-image"
          type="file"
          accept="image/*"
          className="block w-full cursor-pointer rounded-2xl border border-white/15 bg-black/70 px-4 py-3 text-sm text-neutral-300 file:mr-4 file:rounded-full file:border-0 file:bg-[#39ff14] file:px-5 file:py-2 file:font-bold file:text-black hover:file:bg-[#62ff45]"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="name"
          required
          placeholder="Your name"
          className="w-full rounded-xl border border-white/15 bg-black/70 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-[#39ff14] focus:outline-none"
        />
        <input
          name="phone"
          type="tel"
          required
          placeholder="Phone number"
          className="w-full rounded-xl border border-white/15 bg-black/70 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-[#39ff14] focus:outline-none"
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="rounded-full bg-[#39ff14] px-8 py-3 font-extrabold text-black transition-transform hover:-translate-y-0.5 hover:bg-[#62ff45] disabled:opacity-60"
        >
          {status === 'submitting' ? 'Submitting...' : 'Submit Custom Requirement'}
        </button>
        {status === 'error' && (
          <span className="text-sm text-[#ff6b6b]">Something went wrong. Please try WhatsApp instead.</span>
        )}
      </div>
    </form>
  )
}
