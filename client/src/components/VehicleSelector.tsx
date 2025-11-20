import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { useState } from "react";

const brands = ["Volkswagen", "Audi", "BMW", "Mercedes-Benz", "Ford", "Opel", "Renault", "Peugeot"];
const models = ["Golf", "Passat", "Polo", "Tiguan", "T-Roc"];
const engines = ["1.4 TSI 125 CP", "1.6 TDI 105 CP", "2.0 TDI 150 CP", "1.5 TSI 150 CP"];

export default function VehicleSelector() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [engine, setEngine] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", { brand, model, engine });
  };

  return (
    <section className="py-12 bg-card">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
            Găsește Piese Pentru Mașina Ta
          </h2>
          <p className="text-muted-foreground">
            Selectează marca, modelul și motorul pentru rezultate precise
          </p>
        </div>

        <Card className="p-6 md:p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Selectează marca
              </label>
              <Select value={brand} onValueChange={setBrand}>
                <SelectTrigger data-testid="select-brand">
                  <SelectValue placeholder="Marca vehiculului" />
                </SelectTrigger>
                <SelectContent>
                  {brands.map((b) => (
                    <SelectItem key={b} value={b}>
                      {b}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                Selectează modelul
              </label>
              <Select value={model} onValueChange={setModel} disabled={!brand}>
                <SelectTrigger data-testid="select-model">
                  <SelectValue placeholder="Modelul vehiculului" />
                </SelectTrigger>
                <SelectContent>
                  {models.map((m) => (
                    <SelectItem key={m} value={m}>
                      {m}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                Selectează motorul
              </label>
              <Select value={engine} onValueChange={setEngine} disabled={!model}>
                <SelectTrigger data-testid="select-engine">
                  <SelectValue placeholder="Motorul vehiculului" />
                </SelectTrigger>
                <SelectContent>
                  {engines.map((e) => (
                    <SelectItem key={e} value={e}>
                      {e}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            size="lg"
            className="w-full"
            onClick={handleSearch}
            disabled={!engine}
            data-testid="button-search-vehicle"
          >
            <Search className="w-5 h-5 mr-2" />
            Caută Piese Auto
          </Button>
        </Card>
      </div>
    </section>
  );
}
