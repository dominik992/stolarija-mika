export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  faqs: ServiceFAQ[];
  seoTitle: string;
  seoDescription: string;
  relatedSlugs: string[];
}

export const services: Service[] = [
  {
    slug: 'kuhinje',
    name: 'Kuhinje po mjeri',
    shortDescription: 'Izrađujemo kuhinje po mjeri koje savršeno pristaju vašem prostoru i stilu života.',
    fullDescription: 'S više od 25 godina iskustva u izradi kuhinja po mjeri, Stolarija Mika stvara funkcionalne i estetski privlačne kuhinjske prostore. Svaka kuhinja je jedinstvena - od prvog mjerenja do finalne ugradnje, posvećujemo pažnju svakom detalju. Koristimo vrhunske materijale i suvremene tehnike obrade drva kako bismo osigurali dugotrajnost i ljepotu vaše kuhinje. Nudimo širok izbor stilova - od rustikalnog zagorskog do modernog minimalističkog dizajna.',
    icon: 'chef-hat',
    features: [
      'Besplatno mjerenje i savjetovanje',
      'Dizajn prilagođen vašem prostoru',
      'Širok izbor vrsta drva i završnih obrada',
      'Ugradnja kuhinjskih aparata',
      'Funkcionalna rješenja za odlaganje',
      'Jamstvo na kvalitetu izrade',
    ],
    faqs: [
      { question: 'Koliko traje izrada kuhinje po mjeri?', answer: 'Izrada kuhinje po mjeri obično traje između 4 i 8 tjedana, ovisno o složenosti projekta. U to je uključeno mjerenje, dizajn, izrada i ugradnja.' },
      { question: 'Koje vrste drva koristite za kuhinje?', answer: 'Najčešće koristimo hrast, bukvu, jasen i orah. Svaka vrsta drva ima svoje prednosti - hrast je izuzetno izdržljiv, bukva je elastična, jasen ima prekrasnu teksturu, a orah daje luksuzan izgled.' },
      { question: 'Mogu li odabrati stil i boju kuhinje?', answer: 'Naravno! Svaka kuhinja se izrađuje prema vašim željama. Možete birati između prirodnog drva, lakiranih, bajcanih ili kombiniranih završnih obrada u bilo kojoj boji.' },
      { question: 'Koliko košta kuhinja po mjeri?', answer: 'Cijena ovisi o dimenzijama, vrsti drva i složenosti dizajna. Kontaktirajte nas za besplatnu procjenu - pripremit ćemo ponudu prilagođenu vašem budžetu.' },
    ],
    seoTitle: 'Kuhinje po mjeri | Stolarija Mika - Donja Stubica',
    seoDescription: 'Izrađujemo kuhinje po mjeri od kvalitetnog drva. 25 godina iskustva, besplatno mjerenje i savjetovanje. Stolarija Mika, Donja Stubica.',
    relatedSlugs: ['namjestaj', 'stepenice'],
  },
  {
    slug: 'namjestaj',
    name: 'Namještaj po mjeri',
    shortDescription: 'Unikatni komadi namještaja izrađeni ručno prema vašim željama i potrebama.',
    fullDescription: 'Svaki komad namještaja koji izrađujemo je jedinstven. Bilo da vam treba ormar, komoda, polica za knjige, radni stol ili blagovaonski stol - izradit ćemo ga točno po vašim mjerama i željama. Naš majstor Mika s 25 godina iskustva jamči kvalitetu koja traje generacijama. Spajamo tradicijske stolarske tehnike s modernim dizajnom kako bismo stvorili namještaj koji je funkcionalan i prekrasan.',
    icon: 'armchair',
    features: [
      'Ručna izrada svakog komada',
      'Prilagođene dimenzije i dizajn',
      'Prirodni materijali najviše kvalitete',
      'Tradicionalne stolarske tehnike',
      'Dostava i montaža uključene',
      'Mogućnost restauracije starog namještaja',
    ],
    faqs: [
      { question: 'Što sve možete izraditi od namještaja?', answer: 'Izrađujemo sve vrste namještaja - ormare, komode, police, stolove, stolice, krevete, klupe, vitrine i mnogo više. Ako se može napraviti od drva, mi to možemo izraditi.' },
      { question: 'Koliko dugo traje ručno izrađen namještaj?', answer: 'Kvalitetno izrađen drveni namještaj traje desetljećima, često i generacijama. Koristimo provjerene tehnike spajanja i kvalitetne materijale koji osiguravaju dugotrajnost.' },
      { question: 'Da li dostavljate namještaj?', answer: 'Da, vršimo dostavu i montažu po cijeloj Hrvatskoj. Za veće projekte dostava je uključena u cijenu.' },
      { question: 'Mogu li donijeti vlastiti dizajn?', answer: 'Apsolutno! Možete nam donijeti skicu, fotografiju ili opis onoga što želite, a mi ćemo to pretvoriti u stvarnost. Također nudimo i vlastite prijedloge dizajna.' },
    ],
    seoTitle: 'Namještaj po mjeri | Stolarija Mika - Donja Stubica',
    seoDescription: 'Ručno izrađen namještaj po mjeri od kvalitetnog drva. Ormari, stolovi, komode i više. 25 godina iskustva. Stolarija Mika, Donja Stubica.',
    relatedSlugs: ['kuhinje', 'vrata'],
  },
  {
    slug: 'vrata',
    name: 'Unutarnja vrata',
    shortDescription: 'Drvena unutarnja vrata koja daju karakter vašem domu - puna, staklena ili klizna.',
    fullDescription: 'Unutarnja vrata su više od prolaza - ona definiraju karakter vašeg prostora. U Stolariji Mika izrađujemo drvena unutarnja vrata koja kombiniraju estetiku i funkcionalnost. Nudimo puna vrata, vrata sa staklenim umetcima, klizna vrata i dvokrilna vrata u raznim stilovima. Svaka vrata su ručno izrađena od kvalitetnog drva s preciznim mjerama prilagođenim vašem prostoru.',
    icon: 'door-open',
    features: [
      'Puna, staklena i klizna vrata',
      'Razne vrste drva i završnih obrada',
      'Precizne mjere za savršen pristup',
      'Zvučna i toplinska izolacija',
      'Moderna i klasična rješenja',
      'Profesionalna ugradnja',
    ],
    faqs: [
      { question: 'Koje vrste unutarnjih vrata nudite?', answer: 'Nudimo puna drvena vrata, vrata sa staklenim umetcima, klizna vrata, dvokrilna vrata i sklopiva vrata. Svi modeli dostupni su u raznim vrstama drva i završnim obradama.' },
      { question: 'Koliko je važna zvučna izolacija vrata?', answer: 'Vrlo je važna za udobnost stanovanja. Naša puna drvena vrata pružaju odličnu zvučnu izolaciju. Debljina i vrsta drva utječu na razinu izolacije.' },
      { question: 'Da li ugrađujete i okove?', answer: 'Da, u cijenu je uključena kompletna ugradnja s okovima. Možete birati između raznih stilova kvaka, šarki i brava.' },
    ],
    seoTitle: 'Unutarnja drvena vrata po mjeri | Stolarija Mika',
    seoDescription: 'Drvena unutarnja vrata po mjeri - puna, staklena, klizna. Kvalitetna izrada i profesionalna ugradnja. Stolarija Mika, Donja Stubica.',
    relatedSlugs: ['prozori', 'namjestaj'],
  },
  {
    slug: 'prozori',
    name: 'Drveni prozori',
    shortDescription: 'Energetski učinkoviti drveni prozori koji donose toplinu i prirodnu ljepotu drva.',
    fullDescription: 'Drveni prozori su klasičan izbor koji nikad ne izlazi iz mode. Naši prozori kombiniraju prirodnu ljepotu drva s modernom energetskom učinkovitošću. Koristimo kvalitetne vrste drva koje su otporne na vremenske uvjete i osiguravaju dugotrajnost. Svaki prozor je ručno izrađen s preciznim mjerama i vrhunskim brtvljenjem za optimalnu toplinsku i zvučnu izolaciju.',
    icon: 'panel-top',
    features: [
      'Vrhunska toplinska izolacija',
      'Višeslojna konstrukcija',
      'Otpornost na vremenske uvjete',
      'IZO staklo opcija',
      'Razni profili i dimenzije',
      'Dugotrajnost uz pravilno održavanje',
    ],
    faqs: [
      { question: 'Zašto odabrati drvene prozore umjesto PVC-a?', answer: 'Drveni prozori nude bolju toplinsku izolaciju, prirodan izgled, ekološki su prihvatljivi i uz pravilno održavanje traju više od 50 godina. Drvo je obnovljiv materijal koji \"diše\" i regulira vlagu u prostoriji.' },
      { question: 'Koliko često treba održavati drvene prozore?', answer: 'Preporučujemo osvježavanje zaštitnog premaza svakih 5-7 godina. Pravilno održavanje osigurava dugotrajnost i lijep izgled prozora desetljećima.' },
      { question: 'Mogu li dobiti IZO staklo u drvenim prozorima?', answer: 'Da, naši drveni prozori mogu se opremiti dvoslojnim ili troslojnim IZO staklom za maksimalnu energetsku učinkovitost.' },
    ],
    seoTitle: 'Drveni prozori po mjeri | Stolarija Mika - Hrvatska',
    seoDescription: 'Energetski učinkoviti drveni prozori ručne izrade. Toplinska izolacija, IZO staklo, dugotrajnost. Stolarija Mika, Donja Stubica.',
    relatedSlugs: ['vrata', 'pergole'],
  },
  {
    slug: 'stepenice',
    name: 'Drvene stepenice',
    shortDescription: 'Elegantne drvene stepenice koje postaju centralni element vašeg doma.',
    fullDescription: 'Stepenice nisu samo funkcionalni element - one mogu biti pravi umjetnički izraz u vašem domu. U Stolariji Mika izrađujemo drvene stepenice svih vrsta: ravne, L-oblik, U-oblik, spiralne i lebdeće. Svake stepenice su izrađene po mjeri prostora s posebnom pažnjom na sigurnost, ergonomiju i estetiku. Koristimo najkvalitetnije tvrde vrste drva za maksimalnu izdržljivost.',
    icon: 'stairs',
    features: [
      'Sve vrste stepenica (ravne, L, U, spiralne)',
      'Ručno izrađene ograde i rukohvati',
      'Tvrde vrste drva za izdržljivost',
      'Protuklizna obrada gazišta',
      'Prilagođene dimenzijama prostora',
      'Mogućnost kombinacije s drugim materijalima',
    ],
    faqs: [
      { question: 'Koje vrste stepenica izrađujete?', answer: 'Izrađujemo ravne stepenice, L-stepenice, U-stepenice, spiralne stepenice i moderne lebdeće stepenice. Svaki tip prilagođavamo dimenzijama vašeg prostora.' },
      { question: 'Koje drvo je najbolje za stepenice?', answer: 'Za stepenice preporučujemo hrast ili jasen jer su izuzetno tvrdi i otporni na habanje. Bukva je također odličan izbor za unutarnje stepenice.' },
      { question: 'Koliko traje izrada stepenica?', answer: 'Izrada i ugradnja stepenica obično traje 3-6 tjedana, ovisno o složenosti projekta i vrsti stepenica.' },
    ],
    seoTitle: 'Drvene stepenice po mjeri | Stolarija Mika',
    seoDescription: 'Elegantne drvene stepenice po mjeri - ravne, spiralne, lebdeće. Ručna izrada od kvalitetnog drva. Stolarija Mika, Donja Stubica.',
    relatedSlugs: ['podovi', 'namjestaj'],
  },
  {
    slug: 'podovi',
    name: 'Drveni podovi',
    shortDescription: 'Parket i masivni drveni podovi koji unose toplinu u svaki prostor.',
    fullDescription: 'Ništa ne može zamijeniti toplinu i ljepotu pravog drvenog poda. U Stolariji Mika nudimo postavljanje masivnog parketa, brodskog poda i drvenih podova po mjeri. Radimo s najkvalitetnijim vrstama drva koje osiguravaju dugotrajnost i otpornost na habanje. Naša usluga uključuje pripremu podloge, postavljanje, brušenje i završnu obradu - sve na jednom mjestu.',
    icon: 'layers',
    features: [
      'Masivni parket i brodski pod',
      'Priprema podloge uključena',
      'Brušenje i lakiranje',
      'Širok izbor vrsta drva',
      'Razni uzorci postavljanja',
      'Renovacija postojećih drvenih podova',
    ],
    faqs: [
      { question: 'Koja vrsta drvenog poda je najpopularnija?', answer: 'Hrastov parket je najpopularniji izbor zbog svoje izdržljivosti, lijepog izgleda i dugotrajnosti. Također su popularni jasenov i orahov parket.' },
      { question: 'Može li se obnoviti stari drveni pod?', answer: 'Da! Stare drvene podove možemo obnoviti brušenjem i ponovnim lakiranjem ili uljenje. To je ekonomičniji i ekološki prihvatljiviji izbor od potpune zamjene.' },
      { question: 'Koliko traje postavljanje drvenog poda?', answer: 'Za prosječnu prostoriju postavljanje traje 2-4 dana, uključujući pripremu podloge, postavljanje, brušenje i završnu obradu.' },
    ],
    seoTitle: 'Drveni podovi i parket | Stolarija Mika - Hrvatska',
    seoDescription: 'Postavljanje masivnog parketa i drvenih podova. Brušenje, lakiranje, renovacija. Kvalitetne vrste drva. Stolarija Mika, Donja Stubica.',
    relatedSlugs: ['stepenice', 'namjestaj'],
  },
  {
    slug: 'pergole',
    name: 'Pergole i nadstrešnice',
    shortDescription: 'Drvene pergole i nadstrešnice koje proširuju vaš životni prostor na otvoreno.',
    fullDescription: 'Pergole i nadstrešnice od drva savršeno proširuju vaš životni prostor na otvoreno. Izrađujemo pergole za terase, vrtove i dvorišta koje pružaju ugodnu sjenu i elegantan izgled. Koristimo impregnirano drvo otporno na vremenske uvjete za maksimalnu trajnost. Nudimo razne dizajne - od klasičnih do modernih, s mogućnošću dodavanja platnenih zastora ili bioklimatskih lamela.',
    icon: 'tent-tree',
    features: [
      'Otpornost na vremenske uvjete',
      'Impregnirano i zaštićeno drvo',
      'Prilagođene dimenzije',
      'Klasični i moderni dizajni',
      'Mogućnost dodavanja zastora',
      'Stabilna konstrukcija',
    ],
    faqs: [
      { question: 'Koje drvo je najbolje za pergolu?', answer: 'Za vanjske konstrukcije preporučujemo bor ili ariš koji su prirodno otporni na vlagu. Drvo se dodatno impregnira i zaštićuje premazima za maksimalnu otpornost na vremenske uvjete.' },
      { question: 'Treba li dozvola za postavljanje pergole?', answer: 'Za manje pergole obično nije potrebna građevinska dozvola, ali preporučujemo provjeriti lokalne propise. Pergole do 15 m² najčešće ne zahtijevaju dozvolu.' },
      { question: 'Koliko dugo traje drvena pergola?', answer: 'Pravilno tretirana drvena pergola traje 15-25 godina. Redovno održavanje (premaz svakih 2-3 godine) značajno produžuje vijek trajanja.' },
    ],
    seoTitle: 'Drvene pergole i nadstrešnice | Stolarija Mika',
    seoDescription: 'Drvene pergole i nadstrešnice po mjeri za terase i vrtove. Otporno na vremenske uvjete, elegantni dizajni. Stolarija Mika, Donja Stubica.',
    relatedSlugs: ['prozori', 'podovi'],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return services.filter((s) => slugs.includes(s.slug));
}
