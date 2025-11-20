import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, TrendingDown, Zap } from "lucide-react";
import { useEffect, useState } from "react";

interface PromoBannerProps {
  title: string;
  discount: string;
  endDate: Date;
  image: string;
  variant?: "default" | "urgent";
}

export default function PromoBanner({ title, discount, endDate, image, variant = "default" }: PromoBannerProps) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance < 0) {
        setTimeLeft("Ofertă expirată");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${days}z ${hours}h ${minutes}m ${seconds}s`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [endDate]);

  const bgGradient = variant === "urgent"
    ? "from-chart-2/20 to-primary/20"
    : "from-primary/20 to-chart-1/20";

  return (
    <Card className={`overflow-hidden bg-gradient-to-br ${bgGradient} border-primary/20`}>
      <div className="relative p-6 md:p-8">
        <div className="absolute top-4 right-4">
          <Badge variant={variant === "urgent" ? "destructive" : "default"} className="text-xs">
            {variant === "urgent" ? (
              <>
                <Zap className="w-3 h-3 mr-1" />
                OFERTĂ LIMITATĂ
              </>
            ) : (
              <>
                <TrendingDown className="w-3 h-3 mr-1" />
                REDUCERE
              </>
            )}
          </Badge>
        </div>

        <div className="max-w-xl">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
            {title}
          </h3>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-4xl md:text-5xl font-display font-bold text-primary">
              {discount}
            </span>
            <span className="text-lg text-muted-foreground">reducere</span>
          </div>

          <div className="flex items-center gap-2 mb-6 text-sm">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">Oferta se încheie în:</span>
            <span className="font-display font-bold text-foreground">{timeLeft}</span>
          </div>

          <Button size="lg" data-testid="button-view-promo">
            Vezi Oferta
          </Button>
        </div>
      </div>
    </Card>
  );
}
