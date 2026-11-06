import { useState } from 'react'
import type { FormEvent } from 'react'
import { Mail, CheckCircle, Download } from 'lucide-react'

interface NewsletterSignupProps {
  variant?: 'inline' | 'boxed'
  headline?: string
  description?: string
}

export default function NewsletterSignup({
  variant = 'boxed',
  headline = 'Free watercolor supply checklist',
  description = 'Get the exact supply list I use every day — printable, checkbox-style, and tested by Bruce. Plus coastal vibes in your inbox.',
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return

    setStatus('submitting')

    // TODO: Replace with your Buttondown / ConvertKit / Beehiiv form action URL
    // Buttondown example: https://buttondown.com/api/emails/embed-subscribe/lilacsavi
    try {
      // Placeholder: simulate success until email provider is configured
      await new Promise((resolve) => setTimeout(resolve, 800))
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-gold/10 border border-gold/20 rounded-2xl p-8 text-center">
        <CheckCircle className="w-10 h-10 text-gold mx-auto mb-3" aria-hidden="true" />
        <p className="font-serif text-xl text-navy mb-2">You are on the list!</p>
        <p className="text-navy/60 text-sm mb-5">
          Watch your inbox for coastal vibes and honest reviews.
        </p>
        <a
          href="/lilacsavi-watercolor-checklist.pdf"
          download
          className="inline-flex items-center gap-2 bg-navy text-cream px-6 py-3 rounded-lg text-sm font-semibold hover:bg-navy/90 transition-colors"
        >
          <Download className="w-4 h-4" aria-hidden="true" />
          Download Your Free Checklist
        </a>
        <p className="text-navy/40 text-xs mt-3">
          lilacsavi-watercolor-checklist.pdf · 1 page · print or save to your phone
        </p>
      </div>
    )
  }

  const isBoxed = variant === 'boxed'

  return (
    <div className={isBoxed ? 'bg-navy text-cream rounded-2xl p-8 md:p-10' : ''}>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="flex-1">
          <h3 className={isBoxed ? 'font-serif text-2xl text-cream mb-2' : 'font-serif text-2xl text-navy mb-2'}>
            {headline}
          </h3>
          <p className={isBoxed ? 'text-cream/70 text-sm' : 'text-navy/60 text-sm'}>
            {description}
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex-1 w-full">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Mail
                className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${isBoxed ? 'text-cream/40' : 'text-navy/30'}`}
                aria-hidden="true"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className={`w-full pl-10 pr-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 transition-colors ${
                  isBoxed
                    ? 'bg-cream/10 text-cream placeholder:text-cream/40 border border-cream/20 focus:ring-gold'
                    : 'bg-white text-navy placeholder:text-navy/30 border border-navy/10 focus:ring-gold'
                }`}
                aria-label="Email address for newsletter"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="bg-gold text-navy px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {status === 'submitting' ? 'Sending...' : 'Get the Checklist'}
            </button>
          </div>
          {status === 'error' && (
            <p className="text-red-400 text-xs mt-2">Something went wrong. Try again or email hello@lilacsavi.com.</p>
          )}
          <p className={`text-xs mt-3 ${isBoxed ? 'text-cream/40' : 'text-navy/40'}`}>
            No spam. Unsubscribe anytime. I only send things I would actually want to read.
          </p>
        </form>
      </div>
    </div>
  )
}
