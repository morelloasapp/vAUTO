import Hero from "@/components/Hero";
import VehicleSelector from "@/components/VehicleSelector";
import PromoBanner from "@/components/PromoBanner";
import Categories from "@/components/Categories";
import DetailedCategories from "@/components/DetailedCategories";
import ProductGrid from "@/components/ProductGrid";
import PopularSearches from "@/components/PopularSearches";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import BrandLogos from "@/components/BrandLogos";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  const promoEndDate = new Date();
  promoEndDate.setDate(promoEndDate.getDate() + 5);

  return (
    <div>
      <Hero />
      <VehicleSelector />
      
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            <PromoBanner
              title="Ofertă Specială Frânare"
              discount="-35%"
              endDate={promoEndDate}
              image=""
              variant="urgent"
            />
            <PromoBanner
              title="Reduceri Motor & Suspensie"
              discount="-25%"
              endDate={new Date(promoEndDate.getTime() + 2 * 24 * 60 * 60 * 1000)}
              image=""
              variant="default"
            />
          </div>
        </div>
      </section>

      <Categories />
      <DetailedCategories />
      <ProductGrid />
      <PopularSearches />
      <Features />
      <Stats />
      <BrandLogos />
      <Newsletter />
    </div>
  );
}
