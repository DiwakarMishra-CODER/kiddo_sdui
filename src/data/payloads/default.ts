import type {
  SduiPayload,
  BannerHeroBlock,
  ProductGrid2x2Block,
  DynamicCollectionBlock,
  Product,
} from '@/types';

// ---------------------------------------------------------------------------
// Products — baby essentials, toys, snacks, books, diapers, formula
// ---------------------------------------------------------------------------

const formulaMilk: Product = {
  id: 'def-p001',
  name: 'Nestlé NAN Pro 1 Infant Formula',
  price: 649,
  originalPrice: 749,
  imageUrl: 'https://picsum.photos/seed/kiddo1/400/400',
  unit: '400 g tin',
  discountLabel: '13% OFF',
  badge: 'Best Seller',
  inStock: true,
};

const premiumDiapers: Product = {
  id: 'def-p002',
  name: 'Pampers Premium Care Diapers NB',
  price: 399,
  originalPrice: 449,
  imageUrl: 'https://picsum.photos/seed/baby2/400/400',
  unit: 'Pack of 32',
  discountLabel: '11% OFF',
  inStock: true,
};

const softenedWipes: Product = {
  id: 'def-p003',
  name: 'MamyPoko Soft Baby Wipes',
  price: 149,
  imageUrl: 'https://picsum.photos/seed/toy3/400/400',
  unit: 'Pack of 80',
  badge: 'New',
  inStock: true,
};

const rattleSet: Product = {
  id: 'def-p004',
  name: 'Fisher-Price Rattle & Rock Set',
  price: 299,
  originalPrice: 399,
  imageUrl: 'https://picsum.photos/seed/snack4/400/400',
  unit: 'Set of 3',
  discountLabel: '25% OFF',
  badge: 'Top Pick',
  inStock: true,
};

const organicPuree: Product = {
  id: 'def-p005',
  name: 'Slurp Farm Organic Veggie Puree',
  price: 89,
  imageUrl: 'https://picsum.photos/seed/book5/400/400',
  unit: '100 g pouch',
  badge: 'Organic',
  inStock: true,
};

const bathSet: Product = {
  id: 'def-p006',
  name: 'Himalaya Baby Bath & Massage Oil',
  price: 199,
  originalPrice: 249,
  imageUrl: 'https://picsum.photos/seed/kiddo6/400/400',
  unit: '200 ml',
  discountLabel: '20% OFF',
  inStock: true,
};

const babyBook: Product = {
  id: 'def-p007',
  name: 'My First ABC Board Book',
  price: 149,
  imageUrl: 'https://picsum.photos/seed/baby7/400/400',
  unit: '1 book',
  badge: 'New',
  inStock: true,
};

const softToy: Product = {
  id: 'def-p008',
  name: 'Soft Bunny Plush Toy 30 cm',
  price: 349,
  originalPrice: 449,
  imageUrl: 'https://picsum.photos/seed/toy8/400/400',
  unit: '1 piece',
  discountLabel: '22% OFF',
  badge: 'Trending',
  inStock: true,
};

const ricePuffs: Product = {
  id: 'def-p009',
  name: 'Millet Munchies Rice Puffs',
  price: 59,
  imageUrl: 'https://picsum.photos/seed/snack9/400/400',
  unit: '50 g pack',
  badge: 'No Sugar',
  inStock: true,
};

const fruitBites: Product = {
  id: 'def-p010',
  name: 'Organic India Fruit Bites',
  price: 79,
  originalPrice: 99,
  imageUrl: 'https://picsum.photos/seed/kiddo10/400/400',
  unit: '60 g pack',
  discountLabel: '20% OFF',
  inStock: true,
};

const buildingBlocks: Product = {
  id: 'def-p011',
  name: 'Mega Bloks First Builders Bag',
  price: 799,
  originalPrice: 999,
  imageUrl: 'https://picsum.photos/seed/baby11/400/400',
  unit: '80 pieces',
  discountLabel: '20% OFF',
  badge: 'Best Seller',
  inStock: true,
};

const cottonBodysuit: Product = {
  id: 'def-p012',
  name: 'H&M Organic Cotton Bodysuit',
  price: 249,
  imageUrl: 'https://picsum.photos/seed/toy12/400/400',
  unit: '0-3 months',
  inStock: true,
};

const sleepSack: Product = {
  id: 'def-p013',
  name: 'LuvLap Sleeping Bag Sleep Sack',
  price: 449,
  originalPrice: 599,
  imageUrl: 'https://picsum.photos/seed/snack13/400/400',
  unit: '0-6 months',
  discountLabel: '25% OFF',
  badge: 'Top Pick',
  inStock: true,
};

const digitalThermometer: Product = {
  id: 'def-p014',
  name: 'Dr. Morepen Baby Digital Thermometer',
  price: 199,
  imageUrl: 'https://picsum.photos/seed/book14/400/400',
  unit: '1 piece',
  badge: 'Essential',
  inStock: true,
};

const nailClipper: Product = {
  id: 'def-p015',
  name: 'Pigeon Baby Nail Clipper Set',
  price: 129,
  imageUrl: 'https://picsum.photos/seed/kiddo15/400/400',
  unit: 'Set of 2',
  inStock: true,
};

const teether: Product = {
  id: 'def-p016',
  name: 'Nuby Silicone Teether Ring',
  price: 179,
  originalPrice: 229,
  imageUrl: 'https://picsum.photos/seed/baby16/400/400',
  unit: '1 piece',
  discountLabel: '22% OFF',
  inStock: true,
};

const sipperBottle: Product = {
  id: 'def-p017',
  name: 'Munchkin 360° Trainer Sippy Cup',
  price: 349,
  imageUrl: 'https://picsum.photos/seed/toy17/400/400',
  unit: '207 ml',
  badge: 'New',
  inStock: true,
};

const crayonSet: Product = {
  id: 'def-p018',
  name: 'Camlin Neon Wax Crayons',
  price: 99,
  imageUrl: 'https://picsum.photos/seed/snack18/400/400',
  unit: 'Pack of 12',
  inStock: true,
};

const puzzleMat: Product = {
  id: 'def-p019',
  name: 'EVA Foam Puzzle Play Mat',
  price: 599,
  originalPrice: 799,
  imageUrl: 'https://picsum.photos/seed/book19/400/400',
  unit: '9 tiles',
  discountLabel: '25% OFF',
  badge: 'Safety Tested',
  inStock: true,
};

const babyLotion: Product = {
  id: 'def-p020',
  name: 'Johnson\'s Baby Milk + Rice Lotion',
  price: 169,
  imageUrl: 'https://picsum.photos/seed/kiddo20/400/400',
  unit: '200 ml',
  inStock: true,
};

const animalFlashCards: Product = {
  id: 'def-p021',
  name: 'Skillmatics Animal Flash Cards',
  price: 249,
  originalPrice: 299,
  imageUrl: 'https://picsum.photos/seed/baby21/400/400',
  unit: 'Set of 30',
  discountLabel: '17% OFF',
  badge: 'Educational',
  inStock: true,
};

const musicBox: Product = {
  id: 'def-p022',
  name: 'VTech Musical Learning Table',
  price: 1299,
  originalPrice: 1599,
  imageUrl: 'https://picsum.photos/seed/toy22/400/400',
  unit: '1 piece',
  discountLabel: '19% OFF',
  badge: 'Best Seller',
  inStock: true,
};

const cerealOats: Product = {
  id: 'def-p023',
  name: 'Cerelac Wheat Apple Cereal',
  price: 179,
  imageUrl: 'https://picsum.photos/seed/snack23/400/400',
  unit: '300 g box',
  badge: 'Iron Rich',
  inStock: true,
};

const bathToy: Product = {
  id: 'def-p024',
  name: 'Munchkin White Hot Safety Bath Ducks',
  price: 299,
  originalPrice: 349,
  imageUrl: 'https://picsum.photos/seed/book24/400/400',
  unit: 'Set of 4',
  discountLabel: '14% OFF',
  inStock: true,
};

const storyBook: Product = {
  id: 'def-p025',
  name: 'Jungle Stories 5-Book Collection',
  price: 449,
  imageUrl: 'https://picsum.photos/seed/kiddo25/400/400',
  unit: '5 books',
  badge: 'New',
  inStock: true,
};

const walkingShoes: Product = {
  id: 'def-p026',
  name: 'Stride Rite SRT SM Journey Sneaker',
  price: 999,
  originalPrice: 1299,
  imageUrl: 'https://picsum.photos/seed/baby26/400/400',
  unit: 'Size 4',
  discountLabel: '23% OFF',
  badge: 'First Walker',
  inStock: true,
};

const sanitizerWipes: Product = {
  id: 'def-p027',
  name: 'Dettol Baby Sanitizing Wipes',
  price: 119,
  imageUrl: 'https://picsum.photos/seed/toy27/400/400',
  unit: 'Pack of 40',
  inStock: true,
};

const stackingRings: Product = {
  id: 'def-p028',
  name: 'Funskool Stacking Rings Tower',
  price: 199,
  imageUrl: 'https://picsum.photos/seed/snack28/400/400',
  unit: '1 set',
  badge: 'Classic',
  inStock: true,
};

const feedingBottle: Product = {
  id: 'def-p029',
  name: 'Pigeon SofTouch Wide Neck Bottle',
  price: 499,
  originalPrice: 599,
  imageUrl: 'https://picsum.photos/seed/book29/400/400',
  unit: '240 ml',
  discountLabel: '17% OFF',
  badge: 'Anti-Colic',
  inStock: true,
};

const diaperbag: Product = {
  id: 'def-p030',
  name: 'Sunveno Signature Diaper Bag',
  price: 1499,
  originalPrice: 1999,
  imageUrl: 'https://picsum.photos/seed/kiddo30/400/400',
  unit: '1 bag',
  discountLabel: '25% OFF',
  badge: 'Trending',
  inStock: true,
};

// ---------------------------------------------------------------------------
// Blocks
// ---------------------------------------------------------------------------

const blocks: (BannerHeroBlock | ProductGrid2x2Block | DynamicCollectionBlock | { id: string; type: string; [key: string]: unknown })[] = [
  // 1 — Hero banner
  {
    id: 'def-b001',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/defhero1/800/400',
    title: 'Everything Your Baby Needs',
    subtitle: 'Handpicked essentials delivered fast',
    ctaLabel: 'Shop Now',
    action: { type: 'DEEP_LINK', payload: { url: 'kiddo://home' } },
    backgroundColor: '#FFF3E0',
  } satisfies BannerHeroBlock,

  // 2 — Top Picks grid
  {
    id: 'def-b002',
    type: 'PRODUCT_GRID_2X2',
    title: 'Top Picks for Babies',
    products: [formulaMilk, premiumDiapers, softenedWipes, rattleSet],
  } satisfies ProductGrid2x2Block,

  // 3 — Snacks under ₹99 collection
  {
    id: 'def-b003',
    type: 'DYNAMIC_COLLECTION',
    title: 'Snacks under ₹99',
    subtitle: 'Healthy bites, tiny prices',
    accentColor: '#FF6B35',
    products: [organicPuree, ricePuffs, fruitBites, cerealOats],
  } satisfies DynamicCollectionBlock,

  // 4 — Banner
  {
    id: 'def-b004',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/defhero2/800/400',
    title: 'Formula Milk & More',
    subtitle: 'Trusted brands, best prices',
    ctaLabel: 'Explore',
    action: { type: 'OPEN_CATEGORY', payload: { categoryId: 'formula', title: 'Formula Milk' } },
  } satisfies BannerHeroBlock,

  // 5 — Grid
  {
    id: 'def-b005',
    type: 'PRODUCT_GRID_2X2',
    title: 'Bath & Skincare',
    products: [bathSet, babyLotion, sanitizerWipes, nailClipper],
  } satisfies ProductGrid2x2Block,

  // 6 — Best Sellers collection
  {
    id: 'def-b006',
    type: 'DYNAMIC_COLLECTION',
    title: 'Best Sellers',
    subtitle: 'What every parent is buying',
    accentColor: '#FFC107',
    products: [buildingBlocks, musicBox, stackingRings, puzzleMat, rattleSet, bathToy],
  } satisfies DynamicCollectionBlock,

  // 7 — Banner
  {
    id: 'def-b007',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/defhero3/800/400',
    title: 'Up to 25% Off on Toys',
    subtitle: 'Limited time offer — grab it fast',
    ctaLabel: 'Shop Toys',
    action: { type: 'OPEN_CATEGORY', payload: { categoryId: 'toys', title: 'Toys' } },
    backgroundColor: '#E8F5E9',
  } satisfies BannerHeroBlock,

  // 8 — Grid
  {
    id: 'def-b008',
    type: 'PRODUCT_GRID_2X2',
    title: 'Feeding Essentials',
    products: [feedingBottle, sipperBottle, cerealOats, teether],
  } satisfies ProductGrid2x2Block,

  // 9 — New Arrivals collection
  {
    id: 'def-b009',
    type: 'DYNAMIC_COLLECTION',
    title: 'New Arrivals',
    subtitle: 'Fresh stock just landed',
    accentColor: '#FF6B35',
    products: [babyBook, softToy, sipperBottle, crayonSet, animalFlashCards, storyBook],
  } satisfies DynamicCollectionBlock,

  // 10 — UNKNOWN block for resilience testing
  {
    id: 'def-b010',
    type: 'NEW_COMPONENT_V2',
    title: 'Personalized Picks',
    componentVersion: 2,
    config: { layout: 'horizontal', maxItems: 6 },
  },

  // 11 — Banner
  {
    id: 'def-b011',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/defhero4/800/400',
    title: 'Your Diaper Subscription',
    subtitle: 'Set it & forget it — save 15%',
    ctaLabel: 'Subscribe',
    action: { type: 'OPEN_CATEGORY', payload: { categoryId: 'diapers', title: 'Diapers' } },
    backgroundColor: '#FFF8E1',
  } satisfies BannerHeroBlock,

  // 12 — Grid
  {
    id: 'def-b012',
    type: 'PRODUCT_GRID_2X2',
    title: 'Dress & Style',
    products: [cottonBodysuit, sleepSack, walkingShoes, diaperbag],
  } satisfies ProductGrid2x2Block,

  // 13 — Collection
  {
    id: 'def-b013',
    type: 'DYNAMIC_COLLECTION',
    title: 'Learning & Books',
    subtitle: 'Nurture the curious little mind',
    accentColor: '#1565C0',
    products: [babyBook, animalFlashCards, storyBook, crayonSet, buildingBlocks],
  } satisfies DynamicCollectionBlock,

  // 14 — Banner
  {
    id: 'def-b014',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/defhero5/800/400',
    title: 'Sleep Better, Baby',
    subtitle: 'Sleep sacks, pillows & more',
    ctaLabel: 'Shop Sleep',
    action: { type: 'OPEN_CATEGORY', payload: { categoryId: 'sleep', title: 'Sleep Essentials' } },
  } satisfies BannerHeroBlock,

  // 15 — Grid
  {
    id: 'def-b015',
    type: 'PRODUCT_GRID_2X2',
    title: 'Safety First',
    products: [digitalThermometer, nailClipper, sanitizerWipes, softenedWipes],
  } satisfies ProductGrid2x2Block,

  // 16 — Collection
  {
    id: 'def-b016',
    type: 'DYNAMIC_COLLECTION',
    title: 'Top Picks for Babies',
    subtitle: 'Editor\'s choice this week',
    accentColor: '#FF6B35',
    products: [formulaMilk, premiumDiapers, buildingBlocks, puzzleMat, feedingBottle, teether],
  } satisfies DynamicCollectionBlock,

  // 17 — Banner
  {
    id: 'def-b017',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/defhero6/800/400',
    title: 'Free Delivery on ₹499+',
    subtitle: 'Stock up & save on shipping',
    ctaLabel: 'Start Shopping',
    action: { type: 'DEEP_LINK', payload: { url: 'kiddo://offers/free-delivery' } },
    backgroundColor: '#E3F2FD',
  } satisfies BannerHeroBlock,

  // 18 — Grid
  {
    id: 'def-b018',
    type: 'PRODUCT_GRID_2X2',
    title: 'Trusted Toys',
    products: [buildingBlocks, musicBox, stackingRings, puzzleMat],
  } satisfies ProductGrid2x2Block,

  // 19 — Collection
  {
    id: 'def-b019',
    type: 'DYNAMIC_COLLECTION',
    title: 'Wholesome Bites',
    subtitle: 'Tasty picks the whole family loves',
    accentColor: '#FF8F00',
    products: [ricePuffs, fruitBites, organicPuree, cerealOats],
  } satisfies DynamicCollectionBlock,

  // 20 — Banner
  {
    id: 'def-b020',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/defhero7/800/400',
    title: 'Playtime Made Magical',
    subtitle: 'Toys that teach & entertain',
    ctaLabel: 'Discover Toys',
    action: { type: 'OPEN_CATEGORY', payload: { categoryId: 'toys', title: 'Toys' } },
  } satisfies BannerHeroBlock,

  // 21 — Grid
  {
    id: 'def-b021',
    type: 'PRODUCT_GRID_2X2',
    title: 'Carry It All',
    products: [diaperbag, softenedWipes, feedingBottle, sipperBottle],
  } satisfies ProductGrid2x2Block,

  // 22 — Collection
  {
    id: 'def-b022',
    type: 'DYNAMIC_COLLECTION',
    title: 'Parent Favourites',
    subtitle: 'Loved by thousands of parents',
    accentColor: '#FFC107',
    products: [premiumDiapers, formulaMilk, bathSet, babyLotion, softToy, walkingShoes],
  } satisfies DynamicCollectionBlock,

  // 23 — Banner
  {
    id: 'def-b023',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/defhero8/800/400',
    title: 'Books for Every Age',
    subtitle: 'Start reading early',
    ctaLabel: 'Browse Books',
    action: { type: 'OPEN_CATEGORY', payload: { categoryId: 'books', title: 'Books' } },
    backgroundColor: '#F3E5F5',
  } satisfies BannerHeroBlock,

  // 24 — Grid
  {
    id: 'def-b024',
    type: 'PRODUCT_GRID_2X2',
    title: 'Soft & Snuggly',
    products: [softToy, sleepSack, cottonBodysuit, teether],
  } satisfies ProductGrid2x2Block,

  // 25 — Collection
  {
    id: 'def-b025',
    type: 'DYNAMIC_COLLECTION',
    title: 'Just In',
    subtitle: 'Be the first to try something new',
    accentColor: '#FF6B35',
    products: [musicBox, sipperBottle, babyBook, storyBook, crayonSet, animalFlashCards],
  } satisfies DynamicCollectionBlock,

  // 26 — Banner
  {
    id: 'def-b026',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/defhero9/800/400',
    title: 'Diaper & Wipes Combo',
    subtitle: 'Save more when you bundle',
    ctaLabel: 'Shop Combo',
    action: { type: 'OPEN_CATEGORY', payload: { categoryId: 'combos', title: 'Combos' } },
  } satisfies BannerHeroBlock,

  // 27 — Grid
  {
    id: 'def-b027',
    type: 'PRODUCT_GRID_2X2',
    title: 'Formula & Nutrition',
    products: [formulaMilk, cerealOats, organicPuree, fruitBites],
  } satisfies ProductGrid2x2Block,

  // 28 — Collection
  {
    id: 'def-b028',
    type: 'DYNAMIC_COLLECTION',
    title: 'Skincare & Hygiene',
    subtitle: 'Gentle care for delicate skin',
    accentColor: '#E91E63',
    products: [babyLotion, bathSet, sanitizerWipes, nailClipper, softenedWipes],
  } satisfies DynamicCollectionBlock,

  // 29 — Banner
  {
    id: 'def-b029',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/defhero10/800/400',
    title: 'Weekend Super Sale',
    subtitle: 'Up to 30% off this weekend only',
    ctaLabel: 'View Deals',
    action: { type: 'DEEP_LINK', payload: { url: 'kiddo://offers/weekend-sale' } },
    backgroundColor: '#FCE4EC',
  } satisfies BannerHeroBlock,

  // 30 — Grid
  {
    id: 'def-b030',
    type: 'PRODUCT_GRID_2X2',
    title: 'Bath Time Fun',
    products: [bathToy, bathSet, babyLotion, softenedWipes],
  } satisfies ProductGrid2x2Block,

  // 31 — Collection
  {
    id: 'def-b031',
    type: 'DYNAMIC_COLLECTION',
    title: 'First Shoes & Clothing',
    subtitle: 'Tiny feet deserve the best',
    accentColor: '#FF6B35',
    products: [walkingShoes, cottonBodysuit, sleepSack, diaperbag],
  } satisfies DynamicCollectionBlock,

  // 32 — Banner
  {
    id: 'def-b032',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/defhero11/800/400',
    title: 'The Feeding Edit',
    subtitle: 'Bottles, bibs & bowls',
    ctaLabel: 'Shop Now',
    action: { type: 'OPEN_CATEGORY', payload: { categoryId: 'feeding', title: 'Feeding' } },
  } satisfies BannerHeroBlock,

  // 33 — Grid
  {
    id: 'def-b033',
    type: 'PRODUCT_GRID_2X2',
    title: 'Safety & Health',
    products: [digitalThermometer, teether, stackingRings, babyBook],
  } satisfies ProductGrid2x2Block,

  // 34 — Collection
  {
    id: 'def-b034',
    type: 'DYNAMIC_COLLECTION',
    title: 'Under ₹299',
    subtitle: 'Great quality, great price',
    accentColor: '#FFC107',
    products: [ricePuffs, fruitBites, organicPuree, softenedWipes, nailClipper, crayonSet],
  } satisfies DynamicCollectionBlock,

  // 35 — Banner
  {
    id: 'def-b035',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/defhero12/800/400',
    title: 'All the Essentials, One Tap Away',
    subtitle: 'Discover Kiddo\'s full catalog',
    ctaLabel: 'Explore All',
    action: { type: 'DEEP_LINK', payload: { url: 'kiddo://catalog' } },
    backgroundColor: '#FFF3E0',
  } satisfies BannerHeroBlock,
];

export const defaultPayload: SduiPayload = {
  version: '1.0.0',
  campaignId: null,
  theme: {
    primary: '#FF6B35',
    secondary: '#FFC107',
    background: '#F8F9FA',
    surface: '#FFFFFF',
    textPrimary: '#212529',
    textSecondary: '#6C757D',
    ctaText: '#FFFFFF',
    divider: '#E9ECEF',
    badge: '#FF6B35',
    badgeText: '#FFFFFF',
  },
  blocks: blocks as unknown as SduiPayload['blocks'],
};
