import { Link } from 'react-router-dom'
import { ArrowRight, PinIcon, Palette, Shirt, Home as HomeIcon, Sun } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import NewsletterSignup from '../components/NewsletterSignup'

const featuredPost = {
  slug: 'diy-alicent-hightower-crown',
  title: 'DIY Alicent Hightower Crown | Last-Minute House of the Dragon Halloween',
  excerpt: "How I made Queen Alicent's iconic green crown in one afternoon with an old headband, half a meter of fabric, and a lot of Red Bull.",
  category: 'Crafts',
  image: '/alicent-wearing.jpg',
}

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>lilacsavi | Watercolor Artist & Florida Gulf Coast Lifestyle</title>
        <meta name="description" content="Honest watercolor supply lists, coastal style, and Florida Gulf Coast living — written by Savannah, a working artist who tests everything before she recommends it." />
        <link rel="canonical" href="https://www.lilacsavi.com/" />
        <meta property="og:title" content="lilacsavi | Watercolor Artist & Florida Gulf Coast Lifestyle" />
        <meta property="og:description" content="Honest watercolor supply lists, coastal style, and Florida Gulf Coast living." />
        <meta property="og:image" content="https://www.lilacsavi.com/hero-jeep.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lilacsavi.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {/* Hero */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-navy"
        aria-label="Hero section"
      >
        <img
          src="/hero-jeep.jpg"
          alt="Savannah sitting in open tailgate of black Jeep Wrangler at Florida beach with palm trees and Gulf water"
          className="absolute inset-0 w-full h-full object-cover"
          width="5712"
          height="4284"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-navy/60" aria-hidden="true" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-6">Florida Gulf Coast</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream leading-tight mb-6">
            salt air<br />and wet paint
          </h1>
          <p className="text-cream/70 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Watercolor artist sharing outfits, home decor, beach days in the jeep, and everything I love — with links.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-gold text-navy px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-gold/90 transition-colors focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-navy"
          >
            Read the Blog <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28 px-6" aria-labelledby="intro-heading">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-navy/5 aspect-[3/4] flex items-center justify-center overflow-hidden">
            <img
              src="/mural-selfie.jpg"
              alt="Savannah painting a large Japanese-inspired mural with gold clouds and watercolor figures"
              className="w-full h-full object-cover object-right"
              loading="lazy"
              width="800"
              height="1000"
            />
          </div>
          <div>
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">Welcome</p>
            <h2 id="intro-heading" className="font-serif text-4xl md:text-5xl text-navy mb-6">
              Hey, I'm Savannah
            </h2>
            <p className="text-navy/70 text-lg leading-relaxed mb-6">
              I paint in watercolor, dress like the coast raised me, and live for beach days in my black jeep.
              This is where I share it all — the outfits, the decor, the art supplies, the lists of things I actually use.
            </p>
            <p className="text-navy/70 text-lg leading-relaxed mb-8">
              Pull up a chair. The light is good here.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-navy font-medium border-b-2 border-gold pb-1 hover:text-gold transition-colors"
            >
              More About Me <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-6 bg-warm-white" aria-labelledby="categories-heading">
        <div className="max-w-6xl mx-auto">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4 text-center">Explore</p>
          <h2 id="categories-heading" className="font-serif text-4xl md:text-5xl text-navy mb-12 text-center">
            What You'll Find Here
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Palette, title: 'Art', desc: 'Watercolor supply lists, honest reviews, and what I regret buying.', color: 'bg-navy/5' },
              { icon: Shirt, title: 'Style', desc: 'Coastal cowgirl outfits, boots and dresses, get-the-look roundups.', color: 'bg-gold/10' },
              { icon: HomeIcon, title: 'Home', desc: 'Cool girl decor, blue and white porcelain, artsy styling ideas.', color: 'bg-navy/5' },
              { icon: Sun, title: 'Florida', desc: 'Beach days, jeep adventures, Gulf Coast living.', color: 'bg-gold/10' },
            ].map((cat) => (
              <Link
                key={cat.title}
                to="/blog"
                className={`${cat.color} p-8 hover:shadow-lg transition-shadow group focus:outline-none focus:ring-2 focus:ring-gold`}
                aria-label={`Browse ${cat.title} category`}
              >
                <cat.icon className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
                <h3 className="font-serif text-2xl text-navy mb-2">{cat.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Preview */}
      <section className="py-20 md:py-28 px-6" aria-labelledby="latest-heading">
        <div className="max-w-5xl mx-auto">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4 text-center">Fresh Off the Desk</p>
          <h2 id="latest-heading" className="font-serif text-4xl md:text-5xl text-navy mb-12 text-center">
            Latest from the Blog
          </h2>
          <Link to={`/blog/${featuredPost.slug}`} className="group block focus:outline-none focus:ring-2 focus:ring-gold">
            <article className="bg-warm-white overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="bg-navy/5 aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt="Savannah wearing a DIY green padded French hood crown with layered green and black tulle veil, gold jewels, and pearl earrings inspired by Alicent Hightower from House of the Dragon"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-gold text-xs uppercase tracking-[0.2em]">{featuredPost.category}</span>
                    <span className="text-navy/30" aria-hidden="true">·</span>
                    <span className="text-navy/40 text-xs">by Savannah</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-navy mb-4 group-hover:text-gold transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-navy/60 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-navy font-medium text-sm uppercase tracking-widest">
                    Read Post <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </article>
          </Link>
        </div>
      </section>

      {/* Pinterest */}
      <section className="py-20 px-6 bg-navy text-cream" aria-labelledby="pinterest-heading">
        <div className="max-w-3xl mx-auto text-center">
          <PinIcon className="w-10 h-10 text-gold mx-auto mb-6" aria-hidden="true" />
          <h2 id="pinterest-heading" className="font-serif text-4xl md:text-5xl mb-4">Pin With Me</h2>
          <p className="text-cream/60 text-lg leading-relaxed mb-8">
            Daily outfit pins, art process videos, and Bruce the Maine Coon being a menace.
            It's more fun over there.
          </p>
          <a
            href="https://www.pinterest.com/lilacsavi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-gold text-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-gold hover:text-navy transition-colors focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-navy"
          >
            Follow on Pinterest <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 bg-warm-white" aria-labelledby="newsletter-heading">
        <div className="max-w-4xl mx-auto">
          <NewsletterSignup
            headline="Free watercolor supply checklist"
            description="Get the exact supply list I use every day — printable, checkbox-style, and tested by Bruce. Plus coastal vibes in your inbox."
          />
        </div>
      </section>
    </div>
  )
}
