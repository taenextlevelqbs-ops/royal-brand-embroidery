import Image from "next/image";
import SiteHeader from "./site-header";
import QuoteForm from "./quote-form";

const products = [
  "Hats",
  "T-shirts",
  "Sweatshirts",
  "Jackets",
  "Bags",
  "Chair backs",
];

const serviceDetails = [
  {
    number: "01",
    name: "Embroidery",
    description:
      "Thread-based decoration for logos, names and personalization on apparel, hats, bags, jacket backs, chair backs and more.",
    note: "A dimensional finish, stitched in-house",
  },
  {
    number: "02",
    name: "Heat transfer",
    description:
      "Full-color designs for shirts, sweatshirts, jackets, bags and custom apparel.",
    note: "Full-color apparel decoration",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="announcement" aria-label="Business motto">
        <span>An impression branded for life</span>
        <span className="announcement-rule" aria-hidden="true" />
        <span>Embroidery · Heat transfer · Custom apparel</span>
      </div>

      <SiteHeader />

      <main id="main-content">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow light-eyebrow">Royal Brand Embroidery</p>
            <h1 id="hero-title">
              Put your name
              <br />
              <em>on good things.</em>
            </h1>
            <p className="hero-intro">
              Custom embroidery and heat transfer for the people, teams,
              organizations and businesses you want to represent.
            </p>
            <div className="hero-actions">
              <a className="button button-cream" href="#quote">
                Start a quote <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link light-link" href="#products">
                Explore what we customize <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-signoff">
              <span className="stitch-line" aria-hidden="true" />
              <span>Made personal. Made to be worn.</span>
            </div>
          </div>

          <div className="hero-visual">
            <Image
              className="hero-photo"
              src="/Faceshot.jpeg"
              alt="Royal Brand Embroidery owner in the embroidery shop"
              fill
              priority
              sizes="(max-width: 850px) 100vw, 50vw"
            />
            <div className="photo-caption">
              <span className="caption-mark" aria-hidden="true">RB</span>
              <span>
                <strong>Custom work.</strong>
                <br />
                Personal service.
              </span>
            </div>
            <span className="photo-index">THE SHOP · ROYAL BRAND</span>
          </div>
          <div className="hero-footnote">
            <span>01 / CRAFT</span>
            <span>Good work deserves to be remembered.</span>
            <a href="#services" aria-label="Scroll to services">↓</a>
          </div>
        </section>

        <section className="services section-shell" id="services" aria-labelledby="services-title">
          <div className="section-heading services-heading">
            <div>
              <p className="eyebrow">Decoration, your way</p>
              <h2 id="services-title">The mark makes<br />the piece.</h2>
            </div>
            <p className="section-deck">
              Tell us what you want decorated and how you want it to look.
              We offer two ways to bring your design to life.
            </p>
          </div>

          <div className="service-list">
            {serviceDetails.map((service) => (
              <article className="service-row" key={service.number}>
                <span className="row-number">{service.number}</span>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <span className="service-note">{service.note}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="products-section" id="products" aria-labelledby="products-title">
          <div className="section-shell products-layout">
            <div className="products-intro">
              <p className="eyebrow light-eyebrow">Choose your canvas</p>
              <h2 id="products-title">Give useful things<br /><em>your mark.</em></h2>
              <p>
                From personalized apparel to a group order, tell us
                what you have in mind and what you want it to say.
              </p>
              <a className="button button-outline" href="#quote">
                Ask about your project <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="product-index" aria-label="Products available for customization">
              {products.map((product, index) => (
                <a href="#quote" className="product-line" key={product}>
                  <span className="product-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="product-name">{product}</span>
                  <span className="product-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
              <p className="product-note">
                Have another item in mind? Include it in your quote request.
              </p>
            </div>
          </div>
        </section>

        <section className="work section-shell" id="work" aria-labelledby="work-title">
          <div className="section-heading work-heading">
            <div>
              <p className="eyebrow">Inside the workroom</p>
              <h2 id="work-title">From thread<br />to finished detail.</h2>
            </div>
            <p className="section-deck">
              A look at the people and equipment behind Royal Brand Embroidery.
              We&apos;re building a project gallery; the photographs here show the
              real shop and work in progress.
            </p>
          </div>

          <div className="work-gallery">
            <figure className="work-feature">
              <div className="work-image work-image-machine">
                <Image
                  src="/Machines2x.jpeg"
                  alt="Embroidery machine stitching a design on a cap"
                  fill
                  sizes="(max-width: 760px) 100vw, 60vw"
                />
                <span className="image-corner-label">AT THE MACHINE</span>
              </div>
              <figcaption>
                <span>Machine embroidery</span>
                <span>01 / IN PROGRESS</span>
              </figcaption>
            </figure>
            <figure className="work-detail">
              <div className="work-image work-image-detail">
                <Image
                  src="/Machines.jpeg"
                  alt="Embroidery equipment and garments in the shop"
                  fill
                  sizes="(max-width: 760px) 100vw, 34vw"
                />
              </div>
              <figcaption>
                <span>Inside the workroom</span>
                <span>02 / EQUIPMENT</span>
              </figcaption>
            </figure>
          </div>
          <p className="gallery-disclosure">
            More finished project photography will be added as it becomes available.
          </p>
        </section>

        <section className="about-section" aria-labelledby="about-title">
          <div className="section-shell about-layout">
            <div className="about-image-wrap">
              <Image
                className="about-stitch"
                src="/RBE_Logo.jpeg"
                alt="Close-up of Royal Brand Embroidery's stitched RBE logo"
                fill
                sizes="(max-width: 800px) 100vw, 40vw"
              />
              <span className="about-image-tag">THE STITCHED MARK</span>
            </div>
            <div className="about-copy">
              <p className="eyebrow light-eyebrow">A more personal kind of custom</p>
              <h2 id="about-title">Good work.<br /><em>Made with care.</em></h2>
              <p>
                Royal Brand Embroidery focuses on quality custom work with
                personal attention from the first conversation through the
                finished product.
              </p>
              <p>
                Whether you need a few personalized pieces or apparel for a
                team, organization, business or event, each project is handled
                with care and attention to detail.
              </p>
              <a className="text-link light-link" href="#quote">
                Tell us what you have in mind <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="quote-context section-shell" id="pricing" aria-labelledby="pricing-title">
          <div className="quote-context-lead">
            <p className="eyebrow">Clear quotes, made for your project</p>
            <h2 id="pricing-title">Every detail<br />changes the quote.</h2>
          </div>
          <div className="quote-context-copy">
            <p>
              Pricing depends on the garment, quantity, design size, stitch
              count, number of colors and personalization. Share the details
              you know and we can quote the actual project.
            </p>
            <div className="quote-factors" aria-label="Factors considered in project pricing">
              <span>Garment &amp; quantity</span>
              <span>Design &amp; placement</span>
              <span>Colors &amp; personalization</span>
            </div>
            <p className="pricing-note">
              No starting prices are published here. A quote is needed for
              accurate project pricing.
            </p>
          </div>
        </section>

        <section className="suppliers-section" id="suppliers" aria-labelledby="suppliers-title">
          <div className="section-shell suppliers-layout">
            <div>
              <p className="eyebrow">Bring your own or browse</p>
              <h2 id="suppliers-title">Finding the<br />right blank.</h2>
            </div>
            <div className="suppliers-copy">
              <p>
                Browse a supplier catalog for shirts, polos, jackets,
                sweatshirts, hats, bags and more. If you have an item number,
                include it with your quote request.
              </p>
              <div className="supplier-list" aria-label="Supplier catalog links currently being prepared">
                <span>SanMar</span>
                <span>S&amp;S Activewear</span>
                <span>alphabroder</span>
              </div>
              <p className="supplier-note">Catalog links are being prepared.</p>
            </div>
          </div>
        </section>

        <section className="quote-section" id="quote" aria-labelledby="quote-title">
          <div className="section-shell quote-layout">
            <div className="quote-intro">
              <p className="eyebrow light-eyebrow">Start with the details</p>
              <h2 id="quote-title">Let&apos;s make<br /><em>it yours.</em></h2>
              <p>
                Tell us what you&apos;re looking to customize. The form prepares
                a clear project brief you can copy into an email.
              </p>
              <p className="quote-delivery-note">
                {process.env.NEXT_PUBLIC_QUOTE_EMAIL
                  ? "Your answers stay in this browser. We will prepare an email draft for you to review and send."
                  : "The website is not configured to deliver quote requests by email yet. Your information stays in this browser and will not be sent or stored."}
              </p>
            </div>
            <QuoteForm recipient={process.env.NEXT_PUBLIC_QUOTE_EMAIL} />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-main">
          <a href="#main-content" className="footer-brand" aria-label="Royal Brand Embroidery, back to top">
            <span>ROYAL BRAND</span>
            <small>EMBROIDERY</small>
          </a>
          <p>An impression branded for life.</p>
          <a href="#quote" className="footer-quote">Prepare a quote brief <span aria-hidden="true">↑</span></a>
        </div>
        <div className="section-shell footer-bottom">
          <span>© {new Date().getFullYear()} Royal Brand Embroidery</span>
          <a href="#main-content">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
