export interface Tool {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  website: string;
  github?: string;
  license: string;
  categories: string[];
  replacesTools: string[];
  selfHostable: boolean;
  hostedService?: string;
  logoUrl?: string;
  logoPlaceholderEmoji?: string;
  stars?: number;
  lastUpdated: string;
  tags: string[];
  difficulty: 'einfach' | 'mittel' | 'fortgeschritten';
  platforms: ('web' | 'linux' | 'windows' | 'macos' | 'android' | 'ios' | 'docker')[];
  featured: boolean;
  addedDate: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  emoji: string;
  replacesCategory: string;
  toolCount?: number;
  color: string;
}
