import CategoryCard from '../CategoryCard';
import { Settings } from 'lucide-react';

export default function CategoryCardExample() {
  return (
    <div className="p-6 max-w-xs">
      <CategoryCard 
        icon={Settings}
        name="Motor"
        count={2450}
        onClick={() => console.log('Category clicked')}
      />
    </div>
  );
}
