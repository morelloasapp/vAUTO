import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

interface SubCategory {
  name: string;
  count: number;
  href: string;
}

interface CategoryShowcaseProps {
  title: string;
  icon: string;
  subcategories: SubCategory[];
  mainImage: string;
}

export default function CategoryShowcase({ title, icon, subcategories, mainImage }: CategoryShowcaseProps) {
  return (
    <Card className="overflow-hidden hover-elevate">
      <div className="flex flex-col h-full">
        <div className="bg-card p-4 border-b flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <img src={icon} alt="" className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-lg text-foreground">
            {title}
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-px bg-border">
          <div className="col-span-2 md:col-span-1 bg-background p-6 space-y-2">
            {subcategories.slice(0, 6).map((sub) => (
              <Link key={sub.name} href={sub.href}>
                <button className="w-full text-left flex items-center justify-between py-1.5 px-2 hover-elevate active-elevate-2 rounded group">
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                    {sub.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">
                      {sub.count}
                    </span>
                    <ChevronRight className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </button>
              </Link>
            ))}
          </div>

          <div className="hidden md:block bg-card p-2">
            <img
              src={mainImage}
              alt={title}
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
