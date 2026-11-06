import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

const posts = [
  {
    slug: 'diy-alicent-hightower-crown',
    title: 'DIY Alicent Hightower Crown | Last-Minute House of the Dragon Halloween',
    excerpt: 'How I made Queen Alicent\'s iconic green crown in one afternoon with an old headband, half a meter of fabric, and a lot of Red Bull.',
    category: 'Crafts',
    date: 'October 2026',
    image: '/alicent-wearing.jpg',
    imageAlt: 'Savannah wearing a DIY green padded French hood crown with layered green and black tulle veil, gold jewels, and pearl earrings inspired by Alicent Hightower from House of the Dragon',
  },
  {
    slug: 'florida-beach-day-essentials',
    title: "My Florida Beach Day Essentials | What's in My Beach Bag",
    excerpt: 'The honest Florida beach day essentials list. Sand Cloud towels, mesh bags, sunscreen, and everything that survives the sand and salt. Plus what I packed once and never again.',
    category: 'Florida',
    date: 'October 2026',
    image: '/beach-essentials.jpg',
    imageAlt: 'Turquoise Sand Cloud towel and blue flip flops on sand at Gulf Coast sunset',
  },
  {
    slug: 'tsitp-summer-pool-essentials',
    title: "TSITP Summer | My Pool Day Essentials",
    excerpt: 'The Summer I Turned Pretty vibes meets Florida pool days. Funboy floats, Sand Cloud towels, and everything that makes a lazy afternoon feel like Cousins Beach.',
    category: 'Florida',
    date: 'October 2026',
    image: '/pool-cabana.jpg',
    imageAlt: 'Funboy floating cabana with blue and white striped canopy in a swimming pool with cup holders and fringe detail',
  },
  {
    slug: 'jeep-amazon-accessories',
    title: "My Jeep Amazon Accessories | What I Actually Added",
    excerpt: 'The Amazon finds that upgraded my black Jeep Wrangler for beach days, road trips, and everyday Florida living. Plus what I bought and returned.',
    category: 'Florida',
    date: 'October 2026',
    image: '/hero-jeep.jpg',
    imageAlt: 'Savannah sitting in open tailgate of black Jeep Wrangler at Florida beach with palm trees and Gulf water',
  },
  {
    slug: 'bruces-essentials-maine-coon-supplies',
    title: "Bruce's Essentials | What My Maine Coon Kitten Actually Uses",
    excerpt: 'The honest Maine Coon cat supply list. Cat tree, harness, brush, and treats that survived the test, plus what I bought and Bruce ignored.',
    category: 'Home',
    date: 'October 2026',
    image: '/bruce-studio.jpg',
    imageAlt: 'Bruce the blue tabby smoke Maine Coon kitten sitting on watercolor sketchbook with paintbrush under his paw',
  },
  {
    slug: 'watercolor-supplies-for-beginners',
    title: 'My Watercolor Supply List for Beginners',
    excerpt: 'The complete beginner watercolor supply list. The exact paint, paper, brushes and palette I use every day, plus what I bought and never use.',
    category: 'Art',
    date: 'October 2026',
    image: '/watercolor-supplies.jpg',
    imageAlt: 'Watercolor supplies flat lay showing Gansai Tambi Japanese watercolor palette, Fuumuui brushes, porcelain mixing dish, and sketchbook on striped cloth',
  },
]

export default function Blog() {
  return (
    <div className="pt-24 pb-20 px-6">
      <Helmet>
        <title>The Blog | lilacsavi</title>
        <meta name="description" content="Watercolor supply lists, coastal style, Florida beach guides, and honest product reviews. Everything I recommend is something I actually use." />
        <link rel="canonical" href="https://www.lilacsavi.com/blog" />
        <meta property="og:title" content="The Blog | lilacsavi" />
        <meta property="og:description" content="Watercolor supply lists, coastal style, and honest product reviews." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lilacsavi.com/blog" />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <div className="max-w-5xl mx-auto">
        <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4 text-center">The Blog</p>
        <h1 className="font-serif text-5xl md:text-6xl text-navy mb-4 text-center">Fresh Off the Desk</h1>
        <p className="text-navy/60 text-lg text-center max-w-xl mx-auto mb-16">
          Supply lists with honest reviews, outfit roundups, and Florida beach guides.
          Everything I recommend is something I actually use.
        </p>

        <div className="grid gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-warm-white overflow-hidden hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <article itemScope itemType="https://schema.org/BlogPosting">
                <meta itemProp="headline" content={post.title} />
                <meta itemProp="description" content={post.excerpt} />
                <meta itemProp="datePublished" content={post.date} />
                <meta itemProp="author" content="Savannah" />
                <link itemProp="url" href={`https://www.lilacsavi.com/blog/${post.slug}`} />
                <div className="grid md:grid-cols-3">
                  <div className="bg-navy/5 aspect-[4/3] md:aspect-auto overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width="600"
                      height="450"
                      itemProp="image"
                    />
                  </div>
                  <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-gold text-xs uppercase tracking-[0.2em]" itemProp="articleSection">{post.category}</span>
                      <span className="text-navy/30" aria-hidden="true">·</span>
                      <span className="text-navy/40 text-xs">{post.date}</span>
                      <span className="text-navy/30" aria-hidden="true">·</span>
                      <span className="text-navy/40 text-xs" itemProp="author">by Savannah</span>
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl text-navy mb-3 group-hover:text-gold transition-colors" itemProp="name">
                      {post.title}
                    </h2>
                    <p className="text-navy/60 leading-relaxed mb-4" itemProp="description">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-navy font-medium text-sm uppercase tracking-widest">
                      Read Post <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Categories */}
        <div className="mt-20">
          <h2 className="font-serif text-2xl text-navy mb-6 text-center">Browse by Topic</h2>
          <div className="flex flex-wrap justify-center gap-3" role="list" aria-label="Blog categories">
            {['Art', 'Crafts', 'Style', 'Home', 'Florida'].map((cat) => (
              <span
                key={cat}
                className="px-5 py-2 border border-navy/10 text-navy/60 text-sm uppercase tracking-widest hover:border-gold hover:text-gold transition-colors cursor-pointer"
                role="listitem"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
