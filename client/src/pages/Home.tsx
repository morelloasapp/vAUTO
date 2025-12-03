import Hero from "@/components/Hero";
import VehicleSelector from "@/components/VehicleSelector";
import Categories from "@/components/Categories";
import DetailedCategories from "@/components/DetailedCategories";
import ProductGrid from "@/components/ProductGrid";
import PopularSearches from "@/components/PopularSearches";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import BrandLogos from "@/components/BrandLogos";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div>
      <Hero />
      <VehicleSelector />

      {/* PromoBanner a fost eliminat */}

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

