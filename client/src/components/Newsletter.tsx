import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    toast({
      title: "Mulțumim!",
      description: "Te-ai abonat cu succes la newsletter.",
    });
    setEmail("");
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-chart-1/10 border-primary/20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
              Abonează-te la Newsletter
            </h2>
            <p className="text-muted-foreground mb-8">
              Fii la curent cu stocul de produse! Aboneaza-te la newsletter!
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Adresa ta de email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
                data-testid="input-newsletter-email"
              />
              <Button type="submit" size="lg" data-testid="button-subscribe">
                Abonează-te
              </Button>
            </form>

            <p className="text-xs text-muted-foreground mt-4">
              Ne respectăm clienții. Poți să te dezabonezi oricând.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
