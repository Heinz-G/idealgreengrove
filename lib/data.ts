export type ProductType = 'indica' | 'sativa' | 'hybrid' | 'cbd';
export type Category = 'flower' | 'prerolls' | 'vapes' | 'edibles' | 'concentrates' | 'wellness' | 'drinks' | 'accessories';

export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  type: ProductType;
  category: Category;
  size: string;
  thc?: string;
  cbd?: string;
  effects?: string[];
}

export const products: Product[] = [
  // === CONCENTRATES ===
  { id: 1, name: 'Budder', brand: 'Concentrates', description: 'Butter-like cannabis concentrate', price: 250, type: 'hybrid', category: 'concentrates', size: 'per gram', thc: '70% THC', effects: ['euphoric', 'relaxed'] },
  { id: 2, name: 'Hash', brand: 'Traditional', description: 'Traditional pressed hashish', price: 200, type: 'indica', category: 'concentrates', size: 'per gram', thc: '45% THC', effects: ['relaxed', 'sleepy'] },
  { id: 3, name: 'Solvent Dab', brand: 'Concentrates', description: 'Solvent-based cannabis concentrate for dabbing', price: 250, type: 'hybrid', category: 'concentrates', size: 'per gram', thc: '75% THC', effects: ['intense', 'euphoric'] },
  { id: 4, name: 'Crumble', brand: 'Concentrates', description: 'Dry, crumbly cannabis concentrate', price: 250, type: 'sativa', category: 'concentrates', size: 'per gram', thc: '72% THC', effects: ['energizing', 'creative'] },
  { id: 5, name: 'Live Hash Rosin', brand: 'Premium Extracts', description: 'Premium solventless live resin', price: 400, type: 'hybrid', category: 'concentrates', size: 'per gram', thc: '80% THC', effects: ['balanced', 'flavorful'] },
  { id: 6, name: 'THC Distillate', brand: 'Pure Extract', description: 'Highly refined THC liquid', price: 4500, type: 'hybrid', category: 'concentrates', size: '60ML', thc: '95% THC', effects: ['potent', 'versatile'] },
  { id: 7, name: 'THC Diamonds', brand: 'Premium Extracts', description: 'Pure THC crystalline diamonds', price: 400, type: 'hybrid', category: 'concentrates', size: 'per gram', thc: '99% THC', effects: ['intense', 'clear'] },

  // === DRINKS / SODAS ===
  { id: 8, name: 'Blueberry Lemonade Soda', brand: 'Sodaze', description: 'Blueberry lemonade THC soda', price: 50, type: 'hybrid', category: 'drinks', size: '30MG THC per can', thc: '30mg', effects: ['relaxed', 'happy'] },
  { id: 9, name: 'Lemon Meringue Soda', brand: 'Sodaze', description: 'Lemon meringue pie flavored soda', price: 50, type: 'sativa', category: 'drinks', size: '30MG THC per can', thc: '30mg', effects: ['uplifted', 'creative'] },
  { id: 10, name: 'PPC Limonada Soda', brand: 'Sodaze x PPC', description: 'Sodaze x PPC Limonada collaboration', price: 50, type: 'sativa', category: 'drinks', size: '30MG THC per can', thc: '30mg', effects: ['refreshing', 'energizing'] },
  { id: 11, name: 'Cherrypop Soda', brand: 'Sodaze', description: 'Cherry pop candy flavored soda', price: 50, type: 'indica', category: 'drinks', size: '30MG THC per can', thc: '30mg', effects: ['relaxed', 'happy'] },
  { id: 12, name: 'Tropical Punch Soda', brand: 'Sodaze', description: 'Tropical fruit punch THC soda', price: 50, type: 'hybrid', category: 'drinks', size: '30MG THC per can', thc: '30mg', effects: ['uplifted', 'social'] },
  { id: 13, name: 'Berry Haze Soda', brand: 'Sodaze', description: 'Berry-flavored THC soda', price: 50, type: 'sativa', category: 'drinks', size: '30MG THC per can', thc: '30mg', effects: ['energizing', 'focused'] },

  // === WELLNESS / CBD ===
  { id: 14, name: 'CBD Capsules', brand: 'Wellness', description: 'CBD-only softgel capsules', price: 600, type: 'cbd', category: 'wellness', size: '30 caps', cbd: '25mg per cap', effects: ['calm', 'relief'] },
  { id: 15, name: 'CBD Oil 30ML 2%', brand: 'Wellness', description: 'CBD-only oil for wellness', price: 700, type: 'cbd', category: 'wellness', size: '30ML 2% CBD', cbd: '600mg total', effects: ['balanced', 'calming'] },
  { id: 16, name: 'CBD Oil 50ML 2%', brand: 'Wellness', description: 'Larger size CBD oil', price: 700, type: 'cbd', category: 'wellness', size: '50ML 2% CBD', cbd: '1000mg total', effects: ['balanced', 'calming'] },
  { id: 17, name: 'Pain & Arthritis Cream', brand: 'Topicals', description: 'Topical cream for pain relief', price: 500, type: 'cbd', category: 'wellness', size: '100ML', effects: ['relief', 'soothing'] },
  { id: 18, name: 'Focus Capsules', brand: 'Wellness', description: 'Cognitive focus blend capsules', price: 550, type: 'sativa', category: 'wellness', size: '30 caps', effects: ['focused', 'alert'] },
  { id: 19, name: 'Pet Oil', brand: 'Pet Wellness', description: 'CBD oil formulated for pets', price: 300, type: 'cbd', category: 'wellness', size: '100ML', cbd: '500mg', effects: ['calming', 'relief'] },
  { id: 20, name: 'CBD Cream', brand: 'Topicals', description: 'CBD-infused topical cream', price: 300, type: 'cbd', category: 'wellness', size: '100ML', effects: ['soothing', 'moisturizing'] },
  { id: 21, name: 'Sleep Tincture', brand: 'Wellness', description: 'Sleep-inducing tincture', price: 500, type: 'indica', category: 'wellness', size: '50ML', effects: ['sleepy', 'relaxed'] },
  { id: 22, name: 'Skin Cansa Cream', brand: 'Topicals', description: 'Skin care cream formulation', price: 500, type: 'cbd', category: 'wellness', size: '100ML', effects: ['healing', 'nourishing'] },
  { id: 23, name: 'Collagen Cream', brand: 'Topicals', description: 'Collagen-infused topical cream', price: 550, type: 'cbd', category: 'wellness', size: '250G', effects: ['rejuvenating', 'firming'] },
  { id: 24, name: 'Body Butter', brand: 'Topicals', description: 'Moisturizing cannabis body butter', price: 300, type: 'cbd', category: 'wellness', size: '250ML', effects: ['moisturizing', 'soothing'] },
  { id: 25, name: 'Healing Cream', brand: 'Topicals', description: 'General purpose healing cream', price: 500, type: 'cbd', category: 'wellness', size: '250ML', effects: ['healing', 'relief'] },
  { id: 26, name: 'Full Extract Caps', brand: 'Wellness', description: 'Full extract cannabis capsules', price: 600, type: 'hybrid', category: 'wellness', size: '30 caps', thc: '25mg per cap', effects: ['balanced', 'relief'] },
  { id: 27, name: 'Muscle Cooling Gel', brand: 'Topicals', description: 'Cooling gel for sore muscles', price: 300, type: 'cbd', category: 'wellness', size: '100ML', effects: ['cooling', 'relief'] },
  { id: 28, name: 'Testosterone Tincture', brand: 'Wellness', description: 'Hormone support tincture', price: 500, type: 'hybrid', category: 'wellness', size: '50ML', effects: ['energizing', 'vitality'] },
  { id: 29, name: 'Relax Tincture', brand: 'Wellness', description: 'Relaxation and anxiety tincture', price: 500, type: 'indica', category: 'wellness', size: '50ML', effects: ['calm', 'relaxed'] },
  { id: 30, name: 'Full Extract Oil', brand: 'Wellness', description: 'Full spectrum cannabis oil', price: 700, type: 'hybrid', category: 'wellness', size: '30ML', thc: '500mg', effects: ['balanced', 'therapeutic'] },

  // === MUSHROOM SUPPLEMENTS ===
  { id: 31, name: 'Cordyceps Capsules', brand: 'Mushroom Co', description: 'Energy and stamina mushroom', price: 400, type: 'cbd', category: 'wellness', size: 'per pack', effects: ['energy', 'stamina'] },
  { id: 32, name: 'Reishi Capsules', brand: 'Mushroom Co', description: 'Immune support mushroom', price: 400, type: 'cbd', category: 'wellness', size: 'per pack', effects: ['immunity', 'calm'] },
  { id: 33, name: '3-in-1 Mushroom Complex', brand: 'Mushroom Co', description: 'Blend of three medicinal mushrooms', price: 400, type: 'cbd', category: 'wellness', size: 'per pack', effects: ['balanced', 'wellness'] },
  { id: 34, name: 'Turkey Tail Capsules', brand: 'Mushroom Co', description: 'Antioxidant-rich mushroom', price: 400, type: 'cbd', category: 'wellness', size: 'per pack', effects: ['antioxidant', 'immunity'] },
  { id: 35, name: 'Lions Mane Capsules', brand: 'Mushroom Co', description: 'Cognitive support mushroom', price: 350, type: 'cbd', category: 'wellness', size: 'per pack', effects: ['focus', 'clarity'] },

  // === VAPES - CARTRIDGES ===
  { id: 36, name: 'Cartridge - Purple Punch', brand: 'Vape Co', description: 'Fruity indica strain, relaxing effects', price: 500, type: 'indica', category: 'vapes', size: '1ML', thc: '85% THC', effects: ['relaxed', 'sleepy', 'happy'] },
  { id: 37, name: 'Cartridge - Orange Soda', brand: 'Vape Co', description: 'Citrus-flavored sativa strain cartridge', price: 500, type: 'sativa', category: 'vapes', size: '1ML', thc: '83% THC', effects: ['uplifted', 'energizing', 'creative'] },
  { id: 38, name: 'Cartridge - Watermelon OG', brand: 'Vape Co', description: 'Indica strain with watermelon flavor notes', price: 500, type: 'indica', category: 'vapes', size: '1ML', thc: '84% THC', effects: ['relaxed', 'happy'] },
  { id: 39, name: 'Cartridge - Strawberry Cough', brand: 'Vape Co', description: 'Sativa strain known for its potency', price: 500, type: 'sativa', category: 'vapes', size: '1ML', thc: '86% THC', effects: ['uplifted', 'euphoric'] },
  { id: 40, name: 'Cartridge - Blueberry Kush', brand: 'Vape Co', description: 'Classic indica strain with blueberry flavor', price: 500, type: 'indica', category: 'vapes', size: '1ML', thc: '82% THC', effects: ['relaxed', 'sleepy'] },
  { id: 41, name: 'Cartridge - Wedding Cake', brand: 'Vape Co', description: 'Popular indica-dominant hybrid cartridge', price: 500, type: 'indica', category: 'vapes', size: '1ML', thc: '87% THC', effects: ['relaxed', 'euphoric'] },
  { id: 42, name: 'Cartridge - Blue Dream', brand: 'Vape Co', description: 'Popular sativa-dominant hybrid cartridge', price: 500, type: 'sativa', category: 'vapes', size: '1ML', thc: '84% THC', effects: ['creative', 'uplifted', 'happy'] },
  { id: 43, name: 'Cartridge - Strawberry Lemonade', brand: 'Vape Co', description: 'Refreshing strawberry-citrus sativa cartridge', price: 500, type: 'sativa', category: 'vapes', size: '1ML', thc: '83% THC', effects: ['uplifted', 'happy'] },
  { id: 44, name: 'Cartridge 2ML', brand: 'Vape Co', description: 'Various strains available', price: 900, type: 'hybrid', category: 'vapes', size: '2ML', thc: '85% THC', effects: ['balanced'] },
  { id: 45, name: 'Cartridge 3ML', brand: 'Vape Co', description: 'Various strains available', price: 1200, type: 'hybrid', category: 'vapes', size: '3ML', thc: '85% THC', effects: ['balanced'] },

  // === VAPES - DUAL AIR FLOW MINI ===
  { id: 46, name: 'Dual Air Flow Mini - Biscotti', brand: 'Vape Co', description: 'Indica-dominant strain with dessert flavor', price: 600, type: 'indica', category: 'vapes', size: '1ML', thc: '88% THC', effects: ['relaxed', 'happy', 'sleepy'] },
  { id: 47, name: 'Dual Air Flow Mini - Trainwreck', brand: 'Vape Co', description: 'Potent sativa strain, energetic and cerebral', price: 600, type: 'sativa', category: 'vapes', size: '1ML', thc: '86% THC', effects: ['energizing', 'euphoric', 'creative'] },
  { id: 48, name: 'Dual Air Flow Mini - Apple Fitter', brand: 'Vape Co', description: 'Sativa strain with apple flavor profile', price: 600, type: 'sativa', category: 'vapes', size: '1ML', thc: '85% THC', effects: ['uplifted', 'creative'] },
  { id: 49, name: 'Dual Air Flow Mini - Do Sidos', brand: 'Vape Co', description: 'Indica strain, relaxing and calming', price: 600, type: 'indica', category: 'vapes', size: '1ML', thc: '87% THC', effects: ['relaxed', 'calm', 'sleepy'] },
  { id: 50, name: 'Dual Air Flow Mini - Banana Sherbet', brand: 'Vape Co', description: 'Indica strain with banana and dessert flavors', price: 600, type: 'indica', category: 'vapes', size: '1ML', thc: '86% THC', effects: ['relaxed', 'happy'] },
  { id: 51, name: 'Dual Air Flow Mini - Northern Lights', brand: 'Vape Co', description: 'Classic indica strain, deeply relaxing', price: 600, type: 'indica', category: 'vapes', size: '1ML', thc: '88% THC', effects: ['relaxed', 'sleepy', 'euphoric'] },
  { id: 52, name: 'Dual Air Flow Mini - Strawberry Lemonade', brand: 'Vape Co', description: 'Refreshing sativa strain with citrus notes', price: 600, type: 'sativa', category: 'vapes', size: '1ML', thc: '84% THC', effects: ['uplifted', 'happy'] },
  { id: 53, name: 'Dual Air Flow Mini - Super Silver Haze', brand: 'Vape Co', description: 'Award-winning sativa, uplifting and creative', price: 600, type: 'sativa', category: 'vapes', size: '1ML', thc: '85% THC', effects: ['energizing', 'creative', 'focused'] },
  { id: 54, name: 'Dual Air Flow Mini - Sour Diesel', brand: 'Vape Co', description: 'Classic sativa strain, pungent and energizing', price: 600, type: 'sativa', category: 'vapes', size: '1ML', thc: '87% THC', effects: ['energizing', 'uplifted', 'focused'] },
  { id: 55, name: 'Dual Air Flow Mini - Blueberry Cookies', brand: 'Vape Co', description: 'Indica strain with blueberry and cookie flavors', price: 600, type: 'indica', category: 'vapes', size: '1ML', thc: '86% THC', effects: ['relaxed', 'happy'] },
  { id: 56, name: 'Dual Air Flow 2ML', brand: 'Vape Co', description: 'Apple Fitter/Banana Sherbet dual strain', price: 1100, type: 'hybrid', category: 'vapes', size: '2ML', thc: '86% THC', effects: ['balanced'] },
  { id: 57, name: 'Dual Air Flow 3ML', brand: 'Vape Co', description: 'Strawberry Lemonade/Northern Lights dual strain', price: 1500, type: 'hybrid', category: 'vapes', size: '3ML', thc: '86% THC', effects: ['balanced'] },

  // === VAPES - DISPOSABLE & MULTIFUNCTION ===
  { id: 58, name: 'Disposable Vape - Banana Sherbet', brand: 'Vape Co', description: 'Dessert indica in multifunction vape', price: 700, type: 'indica', category: 'vapes', size: '1ML', thc: '86% THC', effects: ['relaxed', 'happy'] },
  { id: 59, name: 'Multifunction Vape - Blue Dream', brand: 'Vape Co', description: 'Sativa-dominant hybrid strain, uplifting and creative', price: 700, type: 'sativa', category: 'vapes', size: '1ML', thc: '84% THC', effects: ['creative', 'uplifted', 'happy'] },
  { id: 60, name: 'Disposable Vape - Trainwreck', brand: 'Vape Co', description: 'Potent sativa strain in multifunction vape', price: 700, type: 'sativa', category: 'vapes', size: '1ML', thc: '86% THC', effects: ['energizing', 'euphoric'] },
  { id: 61, name: 'Multifunction Vape - Northern Lights', brand: 'Vape Co', description: 'Classic indica strain, relaxing and sedating', price: 700, type: 'indica', category: 'vapes', size: '1ML', thc: '88% THC', effects: ['relaxed', 'sleepy'] },
  { id: 62, name: 'Disposable Vape - Do Sidos', brand: 'Vape Co', description: 'Relaxing indica in multifunction vape', price: 700, type: 'indica', category: 'vapes', size: '1ML', thc: '87% THC', effects: ['relaxed', 'calm'] },
  { id: 63, name: 'Disposable Vape - Sour Diesel', brand: 'Vape Co', description: 'Classic sativa in multifunction vape', price: 700, type: 'sativa', category: 'vapes', size: '1ML', thc: '87% THC', effects: ['energizing', 'uplifted'] },
  { id: 64, name: 'Disposable Vape - Biscotti', brand: 'Vape Co', description: 'Cookie-flavored indica in multifunction vape', price: 700, type: 'indica', category: 'vapes', size: '1ML', thc: '88% THC', effects: ['relaxed', 'happy'] },
  { id: 65, name: 'Disposable Vape - Apple Fitter', brand: 'Vape Co', description: 'Apple-flavored sativa in multifunction vape', price: 700, type: 'sativa', category: 'vapes', size: '1ML', thc: '85% THC', effects: ['uplifted', 'creative'] },
  { id: 66, name: 'Disposable Vape - Strawberry Lemonade', brand: 'Vape Co', description: 'Citrus sativa in multifunction vape', price: 700, type: 'sativa', category: 'vapes', size: '1ML', thc: '84% THC', effects: ['uplifted', 'happy'] },
  { id: 67, name: 'Multifunction Vape - Blueberry Cookies', brand: 'Vape Co', description: 'Berry dessert indica in multifunction vape', price: 700, type: 'indica', category: 'vapes', size: '1ML', thc: '86% THC', effects: ['relaxed', 'happy'] },
  { id: 68, name: 'Multifunction Vape - Cookies Dough', brand: 'Vape Co', description: 'Dessert-inspired cannabis strain', price: 700, type: 'hybrid', category: 'vapes', size: '1ML', thc: '85% THC', effects: ['balanced', 'happy'] },
  { id: 69, name: 'Disposable Vape - Pink Runtz', brand: 'Vape Co', description: 'Balanced hybrid strain, sweet and fruity flavor', price: 700, type: 'hybrid', category: 'vapes', size: '1ML', thc: '86% THC', effects: ['balanced', 'happy', 'relaxed'] },
  { id: 70, name: 'Multifunction 2ML', brand: 'Vape Co', description: 'Advanced 2ML multi-function vape', price: 1300, type: 'hybrid', category: 'vapes', size: '2ML', thc: '85% THC', effects: ['balanced'] },
  { id: 71, name: 'Multifunction 3ML', brand: 'Vape Co', description: 'Advanced 3ML multi-function vape', price: 1800, type: 'hybrid', category: 'vapes', size: '3ML', thc: '85% THC', effects: ['balanced'] },

  // === ACCESSORIES ===
  { id: 72, name: 'Discreet Battery', brand: 'Vape Co', description: 'Low-profile, discreet vape battery', price: 300, type: 'hybrid', category: 'accessories', size: 'Standard', effects: [] },
  { id: 73, name: 'Vape Battery', brand: 'Vape Co', description: 'Standard vape battery for cartridges', price: 200, type: 'hybrid', category: 'accessories', size: 'Standard', effects: [] },

  // === PRE-ROLLS ===
  { id: 74, name: 'GH King Swirl', brand: 'Greenhouse', description: 'Greenhouse flower swirled with extracts', price: 85, type: 'hybrid', category: 'prerolls', size: 'King', thc: '24% THC', effects: ['balanced', 'creative'] },
  { id: 75, name: 'Indoor Queen Moroccan', brand: 'Premium Indoor', description: 'Indoor flower with Moroccan hash', price: 60, type: 'indica', category: 'prerolls', size: 'Queen', thc: '28% THC', effects: ['relaxed', 'sleepy'] },
  { id: 76, name: 'Indoor Queen Swirl', brand: 'Premium Indoor', description: 'Indoor flower swirled with concentrates', price: 65, type: 'hybrid', category: 'prerolls', size: 'Queen', thc: '26% THC', effects: ['euphoric', 'balanced'] },
  { id: 77, name: 'GH Queen Moroccan', brand: 'Greenhouse', description: 'Greenhouse with Moroccan hash', price: 40, type: 'indica', category: 'prerolls', size: 'Queen', thc: '22% THC', effects: ['relaxed', 'calm'] },
  { id: 78, name: 'GH Queen Spiral', brand: 'Greenhouse', description: 'Spiral-patterned concentrate infusion', price: 45, type: 'hybrid', category: 'prerolls', size: 'Queen', thc: '25% THC', effects: ['happy', 'uplifted'] },
  { id: 79, name: 'Indoor King Moonsticks', brand: 'Premium Indoor', description: 'Premium indoor flower king-size pre-roll', price: 110, type: 'indica', category: 'prerolls', size: 'King', thc: '32% THC', effects: ['sedated', 'relaxed'] },
  { id: 80, name: 'Indoor King Moroccan', brand: 'Premium Indoor', description: 'Moroccan hash-infused king pre-roll', price: 120, type: 'indica', category: 'prerolls', size: 'King', thc: '30% THC', effects: ['sleepy', 'relief'] },
  { id: 81, name: 'GH King Moonstick', brand: 'Greenhouse', description: 'Greenhouse flower king-size pre-roll', price: 70, type: 'sativa', category: 'prerolls', size: 'King', thc: '20% THC', effects: ['energizing', 'focused'] },
  { id: 82, name: 'Indoor King Swirl', brand: 'Premium Indoor', description: 'Swirled with kief and hash', price: 130, type: 'hybrid', category: 'prerolls', size: 'King', thc: '35% THC', effects: ['intense', 'euphoric'] },
  { id: 83, name: 'GH Queen Top Deck', brand: 'Greenhouse', description: 'Greenhouse flower with special toppings', price: 45, type: 'sativa', category: 'prerolls', size: 'Queen', thc: '21% THC', effects: ['happy', 'creative'] },
  { id: 84, name: 'Indoor King Top Deck', brand: 'Premium Indoor', description: 'Top-shelf indoor with concentrate coating', price: 130, type: 'indica', category: 'prerolls', size: 'King', thc: '34% THC', effects: ['relaxed', 'hungry'] },
  { id: 85, name: 'GH King Moroccan', brand: 'Greenhouse', description: 'Greenhouse with Moroccan hash', price: 80, type: 'indica', category: 'prerolls', size: 'King', thc: '23% THC', effects: ['calm', 'sleepy'] },
  { id: 86, name: 'GH Queen Normal', brand: 'Greenhouse', description: 'Standard greenhouse queen-size', price: 35, type: 'hybrid', category: 'prerolls', size: 'Queen', thc: '18% THC', effects: ['balanced'] },
  { id: 87, name: 'Indoor Queen Normal', brand: 'Premium Indoor', description: 'Standard indoor flower queen-size', price: 55, type: 'hybrid', category: 'prerolls', size: 'Queen', thc: '24% THC', effects: ['balanced'] },
  { id: 88, name: 'Indoor Queen Top Deck', brand: 'Premium Indoor', description: 'Indoor flower with premium toppings', price: 65, type: 'hybrid', category: 'prerolls', size: 'Queen', thc: '28% THC', effects: ['uplifted', 'happy'] },
  { id: 89, name: 'GH King Top Deck', brand: 'Greenhouse', description: 'Premium greenhouse with toppings', price: 85, type: 'hybrid', category: 'prerolls', size: 'King', thc: '22% THC', effects: ['happy', 'relaxed'] },

  // === FLOWER ===
  { id: 90, name: 'Skywalker', brand: 'Budget Buds', description: 'Classic indica strain, relaxing effects', price: 10, type: 'indica', category: 'flower', size: 'per gram', thc: '18% THC', effects: ['relaxed', 'sleepy'] },
  { id: 91, name: 'Lemon Haze', brand: 'Budget Buds', description: 'Citrusy sativa, energizing and uplifting', price: 15, type: 'sativa', category: 'flower', size: 'per gram', thc: '20% THC', effects: ['energizing', 'uplifted'] },
  { id: 92, name: 'Jack Herer', brand: 'Budget Buds', description: 'Legendary sativa, cerebral and creative', price: 20, type: 'sativa', category: 'flower', size: 'per gram', thc: '22% THC', effects: ['creative', 'focused', 'happy'] },
  { id: 93, name: 'Mango Kush', brand: 'Budget Buds', description: 'Tropical indica with sweet mango aroma', price: 20, type: 'indica', category: 'flower', size: 'per gram', thc: '19% THC', effects: ['relaxed', 'happy'] },
  { id: 94, name: 'Black Exodus Cheese', brand: 'Mid Shelf', description: 'Pungent cheese strain, heavy indica', price: 30, type: 'indica', category: 'flower', size: 'per gram', thc: '21% THC', effects: ['relaxed', 'euphoric'] },
  { id: 95, name: 'Mukim Tullip', brand: 'Mid Shelf', description: 'Balanced hybrid with floral notes', price: 30, type: 'hybrid', category: 'flower', size: 'per gram', thc: '20% THC', effects: ['balanced', 'calm'] },
  { id: 96, name: 'Skittles', brand: 'Mid Shelf', description: 'Fruity sativa with rainbow flavors', price: 35, type: 'sativa', category: 'flower', size: 'per gram', thc: '23% THC', effects: ['uplifted', 'happy', 'creative'] },
  { id: 97, name: 'Sapphire', brand: 'Mid Shelf', description: 'Deep relaxing indica, jewel-like buds', price: 40, type: 'indica', category: 'flower', size: 'per gram', thc: '24% THC', effects: ['relaxed', 'sleepy'] },
  { id: 98, name: 'Cheese', brand: 'Mid Shelf', description: 'Classic cheese hybrid, pungent aroma', price: 40, type: 'hybrid', category: 'flower', size: 'per gram', thc: '22% THC', effects: ['relaxed', 'happy'] },
  { id: 99, name: 'Michigan Breath', brand: 'Top Shelf', description: 'Heavy indica with earthy, gassy notes', price: 50, type: 'indica', category: 'flower', size: 'per gram', thc: '26% THC', effects: ['relaxed', 'sleepy', 'euphoric'] },
  { id: 100, name: 'Passion Fruit', brand: 'Top Shelf', description: 'Tropical sativa with passion fruit aroma', price: 60, type: 'sativa', category: 'flower', size: 'per gram', thc: '25% THC', effects: ['uplifted', 'creative'] },
  { id: 101, name: 'Super Silver Cheese', brand: 'Top Shelf', description: 'Cheese-sativa cross, energetic yet relaxing', price: 60, type: 'sativa', category: 'flower', size: 'per gram', thc: '24% THC', effects: ['energizing', 'happy'] },
  { id: 102, name: 'Kingfruit', brand: 'Top Shelf', description: 'Royal hybrid with mixed fruit flavors', price: 70, type: 'hybrid', category: 'flower', size: 'per gram', thc: '27% THC', effects: ['balanced', 'euphoric'] },
  { id: 103, name: 'WiFi', brand: 'Top Shelf', description: 'White Fire OG hybrid, potent effects', price: 70, type: 'hybrid', category: 'flower', size: 'per gram', thc: '28% THC', effects: ['euphoric', 'relaxed'] },
  { id: 104, name: 'Juicy J', brand: 'Premium Indoor', description: 'Affordable indoor sativa', price: 80, type: 'sativa', category: 'flower', size: 'per gram', thc: '26% THC', effects: ['uplifted', 'energizing'] },
  { id: 105, name: 'Cookies Indoor', brand: 'Premium Indoor', description: 'Affordable indoor indica', price: 80, type: 'indica', category: 'flower', size: 'per gram', thc: '27% THC', effects: ['relaxed', 'happy'] },
  { id: 106, name: 'Apex', brand: 'Premium Indoor', description: 'Affordable indoor sativa', price: 85, type: 'sativa', category: 'flower', size: 'per gram', thc: '28% THC', effects: ['energizing', 'focused'] },
  { id: 107, name: 'Huckleberry Frost', brand: 'Premium Indoor', description: 'Affordable indoor hybrid', price: 85, type: 'hybrid', category: 'flower', size: 'per gram', thc: '27% THC', effects: ['balanced', 'happy'] },
  { id: 108, name: 'Domestic Disturbance', brand: 'Connoisseur', description: 'Top-shelf indoor hybrid', price: 100, type: 'hybrid', category: 'flower', size: 'per gram', thc: '30% THC', effects: ['intense', 'euphoric'] },
  { id: 109, name: 'Adios MF', brand: 'Connoisseur', description: 'Top-shelf indoor sativa', price: 100, type: 'sativa', category: 'flower', size: 'per gram', thc: '29% THC', effects: ['energizing', 'creative'] },
  { id: 110, name: 'Ocean Beach', brand: 'Connoisseur', description: 'Top-shelf indoor indica', price: 110, type: 'indica', category: 'flower', size: 'per gram', thc: '31% THC', effects: ['relaxed', 'sleepy'] },
  { id: 111, name: 'White Iverson', brand: 'Connoisseur', description: 'Top-shelf indoor hybrid', price: 110, type: 'hybrid', category: 'flower', size: 'per gram', thc: '30% THC', effects: ['balanced', 'euphoric'] },
  { id: 112, name: 'Marshmallow OG', brand: 'Aeroponic', description: 'Premium aeroponic dessert strain, 28-34% THC', price: 120, type: 'hybrid', category: 'flower', size: 'per gram', thc: '32% THC', effects: ['relaxed', 'happy'] },
  { id: 113, name: 'Blockberry', brand: 'Aeroponic', description: 'Premium aeroponic berry strain, 28-34% THC', price: 130, type: 'hybrid', category: 'flower', size: 'per gram', thc: '34% THC', effects: ['euphoric', 'creative'] },

  // === EDIBLES ===
  { id: 114, name: 'Chocolate Cookie', brand: 'Bakery', description: 'Double chocolate chip cookie', price: 80, type: 'hybrid', category: 'edibles', size: '500MG THC', thc: '500mg', effects: ['relaxed', 'happy'] },
  { id: 115, name: 'Vanilla Cookie', brand: 'Bakery', description: 'Soft vanilla-infused cannabis cookie', price: 50, type: 'hybrid', category: 'edibles', size: '50MG THC', thc: '50mg', effects: ['happy', 'relaxed'] },
  { id: 116, name: 'Brownie', brand: 'Bakery', description: 'Classic cannabis-infused chocolate brownie', price: 50, type: 'indica', category: 'edibles', size: '65MG THC', thc: '65mg', effects: ['relaxed', 'sleepy'] },
  { id: 117, name: 'Fudge', brand: 'Bakery', description: 'Rich cannabis-infused chocolate fudge', price: 50, type: 'indica', category: 'edibles', size: '75MG THC', thc: '75mg', effects: ['relaxed', 'happy'] },
  { id: 118, name: 'Short Bread Balls', brand: 'Bakery', description: 'Buttery shortbread cookie balls', price: 150, type: 'hybrid', category: 'edibles', size: '100MG total', thc: '100mg', effects: ['happy', 'relaxed'] },
  { id: 119, name: 'Gold Standard Milk Slab', brand: 'Chocolates', description: 'High-potency milk chocolate', price: 250, type: 'hybrid', category: 'edibles', size: '500MG THC', thc: '500mg', effects: ['intense', 'euphoric'] },
  { id: 120, name: 'Xtreme Wholenut Slab', brand: 'Chocolates', description: 'Whole nut chocolate bar', price: 250, type: 'hybrid', category: 'edibles', size: '400MG THC', thc: '400mg', effects: ['relaxed', 'happy'] },
  { id: 121, name: 'Xtreme Cashew & Coconut', brand: 'Chocolates', description: 'Cashew and coconut chocolate', price: 250, type: 'hybrid', category: 'edibles', size: '400MG THC', thc: '400mg', effects: ['happy', 'relaxed'] },
  { id: 122, name: 'Xtreme Dark Peppermint Slab', brand: 'Chocolates', description: 'Dark chocolate with peppermint', price: 250, type: 'hybrid', category: 'edibles', size: '400MG THC', thc: '400mg', effects: ['relaxed', 'refreshing'] },
  { id: 123, name: 'Xtreme Milk Slab', brand: 'Chocolates', description: 'Extra-strength milk chocolate', price: 150, type: 'hybrid', category: 'edibles', size: '400MG THC', thc: '400mg', effects: ['relaxed', 'happy'] },
  { id: 124, name: 'Premium Milk Slab', brand: 'Chocolates', description: 'Premium milk chocolate bar', price: 125, type: 'hybrid', category: 'edibles', size: '200MG THC', thc: '200mg', effects: ['happy', 'relaxed'] },
  { id: 125, name: 'Loaded Chocolate', brand: 'Chocolates', description: 'Premium loaded chocolate bar', price: 75, type: 'hybrid', category: 'edibles', size: '80MG THC', thc: '80mg', effects: ['happy', 'relaxed'] },
  { id: 126, name: 'Crunchies', brand: 'Candy', description: 'Crunchy chocolate candy pieces with THC', price: 100, type: 'hybrid', category: 'edibles', size: 'Pack of 3 - 70MG each', thc: '210mg total', effects: ['happy', 'giggly'] },
  { id: 127, name: 'Smoothies', brand: 'Gummies', description: 'Fruit-flavored gummy smoothie candies', price: 125, type: 'hybrid', category: 'edibles', size: 'Pack of 5 - 25MG each', thc: '125mg total', effects: ['happy', 'relaxed'] },
  { id: 128, name: 'Jelly Teddies', brand: 'Gummies', description: 'Small gummy bears perfect for microdosing', price: 150, type: 'hybrid', category: 'edibles', size: 'Pack of 32 - 10MG each', thc: '320mg total', effects: ['mild', 'happy'] },
  { id: 129, name: 'Sour Worms', brand: 'Gummies', description: 'Sour gummy worm candies', price: 150, type: 'sativa', category: 'edibles', size: 'Pack of 6 - 50MG each', thc: '300mg total', effects: ['uplifted', 'giggly'] },
  { id: 130, name: 'Pocket Rockets', brand: 'Gummies', description: 'Small gummy rockets for portion control', price: 150, type: 'hybrid', category: 'edibles', size: 'Pack of 10 - 25MG each', thc: '250mg total', effects: ['happy', 'relaxed'] },
  { id: 131, name: 'Sour Teddies', brand: 'Gummies', description: 'Sour gummy bears for microdosing', price: 150, type: 'sativa', category: 'edibles', size: 'Pack of 32 - 10MG each', thc: '320mg total', effects: ['uplifted', 'happy'] },
  { id: 132, name: 'Jubes', brand: 'Gummies', description: 'Juicy fruit gummy cubes', price: 150, type: 'hybrid', category: 'edibles', size: 'Pack of 5 - 50MG each', thc: '250mg total', effects: ['happy', 'relaxed'] },
  { id: 133, name: 'Unicorn Belts', brand: 'Gummies', description: 'Premium rainbow sour belt candies', price: 350, type: 'sativa', category: 'edibles', size: 'Pack of 10 - 50MG each', thc: '500mg total', effects: ['uplifted', 'giggly', 'creative'] },
  { id: 134, name: 'Single Leaf', brand: 'Specialty', description: 'Cannabis-infused edible leaf', price: 80, type: 'hybrid', category: 'edibles', size: '200MG THC', thc: '200mg', effects: ['relaxed', 'happy'] },
  { id: 135, name: 'Cafe Mocha', brand: 'Beverages', description: 'Coffee and chocolate edible', price: 60, type: 'sativa', category: 'edibles', size: '20MG THC', thc: '20mg', effects: ['energizing', 'focused'] },
  { id: 136, name: 'Belgian Hot Chocolate', brand: 'Beverages', description: 'Premium hot chocolate mix', price: 70, type: 'indica', category: 'edibles', size: '50MG THC', thc: '50mg', effects: ['relaxed', 'cozy'] },
  { id: 137, name: 'Lollipop 25MG', brand: 'Candy', description: 'THC-infused lollipop in various flavors', price: 40, type: 'hybrid', category: 'edibles', size: '25MG THC', thc: '25mg', effects: ['happy', 'mild'] },
  { id: 138, name: 'Lollipop 50MG', brand: 'Candy', description: 'Medium-strength THC-infused lollipop', price: 60, type: 'hybrid', category: 'edibles', size: '50MG THC', thc: '50mg', effects: ['happy', 'relaxed'] },
  { id: 139, name: 'Lollipop 100MG', brand: 'Candy', description: 'High-strength THC-infused lollipop', price: 80, type: 'hybrid', category: 'edibles', size: '100MG THC', thc: '100mg', effects: ['relaxed', 'euphoric'] },
  { id: 140, name: 'Lollipop 200MG', brand: 'Candy', description: 'Extra-strength THC-infused lollipop', price: 100, type: 'hybrid', category: 'edibles', size: '200MG THC', thc: '200mg', effects: ['intense', 'euphoric'] },
  { id: 141, name: 'Caramelized Peanuts', brand: 'Snacks', description: 'Sweet caramelized peanuts', price: 70, type: 'hybrid', category: 'edibles', size: '50MG THC', thc: '50mg', effects: ['happy', 'relaxed'] },
  { id: 142, name: 'Cannabis Honey', brand: 'Specialty', description: 'Cannabis-infused honey', price: 100, type: 'hybrid', category: 'edibles', size: '180G', thc: '500mg total', effects: ['versatile', 'calming'] },
  { id: 143, name: 'Cana Sugar', brand: 'Specialty', description: 'Cannabis-infused sugar', price: 100, type: 'hybrid', category: 'edibles', size: '50G', thc: '500mg total', effects: ['versatile', 'mild'] },
];

// Category display names
export const categoryNames: Record<Category, string> = {
  flower: 'Flower',
  prerolls: 'Pre-Rolls',
  vapes: 'Vapes',
  edibles: 'Edibles',
  concentrates: 'Concentrates',
  wellness: 'Wellness & CBD',
  drinks: 'Drinks',
  accessories: 'Accessories',
};

// Get products by category
export function getProductsByCategory(category: Category): Product[] {
  return products.filter(p => p.category === category);
}

// Get featured products (mix of categories)
export function getFeaturedProducts(limit: number = 12): Product[] {
  return products.slice(0, limit);
}

// Get products on sale (simulate with lower-priced items)
export function getSaleProducts(limit: number = 8): Product[] {
  return products.filter(p => p.price < 100).slice(0, limit);
}
