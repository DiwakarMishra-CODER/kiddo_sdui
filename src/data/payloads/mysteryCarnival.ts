import type {
  SduiPayload,
  BannerHeroBlock,
  ProductGrid2x2Block,
  DynamicCollectionBlock,
  Product,
} from '@/types';

// ---------------------------------------------------------------------------
// Products — mystery gift boxes, carnival games, confetti, surprise toys, snacks
// ---------------------------------------------------------------------------

const mysteryBoxSmall: Product = {
  id: 'mc-p001',
  name: 'Kiddo Mystery Gift Box — Small',
  price: 299,
  originalPrice: 499,
  imageUrl: 'https://picsum.photos/seed/mysterybox1/400/400',
  unit: '1 box',
  discountLabel: '40% OFF',
  badge: 'Surprise!',
  inStock: true,
};

const mysteryBoxLarge: Product = {
  id: 'mc-p002',
  name: 'Kiddo Mystery Gift Box — Large',
  price: 599,
  originalPrice: 999,
  imageUrl: 'https://picsum.photos/seed/carnival2/400/400',
  unit: '1 box',
  discountLabel: '40% OFF',
  badge: 'Best Value',
  inStock: true,
};

const confettiCannon: Product = {
  id: 'mc-p003',
  name: 'Party Popperz Confetti Cannon',
  price: 199,
  imageUrl: 'https://picsum.photos/seed/confetti3/400/400',
  unit: 'Pack of 4',
  badge: 'Party Must',
  inStock: true,
};

const ringTossGame: Product = {
  id: 'mc-p004',
  name: 'Classic Ring Toss Carnival Game',
  price: 349,
  originalPrice: 449,
  imageUrl: 'https://picsum.photos/seed/ringtoss4/400/400',
  unit: '1 set',
  discountLabel: '22% OFF',
  badge: 'Family Game',
  inStock: true,
};

const surpriseBag: Product = {
  id: 'mc-p005',
  name: 'Carnival Surprise Goodie Bag',
  price: 149,
  imageUrl: 'https://picsum.photos/seed/surprise5/400/400',
  unit: '1 bag',
  badge: 'Surprise!',
  inStock: true,
};

const duckPondGame: Product = {
  id: 'mc-p006',
  name: 'Duck Pond Fishing Carnival Game',
  price: 499,
  originalPrice: 699,
  imageUrl: 'https://picsum.photos/seed/duckpond6/400/400',
  unit: '1 set',
  discountLabel: '29% OFF',
  badge: 'Kids Fav',
  inStock: true,
};

const candyFloss: Product = {
  id: 'mc-p007',
  name: 'CandyFest Cotton Candy Machine',
  price: 999,
  originalPrice: 1299,
  imageUrl: 'https://picsum.photos/seed/candyfloss7/400/400',
  unit: '1 machine',
  discountLabel: '23% OFF',
  badge: 'Party Star',
  inStock: true,
};

const popcornBags: Product = {
  id: 'mc-p008',
  name: 'Carnival Stripe Popcorn Bags',
  price: 79,
  imageUrl: 'https://picsum.photos/seed/popcorn8/400/400',
  unit: 'Pack of 20',
  badge: 'Carnival Vibe',
  inStock: true,
};

const surpriseToy1: Product = {
  id: 'mc-p009',
  name: 'LOL Surprise! OMG Mystery Doll',
  price: 699,
  originalPrice: 899,
  imageUrl: 'https://picsum.photos/seed/lol9/400/400',
  unit: '1 doll',
  discountLabel: '22% OFF',
  badge: 'Trending',
  inStock: true,
};

const squishmallow: Product = {
  id: 'mc-p010',
  name: 'Squishmallow Mystery Plush 5"',
  price: 299,
  imageUrl: 'https://picsum.photos/seed/squish10/400/400',
  unit: '1 plush',
  badge: 'Soft & Squishy',
  inStock: true,
};

const carnivalWheelGame: Product = {
  id: 'mc-p011',
  name: 'Spin the Prize Wheel Carnival Kit',
  price: 799,
  originalPrice: 999,
  imageUrl: 'https://picsum.photos/seed/spinwheel11/400/400',
  unit: '1 set',
  discountLabel: '20% OFF',
  badge: 'Party Hit',
  inStock: true,
};

const mysteryCardPack: Product = {
  id: 'mc-p012',
  name: 'Pokémon Mystery Card Booster Pack',
  price: 199,
  imageUrl: 'https://picsum.photos/seed/pokemon12/400/400',
  unit: '10 cards',
  badge: 'Rare Inside?',
  inStock: true,
};

const confettiKit: Product = {
  id: 'mc-p013',
  name: 'Rainbow Confetti Party Kit',
  price: 249,
  originalPrice: 349,
  imageUrl: 'https://picsum.photos/seed/confettikit13/400/400',
  unit: '50 g + popper',
  discountLabel: '29% OFF',
  badge: 'Party Ready',
  inStock: true,
};

const balloonTwist: Product = {
  id: 'mc-p014',
  name: 'Carnival Balloon Twisting Set',
  price: 349,
  imageUrl: 'https://picsum.photos/seed/balloon14/400/400',
  unit: '100 balloons + pump',
  badge: 'Fun Skill',
  inStock: true,
};

const surprisePuzzle: Product = {
  id: 'mc-p015',
  name: 'Mystery Animal 3D Puzzle Box',
  price: 399,
  originalPrice: 499,
  imageUrl: 'https://picsum.photos/seed/puzzle15/400/400',
  unit: '1 puzzle box',
  discountLabel: '20% OFF',
  badge: 'Brain Teaser',
  inStock: true,
};

const carnivalFoods: Product = {
  id: 'mc-p016',
  name: 'Carnival Snack Mix — Caramel Corn',
  price: 129,
  imageUrl: 'https://picsum.photos/seed/caramel16/400/400',
  unit: '150 g bag',
  badge: 'Yum!',
  inStock: true,
};

const mysteryBoxPremium: Product = {
  id: 'mc-p017',
  name: 'Kiddo Mystery Gift Box — Premium',
  price: 999,
  originalPrice: 1499,
  imageUrl: 'https://picsum.photos/seed/premium17/400/400',
  unit: '1 box',
  discountLabel: '33% OFF',
  badge: 'Wow Factor',
  inStock: true,
};

const bottleShootGame: Product = {
  id: 'mc-p018',
  name: 'Bean Bag Bottle Knock Down Game',
  price: 299,
  imageUrl: 'https://picsum.photos/seed/bottlegame18/400/400',
  unit: '6 bottles + bags',
  badge: 'Classic',
  inStock: true,
};

const twisterGame: Product = {
  id: 'mc-p019',
  name: 'Hasbro Twister Party Game',
  price: 699,
  originalPrice: 849,
  imageUrl: 'https://picsum.photos/seed/twister19/400/400',
  unit: '1 game',
  discountLabel: '18% OFF',
  badge: 'Crowd Pleaser',
  inStock: true,
};

const surpriseMiniBlind: Product = {
  id: 'mc-p020',
  name: 'Mini Brands Series 3 Blind Bag',
  price: 249,
  imageUrl: 'https://picsum.photos/seed/minibrand20/400/400',
  unit: '1 bag',
  badge: 'Collectible',
  inStock: true,
};

const magicKit: Product = {
  id: 'mc-p021',
  name: 'Carnival Magician Starter Kit',
  price: 549,
  originalPrice: 749,
  imageUrl: 'https://picsum.photos/seed/magic21/400/400',
  unit: '15 tricks',
  discountLabel: '27% OFF',
  badge: 'Abracadabra!',
  inStock: true,
};

const facepaints: Product = {
  id: 'mc-p022',
  name: 'Carnival Face Paint Palette',
  price: 299,
  imageUrl: 'https://picsum.photos/seed/facepaint22/400/400',
  unit: '12 colours',
  badge: 'Safe Formula',
  inStock: true,
};

const hotdogBuns: Product = {
  id: 'mc-p023',
  name: 'Carnival Style Cheesy Puffs',
  price: 59,
  imageUrl: 'https://picsum.photos/seed/puffs23/400/400',
  unit: '70 g pack',
  inStock: true,
};

const gummyCandies: Product = {
  id: 'mc-p024',
  name: 'Haribo Goldbears Gummy Candy Mix',
  price: 99,
  imageUrl: 'https://picsum.photos/seed/gummy24/400/400',
  unit: '175 g bag',
  badge: 'Carnival Treat',
  inStock: true,
};

const surpriseFigurine: Product = {
  id: 'mc-p025',
  name: 'Kinder Surprise Egg Figurines Pack',
  price: 299,
  imageUrl: 'https://picsum.photos/seed/kinder25/400/400',
  unit: 'Pack of 3',
  badge: 'Toy Inside!',
  inStock: true,
};

const glowSticks: Product = {
  id: 'mc-p026',
  name: 'LED Glow Sticks Carnival Pack',
  price: 199,
  imageUrl: 'https://picsum.photos/seed/glow26/400/400',
  unit: 'Pack of 10',
  badge: 'Lights Up',
  inStock: true,
};

const fortuneTeller: Product = {
  id: 'mc-p027',
  name: 'My Carnival Fortune Teller Kit',
  price: 179,
  imageUrl: 'https://picsum.photos/seed/fortune27/400/400',
  unit: '1 kit',
  badge: 'Fun Activity',
  inStock: true,
};

const candyApple: Product = {
  id: 'mc-p028',
  name: 'Choco Dipped Candy Apple Kit',
  price: 149,
  imageUrl: 'https://picsum.photos/seed/candyapple28/400/400',
  unit: 'Makes 8',
  badge: 'DIY Fun',
  inStock: true,
};

const pinataSet: Product = {
  id: 'mc-p029',
  name: 'Star Piñata Kit with Filler',
  price: 449,
  originalPrice: 599,
  imageUrl: 'https://picsum.photos/seed/pinata29/400/400',
  unit: '1 piñata + 200 g filler',
  discountLabel: '25% OFF',
  badge: 'Crowd Pleaser',
  inStock: true,
};

const mysteryBoxFamily: Product = {
  id: 'mc-p030',
  name: 'Kiddo Mystery Gift Box — Family',
  price: 1499,
  originalPrice: 2499,
  imageUrl: 'https://picsum.photos/seed/familybox30/400/400',
  unit: '4 boxes',
  discountLabel: '40% OFF',
  badge: 'Mega Surprise',
  inStock: true,
};

// ---------------------------------------------------------------------------
// Blocks
// ---------------------------------------------------------------------------

const blocks: (BannerHeroBlock | ProductGrid2x2Block | DynamicCollectionBlock | { id: string; type: string; [key: string]: unknown })[] = [
  // 1 — Hero banner
  {
    id: 'mc-b001',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/mchero1/800/400',
    title: 'The Mystery Carnival is Here!',
    subtitle: 'Surprises, games & prizes galore',
    ctaLabel: 'Step Right In',
    action: { type: 'DEEP_LINK', payload: { url: 'kiddo://campaigns/mystery-carnival' } },
    backgroundColor: '#FFF8E1',
  } satisfies BannerHeroBlock,

  // 2 — Mystery Gift Boxes grid
  {
    id: 'mc-b002',
    type: 'PRODUCT_GRID_2X2',
    title: 'Mystery Gift Boxes',
    products: [mysteryBoxSmall, mysteryBoxLarge, mysteryBoxPremium, mysteryBoxFamily],
  } satisfies ProductGrid2x2Block,

  // 3 — Mystery Gift Boxes collection
  {
    id: 'mc-b003',
    type: 'DYNAMIC_COLLECTION',
    title: 'Mystery Gift Boxes',
    subtitle: 'Open one — you never know what\'s inside!',
    accentColor: '#C62828',
    products: [mysteryBoxSmall, mysteryBoxLarge, mysteryBoxPremium, mysteryBoxFamily],
  } satisfies DynamicCollectionBlock,

  // 4 — Apply Coupon Banner
  {
    id: 'mc-b004',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/mchero2/800/400',
    title: 'Unlock Your Mystery Discount',
    subtitle: 'Apply CARNIVAL2024 for an extra surprise off',
    ctaLabel: 'Apply Coupon',
    action: { type: 'APPLY_MYSTERY_GIFT_COUPON', payload: { couponCode: 'CARNIVAL2024' } },
    backgroundColor: '#FFECB3',
  } satisfies BannerHeroBlock,

  // 5 — Carnival Games grid
  {
    id: 'mc-b005',
    type: 'PRODUCT_GRID_2X2',
    title: 'Carnival Games',
    products: [ringTossGame, duckPondGame, carnivalWheelGame, bottleShootGame],
  } satisfies ProductGrid2x2Block,

  // 6 — Carnival Games collection
  {
    id: 'mc-b006',
    type: 'DYNAMIC_COLLECTION',
    title: 'Carnival Games',
    subtitle: 'Bring the carnival home',
    accentColor: '#FF8F00',
    products: [ringTossGame, duckPondGame, carnivalWheelGame, bottleShootGame, twisterGame, magicKit],
  } satisfies DynamicCollectionBlock,

  // 7 — Banner
  {
    id: 'mc-b007',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/mchero3/800/400',
    title: 'Surprise Bags — Open & Discover',
    subtitle: 'Curated surprises for every age',
    ctaLabel: 'Shop Surprise Bags',
    action: { type: 'OPEN_CATEGORY', payload: { categoryId: 'surprise-bags', title: 'Surprise Bags' } },
    backgroundColor: '#FFF8E1',
  } satisfies BannerHeroBlock,

  // 8 — Surprise Bags grid
  {
    id: 'mc-b008',
    type: 'PRODUCT_GRID_2X2',
    title: 'Surprise Bags',
    products: [surpriseBag, surpriseToy1, surpriseMiniBlind, surpriseFigurine],
  } satisfies ProductGrid2x2Block,

  // 9 — Surprise Bags collection
  {
    id: 'mc-b009',
    type: 'DYNAMIC_COLLECTION',
    title: 'Surprise Bags',
    subtitle: 'Every bag holds a secret',
    accentColor: '#C62828',
    products: [surpriseBag, surpriseToy1, surpriseMiniBlind, surpriseFigurine, squishmallow, mysteryCardPack],
  } satisfies DynamicCollectionBlock,

  // 10 — UNKNOWN block for resilience testing
  {
    id: 'mc-b010',
    type: 'NEW_COMPONENT_V2',
    title: 'Carnival Leaderboard',
    componentVersion: 2,
    config: { layout: 'scoreboard', animate: true, couponCode: 'CARNIVAL2024' },
  },

  // 11 — Banner (second coupon CTA)
  {
    id: 'mc-b011',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/mchero4/800/400',
    title: 'Extra 15% Off Today Only',
    subtitle: 'Use code CARNIVAL2024 at checkout',
    ctaLabel: 'Apply Coupon',
    action: { type: 'APPLY_MYSTERY_GIFT_COUPON', payload: { couponCode: 'CARNIVAL2024' } },
    backgroundColor: '#FCE4EC',
  } satisfies BannerHeroBlock,

  // 12 — Grid
  {
    id: 'mc-b012',
    type: 'PRODUCT_GRID_2X2',
    title: 'Confetti & Party Fun',
    products: [confettiCannon, confettiKit, glowSticks, balloonTwist],
  } satisfies ProductGrid2x2Block,

  // 13 — Collection
  {
    id: 'mc-b013',
    type: 'DYNAMIC_COLLECTION',
    title: 'Gift Box Picks',
    subtitle: 'More boxes, more surprises',
    accentColor: '#C62828',
    products: [mysteryBoxSmall, mysteryBoxLarge, mysteryBoxPremium, surprisePuzzle, squishmallow],
  } satisfies DynamicCollectionBlock,

  // 14 — Banner
  {
    id: 'mc-b014',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/mchero5/800/400',
    title: 'Collectibles & Blind Bags',
    subtitle: 'Will you get the rare one?',
    ctaLabel: 'Collect Them All',
    action: { type: 'OPEN_CATEGORY', payload: { categoryId: 'collectibles', title: 'Collectibles' } },
  } satisfies BannerHeroBlock,

  // 15 — Grid
  {
    id: 'mc-b015',
    type: 'PRODUCT_GRID_2X2',
    title: 'Collectibles & Blind Bags',
    products: [mysteryCardPack, surpriseMiniBlind, surpriseFigurine, squishmallow],
  } satisfies ProductGrid2x2Block,

  // 16 — Collection
  {
    id: 'mc-b016',
    type: 'DYNAMIC_COLLECTION',
    title: 'Game Night Hits',
    subtitle: 'Play all day, win all night',
    accentColor: '#FF8F00',
    products: [pinataSet, balloonTwist, fortuneTeller, magicKit, twisterGame],
  } satisfies DynamicCollectionBlock,

  // 17 — Banner
  {
    id: 'mc-b017',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/mchero6/800/400',
    title: 'Piñata Party Time',
    subtitle: 'Fill it, break it, love it',
    ctaLabel: 'Shop Piñatas',
    action: { type: 'OPEN_CATEGORY', payload: { categoryId: 'pinatas', title: 'Piñatas' } },
    backgroundColor: '#FFF3E0',
  } satisfies BannerHeroBlock,

  // 18 — Grid
  {
    id: 'mc-b018',
    type: 'PRODUCT_GRID_2X2',
    title: 'Party Favourites',
    products: [pinataSet, candyFloss, popcornBags, confettiCannon],
  } satisfies ProductGrid2x2Block,

  // 19 — Collection
  {
    id: 'mc-b019',
    type: 'DYNAMIC_COLLECTION',
    title: 'Party Favour Bags',
    subtitle: 'Perfect party favours',
    accentColor: '#C62828',
    products: [surpriseBag, mysteryCardPack, glowSticks, fortuneTeller, facepaints],
  } satisfies DynamicCollectionBlock,

  // 20 — Banner
  {
    id: 'mc-b020',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/mchero7/800/400',
    title: 'Carnival Snack Stop',
    subtitle: 'Popcorn, candy & more',
    ctaLabel: 'Grab a Snack',
    action: { type: 'OPEN_CATEGORY', payload: { categoryId: 'carnival-snacks', title: 'Carnival Snacks' } },
  } satisfies BannerHeroBlock,

  // 21 — Grid
  {
    id: 'mc-b021',
    type: 'PRODUCT_GRID_2X2',
    title: 'Carnival Snacks',
    products: [popcornBags, carnivalFoods, gummyCandies, candyApple],
  } satisfies ProductGrid2x2Block,

  // 22 — Collection
  {
    id: 'mc-b022',
    type: 'DYNAMIC_COLLECTION',
    title: 'Limited Edition Boxes',
    subtitle: 'Limited edition carnival boxes',
    accentColor: '#C62828',
    products: [mysteryBoxFamily, mysteryBoxPremium, mysteryBoxLarge, mysteryBoxSmall],
  } satisfies DynamicCollectionBlock,

  // 23 — Banner (third coupon CTA)
  {
    id: 'mc-b023',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/mchero8/800/400',
    title: 'Last Chance — Mystery Deal',
    subtitle: 'Code expires at midnight: CARNIVAL2024',
    ctaLabel: 'Apply Coupon',
    action: { type: 'APPLY_MYSTERY_GIFT_COUPON', payload: { couponCode: 'CARNIVAL2024' } },
    backgroundColor: '#FCE4EC',
  } satisfies BannerHeroBlock,

  // 24 — Grid
  {
    id: 'mc-b024',
    type: 'PRODUCT_GRID_2X2',
    title: 'Magic & Performance',
    products: [magicKit, facepaints, fortuneTeller, glowSticks],
  } satisfies ProductGrid2x2Block,

  // 25 — Collection
  {
    id: 'mc-b025',
    type: 'DYNAMIC_COLLECTION',
    title: 'Classic Carnival Stalls',
    subtitle: 'Every game is a winner',
    accentColor: '#FF8F00',
    products: [ringTossGame, duckPondGame, bottleShootGame, twisterGame, carnivalWheelGame],
  } satisfies DynamicCollectionBlock,

  // 26 — Banner
  {
    id: 'mc-b026',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/mchero9/800/400',
    title: 'Free Delivery on ₹499+',
    subtitle: 'Carnival fun without the delivery fee',
    ctaLabel: 'Shop Now',
    action: { type: 'DEEP_LINK', payload: { url: 'kiddo://offers/free-delivery' } },
    backgroundColor: '#FFF8E1',
  } satisfies BannerHeroBlock,

  // 27 — Grid
  {
    id: 'mc-b027',
    type: 'PRODUCT_GRID_2X2',
    title: 'Sweet Treats',
    products: [gummyCandies, carnivalFoods, hotdogBuns, candyApple],
  } satisfies ProductGrid2x2Block,

  // 28 — Collection
  {
    id: 'mc-b028',
    type: 'DYNAMIC_COLLECTION',
    title: 'Ultimate Surprise Collection',
    subtitle: 'Gift them a mystery they\'ll remember',
    accentColor: '#C62828',
    products: [surpriseBag, squishmallow, surpriseToy1, surprisePuzzle, surpriseFigurine],
  } satisfies DynamicCollectionBlock,

  // 29 — Banner
  {
    id: 'mc-b029',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/mchero10/800/400',
    title: 'Step Up to the Ring Toss',
    subtitle: 'Classic carnival games for the whole family',
    ctaLabel: 'Shop Games',
    action: { type: 'OPEN_CATEGORY', payload: { categoryId: 'carnival-games', title: 'Carnival Games' } },
  } satisfies BannerHeroBlock,

  // 30 — Grid
  {
    id: 'mc-b030',
    type: 'PRODUCT_GRID_2X2',
    title: 'Confetti Party',
    products: [confettiCannon, confettiKit, balloonTwist, pinataSet],
  } satisfies ProductGrid2x2Block,

  // 31 — Collection
  {
    id: 'mc-b031',
    type: 'DYNAMIC_COLLECTION',
    title: 'Mega Surprise Bundles',
    subtitle: 'Surprise after surprise after surprise',
    accentColor: '#C62828',
    products: [mysteryBoxSmall, mysteryBoxLarge, mysteryBoxPremium, mysteryBoxFamily, surpriseBag],
  } satisfies DynamicCollectionBlock,

  // 32 — Banner
  {
    id: 'mc-b032',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/mchero11/800/400',
    title: 'Create Carnival Memories',
    subtitle: 'Activities for the whole family',
    ctaLabel: 'Explore Activities',
    action: { type: 'OPEN_CATEGORY', payload: { categoryId: 'party-activities', title: 'Party Activities' } },
    backgroundColor: '#FFF3E0',
  } satisfies BannerHeroBlock,

  // 33 — Grid
  {
    id: 'mc-b033',
    type: 'PRODUCT_GRID_2X2',
    title: 'Surprise Toys',
    products: [surpriseToy1, squishmallow, mysteryCardPack, surpriseMiniBlind],
  } satisfies ProductGrid2x2Block,

  // 34 — Collection
  {
    id: 'mc-b034',
    type: 'DYNAMIC_COLLECTION',
    title: 'Midway Mayhem',
    subtitle: 'Bring the midway home',
    accentColor: '#FF8F00',
    products: [ringTossGame, carnivalWheelGame, duckPondGame, bottleShootGame, pinataSet, magicKit],
  } satisfies DynamicCollectionBlock,

  // 35 — Banner
  {
    id: 'mc-b035',
    type: 'BANNER_HERO',
    imageUrl: 'https://picsum.photos/seed/mchero12/800/400',
    title: 'The Carnival Never Ends',
    subtitle: 'Browse the full Mystery Carnival store',
    ctaLabel: 'Explore All',
    action: { type: 'DEEP_LINK', payload: { url: 'kiddo://campaigns/mystery-carnival/all' } },
    backgroundColor: '#FFF8E1',
  } satisfies BannerHeroBlock,
];

export const mysteryCarnivalPayload: SduiPayload = {
  version: '1.0.0',
  campaignId: 'mystery-carnival',
  theme: {
    primary: '#C62828',
    secondary: '#FF8F00',
    background: '#FFF8E1',
    surface: '#FFFFFF',
    textPrimary: '#3E2723',
    textSecondary: '#795548',
    ctaText: '#FFFFFF',
    divider: '#FFECB3',
    badge: '#C62828',
    badgeText: '#FFFFFF',
  },
  blocks: blocks as unknown as SduiPayload['blocks'],
  overlay: {
    animationUrl: 'https://assets.kiddo.app/lottie/confetti.json',
    loop: true,
    autoDismissMs: 8000,
  },
};
