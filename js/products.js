/* ========================================
   Spine & Spirit — Product Catalog
   ======================================== */

const PRODUCTS = [
  {
    id: 'esv-heritage-rebind',
    version: 'ESV',
    title: 'Heritage Bible — Rebound Edition',
    subtitle: 'Premium Goatskin, Gilt Edges',
    baseBible: 'ESV Heritage Bible',
    baseCost: 18.50,
    description: 'The ESV Heritage Bible, cherished for its classic layout and readable type, reimagined in a premium goatskin cover. Our most popular rebind combines traditional craftsmanship with durable materials built to last a lifetime.',
    specs: {
      'Cover': 'Premium Goatskin (Brown)',
      'Lining': 'Morocco Goatskin Liner',
      'Ribbons': '4 Silk Ribbon Markers (Gold, Cream, Burgundy, Sage)',
      'Edge': 'Art Gilding (24K Gold)',
      'Spine': 'Rounded Back, 6 Raised Bands',
      'Paper': 'European Bible Paper (36 GSM)',
      'Dimensions': '9.5" × 6.75" × 1.5"',
      'Text': 'Red Letter Edition'
    },
    price: 265.00,
    originalPrice: null,
    badge: 'Bestseller',
    material: 'goatskin',
    featured: true,
    image: null
  },
  {
    id: 'niv-wide-margin-rebind',
    version: 'NIV',
    title: 'Insight Wide Margin — Rebound Edition',
    subtitle: 'Burgundy Calfskin, Journaling Layout',
    baseBible: 'NIV Insight Wide Margin',
    baseCost: 14.50,
    description: 'The NIV Insight Wide Margin Bible is the perfect canvas for note-takers and journalers. Our rebind opens completely flat and adds a luxurious burgundy calfskin cover with ample space for margin annotations.',
    specs: {
      'Cover': 'Burgundy Calfskin',
      'Lining': 'Leather Lined',
      'Ribbons': '3 Silk Ribbon Markers',
      'Edge': 'Burgundy Painted Edge',
      'Spine': 'Rounded Back, 4 Raised Bands',
      'Paper': 'European Bible Paper (36 GSM)',
      'Dimensions': '10" × 7" × 1.75"',
      'Text': 'Red Letter Edition'
    },
    price: 235.00,
    originalPrice: null,
    badge: null,
    material: 'calfskin',
    featured: true,
    image: null
  },
  {
    id: 'lsb-giant-print-rebind',
    version: 'LSB',
    title: 'Giant Print Reference — Rebound Edition',
    subtitle: 'Black Goatskin, Giant Print',
    baseBible: 'LSB Giant Print Reference Bible',
    baseCost: 22.00,
    description: 'For those who prefer larger text without sacrificing portability, the LSB Giant Print rebound offers exceptional readability. The black goatskin cover with subtle grain gives it a distinguished, understated elegance.',
    specs: {
      'Cover': 'Black Goatskin (French Grain)',
      'Lining': 'Morocco Goatskin Liner',
      'Ribbons': '3 Silk Ribbon Markers (Gold, Red, Black)',
      'Edge': 'Art Gilding (24K Gold)',
      'Spine': 'Rounded Back, 5 Raised Bands',
      'Paper': 'European Bible Paper (42 GSM)',
      'Dimensions': '10.5" × 7" × 1.75"',
      'Text': 'Black Letter Edition'
    },
    price: 285.00,
    originalPrice: null,
    badge: 'New',
    material: 'goatskin',
    featured: true,
    image: null
  },
  {
    id: 'csb-thinline-rebind',
    version: 'CSB',
    title: 'Thinline Reference — Rebound Edition',
    subtitle: 'Chestnut Calfskin, Ultra-Slim',
    baseBible: 'CSB Thinline Reference Bible',
    baseCost: 12.90,
    description: 'The CSB Thinline is already a favorite for its portability. Our chestnut calfskin rebind keeps it slim while elevating the feel with premium materials and meticulous hand-finishing.',
    specs: {
      'Cover': 'Chestnut Calfskin',
      'Lining': 'Leather Lined',
      'Ribbons': '3 Silk Ribbon Markers',
      'Edge': 'Chestnut Painted Edge',
      'Spine': 'Rounded Back, 4 Raised Bands',
      'Paper': 'European Bible Paper (36 GSM)',
      'Dimensions': '9.5" × 6.5" × 1.25"',
      'Text': 'Red Letter Edition'
    },
    price: 215.00,
    originalPrice: null,
    badge: null,
    material: 'calfskin',
    featured: true,
    image: null
  },
  {
    id: 'nkjv-wide-margin-rebind',
    version: 'NKJV',
    title: 'Single Column Wide Margin — Rebound Edition',
    subtitle: 'Oxblood Goatskin, Premium',
    baseBible: 'NKJV Single Column Wide Margin',
    baseCost: 16.00,
    description: 'The NKJV Single Column Wide Margin is a pastor\'s favorite. Our oxblood goatskin rebind complements the traditional feel with a rich, deep red cover that ages beautifully.',
    specs: {
      'Cover': 'Oxblood Goatskin',
      'Lining': 'Morocco Goatskin Liner',
      'Ribbons': '4 Silk Ribbon Markers',
      'Edge': 'Art Gilding (24K Gold)',
      'Spine': 'Rounded Back, 6 Raised Bands',
      'Paper': 'European Bible Paper (36 GSM)',
      'Dimensions': '10" × 7" × 1.5"',
      'Text': 'Red Letter Edition'
    },
    price: 275.00,
    originalPrice: null,
    badge: 'Popular',
    material: 'goatskin',
    featured: false,
    image: null
  },
  {
    id: 'nasb-reference-rebind',
    version: 'NASB',
    title: 'Reference Bible — Rebound Edition',
    subtitle: 'Forest Green Calfskin',
    baseBible: 'NASB Reference Bible',
    baseCost: 19.00,
    description: 'The NASB Reference Bible, known for its accuracy, wrapped in a distinctive forest green calfskin. A unique color that stands apart while maintaining classic sophistication.',
    specs: {
      'Cover': 'Forest Green Calfskin',
      'Lining': 'Leather Lined',
      'Ribbons': '3 Silk Ribbon Markers',
      'Edge': 'Green Painted Edge',
      'Spine': 'Rounded Back, 4 Raised Bands',
      'Paper': 'European Bible Paper (36 GSM)',
      'Dimensions': '9.75" × 6.75" × 1.5"',
      'Text': 'Black Letter Edition'
    },
    price: 245.00,
    originalPrice: null,
    badge: null,
    material: 'calfskin',
    featured: false,
    image: null
  },
  {
    id: 'kjv-maclaren-rebind',
    version: 'KJV',
    title: 'Maclaren Series — Rebound Edition',
    subtitle: 'Tan Goatskin, Large Print',
    baseBible: 'KJV Maclaren Series Large Print',
    baseCost: 21.00,
    description: 'The Maclaren Series from KJV is beloved for its traditional styling and large, readable type. Our tan goatskin rebind honors that tradition with materials that could last centuries.',
    specs: {
      'Cover': 'Tan Goatskin (English Grain)',
      'Lining': 'Morocco Goatskin Liner',
      'Ribbons': '4 Silk Ribbon Markers (Gold, Cream, Brown, Green)',
      'Edge': 'Art Gilding (24K Gold)',
      'Spine': 'Rounded Back, 6 Raised Bands',
      'Paper': 'European Bible Paper (42 GSM)',
      'Dimensions': '10.5" × 7.25" × 2"',
      'Text': 'Black Letter Edition'
    },
    price: 295.00,
    originalPrice: null,
    badge: 'Premium',
    material: 'goatskin',
    featured: false,
    image: null
  },
  {
    id: 'nrsv-popular-text-rebind',
    version: 'NRSV',
    title: 'Popular Text — Rebound Edition',
    subtitle: 'Gray Goatskin, Academic',
    baseBible: 'NRSV Popular Text Bible',
    baseCost: 15.00,
    description: 'The NRSV Popular Text, widely used in academic settings, rebound in a sophisticated gray goatskin. The neutral tone pairs well with any setting — from classroom to pulpit.',
    specs: {
      'Cover': 'Gray Goatskin',
      'Lining': 'Leather Lined',
      'Ribbons': '3 Silk Ribbon Markers (Silver, Cream, Navy)',
      'Edge': 'Silver Painted Edge',
      'Spine': 'Rounded Back, 4 Raised Bands',
      'Paper': 'European Bible Paper (36 GSM)',
      'Dimensions': '9.5" × 6.75" × 1.5"',
      'Text': 'Black Letter Edition'
    },
    price: 255.00,
    originalPrice: null,
    badge: null,
    material: 'goatskin',
    featured: false,
    image: null
  },
  {
    id: 'esv-church-rebind',
    version: 'ESV',
    title: 'Premium Church Bible — Rebound Edition',
    subtitle: 'Navy Calfskin, Value',
    baseBible: 'ESV Premium Church Bible (TruTone)',
    baseCost: 12.90,
    description: 'The ESV Premium Church Bible offers incredible value as a base. Our navy calfskin rebind transforms this affordable foundation into a heirloom-quality Bible at an accessible price point.',
    specs: {
      'Cover': 'Navy Calfskin',
      'Lining': 'Leather Lined',
      'Ribbons': '3 Silk Ribbon Markers (Gold, Cream, Navy)',
      'Edge': 'Gold Painted Edge',
      'Spine': 'Rounded Back, 4 Raised Bands',
      'Paper': 'Bible Paper (36 GSM)',
      'Dimensions': '9.25" × 6.25" × 1.25"',
      'Text': 'Red Letter Edition'
    },
    price: 195.00,
    originalPrice: null,
    badge: 'Great Value',
    material: 'calfskin',
    featured: false,
    image: null
  },
  {
    id: 'nlt-filament-rebind',
    version: 'NLT',
    title: 'Filament-Enabled — Rebound Edition',
    subtitle: 'Brown Calfskin, Tech-Integrated',
    baseBible: 'NLT Filament Bible',
    baseCost: 17.00,
    description: 'The NLT Filament Bible combines traditional text with modern digital tools. Our rebind preserves the Filament page design while upgrading the cover to a premium brown calfskin.',
    specs: {
      'Cover': 'Brown Calfskin',
      'Lining': 'Leather Lined',
      'Ribbons': '3 Silk Ribbon Markers',
      'Edge': 'Brown Painted Edge',
      'Spine': 'Rounded Back, 4 Raised Bands',
      'Paper': 'European Bible Paper (36 GSM)',
      'Dimensions': '9.5" × 6.5" × 1.5"',
      'Text': 'Red Letter Edition'
    },
    price: 225.00,
    originalPrice: null,
    badge: null,
    material: 'calfskin',
    featured: false,
    image: null
  },
  {
    id: 'niv-gift-rebind',
    version: 'NIV',
    title: 'Premium Gift Bible — Rebound Edition',
    subtitle: 'Cognac Calfskin, Gift Edition',
    baseBible: 'NIV Premium Gift Bible (Leathersoft)',
    baseCost: 11.60,
    description: 'Starting with the affordable and widely available NIV Premium Gift Bible, our cognac calfskin rebind creates a stunning gift-ready Bible that looks far more expensive than its price suggests.',
    specs: {
      'Cover': 'Cognac Calfskin',
      'Lining': 'Leather Lined',
      'Ribbons': '3 Silk Ribbon Markers (Gold, Cream, Brown)',
      'Edge': 'Gold Painted Edge',
      'Spine': 'Rounded Back, 4 Raised Bands',
      'Paper': 'Bible Paper (36 GSM)',
      'Dimensions': '9" × 6" × 1.25"',
      'Text': 'Red Letter Edition'
    },
    price: 185.00,
    originalPrice: null,
    badge: 'Best Value',
    material: 'calfskin',
    featured: false,
    image: null
  }
];

/* ========================================
   Utility Functions
   ======================================== */

function getProduct(id) {
  return PRODUCTS.find(p => p.id === id) || null;
}

function getFeaturedProducts() {
  return PRODUCTS.filter(p => p.featured);
}

function getProductsByVersion(version) {
  if (!version || version === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.version === version);
}

function getProductsByMaterial(material) {
  if (!material || material === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.material === material);
}

function getAllVersions() {
  return [...new Set(PRODUCTS.map(p => p.version))];
}

function getAllMaterials() {
  return [...new Set(PRODUCTS.map(p => p.material))];
}

function formatPrice(price) {
  return '$' + price.toFixed(2);
}
