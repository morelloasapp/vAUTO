import CategoryShowcase from '../CategoryShowcase';

export default function CategoryShowcaseExample() {
  const subcategories = [
    { name: "Discuri de frână", count: 850, href: "/discuri-frana" },
    { name: "Plăcuțe de frână", count: 720, href: "/placute-frana" },
    { name: "Etrier de frână", count: 420, href: "/etrier-frana" },
    { name: "Furtune frână", count: 350, href: "/furtune-frana" },
    { name: "Tamburi frână", count: 280, href: "/tamburi-frana" },
    { name: "Set reparație", count: 190, href: "/set-reparatie" },
  ];

  return (
    <div className="p-6 max-w-2xl">
      <CategoryShowcase
        title="Sistem de Frânare"
        icon="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=48&h=48&q=80"
        subcategories={subcategories}
        mainImage="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&q=80"
      />
    </div>
  );
}
