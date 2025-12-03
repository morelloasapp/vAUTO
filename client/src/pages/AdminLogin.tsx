import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import logoUrl from "@assets/Untitled design_1763621399342.png";

export default function AdminLogin() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🔐 LOGIN DIRECT fără backend
    if (username === "vargamirel1" && password === "Vargasauto1@") {
      toast({
        title: "Autentificare reușită",
        description: "Bine ai venit în panoul de administrare!",
      });
      setLocation("/admin/dashboard");
      return;
    }

    // ❌ Dacă parola/username-ul sunt greșite
    toast({
      title: "Eroare autentificare",
      description: "Username sau parolă incorectă",
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-background p-4">
      <Card className="w-full max-w-md p-8">
        <div className="flex justify-center mb-8">
          <img src={logoUrl} alt="Vargas Auto" className="h-20 w-auto" />
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-display font-bold text-foreground mb-2">
            Panou Administrare
          </h1>
          <p className="text-muted-foreground">
            Autentifică-te pentru a accesa dashboard-ul
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="vargamirel1"
              required
              data-testid="input-username"
            />
          </div>

          <div>
            <Label htmlFor="password">Parolă</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••"
              required
              data-testid="input-password"
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            data-testid="button-login"
          >
            Autentifică-te
          </Button>
        </form>
      </Card>
    </div>
  );
}
