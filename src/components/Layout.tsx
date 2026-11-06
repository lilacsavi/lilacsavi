import { Link, useLocation } from 'react-router-dom'
import { PinIcon } from 'lucide-react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* ADA: Skip to main content link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header>
        <nav
          role="navigation"
          aria-label="Main navigation"
          className={`w-full z-50 transition-all duration-300 ${isHome ? 'absolute top-0 left-0 bg-transparent' : 'bg-cream/90 backdrop-blur-sm border-b border-navy/5'}`}
        >
          <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
            <Link
              to="/"
              className="font-serif text-2xl md:text-3xl text-navy tracking-tight"
              aria-label="lilacsavi - Home"
            >
              lilacsavi
            </Link>
            <div className="flex items-center gap-6 md:gap-8">
              <Link
                to="/"
                className="text-sm font-medium text-navy/70 hover:text-navy transition-colors uppercase tracking-widest"
                aria-current={isHome ? 'page' : undefined}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium text-navy/70 hover:text-navy transition-colors uppercase tracking-widest"
                aria-current={location.pathname === '/about' ? 'page' : undefined}
              >
                About
              </Link>
              <Link
                to="/blog"
                className="text-sm font-medium text-navy/70 hover:text-navy transition-colors uppercase tracking-widest"
                aria-current={location.pathname === '/blog' || location.pathname.startsWith('/blog/') ? 'page' : undefined}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="text-sm font-medium text-navy/70 hover:text-navy transition-colors uppercase tracking-widest"
                aria-current={location.pathname === '/contact' ? 'page' : undefined}
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main id="main-content" className="flex-1" role="main" tabIndex={-1}>
        {children}
      </main>

      <footer role="contentinfo" className="bg-navy text-cream/80 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="font-serif text-2xl text-cream mb-2">lilacsavi</p>
              <p className="text-sm opacity-70">Art, style, and salt air from the Florida Gulf Coast.</p>
            </div>
            <div className="flex items-center gap-5">
              <a
                href="https://www.pinterest.com/lilacsavi/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
                aria-label="Follow lilacsavi on Pinterest"
              >
                <PinIcon className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="mailto:hello@lilacsavi.com"
                className="hover:text-gold transition-colors"
                aria-label="Send email to hello@lilacsavi.com"
              >
                <span className="text-sm">hello@lilacsavi.com</span>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-cream/10 text-center text-xs opacity-50 space-y-1">
            <p>Written by Savannah · Florida Gulf Coast</p>
            <p>As an Amazon Associate I earn from qualifying purchases.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
