import { createFileRoute } from '@tanstack/react-router'
import {
  Car,
  Gauge,
  MapPin,
  Mail,
  Clock,
  Phone,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Wrench,
  Settings,
  Zap,
  BadgeCheck,
} from 'lucide-react'
import services from '@/data/services'
import effects from '@/data/effects'
import { business, whatsappLink } from '@/data/business'
import { Header } from '@/components/Header'
import { ContactForm } from '@/components/ContactForm'
import { CustomRequirementForm } from '@/components/CustomRequirementForm'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const icons = {
  spray: SprayCan,
  wrench: Wrench,
  car: Car,
  shield: ShieldCheck,
  sparkles: Sparkles,
  settings: Settings,
}

function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <div className="background-slideshow" aria-hidden="true">
        <div className="background-slide" />
        <div className="background-slide" />
        <div className="background-slide" />
        <div className="background-slide" />
      </div>

      <div className="relative z-10">
        <Header />

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-[#39ff14]/15">
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/70 to-[#050505]" />
          <div className="relative mx-auto max-w-7xl px-5 py-28 md:py-40">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#39ff14]/40 bg-black/50 px-4 py-1.5 text-sm font-semibold text-[#39ff14] backdrop-blur">
              <Zap size={15} /> Premium customisation in Bengaluru
            </p>
            <h1 className="site-title-font neon-glow max-w-5xl text-5xl font-black leading-tight text-[#39ff14] md:text-7xl">
              APEX MODZ STUDIO
            </h1>
            <h2 className="mt-4 max-w-4xl text-2xl font-bold text-white md:text-4xl">
              Custom Car Accessories &amp; Paint Studio, Built With Pro-Grade Equipment
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300">
              We deal with all types of Accessories, painting works and custom modifications — from
              bold visual upgrades to complete restyling packages for your ride.
            </p>

            <div className="mt-8 grid max-w-4xl gap-3 sm:grid-cols-3">
              <div className="neon-border rounded-2xl border bg-black/60 p-4 backdrop-blur">
                <BadgeCheck className="mb-2 text-[#39ff14]" size={22} />
                <p className="font-bold text-white">Genuine Parts</p>
                <p className="mt-1 text-sm text-neutral-400">Best pricing across Bengaluru</p>
              </div>
              <div className="neon-border rounded-2xl border bg-black/60 p-4 backdrop-blur">
                <Zap className="mb-2 text-[#39ff14]" size={22} />
                <p className="font-bold text-white">Instant Doorstep Service</p>
                <p className="mt-1 text-sm text-neutral-400">Available across Bengaluru</p>
              </div>
              <div className="neon-border rounded-2xl border bg-black/60 p-4 backdrop-blur">
                <Sparkles className="mb-2 text-[#39ff14]" size={22} />
                <p className="font-bold text-white">Custom Modifications</p>
                <p className="mt-1 text-sm text-neutral-400">Built around your requirement</p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#custom-requirement"
                className="rounded-full bg-[#39ff14] px-8 py-3 font-extrabold text-black transition-transform hover:-translate-y-0.5 hover:bg-[#62ff45]"
              >
                Share Your Requirement
              </a>
              <a
                href={whatsappLink("Hi Apex Modz Studio, I'd like to enquire about your services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#39ff14]/50 bg-black/50 px-8 py-3 font-semibold text-[#39ff14] backdrop-blur transition-colors hover:bg-[#39ff14] hover:text-black"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Service spotlight */}
        <section className="mx-auto max-w-7xl px-5 py-16">
          <div className="neon-border rounded-3xl border bg-black/75 p-7 shadow-2xl backdrop-blur md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.22em] text-[#39ff14]">
                  Service spotlight
                </p>
                <h2 className="max-w-4xl text-3xl font-black md:text-5xl">
                  We deal with all types of Accessories, painting works and custom modifications.
                </h2>
                <p className="mt-4 max-w-3xl leading-relaxed text-neutral-400">
                  Tell us what you have in mind. We can help with the parts, finish, installation,
                  paint work and customisation needed to bring your idea together.
                </p>
              </div>
              <a
                href="#contact"
                className="rounded-full border border-[#39ff14]/60 px-7 py-3 text-center font-bold text-[#39ff14] transition-colors hover:bg-[#39ff14] hover:text-black"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-7xl px-5 py-20">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Our Services</h2>
            <p className="mx-auto mt-3 max-w-2xl text-neutral-400">
              Accessories, painting, bodywork and custom modifications under one roof.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = icons[service.icon]
              return (
                <div
                  key={service.id}
                  className="neon-border rounded-2xl border bg-black/70 p-8 backdrop-blur transition-transform hover:-translate-y-1"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#39ff14]/10 text-[#39ff14]">
                    <Icon size={24} />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{service.name}</h3>
                  <p className="leading-relaxed text-neutral-400">{service.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Visual Effects */}
        <section id="effects" className="border-y border-[#39ff14]/10 bg-black/65">
          <div className="mx-auto max-w-7xl px-5 py-20">
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Custom Paint Visual Effects</h2>
              <p className="mx-auto mt-3 max-w-2xl text-neutral-400">
                Explore finishes that can be tailored to your exact colour and vehicle.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {effects.map((effect) => (
                <div
                  key={effect.id}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-black/70"
                >
                  <div className="aspect-square w-full overflow-hidden">
                    <img
                      src={effect.image}
                      alt={`${effect.name} paint finish demo`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="mb-1 text-lg font-bold">{effect.name}</h3>
                    <p className="text-sm text-neutral-400">{effect.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section id="gallery" className="mx-auto max-w-7xl px-5 py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Why Car Owners Choose Us</h2>
              <p className="mt-4 leading-relaxed text-neutral-400">
                We combine practical workshop expertise with premium finishing and customisation so
                every job is planned around the vehicle and the customer&apos;s vision.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Gauge className="mt-1 shrink-0 text-[#39ff14]" size={22} />
                  <div>
                    <h4 className="font-semibold">Advanced Equipment</h4>
                    <p className="text-sm text-neutral-400">Professional tools for accurate work.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Settings className="mt-1 shrink-0 text-[#39ff14]" size={22} />
                  <div>
                    <h4 className="font-semibold">Dedicated Paint Booth</h4>
                    <p className="text-sm text-neutral-400">Controlled conditions for a cleaner finish.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 shrink-0 text-[#39ff14]" size={22} />
                  <div>
                    <h4 className="font-semibold">Genuine Parts</h4>
                    <p className="text-sm text-neutral-400">Competitive pricing across Bengaluru.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-1 shrink-0 text-[#39ff14]" size={22} />
                  <div>
                    <h4 className="font-semibold">Doorstep Support</h4>
                    <p className="text-sm text-neutral-400">Instant doorstep service within Bengaluru.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-[#39ff14]/20">
              <img
                src="/.netlify/images?url=/img/effect-chrome.jpg&w=900&fm=webp&q=80"
                alt="Mirror chrome custom paint finish"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Custom Requirement */}
        <section id="custom-requirement" className="border-y border-[#39ff14]/15 bg-black/75">
          <div className="mx-auto max-w-5xl px-5 py-20">
            <div className="mb-10 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#39ff14]">Custom Requirement</p>
              <h2 className="mt-2 text-3xl font-black md:text-5xl">Have a specific idea?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
                Send us your requirement and an image. We&apos;ll understand the idea and help you work
                out the next step.
              </p>
            </div>
            <div className="neon-border rounded-3xl border bg-black/80 p-6 md:p-10">
              <CustomRequirementForm />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-[#39ff14]/10 bg-black/80">
          <div className="mx-auto max-w-7xl px-5 py-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <h2 className="text-3xl font-bold md:text-4xl">Get In Touch</h2>
                <p className="mt-4 leading-relaxed text-neutral-400">
                  Send us your details and what you have in mind — we&apos;ll get back to you with a
                  quote. For a quick reply, tap the WhatsApp button.
                </p>

                <div className="mt-8 space-y-5">
                  <div className="flex items-start gap-3">
                    <Phone size={20} className="mt-0.5 text-[#39ff14]" />
                    <span>{business.phoneDisplay}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail size={20} className="mt-0.5 text-[#39ff14]" />
                    <span>{business.email}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="mt-0.5 text-[#39ff14]" />
                    <span>{business.address}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={20} className="mt-0.5 text-[#39ff14]" />
                    <span>{business.hours}</span>
                  </div>
                </div>
              </div>

              <div className="neon-border rounded-2xl border bg-black/70 p-6 backdrop-blur md:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-[#39ff14]/15 bg-black py-8">
          <div className="mx-auto max-w-7xl px-5 text-center text-sm text-neutral-500">
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  )
}
