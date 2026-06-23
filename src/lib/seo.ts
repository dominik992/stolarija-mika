import { BUSINESS } from '../data/business-info';

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
  };
  noindex?: boolean;
}

export function getCanonicalUrl(path: string): string {
  const siteBase = BUSINESS.siteUrl.replace(/\/$/, '');
  // Strip the base path prefix if present (e.g. /stolarija-mika/)
  // to avoid doubling when siteUrl already includes it
  const basePath = '/stolarija-mika';
  let cleanPath = path.startsWith(basePath) ? path.slice(basePath.length) : path;
  cleanPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
  return `${siteBase}${cleanPath}`;
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Carpenter',
    '@id': `${BUSINESS.siteUrl}/#business`,
    name: BUSINESS.name,
    alternateName: BUSINESS.legalName,
    description: BUSINESS.description,
    url: BUSINESS.siteUrl,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    foundingDate: String(BUSINESS.foundedYear),
    founder: {
      '@type': 'Person',
      name: BUSINESS.owner,
      alternateName: BUSINESS.nickname,
      jobTitle: 'Stolar majstor',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '07:00',
        closes: '13:00',
      },
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Hrvatska',
    },
    priceRange: '$$',
    image: `${BUSINESS.siteUrl}/og-image.png`,
    knowsAbout: [
      'stolarska izrada',
      'kuhinje po mjeri',
      'namještaj po mjeri',
      'drvena vrata',
      'drveni prozori',
      'drvene stepenice',
      'drveni podovi',
      'pergole',
      'restauracija namještaja',
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BUSINESS.siteUrl}/#website`,
    name: BUSINESS.siteName,
    url: BUSINESS.siteUrl,
    description: BUSINESS.description,
    publisher: { '@id': `${BUSINESS.siteUrl}/#business` },
    inLanguage: 'hr',
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: getCanonicalUrl(`/usluge/${service.slug}`),
    provider: { '@id': `${BUSINESS.siteUrl}/#business` },
    areaServed: {
      '@type': 'Country',
      name: 'Hrvatska',
    },
    serviceType: service.name,
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateArticleSchema(post: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    url: getCanonicalUrl(`/blog/${post.slug}`),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: BUSINESS.owner,
    },
    publisher: { '@id': `${BUSINESS.siteUrl}/#business` },
    inLanguage: 'hr',
  };
}

export function generateLLMMetaTags(params: {
  citationSnippet: string;
  quickFacts: string[];
}) {
  return {
    'citation-snippet': params.citationSnippet,
    'quick-facts': params.quickFacts.join(' | '),
    'content-language': 'hr',
    'business-type': 'Carpenter',
    'business-location': `${BUSINESS.address.city}, ${BUSINESS.address.region}, ${BUSINESS.address.countryName}`,
    'business-experience': `${BUSINESS.experienceYears} godina`,
  };
}
