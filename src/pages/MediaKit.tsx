import { PinIcon, Globe, TrendingUp, Users, Bookmark, MousePointer } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

export default function MediaKit() {
  return (
    <div className="pt-24 pb-20 px-6 print:pt-4 print:pb-0">
      <Helmet>
        <title>Media Kit | lilacsavi</title>
        <meta name="description" content="lilacsavi media kit - Pinterest analytics, content examples, and partnership information for Savannah, Florida Gulf Coast lifestyle creator." />
        <link rel="canonical" href="https://www.lilacsavi.com/media-kit" />
      </Helmet>

      <style>{`
        @media print {
          nav, footer, .no-print { display: none !important; }
          body { background: white !important; }
          .print-break-inside { break-inside: avoid; }
          .print-page-break { page-break-before: always; }
        }
      `}</style>

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 print-break-inside">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-3">Influencer Media Kit</p>
          <h1 className="font-serif text-5xl md:text-6xl text-navy leading-tight mb-4">
            lilacsavi
          </h1>
          <p className="text-navy/60 text-lg max-w-md mx-auto">
            Watercolor artist and coastal lifestyle creator based on the Florida Gulf Coast.
          </p>
        </div>

        {/* About + Photo */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12 print-break-inside">
          <img
            src="/mural-selfie.jpg"
            alt="Savannah, watercolor artist and lifestyle blogger"
            className="w-32 h-32 rounded-full object-cover flex-shrink-0"
            width="128"
            height="128"
          />
          <div>
            <p className="text-base leading-relaxed text-navy/80">
              Hi, I am Savannah. I write honest product reviews, share beach and pool day essentials, 
              document creative projects, and occasionally dress my Maine Coon cat in costumes he did not ask for. 
              Everything I recommend is something I actually own and use. My audience trusts me because 
              I do not do sponsored filler or fake enthusiasm.
            </p>
            <div className="flex flex-wrap gap-4 mt-4 text-sm text-navy/60">
              <a href="https://www.lilacsavi.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-gold transition-colors">
                <Globe className="w-4 h-4" aria-hidden="true" /> lilacsavi.com
              </a>
              <a href="https://www.pinterest.com/lilacsavi/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-gold transition-colors">
                <PinIcon className="w-4 h-4" aria-hidden="true" /> @lilacsavi
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-navy text-cream rounded-2xl p-8 md:p-10 mb-12 print-break-inside">
          <p className="text-gold text-sm uppercase tracking-[0.2em] mb-6">Pinterest Analytics · Last 30 Days</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <p className="text-3xl md:text-4xl font-serif text-cream">14.48K</p>
              <p className="text-cream/60 text-sm mt-1 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5 text-green-400" aria-hidden="true" />
                Impressions · +998%
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif text-cream">3.61K</p>
              <p className="text-cream/60 text-sm mt-1 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-green-400" aria-hidden="true" />
                Total Audience · +1,168%
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif text-cream">337</p>
              <p className="text-cream/60 text-sm mt-1 flex items-center gap-1">
                <MousePointer className="w-3.5 h-3.5 text-green-400" aria-hidden="true" />
                Engagements · +3,787%
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif text-cream">121</p>
              <p className="text-cream/60 text-sm mt-1 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-green-400" aria-hidden="true" />
                Engaged Audience · +2,925%
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif text-cream">20</p>
              <p className="text-cream/60 text-sm mt-1 flex items-center gap-1">
                <Bookmark className="w-3.5 h-3.5 text-green-400" aria-hidden="true" />
                Saves · +1,300%
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif text-cream">6</p>
              <p className="text-cream/60 text-sm mt-1">Blog Posts Published</p>
            </div>
          </div>
        </div>

        {/* Content Examples */}
        <div className="mb-12 print-break-inside">
          <h2 className="font-serif text-2xl text-navy mb-6">Content Examples</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'My Watercolor Supply List for Beginners', cat: 'Art', url: '/blog/watercolor-supplies-for-beginners' },
              { title: "My Florida Beach Day Essentials", cat: 'Florida', url: '/blog/florida-beach-day-essentials' },
              { title: 'DIY Alicent Hightower Crown', cat: 'Crafts', url: '/blog/diy-alicent-hightower-crown' },
              { title: "TSITP Summer | My Pool Day Essentials", cat: 'Florida', url: '/blog/tsitp-summer-pool-essentials' },
            ].map((post) => (
              <a
                key={post.url}
                href={`https://www.lilacsavi.com${post.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-navy/10 rounded-xl p-4 hover:border-gold/50 hover:bg-gold/5 transition-colors"
              >
                <span className="text-gold text-xs uppercase tracking-[0.15em]">{post.cat}</span>
                <p className="text-navy font-medium mt-1">{post.title}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mb-12 print-break-inside">
          <h2 className="font-serif text-2xl text-navy mb-6">Partnership Opportunities</h2>
          <div className="space-y-4">
            {[
              { title: 'Dedicated Blog Post', desc: 'Honest, in-depth review with original photography and SEO-optimized content. Includes affiliate links and Pinterest pins.' },
              { title: 'Pinterest Pin Series', desc: '3-5 custom pins featuring your product in real Florida Gulf Coast settings. Optimized for search and saves.' },
              { title: 'Product Photography', desc: 'High-quality lifestyle shots of your product in use — beach, pool, home, or studio settings.' },
              { title: 'Gift Guide Inclusion', desc: 'Featured placement in a seasonal gift guide (holiday, summer, etc.) with affiliate tracking.' },
            ].map((service) => (
              <div key={service.title} className="border-l-4 border-gold pl-5 py-1">
                <p className="text-navy font-medium">{service.title}</p>
                <p className="text-navy/60 text-sm mt-0.5">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Niche & Audience */}
        <div className="mb-12 print-break-inside">
          <h2 className="font-serif text-2xl text-navy mb-6">Niche & Audience</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-navy font-medium mb-2">Content Focus</p>
              <ul className="text-navy/60 text-sm space-y-1">
                <li>Coastal lifestyle & Florida Gulf Coast living</li>
                <li>Honest product reviews & supply lists</li>
                <li>Watercolor art & creative DIY projects</li>
                <li>Beach, pool & outdoor essentials</li>
                <li>Pet content (Maine Coon life)</li>
              </ul>
            </div>
            <div>
              <p className="text-navy font-medium mb-2">Audience Profile</p>
              <ul className="text-navy/60 text-sm space-y-1">
                <li>Women 18-35 interested in coastal living</li>
                <li>Beginner artists & watercolor hobbyists</li>
                <li>Beach & pool enthusiasts</li>
                <li>Home decor & lifestyle shoppers</li>
                <li>High save-to-click intent (Pinterest shoppers)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gold/10 border border-gold/20 rounded-2xl p-8 md:p-10 text-center print-break-inside">
          <h2 className="font-serif text-2xl text-navy mb-3">Let Us Work Together</h2>
          <p className="text-navy/60 mb-6 max-w-md mx-auto">
            I am currently accepting brand partnerships for Q4 2026 and Q1 2027. 
            Open to affiliate programs, product collaborations, and sponsored content.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@lilacsavi.com"
              className="inline-flex items-center gap-2 bg-navy text-cream px-6 py-3 rounded-lg text-sm font-medium hover:bg-navy/90 transition-colors"
            >
              hello@lilacsavi.com
            </a>
            <a
              href="https://www.pinterest.com/lilacsavi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-navy/20 text-navy px-6 py-3 rounded-lg text-sm font-medium hover:border-gold hover:text-gold transition-colors"
            >
              <PinIcon className="w-4 h-4" aria-hidden="true" />
              @lilacsavi
            </a>
          </div>
        </div>

        {/* Print button */}
        <div className="text-center mt-10 no-print">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 text-navy/50 hover:text-navy text-sm transition-colors"
          >
            Print to PDF →
          </button>
        </div>
      </div>
    </div>
  )
}
