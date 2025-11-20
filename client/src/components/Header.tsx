import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  ShoppingCart, 
  User, 
  Phone, 
  Mail,
  Shield,
  Moon,
  Sun
} from "lucide-react";
import { Link } from "wouter";
import logoUrl from "@assets/Untitled design_1763621399342.png";
import { useTheme } from "./ThemeProvider";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      <div className="bg-card border-b py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+40 123 456 789</span>
              </div>
              <div className="hidden md:flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>contact@vargasauto.ro</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                <span>Garanție 24 Luni</span>
              </div>
              <Button
                size="icon"
                variant="ghost"
                onClick={toggleTheme}
                data-testid="button-theme-toggle"
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/">
            <button className="flex items-center gap-3 hover-elevate active-elevate-2 px-3 py-2 rounded">
              <img 
                src={logoUrl} 
                alt="Vargas Auto" 
                className="h-10 md:h-12 w-auto"
              />
            </button>
          </Link>

          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Caută piese auto..."
                className="pl-10 pr-4"
                data-testid="input-search"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link href="/admin">
              <Button variant="outline" size="icon" data-testid="button-admin">
                <User className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="outline" size="icon" className="relative" data-testid="button-cart">
                <ShoppingCart className="w-5 h-5" />
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 text-xs"
                >
                  0
                </Badge>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <nav className="border-t bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-6 py-3 overflow-x-auto">
            <Link href="/category/franare">
              <button className="text-sm whitespace-nowrap hover-elevate active-elevate-2 px-3 py-1.5 rounded">
                Sistem de Frânare
              </button>
            </Link>
            <Link href="/category/suspensie">
              <button className="text-sm whitespace-nowrap hover-elevate active-elevate-2 px-3 py-1.5 rounded">
                Suspensie
              </button>
            </Link>
            <Link href="/category/motor">
              <button className="text-sm whitespace-nowrap hover-elevate active-elevate-2 px-3 py-1.5 rounded">
                Motor
              </button>
            </Link>
            <Link href="/category/filtre">
              <button className="text-sm whitespace-nowrap hover-elevate active-elevate-2 px-3 py-1.5 rounded">
                Filtre
              </button>
            </Link>
            <Link href="/category/uleiuri">
              <button className="text-sm whitespace-nowrap hover-elevate active-elevate-2 px-3 py-1.5 rounded">
                Uleiuri & Lichide
              </button>
            </Link>
            <Link href="/category/electric">
              <button className="text-sm whitespace-nowrap hover-elevate active-elevate-2 px-3 py-1.5 rounded">
                Sistem Electric
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
