import { Palette, Heart, Cat, Award, MapPin, BookOpen } from 'lucide-react'

export default function About() {
  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4 text-center">About</p>
        <h1 className="font-serif text-5xl md:text-6xl text-navy mb-12 text-center">About Savannah</h1>

        <div className="mb-12">
          <img
            src="/mural-selfie.jpg"
            alt="Savannah painting a large Japanese-inspired mural with gold clouds and watercolor figures"
            className="w-full aspect-[3/2] object-cover object-right"
            loading="eager"
            width="1200"
            height="800"
          />
          <p className="text-center text-navy/50 text-sm mt-4 italic font-serif">
            At work on a large-scale Japanese-inspired mural. The gold leaf stage is my favorite.
          </p>
        </div>

        <div className="prose-custom">
          <p>
            I'm Savannah — a watercolor artist and lifestyle blogger based on the Florida Gulf Coast.
            I split my time between the easel, the beach, and the back of a black jeep, documenting everything I learn along the way.
          </p>
          <p>
            My watercolor journey started with a Winsor & Newton travel set and a tiny journal, looking for a medium that would teach me to let go of control.
            I fell in love with the unpredictability instead. These days I paint everything from bookmarks and postcards to large-scale murals
            (including a Japanese-inspired piece with gold clouds that I'm particularly proud of).
          </p>
          <p>
            When I'm not painting, I'm styling western boots with sundresses, rearranging my blue and white porcelain collection,
            or harness-training Bruce, my Maine Coon kitten, for his future career as an adventure cat.
          </p>
          <p>
            This blog is my studio door left open: supply lists with honest reviews, outfit roundups, home decor experiments, and Florida beach guides.
            Everything I recommend is something I actually use — including the things I'd tell my past self to skip.
          </p>
          <p>
            Thanks for being here. Now go make something.
          </p>
        </div>

        {/* Credentials & Expertise — EEAT signals */}
        <div className="mt-16">
          <h2 className="font-serif text-2xl text-navy mb-6 text-center">Why I Write What I Write</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-warm-white p-6 text-center">
              <Palette className="w-8 h-8 text-gold mx-auto mb-3" aria-hidden="true" />
              <p className="font-serif text-xl text-navy mb-1">First-Hand Experience</p>
              <p className="text-navy/50 text-sm">Every supply list comes from my actual desk. I test everything before I recommend it.</p>
            </div>
            <div className="bg-warm-white p-6 text-center">
              <MapPin className="w-8 h-8 text-gold mx-auto mb-3" aria-hidden="true" />
              <p className="font-serif text-xl text-navy mb-1">Local Knowledge</p>
              <p className="text-navy/50 text-sm">Florida Gulf Coast native. My beach guides and style picks are rooted in real local life.</p>
            </div>
            <div className="bg-warm-white p-6 text-center">
              <Award className="w-8 h-8 text-gold mx-auto mb-3" aria-hidden="true" />
              <p className="font-serif text-xl text-navy mb-1">Honest Reviews</p>
              <p className="text-navy/50 text-sm">I include the regrets alongside the wins. No sponsored posts without full disclosure.</p>
            </div>
          </div>
        </div>

        {/* Topic pillars */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          <div className="bg-warm-white p-6 text-center">
            <BookOpen className="w-8 h-8 text-gold mx-auto mb-3" aria-hidden="true" />
            <p className="font-serif text-xl text-navy mb-1">Watercolor</p>
            <p className="text-navy/50 text-sm">Bookmarks to murals</p>
          </div>
          <div className="bg-warm-white p-6 text-center">
            <Heart className="w-8 h-8 text-gold mx-auto mb-3" aria-hidden="true" />
            <p className="font-serif text-xl text-navy mb-1">Style</p>
            <p className="text-navy/50 text-sm">Coastal cowgirl vibes</p>
          </div>
          <div className="bg-warm-white p-6 text-center">
            <Cat className="w-8 h-8 text-gold mx-auto mb-3" aria-hidden="true" />
            <p className="font-serif text-xl text-navy mb-1">Bruce</p>
            <p className="text-navy/50 text-sm">Maine Coon in training</p>
          </div>
        </div>
      </div>
    </div>
  )
}
