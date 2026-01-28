import { imageUrls } from "./imageUrls";

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
    name: "Powder / Fine Salt",
    size: "< 1 mm (20–50 mesh)",
    packaging: "Retail pouches/jars or 25kg-50kg bulk bags",
    category: "Edible Salt",
    shade: "light",
    image: imageUrls.edibleSalt,
    description:
      "Fine Himalayan pink salt is a smooth, powder-like grade that dissolves quickly and blends evenly. Ideal for daily cooking, baking, and food processing. Best for home kitchens, restaurants, and packaged food brands.",
  },
  {
    id: 2,
    name: "Small Grain",
    size: "1 mm – 2 mm",
    packaging: "Retail pouches/jars or 25kg-50kg bulk bags",
    category: "Edible Salt",
    shade: "medium",
    image: imageUrls.smallGrainSalt,
    description:
      "Small grain crystals dissolve easily while keeping a natural crystal look. Balanced for cooking and table use. Best for gourmet cooking, retail packs, and seasoning jars.",
  },
  {
    id: 3,
    name: "Granular",
    size: "2 mm – 5 mm",
    packaging: "Retail pouches/jars or 25kg-50kg bulk bags",
    category: "Edible Salt",
    shade: "dark",
    image: imageUrls.granularSalt,
    description:
      "Granular crystals hold their shape during cooking and offer controlled seasoning. Preferred for grinders and finishing dishes. Best for salt grinders, seasoning blends, and professional kitchens.",
  },
  {
    id: 4,
    name: "Rock Salt Crystal",
    size: "5 mm – 10 mm",
    packaging: "Retail pouches/jars or 25kg-50kg bulk bags",
    category: "Edible Salt",
    shade: "medium",
    image: imageUrls.rockSalt,
    description:
      "Coarse crystals dissolve slowly for controlled seasoning and long use. Common in mills, grilling, and refill packs. Best for salt mills, grilling, and gourmet preparation.",
  },
  {
    id: 5,
    name: "Powder / Extra Fine",
    size: "Custom packaging (pouch/jar)",
    packaging: "Retail pouches/jars or 25kg-50kg bulk bags",
    category: "Edible Salt",
    shade: "light",
    image: imageUrls.edibleSalt,
    description:
      "Extra fine powder is milled for a smooth texture and fast dissolving. Suitable for seasoning blends and packaged foods. Best for private-label retail and food processing.",
  },
  {
    id: 6,
    name: "Natural Salt Lick Block",
    size: "1 kg – 2 kg (approx)",
    packaging: "Individual wrap, carton, or palletized",
    category: "Animal Lick Salt",
    image: imageUrls.lickSalt2KG,
    description:
      "Small animal lick salt blocks provide essential natural minerals to livestock. Suitable for controlled feeding environments and smaller animals. Best for small livestock and indoor feeding areas.",
  },
  {
    id: 7,
    name: "Natural Salt Lick Block",
    size: "2 kg – 4 kg",
    packaging: "Individual wrap, carton, or palletized",
    category: "Animal Lick Salt",
    image: imageUrls.lickSalt4KG,
    description:
      "Medium-sized lick salt blocks are long-lasting and suitable for regular livestock feeding. Weather resistant with consistent mineral supply. Best for cattle, goats, and horses.",
  },
  {
    id: 8,
    name: "Natural Salt Lick Block",
    size: "4 kg – 6 kg",
    packaging: "Individual wrap, carton, or palletized",
    category: "Animal Lick Salt",
    image: imageUrls.lickSalt6KG,
    description:
      "Large animal lick salt blocks are designed for outdoor use and grazing fields. Their size ensures durability and extended usage. Best for open farms and large livestock herds.",
  },
  {
    id: 9,
    name: "Hanging Salt Licks",
    size: "1 – 2 kg, 2 – 3 kg (with rope)",
    packaging: "Individual wrap, carton, or palletized",
    category: "Animal Lick Salt",
    image: imageUrls.hangingLickSalt,
    description:
      "Hanging salt licks reduce ground contact and contamination, improving hygiene and reducing wastage. Best for barns, stables, and managed grazing systems.",
  },
  {
    id: 10,
    name: "Salt Brick",
    size: "8″×4″×2″ (standard)",
    packaging: "Loose, carton, or palletized",
    category: "Tiles & Bricks",
    image: imageUrls.standardSaltBrick,
    description:
      "Standard salt bricks are widely used in salt therapy rooms, spas, and wellness centers. Their thickness provides strength and long service life. Best for salt rooms, spa walls, and wellness centers.",
  },
  {
    id: 11,
    name: "Salt Brick",
    size: "6″×4″×1″ (smaller)",
    packaging: "Loose, carton, or palletized",
    category: "Tiles & Bricks",
    image: imageUrls.smallerSaltBrick,
    description:
      "Slim salt bricks are lighter and easier to install. Commonly used for decorative walls and interior design projects. Best for interior decor and light wall installations.",
  },
  {
    id: 12,
    name: "Salt Tile",
    size: "8″×4″×1″",
    packaging: "Carton, crate, or palletized",
    category: "Tiles & Bricks",
    image: imageUrls.standardSaltBrick,
    description:
      "Rectangular salt tiles create uniform patterns and smooth wall finishes for wellness rooms and decorative applications.",
  },
  {
    id: 13,
    name: "Salt Tile",
    size: "12″×8″×1″",
    packaging: "Carton, crate, or palletized",
    category: "Tiles & Bricks",
    image: imageUrls.smallerSaltBrick,
    description:
      "Large-format salt tiles are ideal for premium spa interiors and architectural projects that require fewer joints.",
  },
  {
    id: 14,
    name: "Salt Tile",
    size: "8″×8″×1″",
    packaging: "Carton, crate, or palletized",
    category: "Tiles & Bricks",
    image: imageUrls.standardSaltBrick,
    description:
      "Square tiles cover larger surface areas and are suitable for modern wall designs.",
  },
  {
    id: 15,
    name: "Salt Panels",
    size: "Interlocking wellness panels",
    packaging: "Crate or palletized",
    category: "Tiles & Bricks",
    image: imageUrls.saltPanels,
    description:
      "Interlocking panels simplify installation and ensure alignment. Commonly used in professional salt room construction.",
  },
  {
    id: 16,
    name: "Bath Salt / Spa Salt",
    size: "Fine to coarse grain (various)",
    packaging: "Retail pouches/jars or 25kg-50kg bulk bags",
    category: "Spa & Wellness",
    image: imageUrls.bathSpaSalt,
    description:
      "Bath salt is used for relaxation, muscle relief, and skin care. It dissolves in warm water and is available in multiple grain sizes. Best for spas, wellness centers, and home baths.",
  },
  {
    id: 17,
    name: "Salt Scrub",
    size: "100 g – 200 g packs",
    packaging: "Retail jars/pouches or cartons",
    category: "Spa & Wellness",
    image: imageUrls.scrubSalt,
    description:
      "Salt scrub exfoliates dead skin cells and improves circulation. Widely used in spa treatments and personal care routines.",
  },
  {
    id: 18,
    name: "Massage Stone",
    size: "Variable sizes",
    packaging: "Individual box or carton",
    category: "Spa & Wellness",
    image: imageUrls.massageStones,
    description:
      "Massage stones are smooth salt pieces used in therapy sessions. When warmed, they help relax muscles and improve blood flow.",
  },
  {
    id: 19,
    name: "Salt Lamps – Natural",
    size: "1 kg – 25 kg",
    packaging: "Individual box or carton",
    category: "Decor & Crafts",
    image: imageUrls.saltLamps,
    description:
      "Natural salt lamps are carved from solid salt crystals. They provide warm ambient lighting for decorative and hospitality environments.",
  },
  {
    id: 20,
    name: "Salt Lamp – Sphere",
    size: "Various diameters",
    packaging: "Individual box or carton",
    category: "Decor & Crafts",
    image: imageUrls.saltLampsSphere,
    description:
      "Shaped lamps such as spheres add decorative value and visual appeal in home and commercial interiors.",
  },
  {
    id: 21,
    name: "Candle Holders",
    size: "Tea-light size",
    packaging: "Individual box or carton",
    category: "Decor & Crafts",
    image: imageUrls.candleHolders,
    description:
      "Candle holders are designed for tea lights and decorative lighting. They enhance ambiance in homes and hospitality settings.",
  },
  {
    id: 22,
    name: "Sculptures / Shaped Decor",
    size: "Custom shapes (various)",
    packaging: "Box or wooden crate",
    category: "Decor & Crafts",
    image: imageUrls.sculpturesDecor,
    description:
      "Handcrafted salt sculptures are used as decorative pieces and custom designs for branded spaces.",
  },
  {
    id: 23,
    name: "Salt Plates / Crockery",
    size: "Variable sizes (serving / decorative)",
    packaging: "Individual box or carton",
    category: "Decor & Crafts",
    image: imageUrls.saltPlates,
    description:
      "Salt plates are used for cooking, serving, and food presentation. They retain heat and enhance flavor.",
  },
  {
    id: 24,
    name: "Salt Grinder Bottle",
    size: "100 g – 500 g",
    packaging: "Retail packs or cartons",
    category: "Decor & Crafts",
    image: imageUrls.saltGrinderBottles,
    description:
      "Grinder bottles allow fresh grinding of salt crystals. Easy to use and suitable for kitchens and dining tables.",
  },
  {
    id: 25,
    name: "Salt Adhesive",
    size: "For bricks & tiles bonding",
    packaging: "Bags or cartons",
    category: "Decor & Crafts",
    image: imageUrls.saltAdhesive,
    description:
      "Special adhesive used for installing salt tiles and bricks securely.",
  },
  {
    id: 26,
    name: "Raw Rock Salt",
    size: "20 mm – 50 mm crystal",
    packaging: "Bulk bags or palletized",
    category: "Raw / Industrial",
    image: imageUrls.rawRockSalt,
    description:
      "Raw crystals are unprocessed salt pieces used for crushing, refining, or industrial purposes.",
  },
  {
    id: 27,
    name: "Industrial Salt Lumps",
    size: "3 cm – 7 cm chunks",
    packaging: "Bulk bags or palletized",
    category: "Raw / Industrial",
    image: imageUrls.saltLumps,
    description:
      "Industrial chunks are used in manufacturing processes and large-scale applications.",
  },
  {
    id: 28,
    name: "Rock Salt Bulk Supply",
    size: "Bulk orders by weight",
    packaging: "Bulk bags or palletized",
    category: "Raw / Industrial",
    image: imageUrls.rawSaltBulk,
    description:
      "Large salt lumps supplied for bulk industrial processing and trade orders.",
  },
];

export const categories = [
  {
    name: "Edible Salt",
    slug: "edible-salt",
    description:
      "Food-grade pink salt in multiple grain sizes for culinary use",
  },
  {
    name: "Animal Lick Salt",
    slug: "animal-lick",
    description:
      "Natural salt licks for livestock nutrition and mineral support",
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
