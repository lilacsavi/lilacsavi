import { useEffect, useRef } from 'react'
import { Download } from 'lucide-react'

interface NewsletterSignupProps {
  variant?: 'inline' | 'boxed'
  headline?: string
  description?: string
}

export default function NewsletterSignup({
  variant = 'boxed',
  headline = 'Free watercolor supply checklist',
  description = 'Get the exact supply list I use every day — printable, checkbox-style, and tested by Bruce. Plus lilac letters in your inbox.',
}: NewsletterSignupProps) {
  const formContainerRef = useRef<HTMLDivElement>(null)
  const scriptLoaded = useRef(false)

  useEffect(() => {
    if (scriptLoaded.current || !formContainerRef.current) return

    // Avoid duplicate script injection
    const existing = document.querySelector(
      'script[data-beehiiv-form="7bb7f770-31b5-4fb4-ad2c-3195c134bddc"]'
    )
    if (existing) {
      scriptLoaded.current = true
      return
    }

    const script = document.createElement('script')
    script.src = 'https://subscribe-forms.beehiiv.com/v3/loader.js'
    script.async = true
    script.dataset.beehiivForm = '7bb7f770-31b5-4fb4-ad2c-3195c134bddc'

    formContainerRef.current.appendChild(script)
    scriptLoaded.current = true

    return () => {
      // Beehiiv manages its own DOM — no cleanup needed
    }
  }, [])

  const isBoxed = variant === 'boxed'

  return (
    <div className={isBoxed ? 'bg-navy text-cream rounded-2xl p-8 md:p-10' : ''}>
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div>
          <h3
            className={
              isBoxed
                ? 'font-serif text-2xl text-cream mb-2'
                : 'font-serif text-2xl text-navy mb-2'
            }
          >
            {headline}
          </h3>
          <p className={isBoxed ? 'text-cream/70 text-sm' : 'text-navy/60 text-sm'}>
            {description}
          </p>
        </div>

        {/* Beehiiv form loads here */}
        <div ref={formContainerRef} className="w-full" />

        {/* PDF download — always visible */}
        <div
          className={`pt-4 border-t ${
            isBoxed ? 'border-cream/10' : 'border-navy/10'
          }`}
        >
          <a
            href="/lilacsavi-watercolor-checklist.pdf"
            download
            className="inline-flex items-center gap-2 text-sm font-medium hover:underline transition-colors"
            style={{ color: isBoxed ? '#C49E5A' : '#1E2A4A' }}
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            Download checklist without subscribing
          </a>
          <p
            className={`text-xs mt-1.5 ${
              isBoxed ? 'text-cream/30' : 'text-navy/30'
            }`}
          >
            lilacsavi-watercolor-checklist.pdf · 1 page · print or save to your phone
          </p>
        </div>
      </div>
    </div>
  )
}
