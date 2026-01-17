import edibleSaltImage from '../assets/edible_and_culinary_salt.jpg';
import tilesBricksImage from '../assets/tiles_and_bricks.jpg';
import animalLickImage from '../assets/animal_lick_salt.jpg';
import spaWellnessImage from '../assets/spa_and_wellness.jpg';
import decorCraftImage from '../assets/decor_and_craft.jpg';
import accessoriesImage from '../assets/accessories.jpg';
import rawIndustrialImage from '../assets/raw_industrial_salt.jpg';

export interface PackagingItem {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  range: string;
  material: string;
  highlights: string[];
  specs: string[];
  appliesTo: string[];
}

export const packagingItems: PackagingItem[] = [
  {
    slug: 'bulk-pp-woven-bags',
    name: 'Bulk Bags (PP Woven)',
    category: 'Bulk Packaging',
    description:
      'High-strength bulk bags with an inner liner to protect against moisture and contamination during export shipments.',
    image: rawIndustrialImage,
    range: '25 kg, 50 kg, 500 kg, 1000 kg (super-bags)',
    material: 'PP woven with inner PE liner',
    highlights: ['Export ready', 'Moisture protection', 'Custom labeling'],
    specs: ['Inner liner optional', 'Pallet friendly', 'Heavy-duty stitching'],
    appliesTo: [
      'Spa & Wellness',
      'Raw / Industrial',
      'Animal Lick Salt',
      'Tiles & Bricks',
    ],
  },
  {
    slug: 'retail-stand-up-pouches',
    name: 'Retail Pouches (Stand-Up)',
    category: 'Retail Packaging',
    description:
      'Shelf-ready stand-up pouches with zipper or heat-seal options for consumer convenience and strong visual appeal.',
    image: edibleSaltImage,
    range: '100 g, 250 g, 500 g, 1 kg',
    material: 'Laminated pouch with optional zipper',
    highlights: ['Retail shelf appeal', 'Freshness seal', 'Custom print'],
    specs: ['Matte or gloss finish', 'Window option', 'Barrier film available'],
    appliesTo: ['Spa & Wellness', 'Accessories'],
  },
  {
    slug: 'small-retail-pouch',
    name: 'Small Retail Pouch',
    category: 'Retail Packaging',
    description:
      'Compact pouches for samples and trial packs that keep products sealed and fresh.',
    image: edibleSaltImage,
    range: '30 g',
    material: 'Heat-seal pouch',
    highlights: ['Sampling friendly', 'Cost efficient', 'Sealed freshness'],
    specs: ['Ideal for promotions', 'Easy to distribute', 'Lightweight'],
    appliesTo: ['Edible Salt', 'Spa & Wellness'],
  },
  {
    slug: 'jar-packaging',
    name: 'Jar Packaging',
    category: 'Premium Packaging',
    description:
      'Food-grade glass or PET jars that showcase product quality and enhance shelf presence.',
    image: edibleSaltImage,
    range: '200 g, 300 g, 500 g',
    material: 'Glass or PET with lids',
    highlights: ['Premium appearance', 'Reusable', 'Strong shelf appeal'],
    specs: ['Tamper seal option', 'Custom labels', 'Gift-ready'],
    appliesTo: ['Edible Salt', 'Spa & Wellness'],
  },
  {
    slug: 'grinder-bottles',
    name: 'Grinder Bottle',
    category: 'Retail Packaging',
    description:
      'Functional grinder bottles for coarse salt, designed for tabletop and culinary use.',
    image: accessoriesImage,
    range: '100 g, 200 g',
    material: 'Glass or plastic grinder bottles',
    highlights: ['Built-in grinder', 'Table-ready', 'Clean dispensing'],
    specs: ['Refillable', 'Food-grade', 'Retail friendly'],
    appliesTo: ['Edible Salt', 'Accessories'],
  },
  {
    slug: 'carton-packs',
    name: 'Cartons / Carton Packs',
    category: 'Export Packaging',
    description:
      'Secondary cartons to pack and protect multiple retail units during shipment and storage.',
    image: tilesBricksImage,
    range: 'Multiple retail units',
    material: 'Corrugated cartons',
    highlights: ['Stackable', 'Export safe', 'Cost efficient'],
    specs: ['Custom sizes', 'Labeling support', 'Easy handling'],
    appliesTo: [
      'Edible Salt',
      'Spa & Wellness',
      'Decor & Crafts',
      'Accessories',
      'Animal Lick Salt',
      'Tiles & Bricks',
      'Raw / Industrial',
    ],
  },
  {
    slug: 'wooden-crates',
    name: 'Wooden Crates (Decor Crafts)',
    category: 'Decor Packaging',
    description:
      'Protective wooden crates for heavy and fragile decor items such as lamps and crafted products.',
    image: decorCraftImage,
    range: 'Custom weights',
    material: 'Wooden crate packaging',
    highlights: ['Heavy-duty protection', 'Export safe', 'Reduced breakage'],
    specs: ['Custom sizes', 'Reinforced corners', 'Pallet compatible'],
    appliesTo: ['Decor & Crafts', 'Tiles & Bricks'],
  },
  {
    slug: 'shrink-wrapped-pallets',
    name: 'Shrink-Wrapped Pallets',
    category: 'Export Packaging',
    description:
      'Stretch and shrink wrapping for secured pallets and stabilized export loads.',
    image: rawIndustrialImage,
    range: 'Loaded pallet',
    material: 'Shrink film and stretch wrap',
    highlights: ['Stable loads', 'Moisture protection', 'Transit ready'],
    specs: ['Container shipments', 'Reduced movement', 'Export standard'],
    appliesTo: [
      'Edible Salt',
      'Spa & Wellness',
      'Decor & Crafts',
      'Accessories',
      'Animal Lick Salt',
      'Tiles & Bricks',
      'Raw / Industrial',
    ],
  },
  {
    slug: 'jar-retail-set',
    name: 'Jar + Retail Set',
    category: 'Premium Packaging',
    description:
      'Multi-item retail sets that combine jars and bottles for premium presentation and gifting.',
    image: edibleSaltImage,
    range: 'Multi-item sets',
    material: 'Boxed retail set packaging',
    highlights: ['Gift ready', 'Premium presentation', 'Customizable'],
    specs: ['Multiple SKUs', 'Custom inserts', 'Retail branding'],
    appliesTo: ['Edible Salt', 'Spa & Wellness', 'Accessories'],
  },
  {
    slug: 'custom-printed-boxes',
    name: 'Custom Printed Boxes',
    category: 'Private Label',
    description:
      'Rigid or folding cartons with buyer branding for private label and retail-ready products.',
    image: accessoriesImage,
    range: 'As per buyer design',
    material: 'Rigid or folding cartons',
    highlights: ['Branding support', 'Premium finish', 'Retail ready'],
    specs: ['Logo printing', 'Custom sizing', 'Market compliant'],
    appliesTo: ['Edible Salt', 'Spa & Wellness', 'Decor & Crafts', 'Accessories'],
  },
  {
    slug: 'lid-label-only',
    name: 'Lid & Label Only',
    category: 'Private Label',
    description:
      'Label-only packaging for private label buyers using standard jars, pouches, or cartons.',
    image: accessoriesImage,
    range: 'Retail labeling',
    material: 'Labels and lids only',
    highlights: ['Cost efficient', 'Private label ready', 'Fast turnaround'],
    specs: ['Buyer branding', 'Flexible formats', 'Retail compliance'],
    appliesTo: ['Edible Salt', 'Spa & Wellness', 'Accessories'],
  },
  {
    slug: 'decor-gift-packaging',
    name: 'Decor Gift Packaging',
    category: 'Decor Packaging',
    description:
      'Gift boxes and decorative packaging for premium craft and decor products.',
    image: decorCraftImage,
    range: 'Custom designs',
    material: 'Decorative gift boxes',
    highlights: ['Premium unboxing', 'Protective inserts', 'Retail gifting'],
    specs: ['Custom prints', 'Insert trays', 'Retail shelf ready'],
    appliesTo: ['Decor & Crafts'],
  },
  {
    slug: 'sample-packs',
    name: 'Sample Packs',
    category: 'Retail Packaging',
    description:
      'Small trial packs for market testing, sampling, and promotional distribution.',
    image: edibleSaltImage,
    range: 'Small trial packs',
    material: 'Small pouch or sachet',
    highlights: ['Trial ready', 'Low cost', 'Easy distribution'],
    specs: ['Heat seal', 'Custom labels', 'Bulk-ready'],
    appliesTo: ['Edible Salt', 'Spa & Wellness'],
  },
  {
    slug: 'food-grade-pp-bags',
    name: 'Food-Grade PP Bags',
    category: 'Bulk Packaging',
    description:
      'Food-grade polypropylene bags for medium-volume edible salt and commercial buyers.',
    image: edibleSaltImage,
    range: '5 kg, 10 kg',
    material: 'Food-grade PP bags',
    highlights: ['Food safe', 'Medium volume', 'Durable'],
    specs: ['Wholesale ready', 'Labeling support', 'Stackable'],
    appliesTo: ['Edible Salt', 'Spa & Wellness'],
  },
  {
    slug: 'vacuum-packs',
    name: 'Vacuum Packs',
    category: 'Retail Packaging',
    description:
      'Vacuum-sealed packs to extend shelf life and protect against moisture.',
    image: edibleSaltImage,
    range: '500 g, 1 kg',
    material: 'Vacuum-sealed pouches',
    highlights: ['Longer shelf life', 'Moisture protection', 'Clean presentation'],
    specs: ['Barrier film', 'Compact packs', 'Retail ready'],
    appliesTo: ['Edible Salt'],
  },
  {
    slug: 'reseal-zipper-bags',
    name: 'Re-Seal Zipper Bags',
    category: 'Retail Packaging',
    description:
      'Resealable zipper bags for convenient repeated use while maintaining freshness.',
    image: edibleSaltImage,
    range: '500 g, 1 kg',
    material: 'Zipper pouch packaging',
    highlights: ['Reusable seal', 'Retail friendly', 'Freshness retention'],
    specs: ['Zipper closure', 'Barrier film', 'Custom branding'],
    appliesTo: ['Edible Salt', 'Spa & Wellness'],
  },
  {
    slug: 'labeled-export-boxes',
    name: 'Labelled Export Boxes',
    category: 'Export Packaging',
    description:
      'Export cartons labeled with buyer information and handling instructions for compliance.',
    image: tilesBricksImage,
    range: 'Custom export labels',
    material: 'Corrugated export cartons',
    highlights: ['Export compliant', 'Custom labels', 'Stackable'],
    specs: ['Handling marks', 'Buyer branding', 'Logistics ready'],
    appliesTo: [
      'Edible Salt',
      'Spa & Wellness',
      'Decor & Crafts',
      'Accessories',
      'Animal Lick Salt',
      'Tiles & Bricks',
      'Raw / Industrial',
    ],
  },
  {
    slug: 'iron-basket-lamp-packaging',
    name: 'Iron Basket Lamp Packaging',
    category: 'Decor Packaging',
    description:
      'Sturdy packaging for iron basket salt lamps to prevent damage during transit.',
    image: decorCraftImage,
    range: 'Lamp specific',
    material: 'Reinforced lamp packaging',
    highlights: ['Shock resistant', 'Lamp-specific fit', 'Export ready'],
    specs: ['Protective inserts', 'Carton ready', 'Stackable'],
    appliesTo: ['Decor & Crafts'],
  },
  {
    slug: 'salt-lamp-wooden-basket',
    name: 'Salt Lamp Wooden Basket',
    category: 'Decor Packaging',
    description:
      'Wooden basket packaging for decorative salt lamps with premium presentation.',
    image: decorCraftImage,
    range: 'Lamp specific',
    material: 'Wooden basket packaging',
    highlights: ['Premium look', 'Protective structure', 'Reusable'],
    specs: ['Custom sizes', 'Branded labels', 'Export ready'],
    appliesTo: ['Decor & Crafts'],
  },
  {
    slug: 'usb-salt-lamp-box',
    name: 'USB Salt Lamp Box',
    category: 'Decor Packaging',
    description:
      'Retail packaging designed for USB salt lamps with inserts for cables and accessories.',
    image: decorCraftImage,
    range: 'Lamp specific',
    material: 'Branded carton with inserts',
    highlights: ['Accessory storage', 'Retail ready', 'Protective fit'],
    specs: ['Cable compartment', 'Custom branding', 'Gift ready'],
    appliesTo: ['Decor & Crafts'],
  },
];
