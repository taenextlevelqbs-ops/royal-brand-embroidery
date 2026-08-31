const services = [
  {
    title: "Embroidery",
    text: "Professional stitched logos, names, hat designs, left chest logos, jacket backs, bags, chair backs, and more.",
  },
  {
    title: "Heat Transfers",
    text: "Clean full-color designs for shirts, sweatshirts, jackets, bags, and custom apparel.",
  },
];

const products = [
  "Hats",
  "T-Shirts",
  "Sweatshirts",
  "Jackets",
  "Bags",
  "Chair Backs",
];

const pricing = [
  ["Hat Embroidery", "Starting at $__"],
  ["Left Chest Logo", "Starting at $__"],
  ["Jacket Back", "Starting at $__"],
  ["Name / Personalization", "Starting at $__"],
  ["Heat Transfer", "Starting at $__"],
];

const galleryCategories = [
  "Hats",
  "Left Chest",
  "Jacket Backs",
  "Shirts & Sweatshirts",
  "Bags",
  "Chair Backs",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4efe7] text-[#171717]">

      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-black/10 bg-[#f4efe7]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">

          <div className="flex items-center gap-4">

            <img
              src="/RBE_Logo.jpeg"
              alt="Royal Brand Embroidery logo"
              className="h-12 w-auto"
            />

            <div>
              <p className="text-lg font-black tracking-[0.12em] text-[#6d1118] md:text-xl">
                ROYAL BRAND
              </p>

              <p className="mt-1 text-[9px] font-bold tracking-[0.26em] text-black/45">
                EMBROIDERY
              </p>
            </div>

          </div>

          <div className="hidden items-center gap-7 text-sm font-semibold text-black/60 md:flex">

            <a href="#services" className="transition hover:text-[#6d1118]">
              Services
            </a>

            <a href="#pricing" className="transition hover:text-[#6d1118]">
              Pricing
            </a>

            <a href="#gallery" className="transition hover:text-[#6d1118]">
              Gallery
            </a>

            <a href="#suppliers" className="transition hover:text-[#6d1118]">
              Suppliers
            </a>

            <a
              href="#quote"
              className="rounded-full bg-[#6d1118] px-5 py-2 text-white transition hover:bg-black"
            >
              Get a Quote
            </a>

          </div>

        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 py-8 md:px-8 md:py-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">

          {/* HERO TEXT */}
          <div className="relative flex min-h-[620px] flex-col justify-between overflow-hidden rounded-[32px] border border-black/10 bg-[#171717] p-8 text-white md:p-12 lg:p-14">

            <div className="pointer-events-none absolute -right-28 top-[-80px] h-[380px] w-[380px] rounded-full bg-[#6d1118]/25 blur-[120px]" />

            <div className="relative">

              <p className="text-[10px] font-black tracking-[0.38em] text-[#d38a90]">
                CUSTOM EMBROIDERY // HEAT TRANSFERS
              </p>

              <h1 className="mt-8 text-5xl font-black leading-[0.9] tracking-[-0.04em] sm:text-6xl md:text-7xl">
                ROYAL
                <br />
                BRAND
                <br />
                <span className="text-[#b74b55]">
                  EMBROIDERY.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
                Custom embroidery and heat transfer for hats, shirts,
                sweatshirts, jackets, bags, chair backs, and more.
              </p>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-white/35">
                An Impression Branded for Life
              </p>

            </div>

            <div className="relative mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row">

              <a
                href="#quote"
                className="rounded-full bg-[#8b1e27] px-7 py-3 text-center font-black text-white transition hover:bg-white hover:text-black"
              >
                Request a Quote →
              </a>

              <a
                href="#gallery"
                className="rounded-full border border-white/20 px-7 py-3 text-center font-bold transition hover:bg-white hover:text-black"
              >
                View Our Work
              </a>

            </div>

          </div>

          {/* HERO BRAND IMAGE */}
          <div className="flex items-center justify-center overflow-hidden rounded-[32px] border border-black/10 bg-white p-8 md:p-12">

            <img
              src="/RoyalBrandLogo.jpeg"
              alt="Royal Brand Embroidery"
              className="h-auto w-full max-w-xl object-contain"
            />

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="px-6 py-24 md:px-8 md:py-32"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 max-w-3xl">

            <p className="text-[10px] font-black tracking-[0.35em] text-[#6d1118]">
              WHAT WE DO
            </p>

            <h2 className="mt-5 text-4xl font-black leading-[0.95] md:text-6xl">
              Decoration Services
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-black/55">
              Professional customization for businesses, teams,
              organizations, events, and personal orders.
            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-2">

            {services.map((service, index) => (
              <div
                key={service.title}
                className="rounded-[28px] border border-black/10 bg-white/65 p-8 shadow-sm"
              >

                <p className="text-[9px] font-black tracking-[0.3em] text-[#6d1118]/60">
                  SERVICE // {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-5 text-3xl font-black">
                  {service.title}
                </h3>

                <p className="mt-5 leading-relaxed text-black/55">
                  {service.text}
                </p>

                <a
                  href="#quote"
                  className="mt-7 inline-block text-sm font-black tracking-[0.12em] text-[#6d1118]"
                >
                  GET A QUOTE →
                </a>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* WHAT WE CUSTOMIZE */}
      <section className="border-y border-black/10 bg-[#171717] px-6 py-24 text-white md:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12">

            <p className="text-[10px] font-black tracking-[0.35em] text-[#d38a90]">
              CUSTOMIZE // YOUR WAY
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              What We Customize
            </h2>

          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">

            {products.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#b74b55]/70"
              >

                <p className="text-[9px] font-black tracking-[0.28em] text-white/25">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <p className="mt-5 text-2xl font-black">
                  {item}
                </p>

                <div className="mt-5 h-[2px] w-8 bg-[#b74b55]" />

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ABOUT / OWNER */}
      <section className="px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">

          <div className="overflow-hidden rounded-[32px] border border-black/10 bg-white">
            <img
              src="/Faceshot.jpeg"
              alt="Royal Brand Embroidery owner"
              className="h-auto w-full"
            />
          </div>

          <div className="flex flex-col justify-center rounded-[32px] border border-black/10 bg-white/60 p-8 md:p-12">

            <p className="text-[10px] font-black tracking-[0.35em] text-[#6d1118]">
              ABOUT // ROYAL BRAND
            </p>

            <h2 className="mt-5 text-4xl font-black leading-[0.95] md:text-6xl">
              Custom Work.
              <br />
              Personal Service.
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-black/55">
              Royal Brand Embroidery focuses on quality custom work
              with personal attention from the first conversation
              through the finished product.
            </p>

            <p className="mt-6 max-w-xl leading-relaxed text-black/45">
              Whether you need a few personalized pieces or apparel
              for a team, organization, business, or event, each project
              is handled with care and attention to detail.
            </p>

          </div>

        </div>
      </section>

      {/* MACHINES */}
      <section className="border-y border-black/10 bg-[#eee7de] px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 max-w-3xl">

            <p className="text-[10px] font-black tracking-[0.35em] text-[#6d1118]">
              BEHIND THE SCENES
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-6xl">
              Made In-House.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-black/50">
              A look at the equipment and process behind Royal Brand Embroidery.
            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-2">

            <div className="overflow-hidden rounded-[28px] border border-black/10 bg-white">
              <img
                src="/Machines.jpeg"
                alt="Royal Brand Embroidery equipment"
                className="h-auto w-full"
              />
            </div>

            <div className="overflow-hidden rounded-[28px] border border-black/10 bg-white">
              <img
                src="/Machines2x.jpeg"
                alt="Royal Brand Embroidery machines"
                className="h-auto w-full"
              />
            </div>

          </div>

        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="px-6 py-24 md:px-8 md:py-32"
      >
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="text-[10px] font-black tracking-[0.35em] text-[#6d1118]">
                BASE // PRICING
              </p>

              <h2 className="mt-5 text-4xl font-black md:text-6xl">
                Starting Prices
              </h2>

              <p className="mt-6 max-w-lg leading-relaxed text-black/50">
                Final pricing may vary depending on garment type,
                quantity, design size, stitch count, number of colors,
                and customization needs.
              </p>

              <a
                href="#quote"
                className="mt-8 inline-block rounded-full bg-black px-7 py-3 font-black text-white transition hover:bg-[#6d1118]"
              >
                Request Exact Quote →
              </a>

            </div>

            <div className="overflow-hidden rounded-[28px] border border-black/10 bg-white/60">

              {pricing.map(([item, price], index) => (
                <div
                  key={item}
                  className="flex items-center justify-between gap-6 border-b border-black/10 p-6 last:border-b-0"
                >

                  <div className="flex items-center gap-4">

                    <p className="text-[9px] font-black tracking-[0.25em] text-[#6d1118]/45">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <p className="font-black">
                      {item}
                    </p>

                  </div>

                  <p className="text-sm font-bold text-black/45">
                    {price}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        className="border-y border-black/10 bg-white/70 px-6 py-24 md:px-8 md:py-32"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 max-w-3xl">

            <p className="text-[10px] font-black tracking-[0.35em] text-[#6d1118]">
              OUR WORK // GALLERY
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-6xl">
              Custom Work
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-black/50">
              Browse examples of Royal Brand Embroidery projects.
            </p>

          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {galleryCategories.map((category, index) => (
              <div
                key={category}
                className="flex min-h-[220px] flex-col justify-between rounded-[24px] border border-black/10 bg-[#f4efe7] p-7"
              >

                <p className="text-[9px] font-black tracking-[0.28em] text-[#6d1118]/45">
                  GALLERY // {String(index + 1).padStart(2, "0")}
                </p>

                <div>

                  <p className="text-2xl font-black">
                    {category}
                  </p>

                  <p className="mt-2 text-sm text-black/40">
                    Project photos coming soon
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* SUPPLIERS */}
      <section
        id="suppliers"
        className="px-6 py-24 md:px-8 md:py-32"
      >
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>

              <p className="text-[10px] font-black tracking-[0.35em] text-[#6d1118]">
                GARMENTS // SUPPLIERS
              </p>

              <h2 className="mt-5 text-4xl font-black md:text-6xl">
                Choose Your Garment
              </h2>

              <p className="mt-6 max-w-xl leading-relaxed text-black/50">
                Browse supplier catalogs for shirts, polos, jackets,
                sweatshirts, hats, bags, and more. Send the item number
                you want customized when requesting your quote.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl border border-black/10 bg-white/60 p-6">
                <p className="text-xl font-black">
                  SanMar
                </p>

                <p className="mt-2 text-sm text-black/40">
                  Supplier link coming soon
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white/60 p-6">
                <p className="text-xl font-black">
                  S&S Activewear
                </p>

                <p className="mt-2 text-sm text-black/40">
                  Supplier link coming soon
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white/60 p-6">
                <p className="text-xl font-black">
                  alphabroder
                </p>

                <p className="mt-2 text-sm text-black/40">
                  Supplier link coming soon
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* QUOTE */}
      <section
        id="quote"
        className="px-6 pb-24 md:px-8 md:pb-32"
      >
        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-[32px] bg-[#6d1118] p-8 text-white md:p-14">

            <div className="pointer-events-none absolute -right-20 -top-24 text-[180px] font-black leading-none text-white/[0.04] md:text-[260px]">
              RBE
            </div>

            <div className="relative max-w-3xl">

              <p className="text-[10px] font-black tracking-[0.35em] text-white/55">
                REQUEST // A QUOTE
              </p>

              <h2 className="mt-5 text-5xl font-black leading-[0.9] md:text-7xl">
                LET&apos;S MAKE
                <br />
                SOMETHING.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                Tell us what you need, how many pieces you need,
                and what type of customization you want.
              </p>

              <a
                href="mailto:YOUR-EMAIL-HERE?subject=Royal%20Brand%20Embroidery%20Quote"
                className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-black text-[#6d1118]"
              >
                Request a Quote →
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 px-6 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-center md:flex-row md:items-center md:text-left">

          <div>

            <p className="font-black tracking-[0.16em] text-[#6d1118]">
              ROYAL BRAND EMBROIDERY
            </p>

            <p className="mt-2 text-[10px] tracking-[0.25em] text-black/35">
              AN IMPRESSION BRANDED FOR LIFE
            </p>

          </div>

          <p className="text-xs text-black/30">
            © 2026 Royal Brand Embroidery. All Rights Reserved.
          </p>

        </div>
      </footer>

    </main>
  );
}