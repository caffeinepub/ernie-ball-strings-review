import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Music, Guitar, Award, TrendingUp, Shield, Zap } from "lucide-react";

const AMAZON_LINK =
  "https://www.amazon.com/dp/B00CAV0TRQ?_encoding=UTF8&pd_rd_w=GafdC&content-id=amzn1.sym.007cf29a-3558-4543-be3a-b0daa6e9ab23%3Aamzn1.symc.c4294327-d82f-4435-9c76-4adf141af8d9&pf_rd_p=007cf29a-3558-4543-be3a-b0daa6e9ab23&pf_rd_r=H2RT56JJ5T8NY01V9A2R&pd_rd_wg=6ytUi&pd_rd_r=a0a33420-b733-4ce9-aa3c-ae3f7a844511&th=1&linkCode=ll1&tag=stopoutletshop-20&linkId=ec350072a0763637aaf3980f44bec17e&language=en_US&ref_=as_li_ss_tl";

function App() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Guitar className="h-6 w-6 text-primary" />
            <span className="font-serif text-xl font-bold">StringTalk</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#review" className="text-sm hover:text-primary transition-colors">
              Review
            </a>
            <a href="#features" className="text-sm hover:text-primary transition-colors">
              Features
            </a>
            <a href="#legends" className="text-sm hover:text-primary transition-colors">
              Legends
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="absolute inset-0 bg-[url('/assets/generated/hero-guitar-strings.dim_1200x600.jpg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="mb-4" variant="secondary">
              <Music className="h-3 w-3 mr-1" />
              Professional Gear Review
            </Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              Ernie Ball Regular Slinky Review:{" "}
              <span className="text-primary">Pack of Legends</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The iconic strings trusted by Slash, Eric Clapton, and Metallica. Discover why
              these 10-46 gauge nickel wound strings have defined rock and roll for over 60
              years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild className="text-base px-8 shadow-lg hover:shadow-xl transition-shadow">
                <a href={AMAZON_LINK} target="_blank" rel="noopener noreferrer">
                  <Award className="mr-2 h-5 w-5" />
                  Purchase on Amazon
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#review">Read Full Review</a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground pt-2">
              As an Amazon Associate, I earn from qualifying purchases.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Introduction */}
        <section id="review" className="mb-16 scroll-mt-20">
          <article className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-foreground/90">
              As I sit here, reminiscing about the countless hours spent strumming my guitar,
              I can't help but feel a surge of nostalgia. Growing older has a way of making
              you appreciate the little things—the subtle nuances that make a big difference
              in your musical journey. One such aspect that has significantly impacted my
              playing is the choice of guitar strings.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              Today, I want to share my experience with the{" "}
              <strong>Ernie Ball Regular Slinky Nickel Wound Electric Guitar Strings 3 Pack</strong>,
              specifically the 10-46 gauge. These strings have been used by legends like Slash
              and Eric Clapton, and they come with Element Shield Packaging to keep them fresh
              longer.
            </p>
          </article>
        </section>

        {/* Key Features */}
        <section id="features" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-serif font-bold mb-8">Why This Product Stands Out</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <Shield className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-serif font-bold text-lg mb-2">Element Shield</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced packaging technology that prolongs string life and maintains that
                  fresh-out-of-the-box tone for longer.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <TrendingUp className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-serif font-bold text-lg mb-2">3-Pack Value</h3>
                <p className="text-sm text-muted-foreground">
                  Three individually wrapped sets in one pack—cost-effective and always ready
                  when you need a fresh set.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <Zap className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-serif font-bold text-lg mb-2">10-46 Gauge</h3>
                <p className="text-sm text-muted-foreground">
                  Industry standard gauge offering the perfect balance of flexibility and
                  tension for any genre.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Button size="lg" asChild className="shadow-lg">
              <a href={AMAZON_LINK} target="_blank" rel="noopener noreferrer">
                Get Your 3-Pack Now
              </a>
            </Button>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Discovery Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Discovering the Ernie Ball Regular Slinky
          </h2>
          <article className="prose prose-lg max-w-none space-y-4">
            <p className="text-lg leading-relaxed text-foreground/90">
              My quest for the perfect guitar strings began years ago. I tried various brands,
              each promising superior sound quality and durability. However, it wasn't until I
              stumbled upon the Ernie Ball Regular Slinky Nickel Wound Electric Guitar Strings
              that I felt I had found my match.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              The first thing that caught my attention was the packaging. The Element Shield
              Packaging is not just a gimmick; it genuinely keeps the strings fresh, which is
              crucial for maintaining that bright, balanced tone we all crave.
            </p>
          </article>
        </section>

        {/* History Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-6">A History in the Making</h2>
          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed">
                Ernie Ball has been a household name in the music industry since 1962. They
                were the first to design strings specifically for rock and roll, understanding
                the unique demands of this genre. Over the decades, they have continued to
                innovate, ensuring that their products meet the evolving needs of musicians
                worldwide.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Legends Section */}
        <section id="legends" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-serif font-bold mb-6">Legends and Their Endorsements</h2>
          <p className="text-lg leading-relaxed text-foreground/90 mb-8">
            When you think of guitar legends, names like Slash, Jimmy Page, and Eric Clapton
            come to mind. These icons have one thing in common: they trust Ernie Ball Regular
            Slinky strings.
          </p>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-serif font-bold text-xl mb-3 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Slash
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Known for his powerful riffs and solos, Slash has relied on Ernie Ball
                  strings throughout his illustrious career. He appreciates the consistency
                  and tone that these strings provide, which are essential for his dynamic
                  playing style.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-serif font-bold text-xl mb-3 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Jimmy Page
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  The legendary Led Zeppelin guitarist, Jimmy Page, has been a long-time user
                  of Ernie Ball strings. His intricate fingerpicking and powerful strumming
                  require strings that can keep up, and Ernie Ball delivers every time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-serif font-bold text-xl mb-3 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Eric Clapton
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Eric Clapton's soulful playing has touched millions, and his choice of
                  strings reflects his commitment to quality. Ernie Ball strings offer the
                  perfect blend of tone and durability, which is why Clapton has stuck with
                  them for years.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-serif font-bold text-xl mb-3 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Metallica
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  The heavy metal giants, Metallica, demand strings that can handle their
                  aggressive playing style. Ernie Ball Regular Slinky strings provide the
                  durability and tone needed to power through their intense performances.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Button size="lg" asChild className="shadow-lg">
              <a href={AMAZON_LINK} target="_blank" rel="noopener noreferrer">
                Play Like the Legends
              </a>
            </Button>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Versatility Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-6">Perfect for Various Genres</h2>
          <article className="prose prose-lg max-w-none space-y-4">
            <p className="text-lg leading-relaxed text-foreground/90">
              One of the things I love most about the Ernie Ball Regular Slinky strings is
              their versatility. Whether you're into jazz, rock, blues, or even country, these
              strings can handle it all. The 10-46 gauge strikes the perfect balance, offering
              enough tension for robust strumming while still allowing for smooth bends and
              intricate fingerpicking.
            </p>
          </article>
        </section>

        {/* Technical Marvel */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-6">
            The Technical Marvel: 10-46 Gauge
          </h2>
          <article className="prose prose-lg max-w-none space-y-4">
            <p className="text-lg leading-relaxed text-foreground/90">
              The 10-46 gauge is often referred to as the industry standard, and for good
              reason. This gauge provides a balanced feel, making it easier to play fast
              passages without sacrificing tone. The thicker bass strings (E, A, D) offer a
              full, rich sound, while the thinner treble strings (G, B, high E) are perfect for
              those soaring solos.
            </p>
          </article>
        </section>

        {/* Element Shield */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Element Shield Packaging: A Gamechanger
          </h2>
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed mb-4">
                Let's talk about the Element Shield Packaging for a moment. This innovative
                packaging technology is designed to prolong the life of your strings by
                protecting them from corrosion and moisture. As someone who lives in a humid
                climate, this feature has been a lifesaver.
              </p>
              <p className="text-lg leading-relaxed">
                The Element Shield ensures that each set of strings remains as fresh as the day
                they were manufactured, giving you consistent performance every time you open a
                new pack.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Quality Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Quality Material and Construction
          </h2>
          <article className="prose prose-lg max-w-none space-y-4">
            <p className="text-lg leading-relaxed text-foreground/90">
              The nickel wound construction of these strings is another highlight. Nickel
              provides a warm, smooth tone that is both versatile and pleasing to the ear. The
              winding process is meticulous, ensuring that each string is uniform and free from
              defects. This attention to detail translates into a superior playing experience.
            </p>
          </article>
        </section>

        {/* Tone Quality */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-6">Bright, Balanced Tone</h2>
          <article className="prose prose-lg max-w-none space-y-4">
            <p className="text-lg leading-relaxed text-foreground/90">
              The tone of the Ernie Ball Regular Slinky strings is simply outstanding. They
              offer a bright, balanced sound that cuts through the mix without being harsh. The
              bass strings are full and punchy, while the treble strings are clear and
              articulate. This balance is crucial for achieving a well-rounded tone, whether
              you're playing rhythm or lead.
            </p>
          </article>
        </section>

        {/* Personal Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-6">My Personal Experience</h2>
          <article className="prose prose-lg max-w-none space-y-4">
            <p className="text-lg leading-relaxed text-foreground/90">
              When I first switched to Ernie Ball Regular Slinky strings, I noticed an
              immediate difference. The feel under my fingers was smooth yet responsive, and
              the tone was richer than anything I had experienced before. I found myself
              spending more time playing, simply because it was so enjoyable.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              I remember a particular jam session with my band where we were working on a new
              song. The clarity and sustain of the strings allowed me to explore different
              melodies and harmonies effortlessly. My bandmates even commented on how great my
              guitar sounded, and I knew it was largely thanks to the Ernie Ball strings.
            </p>
          </article>
        </section>

        {/* Performance Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Live Performances and Studio Sessions
          </h2>
          <article className="prose prose-lg max-w-none space-y-4">
            <p className="text-lg leading-relaxed text-foreground/90">
              One of the true tests of any guitar string is how it performs during live gigs
              and studio recordings. I've used Ernie Ball Regular Slinky strings in both
              settings, and they have never let me down. During live performances, the strings
              maintain their tone and tuning stability, even under the harshest conditions.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              In the studio, the clarity and resonance of these strings are captured
              beautifully on recordings. The engineers I've worked with have often remarked on
              the quality of the sound, and I attribute a lot of that to the Ernie Ball
              strings.
            </p>
          </article>
        </section>

        {/* Durability */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-6">Durability and Longevity</h2>
          <article className="prose prose-lg max-w-none space-y-4">
            <p className="text-lg leading-relaxed text-foreground/90">
              Another aspect worth mentioning is the durability of these strings. Thanks to the
              Element Shield Packaging and the high-quality materials used, Ernie Ball Regular
              Slinky strings last significantly longer than many other brands I've tried. This
              longevity means fewer string changes and more time playing, which is exactly what
              every guitarist wants.
            </p>
          </article>
        </section>

        {/* Ease of Play */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-6">Ease of Play</h2>
          <article className="prose prose-lg max-w-none space-y-4">
            <p className="text-lg leading-relaxed text-foreground/90">
              Playing guitar should be a joyful experience, not a struggle. The Ernie Ball
              Regular Slinky strings make playing feel effortless. The balanced tension allows
              for easy bends and vibrato, while the smooth feel under your fingers reduces
              fatigue during long practice sessions or performances.
            </p>
          </article>
        </section>

        {/* Value for Money */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-6">Value for Money</h2>
          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed mb-4">
                When you buy the Ernie Ball Regular Slinky Nickel Wound Electric Guitar Strings
                3 Pack, you're getting three sets of high-quality strings at a great price. The
                convenience of having multiple sets on hand means you're always prepared for a
                string change, whether it's due to breakage or simply wanting to freshen up
                your sound.
              </p>
              <p className="text-lg leading-relaxed">
                Considering the quality and longevity of these strings, they offer excellent
                value for money. You're investing in a product that will enhance your playing
                and last you a long time.
              </p>
            </CardContent>
          </Card>
          <div className="mt-8 text-center">
            <Button size="lg" asChild className="shadow-lg">
              <a href={AMAZON_LINK} target="_blank" rel="noopener noreferrer">
                Get 3 Sets for the Price
              </a>
            </Button>
          </div>
        </section>

        {/* Availability */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-6">Easy to Find</h2>
          <article className="prose prose-lg max-w-none space-y-4">
            <p className="text-lg leading-relaxed text-foreground/90">
              One of the practical benefits of choosing Ernie Ball strings is their
              availability. You can find them at virtually any music store, online retailers,
              and even some general merchandise stores. This widespread availability means you
              can easily restock your supply, no matter where you are.
            </p>
          </article>
        </section>

        {/* Installation */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-6">Installation and Maintenance</h2>
          <article className="prose prose-lg max-w-none space-y-4">
            <p className="text-lg leading-relaxed text-foreground/90">
              Installing Ernie Ball Regular Slinky strings is a straightforward process. The
              strings are clearly labeled, making it easy to identify which string goes where.
              The winding is smooth, which reduces the time it takes to get your guitar back in
              playing condition.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              Maintenance is minimal, but I do recommend wiping down your strings after each
              playing session to remove oils and dirt. This simple step can significantly
              extend the life of your strings and keep them sounding fresh.
            </p>
          </article>
        </section>

        {/* Call to Action */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-6">Why You Should Make the Switch</h2>
          <article className="prose prose-lg max-w-none space-y-4">
            <p className="text-lg leading-relaxed text-foreground/90">
              If you're still on the fence about trying Ernie Ball Regular Slinky strings,
              let me give you one more reason: the endorsement of legends. When artists like
              Slash, Jimmy Page, Eric Clapton, and Metallica trust a product, you know it's
              good. These musicians have access to any string they want, and they choose Ernie
              Ball. That speaks volumes.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              Moreover, the combination of quality, durability, tone, and value makes these
              strings a no-brainer. Whether you're a beginner looking to upgrade your sound or
              a seasoned pro seeking consistency, Ernie Ball Regular Slinky strings are an
              excellent choice.
            </p>
          </article>
          <div className="mt-8 text-center">
            <Button size="lg" asChild className="shadow-lg">
              <a href={AMAZON_LINK} target="_blank" rel="noopener noreferrer">
                Make the Switch Today
              </a>
            </Button>
          </div>
        </section>

        {/* Community */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-6">Join the Ernie Ball Community</h2>
          <article className="prose prose-lg max-w-none space-y-4">
            <p className="text-lg leading-relaxed text-foreground/90">
              By choosing Ernie Ball, you're not just buying strings; you're joining a
              community of passionate musicians who value quality and performance. The brand has
              a strong presence in the music world, sponsoring events, supporting artists, and
              fostering a love for music.
            </p>
          </article>
        </section>

        {/* Final Thoughts */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-6">Final Thoughts</h2>
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-2">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed mb-4">
                As I wrap up this review, I can't help but feel grateful for the discovery of
                Ernie Ball Regular Slinky Nickel Wound Electric Guitar Strings. They have
                genuinely transformed my playing experience, offering a level of quality and
                consistency that I had been searching for.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Whether you're jamming with friends, performing on stage, or recording in the
                studio, these strings will serve you well. The endorsement from guitar legends,
                the innovative Element Shield Packaging, and the exceptional tone make them a
                standout choice in a crowded market.
              </p>
              <p className="text-lg leading-relaxed">
                So, if you're looking to elevate your guitar playing, I highly recommend giving
                Ernie Ball Regular Slinky strings a try. Trust me, you won't be disappointed.
                It's an investment in your musical journey, and one that will pay dividends in
                the form of improved sound, playability, and enjoyment.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <section className="text-center py-12 bg-gradient-to-br from-primary/5 via-accent/5 to-background rounded-lg">
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to Transform Your Sound?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the legends and experience the difference that Ernie Ball Regular Slinky
            strings can make in your playing.
          </p>
          <Button size="lg" asChild className="shadow-xl hover:shadow-2xl transition-shadow">
            <a href={AMAZON_LINK} target="_blank" rel="noopener noreferrer">
              <Guitar className="mr-2 h-5 w-5" />
              Purchase on Amazon Now
            </a>
          </Button>
          <p className="text-xs text-muted-foreground mt-4">
            As an Amazon Associate, I earn from qualifying purchases.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Guitar className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">
                © 2026. Built with love using{" "}
                <a
                  href="https://caffeine.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  caffeine.ai
                </a>
              </span>
            </div>
            <div className="flex gap-6">
              <a href="#privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a
                href={AMAZON_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Affiliate Disclosure
              </a>
            </div>
          </div>
          <p className="text-xs text-center text-muted-foreground mt-4">
            As an Amazon Associate, I earn from qualifying purchases. Product recommendations
            are based on personal experience and editorial judgment.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
