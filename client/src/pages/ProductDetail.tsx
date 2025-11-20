import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Package, Truck, Shield, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

const images = [
  "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
  "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80",
  "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&q=80",
];

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link href="/products">
          <Button variant="ghost" className="mb-6" data-testid="button-back">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Înapoi la produse
          </Button>
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="aspect-square bg-card rounded-lg overflow-hidden mb-4">
              <img
                src={images[selectedImage]}
                alt="Product"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square bg-card rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === idx ? "border-primary" : "border-transparent"
                  }`}
                  data-testid={`button-image-${idx}`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4">
              <Badge variant="destructive" className="mb-3">Reducere 15%</Badge>
              <h1 className="text-3xl font-display font-bold text-foreground mb-2">
                Set Placute Frana Fata Bosch Premium
              </h1>
              <p className="text-muted-foreground">Cod produs: BOS-PF-2450</p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-display font-bold text-primary">245.99 RON</span>
                <span className="text-xl text-muted-foreground line-through">289.00 RON</span>
              </div>
              <div className="flex items-center gap-2 text-chart-4">
                <Package className="w-4 h-4" />
                <span className="text-sm font-medium">În stoc - Livrare în 2-3 zile</span>
              </div>
            </div>

            <Card className="p-6 mb-6">
              <h3 className="font-semibold mb-3">Compatibilitate</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Volkswagen Golf VII (2012-2020)</li>
                <li>• Audi A3 8V (2012-2020)</li>
                <li>• Seat Leon III (2012-2020)</li>
                <li>• Skoda Octavia III (2013-2020)</li>
              </ul>
            </Card>

            <div className="space-y-3">
              <Button size="lg" className="w-full" data-testid="button-view-allegro-detail">
                <ExternalLink className="w-5 h-5 mr-2" />
                Vezi pe Allegro
              </Button>

              <div className="grid grid-cols-3 gap-3 text-center">
                <Card className="p-4">
                  <Truck className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground">Livrare rapidă</p>
                </Card>
                <Card className="p-4">
                  <Shield className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground">Garanție 24 luni</p>
                </Card>
                <Card className="p-4">
                  <Package className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground">Retur 30 zile</p>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="description" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description" data-testid="tab-description">Descriere</TabsTrigger>
            <TabsTrigger value="specs" data-testid="tab-specs">Specificații</TabsTrigger>
            <TabsTrigger value="compatibility" data-testid="tab-compatibility">Compatibilitate</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Despre produs</h3>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="mb-4">
                  Set complet de placute de frana fata Bosch Premium, special conceput pentru vehiculele Volkswagen Golf VII si Audi A3. Aceste placute ofera performante exceptionale si durata de viata indelungata.
                </p>
                <p className="mb-4">
                  Caracteristici principale:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Material de inalta calitate pentru frana eficienta</li>
                  <li>Reducerea zgomotelor si vibratiilor</li>
                  <li>Performante optime in conditii extreme</li>
                  <li>Testate conform standardelor europene</li>
                  <li>Include toate accesoriile necesare montajului</li>
                </ul>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="specs" className="mt-6">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Specificații tehnice</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Producător</span>
                  <span className="font-medium">Bosch</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Serie</span>
                  <span className="font-medium">Premium</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Lungime</span>
                  <span className="font-medium">155 mm</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Lățime</span>
                  <span className="font-medium">65 mm</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Grosime</span>
                  <span className="font-medium">17 mm</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Sistem de franare</span>
                  <span className="font-medium">Disc</span>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="compatibility" className="mt-6">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Vehicule compatibile</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Volkswagen</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Golf VII (2012-2020) - toate motorizările</li>
                    <li>• Golf VII GTI (2013-2020)</li>
                    <li>• Golf Variant (2013-2020)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Audi</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• A3 8V (2012-2020) - 1.4 TFSI, 1.6 TDI, 2.0 TDI</li>
                    <li>• A3 Sportback (2012-2020)</li>
                    <li>• A3 Sedan (2013-2020)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Seat</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Leon III (2012-2020)</li>
                    <li>• Leon ST (2013-2020)</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
