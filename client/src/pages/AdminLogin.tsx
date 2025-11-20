import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import logoUrl from "@assets/Untitled design_1763621399342.png";

export default function AdminLogin() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useMutation({
    mutationFn: async (credentials: { username: string; password: string }) => {
      const response = await apiRequest("POST", "/api/auth/login", credentials);
      return await response.json();
    },
    onSuccess: (data: any) => {
      if (data.isAdmin) {
        toast({
          title: "Autentificare reușită",
          description: "Bine ai venit în panoul de administrare!",
        });
        setLocation("/admin/dashboard");
      } else {
        toast({
          title: "Acces refuzat",
          description: "Ai nevoie de drepturi de administrator",
          variant: "destructive",
        });
      }
    },
    onError: () => {
      toast({
        title: "Eroare autentificare",
        description: "Username sau parolă incorectă",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate({ username, password });
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
              placeholder="vargaadmin1"
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
            disabled={loginMutation.isPending}
            data-testid="button-login"
          >
            {loginMutation.isPending ? "Se autentifică..." : "Autentifică-te"}
          </Button>
        </form>
      </Card>
    </div>
  );
}
