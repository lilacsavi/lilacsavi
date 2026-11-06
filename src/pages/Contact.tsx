import { Mail, PinIcon } from 'lucide-react'

export default function Contact() {
  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">Contact</p>
        <h1 className="font-serif text-5xl md:text-6xl text-navy mb-6">Say Hello</h1>
        <p className="text-navy/60 text-lg leading-relaxed mb-12">
          For mural commissions, collaborations, or just to show me your watercolor attempts — I'd love to hear from you.
        </p>

        <div className="bg-warm-white p-8 md:p-12 mb-8">
          <Mail className="w-10 h-10 text-gold mx-auto mb-4" aria-hidden="true" />
          <p className="font-serif text-2xl text-navy mb-2">
            <a
              href="mailto:hello@lilacsavi.com"
              className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
            >
              hello@lilacsavi.com
            </a>
          </p>
          <p className="text-navy/50 text-sm">I read every email. Promise.</p>
        </div>

        <div className="border-t border-navy/10 pt-10">
          <p className="text-navy/60 mb-4">Or find me on Pinterest</p>
          <a
            href="https://www.pinterest.com/lilacsavi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-gold px-2 py-1"
            aria-label="Follow lilacsavi on Pinterest"
          >
            <PinIcon className="w-5 h-5" aria-hidden="true" /> pinterest.com/lilacsavi
          </a>
        </div>
      </div>
    </div>
  )
}
