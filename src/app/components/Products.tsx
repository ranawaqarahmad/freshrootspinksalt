import { ImageWithFallback } from './figma/ImageWithFallback';

const products = [
  {
    id: 1,
    name: 'Fine Ground Pink Salt',
    description: 'Perfect for everyday cooking and baking',
    weight: '500g',
    price: '$12.99',
    image: 'https://images.unsplash.com/photo-1598187063081-02e97620b226?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwc2FsdCUyMGJvd2x8ZW58MXx8fHwxNzY3MDMyODQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 2,
    name: 'Coarse Pink Salt Crystals',
    description: 'Ideal for grinders and finishing touches',
    weight: '1kg',
    price: '$18.99',
    image: 'https://images.unsplash.com/photo-1611480367081-03e93cccefd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwc2FsdCUyMGNyeXN0YWx8ZW58MXx8fHwxNzY3MDMyODQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 3,
    name: 'Pink Salt Blocks',
    description: 'For grilling, serving, and salt therapy',
    weight: '2kg',
    price: '$34.99',
    image: 'https://images.unsplash.com/photo-1685788233350-ad3527bfca25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc2FsdCUyMHJvY2tzfGVufDF8fHx8MTc2NzAzMjg0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 4,
    name: 'Pink Salt Gift Set',
    description: 'Premium assortment in elegant packaging',
    weight: 'Variety Pack',
    price: '$45.99',
    image: 'https://images.unsplash.com/photo-1633730427321-f49ab5067971?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwaGltYWxheWFuJTIwc2FsdHxlbnwxfHx8fDE3NjcwMzI4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 5,
    name: 'Bath Salt Crystals',
    description: 'Therapeutic grade for relaxing baths',
    weight: '750g',
    price: '$16.99',
    image: 'https://images.unsplash.com/photo-1611480367081-03e93cccefd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwc2FsdCUyMGNyeXN0YWx8ZW58MXx8fHwxNzY3MDMyODQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 6,
    name: 'Culinary Pink Salt',
    description: 'Premium selection for gourmet cooking',
    weight: '250g',
    price: '$9.99',
    image: 'https://images.unsplash.com/photo-1598187063081-02e97620b226?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwc2FsdCUyMGJvd2x8ZW58MXx8fHwxNzY3MDMyODQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function Products() {
  return (
    <section className="py-16 bg-stone-50 dark:bg-stone-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-stone-800 dark:text-white">Our Products</h2>
          <p className="text-stone-600 dark:text-stone-300 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium Himalayan pink salt products, 
            each offering unique benefits for your culinary and wellness needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white dark:bg-stone-900 rounded-sm overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-stone-800 dark:text-white">{product.name}</h3>
                  <span className="text-rose-500">{product.price}</span>
                </div>
                <p className="text-stone-600 dark:text-stone-300 mb-3">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-stone-500 dark:text-stone-400">{product.weight}</span>
                  <button className="text-rose-500 hover:text-rose-600 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
