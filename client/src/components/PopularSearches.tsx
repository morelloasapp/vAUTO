import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

const searches = [
  "Placute frana VW Golf",
  "Filtru ulei BMW",
  "Amortizoare Audi A4",
  "Kit distributie Ford Focus",
  "Alternator Mercedes",
  "Baterie auto Bosch",
  "Faruri LED",
  "Disc frana spate",
  "Bujii NGK",
  "Curea accesorii",
];

export default function PopularSearches() {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h3 className="font-display font-bold text-lg text-foreground">
            Căutări Populare
          </h3>
        </div>

        <div className="flex flex-wrap gap-3">
          {searches.map((search) => (
            <Badge
              key={search}
              variant="secondary"
              className="cursor-pointer hover-elevate active-elevate-2 px-4 py-2 text-sm"
              data-testid={`badge-search-${search.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {search}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
