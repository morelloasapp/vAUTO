import { Card } from "@/components/ui/card";

const brands = [
  "Bosch", "Sachs", "Mann", "Hella", "Valeo", "Continental",
  "Brembo", "Gates", "SKF", "Castrol", "Mahle", "Denso"
];

export default function BrandLogos() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
            Branduri Premium
          </h2>
          <p className="text-muted-foreground">
            Lucrăm doar cu cei mai de încredere producători
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <Card
              key={brand}
              className="p-6 hover-elevate active-elevate-2 cursor-pointer flex items-center justify-center"
              data-testid={`card-brand-${brand.toLowerCase()}`}
            >
              <span className="font-display font-bold text-lg text-center">
                {brand}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
