export interface Product {
  id: number;
  name: string;
  size: string;
  packaging: string;
  category: string;
  description?: string;
  image?: string;
  images?: string[];
  shade?: 'light' | 'medium' | 'dark';
}

export const products: Product[] = [
  {
    id: 1,
    name: "Edible Pink Salt – Fine",
    size: "Fine grain (< 1 mm)",
    packaging: "100g–1kg retail pouches / 25kg bulk bags",
    category: "Culinary / Edible Salt",
    shade: "light",
  },
  {
    id: 2,
    name: "Edible Pink Salt – Coarse",
    size: "1 mm – 2 mm",
    packaging: "500g–1kg pouches / 25kg–50kg bulk bags",
    category: "Culinary / Edible Salt",
    shade: "medium",
  },
  {
    id: 3,
    name: "Edible Pink Salt – Granular",
    size: "2 mm – 5 mm",
    packaging: "1kg retail packs / 25kg–50kg bulk bags",
    category: "Culinary / Edible Salt",
    shade: "medium",
  },
  {
    id: 4,
    name: "Edible Pink Salt – Rock Salt",
    size: "> 5 mm",
    packaging: "25kg–50kg PP woven bags",
    category: "Culinary / Edible Salt",
    shade: "dark",
  },
  {
    id: 5,
    name: "Animal Lick Salt Block",
    size: "1 kg – 5 kg blocks",
    packaging: "Individual wrap / carton / palletized",
    category: "Animal Salt Lick",
  },
  {
    id: 6,
    name: "Himalayan Salt Brick",
    size: '8" × 4" × 2"',
    packaging: "Loose / carton packing",
    category: "Tiles & Bricks",
  },
  {
    id: 7,
    name: "Himalayan Salt Brick",
    size: '4" × 4" × 1"',
    packaging: "Loose / carton packing",
    category: "Tiles & Bricks",
  },
  {
    id: 8,
    name: "Himalayan Salt Brick",
    size: '8" × 8" × 1.5"',
    packaging: "Loose / carton packing",
    category: "Tiles & Bricks",
  },
  {
    id: 9,
    name: "Himalayan Salt Brick",
    size: '10" × 6" × 2"',
    packaging: "Loose / carton packing",
    category: "Tiles & Bricks",
  },
  {
    id: 10,
    name: "Custom Salt Bricks",
    size: "Custom sizes",
    packaging: "Carton / palletized",
    category: "Tiles & Bricks",
  },
  {
    id: 11,
    name: "Himalayan Salt Tile",
    size: '8" × 4" × 1"',
    packaging: "Carton packing",
    category: "Tiles & Bricks",
  },
  {
    id: 12,
    name: "Salt Wall Panels",
    size: "Panel format",
    packaging: "Wooden crate / pallet",
    category: "Tiles & Bricks",
  },
  {
    id: 13,
    name: "Himalayan Salt Cooking Block",
    size: "Thick cooking slab",
    packaging: "Individual box / carton",
    category: "Tiles & Bricks / Kitchen",
  },
  {
    id: 14,
    name: "Himalayan Salt Grill / BBQ Plate",
    size: "Flat grilling plate",
    packaging: "Boxed / carton",
    category: "Tiles & Bricks / Kitchen",
  },
  {
    id: 15,
    name: "Himalayan Salt Bath Salt",
    size: "Fine to coarse grain",
    packaging: "500g–1kg pouches / 25kg bulk bags",
    category: "Spa & Wellness",
  },
  {
    id: 16,
    name: "Himalayan Salt Spa Salt Scrub",
    size: "Granulated scrub",
    packaging: "250g–500g jars / pouches",
    category: "Spa & Wellness",
  },
  {
    id: 17,
    name: "Himalayan Salt Lamp – Natural",
    size: "Natural carved shape",
    packaging: "Individual box",
    category: "Decor & Crafts",
  },
  {
    id: 18,
    name: "Himalayan Salt Lamp – Sphere",
    size: "Spherical shape",
    packaging: "Individual box",
    category: "Decor & Crafts",
  },
  {
    id: 19,
    name: "Himalayan Salt Candle Holder",
    size: "Tea-light size",
    packaging: "Individual box",
    category: "Decor & Crafts",
  },
  {
    id: 20,
    name: "Himalayan Salt Sculpture",
    size: "Custom shapes",
    packaging: "Box / wooden crate",
    category: "Decor & Crafts",
  },
  {
    id: 21,
    name: "Salt Grinder Bottle Set",
    size: "Grinder with salt",
    packaging: "Glass / plastic bottle with box",
    category: "Accessories",
  },
  {
    id: 22,
    name: "Himalayan Salt Adhesive",
    size: "Powder / paste",
    packaging: "1kg–5kg bags",
    category: "Accessories",
  },
  {
    id: 23,
    name: "Himalayan Salt Soap / Massage Bar",
    size: "Solid bar / chunk",
    packaging: "Individual wrap / box",
    category: "Spa & Wellness",
  },
  {
    id: 24,
    name: "Himalayan Salt Candle Tea Light",
    size: "Small holder",
    packaging: "Individual box",
    category: "Decor & Crafts",
  },
  {
    id: 25,
    name: "Himalayan Salt Raw Rock",
    size: "Natural raw chunks",
    packaging: "25kg–50kg bulk bags",
    category: "Raw / Industrial",
  },
];

export const categories = [
  {
    name: "Culinary / Edible Salt",
    slug: "edible-salt",
    description:
      "Food-grade pink salt in various grain sizes for culinary applications",
  },
  {
    name: "Animal Salt Lick",
    slug: "animal-lick",
    description:
      "Natural salt blocks for livestock nutrition and mineral supplementation",
  },
  {
    name: "Tiles & Bricks",
    slug: "tiles-bricks",
    description:
      "Construction and decorative salt bricks, tiles, and panels",
  },
  {
    name: "Spa & Wellness",
    slug: "spa-wellness",
    description:
      "Therapeutic bath salts and spa products for wellness industry",
  },
  {
    name: "Decor & Crafts",
    slug: "decor-crafts",
    description:
      "Decorative salt lamps, candle holders, and artistic pieces",
  },
  // {
  //   name: "Accessories",
  //   slug: "accessories",
  //   description:
  //     "Salt grinders, adhesives, and complementary products",
  // },
  {
    name: "Raw / Industrial",
    slug: "raw-industrial",
    description:
      "Unprocessed raw salt chunks for industrial applications",
  },
];
