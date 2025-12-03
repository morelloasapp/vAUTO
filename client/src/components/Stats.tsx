import { Package, Users, MapPin, Star } from "lucide-react";

const stats = [
  {
    icon: Package,
    value: "200,000+",
    label: "Piese în Stoc",
  },
  {
    icon: Users,
    value: "15,000+",
    label: "Clienți Mulțumiți",
  },
  {
    icon: MapPin,
    value: "500+",
    label: "Orașe Acoperite",
  },
  {
    icon: Star,
    value: "4.8/5",
    label: "Rating Mediu",
  },
];

export default function Stats() {
  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
