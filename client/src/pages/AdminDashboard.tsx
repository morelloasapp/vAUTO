import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Package, 
  ShoppingBag, 
  Plus,
  Upload,
  Download,
  LogOut
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import ProductsTable from "@/components/admin/ProductsTable";
import AddProductDialog from "@/components/admin/AddProductDialog";
import { useState } from "react";
import type { Product, Order } from "@shared/schema";

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [addDialogOpen, setAddDialogOpen] = useState(false);

  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const { data: orders = [] } = useQuery<Order[]>({
    queryKey: ["/api/orders"],
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      return await apiRequest("POST", "/api/auth/logout");
    },
    onSuccess: () => {
      toast({
        title: "Deconectare reușită",
        description: "La revedere!",
      });
      setLocation("/admin");
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-display font-bold">
              Panou Administrare Vargas Auto
            </h1>
            <Button
              variant="outline"
              onClick={() => logoutMutation.mutate()}
              data-testid="button-logout"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Deconectează-te
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Package className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="text-3xl font-display font-bold mb-1">
              {products.length}
            </div>
            <div className="text-sm text-muted-foreground">
              Produse în Catalog
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-chart-1/10 flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-chart-1" />
              </div>
            </div>
            <div className="text-3xl font-display font-bold mb-1">
              {orders.length}
            </div>
            <div className="text-sm text-muted-foreground">
              Comenzi Totale
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center">
                <Package className="w-6 h-6 text-chart-2" />
              </div>
            </div>
            <div className="text-3xl font-display font-bold mb-1">
              {products.filter(p => p.stock > 0).length}
            </div>
            <div className="text-sm text-muted-foreground">
              Produse în Stoc
            </div>
          </Card>
        </div>

        <Card className="p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-display font-bold">
              Gestionare Produse
            </h2>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                data-testid="button-import-excel"
              >
                <Upload className="w-4 h-4 mr-2" />
                Import Excel
              </Button>
              <Button
                variant="outline"
                data-testid="button-export-products"
              >
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button
                onClick={() => setAddDialogOpen(true)}
                data-testid="button-add-product"
              >
                <Plus className="w-4 h-4 mr-2" />
                Adaugă Produs
              </Button>
            </div>
          </div>

          <ProductsTable products={products} isLoading={isLoading} />
        </Card>
      </div>

      <AddProductDialog 
        open={addDialogOpen} 
        onOpenChange={setAddDialogOpen}
      />
    </div>
  );
}
