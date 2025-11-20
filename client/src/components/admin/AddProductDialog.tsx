import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Download } from "lucide-react";

interface AddProductDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const categories = [
  "Frânare",
  "Suspensie",
  "Motor",
  "Filtre",
  "Uleiuri & Lichide",
  "Sistem Electric",
  "Caroserie",
  "Accesorii",
];

export default function AddProductDialog({ open, onOpenChange }: AddProductDialogProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    brand: "",
    price: "",
    description: "",
    sku: "",
    stock: "",
    allegroUrl: "",
  });

  const addProductMutation = useMutation({
    mutationFn: async (data: any) => {
      return await apiRequest("POST", "/api/products", {
        ...data,
        price: parseFloat(data.price),
        stock: parseInt(data.stock),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/products"] });
      toast({
        title: "Produs adăugat",
        description: "Produsul a fost adăugat cu succes în catalog",
      });
      setFormData({
        name: "",
        category: "",
        brand: "",
        price: "",
        description: "",
        sku: "",
        stock: "",
        allegroUrl: "",
      });
      onOpenChange(false);
    },
    onError: () => {
      toast({
        title: "Eroare",
        description: "Nu s-a putut adăuga produsul",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addProductMutation.mutate(formData);
  };

  const handleScrapeAllegro = async () => {
    if (!formData.name) {
      toast({
        title: "Eroare",
        description: "Introdu numele produsului mai întâi",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Scraping Allegro",
      description: "Funcția va fi implementată cu serviciu extern",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-bold">
            Adaugă Produs Nou
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <Label htmlFor="name">Nume Produs *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="ex: Discuri frână spate Bosch"
                required
                data-testid="input-product-name"
              />
            </div>

            <div>
              <Label htmlFor="category">Categorie *</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData({ ...formData, category: value })}
                required
              >
                <SelectTrigger data-testid="select-category">
                  <SelectValue placeholder="Selectează categoria" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="brand">Brand</Label>
              <Input
                id="brand"
                value={formData.brand}
                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                placeholder="ex: Bosch, Valeo"
                data-testid="input-brand"
              />
            </div>

            <div>
              <Label htmlFor="price">Preț (RON) *</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                placeholder="ex: 299.99"
                required
                data-testid="input-price"
              />
            </div>

            <div>
              <Label htmlFor="stock">Stoc *</Label>
              <Input
                id="stock"
                type="number"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                placeholder="ex: 10"
                required
                data-testid="input-stock"
              />
            </div>

            <div className="col-span-2">
              <Label htmlFor="sku">SKU / Cod Produs</Label>
              <Input
                id="sku"
                value={formData.sku}
                onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                placeholder="ex: BOS-12345"
                data-testid="input-sku"
              />
            </div>

            <div className="col-span-2">
              <Label htmlFor="description">Descriere</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Descriere detaliată a produsului..."
                rows={4}
                data-testid="textarea-description"
              />
            </div>

            <div className="col-span-2">
              <Label htmlFor="allegroUrl">URL Allegro (opțional)</Label>
              <div className="flex gap-2">
                <Input
                  id="allegroUrl"
                  value={formData.allegroUrl}
                  onChange={(e) => setFormData({ ...formData, allegroUrl: e.target.value })}
                  placeholder="https://allegro.pl/..."
                  data-testid="input-allegro-url"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleScrapeAllegro}
                  data-testid="button-scrape-allegro"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Scrape
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Adaugă link-ul Allegro pentru auto-scraping descriere și imagini
              </p>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              data-testid="button-cancel"
            >
              Anulează
            </Button>
            <Button
              type="submit"
              disabled={addProductMutation.isPending}
              data-testid="button-save-product"
            >
              {addProductMutation.isPending ? "Se salvează..." : "Salvează Produs"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
