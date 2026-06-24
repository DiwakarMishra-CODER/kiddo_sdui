import type {
  SduiPayload,
  BannerHeroBlock,
  ProductGrid2x2Block,
  DynamicCollectionBlock,
  Product,
} from '@/types';

// ---------------------------------------------------------------------------
// Products — school supplies, lunchboxes, bags, stationery, books, craft sets
// ---------------------------------------------------------------------------

const schoolBag: Product = {
  id: 'bts-p001',
  name: 'Wildcraft Spaceout School Backpack',
  price: 1299,
  originalPrice: 1699,
  imageUrl: 'https://picsum.photos/seed/schoolbag1/400/400',
  unit: '25 L',
  discountLabel: '24% OFF',
  badge: 'Best Seller',
  inStock: true,
};

const lunchBox: Product = {
  id: 'bts-p002',
  name: 'Milton Lunch Box Steel Container',
  price: 349,
  originalPrice: 449,
  imageUrl: 'https://picsum.photos/seed/lunch2/400/400',
  unit: '3 containers',
  discountLabel: '22% OFF',
  badge: 'Leak Proof',
  inStock: true,
};

const waterBottle: Product = {
  id: 'bts-p003',
  name: 'Nayasa Futura Kids Water Bottle',
  price: 199,
  imageUrl: 'https://picsum.photos/seed/bottle3/400/400',
  unit: '600 ml',
  inStock: true,
};

const geometryBox: Product = {
  id: 'bts-p004',
  name: 'Camlin Compass Geometry Box',
  price: 149,
  originalPrice: 199,
  imageUrl: 'https://picsum.photos/seed/stationery4/400/400',
  unit: '9 pieces',
  discountLabel: '25% OFF',
  badge: 'Must-Have',
  inStock: true,
};

const colorPencils: Product = {
  id: 'bts-p005',
  name: 'Faber-Castell Colour Pencils',
  price: 199,
  originalPrice: 249,
  imageUrl: 'https://picsum.photos/seed/art5/400/400',
  unit: 'Pack of 24',
  discountLabel: '20% OFF',
  badge: 'Artist Grade',
  inStock: true,
};

const pencilCase: Product = {
  id: 'bts-p006',
  name: 'Smily Kiddos Zipper Pencil Pouch',
  price: 179,
  imageUrl: 'https://picsum.photos/seed/pencil6/400/400',
  unit: '1 pouch',
  badge: 'New',
  inStock: true,
};

const notebookSet: Product = {
  id: 'bts-p007',
  name: 'Navneet Long Notebook Pack',
  price: 249,
  imageUrl: 'https://picsum.photos/seed/notebook7/400/400',
  unit: 'Pack of 6',
  inStock: true,
};

const craftPaper: Product = {
  id: 'bts-p008',
  name: 'Origami & Craft Paper Assorted',
  price: 129,
  imageUrl: 'https://picsum.photos/seed/craft8/400/400',
  unit: '100 sheets',
  badge: 'Colorful',
  inStock: true,
};

const scienceKit: Product = {
  id: 'bts-p009',
  name: 'Einstein Box Junior Science Kit',
  price: 1299,
  originalPrice: 1699,
  imageUrl: 'https://picsum.photos/seed/science9/400/400',
  unit: '30+ experiments',
  discountLabel: '24% OFF',
  badge: 'Educational',
  inStock: true,
};

const paintSet: Product = {
  id: 'bts-p010',
  name: 'Camel Student Watercolour Cakes',
  price: 149,
  imageUrl: 'https://picsum.photos/seed/paint10/400/400',
  unit: '12 colours',
  inStock: true,
};

const kidsAtlas: Product = {
  id: 'bts-p011',
  name: 'Oxford School Atlas (Latest Ed.)',
  price: 299,
  originalPrice: 349,
  imageUrl: 'https://picsum.photos/seed/atlas11/400/400',
  unit: '1 book',
  discountLabel: '14% OFF',
  badge: 'Essential',
  inStock: true,
};

const flashCards: Product = {
  id: 'bts-p012',
  name: 'Math Flash Cards Grades 1-3',
  price: 199,
  imageUrl: 'https://picsum.photos/seed/flash12/400/400',
  unit: 'Set of 50',
  badge: 'Fun Learning',
  inStock: true,
};

const artFolder: Product = {
  id: 'bts-p013',
  name: 'Classmate A4 Art Folder',
  price: 99,
  imageUrl: 'https://picsum.photos/seed/folder13/400/400',
  unit: '1 folder',
  inStock: true,
};

const eraserSet: Product = {
  id: 'bts-p014',
  name: 'Apsara Jumbo Eraser Pack',
  price: 49,
  imageUrl: 'https://picsum.photos/seed/eraser14/400/400',
  unit: 'Pack of 6',
  inStock: true,
};

const sharpener: Product = {
  id: 'bts-p015',
  name: 'Staedtler Dual Hole Sharpener',
  price: 79,
  imageUrl: 'https://picsum.photos/seed/sharpen15/400/400',
  unit: 'Pack of 2',
  inStock: true,
};

const scientificCalc: Product = {
  id: 'bts-p016',
  name: 'Casio FX-82MS Scientific Calculator',
  price: 699,
  originalPrice: 899,
  imageUrl: 'https://picsum.photos/seed/calc16/400/400',
  unit: '1 piece',
  discountLabel: '22% OFF',
  badge: 'Class 8+',
  inStock: true,
};

const glueStick: Product = {
  id: 'bts-p017',
  name: 'Fevicol Craft Glue Stick 3-Pack',
  price: 89,
  imageUrl: 'https://picsum.photos/seed/glue17/400/400',
  unit: 'Pack of 3',
  inStock: true,
};

const scissorSet: Product = {
  id: 'bts-p018',
  name: 'Fiskars Kids Safety Scissors',
  price: 129,
  imageUrl: 'https://picsum.photos/seed/scissor18/400/400',
  unit: '1 piece',
  badge: 'Safety Tip',
  inStock: true,
};

const penSet: Product = {
  id: 'bts-p019',
  name: 'Reynolds Ball Point Pen Set',
  price: 79,
  imageUrl: 'https://picsum.photos/seed/pen19/400/400',
  unit: 'Pack of 10',
  badge: 'Smooth Write',
  inStock: true,
};

const tiffinBag: Product = {
  id: 'bts-p020',
  name: 'Yumbox Insulated Tiffin Bag',
  price: 599,
  originalPrice: 799,
  imageUrl: 'https://picsum.photos/seed/tiffin20/400/400',
  unit: '1 bag',
  discountLabel: '25% OFF',
  badge: 'Thermal',
  inStock: true,
};

const activityBook: Product = {
  id: 'bts-p021',
  name: 'Brainy Kids Activity Workbook',
  price: 149,
  imageUrl: 'https://picsum.photos/seed/activity21/400/400',
  unit: '1 book',
  badge: 'Ages 4-8',
  inStock: true,
};

const rulerSet: Product = {
  id: 'bts-p022',
  name: 'Maped Ruler & Scale Set',
  price: 99,
  imageUrl: 'https://picsum.photos/seed/ruler22/400/400',
  unit: 'Set of 3',
  inStock: true,
};

const clayKit: Product = {
  id: 'bts-p023',
  name: 'DAS Air Dry Modelling Clay Kit',
  price: 349,
  originalPrice: 449,
  imageUrl: 'https://picsum.photos/seed/clay23/400/400',
  unit: '8 colours',
  discountLabel: '22% OFF',
  badge: 'Non-Toxic',
  inStock: true,
};

const mapMarker: Product = {
  id: 'bts-p024',
  name: 'Crayola Washable Markers Broad',
  price: 249,
  imageUrl: 'https://picsum.photos/seed/marker24/400/400',
  unit: 'Pack of 10',
  badge: 'Washable',
  inStock: true,
};

const stampsKit: Product = {
  id: 'bts-p025',
  name: 'Melissa & Doug Stamp Activity Set',
  price: 499,
  originalPrice: 649,
  imageUrl: 'https://picsum.photos/seed/stamp25/400/400',
  unit: '1 set',
  discountLabel: '23% OFF',
  badge: 'Kids Fav',
  inStock: true,
};

const craftBox: Product = {
  id: 'bts-p026',
  name: 'IQ Toys Art & Craft Mega Box',
  price: 799,
  originalPrice: 999,
  imageUrl: 'https://picsum.photos/seed/craftbox26/400/400',
  unit: '100+ pieces',
  discountLabel: '20% OFF',
  badge: 'Gift Ready',
  inStock: true,
};

const pencilGrip: Product = {
  id: 'bts-p027',
  name: 'Maped Ergo Soft Pencil Grips',
  price: 69,
  imageUrl: 'https://picsum.photos/seed/grip27/400/400',
  unit: 'Pack of 5',
  inStock: true,
};

const bookmarks: Product = {
  id: 'bts-p028',
  name: 'Quirky Fox Magnetic Bookmarks',
  price: 129,
  imageUrl: 'https://picsum.photos/seed/bookmark28/400/400',
  unit: 'Set of 6',
  badge: 'Cute Design',
  inStock: true,
};

const stickynotes: Product = {
  id: 'bts-p029',
  name: '3M Post-it Kids Sticky Notes',
  price: 99,
  imageUrl: 'https://picsum.photos/seed/sticky29/400/400',
  unit: 'Pack of 4',
  inStock: true,
};

const tableCover: Product = {
  id: 'bts-p030',
  name: 'Fortune PVC Book Covers Pack',
  price: 79,
  imageUrl: 'https://picsum.photos/seed/cover30/400/400',
  unit: 'Pack of 10',
  inStock: true,
};

// ---------------------------------------------------------------------------
// Blocks
// ---------------------------------------------------------------------------

const blocks: (BannerHeroBlock | ProductGrid2x2Block | DynamicCollectionBlock | { id: string; type: string; [key: string]: unknown })[] = [
  // 1 — Hero banner
  {
    id: 'bts-b001',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/btshero1/800/400',
    title: 'Back to School Season is Here!',
    subtitle: 'Gear up with everything your child needs',
    ctaLabel: 'Shop Now',
    action: { type: 'DEEP_LINK', payload: { url: 'kiddo://campaigns/back-to-school' } },
    backgroundColor: '#E3F2FD',
  } satisfies BannerHeroBlock,

  // 2 — Lunchboxes & Bags grid
  {
    id: 'bts-b002',
    type: 'PRODUCT_GRID_2X2',
    title: 'Lunchboxes & Bags',
    products: [schoolBag, lunchBox, tiffinBag, waterBottle],
  } satisfies ProductGrid2x2Block,

  // 3 — Stationery collection
  {
    id: 'bts-b003',
    type: 'DYNAMIC_COLLECTION',
    title: 'Stationery Essentials',
    subtitle: 'Stock the pencil pouch right',
    accentColor: '#1565C0',
    products: [geometryBox, pencilCase, notebookSet, eraserSet, sharpener, penSet],
  } satisfies DynamicCollectionBlock,

  // 4 — Banner
  {
    id: 'bts-b004',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/btshero2/800/400',
    title: 'Pencils, Pens & More',
    subtitle: 'Save big on stationery bundles',
    ctaLabel: 'Explore',
    action: { type: 'OPEN_CATEGORY', payload: { categoryId: 'stationery', title: 'Stationery' } },
    backgroundColor: '#FFF9C4',
  } satisfies BannerHeroBlock,

  // 5 — Grid
  {
    id: 'bts-b005',
    type: 'PRODUCT_GRID_2X2',
    title: 'Art & Craft Picks',
    products: [colorPencils, craftPaper, paintSet, clayKit],
  } satisfies ProductGrid2x2Block,

  // 6 — Art & Craft collection
  {
    id: 'bts-b006',
    type: 'DYNAMIC_COLLECTION',
    title: 'Art & Craft',
    subtitle: 'Unleash your child\'s creative genius',
    accentColor: '#FFD600',
    products: [craftBox, stampsKit, mapMarker, glueStick, scissorSet, artFolder],
  } satisfies DynamicCollectionBlock,

  // 7 — Banner
  {
    id: 'bts-b007',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/btshero3/800/400',
    title: 'Science & Discovery',
    subtitle: 'Kits that make learning exciting',
    ctaLabel: 'Shop Kits',
    action: { type: 'OPEN_CATEGORY', payload: { categoryId: 'science-kits', title: 'Science Kits' } },
  } satisfies BannerHeroBlock,

  // 8 — Grid
  {
    id: 'bts-b008',
    type: 'PRODUCT_GRID_2X2',
    title: 'Books & Learning',
    products: [kidsAtlas, flashCards, activityBook, scienceKit],
  } satisfies ProductGrid2x2Block,

  // 9 — Back to School Offers collection
  {
    id: 'bts-b009',
    type: 'DYNAMIC_COLLECTION',
    title: 'Back to School Offers',
    subtitle: 'Best deals of the season',
    accentColor: '#1565C0',
    products: [schoolBag, lunchBox, geometryBox, colorPencils, scienceKit, craftBox],
  } satisfies DynamicCollectionBlock,

  // 10 — UNKNOWN block for resilience testing
  {
    id: 'bts-b010',
    type: 'NEW_COMPONENT_V2',
    title: 'Smart Study Planner',
    componentVersion: 2,
    config: { layout: 'vertical', maxItems: 4 },
  },

  // 11 — Banner
  {
    id: 'bts-b011',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/btshero4/800/400',
    title: 'Flat 25% Off on Bags',
    subtitle: 'Premium quality, school-ready bags',
    ctaLabel: 'Shop Bags',
    action: { type: 'OPEN_CATEGORY', payload: { categoryId: 'bags', title: 'School Bags' } },
    backgroundColor: '#E8F5E9',
  } satisfies BannerHeroBlock,

  // 12 — Grid
  {
    id: 'bts-b012',
    type: 'PRODUCT_GRID_2X2',
    title: 'Writing Essentials',
    products: [penSet, pencilGrip, rulerSet, notebookSet],
  } satisfies ProductGrid2x2Block,

  // 13 — Lunchboxes & Bags collection
  {
    id: 'bts-b013',
    type: 'DYNAMIC_COLLECTION',
    title: 'Lunchboxes & Bags',
    subtitle: 'Tiffins that go the distance',
    accentColor: '#FFD600',
    products: [lunchBox, tiffinBag, waterBottle, schoolBag, pencilCase],
  } satisfies DynamicCollectionBlock,

  // 14 — Banner
  {
    id: 'bts-b014',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/btshero5/800/400',
    title: 'Craft Your Masterpiece',
    subtitle: 'From clay to canvas — we have it all',
    ctaLabel: 'Explore Craft',
    action: { type: 'OPEN_CATEGORY', payload: { categoryId: 'art-craft', title: 'Art & Craft' } },
  } satisfies BannerHeroBlock,

  // 15 — Grid
  {
    id: 'bts-b015',
    type: 'PRODUCT_GRID_2X2',
    title: 'Desk Must-Haves',
    products: [tableCover, bookmarks, stickynotes, artFolder],
  } satisfies ProductGrid2x2Block,

  // 16 — Collection
  {
    id: 'bts-b016',
    type: 'DYNAMIC_COLLECTION',
    title: 'Stationery Refills',
    subtitle: 'Everything for the first day of school',
    accentColor: '#1565C0',
    products: [geometryBox, rulerSet, eraserSet, sharpener, pencilGrip, penSet],
  } satisfies DynamicCollectionBlock,

  // 17 — Banner
  {
    id: 'bts-b017',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/btshero6/800/400',
    title: 'Build a Smarter Reader',
    subtitle: 'Activity books & workbooks for all grades',
    ctaLabel: 'Browse Books',
    action: { type: 'OPEN_CATEGORY', payload: { categoryId: 'books', title: 'Books' } },
    backgroundColor: '#FFF3E0',
  } satisfies BannerHeroBlock,

  // 18 — Grid
  {
    id: 'bts-b018',
    type: 'PRODUCT_GRID_2X2',
    title: 'Science & Math Tools',
    products: [scientificCalc, geometryBox, scienceKit, flashCards],
  } satisfies ProductGrid2x2Block,

  // 19 — Art & Craft collection (deeper)
  {
    id: 'bts-b019',
    type: 'DYNAMIC_COLLECTION',
    title: 'Creative Workshop',
    subtitle: 'School projects made fun',
    accentColor: '#FFD600',
    products: [paintSet, craftPaper, colorPencils, clayKit, scissorSet, glueStick],
  } satisfies DynamicCollectionBlock,

  // 20 — Banner
  {
    id: 'bts-b020',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/btshero7/800/400',
    title: 'Combo Deals — Save More',
    subtitle: 'Bundle up stationery & save 20%',
    ctaLabel: 'View Combos',
    action: { type: 'DEEP_LINK', payload: { url: 'kiddo://offers/bts-combo' } },
  } satisfies BannerHeroBlock,

  // 21 — Grid
  {
    id: 'bts-b021',
    type: 'PRODUCT_GRID_2X2',
    title: 'Creative Corner',
    products: [mapMarker, stampsKit, craftBox, activityBook],
  } satisfies ProductGrid2x2Block,

  // 22 — Back to School Offers collection
  {
    id: 'bts-b022',
    type: 'DYNAMIC_COLLECTION',
    title: 'Top Deals of the Season',
    subtitle: 'Top deals you don\'t want to miss',
    accentColor: '#1565C0',
    products: [schoolBag, tiffinBag, scienceKit, craftBox, kidsAtlas, activityBook],
  } satisfies DynamicCollectionBlock,

  // 23 — Banner
  {
    id: 'bts-b023',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/btshero8/800/400',
    title: 'Make Their Desk Shine',
    subtitle: 'Organizers, folders & accessories',
    ctaLabel: 'Shop Desk Items',
    action: { type: 'OPEN_CATEGORY', payload: { categoryId: 'desk-accessories', title: 'Desk Accessories' } },
    backgroundColor: '#E1F5FE',
  } satisfies BannerHeroBlock,

  // 24 — Grid
  {
    id: 'bts-b024',
    type: 'PRODUCT_GRID_2X2',
    title: 'Organize It All',
    products: [artFolder, pencilCase, tableCover, stickynotes],
  } satisfies ProductGrid2x2Block,

  // 25 — Collection
  {
    id: 'bts-b025',
    type: 'DYNAMIC_COLLECTION',
    title: 'Tiffin & Hydration',
    subtitle: 'Fuel the school day',
    accentColor: '#FFD600',
    products: [lunchBox, waterBottle, tiffinBag, schoolBag],
  } satisfies DynamicCollectionBlock,

  // 26 — Banner
  {
    id: 'bts-b026',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/btshero9/800/400',
    title: 'Free Delivery on ₹499+',
    subtitle: 'Stock up, save big on shipping',
    ctaLabel: 'Start Shopping',
    action: { type: 'DEEP_LINK', payload: { url: 'kiddo://offers/free-delivery' } },
  } satisfies BannerHeroBlock,

  // 27 — Grid
  {
    id: 'bts-b027',
    type: 'PRODUCT_GRID_2X2',
    title: 'Under ₹99',
    products: [eraserSet, sharpener, glueStick, pencilGrip],
  } satisfies ProductGrid2x2Block,

  // 28 — Collection
  {
    id: 'bts-b028',
    type: 'DYNAMIC_COLLECTION',
    title: 'DIY & Craft Zone',
    subtitle: 'Spark a love for making things',
    accentColor: '#FFD600',
    products: [craftPaper, mapMarker, stampsKit, paintSet, colorPencils],
  } satisfies DynamicCollectionBlock,

  // 29 — Banner
  {
    id: 'bts-b029',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/btshero10/800/400',
    title: 'The Backpack Edit',
    subtitle: 'Bags that grow with your child',
    ctaLabel: 'Explore Bags',
    action: { type: 'OPEN_CATEGORY', payload: { categoryId: 'bags', title: 'Bags' } },
    backgroundColor: '#F3E5F5',
  } satisfies BannerHeroBlock,

  // 30 — Grid
  {
    id: 'bts-b030',
    type: 'PRODUCT_GRID_2X2',
    title: 'Atlas & Reference Books',
    products: [kidsAtlas, activityBook, flashCards, bookmarks],
  } satisfies ProductGrid2x2Block,

  // 31 — Collection
  {
    id: 'bts-b031',
    type: 'DYNAMIC_COLLECTION',
    title: 'Desk Favourites',
    subtitle: 'Refill season is here',
    accentColor: '#1565C0',
    products: [notebookSet, penSet, pencilCase, geometryBox, rulerSet, artFolder],
  } satisfies DynamicCollectionBlock,

  // 32 — Banner
  {
    id: 'bts-b032',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/btshero11/800/400',
    title: 'Last Chance Deals',
    subtitle: 'Stock up before school reopens',
    ctaLabel: 'Grab Deals',
    action: { type: 'DEEP_LINK', payload: { url: 'kiddo://offers/last-chance-bts' } },
    backgroundColor: '#FCE4EC',
  } satisfies BannerHeroBlock,

  // 33 — Grid
  {
    id: 'bts-b033',
    type: 'PRODUCT_GRID_2X2',
    title: 'Premium Craft Sets',
    products: [craftBox, clayKit, stampsKit, scienceKit],
  } satisfies ProductGrid2x2Block,

  // 34 — Back to School Offers collection
  {
    id: 'bts-b034',
    type: 'DYNAMIC_COLLECTION',
    title: 'Last Chance Picks',
    subtitle: 'Closing soon — save up to 25%',
    accentColor: '#1565C0',
    products: [schoolBag, lunchBox, colorPencils, paintSet, activityBook, scienceKit],
  } satisfies DynamicCollectionBlock,

  // 35 — Banner
  {
    id: 'bts-b035',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/btshero12/800/400',
    title: 'All Set for Day One!',
    subtitle: 'Browse the full Back to School store',
    ctaLabel: 'Shop All',
    action: { type: 'DEEP_LINK', payload: { url: 'kiddo://campaigns/back-to-school/all' } },
    backgroundColor: '#E3F2FD',
  } satisfies BannerHeroBlock,
];

export const backToSchoolPayload: SduiPayload = {
  version: '1.0.0',
  campaignId: 'back-to-school',
  theme: {
    primary: '#1565C0',
    secondary: '#FFD600',
    background: '#E3F2FD',
    surface: '#FFFFFF',
    textPrimary: '#0D1B2A',
    textSecondary: '#546E7A',
    ctaText: '#FFFFFF',
    divider: '#BBDEFB',
    badge: '#FFD600',
    badgeText: '#1565C0',
  },
  blocks: blocks as unknown as SduiPayload['blocks'],
  overlay: {
    animationUrl: 'https://assets.kiddo.app/lottie/paper-planes.json',
    loop: true,
  },
};
