import edibleSaltImage from '../assets/edible-pink-salt-fine.jpg';
import tilesBricksImage from '../assets/tiles-bricks.jpg';
import animalLickImage from '../assets/animal-lick-pink-salt.jpg';

export interface PackagingItem {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  highlights: string[];
  specs: string[];
}

export const packagingItems: PackagingItem[] = [
  {
    slug: 'retail-stand-up-pouch',
    name: 'Stand-Up Retail Pouch',
    category: 'Retail Packaging',
    description:
      'Resealable pouches ideal for 100g to 1kg retail packs with matte or gloss finish options.',
    image: edibleSaltImage,
    highlights: ['Zip lock', 'Window option', 'Custom label'],
    specs: ['100g to 1kg', 'Matte or gloss finish', 'Barrier film available'],
  },
  {
    slug: 'glass-jar-pack',
    name: 'Glass Jar + Label',
    category: 'Retail Packaging',
    description:
      'Premium glass jars for gourmet lines with custom labeling and tamper seals.',
    image: tilesBricksImage,
    highlights: ['Premium look', 'Custom label', 'Tamper seal'],
    specs: ['250g to 500g', 'Metal cap', 'Gift-ready'],
  },
  {
    slug: 'bulk-pp-woven-bag',
    name: 'PP Woven Bulk Bag',
    category: 'Bulk Packaging',
    description:
      'Industrial-grade PP woven bags for 25kg to 50kg bulk shipments.',
    image: animalLickImage,
    highlights: ['Heavy duty', 'Pallet ready', 'Export standard'],
    specs: ['25kg to 50kg', 'Inner liner optional', 'Palletized'],
  },
  {
    slug: 'private-label-kit',
    name: 'Private Label Starter Kit',
    category: 'Private Label',
    description:
      'A curated packaging kit for new private-label buyers, including label design and sampling.',
    image: edibleSaltImage,
    highlights: ['Branding support', 'Sample run', 'Design review'],
    specs: ['Label mockups', 'Packaging samples', 'Production timeline plan'],
  },
];
