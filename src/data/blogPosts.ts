import edibleSaltImage from '../assets/edible_and_culinary_salt.jpg';
import tilesBricksImage from '../assets/tiles_and_bricks.jpg';
import animalLickImage from '../assets/animal_lick_salt.jpg';

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'himalayan-salt-grades-explained',
    title: 'Himalayan Salt Grades Explained',
    category: 'Product Guide',
    excerpt:
      'Understand the differences between fine, medium, and coarse grades and how to choose the right option for your buyers.',
    date: 'Jan 12, 2026',
    readTime: '6 min read',
    image: edibleSaltImage,
    tags: ['Grades', 'Export', 'Culinary'],
    content: [
      'Salt grades are defined by granulation size and purity. For export buyers, selecting the right grade helps meet market expectations and production requirements.',
      'Fine grades work best for table use and processing lines, while medium and coarse grades are ideal for grinders, gourmet packaging, and industrial blends.',
      'When you request a quote, include your target market, packaging type, and preferred granulation size so we can recommend the right specification.',
    ],
  },
  {
    slug: 'private-label-packaging-checklist',
    title: 'Private Label Packaging Checklist',
    category: 'Packaging',
    excerpt:
      'A practical checklist for brands preparing private-label packaging for international markets.',
    date: 'Feb 03, 2026',
    readTime: '5 min read',
    image: tilesBricksImage,
    tags: ['Packaging', 'Compliance', 'Branding'],
    content: [
      'Private labeling begins with clear artwork, regulatory labels, and packaging material choices. The checklist helps you avoid delays during production.',
      'Confirm barcode standards, country-specific labeling requirements, and language translations before final print.',
      'Send your brand assets early so our team can align production with your launch timeline.',
    ],
  },
  {
    slug: 'export-documentation-basics',
    title: 'Export Documentation Basics',
    category: 'Compliance',
    excerpt:
      'Key documents every import buyer should verify before shipment leaves Pakistan.',
    date: 'Feb 28, 2026',
    readTime: '7 min read',
    image: animalLickImage,
    tags: ['Export', 'Documentation', 'Logistics'],
    content: [
      'Export documentation protects both buyers and sellers. The core set includes invoices, packing lists, certificates of origin, and shipping documents.',
      'Depending on your destination market, you may also need lab reports, phytosanitary certificates, or halal certification.',
      'We help coordinate documentation based on your chosen Incoterms and port of entry.',
    ],
  },
];
