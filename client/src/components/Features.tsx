import { Card } from "@/components/ui/card";
import { Shield, Truck, BadgeCheck, Headphones, Clock, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Retur 14 zile",
    description: "Nu esti multumit? Ai 14 zile dreptul la retur",
  },
  {
    icon: Truck,
    title: "Livrare Rapidă",
    description: "Livrare în 2-3 zile lucrătoare în toată țara",
  },
  {
    icon: BadgeCheck,
    title: "Piese Originale",
    description: "100% piese originale provenite din dezmembrari",
  },
  {
    icon: Headphones,
    title: "Suport Clienți",
    description: "Echipă dedicată pentru asistență tehnică",
  },
  {
    icon: Clock,
    title: "Stoc Permanent",
    description: "Peste 200,000 de piese în stoc permanent",
  },
  {
    icon: Award,
    title: "Gama variata de piese auto",
    description: "La noi gasesti una dintre cele mai mari varietati de piese auto",
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
            De Ce Să Alegi PieseAuto?
          </h2>
          <p className="text-muted-foreground">
            Avantajele tale când cumperi de la noi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="p-6 hover-elevate">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
