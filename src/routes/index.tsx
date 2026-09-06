import { createFileRoute } from "@tanstack/react-router";

import logo from "@/assets/logo.jpeg.asset.json";
import heroBg from "@/assets/homepage.jpeg.asset.json";
import guitarImg from "@/assets/IMG-20260818-WA0202.jpg.asset.json";
import mentorImg from "@/assets/IMG-20260818-WA0207.jpg.asset.json";
import bannerImg from "@/assets/IMG-20260818-WA0235.jpg.asset.json";
import gatheringImg from "@/assets/IMG-20260818-WA0233.jpg.asset.json";
import mealImg from "@/assets/IMG_20260822_054716_042.jpg.asset.json";
import drawingImg from "@/assets/IMG-20260818-WA0241.jpg.asset.json";
import musicTherapyImg from "@/assets/music-therapy.jpg";
import urbanFarmingImg from "@/assets/urban-farming.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Great for Greatness CBO | Music & Farming for Autistic Children" },
      {
        name: "description",
        content:
          "Great for Greatness C.B.O empowers autistic children and orphans in Zimmerman, Nairobi through music therapy, organic urban farming and autism awareness.",
      },
      { property: "og:title", content: "Great for Greatness CBO" },
      {
        property: "og:description",
        content:
          "Empowering autistic children and orphans in Nairobi through music therapy and organic urban farming.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const programs = [
  {
    title: "Musical Therapy",
    body: "Unlocking potential through Thee Joint's rhythmic programs tailored for deaf and autistic children.",
    ring: "bg-g4g-blue/10",
    dot: "border-g4g-blue",
  },
  {
    title: "Urban Farming",
    body: "Sustainable organic agriculture teaching life skills and providing nutrition to our local community.",
    ring: "bg-g4g-green/10",
    dot: "border-g4g-green rotate-45 rounded-sm",
  },
  {
    title: "Advocacy",
    body: "Changing the narrative around autism in Zimmerman and beyond, fostering true inclusion.",
    ring: "bg-g4g-red/10",
    dot: "border-g4g-red ring-4 ring-g4g-red/20",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="Great for Greatness C.B.O logo"
              className="size-12 rounded-md object-contain"
            />
            <span className="font-display text-xl font-bold tracking-tight text-g4g-blue">
              G4G CBO
            </span>
          </div>
          <div className="hidden space-x-8 text-sm font-semibold md:flex">
            <a href="#home" className="text-g4g-blue">
              Home
            </a>
            <a href="#story" className="hover:text-g4g-blue">
              Our Story
            </a>
            <a href="#mission" className="hover:text-g4g-blue">
              Mission &amp; Vision
            </a>
            <a href="#programs" className="hover:text-g4g-blue">
              Programs
            </a>
            <a href="#contact" className="hover:text-g4g-blue">
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-g4g-red px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            DONATE NOW
          </a>
        </div>
      </nav>

      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg.url}
            alt="Great for Greatness community gathering in Nairobi"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/65" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-primary-foreground">
          <h1 className="font-display text-5xl leading-tight font-extrabold md:text-7xl">
            Great for <span className="text-g4g-amber">Greatness</span> CBO
          </h1>
          <p className="mt-6 text-xl font-medium text-primary-foreground/85 md:text-2xl">
            "Autism is not a disability but a different ability to be valued."
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#programs"
              className="rounded-full bg-g4g-blue px-8 py-4 font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Discover Our Programs
            </a>
            <a
              href="#story"
              className="rounded-full border-2 border-current px-8 py-4 font-bold transition-colors hover:bg-background hover:text-foreground"
            >
              Read Our Story
            </a>
          </div>
        </div>
      </section>

      <section id="story" className="scroll-mt-20 bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                From a Band to a <span className="text-g4g-green">Movement</span>
              </h2>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Our story began with{" "}
                  <strong className="text-g4g-blue">THEE JOINT</strong>, a band of young artists
                  formed to sharpen their skills together. Meeting the director of the Brook Centre
                  for the Deaf and Autistic Children in Zimmerman changed everything.
                </p>
                <p>
                  We started music lessons at the centre and discovered that music isn't just
                  entertainment — it is therapy. Rhythm became a bridge to communication and
                  emotional expression for the children we serve.
                </p>
                <p>
                  We then began organic urban farming at Brook Centre, joined hands with the wider
                  community and formed G4G CBO — empowering autistic children and orphans from
                  children's homes through musical instruments and urban farming.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={guitarImg.url}
                alt="A young man learning guitar during a G4G music session"
                className="aspect-3/4 rounded-2xl object-cover shadow-xl"
              />
              <img
                src={mentorImg.url}
                alt="A G4G mentor with a student at a Day of the African Child event"
                className="mt-12 aspect-3/4 rounded-2xl object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-10 shadow-sm">
              <span className="text-sm font-bold tracking-widest text-g4g-blue uppercase">
                Our Mission
              </span>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                To empower autistic children, deaf children and orphans in Nairobi by using music as
                therapy, organic urban farming as a life skill, and community advocacy to build a
                society where every child is seen, supported and valued.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-10 shadow-sm">
              <span className="text-sm font-bold tracking-widest text-g4g-green uppercase">
                Our Vision
              </span>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                A Kenya where autism is understood as a different ability — where every
                neurodivergent child grows up included, self-reliant and celebrated for the gift
                they bring to their community.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Dignity",
                body: "Every child is treated as capable, never as a burden or a diagnosis.",
              },
              {
                title: "Inclusion",
                body: "Families, schools and neighbours are part of the journey, not spectators.",
              },
              {
                title: "Sustainability",
                body: "What we grow and teach keeps feeding the community long after a visit.",
              },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl bg-secondary p-8">
                <h3 className="font-display text-lg font-bold">{v.title}</h3>
                <p className="mt-3 text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <figure>
              <img
                src={musicTherapyImg}
                alt="Children playing hand drums together in a music therapy session"
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-4/3 w-full rounded-3xl object-cover shadow-lg"
              />
              <figcaption className="mt-3 text-sm text-muted-foreground">
                Rhythm sessions give children a way to communicate beyond words.
              </figcaption>
            </figure>
            <figure>
              <img
                src={urbanFarmingImg}
                alt="Community members tending an organic urban vegetable garden in Nairobi"
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-4/3 w-full rounded-3xl object-cover shadow-lg"
              />
              <figcaption className="mt-3 text-sm text-muted-foreground">
                Sack gardens teach life skills and put fresh food on the table.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>



      <section id="programs" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl">How We Create Greatness</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Empowering neurodivergent children through music, sustainable living and community
              awareness.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {programs.map((p) => (
              <div
                key={p.title}
                className="group overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-2xl"
              >
                <div
                  className={`mb-6 flex size-14 items-center justify-center rounded-2xl ${p.ring}`}
                >
                  <div className={`size-6 rounded-full border-4 ${p.dot}`} />
                </div>
                <h3 className="font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-4 text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Moments From Our Work</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: bannerImg.url, alt: "Autism awareness banner at a G4G community event" },
              { src: gatheringImg.url, alt: "Thee Joint performing for children in the community" },
              { src: mealImg.url, alt: "Children sharing a meal at a G4G outreach day" },
              { src: drawingImg.url, alt: "A volunteer colouring with a child at a G4G session" },
            ].map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="aspect-4/5 w-full rounded-2xl object-cover shadow-lg"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 bg-foreground py-16 text-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start">
            <div className="max-w-sm">
              <div className="flex items-center gap-3">
                <img
                  src={logo.url}
                  alt=""
                  className="size-10 rounded bg-background object-contain p-0.5"
                />
                <span className="font-display text-xl font-bold">Great for Greatness</span>
              </div>
              <p className="mt-4 text-sm opacity-70">
                A Community Based Organization dedicated to empowering autistic children and orphans
                in Nairobi, Kenya.
              </p>
            </div>
            <div className="flex gap-12 text-sm">
              <div>
                <h3 className="font-bold">Get Involved</h3>
                <ul className="mt-4 space-y-2 opacity-70">
                  <li>Donate</li>
                  <li>Volunteer</li>
                  <li>Partner with us</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold">Contact</h3>
                <ul className="mt-4 space-y-2 opacity-70">
                  <li>Zimmerman, Nairobi</li>
                  <li>
                    <a
                      href="mailto:greatforgreatness75@gmail.com"
                      className="hover:opacity-100 hover:underline"
                    >
                      greatforgreatness75@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+254111724105" className="hover:underline">
                      0111 724 105
                    </a>{" "}
                    /{" "}
                    <a href="tel:+254754112029" className="hover:underline">
                      0754 112 029
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-background/10 pt-8 text-center text-xs opacity-60">
            © {new Date().getFullYear()} Great for Greatness C.B.O. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
}
