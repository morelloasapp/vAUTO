import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Package } from "lucide-react";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  compatibility?: string;
  badge?: "Nou" | "Redus" | "Stoc limitat";
  stock: "available" | "low" | "out";
  allegroUrl?: string;
  onClick?: () => void;
}

export default function ProductCard({
  id,
  title,
  price,
  image,
  category,
  compatibility,
  badge,
  stock,
  allegroUrl,
  onClick,
}: ProductCardProps) {
  const stockColors = {
    available: "text-chart-4",
    low: "text-chart-5",
    out: "text-muted-foreground",
  };

  const stockTexts = {
    available: "În stoc",
    low: "Stoc limitat",
    out: "Indisponibil",
  };

  return (
    <Card className="overflow-hidden hover-elevate group cursor-pointer" data-testid={`card-product-${id}`}>
      <div className="relative" onClick={onClick}>
        {badge && (
          <Badge className="absolute top-3 left-3 z-10" variant={badge === "Redus" ? "destructive" : "default"}>
            {badge}
          </Badge>
        )}
        <div className="aspect-square bg-card overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      </div>

      <div className="p-4 space-y-3" onClick={onClick}>
        <div>
          <p className="text-xs text-muted-foreground mb-1">{category}</p>
          <h3 className="font-semibold text-foreground line-clamp-2 leading-tight">
            {title}
          </h3>
          {compatibility && (
            <p className="text-xs text-muted-foreground mt-1">
              {compatibility}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-display font-bold text-primary">
              {price.toFixed(2)} RON
            </div>
            <div className={`text-xs flex items-center gap-1 ${stockColors[stock]}`}>
              <Package className="w-3 h-3" />
              {stockTexts[stock]}
            </div>
          </div>
        </div>

        {allegroUrl && (
          <Button
            size="sm"
            variant="outline"
            className="w-full"
            onClick={(e) => {
              e.stopPropagation();
              window.open(allegroUrl, "_blank");
            }}
            data-testid={`button-view-allegro-${id}`}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Comanda acum
          </Button>
        )}
      </div>
    </Card>
  );
}
