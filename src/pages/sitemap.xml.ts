import type { APIRoute } from 'astro';
import { BUSINESS } from '../data/business-info';
import { services } from '../data/services';

const pages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/o-nama', priority: '0.8', changefreq: 'monthly' },
  { url: '/usluge', priority: '0.9', changefreq: 'weekly' },
  { url: '/galerija', priority: '0.8', changefreq: 'weekly' },
  { url: '/kontakt', priority: '0.8', changefreq: 'monthly' },
  { url: '/blog', priority: '0.7', changefreq: 'weekly' },
  { url: '/blog/kako-odabrati-drvo', priority: '0.6', changefreq: 'monthly' },
  { url: '/blog/odrzavanje-namjestaja', priority: '0.6', changefreq: 'monthly' },
  { url: '/blog/prednosti-drva-nad-pvc', priority: '0.6', changefreq: 'monthly' },
];

const servicePages = services.map((s) => ({
  url: `/usluge/${s.slug}`,
  priority: '0.8',
  changefreq: 'monthly',
}));

const allPages = [...pages, ...servicePages];

export const GET: APIRoute = () => {
  const today = new Date().toISOString().split('T')[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${BUSINESS.siteUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
