export interface Testimonial {
  name: string;
  location: string;
  text: string;
  service: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Marija K.',
    location: 'Zagreb',
    text: 'Kuhinja je ispala fantastično! Mika je bio profesionalan od prvog susreta do zadnjeg vijka. Svaki detalj je na mjestu, a kvaliteta drva se vidi i osjeti. Preporučujem svima!',
    service: 'Kuhinje po mjeri',
    rating: 5,
  },
  {
    name: 'Ivan P.',
    location: 'Donja Stubica',
    text: 'Naručio sam stepenice od hrastovine i rezultat je iznad svih očekivanja. Mika je pravi majstor koji voli svoj posao. Stepenice su postale centralni dio našeg doma.',
    service: 'Drvene stepenice',
    rating: 5,
  },
  {
    name: 'Ana M.',
    location: 'Oroslavje',
    text: 'Restaurirali smo bakin ormar star preko 100 godina. Mika je vratio sjaj i čvrstoću, a pritom sačuvao originalni karakter. Obitelj je oduševljena!',
    service: 'Restauracija namještaja',
    rating: 5,
  },
  {
    name: 'Tomislav B.',
    location: 'Zabok',
    text: 'Pergola u dvorištu je točno onakva kakvu smo zamislili. Kvalitetna izrada, lijepo drvo i fer cijena. Mika drži riječ - kad kaže rok, tog roka se i drži.',
    service: 'Pergole i nadstrešnice',
    rating: 5,
  },
  {
    name: 'Petra S.',
    location: 'Stubičke Toplice',
    text: 'Naručili smo komplet unutarnjih vrata za kuću. Svaka pohvala na preciznost ugradnje i kvalitetu izrade. Vrata su prekrasna i savršeno izoliraju zvuk.',
    service: 'Unutarnja vrata',
    rating: 5,
  },
];
