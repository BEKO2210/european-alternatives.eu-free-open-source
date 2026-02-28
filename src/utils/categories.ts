import type { Category, Tool } from '../data/types';

export function getCategoryBySlug(
  categories: Category[],
  slug: string
): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}

export function getCategoriesWithToolCount(
  categories: Category[],
  tools: Tool[]
): Category[] {
  return categories.map((cat) => ({
    ...cat,
    toolCount: tools.filter((tool) => tool.categories.includes(cat.slug))
      .length,
  }));
}

export function getCategoryColor(color: string): string {
  const colorMap: Record<string, string> = {
    blue: 'from-blue-500/20 to-blue-600/5 border-blue-500/30 hover:border-blue-400/50',
    cyan: 'from-cyan-500/20 to-cyan-600/5 border-cyan-500/30 hover:border-cyan-400/50',
    yellow: 'from-yellow-500/20 to-yellow-600/5 border-yellow-500/30 hover:border-yellow-400/50',
    orange: 'from-orange-500/20 to-orange-600/5 border-orange-500/30 hover:border-orange-400/50',
    sky: 'from-sky-500/20 to-sky-600/5 border-sky-500/30 hover:border-sky-400/50',
    green: 'from-green-500/20 to-green-600/5 border-green-500/30 hover:border-green-400/50',
    indigo: 'from-indigo-500/20 to-indigo-600/5 border-indigo-500/30 hover:border-indigo-400/50',
    red: 'from-red-500/20 to-red-600/5 border-red-500/30 hover:border-red-400/50',
    teal: 'from-teal-500/20 to-teal-600/5 border-teal-500/30 hover:border-teal-400/50',
    amber: 'from-amber-500/20 to-amber-600/5 border-amber-500/30 hover:border-amber-400/50',
    pink: 'from-pink-500/20 to-pink-600/5 border-pink-500/30 hover:border-pink-400/50',
    gray: 'from-gray-500/20 to-gray-600/5 border-gray-500/30 hover:border-gray-400/50',
    violet: 'from-violet-500/20 to-violet-600/5 border-violet-500/30 hover:border-violet-400/50',
    emerald: 'from-emerald-500/20 to-emerald-600/5 border-emerald-500/30 hover:border-emerald-400/50',
    purple: 'from-purple-500/20 to-purple-600/5 border-purple-500/30 hover:border-purple-400/50',
    rose: 'from-rose-500/20 to-rose-600/5 border-rose-500/30 hover:border-rose-400/50',
    fuchsia: 'from-fuchsia-500/20 to-fuchsia-600/5 border-fuchsia-500/30 hover:border-fuchsia-400/50',
    lime: 'from-lime-500/20 to-lime-600/5 border-lime-500/30 hover:border-lime-400/50',
    slate: 'from-slate-500/20 to-slate-600/5 border-slate-500/30 hover:border-slate-400/50',
    stone: 'from-stone-500/20 to-stone-600/5 border-stone-500/30 hover:border-stone-400/50',
    zinc: 'from-zinc-500/20 to-zinc-600/5 border-zinc-500/30 hover:border-zinc-400/50',
  };
  return colorMap[color] ?? colorMap['blue'];
}
