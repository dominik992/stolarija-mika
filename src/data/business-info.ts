export const BUSINESS = {
  name: 'Stolarija Mika',
  legalName: 'Stolarija Mika - Nikola Blagec',
  owner: 'Nikola Blagec',
  nickname: 'Mika',
  description: 'Stolarski obrt s 25 godina iskustva u izradi kuhinja, namještaja, vrata, prozora i stepenica po mjeri.',
  address: {
    street: 'Donja Podgora 135',
    city: 'Donja Stubica',
    region: 'Krapinsko-zagorska županija',
    postalCode: '49240',
    country: 'HR',
    countryName: 'Hrvatska',
  },
  phone: '+385 98 407 556',
  phoneDisplay: '098 407 556',
  email: 'stolarija.mika@gmail.com',
  foundedYear: 1999,
  experienceYears: 25,
  siteUrl: 'https://dominik992.github.io/stolarija-mika',
  siteName: 'Stolarija Mika',
  workingHours: {
    weekdays: 'Pon - Pet: 07:00 - 17:00',
    saturday: 'Sub: 07:00 - 13:00',
    sunday: 'Ned: Zatvoreno',
  },
  geo: {
    latitude: 46.0075,
    longitude: 15.9547,
  },
  socialLinks: {} as Record<string, string>,
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Početna' },
  { href: '/o-nama', label: 'O nama' },
  { href: '/usluge', label: 'Usluge' },
  { href: '/galerija', label: 'Galerija' },
  { href: '/blog', label: 'Blog' },
  { href: '/kontakt', label: 'Kontakt' },
] as const;
