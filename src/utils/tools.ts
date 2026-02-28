import type { Tool } from '../data/types';

export function getToolsByCategory(tools: Tool[], categorySlug: string): Tool[] {
  return tools.filter((tool) => tool.categories.includes(categorySlug));
}

export function getFeaturedTools(tools: Tool[]): Tool[] {
  return tools.filter((tool) => tool.featured);
}

export function getToolBySlug(tools: Tool[], slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function searchTools(tools: Tool[], query: string): Tool[] {
  const q = query.toLowerCase().trim();
  if (!q) return tools;
  return tools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(q) ||
      tool.tagline.toLowerCase().includes(q) ||
      tool.description.toLowerCase().includes(q) ||
      tool.tags.some((tag) => tag.toLowerCase().includes(q)) ||
      tool.replacesTools.some((r) => r.toLowerCase().includes(q))
  );
}

export function filterByPlatform(tools: Tool[], platform: string): Tool[] {
  return tools.filter((tool) =>
    tool.platforms.includes(platform as Tool['platforms'][number])
  );
}

export function filterBySelfHostable(tools: Tool[]): Tool[] {
  return tools.filter((tool) => tool.selfHostable);
}

export function filterByLicense(tools: Tool[], license: string): Tool[] {
  return tools.filter((tool) =>
    tool.license.toLowerCase().includes(license.toLowerCase())
  );
}

export function filterByDifficulty(
  tools: Tool[],
  difficulty: Tool['difficulty']
): Tool[] {
  return tools.filter((tool) => tool.difficulty === difficulty);
}

export function sortTools(
  tools: Tool[],
  sortBy: 'name' | 'stars' | 'date'
): Tool[] {
  const sorted = [...tools];
  switch (sortBy) {
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'stars':
      return sorted.sort((a, b) => (b.stars ?? 0) - (a.stars ?? 0));
    case 'date':
      return sorted.sort(
        (a, b) =>
          new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime()
      );
    default:
      return sorted;
  }
}

export function getRelatedTools(
  tools: Tool[],
  currentTool: Tool,
  limit: number = 3
): Tool[] {
  return tools
    .filter(
      (t) =>
        t.id !== currentTool.id &&
        t.categories.some((c) => currentTool.categories.includes(c))
    )
    .slice(0, limit);
}

export function getAllReplacedTools(tools: Tool[]): string[] {
  const replaced = new Set<string>();
  tools.forEach((tool) => {
    tool.replacesTools.forEach((r) => replaced.add(r));
  });
  return Array.from(replaced).sort();
}

export function getUniquelicenses(tools: Tool[]): string[] {
  const licenses = new Set<string>();
  tools.forEach((tool) => licenses.add(tool.license));
  return Array.from(licenses).sort();
}

export function getLicenseBadgeClass(license: string): string {
  const l = license.toLowerCase();
  if (l.includes('mit')) return 'badge-mit';
  if (l.includes('apache')) return 'badge-apache';
  if (l.includes('agpl')) return 'badge-agpl';
  if (l.includes('lgpl')) return 'badge-lgpl';
  if (l.includes('gpl')) return 'badge-gpl';
  if (l.includes('mpl')) return 'badge-mpl';
  if (l.includes('bsd')) return 'badge-bsd';
  return 'badge-mit';
}

export function getDifficultyBadgeClass(
  difficulty: Tool['difficulty']
): string {
  switch (difficulty) {
    case 'einfach':
      return 'badge-easy';
    case 'mittel':
      return 'badge-medium';
    case 'fortgeschritten':
      return 'badge-hard';
  }
}

export function getDifficultyLabel(difficulty: Tool['difficulty']): string {
  switch (difficulty) {
    case 'einfach':
      return '● Einfach';
    case 'mittel':
      return '●● Mittel';
    case 'fortgeschritten':
      return '●●● Fortgeschritten';
  }
}
