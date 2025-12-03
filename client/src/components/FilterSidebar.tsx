import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { X } from "lucide-react";
import { useState } from "react";

interface FilterSidebarProps {
  onClose?: () => void;
  isMobile?: boolean;
}

// 🔥 Lista completă mărci + modele populare
const carData: Record<string, string[]> = {
  BMW: ["Series 1", "Series 3", "Series 5", "X1", "X3", "X5", "X6"],
  Mercedes: ["A-Class", "C-Class", "E-Class", "S-Class", "GLA", "GLC", "GLE"],
  Audi: ["A1", "A3", "A4", "A6", "Q2", "Q3", "Q5", "Q7"],
  Volkswagen: ["Golf", "Passat", "Tiguan", "Polo", "Touran", "Arteon"],
  Toyota: ["Yaris", "Corolla", "Camry", "RAV4", "Hilux", "Land Cruiser"],
  Ford: ["Fiesta", "Focus", "Mondeo", "Kuga", "Puma", "Ranger"],
  Opel: ["Corsa", "Astra", "Insignia", "Mokka", "Zafira"],
  Dacia: ["Logan", "Sandero", "Duster", "Jogger", "Spring"],
  Renault: ["Clio", "Megane", "Kadjar", "Captur", "Talisman"],
  Hyundai: ["i20", "i30", "Elantra", "Tucson", "Santa Fe"],
  Kia: ["Ceed", "Sportage", "Rio", "Sorento", "Stonic"],
  Peugeot: ["208", "308", "3008", "5008"],
  Citroen: ["C3", "C4", "C5 Aircross"],
  Mazda: ["Mazda 2", "Mazda 3", "CX-3", "CX-5"],
  Honda: ["Civic", "Accord", "CR-V"],
  Nissan: ["Micra", "Qashqai", "X-Trail"],
  Volvo: ["S60", "XC40", "XC60", "XC90"],
  Seat: ["Ibiza", "Leon", "Ateca", "Arona"],
  Skoda: ["Fabia", "Octavia", "Superb", "Kodiaq", "Karoq"],
};

const categories = ["Motor", "Frânare", "Suspensie", "Caroserie", "Electrice", "Accesorii"];

export default function FilterSidebar({ onClose, isMobile }: FilterSidebarProps) {
  const [priceRange, setPriceRange] = useState([0, 2000]);

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleModelToggle = (model: string) => {
    setSelectedModels((prev) =>
      prev.includes(model) ? prev.filter((m) => m !== model) : [...prev, model]
    );
  };

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedModels([]);
    setSelectedCategories([]);
    setPriceRange([0, 2000]);
  };

  return (
    <Card className="p-6 h-fit sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display font-bold text-lg">Filtrează</h3>
        {isMobile && (
          <Button size="icon" variant="ghost" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        )}
      </div>

      <div className="space-y-6">
        {/* Marca Auto */}
        <div>
          <h4 className="font-semibold mb-3 text-sm">Marcă Vehicul</h4>
          <div className="space-y-2">
            {Object.keys(carData).map((brand) => (
              <div key={brand} className="flex items-center gap-2">
                <Checkbox
                  checked={selectedBrands.includes(brand)}
                  onCheckedChange={() => handleBrandToggle(brand)}
                />
                <Label className="text-sm cursor-pointer">{brand}</Label>
              </div>
            ))}
          </div>
        </div>

        {/* Modele Auto */}
        {selectedBrands.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3 text-sm">Model Vehicul</h4>
            {selectedBrands.map((brand) => (
              <div key={brand} className="mb-4">
                <p className="text-xs font-medium text-muted-foreground mb-2">{brand}</p>

                <div className="space-y-1">
                  {carData[brand].map((model) => (
                    <label key={model} className="flex items-center gap-2 cursor-pointer">
                      <Checkbox
                        checked={selectedModels.includes(model)}
                        onCheckedChange={() => handleModelToggle(model)}
                      />
                      <span className="text-sm">{model}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Categorii */}
        <div>
          <h4 className="font-semibold mb-3 text-sm">Categorie</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center gap-2">
                <Checkbox
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => handleCategoryToggle(category)}
                />
                <Label className="text-sm cursor-pointer">{category}</Label>
              </div>
            ))}
          </div>
        </div>

        {/* Preț */}
        <div>
          <h4 className="font-semibold mb-3 text-sm">Preț (RON)</h4>
          <Slider value={priceRange} onValueChange={setPriceRange} min={0} max={2000} step={10} />
          <div className="flex items-center justify-between text-sm text-muted-foreground mt-2">
            <span>{priceRange[0]} RON</span>
            <span>{priceRange[1]} RON</span>
          </div>
        </div>

        <Button variant="outline" className="w-full" onClick={clearFilters}>
          Șterge filtrele
        </Button>
      </div>
    </Card>
  );
}
