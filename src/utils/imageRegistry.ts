/**
 * Centralized Image Asset Registry for Bangalore Mandarin
 * 
 * Primary sources: Local assets stored in public/assets/images/ (copied to dist/assets/images/ on build)
 * Fallback sources: High-resolution, publicly accessible authentic Chinese culinary & ambience photographs
 */

export interface RestaurantImageAsset {
  localPath: string;
  altPath: string;
  fallbackUrl: string;
  description: string;
}

export const IMAGE_ASSETS = {
  // Hero & Signature Showcase
  heroMandarin: {
    localPath: '/assets/images/hero_mandarin_culinary.jpg',
    altPath: '/images/hero_mandarin_culinary.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1400&q=80',
    description: 'Bangalore Mandarin signature culinary spread with dim sum, Peking specialties, and noodles',
  },
  heroFeast: {
    localPath: '/assets/images/hero_chinese_feast.jpg',
    altPath: '/images/hero_chinese_feast.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=1200&q=80',
    description: 'Grand Chinese feast banquet with sizzling dishes and dim sum',
  },

  // About Culinary Wok Craft
  wokHeiAction: {
    localPath: '/assets/images/culinary_wok_flame.jpg',
    altPath: '/images/culinary_wok_flame.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80',
    description: 'High-temperature 800°F wok hei tossing fire artistry',
  },

  // About & Gallery Ambience
  diningAmbience: {
    localPath: '/assets/images/ambience_dining_hall.jpg',
    altPath: '/images/ambience_dining_hall.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80',
    description: 'Bangalore Mandarin interior dining hall with warm silk lanterns and rosewood tables',
  },

  // Dim Sum & Bao
  dimSumSteamer: {
    localPath: '/assets/images/dimsum_steamer_basket.jpg',
    altPath: '/images/dimsum_steamer_basket.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=1200&q=80',
    description: 'Steaming bamboo basket of handmade Har Gow crystal prawn and truffled wild mushroom dim sum',
  },

  // Seafood Specialties & Starters
  tigerPrawns: {
    localPath: '/assets/images/wok_tossed_prawns.jpg',
    altPath: '/images/wok_tossed_prawns.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=80',
    description: 'Wok-tossed jumbo tiger prawns in garlic butter and cracked pepper',
  },

  // Noodles
  hakkaNoodles: {
    localPath: '/assets/images/noodles_wok_tossed.jpg',
    altPath: '/images/noodles_wok_tossed.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=1200&q=80',
    description: 'Cantonese wok-tossed Hakka noodles with crunchy garden vegetables',
  },

  // Soups
  chineseSoup: {
    localPath: '/assets/images/chinese_hot_soup.jpg',
    altPath: '/images/chinese_hot_soup.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80',
    description: 'Slow-simmered hot soup bowl with sweet corn, crab, and authentic Beijing broth',
  },

  // Desserts & Beverages
  chineseDessert: {
    localPath: '/assets/images/chinese_dessert_darsaan.jpg',
    altPath: '/images/chinese_dessert_darsaan.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80',
    description: 'Golden honey tossed darsaan flat noodles and warm date sesame pancake',
  },
} as const;

/**
 * Robust error handler for all <img> tags across the app.
 * 1st attempt: If primary path fails, switch to public CDN fallback
 * 2nd attempt: If fallback fails, switch to generic reliable Chinese banquet image
 * Prevents infinite reload loops using dataset.errorHandled
 */
export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  fallbackUrl: string = IMAGE_ASSETS.heroMandarin.fallbackUrl
) => {
  const target = e.currentTarget;
  if (!target.dataset.attempt) {
    target.dataset.attempt = '1';
    target.src = fallbackUrl;
  } else if (target.dataset.attempt === '1') {
    target.dataset.attempt = '2';
    target.src = IMAGE_ASSETS.heroFeast.fallbackUrl;
  }
};
