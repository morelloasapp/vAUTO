import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const mockProducts = [
  {
    id: "1",
    title: "Set Placute Frana Fata Bosch Premium",
    price: 245.99,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80",
    category: "Frânare",
    compatibility: "VW Golf VII, Audi A3",
    badge: "Redus" as const,
    stock: "available" as const,
  },
  {
    id: "2",
    title: "Filtru Ulei Mann W 712/75",
    price: 45.50,
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80",
    category: "Motor",
    compatibility: "BMW E90, E91, E92",
    stock: "available" as const,
  },
  {
    id: "3",
    title: "Amortizor Fata Sachs Performance",
    price: 389.00,
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=400&q=80",
    category: "Suspensie",
    compatibility: "Renault Megane III",
    badge: "Nou" as const,
    stock: "low" as const,
  },
  {
    id: "4",
    title: "Far Stanga LED Hella Original",
    price: 1250.00,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    category: "Caroserie",
    compatibility: "VW Passat B8",
    stock: "available" as const,
  },
  {
    id: "5",
    title: "Baterie Auto Varta Blue Dynamic 60Ah",
    price: 320.00,
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&q=80",
    category: "Electrice",
    badge: "Stoc limitat" as const,
    stock: "low" as const,
  },
  {
    id: "6",
    title: "Set Curelă Distributie Gates PowerGrip",
    price: 189.90,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&q=80",
    category: "Motor",
    compatibility: "Ford Focus III, Fiesta VII",
    stock: "available" as const,
  },
  {
    id: "7",
    title: "Disc Frana Spate Zimmermann Sport",
    price: 156.00,
    image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=400&q=80",
    category: "Frânare",
    compatibility: "Opel Astra J",
    stock: "available" as const,
  },
  {
    id: "8",
    title: "Alternator Valeo Remanufacturat",
    price: 450.00,
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&q=80",
    category: "Electrice",
    badge: "Redus" as const,
    stock: "low" as const,
  },
];

export default function ProductGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
              Cele Mai Căutate Piese
            </h2>
            <p className="text-muted-foreground">
              Import direct din Allegro - Prețuri actualizate
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              allegroUrl="https://allegro.pl"
              onClick={() => console.log(`Product ${product.id} clicked`)}
            />
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-12">
          <Button
            variant="outline"
            size="icon"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            data-testid="button-prev-page"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          {[...Array(totalPages)].map((_, i) => (
            <Button
              key={i + 1}
              variant={currentPage === i + 1 ? "default" : "outline"}
              size="icon"
              onClick={() => setCurrentPage(i + 1)}
              data-testid={`button-page-${i + 1}`}
            >
              {i + 1}
            </Button>
          ))}

          <Button
            variant="outline"
            size="icon"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            data-testid="button-next-page"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
