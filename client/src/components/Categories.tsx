import { Settings, Disc, Gauge, Car, Wrench, Zap } from "lucide-react";
import CategoryCard from "./CategoryCard";

const categories = [
  { icon: Settings, name: "Motor", count: 2450 },
  { icon: Disc, name: "Frânare", count: 1820 },
  { icon: Gauge, name: "Suspensie", count: 1560 },
  { icon: Car, name: "Caroserie", count: 3200 },
  { icon: Wrench, name: "Accesorii", count: 4100 },
  { icon: Zap, name: "Electrice", count: 1890 },
];

export default function Categories() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
            Explorează Categoriile
          </h2>
          <p className="text-muted-foreground">
            Găsește exact piesa de care ai nevoie
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              icon={category.icon}
              name={category.name}
              count={category.count}
              onClick={() => console.log(`Category ${category.name} clicked`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
