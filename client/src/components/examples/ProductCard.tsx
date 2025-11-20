import ProductCard from '../ProductCard';

export default function ProductCardExample() {
  return (
    <div className="p-6 max-w-sm">
      <ProductCard
        id="1"
        title="Set Placute Frana Fata Bosch Premium"
        price={245.99}
        image="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80"
        category="Frânare"
        compatibility="VW Golf VII, Audi A3"
        badge="Redus"
        stock="available"
        allegroUrl="https://allegro.pl"
        onClick={() => console.log('Product clicked')}
      />
    </div>
  );
}
