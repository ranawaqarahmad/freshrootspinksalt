import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/products';
import edibleSaltImage from '../../assets/edible_and_culinary_salt.jpg';
import animalLickImage from '../../assets/animal_lick_salt.jpg';
import tilesBricksImage from '../../assets/tiles_and_bricks.jpg';
import spaWellnessImage from '../../assets/spa_and_wellness.jpg';
import decorCraftImage from '../../assets/decor_and_craft.jpg';
import accessoriesImage from '../../assets/accessories.jpg';
import rawIndustrialImage from '../../assets/raw_industrial_salt.jpg';

export function ProductCategories() {
  const categoryImages: { [key: string]: string } = {
    'edible-salt': edibleSaltImage,
    'animal-lick': animalLickImage,
    'tiles-bricks': tilesBricksImage,
    'spa-wellness': spaWellnessImage,
    'decor-crafts': decorCraftImage,
    'accessories': accessoriesImage,
    'raw-industrial': rawIndustrialImage,
  };

  return (
    <section className="py-20 bg-white dark:bg-stone-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-stone-900 dark:text-white mb-4">Product Categories</h2>
          <p className="text-xl text-stone-600 dark:text-stone-300 max-w-4xl mx-auto">
            We offer a complete product range that meets the diverse requirements of global buyers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/products?category=${category.slug}`}
              className="group relative overflow-hidden rounded-xl bg-stone-50 dark:bg-stone-900 hover:shadow-xl transition-all duration-500 cursor-pointer border border-stone-200 dark:border-stone-800"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <ImageWithFallback
                  src={categoryImages[category.slug]}
                  alt={category.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl mb-2">{category.name}</h3>
                <p className="text-white/90 text-sm mb-3">{category.description}</p>
                <div className="flex items-center text-sm group-hover:text-[#E88B7F] transition-colors">
                  View Products
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/products"
            className="bg-[#3D9B93] text-white px-8 py-4 rounded-lg hover:bg-[#348780] transition-colors inline-flex items-center gap-2"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
