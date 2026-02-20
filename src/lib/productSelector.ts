import seedrandom from 'seedrandom';
import productsData from '@/constants/products.json';
import categoriesData from '@/constants/categoryData';
import { Product } from '@/types/product';

type Category = {
  id: number;
  title: string;
  img: string;
};

const TOTAL_PRODUCTS = 150;

function seededShuffle<T>(array: T[], seed: string): T[] {
  const rng = seedrandom(seed);
  const shuffled = [...array];
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
}

function selectFromCategory(
  categoryProducts: Product[],
  count: number,
  seed: string
): Product[] {
  if (categoryProducts.length <= count) {
    return [...categoryProducts];
  }
  
  const shuffled = seededShuffle(categoryProducts, seed);
  return shuffled.slice(0, count);
}

export function selectProducts(siteNumber: number): Product[] {
  const products = productsData as Product[];
  const categories = categoriesData as Category[];
  
  const quotaPerCategory = Math.floor(TOTAL_PRODUCTS / categories.length);
  const selectedProducts: Product[] = [];
  const usedProductIds = new Set<number>();
  
  const categorySeed = `site-${siteNumber}-category`;
  const globalSeed = `site-${siteNumber}-global`;
  const finalSeed = `site-${siteNumber}-final`;
  
  const productsByCategory = new Map<number, Product[]>();
  
  categories.forEach(category => {
    productsByCategory.set(
      category.id,
      products.filter(p => p.categoryId === category.id)
    );
  });
  
  categories.forEach(category => {
    const categoryProducts = productsByCategory.get(category.id) || [];
    const availableProducts = categoryProducts.filter(p => !usedProductIds.has(p.id));
    
    const needed = quotaPerCategory;
    const selected = selectFromCategory(
      availableProducts,
      needed,
      `${categorySeed}-${category.id}`
    );
    
    selected.forEach(product => {
      selectedProducts.push(product);
      usedProductIds.add(product.id);
    });
  });
  
  const remainingNeeded = TOTAL_PRODUCTS - selectedProducts.length;
  
  if (remainingNeeded > 0) {
    const availableProducts = products.filter(p => !usedProductIds.has(p.id));
    const shuffled = seededShuffle(availableProducts, globalSeed);
    const additional = shuffled.slice(0, remainingNeeded);
    
    selectedProducts.push(...additional);
  }
  
  return seededShuffle(selectedProducts, finalSeed);
}
