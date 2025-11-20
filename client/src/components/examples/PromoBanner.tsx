import PromoBanner from '../PromoBanner';

export default function PromoBannerExample() {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 3);

  return (
    <div className="p-6 space-y-6">
      <PromoBanner
        title="Ofertă Specială Frânare"
        discount="-35%"
        endDate={endDate}
        image=""
        variant="urgent"
      />
    </div>
  );
}
