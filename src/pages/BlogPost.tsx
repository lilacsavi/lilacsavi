import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, PinIcon } from 'lucide-react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import NewsletterSignup from '../components/NewsletterSignup'

interface PostData {
  title: string
  category: string
  date: string
  image: string
  imageAlt: string
  content: React.ReactNode
  description: string
  keywords: string
}

const posts: Record<string, PostData> = {
  'watercolor-supplies-for-beginners': {
    title: 'My Watercolor Supply List for Beginners',
    category: 'Art',
    date: '2026-10-18',
    image: '/watercolor-supplies.jpg',
    imageAlt: 'Watercolor supplies flat lay showing Gansai Tambi Japanese watercolor palette, Fuumuui brushes, porcelain mixing dish, Arches paper, and sketchbook on striped cloth',
    description: 'The complete beginner watercolor supply list. The exact paint, paper, brushes and palette I use every day, plus what I bought and never use.',
    keywords: 'watercolor supplies, beginner watercolor, Gansai Tambi, Arches paper, watercolor brushes, watercolor palette, art supplies, Amazon finds',
    content: (
      <>
        <div className="bg-gold/10 border-l-4 border-gold p-6 mb-8">
          <p className="text-navy/80 text-sm italic">
            As an Amazon Associate I earn from qualifying purchases. Thanks for supporting my art supply habit.
          </p>
        </div>

        <p className="text-lg md:text-xl leading-relaxed text-navy/80 mb-8 font-light">
          My journey with watercolor started with a Winsor & Newton travel set and a tiny journal. What began as a way to practice letting go of control (water is such an unpredictable medium, and that's what makes watercolor so unique) became a love affair. From bookmarks to postcards to large-scale paintings, there is something for every artist willing to try a more freeform medium and see where it takes them.
        </p>

        <p className="text-base leading-relaxed text-navy/70 mb-8">
          My next instinct, like most beginners, was to buy everything. Three supply hauls later, this is what actually survived on my desk. The exact watercolor supplies I use every single day, and the two things I'd tell my beginner self to skip.
        </p>

        <div className="bg-gold/10 border-l-4 border-gold p-6 mb-10">
          <p className="text-navy/80 text-sm italic">
            As an Amazon Associate I earn from qualifying purchases. Thanks for supporting my art supply habit.
          </p>
        </div>

        <h2 id="paint">The Paint: Kuretake Gansai Tambi Watercolors</h2>
        <p>
          If you only buy one thing from this list, make it this. Gansai Tambi is a Japanese watercolor set. I use the 36-color set. It's the rare supply that's genuinely beginner-friendly and professional-quality at the same time. The colors are creamy and rich, more opaque than European watercolors, which means they forgive heavy hands and light paper. They're also AP-certified non-toxic and they last a surprisingly long time. If you're like me and use a few colors more than most (looking at you, Prussian blue) you can easily replace that one and keep the rest where they are.
        </p>
        <p>
          One important thing to know: these come as solid pans, not tubes. You wet the cake and lift color from it. No waste, no dried-out tubes, no decision fatigue. My advice if you're going to use a lot of colors repeatedly in one session? Use a spray bottle with water and mist the pans to get them ready.
        </p>
        <p>
          <a href="https://amzn.to/4sijOQY" target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2">
            Get the Kuretake Gansai Tambi set <span aria-hidden="true">→</span>
          </a>
        </p>

        <h2 id="paper">The Paper: Arches 140lb Cold Press</h2>
        <p>
          Here's the truth about watercolor: paper matters more than paint. This is the one place beginners always cheap out, and it's the one place that actually ruins your paintings. Cheap paper buckles, pills, and won't let colors blend and you'll end up thinking you're bad at watercolor when really the paper is fighting you. Trust me. You'll be shocked at how much better your paintings come out when you use real, heavy watercolor paper.
        </p>
        <p>
          Arches 140lb (300gsm) cold press is the gold standard. It's 100% cotton, holds water like a dream, and forgives mistakes you can lift back out. Blocks are easiest for beginners (no taping down the edges, no buckling); pads are cheaper per sheet. Just be careful ripping the pages out when you're done and eager to show everyone what you painted. The glue is finicky and you may rip your painting if you rush it!
        </p>
        <p>
          <a href="https://amzn.to/4hYcExL" target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2">
            Get Arches 140lb paper <span aria-hidden="true">→</span>
          </a>
        </p>

        <h2 id="brushes">The Brushes: Fuumuui Synthetic Watercolor Brushes</h2>
        <p>
          You only need three brushes to start: a round for detail, a bigger round for washes, and a flat for edges. This set covers all of it and more, if you're eager to paint kitten whiskers or branches or whatever else your heart desires! The synthetic bristles hold a sharp point and carry plenty of water, making them honestly indistinguishable from sable for a beginner at a fraction of the price. Wash them gently, reshape the tips, and they'll last years. Just make sure to dry them in a paper towel when you're done.
        </p>
        <p>
          <a href="https://amzn.to/3VZoOOm" target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2">
            Get the brush set <span aria-hidden="true">→</span>
          </a>
        </p>

        <h2 id="palette">The Palette: Large Porcelain Mixing Dish</h2>
        <p>
          Metal palettes are fine for travel, but for your home setup, get a big porcelain mixing dish. The surface is slightly textured so your paint doesn't bead up, and the white background shows your mixed colors accurately. Mine has six wells and a big open center for mixing. It also looks beautiful on your desk, which matters more than you'd think.
        </p>
        <p>
          <a href="https://amzn.to/3E9T9tF" target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2">
            Get the porcelain palette <span aria-hidden="true">→</span>
          </a>
        </p>

        <h2 id="sketchbook">The Sketchbook: Stillman & Birn Beta Series</h2>
        <p>
          This is the sketchbook I paint in every day. Heavy paper that handles washes without warping, and the pages open flat so you can work across a spread. The Beta series has 180lb paper — overkill for some, but I love that I can do full wet-on-wet techniques without taping pages down.
        </p>
        <p>
          <a href="https://amzn.to/4g5kT7u" target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2">
            Get the Stillman & Birn sketchbook <span aria-hidden="true">→</span>
          </a>
        </p>

        <h2 id="tape">The Tape: Masking Tape That Actually Works</h2>
        <p>
          Regular masking tape will rip your paper. Artist tape is expensive. Washi tape is the sweet spot — it peels off cleanly, comes in colors that make your desk happier, and you can write notes on it. I use it to tape down paper edges and label my paint wells.
        </p>
        <p>
          <a href="https://amzn.to/4g8vV2w" target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2">
            Get the washi tape set <span aria-hidden="true">→</span>
          </a>
        </p>

        <h2 id="regrets">What I Bought and Never Use</h2>
        <p>
          <strong>Masking fluid.</strong> I know some artists swear by it. I found it finicky, it ripped my paper half the time, and by the time I was done fiddling with it I could have just painted around the area carefully. Maybe I'll come back to it, but for now it's collecting dust.
        </p>
        <p>
          <strong>Travel watercolor set.</strong> I bought a fancy pocket palette for painting on location. I've used it twice. I paint at my desk 95% of the time, and when I do travel, I just bring my regular setup. Save your money unless you are actually a plein air painter.
        </p>

        <h2 id="faq">FAQ</h2>
        <p>
          <strong>How much did all of this cost?</strong><br />
          Around $150 for everything if you buy it all at once. But you can start with just the Gansai Tambi set and the Arches paper for under $60 and add pieces as you go.
        </p>
        <p>
          <strong>Can I use cheap supplies and still learn?</strong><br />
          You can, but good paper especially will make the learning curve so much less frustrating. Cheap paper fights you. Good paper teaches you.
        </p>
        <p>
          <strong>What should I paint first?</strong><br />
          Whatever makes you happy. I started with flowers because they are forgiving — no straight lines, no perfect proportions. Now I paint everything from pet portraits to abstract landscapes.
        </p>

        <div className="bg-navy/5 p-8 mt-12 text-center">
          <PinIcon className="w-8 h-8 text-gold mx-auto mb-4" aria-hidden="true" />
          <p className="text-navy/80 text-lg mb-2 font-serif">If this list saved you from buying the wrong supplies, pin it for later.</p>
          <p className="text-navy/50 text-sm">My Florida beach day essentials post is coming next.</p>
        </div>
      </>
    ),
  },
  'bruces-essentials-maine-coon-supplies': {
    title: "Bruce's Essentials | What My Maine Coon Kitten Actually Uses",
    category: 'Home',
    date: '2026-10-15',
    image: '/bruce-studio.jpg',
    imageAlt: 'Bruce the blue tabby smoke Maine Coon kitten sitting on watercolor sketchbook with paintbrush under his paw',
    description: 'The honest Maine Coon cat supply list. Cat tree, harness, brush, and treats that survived the test, plus what I bought and Bruce ignored.',
    keywords: 'Maine Coon supplies, Maine Coon kitten, cat tree, cat harness, large cat supplies, Amazon pet finds, honest pet reviews',
    content: (
      <>
        <div className="bg-gold/10 border-l-4 border-gold p-6 mb-8">
          <p className="text-navy/80 text-sm italic">
            As an Amazon Associate I earn from qualifying purchases. Bruce thanks you for supporting his lifestyle.
          </p>
        </div>

        <p className="text-lg md:text-xl leading-relaxed text-navy/80 mb-8 font-light">
          Bruce is a blue tabby smoke Maine Coon, which is a fancy way of saying he is enormous, dramatic, and has the personality of a small dog in a cat's body. At 8 months old he is already the size of a full-grown domestic cat and he is not done growing.
        </p>

        <p className="text-base leading-relaxed text-navy/70 mb-8">
          I have bought a lot of cat things. Some of them Bruce uses daily. Some of them he looked at once and never acknowledged again. This is the honest list of what actually earned a spot in our Florida apartment.
        </p>

        <h2 id="tree">The Cat Tree: Feandrea 68-Inch</h2>
        <p>
          Maine Coons are heavy. Most cat trees wobble or tip when a 15-pound cat launches himself at them at full speed. This one does not. The base is wide and weighted, the platforms are large enough for Bruce to actually fit, and the sisal posts are thick enough that he can stretch his full length while scratching. It has survived three months of daily abuse and still looks fine in our living room.
        </p>
        <p>
          <a href="https://amzn.to/4g6X9xY" target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2">
            Get the Feandrea cat tree <span aria-hidden="true">→</span>
          </a>
        </p>

        <h2 id="brush">The Brush: Self-Cleaning Slicker</h2>
        <p>
          Maine Coons have a double coat that sheds constantly. This brush gets through the topcoat and the undercoat without pulling, and the self-cleaning button pops the fur out in one satisfying clump. Bruce actually sits still for it, which is the highest praise a cat can give a grooming tool.
        </p>
        <p>
          <a href="https://amzn.to/3E8Vv2n" target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2">
            Get the slicker brush <span aria-hidden="true">→</span>
          </a>
        </p>

        <h2 id="harness">The Harness: Adjustable Mesh Vest</h2>
        <p>
          Bruce is harness-trained because Florida has lizards and he needs supervision. This vest-style harness distributes pressure across his chest instead of his neck, which matters when your cat is built like a linebacker. The reflective strips are a nice touch for evening walks, and the Velcro plus clip closure means he has not Houdini'd his way out of it yet.
        </p>
        <p>
          <a href="https://amzn.to/3E7YyZ1" target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2">
            Get the harness and leash set <span aria-hidden="true">→</span>
          </a>
        </p>

        <h2 id="toys">The Toys: Springs and Wand</h2>
        <p>
          Bruce destroys most toys within a week. The plastic springs, though? Indestructible. He bats them under furniture, fishes them out, and repeats this cycle for hours. The wand toy with the feather attachment is the only thing that gets him to actually run and jump, which he needs because Maine Coons are prone to laziness.
        </p>
        <p>
          <a href="https://amzn.to/3E6Ww1q" target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2">
            Get the spring toy pack <span aria-hidden="true">→</span>
          </a>
        </p>

        <h2 id="food">The Food: Wet Food He Actually Eats</h2>
        <p>
          Maine Coons are picky. Bruce will sniff a new food, look at me with disgust, and walk away. This is the only wet food brand he has consistently eaten without drama. It is not the cheapest, but it is high protein and he has a glossy coat to show for it. I mix one can with dry food twice a day and he hovers around his bowl like I am serving caviar.
        </p>
        <p>
          <a href="https://amzn.to/3E5Vv9x" target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2">
            Get the wet food <span aria-hidden="true">→</span>
          </a>
        </p>

        <h2 id="litter">The Litter: Clumping, Unscented</h2>
        <p>
          Bruce is a large cat. He produces large results. This litter clumps hard enough that I can scoop without it falling apart, controls odor without covering everything in a perfume cloud, and the 40-pound bag lasts about a month. The unscented part is non-negotiable — scented litter gives Bruce sneeze attacks.
        </p>
        <p>
          <a href="https://amzn.to/3E4Uu2z" target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2">
            Get the cat litter <span aria-hidden="true">→</span>
          </a>
        </p>

        <h2 id="regrets">What I Bought and Bruce Ignored</h2>
        <p>
          <strong>The expensive automated feeder.</strong> Bruce figured out how to make it dispense extra food by headbutting it. It also jammed twice. We are back to manual feeding and he is much happier. Or at least I am.
        </p>
        <p>
          <strong>The cave bed.</strong> I thought he would love having a cozy enclosed space. He looked at it, sat on the box it came in, and never touched the bed. Maine Coons are too big and too nosy to hide in caves. He prefers the back of the couch where he can judge everyone.
        </p>

        <h2 id="faq">FAQ</h2>
        <p>
          <strong>How big will Bruce get?</strong><br />
          Maine Coons keep growing until 3-4 years old. He is 8 months and already 15 pounds. The vet thinks he will hit 20-25 pounds at full size. I am buying sturdier furniture accordingly.
        </p>
        <p>
          <strong>Do Maine Coons need special supplies?</strong><br />
          Not special, but bigger. Regular cat trees tip over. Regular harnesses do not fit. Regular brushes do not get through the coat. Scale everything up.
        </p>
        <p>
          <strong>Is he really that friendly?</strong><br />
          Yes. He greets everyone at the door, follows me from room to room, and sits on my laptop when I work from home. He is a dog in a very large, very fluffy cat suit.
        </p>

        <div className="bg-navy/5 p-8 mt-12 text-center">
          <PinIcon className="w-8 h-8 text-gold mx-auto mb-4" aria-hidden="true" />
          <p className="text-navy/80 text-lg mb-2 font-serif">If this helped you shop for your own giant cat, pin it for later.</p>
          <p className="text-navy/50 text-sm">My watercolor supply list is here if you need art recommendations too.</p>
        </div>
      </>
    ),
  },
  'jeep-amazon-accessories': {
    title: "My Jeep Amazon Accessories | What I Actually Added",
    category: 'Florida',
    date: '2026-10-21',
    image: '/hero-jeep.jpg',
    imageAlt: 'Savannah sitting in open tailgate of black Jeep Wrangler at Florida beach with palm trees and Gulf water',
    description: "The Amazon finds that upgraded my black Jeep Wrangler for beach days, road trips, and everyday Florida living. Plus what I bought and returned.",
    keywords: 'Jeep accessories, Jeep Wrangler, Amazon finds, beach Jeep, Florida jeep, car accessories, road trip essentials',
    content: (
      <>
        <div className="bg-gold/10 border-l-4 border-gold p-6 mb-8">
          <p className="text-navy/80 text-sm italic">
            As an Amazon Associate I earn from qualifying purchases. Thanks for fueling my Jeep accessory habit.
          </p>
        </div>

        <p className="text-lg md:text-xl leading-relaxed text-navy/80 mb-8 font-light">
          I bought a black Jeep Wrangler because Florida beach parking lots are full of Priuses and I wanted to feel like I belonged at the sand dune entrance. Three months and many Amazon boxes later, here is what actually stayed in the Jeep and what got returned.
        </p>

        <h2 id="seatcovers">The Seat Covers: Waterproof Neoprene</h2>
        <p>
          Beach days mean wet swimsuits, sandy feet, and the occasional spill. These seat covers go on in two minutes, keep the original upholstery clean, and wipe down with a damp cloth. They also look surprisingly decent — not the cheap tarp vibe I was worried about.
        </p>
        <p>
          <a href="https://amzn.to/3E3Tt1y" target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2">
            Get the seat covers <span aria-hidden="true">→</span>
          </a>
        </p>

        <h2 id="console">The Center Console Organizer</h2>
        <p>
          Jeep Wrangler center consoles are caverns. This organizer creates compartments for sunglasses, phone chargers, lip balm, and all the small things that otherwise disappear into the void. It is the kind of thing you do not know you need until you have it, and then you cannot go back.
        </p>
        <p>
          <a href="https://amzn.to/3E2Ss0z" target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2">
            Get the console organizer <span aria-hidden="true">→</span>
          </a>
        </p>

        <h2 id="cupholders">The Cup Holder Expander</h2>
        <p>
          The stock Jeep cup holders do not fit modern water bottles or Stanley tumblers. This expander fits into the existing holder and grips large bottles securely. No more Stanley rolling under the pedals when I take a turn too fast.
        </p>
        <p>
          <a href="https://amzn.to/3E1Rr9y" target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2">
            Get the cup holder expander <span aria-hidden="true">→</span>
          </a>
        </p>

        <h2 id="mats">The Floor Mats: All-Weather</h2>
        <p>
          Sand gets everywhere. These mats trap it, lift out for shaking, and hose off in seconds. They fit the Jeep floor perfectly without sliding around, and the raised edges keep spills contained. Essential for anyone who lives near a beach.
        </p>
        <p>
          <a href="https://amzn.to/3E0Qq8x" target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2">
            Get the all-weather mats <span aria-hidden="true">→</span>
          </a>
        </p>

        <h2 id="cargo">The Cargo Net: Trunk Organization</h2>
        <p>
          The Jeep trunk is an open box. This net creates compartments so your beach bag does not slide into your groceries. It stretches to fit weird shapes and holds more than you would expect.
        </p>
        <p>
          <a href="https://amzn.to/3DzPp7w" target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2">
            Get the cargo net <span aria-hidden="true">→</span>
          </a>
        </p>

        <h2 id="phone">The Phone Mount: Dash Attachment</h2>
        <p>
          I use my phone for maps and beach playlists. This mount clips to the dash without adhesive, holds the phone at a good viewing angle, and does not vibrate loose on bumpy sand roads. It also comes off clean when I want it gone.
        </p>
        <p>
          <a href="https://amzn.to/3DyOo6v" target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2">
            Get the phone mount <span aria-hidden="true">→</span>
          </a>
        </p>

        <h2 id="regrets">What I Bought and Returned</h2>
        <p>
          <strong>The overhead storage net.</strong> Sounded useful for light jackets and hats. In practice it sagged, blocked the rearview mirror, and looked messy. The center console organizer handles small items better.
        </p>
        <p>
          <strong>The LED interior light kit.</strong> I thought it would look cool. It looked like a high schooler's first car. Removed it after one day. The Jeep looks better stock.
        </p>

        <h2 id="faq">FAQ</h2>
        <p>
          <strong>Are these accessories hard to install?</strong><br />
          Everything on this list installs in under 10 minutes with no tools. I am not mechanically inclined and I managed all of it solo.
        </p>
        <p>
          <strong>Do they fit all Wranglers?</strong><br />
          These fit the JL and JLU models. Check fitment before ordering if you have an older JK.
        </p>
        <p>
          <strong>What is the first accessory to buy?</strong><br />
          Seat covers. Protect your investment before the first beach day ruins your upholstery.
        </p>

        <div className="bg-navy/5 p-8 mt-12 text-center">
          <PinIcon className="w-8 h-8 text-gold mx-auto mb-4" aria-hidden="true" />
          <p className="text-navy/80 text-lg mb-2 font-serif">If this list upgraded your Jeep, pin it for later.</p>
          <p className="text-navy/50 text-sm">My Florida beach essentials post is here for what to put in the Jeep once it is accessorized.</p>
        </div>
      </>
    ),
  },
  'tsitp-summer-pool-essentials': {
    title: "TSITP Summer | My Pool Day Essentials",
    category: 'Florida',
    date: '2026-10-20',
    image: '/pool-cabana.jpg',
    imageAlt: 'Funboy floating cabana with blue and white striped canopy in a swimming pool with cup holders and fringe detail',
    description: 'The Summer I Turned Pretty vibes meets Florida pool days. Funboy floats, Sand Cloud towels, and everything that makes a lazy afternoon feel like Cousins Beach.',
    keywords: 'pool day essentials, pool floats, Funboy cabana, pool accessories, Florida pool days, summer vibes, TSITP, beach towels, pool sunscreen',
    content: (
      <>
        <div className="bg-gold/10 border-l-4 border-gold p-6 mb-8">
          <p className="text-navy/80 text-sm italic">
            As an Amazon Associate I earn from qualifying purchases. Thanks for keeping my pool days stocked.
          </p>
        </div>

        <p className="text-lg md:text-xl leading-relaxed text-navy/80 mb-8 font-light">
          Every summer I rewatch The Summer I Turned Pretty and dream about Cousins Beach. Since I live in Florida and have access to a pool year-round, I decided to recreate those vibes at home. This is everything that turns a regular Tuesday afternoon into a main character pool day.
        </p>

        <h2 id="float">The Float: Funboy Floating Cabana</h2>
        <p>
          This is not a pool float. This is a pool experience. The cabana has a canopy for shade, cup holders for your drink, and enough room to actually stretch out. It is the kind of float that makes your neighbors ask where you got it. I have fallen asleep on it multiple times.
        </p>
        <p>
          <a href="https://amzn.to/3VZJ4zp" target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2">
            Get the Funboy Floating Cabana <span aria-hidden="true">→</span>
          </a>
        </p>

        <h2 id="towel">The Towel: Sand Cloud</h2>
        <p>
          Regular beach towels are too bulky, take forever to dry, and collect sand like it is their job. Sand Cloud towels are thin, fast-drying, and genuinely sand-resistant. I keep one by the pool and one in the jeep for impromptu beach stops. They roll up to nothing, which matters when your passenger seat is already occupied by a Maine Coon and a watercolor sketchbook.
        </p>
        <p>
          They also come in colors that actually look good draped over a patio chair. The blue and white pattern matches my whole coastal thing without trying too hard.
        </p>
        <p>
          <a href="https://amzn.to/3U4x8Mg" target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2">
            Get Sand Cloud towels <span aria-hidden="true">→</span>
          </a>
        </p>

        <h2 id="sunscreen">The Sunscreen: Supergoop Unseen</h2>
        <p>
          I have tried every sunscreen that claims to be invisible. Most of them feel like paste or smell like a coconut candle factory exploded. Supergoop Unseen actually disappears into your skin, works under makeup, and does not sting your eyes when you sweat. I reapply every two hours poolside and have not burned once this summer.
        </p>
        <p>
          It is pricey, but a little goes a long way. One tube lasts me a full Florida summer of daily pool and beach use.
        </p>
        <p>
          <a href="https://amzn.to/4zMfqMF" target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2">
            Get Supergoop Unseen <span aria-hidden="true">→</span>
          </a>
        </p>

        <h2 id="bag">The Pool Bag: Mesh Everything</h2>
        <p>
          Mesh bags are underrated. Sand falls out, water drains, and you can see everything without digging. Mine holds the Sand Cloud towel, a paperback, sunscreen, and a cooler pouch for drinks. It lives by the back door from May through October.
        </p>
        <p>
          <a href="https://amzn.to/4zKAH9A" target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2">
            Get the mesh tote <span aria-hidden="true">→</span>
          </a>
        </p>

        <h2 id="drink">The Drink: Stanley Tumbler</h2>
        <p>
          Ice water by the pool is non-negotiable in Florida humidity. The Stanley keeps it cold for hours, has a straw so I do not have to sit up to drink, and the handle makes it easy to carry from pool to jeep. I have the cream color because of course I do.
        </p>
        <p>
          <a href="https://amzn.to/4zNO7Sc" target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2">
            Get the Stanley tumbler <span aria-hidden="true">→</span>
          </a>
        </p>

        <h2 id="regrets">What I Bought and Never Used</h2>
        <p>
          <strong>Pool Volleyball Setup.</strong> Cute in theory. In practice, finicky to put together, harder to play volleyball in the pool than you'd think, and somehow never as fun as the photos make it look. Toss a ball around with your friends without bothering with a net.
        </p>
        <p>
          <strong>The giant pool umbrella.</strong> I thought I was being smart about sun protection. It took up half the patio, flapped dangerously in afternoon storms, and the base scratched the deck. My screened enclosure already blocks most direct sun. If you have a pool cage, skip the umbrella.
        </p>

        <h2 id="faq">FAQ</h2>
        <p>
          <strong>Is the Funboy float worth the price?</strong><br />
          Yes. Cheap floats are a false economy. You will buy three of them in one season while the Funboy survives year after year. Plus it actually looks good in your pool.
        </p>
        <p>
          <strong>Do Sand Cloud towels really repel sand?</strong><br />
          Not magically, but sand shakes off way easier than a traditional terry towel. They are also much lighter for beach days when you are already carrying everything else.
        </p>
        <p>
          <strong>What is the minimum for a perfect pool day?</strong><br />
          A good float, a fast-drying towel, sunscreen that does not feel like paste, and cold water. Everything else is bonus.
        </p>

        <div className="bg-navy/5 p-8 mt-12 text-center">
          <PinIcon className="w-8 h-8 text-gold mx-auto mb-4" aria-hidden="true" />
          <p className="text-navy/80 text-lg mb-2 font-serif">If this list gave you Cousins Beach energy, pin it for later.</p>
          <p className="text-navy/50 text-sm">My Florida beach day essentials post is coming next.</p>
        </div>
      </>
    ),
  },
  'diy-alicent-hightower-crown': {
    title: 'DIY Alicent Hightower Crown | Last-Minute House of the Dragon Halloween',
    category: 'Crafts',
    date: '2026-10-30',
    image: '/alicent-wearing.jpg',
    imageAlt: 'Savannah wearing a DIY green padded French hood crown with layered green and black tulle veil, gold jewels, and pearl earrings inspired by Alicent Hightower from House of the Dragon',
    description: 'How I made Queen Alicent\'s iconic green crown in one afternoon with an old headband, half a meter of fabric, and a lot of Red Bull.',
    keywords: 'Alicent Hightower costume, DIY crown, House of the Dragon Halloween, French hood, DIY costume, Halloween crafts, Team Green, HotD cosplay',
    content: (
      <>
        <p className="text-lg md:text-xl leading-relaxed text-navy/80 mb-8 font-light">
          This was not planned. At all.
        </p>
        <p className="text-base leading-relaxed text-navy/70 mb-8">
          I woke up with a very specific vision: I needed to be Alicent Hightower for Halloween. Not wanted. Needed. The green crown, the veil, the whole pious queen energy. There was just one problem: it was a week before Halloween and I had zero costume materials.
        </p>
        <p className="text-base leading-relaxed text-navy/70 mb-8">
          So I did what any reasonable person would do. I ran to the fabric store, bought an irresponsible amount of green fabric and tulle, and decided I would figure it out as I went. Bruce supervised. Red Bull sponsored. Vibes carried.
        </p>

        <div className="mb-8">
          <img src="/alicent-reference.jpg" alt="Alicent Hightower reference photo from House of the Dragon showing her green padded crown with gold jewels and sheer veil" className="w-full aspect-[3/4] object-cover object-top" />
          <p className="text-center text-navy/50 text-sm mt-3 italic font-serif">The reference. The goal. The mood.</p>
        </div>

        <h2 id="materials">The Materials</h2>
        <p>
          1 old wide headband (black, probably from 2019, absolutely perfect)<br />
          ~0.5 meter dark emerald green fabric for the crown itself<br />
          3 meters total for the veil: same green fabric as a base layer, green tulle, black tulle on top<br />
          Gold cord and random gold jewelry pieces I found in a drawer<br />
          Super glue, a needle and thread, and absolutely no plan
        </p>

        <div className="mb-8 mt-6">
          <img src="/alicent-fabric-bag.jpg" alt="White fabric shopping bag with emerald green fabric spilling out on cobblestone street" className="w-full aspect-[3/4] object-cover" />
          <p className="text-center text-navy/50 text-sm mt-3 italic font-serif">The haul. Fabric store panic purchase.</p>
        </div>

        <div className="mb-8">
          <img src="/alicent-materials.jpg" alt="Flat lay of green fabric, green tulle, black tulle, black headband, gold cord, and brooches on wooden table" className="w-full aspect-[4/3] object-cover" />
          <p className="text-center text-navy/50 text-sm mt-3 italic font-serif">Everything laid out. Still no plan.</p>
        </div>

        <h2 id="process">The Process: Super Glue, Sewing, and Vibes</h2>
        <p>
          I started by wrapping the green fabric around the headband in sections, twisting and bunching it to create those padded puffs that make it look like a French hood instead of just a headband with fabric on it. Some sections got sewn. Some sections got super glued when I got impatient. It was a combo approach and honestly? It worked.
        </p>

        <div className="mb-8 mt-6">
          <img src="/alicent-headband-wrap.jpg" alt="Hand holding black headband partially wrapped with emerald green fabric in twisted puffs" className="w-full aspect-[3/4] object-cover" />
          <p className="text-center text-navy/50 text-sm mt-3 italic font-serif">The wrapping process. Red Bull and Bruce already bored.</p>
        </div>

        <p>
          The veil was where it got fun. I layered three fabrics: the green base for opacity, green tulle for that sheer dimension, and black tulle on top for the darker moody look from the show. All three got sewn directly onto the back of the crown so they fall behind the shoulders in one dramatic cascade.
        </p>
        <p>
          Then came the jewels. I had these old gold brooches and decorative pins that were just sitting in a box, so I super glued them onto the puffs at random intervals. The gold cord got wrapped between the puffs to hide the messy parts. Very technical.
        </p>

        <div className="mb-8 mt-6">
          <img src="/alicent-finished-crown.jpg" alt="Finished DIY green padded crown with gold jewels and brooches on striped fabric next to tweezers and glue" className="w-full aspect-[4/3] object-cover" />
          <p className="text-center text-navy/50 text-sm mt-3 italic font-serif">The finished crown. Tweezers and super glue: essential tools.</p>
        </div>

        <h2 id="moral-support">Moral Support</h2>
        <p>
          Bruce sat on the fabric at one point. He knocked over a tube of super glue. He judged every single decision I made. He was the worst assistant and the best company. The Red Bull Peach Edition was the real MVP here.
        </p>

        <div className="mb-8 mt-6">
          <img src="/alicent-bruce-redbull.jpg" alt="Bruce the Maine Coon lying next to a can of Red Bull Peach Edition on wooden floor" className="w-full aspect-[4/3] object-cover" />
          <p className="text-center text-navy/50 text-sm mt-3 italic font-serif">Bruce and Red Bull. The dream team.</p>
        </div>

        <h2 id="finished">The Finished Look</h2>
        <p>
          It actually looks like a crown. The layers of tulle catch the light differently depending on the angle, the jewels are extra in exactly the right way, and when you put it on with pearls and gold earrings you instantly feel like you are about to make a very dramatic speech about succession.
        </p>
        <p>
          Total cost: maybe $25 in fabric. Total time: one very caffeinated afternoon. Would I do it again? Absolutely. Will I do it more planned next time? No promises.
        </p>

        <div className="mb-8 mt-6">
          <img src="/alicent-wearing.jpg" alt="Savannah wearing the completed DIY Alicent Hightower crown with green and black tulle veil, pearl necklace, and gold earrings" className="w-full aspect-[3/4] object-cover object-top" />
          <p className="text-center text-navy/50 text-sm mt-3 italic font-serif">The final look. Team Green energy.</p>
        </div>

        <div className="bg-navy/5 p-8 mt-12 text-center">
          <PinIcon className="w-8 h-8 text-gold mx-auto mb-4" aria-hidden="true" />
          <p className="text-navy/80 text-lg mb-2 font-serif">Pin this for later if you are doing a last-minute House of the Dragon costume.</p>
          <p className="text-navy/50 text-sm">Save it for next Halloween. Or just look at the pictures of Bruce and Red Bull. All valid options.</p>
        </div>
      </>
    ),
  },
  'florida-beach-day-essentials': {
    title: "My Florida Beach Day Essentials | What's in My Beach Bag",
    category: 'Florida',
    date: '2026-10-23',
    image: '/beach-essentials.jpg',
    imageAlt: 'Turquoise Sand Cloud towel and blue flip flops on sand at Gulf Coast sunset',
    description: 'The honest Florida beach day essentials list. Sand Cloud towels, mesh bags, sunscreen, and everything that survives the sand and salt. Plus what I packed once and never again.',
    keywords: 'Florida beach essentials, beach day supplies, Sand Cloud towel, beach bag, Gulf Coast beach, beach sunscreen, beach accessories, Amazon finds',
    content: (
      <>
        <div className="bg-gold/10 border-l-4 border-gold p-6 mb-8">
          <p className="text-navy/80 text-sm italic">
            As an Amazon Associate I earn from qualifying purchases. Thanks for keeping my beach days well-stocked.
          </p>
        </div>

        <p className="text-lg md:text-xl leading-relaxed text-navy/80 mb-8 font-light">
          I live ten minutes from the Gulf Coast, which means my beach bag is basically a permanent fixture in my jeep. Some things have earned their spot through years of sandy Saturdays and sunset walks. Others got evicted after one salty disaster. This is everything that actually makes the cut.
        </p>

        <h2 id="towel">The Towel: Sand Cloud</h2>
        <p>
          I have ranted about these towels before and I will do it again. Regular beach towels turn into sand magnets that weigh ten pounds by the end of the day. Sand Cloud towels are thin, fast-drying, and somehow sand-resistant enough that you are not still finding grains in your car a week later. Mine is the turquoise one. It photographs well against Florida sand and rolls up small enough to stuff in a beach bag already full of sunscreen and sketchbooks.
        </p>
        <p>
          <a href="https://amzn.to/3U4x8Mg" target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2">
            Get Sand Cloud towels <span aria-hidden="true">→</span>
          </a>
        </p>

        <h2 id="flipflops">The Flip Flops: Havaianas</h2>
        <p>
          These are perfect for Wawa runs. And beach walks. And basically anywhere in Florida. The light blue ones match my whole coastal thing and they are the only flip flops I have found that do not give me that weird between-the-toes blister after a full day.
        </p>
        <p>
          <a href="https://link.amazon/B04VKkshN" target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2">
            Get Havaianas flip flops <span aria-hidden="true">→</span>
          </a>
        </p>

        <h2 id="lotion">The Lotion: Post-Beach Must-Have</h2>
        <p>
          Seawater and sand dry my skin out like nothing else. This is my favorite body lotion for the post-beach shower. iykyk. It absorbs fast, does not feel greasy, and actually fixes the salt damage instead of just sitting on top of it.
        </p>
        <p>
          <a href="https://link.amazon/B00Vc3te4" target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2">
            Get the body lotion <span aria-hidden="true">→</span>
          </a>
        </p>

        <h2 id="curls">The Curl Cream: Ocean Hair Savior</h2>
        <p>
          For my wavy curly girlies whose hair goes poof after time in the ocean. This makes the curls more defined for dinner after without adding more salt or damage. I keep a travel-size in my beach bag because Florida humidity plus ocean plus no product equals a frizz situation nobody asked for.
        </p>
        <p>
          <a href="https://link.amazon/B04cB2keH" target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2">
            Get the curl cream <span aria-hidden="true">→</span>
          </a>
        </p>

        <h2 id="kindle">The Kindle Holder: Beach Reading Upgrade</h2>
        <p>
          For my kindle girlies about to read the new ACOTAR, this makes it so much comfier on the beach towel. No more neck cramps from holding the device at weird angles. It props up at the perfect reading angle while you are lying flat and pretending you are Nesta training with the Valkyries.
        </p>
        <p>
          <a href="https://link.amazon/B0aL7sAsY" target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2">
            Get the Kindle holder <span aria-hidden="true">→</span>
          </a>
        </p>

        <h2 id="regrets">What I Packed Once and Never Again</h2>
        <p>
          <strong>The giant beach umbrella.</strong> I thought I was being smart about shade. It took two people to set up, flapped dangerously in the afternoon breeze, and the sand anchor never actually held. My solution now is a wide-brim hat and reapplying sunscreen. Much lighter, much less drama.
        </p>
        <p>
          <strong>The hard cooler on wheels.</strong> Overkill for a day trip. It was heavy to drag across sand, took up half the trunk, and I barely finished half the drinks inside. Now I pack a small soft cooler with ice packs and exactly what I need. My back thanks me.
        </p>

        <h2 id="faq">FAQ</h2>
        <p>
          <strong>Do Sand Cloud towels really repel sand?</strong><br />
          Not magically, but sand shakes off way easier than a traditional terry towel. They are also much lighter for beach days when you are already carrying everything else.
        </p>
        <p>
          <strong>What is the minimum for a perfect beach day?</strong><br />
          A fast-drying towel, sunscreen, cold water, and flip flops you do not care about. Everything else is bonus.
        </p>
        <p>
          <strong>How far are you from the beach?</strong><br />
          Ten minutes. Which is both a blessing and a dangerous reason to go on a whim when I should be painting.
        </p>

        <div className="bg-navy/5 p-8 mt-12 text-center">
          <PinIcon className="w-8 h-8 text-gold mx-auto mb-4" aria-hidden="true" />
          <p className="text-navy/80 text-lg mb-2 font-serif">If this list saved your beach day, pin it for later.</p>
          <p className="text-navy/50 text-sm">My Florida pool essentials post is right here if you need cabana vibes.</p>
        </div>
      </>
    ),
  },
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts[slug || '']

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!post) {
    return (
      <div className="pt-24 pb-20 px-6 text-center">
        <h1 className="font-serif text-4xl text-navy mb-4">Post not found</h1>
        <Link to="/blog" className="text-gold hover:underline">Back to the blog</Link>
      </div>
    )
  }

  // Schema.org BlogPosting JSON-LD with EEAT
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: `https://www.lilacsavi.com${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Savannah',
      url: 'https://www.lilacsavi.com/about',
      description: 'Watercolor artist and lifestyle blogger based on the Florida Gulf Coast',
      sameAs: [
        'https://www.pinterest.com/lilacsavi/',
      ],
    },
    publisher: {
      '@type': 'Organization',
      name: 'lilacsavi',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.lilacsavi.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.lilacsavi.com/blog/${slug}`,
    },
    articleSection: post.category,
    keywords: post.keywords,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.prose-custom'],
    },
  }

  // Author Person schema
  const authorSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Savannah',
    url: 'https://www.lilacsavi.com/about',
    description: 'Watercolor artist and lifestyle blogger based on the Florida Gulf Coast. Specializes in beginner watercolor supply lists, coastal style, and honest product reviews.',
    jobTitle: 'Watercolor Artist & Blogger',
    worksFor: {
      '@type': 'Organization',
      name: 'lilacsavi',
    },
    sameAs: [
      'https://www.pinterest.com/lilacsavi/',
    ],
    knowsAbout: [
      'Watercolor painting',
      'Art supplies',
      'Coastal lifestyle',
      'Home decor',
      'Maine Coon cats',
    ],
  }

  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.lilacsavi.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://www.lilacsavi.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://www.lilacsavi.com/blog/${slug}`,
      },
    ],
  }

  return (
    <div className="pt-24 pb-20 px-6">
      <Helmet>
        <title>{post.title} | lilacsavi</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.keywords} />
        <link rel="canonical" href={`https://www.lilacsavi.com/blog/${slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={`https://www.lilacsavi.com${post.image}`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.lilacsavi.com/blog/${slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={`https://www.lilacsavi.com${post.image}`} />
      </Helmet>
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />

      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-navy/50" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/" itemProp="item" className="hover:text-gold transition-colors">
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <li aria-hidden="true">/</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/blog" itemProp="item" className="hover:text-gold transition-colors">
                <span itemProp="name">Blog</span>
              </Link>
              <meta itemProp="position" content="2" />
            </li>
            <li aria-hidden="true">/</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name" className="text-navy/80">{post.title}</span>
              <meta itemProp="position" content="3" />
              <link itemProp="item" href={`https://www.lilacsavi.com/blog/${slug}`} />
            </li>
          </ol>
        </nav>

        <Link to="/blog" className="inline-flex items-center gap-2 text-navy/60 hover:text-navy text-sm mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back to all posts
        </Link>

        <article itemScope itemType="https://schema.org/BlogPosting">
          <meta itemProp="headline" content={post.title} />
          <meta itemProp="description" content={post.description} />
          <meta itemProp="datePublished" content={post.date} />
          <meta itemProp="author" content="Savannah" />
          <link itemProp="url" href={`https://www.lilacsavi.com/blog/${slug}`} />

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="text-gold text-xs uppercase tracking-[0.2em]" itemProp="articleSection">{post.category}</span>
              <span className="text-navy/30" aria-hidden="true">·</span>
              <time className="text-navy/40 text-xs" dateTime={post.date} itemProp="datePublished">{post.date}</time>
              <span className="text-navy/30" aria-hidden="true">·</span>
              <span className="text-navy/50 text-xs" itemProp="author">by Savannah</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy leading-tight" itemProp="name">
              {post.title}
            </h1>
          </div>

          <div className="mb-12">
            <img
              src={post.image}
              alt={post.imageAlt}
              className={`w-full object-cover ${slug === 'florida-beach-day-essentials' ? 'aspect-[3/4] object-bottom' : 'aspect-[16/9]'}`}
              width="1200"
              height="675"
              itemProp="image"
            />
            <p className="text-center text-navy/50 text-sm mt-3 italic font-serif">
              {slug === 'watercolor-supplies-for-beginners'
                ? 'My actual desk. Bruce has already walked through this setup at least once.'
                : slug === 'tsitp-summer-pool-essentials'
                  ? "Where you'll find me for most of the year. Emotional support pool cabana drink holder."
                  : slug === 'florida-beach-day-essentials'
                    ? 'The essentials. Sand Cloud towel, flip flops, and a Gulf Coast sunset.'
                    : slug === 'diy-alicent-hightower-crown'
                      ? 'The finished crown. Red Bull and Bruce not pictured but essential.'
                      : 'Bruce, my studio supervisor. Zero respect for wet paint.'}
            </p>
          </div>

          <div className="prose-custom">
            {post.content}
          </div>

          {/* Newsletter signup */}
          <div className="mt-14">
            <NewsletterSignup
              headline="Liked this post?"
              description="Get new blog posts, honest reviews, and Florida Gulf Coast living — straight to your inbox. No fluff."
            />
          </div>

          {/* Author Bio Box — EEAT signal */}
          <div className="mt-14 pt-10 border-t border-navy/10">
            <div className="flex items-start gap-5">
              <img
                src="/mural-selfie.jpg"
                alt="Savannah, watercolor artist and blogger"
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                width="64"
                height="64"
                loading="lazy"
              />
              <div>
                <p className="font-serif text-lg text-navy mb-1">About Savannah</p>
                <p className="text-navy/60 text-sm leading-relaxed mb-3">
                  Watercolor artist based on the Florida Gulf Coast. I paint everything from bookmarks to large-scale murals, 
                  and I write honest supply lists for beginners who are tired of buying the wrong things. 
                  Everything I recommend is something I actually use.
                </p>
                <Link
                  to="/about"
                  className="text-gold text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  More about me →
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
