import { Link } from "wouter";

const footerLinks = {
  categorii: [
    { name: "Motor", href: "/motor" },
    { name: "Frânare", href: "/franare" },
    { name: "Suspensie", href: "/suspensie" },
    { name: "Caroserie", href: "/caroserie" },
    { name: "Electrice", href: "/electrice" },
  ],
  ajutor: [
    { name: "Contact", href: "/contact" },
    { name: "Livrare", href: "/livrare" },
    { name: "Retur", href: "/retur" },
    { name: "Garanții", href: "/garantii" },
  ],
  legal: [
    { name: "Termeni și Condiții", href: "/termeni" },
    { name: "Politică Confidențialitate", href: "/confidentialitate" },
    { name: "GDPR", href: "/gdpr" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-card border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-display font-bold text-primary mb-4">
              PIESE<span className="text-foreground">AUTO</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Piese auto de calitate, provenite din dezemembrări. Comandă acum cu livrare rapidă.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Categorii</h4>
            <ul className="space-y-2">
              {footerLinks.categorii.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Ajutor</h4>
            <ul className="space-y-2">
              {footerLinks.ajutor.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2025 VargasAuto. Toate drepturile rezervate.</p>
            <p className="text-xs">
              Piese premium, calitate garantata.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
