import type {
  SduiPayload,
  BannerHeroBlock,
  ProductGrid2x2Block,
  DynamicCollectionBlock,
  Product,
} from '@/types';

// ---------------------------------------------------------------------------
// Products — water toys, sunscreen, swimwear, outdoor games, snacks, tickets
// ---------------------------------------------------------------------------

const waterGun: Product = {
  id: 'sph-p001',
  name: 'Nerf Super Soaker XL Water Blaster',
  price: 499,
  originalPrice: 699,
  imageUrl: 'https://picsum.photos/seed/watergun1/400/400',
  unit: '1 piece',
  discountLabel: '29% OFF',
  badge: 'Best Seller',
  inStock: true,
};

const inflatablerPool: Product = {
  id: 'sph-p002',
  name: 'Intex Easy Set Inflatable Pool',
  price: 1899,
  originalPrice: 2499,
  imageUrl: 'https://picsum.photos/seed/pool2/400/400',
  unit: '183 cm dia',
  discountLabel: '24% OFF',
  badge: 'Family Fav',
  inStock: true,
};

const sunscreen: Product = {
  id: 'sph-p003',
  name: 'Lotus Safe Sun Kids SPF 50 Sunscreen',
  price: 249,
  originalPrice: 299,
  imageUrl: 'https://picsum.photos/seed/sunscreen3/400/400',
  unit: '100 g tube',
  discountLabel: '17% OFF',
  badge: 'Pediatrician OK',
  inStock: true,
};

const swimwear: Product = {
  id: 'sph-p004',
  name: 'HRX Kids UV-Block Swimsuit',
  price: 599,
  originalPrice: 799,
  imageUrl: 'https://picsum.photos/seed/swim4/400/400',
  unit: 'Age 4-5 yrs',
  discountLabel: '25% OFF',
  inStock: true,
};

const pettingZooTicket: Product = {
  id: 'sph-p005',
  name: 'Kiddo Petting Zoo — Child Ticket',
  price: 299,
  imageUrl: 'https://picsum.photos/seed/zoo5/400/400',
  unit: '1 ticket',
  badge: 'Experience',
  action: { type: 'OPEN_CATEGORY', payload: { categoryId: 'petting-zoo', title: 'Petting Zoo Tickets' } },
  inStock: true,
};

const bubbleMachine: Product = {
  id: 'sph-p006',
  name: 'AquaDream Automatic Bubble Machine',
  price: 399,
  originalPrice: 499,
  imageUrl: 'https://picsum.photos/seed/bubble6/400/400',
  unit: '1 piece',
  discountLabel: '20% OFF',
  badge: 'Kids Fav',
  inStock: true,
};

const sandKit: Product = {
  id: 'sph-p007',
  name: 'Step2 Sandbox & Digger Set',
  price: 1499,
  originalPrice: 1999,
  imageUrl: 'https://picsum.photos/seed/sand7/400/400',
  unit: '1 set',
  discountLabel: '25% OFF',
  inStock: true,
};

const mango: Product = {
  id: 'sph-p008',
  name: 'Real Alphonso Mango Snack Pouch',
  price: 79,
  imageUrl: 'https://picsum.photos/seed/mango8/400/400',
  unit: '100 g pack',
  badge: 'Summer Special',
  inStock: true,
};

const frozenPops: Product = {
  id: 'sph-p009',
  name: 'Healthy Harvest Frozen Fruit Pops',
  price: 149,
  originalPrice: 199,
  imageUrl: 'https://picsum.photos/seed/pops9/400/400',
  unit: 'Pack of 6',
  discountLabel: '25% OFF',
  badge: 'No Sugar',
  inStock: true,
};

const coconutDrink: Product = {
  id: 'sph-p010',
  name: 'Cocofly Coconut Water Tetra Pack',
  price: 89,
  imageUrl: 'https://picsum.photos/seed/coconut10/400/400',
  unit: '200 ml',
  inStock: true,
};

const slipSlide: Product = {
  id: 'sph-p011',
  name: 'Fisher-Price Splash Pad Slip & Slide',
  price: 899,
  originalPrice: 1199,
  imageUrl: 'https://picsum.photos/seed/slide11/400/400',
  unit: '4.5 m mat',
  discountLabel: '25% OFF',
  badge: 'Top Seller',
  inStock: true,
};

const armFloats: Product = {
  id: 'sph-p012',
  name: 'Bestway Kids Arm Float Bands',
  price: 149,
  imageUrl: 'https://picsum.photos/seed/float12/400/400',
  unit: 'Pair',
  badge: 'Safety',
  inStock: true,
};

const swimGoggles: Product = {
  id: 'sph-p013',
  name: 'Speedo Skoogle Kids Swim Goggles',
  price: 349,
  originalPrice: 449,
  imageUrl: 'https://picsum.photos/seed/goggle13/400/400',
  unit: 'Age 2-6',
  discountLabel: '22% OFF',
  inStock: true,
};

const beachBall: Product = {
  id: 'sph-p014',
  name: 'Intex Giant Inflatable Beach Ball',
  price: 199,
  imageUrl: 'https://picsum.photos/seed/beach14/400/400',
  unit: '61 cm dia',
  badge: 'Fun',
  inStock: true,
};

const outdoorMat: Product = {
  id: 'sph-p015',
  name: 'Quechua Waterproof Picnic Mat',
  price: 499,
  originalPrice: 699,
  imageUrl: 'https://picsum.photos/seed/mat15/400/400',
  unit: '150×150 cm',
  discountLabel: '29% OFF',
  inStock: true,
};

const frisbee: Product = {
  id: 'sph-p016',
  name: 'Discraft Ultra-Star 175 g Frisbee',
  price: 299,
  imageUrl: 'https://picsum.photos/seed/frisbee16/400/400',
  unit: '1 piece',
  inStock: true,
};

const sprayFan: Product = {
  id: 'sph-p017',
  name: 'Cool n Cool Misting Spray Fan',
  price: 349,
  originalPrice: 449,
  imageUrl: 'https://picsum.photos/seed/fan17/400/400',
  unit: '1 piece',
  discountLabel: '22% OFF',
  badge: 'Beat the Heat',
  inStock: true,
};

const sunhat: Product = {
  id: 'sph-p018',
  name: 'UV Skinz Kids Bucket Hat UPF 50+',
  price: 299,
  imageUrl: 'https://picsum.photos/seed/hat18/400/400',
  unit: 'Age 2-5',
  badge: 'UV Shield',
  inStock: true,
};

const trampoline: Product = {
  id: 'sph-p019',
  name: 'Baybee Mini Kids Trampoline',
  price: 2999,
  originalPrice: 3999,
  imageUrl: 'https://picsum.photos/seed/trampoline19/400/400',
  unit: '1 piece',
  discountLabel: '25% OFF',
  badge: 'Safety Net',
  inStock: true,
};

const lemonadeMix: Product = {
  id: 'sph-p020',
  name: 'Tang Lemonade Instant Drink Mix',
  price: 59,
  imageUrl: 'https://picsum.photos/seed/lemon20/400/400',
  unit: '50 g sachet',
  badge: 'Summer Staple',
  inStock: true,
};

const waterBalloons: Product = {
  id: 'sph-p021',
  name: 'Zuru Bunch O Balloons — 100 Pcs',
  price: 299,
  originalPrice: 399,
  imageUrl: 'https://picsum.photos/seed/balloon21/400/400',
  unit: '100 balloons',
  discountLabel: '25% OFF',
  badge: 'Splash Fun',
  inStock: true,
};

const campingSet: Product = {
  id: 'sph-p022',
  name: 'Columbia Kids Camping Starter Set',
  price: 1799,
  originalPrice: 2299,
  imageUrl: 'https://picsum.photos/seed/camp22/400/400',
  unit: '1 set',
  discountLabel: '22% OFF',
  badge: 'Outdoor',
  inStock: true,
};

const rocketSoaker: Product = {
  id: 'sph-p023',
  name: 'Aqua Fun Rocket Soaker Refill',
  price: 179,
  imageUrl: 'https://picsum.photos/seed/rocket23/400/400',
  unit: '2 rockets',
  inStock: true,
};

const tropicalJuice: Product = {
  id: 'sph-p024',
  name: 'B Natural Tropical Fruit Juice Box',
  price: 35,
  imageUrl: 'https://picsum.photos/seed/juice24/400/400',
  unit: '200 ml',
  inStock: true,
};

const sandwichKit: Product = {
  id: 'sph-p025',
  name: 'Little Foodie Outdoor Snack Kit',
  price: 199,
  imageUrl: 'https://picsum.photos/seed/snackkit25/400/400',
  unit: '1 kit',
  badge: 'Yummy',
  inStock: true,
};

const gardenerKit: Product = {
  id: 'sph-p026',
  name: 'My Little Garden Kids Planting Kit',
  price: 449,
  originalPrice: 599,
  imageUrl: 'https://picsum.photos/seed/garden26/400/400',
  unit: '1 set',
  discountLabel: '25% OFF',
  badge: 'Eco Fun',
  inStock: true,
};

const chalks: Product = {
  id: 'sph-p027',
  name: 'Sidewalk Chalk 16 Colours Bucket',
  price: 199,
  imageUrl: 'https://picsum.photos/seed/chalk27/400/400',
  unit: '16 sticks',
  badge: 'Outdoor Art',
  inStock: true,
};

const animalTicket: Product = {
  id: 'sph-p028',
  name: 'Kiddo Petting Zoo — Family Pass',
  price: 799,
  originalPrice: 999,
  imageUrl: 'https://picsum.photos/seed/zoopass28/400/400',
  unit: '2 adults + 2 kids',
  discountLabel: '20% OFF',
  badge: 'Best Value',
  action: { type: 'OPEN_CATEGORY', payload: { categoryId: 'petting-zoo', title: 'Petting Zoo Tickets' } },
  inStock: true,
};

const iceCreamKit: Product = {
  id: 'sph-p029',
  name: 'Zoku Quick Pop Maker Kit',
  price: 699,
  originalPrice: 899,
  imageUrl: 'https://picsum.photos/seed/icecream29/400/400',
  unit: '1 kit',
  discountLabel: '22% OFF',
  badge: 'Make at Home',
  inStock: true,
};

const kite: Product = {
  id: 'sph-p030',
  name: 'Josh & Company Delta Kite',
  price: 249,
  imageUrl: 'https://picsum.photos/seed/kite30/400/400',
  unit: '1 piece',
  badge: 'Easy Fly',
  inStock: true,
};

// ---------------------------------------------------------------------------
// Blocks
// ---------------------------------------------------------------------------

const blocks: (BannerHeroBlock | ProductGrid2x2Block | DynamicCollectionBlock | { id: string; type: string; [key: string]: unknown })[] = [
  // 1 — Hero banner
  {
    id: 'sph-b001',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/sphhero1/800/400',
    title: 'Summer Playhouse is Open!',
    subtitle: 'Splash, play & explore all season long',
    ctaLabel: 'Join the Fun',
    action: { type: 'DEEP_LINK', payload: { url: 'kiddo://campaigns/summer-playhouse' } },
    backgroundColor: '#E0F7FA',
  } satisfies BannerHeroBlock,

  // 2 — Water Play grid
  {
    id: 'sph-b002',
    type: 'PRODUCT_GRID_2X2',
    title: 'Water Play Essentials',
    products: [waterGun, slipSlide, waterBalloons, bubbleMachine],
  } satisfies ProductGrid2x2Block,

  // 3 — Water Play collection
  {
    id: 'sph-b003',
    type: 'DYNAMIC_COLLECTION',
    title: 'Water Play Fun',
    subtitle: 'Turn every day into a pool party',
    accentColor: '#0277BD',
    products: [waterGun, inflatablerPool, armFloats, rocketSoaker, beachBall, bubbleMachine],
  } satisfies DynamicCollectionBlock,

  // 4 — Banner
  {
    id: 'sph-b004',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/sphhero2/800/400',
    title: 'Visit the Petting Zoo',
    subtitle: 'Book your tickets before they sell out',
    ctaLabel: 'Book Now',
    action: { type: 'OPEN_CATEGORY', payload: { categoryId: 'petting-zoo', title: 'Petting Zoo Tickets' } },
    backgroundColor: '#E8F5E9',
  } satisfies BannerHeroBlock,

  // 5 — Petting Zoo grid (MUST include product with OPEN_CATEGORY petting-zoo action)
  {
    id: 'sph-b005',
    type: 'PRODUCT_GRID_2X2',
    title: 'Petting Zoo Tickets',
    products: [pettingZooTicket, animalTicket, swimGoggles, armFloats],
  } satisfies ProductGrid2x2Block,

  // 6 — Petting Zoo Tickets collection
  {
    id: 'sph-b006',
    type: 'DYNAMIC_COLLECTION',
    title: 'Petting Zoo Tickets',
    subtitle: 'Magical animal encounters for little ones',
    accentColor: '#00BCD4',
    products: [pettingZooTicket, animalTicket],
  } satisfies DynamicCollectionBlock,

  // 7 — Banner
  {
    id: 'sph-b007',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/sphhero3/800/400',
    title: 'Summer Snack Attack',
    subtitle: 'Cool treats for hot days',
    ctaLabel: 'Shop Snacks',
    action: { type: 'OPEN_CATEGORY', payload: { categoryId: 'summer-snacks', title: 'Summer Snacks' } },
    backgroundColor: '#FFF8E1',
  } satisfies BannerHeroBlock,

  // 8 — Summer Snacks grid
  {
    id: 'sph-b008',
    type: 'PRODUCT_GRID_2X2',
    title: 'Summer Snacks',
    products: [mango, frozenPops, tropicalJuice, lemonadeMix],
  } satisfies ProductGrid2x2Block,

  // 9 — Summer Snacks collection
  {
    id: 'sph-b009',
    type: 'DYNAMIC_COLLECTION',
    title: 'Summer Snacks',
    subtitle: 'Healthy & refreshing bites',
    accentColor: '#FF6F00',
    products: [mango, frozenPops, coconutDrink, lemonadeMix, tropicalJuice, sandwichKit],
  } satisfies DynamicCollectionBlock,

  // 10 — UNKNOWN block for resilience testing
  {
    id: 'sph-b010',
    type: 'NEW_COMPONENT_V2',
    title: 'Summer Activity Feed',
    componentVersion: 2,
    config: { layout: 'grid', maxItems: 8, theme: 'ocean' },
  },

  // 11 — Banner
  {
    id: 'sph-b011',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/sphhero4/800/400',
    title: 'Go Outside & Play',
    subtitle: 'Kites, frisbees & outdoor adventures',
    ctaLabel: 'Shop Outdoor',
    action: { type: 'OPEN_CATEGORY', payload: { categoryId: 'outdoor-games', title: 'Outdoor Games' } },
  } satisfies BannerHeroBlock,

  // 12 — Outdoor Adventures grid
  {
    id: 'sph-b012',
    type: 'PRODUCT_GRID_2X2',
    title: 'Outdoor Adventures',
    products: [frisbee, kite, chalks, beachBall],
  } satisfies ProductGrid2x2Block,

  // 13 — Outdoor Adventures collection
  {
    id: 'sph-b013',
    type: 'DYNAMIC_COLLECTION',
    title: 'Outdoor Adventures',
    subtitle: 'Because screens can wait',
    accentColor: '#0277BD',
    products: [frisbee, kite, chalks, campingSet, gardenerKit, outdoorMat],
  } satisfies DynamicCollectionBlock,

  // 14 — Banner
  {
    id: 'sph-b014',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/sphhero5/800/400',
    title: 'Sun-Safe Essentials',
    subtitle: 'SPF, hats & goggles for safe fun',
    ctaLabel: 'Shop Suncare',
    action: { type: 'OPEN_CATEGORY', payload: { categoryId: 'sun-care', title: 'Sun Care' } },
    backgroundColor: '#FFF3E0',
  } satisfies BannerHeroBlock,

  // 15 — Swimwear & Suncare grid
  {
    id: 'sph-b015',
    type: 'PRODUCT_GRID_2X2',
    title: 'Swim & Suncare',
    products: [sunscreen, swimwear, swimGoggles, sunhat],
  } satisfies ProductGrid2x2Block,

  // 16 — Collection
  {
    id: 'sph-b016',
    type: 'DYNAMIC_COLLECTION',
    title: 'Pool & Splash Zone',
    subtitle: 'Every splash counts',
    accentColor: '#0277BD',
    products: [inflatablerPool, slipSlide, waterBalloons, rocketSoaker, armFloats, beachBall],
  } satisfies DynamicCollectionBlock,

  // 17 — Banner
  {
    id: 'sph-b017',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/sphhero6/800/400',
    title: 'Backyard Bounce Fun',
    subtitle: 'Trampolines & swing sets',
    ctaLabel: 'Explore Play Gear',
    action: { type: 'OPEN_CATEGORY', payload: { categoryId: 'backyard-play', title: 'Backyard Play' } },
  } satisfies BannerHeroBlock,

  // 18 — Grid
  {
    id: 'sph-b018',
    type: 'PRODUCT_GRID_2X2',
    title: 'Active Play',
    products: [trampoline, sandKit, slipSlide, outdoorMat],
  } satisfies ProductGrid2x2Block,

  // 19 — Collection
  {
    id: 'sph-b019',
    type: 'DYNAMIC_COLLECTION',
    title: 'Cool Treats & Drinks',
    subtitle: 'Keep the energy up all day',
    accentColor: '#FF6F00',
    products: [coconutDrink, iceCreamKit, frozenPops, mango, lemonadeMix, tropicalJuice],
  } satisfies DynamicCollectionBlock,

  // 20 — Banner
  {
    id: 'sph-b020',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/sphhero7/800/400',
    title: 'Cool Off with Ice Pops',
    subtitle: 'Make your own frozen treats at home',
    ctaLabel: 'Shop Ice Pop Kits',
    action: { type: 'OPEN_CATEGORY', payload: { categoryId: 'ice-pop-kits', title: 'Ice Pop Kits' } },
    backgroundColor: '#E0F7FA',
  } satisfies BannerHeroBlock,

  // 21 — Grid
  {
    id: 'sph-b021',
    type: 'PRODUCT_GRID_2X2',
    title: 'Garden & Nature Play',
    products: [gardenerKit, chalks, sandKit, campingSet],
  } satisfies ProductGrid2x2Block,

  // 22 — Collection
  {
    id: 'sph-b022',
    type: 'DYNAMIC_COLLECTION',
    title: 'Garden & Nature Fun',
    subtitle: 'From sunrise to sunset',
    accentColor: '#0277BD',
    products: [kite, frisbee, campingSet, outdoorMat, gardenerKit],
  } satisfies DynamicCollectionBlock,

  // 23 — Banner
  {
    id: 'sph-b023',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/sphhero8/800/400',
    title: 'Family Day Deals',
    subtitle: 'Bundle water gear & save 20%',
    ctaLabel: 'View Bundles',
    action: { type: 'DEEP_LINK', payload: { url: 'kiddo://offers/summer-bundle' } },
  } satisfies BannerHeroBlock,

  // 24 — Grid
  {
    id: 'sph-b024',
    type: 'PRODUCT_GRID_2X2',
    title: 'Misting & Cooling',
    products: [sprayFan, sunscreen, sunhat, swimwear],
  } satisfies ProductGrid2x2Block,

  // 25 — Collection
  {
    id: 'sph-b025',
    type: 'DYNAMIC_COLLECTION',
    title: 'Family Zoo Passes',
    subtitle: 'Limited slots — book early',
    accentColor: '#00BCD4',
    products: [pettingZooTicket, animalTicket],
  } satisfies DynamicCollectionBlock,

  // 26 — Banner
  {
    id: 'sph-b026',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/sphhero9/800/400',
    title: 'Free Delivery on Orders ₹499+',
    subtitle: 'Summer fun, zero delivery fees',
    ctaLabel: 'Shop Now',
    action: { type: 'DEEP_LINK', payload: { url: 'kiddo://offers/free-delivery' } },
    backgroundColor: '#B2EBF2',
  } satisfies BannerHeroBlock,

  // 27 — Grid
  {
    id: 'sph-b027',
    type: 'PRODUCT_GRID_2X2',
    title: 'Splash Accessories',
    products: [swimGoggles, armFloats, waterBalloons, rocketSoaker],
  } satisfies ProductGrid2x2Block,

  // 28 — Collection
  {
    id: 'sph-b028',
    type: 'DYNAMIC_COLLECTION',
    title: 'Splash Gear',
    subtitle: 'Make a splash this summer',
    accentColor: '#0277BD',
    products: [waterGun, bubbleMachine, slipSlide, inflatablerPool, beachBall],
  } satisfies DynamicCollectionBlock,

  // 29 — Banner
  {
    id: 'sph-b029',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/sphhero10/800/400',
    title: 'Weekend Adventure Awaits',
    subtitle: 'Pack up, head out, have fun',
    ctaLabel: 'Explore',
    action: { type: 'OPEN_CATEGORY', payload: { categoryId: 'outdoor-games', title: 'Outdoor Adventures' } },
  } satisfies BannerHeroBlock,

  // 30 — Grid
  {
    id: 'sph-b030',
    type: 'PRODUCT_GRID_2X2',
    title: 'Beach Day Essentials',
    products: [beachBall, sunscreen, sunhat, frisbee],
  } satisfies ProductGrid2x2Block,

  // 31 — Collection
  {
    id: 'sph-b031',
    type: 'DYNAMIC_COLLECTION',
    title: 'Sunshine Snacks & Sips',
    subtitle: 'Taste the season',
    accentColor: '#FF6F00',
    products: [sandwichKit, iceCreamKit, coconutDrink, frozenPops, mango],
  } satisfies DynamicCollectionBlock,

  // 32 — Banner
  {
    id: 'sph-b032',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/sphhero11/800/400',
    title: 'Get Active This Summer',
    subtitle: 'Bikes, balls & activity sets',
    ctaLabel: 'Get Moving',
    action: { type: 'OPEN_CATEGORY', payload: { categoryId: 'active-play', title: 'Active Play' } },
    backgroundColor: '#E0F7FA',
  } satisfies BannerHeroBlock,

  // 33 — Grid
  {
    id: 'sph-b033',
    type: 'PRODUCT_GRID_2X2',
    title: 'Jump & Bounce',
    products: [trampoline, bubbleMachine, sandKit, waterBalloons],
  } satisfies ProductGrid2x2Block,

  // 34 — Outdoor Adventures collection
  {
    id: 'sph-b034',
    type: 'DYNAMIC_COLLECTION',
    title: 'Summer Bucket List',
    subtitle: 'Summer bucket list, checked',
    accentColor: '#0277BD',
    products: [campingSet, gardenerKit, frisbee, kite, chalks, outdoorMat],
  } satisfies DynamicCollectionBlock,

  // 35 — Banner
  {
    id: 'sph-b035',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/sphhero12/800/400',
    title: 'All of Summer in One Store',
    subtitle: 'Your ultimate summer shopping destination',
    ctaLabel: 'Browse All',
    action: { type: 'DEEP_LINK', payload: { url: 'kiddo://campaigns/summer-playhouse/all' } },
    backgroundColor: '#E0F7FA',
  } satisfies BannerHeroBlock,
];

export const summerPlayhousePayload: SduiPayload = {
  version: '1.0.0',
  campaignId: 'summer-playhouse',
  theme: {
    primary: '#0277BD',
    secondary: '#00BCD4',
    background: '#E0F7FA',
    surface: '#FFFFFF',
    textPrimary: '#01579B',
    textSecondary: '#4DD0E1',
    ctaText: '#FFFFFF',
    divider: '#B2EBF2',
    badge: '#00BCD4',
    badgeText: '#FFFFFF',
  },
  blocks: blocks as unknown as SduiPayload['blocks'],
  overlay: {
    animationUrl: 'https://assets.kiddo.app/lottie/water-splash.json',
    loop: true,
  },
};
