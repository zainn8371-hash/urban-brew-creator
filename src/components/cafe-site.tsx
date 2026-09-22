import { useState } from "react";
import {
  ArrowRight,
  Bean,
  ChevronDown,
  Clock3,
  Coffee,
  HeartHandshake,
  Instagram,
  Leaf,
  MapPin,
  Menu,
  Phone,
  Quote,
  Star,
} from "lucide-react";

import heroImage from "@/assets/cafe-hero.jpg";
import coffeeImage from "@/assets/cafe-coffee.jpg";
import foodImage from "@/assets/cafe-food.jpg";
import dessertImage from "@/assets/cafe-dessert.jpg";
import baristaVideo from "@/assets/up-town-barista.mp4.asset.json";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const CONTACT = {
  address: "55, Block C1, Block C Phase 1, Johar Town, Lahore, Punjab 54000, Pakistan",
  phone: "+92 321 5433336",
  whatsapp: "+92 321 5433336",
  hours: "[Opening Hours]",
  whatsappUrl: "https://wa.me/923215433336",
  instagramUrl: "https://instagram.com/cafeuptown.lhr",
};

const menuItems = [
  { id: 1, name: "Signature Latte", category: "Coffee", description: "Rich espresso with silky steamed milk.", price: 690, image: coffeeImage },
  { id: 2, name: "Classic Cappuccino", category: "Coffee", description: "Bold espresso crowned with velvety foam.", price: 620, image: coffeeImage },
  { id: 3, name: "Chicken Alfredo Pasta", category: "Pasta", description: "Creamy pasta, grilled chicken and parmesan.", price: 1490, image: foodImage },
  { id: 4, name: "Grilled Chicken Sandwich", category: "Burgers & Sandwiches", description: "Fresh vegetables, house sauce and crisp fries.", price: 1190, image: foodImage },
  { id: 5, name: "Chocolate Brownie", category: "Desserts", description: "Warm brownie with vanilla ice cream.", price: 790, image: dessertImage },
  { id: 6, name: "Iced Caramel Latte", category: "Cold Drinks", description: "Cold espresso, fresh milk and caramel over ice.", price: 750, image: dessertImage },
  { id: 7, name: "Uptown Breakfast", category: "Breakfast", description: "Eggs, chicken sausage, toast and roasted tomatoes.", price: 1390, image: foodImage },
  { id: 8, name: "Crispy Smash Burger", category: "Burgers & Sandwiches", description: "Double beef patty, cheddar and secret sauce.", price: 1450, image: foodImage },
];

const categories = ["All", "Coffee", "Breakfast", "Burgers & Sandwiches", "Pasta", "Desserts", "Cold Drinks"];
const navItems = ["Home", "Menu", "About", "Gallery", "Reviews", "Contact"];

const benefits = [
  { icon: Leaf, title: "Fresh Ingredients", copy: "Quality ingredients, thoughtfully sourced and prepared with care." },
  { icon: Bean, title: "Great Coffee", copy: "Carefully crafted coffee, made fresh for every guest." },
  { icon: Coffee, title: "Comfortable Atmosphere", copy: "A welcoming space for conversations, work and relaxation." },
  { icon: HeartHandshake, title: "Friendly Service", copy: "A team focused on making every visit feel effortless." },
];

const reviews = [
  { quote: "Amazing coffee, beautiful atmosphere, and the food was excellent. Definitely coming back.", name: "Sarah K.", detail: "Weekend brunch" },
  { quote: "One of my favourite places to meet friends. The vibe is perfect, from afternoon coffee to late dinners.", name: "Ahmed R.", detail: "Local guide" },
  { quote: "Great food, friendly staff, and a really comfortable environment. Their iced latte is a must.", name: "Hamza R.", detail: "Regular guest" },
];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#home" className="group flex items-center gap-3" aria-label="Up Town Cafe home">
      <span className="grid size-10 place-items-center rounded-full border border-current font-display text-sm font-semibold transition-transform group-hover:-rotate-6">UT</span>
      {!compact && (
        <span className="leading-none">
          <span className="block font-display text-xl">Up Town</span>
          <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.26em]">Cafe · Lahore</span>
        </span>
      )}
    </a>
  );
}

export function CafeSite() {
  const [category, setCategory] = useState("All");
  const visibleItems = category === "All" ? menuItems : menuItems.filter((item) => item.category === category);

  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-hero-foreground/15 bg-hero/85 text-hero-foreground backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <BrandMark />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-semibold uppercase tracking-[0.14em] text-hero-foreground/75 transition-colors hover:text-hero-foreground">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild className="hidden h-11 bg-copper px-5 text-copper-foreground shadow-none hover:bg-copper/90 sm:inline-flex"><a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp us <ArrowRight /></a></Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="ghost" className="text-hero-foreground hover:bg-hero-foreground/10 hover:text-hero-foreground lg:hidden" aria-label="Open navigation"><Menu /></Button>
              </SheetTrigger>
              <SheetContent className="border-border bg-background pt-16">
                <SheetHeader className="text-left"><SheetTitle><BrandMark /></SheetTitle><SheetDescription>Your neighbourhood table.</SheetDescription></SheetHeader>
                <nav className="mt-10 grid gap-2">
                  {navItems.map((item) => <SheetClose asChild key={item}><a href={`#${item.toLowerCase()}`} className="border-b border-border py-4 font-display text-3xl">{item}</a></SheetClose>)}
                </nav>
                <Button asChild className="mt-8 w-full"><a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp us <ArrowRight /></a></Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <section id="home" className="relative min-h-[760px] bg-hero text-hero-foreground md:min-h-[820px]">
        <video autoPlay muted loop playsInline poster={heroImage} aria-label="A barista carefully preparing coffee" className="absolute inset-0 h-full w-full object-cover object-center"><source src={baristaVideo.url} type="video/mp4" /></video>
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto flex min-h-[760px] max-w-[1440px] items-end px-5 pb-16 pt-32 sm:px-8 md:min-h-[820px] md:items-center md:pb-24 lg:px-12">
          <div className="max-w-3xl animate-rise">
            <div className="mb-7 inline-flex items-center gap-3 border-y border-hero-foreground/30 py-2 text-[10px] font-bold uppercase tracking-[0.2em] sm:text-xs">
              <span>Freshly brewed</span><span className="text-copper">•</span><span>Freshly made</span><span className="text-copper">•</span><span>Always welcoming</span>
            </div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-copper-light">Your neighbourhood, elevated.</p>
            <h1 className="max-w-3xl font-display text-6xl leading-[0.93] sm:text-7xl md:text-[6.4rem]">Good Coffee.<br />Great Food.<br /><em className="font-normal text-copper-light">Better Moments.</em></h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-hero-foreground/78 sm:text-lg">Welcome to Up Town Cafe — your neighbourhood spot for exceptional coffee, delicious food, and memorable moments.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 bg-copper px-6 text-copper-foreground shadow-none hover:bg-copper/90"><a href="#menu">View menu <ArrowRight /></a></Button>
              <Button asChild size="lg" variant="outline" className="h-12 border-hero-foreground/40 bg-transparent px-6 text-hero-foreground shadow-none hover:bg-hero-foreground/10 hover:text-hero-foreground"><a href="#contact"><MapPin /> Visit us</a></Button>
            </div>
          </div>
        </div>
        <a href="#menu" aria-label="Scroll to menu" className="absolute bottom-7 right-7 hidden animate-bounce text-hero-foreground/70 md:block"><ChevronDown /></a>
      </section>

      <section id="menu" className="scroll-mt-20 py-24 sm:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div><p className="section-kicker">From our kitchen</p><h2 className="section-title">Something for<br /><em>every craving.</em></h2></div>
            <p className="max-w-md text-sm leading-7 text-muted-foreground">Coffee for slow mornings, comfort food for hungry afternoons, and something sweet for every little celebration.</p>
          </div>
          <div className="mt-12 flex gap-2 overflow-x-auto border-b border-border pb-4 scrollbar-none">
            {categories.map((item) => <Button key={item} onClick={() => setCategory(item)} variant={category === item ? "default" : "ghost"} className="shrink-0 rounded-full px-5">{item}</Button>)}
          </div>
          <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {visibleItems.map((item, index) => {
              return (
                <article key={item.id} className="group min-w-0">
                  <div className="relative aspect-[4/4.6] overflow-hidden rounded-md bg-muted">
                    <img src={item.image} alt={item.name} width={1200} height={item.image === dessertImage ? 1504 : 1200} loading="lazy" className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${index % 2 ? "object-[70%_center]" : "object-center"}`} />
                    <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] backdrop-blur">{item.category}</span>
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-3"><div><h3 className="font-display text-2xl">{item.name}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p></div><p className="shrink-0 text-sm font-bold">Rs. {item.price.toLocaleString()}</p></div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 bg-primary py-24 text-primary-foreground sm:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12">
          <div className="relative min-h-[560px]"><img src={heroImage} alt="Guests relaxing inside Up Town Cafe" width={1600} height={1200} loading="lazy" className="absolute inset-0 h-[92%] w-[88%] rounded-md object-cover object-right" /><div className="absolute bottom-0 right-0 max-w-[230px] rounded-md bg-copper p-6 text-copper-foreground shadow-xl"><p className="font-display text-5xl">Every day</p><p className="mt-2 text-xs font-bold uppercase tracking-[0.16em]">Made for your moments</p></div></div>
          <div className="lg:pl-10"><p className="section-kicker text-copper-light">Our story</p><h2 className="section-title text-primary-foreground">More than<br />just a <em>cafe.</em></h2><p className="mt-8 max-w-xl text-lg leading-8 text-primary-foreground/72">Up Town Cafe began with one simple idea: make a place where everyone feels like they belong. A table to meet at, work from, celebrate around, or simply pause beside.</p><p className="mt-5 max-w-xl leading-7 text-primary-foreground/60">We pair honest ingredients and carefully made coffee with the kind of warmth that turns a quick visit into a favourite ritual.</p><Button asChild variant="link" className="mt-8 h-auto p-0 text-copper-light"><a href="#why">Discover our story <ArrowRight /></a></Button></div>
        </div>
      </section>

      <section id="why" className="bg-secondary py-24 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><div className="text-center"><p className="section-kicker">The Up Town way</p><h2 className="section-title">Why people <em>love us.</em></h2></div><div className="mt-14 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">{benefits.map(({ icon: Icon, title, copy }, index) => <article key={title} className="group bg-background p-7 transition-colors hover:bg-accent sm:p-9"><span className="mb-10 grid size-12 place-items-center rounded-full border border-border text-accent-foreground transition-transform group-hover:-rotate-6"><Icon /></span><p className="text-xs font-bold text-copper">0{index + 1}</p><h3 className="mt-3 font-display text-2xl">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p></article>)}</div></div>
      </section>

      <section id="gallery" className="scroll-mt-20 py-24 sm:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><div className="flex items-end justify-between gap-8"><div><p className="section-kicker">Scenes from Up Town</p><h2 className="section-title">Come in.<br /><em>Stay awhile.</em></h2></div><a href={CONTACT.instagramUrl} target="_blank" rel="noreferrer" aria-label="Follow cafeuptown.lhr on Instagram"><Instagram className="mb-2 hidden size-8 text-copper sm:block" /></a></div>
          <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-4">
            <figure className="group col-span-2 row-span-2 overflow-hidden rounded-md"><img src={heroImage} alt="Up Town Cafe interior" width={1600} height={1200} loading="lazy" className="gallery-image" /></figure>
            <figure className="group overflow-hidden rounded-md"><img src={coffeeImage} alt="Signature latte" width={1200} height={1200} loading="lazy" className="gallery-image" /></figure>
            <figure className="group row-span-2 overflow-hidden rounded-md"><img src={dessertImage} alt="Brownie and iced caramel latte" width={1200} height={1504} loading="lazy" className="gallery-image" /></figure>
            <figure className="group overflow-hidden rounded-md"><img src={foodImage} alt="Pasta and sandwich" width={1200} height={1200} loading="lazy" className="gallery-image" /></figure>
            <figure className="group col-span-2 overflow-hidden rounded-md"><img src={heroImage} alt="Friends enjoying the cafe" width={1600} height={1200} loading="lazy" className="gallery-image object-right" /></figure>
          </div>
        </div>
      </section>

      <section id="reviews" className="scroll-mt-20 border-y border-border bg-secondary py-24 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><div className="grid gap-12 lg:grid-cols-[0.7fr_2fr]"><div><p className="section-kicker">Kind words</p><h2 className="section-title">Loved by<br /><em>locals.</em></h2><div className="mt-7 flex gap-1 text-copper">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="size-4 fill-current" />)}</div></div><div className="grid gap-4 md:grid-cols-3">{reviews.map((review) => <figure key={review.name} className="rounded-md border border-border bg-background p-7"><Quote className="size-8 text-copper" /><blockquote className="mt-7 font-display text-xl leading-8">“{review.quote}”</blockquote><figcaption className="mt-8 border-t border-border pt-5"><p className="font-semibold">{review.name}</p><p className="mt-1 text-xs text-muted-foreground">{review.detail}</p></figcaption></figure>)}</div></div></div>
      </section>

      <section className="relative min-h-[580px] overflow-hidden bg-primary text-primary-foreground"><img src={coffeeImage} alt="Fresh latte at Up Town Cafe" width={1200} height={1200} loading="lazy" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-promo-overlay" /><div className="relative mx-auto flex min-h-[580px] max-w-[1440px] items-center justify-center px-5 text-center sm:px-8"><div className="max-w-3xl"><p className="section-kicker text-copper-light">Your table is waiting</p><h2 className="font-display text-5xl leading-none sm:text-7xl md:text-8xl">Your next favourite coffee is waiting.</h2><p className="mx-auto mt-6 max-w-lg text-primary-foreground/75">Drop by Up Town Cafe and make your next coffee break a little better.</p><Button asChild size="lg" className="mt-9 h-12 bg-copper px-7 text-copper-foreground hover:bg-copper/90"><a href="#menu">View full menu <ArrowRight /></a></Button></div></div></section>

      <section id="contact" className="scroll-mt-20 py-24 sm:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12"><div><p className="section-kicker">Lahore, Pakistan</p><h2 className="section-title">Find your way<br />to <em>Up Town.</em></h2><p className="mt-7 max-w-md leading-7 text-muted-foreground">Pull up a chair. We’re here for morning coffee, long lunches, and everything in between.</p><div className="mt-10 divide-y divide-border border-y border-border">
          <div className="flex gap-4 py-5"><MapPin className="mt-0.5 size-5 shrink-0 text-copper" /><div><p className="text-xs font-bold uppercase tracking-[0.12em]">Address</p><p className="mt-2 text-sm text-muted-foreground">{CONTACT.address}</p></div></div>
          <div className="flex gap-4 py-5"><Clock3 className="mt-0.5 size-5 shrink-0 text-copper" /><div><p className="text-xs font-bold uppercase tracking-[0.12em]">Opening hours</p><p className="mt-2 text-sm text-muted-foreground">{CONTACT.hours}</p></div></div>
          <div className="flex gap-4 py-5"><Phone className="mt-0.5 size-5 shrink-0 text-copper" /><div><p className="text-xs font-bold uppercase tracking-[0.12em]">Call or WhatsApp</p><p className="mt-2 text-sm text-muted-foreground">{CONTACT.phone} · {CONTACT.whatsapp}</p></div></div>
        </div><div className="mt-7 flex flex-wrap gap-2"><Button asChild><a href="tel:+923215433336"><Phone /> Call us</a></Button><Button asChild variant="outline"><a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp us <ArrowRight /></a></Button><Button asChild variant="ghost"><a href={CONTACT.instagramUrl} target="_blank" rel="noreferrer"><Instagram /> @cafeuptown.lhr</a></Button></div></div>
          <div className="relative min-h-[500px] overflow-hidden rounded-md bg-primary"><img src={heroImage} alt="Up Town Cafe location placeholder" width={1600} height={1200} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-50" /><div className="absolute inset-0 grid place-items-center bg-map-overlay p-6 text-center text-primary-foreground"><div><span className="mx-auto grid size-16 place-items-center rounded-full bg-copper text-copper-foreground"><MapPin className="size-7" /></span><p className="mt-5 font-display text-3xl">Up Town Cafe</p><p className="mt-2 text-sm text-primary-foreground/70">{CONTACT.address}</p><Button variant="outline" className="mt-6 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">Get directions <ArrowRight /></Button></div></div></div>
        </div>
      </section>

      <footer className="bg-hero px-5 py-14 text-hero-foreground sm:px-8 lg:px-12"><div className="mx-auto max-w-[1440px]"><div className="flex flex-col justify-between gap-10 border-b border-hero-foreground/15 pb-12 md:flex-row md:items-end"><div><BrandMark /><p className="mt-5 font-display text-2xl text-hero-foreground/70">Good Coffee. Great Food. Better Moments.</p></div><div className="flex flex-wrap gap-x-6 gap-y-3">{["Home", "Menu", "About", "Gallery", "Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-bold uppercase tracking-[0.12em] text-hero-foreground/70 hover:text-hero-foreground">{item}</a>)}</div></div><div className="flex flex-col justify-between gap-5 pt-7 text-xs text-hero-foreground/45 sm:flex-row"><p>© 2026 Up Town Cafe. All rights reserved.</p><div className="flex gap-5"><a href={CONTACT.instagramUrl} target="_blank" rel="noreferrer">Instagram</a><a href="https://facebook.com">Facebook</a><a href="https://tiktok.com">TikTok</a><a href={CONTACT.whatsappUrl}>WhatsApp</a></div></div></div></footer>

    </main>
  );
}