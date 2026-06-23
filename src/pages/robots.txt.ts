import type { APIRoute } from 'astro';
import { BUSINESS } from '../data/business-info';

export const GET: APIRoute = () => {
  const robots = `# Stolarija Mika - robots.txt

# AI Crawlers - Welcome
User-agent: GPTBot
Allow: /
Crawl-delay: 2

User-agent: ChatGPT-User
Allow: /
Crawl-delay: 2

User-agent: ClaudeBot
Allow: /
Crawl-delay: 2

User-agent: Claude-Web
Allow: /
Crawl-delay: 2

User-agent: PerplexityBot
Allow: /
Crawl-delay: 2

User-agent: Google-Extended
Allow: /
Crawl-delay: 2

User-agent: Applebot-Extended
Allow: /
Crawl-delay: 2

# Search Engines
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 2

# All others
User-agent: *
Allow: /
Crawl-delay: 2

Sitemap: ${BUSINESS.siteUrl}/sitemap.xml
`;

  return new Response(robots, {
    headers: { 'Content-Type': 'text/plain' },
  });
};
