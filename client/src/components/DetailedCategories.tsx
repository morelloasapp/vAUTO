import CategoryShowcase from "./CategoryShowcase";

const categories = [
  {
    title: "Sistem de Frânare",
    icon: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=48&h=48&q=80",
    mainImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&q=80",
    subcategories: [
      { name: "Discuri de frână", count: 850, href: "/discuri-frana" },
      { name: "Plăcuțe de frână", count: 720, href: "/placute-frana" },
      { name: "Etrier de frână", count: 420, href: "/etrier-frana" },
      { name: "Furtune frână", count: 350, href: "/furtune-frana" },
      { name: "Tamburi frână", count: 280, href: "/tamburi-frana" },
      { name: "Set reparație", count: 190, href: "/set-reparatie" },
    ],
  },
  {
    title: "Suspensie & Amortizare",
    icon: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=48&h=48&q=80",
    mainImage: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=300&q=80",
    subcategories: [
      { name: "Amortizoare", count: 920, href: "/amortizoare" },
      { name: "Arcuri suspensie", count: 680, href: "/arcuri" },
      { name: "Braț suspensie", count: 540, href: "/brat-suspensie" },
      { name: "Flansa amortizor", count: 380, href: "/flansa" },
      { name: "Kit reparație", count: 290, href: "/kit-reparatie" },
      { name: "Bară stabilizatoare", count: 240, href: "/bara-stabilizatoare" },
    ],
  },
  {
    title: "Motor & Distribuție",
    icon: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=48&h=48&q=80",
    mainImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=300&q=80",
    subcategories: [
      { name: "Kit distribuție", count: 780, href: "/kit-distributie" },
      { name: "Pompă apă", count: 650, href: "/pompa-apa" },
      { name: "Suport motor", count: 520, href: "/suport-motor" },
      { name: "Curea accesorii", count: 470, href: "/curea-accesorii" },
      { name: "Filtru ulei", count: 890, href: "/filtru-ulei" },
      { name: "Turbină", count: 340, href: "/turbina" },
    ],
  },
  {
    title: "Sistem Electric",
    icon: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=48&h=48&q=80",
    mainImage: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=300&q=80",
    subcategories: [
      { name: "Baterie auto", count: 420, href: "/baterie" },
      { name: "Alternator", count: 580, href: "/alternator" },
      { name: "Electromotor", count: 490, href: "/electromotor" },
      { name: "Bujii", count: 670, href: "/bujii" },
      { name: "Bobină inductie", count: 380, href: "/bobina" },
      { name: "Senzori", count: 720, href: "/senzori" },
    ],
  },
];

export default function DetailedCategories() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
            Piese Auto pe Categorii
          </h2>
          <p className="text-muted-foreground">
            Găsește rapid piesa potrivită pentru vehiculul tău
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {categories.map((category) => (
            <CategoryShowcase key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
