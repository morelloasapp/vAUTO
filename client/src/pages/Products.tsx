import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import FilterSidebar from "@/components/FilterSidebar";
import ProductCard from "@/components/ProductCard";

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
];

export default function Products() {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-display font-bold text-foreground mb-2">
              Toate Piesele Auto
            </h1>
            <p className="text-muted-foreground">
              {mockProducts.length} produse găsite
            </p>
          </div>

          <Button
            variant="outline"
            className="lg:hidden"
            onClick={() => setShowMobileFilters(true)}
            data-testid="button-show-filters"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filtrează
          </Button>
        </div>

        <div className="flex gap-6">
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {showMobileFilters && (
            <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
              <div className="absolute right-0 top-0 bottom-0 w-80 bg-background overflow-y-auto">
                <FilterSidebar
                  isMobile
                  onClose={() => setShowMobileFilters(false)}
                />
              </div>
            </div>
          )}

          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {mockProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  allegroUrl="https://allegro.pl"
                  onClick={() => console.log(`Product ${product.id} clicked`)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
