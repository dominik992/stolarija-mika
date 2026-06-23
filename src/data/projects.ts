export interface Project {
  slug: string;
  title: string;
  description: string;
  serviceSlug: string;
  serviceName: string;
  images: string[];
  completedYear: number;
  location: string;
  materials: string[];
}

export const projects: Project[] = [
  {
    slug: 'kuhinja-hrast-zagreb',
    title: 'Kuhinja od hrasta - Zagreb',
    description: 'Prostrana kuhinja od masivnog hrasta s otočnom radnom plohom. Kombinacija prirodnog drva i modernog dizajna.',
    serviceSlug: 'kuhinje',
    serviceName: 'Kuhinje po mjeri',
    images: ['/images/gallery/kuhinja-1.jpg'],
    completedYear: 2024,
    location: 'Zagreb',
    materials: ['Hrast', 'Granit'],
  },
  {
    slug: 'stepenice-orah-stubica',
    title: 'Stepenice od oraha - Donja Stubica',
    description: 'Elegantne L-stepenice od orahovine s ručno izrađenom ogradom. Klasičan dizajn za obiteljsku kuću.',
    serviceSlug: 'stepenice',
    serviceName: 'Drvene stepenice',
    images: ['/images/gallery/stepenice-1.jpg'],
    completedYear: 2024,
    location: 'Donja Stubica',
    materials: ['Orah'],
  },
  {
    slug: 'ormar-bukva-zabok',
    title: 'Ugradbeni ormar od bukve - Zabok',
    description: 'Prostrani ugradbeni ormar s kliznim vratima izrađen od bukve. Prilagođen dimenzijama prostora do centimetra.',
    serviceSlug: 'namjestaj',
    serviceName: 'Namještaj po mjeri',
    images: ['/images/gallery/ormar-1.jpg'],
    completedYear: 2023,
    location: 'Zabok',
    materials: ['Bukva'],
  },
  {
    slug: 'pergola-bor-stubicke',
    title: 'Pergola od bora - Stubičke Toplice',
    description: 'Prostrana pergola za terasu s impegniranim borom. Pruža ugodnu sjenu i produžuje boravak na otvorenom.',
    serviceSlug: 'pergole',
    serviceName: 'Pergole i nadstrešnice',
    images: ['/images/gallery/pergola-1.jpg'],
    completedYear: 2024,
    location: 'Stubičke Toplice',
    materials: ['Impregnirani bor'],
  },
  {
    slug: 'restauracija-ormar-antik',
    title: 'Restauracija antiknog ormara',
    description: 'Potpuna restauracija ormara iz 1920-ih. Obnovljena konstrukcija, zamijenjeni oštećeni dijelovi, vraćen originalni sjaj.',
    serviceSlug: 'restauracija',
    serviceName: 'Restauracija namještaja',
    images: ['/images/gallery/restauracija-1.jpg'],
    completedYear: 2023,
    location: 'Oroslavje',
    materials: ['Hrast', 'Originalni materijali'],
  },
  {
    slug: 'parket-hrast-zagreb',
    title: 'Hrastov parket - Zagreb',
    description: 'Postavljanje masivnog hrastovog parketa u stanu od 85 m². Klasičan uzorak riblje kosti.',
    serviceSlug: 'podovi',
    serviceName: 'Drveni podovi',
    images: ['/images/gallery/parket-1.jpg'],
    completedYear: 2024,
    location: 'Zagreb',
    materials: ['Hrast'],
  },
];
