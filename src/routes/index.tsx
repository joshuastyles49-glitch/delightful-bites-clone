import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/krums-logo.png";
import donutBox from "@/assets/krums-donut-box.png";
import indulge from "@/assets/krums-indulge.png";
import donutTray from "@/assets/krums-donut-tray.png";
import { menu, categories, reviews } from "@/lib/menu";
import { CartProvider, useCart } from "@/lib/cart-context";
import { CartSheet } from "@/components/CartSheet";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { ShoppingBag, MapPin, Phone, Instagram, Facebook, Star, Truck, Store, Heart, Menu as MenuIcon, X } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Krums Bakery — Cookies, Donuts & Waffles in F-6 Islamabad" },
      { name: "description", content: "Premium artisan cookies, skillets, donuts, waffles & croissants. Live in the moment, enjoy every bite. F-6 Markaz, Islamabad." },
      { property: "og:title", content: "Krums — Live in the moment, enjoy every bite" },
      { property: "og:description", content: "Premium bakery in F-6 Islamabad. Cookies, skillets, donuts, waffles, croissants." },
    ],
  }),
  component: () => (
    <CartProvider>
      <Page />
      <CartSheet />
      <Toaster position="top-center" />
    </CartProvider>
  ),
});

function Page() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Nav />
      <HeaderSpacer />
      <Hero />
      <Marquee />
      <About />
      <ScrollShowcase />
      <Menu />
      <Order />
      <Reviews />
      <Location />
      <Footer />
    </div>
  );
}

function ScrollShowcase() {
  return (
    <section className="px-5 bg-secondary/30">
      <ContainerScroll
        titleComponent={
          <>
            <span className="text-sm font-medium text-accent uppercase tracking-widest">A closer look</span>
            <h2 className="font-display text-5xl md:text-7xl mt-3 text-balance">
              Baked with love, <em className="not-italic text-accent">served with a smile</em>.
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Scroll through the moment — every box, every bite, made fresh in F-6.
            </p>
          </>
        }
      >
        <img
          src={indulge}
          alt="Indulge the Krums way"
          className="w-full h-full object-cover rounded-2xl"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  );
}

function Nav() {
  const { count, setOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = ["Menu", "Order", "Reviews", "Visit"];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-border/60 shadow-[0_8px_30px_-12px_rgba(60,30,20,0.15)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between transition-all duration-500 ${scrolled ? "h-16 md:h-20" : "h-20 md:h-24"}`}>
        <a href="#top" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 logo-wiggle transition-transform shrink-0">
          <img src={logo} alt="Krums" className={`w-auto transition-all duration-500 ${scrolled ? "h-11 md:h-12" : "h-12 md:h-14"}`} />
        </a>

        <nav className="hidden md:flex items-center gap-10 text-base font-medium">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="relative py-2 tracking-wide text-foreground/85 hover:text-foreground transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-[2px] after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            onClick={() => setOpen(true)}
            aria-label="Open cart"
            className="btn-glow bg-primary text-primary-foreground rounded-full gap-2 relative h-11 md:h-12 px-4 md:px-6 text-sm md:text-base font-medium"
          >
            <ShoppingBag size={18} />
            <span className="hidden sm:inline">Cart</span>
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-accent text-accent-foreground text-[11px] h-5 min-w-5 px-1 rounded-full grid place-items-center font-bold animate-pulse">
                {count}
              </span>
            )}
          </Button>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="md:hidden relative h-11 w-11 grid place-items-center rounded-full border-2 border-border bg-card btn-glow"
          >
            <span className={`absolute transition-all duration-300 ${mobileOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"}`}>
              <MenuIcon size={20} />
            </span>
            <span className={`absolute transition-all duration-300 ${mobileOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"}`}>
              <X size={20} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass border-t border-border/60 px-5 pt-3 pb-6">
          <nav className="flex flex-col">
            {links.map((l, i) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                style={{ transitionDelay: mobileOpen ? `${i * 60}ms` : "0ms" }}
                className={`group flex items-center justify-between py-4 text-2xl font-display border-b border-border/40 last:border-0 transition-all duration-500 ${
                  mobileOpen ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
                }`}
              >
                <span className="group-hover:text-accent transition-colors">{l}</span>
                <span aria-hidden className="text-accent text-base opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
              </a>
            ))}
          </nav>
          <a
            href="tel:03205413898"
            onClick={() => setMobileOpen(false)}
            className="mt-5 flex items-center justify-center gap-2 h-12 rounded-full bg-card border-2 border-border text-base font-medium btn-glow"
          >
            <Phone size={16} /> 0320 5413898
          </a>
        </div>
      </div>
    </header>
  );
}

function HeaderSpacer() {
  return <div className="h-20 md:h-24" aria-hidden />;
}

function Hero() {
  return (
    <section id="top" className="relative px-5 pt-10 pb-24 md:pt-20 md:pb-32">
      <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-accent/30 blur-3xl animate-drift" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cocoa/10 blur-3xl animate-drift" style={{ animationDelay: "3s" }} />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/40 text-sm font-medium mb-6">
            <Heart size={14} className="fill-current" /> F-6 Markaz, Islamabad
          </span>
          <h1 className="font-display text-6xl md:text-8xl font-semibold leading-[0.95] text-balance">
            Live in the moment, <em className="text-accent not-italic">enjoy every bite.</em>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl text-balance">
            Handcrafted cookies, skillets, donuts and waffles baked fresh daily at Roomy Signature Hotel. Indulge the Krums way.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild className="btn-glow bg-primary text-primary-foreground rounded-full h-14 px-8 text-base">
              <a href="#menu">Explore Menu</a>
            </Button>
            <Button asChild variant="outline" className="btn-glow rounded-full h-14 px-8 text-base border-2">
              <a href="tel:03205413898"><Phone size={16} className="mr-2" /> 0320 5413898</a>
            </Button>
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="animate-float img-zoom rounded-[2.5rem] shadow-soft glow-ring transition-shadow duration-500">
            <img src={donutBox} alt="Krums signature donut box" className="w-full h-auto object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:block bg-card rounded-2xl shadow-soft px-5 py-3 float-hover">
            <div className="flex items-center gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} className="fill-current" />)}
            </div>
            <div className="text-xs text-muted-foreground mt-1">Loved by 500+ in Islamabad</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Cookies", "Skillets", "Donuts", "Waffles", "Croissants", "Strawberry Specials", "Cold Coffee"];
  return (
    <div className="border-y border-border/60 bg-cocoa text-cream overflow-hidden py-5">
      <div className="flex gap-12 animate-[drift_30s_linear_infinite] whitespace-nowrap font-display text-2xl">
        {[...items, ...items, ...items].map((i, k) => (
          <span key={k} className="flex items-center gap-12">
            {i} <Heart size={16} className="fill-accent text-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="px-5 py-24 md:py-32">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="img-zoom rounded-[2.5rem] shadow-soft float-hover">
          <img src={indulge} alt="Indulge the Krums way" className="w-full h-auto" />
        </div>
        <div>
          <h2 className="font-display text-5xl md:text-6xl text-balance">A premium little corner of <em className="text-accent not-italic">Islamabad</em>.</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Tucked inside Roomy Signature Hotel in F-6 Markaz, Krums is where late nights, sweet cravings, and good friends meet. Every cookie is hand-shaped, every skillet pulled from the oven warm.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6">
            {[
              { n: "40+", l: "Sweet creations" },
              { n: "Daily", l: "Baked fresh" },
              { n: "F-6", l: "Markaz, Islamabad" },
            ].map((s) => (
              <div key={s.l} className="float-hover p-4 rounded-2xl bg-card shadow-sm">
                <div className="font-display text-3xl">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Menu() {
  const [cat, setCat] = useState(categories[0].id);
  const filtered = menu.filter((m) => m.category === cat);
  const { add } = useCart();

  return (
    <section id="menu" className="px-5 py-24 md:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">Menu</span>
          <h2 className="font-display text-5xl md:text-7xl mt-3 text-balance">Pick your <em className="not-italic text-accent">poison</em>.</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCat(c.id)}
              className={`btn-glow px-5 py-2.5 rounded-full text-sm font-medium border-2 ${
                cat === c.id ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <article key={item.id} className="float-hover group bg-card rounded-3xl overflow-hidden shadow-sm">
              <div className="img-zoom aspect-square">
                <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl leading-tight">{item.name}</h3>
                <div className="flex items-center justify-between mt-3">
                  <span className="font-semibold text-accent">Rs. {item.price}</span>
                  <Button size="sm" onClick={() => add(item)} className="btn-glow rounded-full bg-primary text-primary-foreground">
                    Add +
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Order() {
  return (
    <section id="order" className="px-5 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-5xl md:text-6xl text-center mb-14 text-balance">Delivery or <em className="not-italic text-accent">takeaway</em> — your call.</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Truck, title: "Delivery", text: "Hot, fresh, and at your door across Islamabad. Call 0320 5413898 or order through your cart.", cta: "Call to deliver", href: "tel:03205413898" },
            { icon: Store, title: "Takeaway", text: "Skip the wait. Order ahead, then pick up at Shop G-12, Roomy Signature Hotel, F-6.", cta: "Get directions", href: "#visit" },
          ].map((o) => (
            <div key={o.title} className="float-hover p-10 rounded-3xl bg-card shadow-sm border border-border/50 group">
              <div className="w-14 h-14 rounded-2xl bg-accent/40 grid place-items-center group-hover:rotate-6 transition-transform duration-500">
                <o.icon size={26} />
              </div>
              <h3 className="font-display text-3xl mt-6">{o.title}</h3>
              <p className="text-muted-foreground mt-3">{o.text}</p>
              <Button asChild className="btn-glow mt-6 rounded-full bg-primary text-primary-foreground">
                <a href={o.href}>{o.cta}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="px-5 py-24 md:py-32 bg-cocoa text-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">Reviews</span>
          <h2 className="font-display text-5xl md:text-7xl mt-3 text-balance">Sweet words from <em className="not-italic text-accent">sweet people</em>.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="float-hover p-7 rounded-3xl bg-cream/10 backdrop-blur border border-cream/10">
              <div className="flex gap-1 text-accent mb-3">
                {Array.from({ length: r.rating }).map((_, i) => <Star key={i} size={16} className="fill-current" />)}
              </div>
              <p className="text-cream/90 leading-relaxed">"{r.text}"</p>
              <div className="mt-5 font-display text-lg">{r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="visit" className="px-5 py-24 md:py-32">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <span className="text-sm font-medium text-accent uppercase tracking-widest">Visit</span>
          <h2 className="font-display text-5xl md:text-6xl mt-3 text-balance">Come say <em className="not-italic text-accent">hi</em>.</h2>
          <div className="mt-8 space-y-5">
            <div className="flex gap-4 float-hover p-5 rounded-2xl bg-card shadow-sm">
              <MapPin className="text-accent shrink-0" />
              <div>
                <div className="font-medium">Roomy Signature Hotel</div>
                <div className="text-sm text-muted-foreground">Shop G-12, Block 07, Super Market, F-6 Markaz, Islamabad 46000</div>
              </div>
            </div>
            <a href="tel:03205413898" className="flex gap-4 float-hover p-5 rounded-2xl bg-card shadow-sm">
              <Phone className="text-accent shrink-0" />
              <div>
                <div className="font-medium">0320 5413898</div>
                <div className="text-sm text-muted-foreground">Cookie Talk — call to order</div>
              </div>
            </a>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/krums2024/?hl=en" target="_blank" rel="noopener noreferrer" className="btn-glow flex-1 flex items-center gap-3 p-5 rounded-2xl bg-card shadow-sm">
                <Instagram /> <span className="font-medium">Instagram</span>
              </a>
              <a href="https://www.facebook.com/people/Krums/61588367163045/" target="_blank" rel="noopener noreferrer" className="btn-glow flex-1 flex items-center gap-3 p-5 rounded-2xl bg-card shadow-sm">
                <Facebook /> <span className="font-medium">Facebook</span>
              </a>
            </div>
          </div>
        </div>

        <div className="img-zoom rounded-[2.5rem] overflow-hidden shadow-soft float-hover h-[500px]">
          <iframe
            title="Krums on Google Maps"
            src="https://www.google.com/maps?q=Roomy+Signature+Hotel+F-6+Markaz+Islamabad&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-5 py-16 bg-cocoa text-cream">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-start">
        <div>
          <img src={logo} alt="Krums" className="h-16 w-auto invert brightness-0 logo-wiggle transition-transform" style={{ filter: "invert(1) brightness(2)" }} />
          <p className="mt-4 text-cream/70 text-sm max-w-xs">Live in the moment, enjoy every bite.</p>
        </div>
        <div className="img-zoom rounded-2xl overflow-hidden">
          <img src={donutTray} alt="Krums donut tray" className="w-full h-auto" />
        </div>
        <div className="text-sm text-cream/80 space-y-2">
          <div className="font-display text-xl text-cream">Find us</div>
          <p>Roomy Signature Hotel<br/>Shop G-12, F-6 Markaz, Islamabad</p>
          <p>0320 5413898</p>
          <div className="flex gap-3 pt-2">
            <a href="https://www.instagram.com/krums2024/?hl=en" target="_blank" rel="noopener noreferrer" className="btn-glow"><Instagram /></a>
            <a href="https://www.facebook.com/people/Krums/61588367163045/" target="_blank" rel="noopener noreferrer" className="btn-glow"><Facebook /></a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-cream/10 text-xs text-cream/50 text-center">
        © {new Date().getFullYear()} Krums Bakery — Islamabad
      </div>
    </footer>
  );
}
