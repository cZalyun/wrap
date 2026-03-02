import type { Locale } from '../i18n/utils';

export interface LocaleString {
  en: string;
  hu: string;
}

export interface WorkItem {
  slug: string;
  title: LocaleString;
  subtitle: LocaleString;
  category: LocaleString;
  description: LocaleString;
  coverImage: string;
  year: number;
  role: LocaleString;
  metrics?: { label: LocaleString; value: string }[];
}

export interface TeamMember {
  name: string;
  role: LocaleString;
  bio: LocaleString;
  image: string;
  phoneParts: [string, string, string]; // [country, area, number] assembled client-side
  emailParts: [string, string, string]; // [user, domain, tld]
}

export interface Testimonial {
  quote: LocaleString;
  author: string;
  company: string;
  role: LocaleString;
  image: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface LegalLink {
  enabled: boolean;
  url?: string; // external URL — if omitted, text is shown without a link
}

export interface SiteConfig {
  brand: string;
  tagline: LocaleString;
  heroVideo: string;
  heroPoster: string;
  foundersBannerImage: string;
  servicesImage: string;
  brands: string[];
  legal: {
    privacy: LegalLink;
    terms: LegalLink;
  };
  navigation: { key: string; path: string }[];
  work: WorkItem[];
  team: TeamMember[];
  testimonials: Testimonial[];
  socials: SocialLink[];
}

export const siteConfig: SiteConfig = {
  brand: 'Wrap Studios',
  tagline: {
    en: 'Cinematic Storytelling & Brand Films',
    hu: 'Filmes történetmesélés & Márkafilmek',
  },
  // heroVideo: 'https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4',
  heroVideo: '/images/videos/hero-video.mp4',
  heroPoster: '/images/hero-poster.svg',
  foundersBannerImage: '/images/hero-poster.svg',
  servicesImage: '/images/hero-poster.svg',
  brands: ['AURORA', 'MERIDIAN', 'SOLACE', 'VANTAGE', 'ELARA', 'NEXUS', 'PRISM', 'LUMIÈRE'],
  legal: {
    privacy: { enabled: true, url: undefined },
    terms: { enabled: true, url: undefined },
  },

  navigation: [
    { key: 'nav.home', path: '/' },
    { key: 'nav.work', path: '/work' },
    { key: 'nav.about', path: '/about' },
    { key: 'nav.contact', path: '/contact' },
  ],

  work: [
    {
      slug: 'aurora-campaign',
      title: { en: 'Aurora Campaign', hu: 'Aurora Kampány' },
      subtitle: { en: 'A cinematic journey through light and motion', hu: 'Filmes utazás a fény és a mozgás világában' },
      category: { en: 'Brand Film', hu: 'Márkafilm' },
      description: {
        en: 'We crafted a cinematic brand film for Aurora that captured the essence of their innovative lighting technology. The project spanned three locations across Europe, featuring dynamic cinematography and a compelling narrative arc that elevated the brand\'s premium positioning.',
        hu: 'Egy filmes márkafilmet készítettünk az Aurora számára, amely megragadta innovatív világítástechnológiájuk lényegét. A projekt három európai helyszínen zajlott, dinamikus operatőri munkával és meggyőző narratív ívvel.',
      },
      coverImage: '/images/work/aurora.svg',
      year: 2024,
      role: { en: 'Full Production & Post', hu: 'Teljes gyártás & Utómunka' },
      metrics: [
        { label: { en: 'Views', hu: 'Megtekintés' }, value: '2.4M' },
        { label: { en: 'Engagement', hu: 'Elköteleződés' }, value: '+340%' },
      ],
    },
    {
      slug: 'meridian-motors',
      title: { en: 'Meridian Motors', hu: 'Meridian Motors' },
      subtitle: { en: 'Redefining automotive storytelling', hu: 'Az autóipari történetmesélés újragondolása' },
      category: { en: 'Automotive', hu: 'Autóipar' },
      description: {
        en: 'A high-end automotive campaign for Meridian Motors that showcased their flagship electric vehicle through breathtaking aerial cinematography and intimate detail shots. We captured the intersection of performance and elegance.',
        hu: 'Egy prémium autóipari kampány a Meridian Motors számára, amely lélegzetelállító légi felvételekkel és intim részletfelvételekkel mutatta be csúcsmodelljüket.',
      },
      coverImage: '/images/work/meridian.svg',
      year: 2024,
      role: { en: 'Creative Direction & Production', hu: 'Kreatív irányítás & Gyártás' },
      metrics: [
        { label: { en: 'Duration', hu: 'Időtartam' }, value: '90s' },
        { label: { en: 'Locations', hu: 'Helyszínek' }, value: '5' },
      ],
    },
    {
      slug: 'solace-fashion',
      title: { en: 'Solace', hu: 'Solace' },
      subtitle: { en: 'Fashion through a cinematic lens', hu: 'Divat filmes szemszögből' },
      category: { en: 'Fashion', hu: 'Divat' },
      description: {
        en: 'An editorial fashion film for Solace that blended high fashion with raw emotional storytelling. Shot on location in a brutalist architectural setting, we created a visual language that resonated across digital and traditional media.',
        hu: 'Egy szerkesztőségi divatfilm a Solace számára, amely ötvözte a haute couture-t a nyers érzelmi történetmeséléssel. Brutalista építészeti környezetben forgatva, egy vizuális nyelvet hoztunk létre.',
      },
      coverImage: '/images/work/solace.svg',
      year: 2023,
      role: { en: 'Direction & Cinematography', hu: 'Rendezés & Operatőri munka' },
    },
    {
      slug: 'vantage-tech',
      title: { en: 'Vantage', hu: 'Vantage' },
      subtitle: { en: 'Technology meets emotion', hu: 'Ahol a technológia és az érzelem találkozik' },
      category: { en: 'Technology', hu: 'Technológia' },
      description: {
        en: 'We produced a series of product films for Vantage that humanized cutting-edge technology. Through careful narrative design and striking visual compositions, we transformed complex features into compelling stories.',
        hu: 'Egy termékfilm-sorozatot készítettünk a Vantage számára, amely emberközelivé tette az élvonalbeli technológiát. Gondos narratív tervezéssel és lenyűgöző vizuális kompozíciókkal.',
      },
      coverImage: '/images/work/vantage.svg',
      year: 2023,
      role: { en: 'Full Production', hu: 'Teljes gyártás' },
      metrics: [
        { label: { en: 'Deliverables', hu: 'Anyagok' }, value: '12' },
        { label: { en: 'Platforms', hu: 'Platformok' }, value: '6' },
      ],
    },
    {
      slug: 'elara-wellness',
      title: { en: 'Elara', hu: 'Elara' },
      subtitle: { en: 'Wellness redefined', hu: 'Újragondolt wellness' },
      category: { en: 'Lifestyle', hu: 'Életmód' },
      description: {
        en: 'A brand film series for Elara Wellness that captured the tranquility and transformation at the heart of their brand. We used natural light and flowing compositions to create a meditative visual experience.',
        hu: 'Egy márkafilm-sorozat az Elara Wellness számára, amely megragadta a nyugalmat és az átalakulást a márkájuk szívében.',
      },
      coverImage: '/images/work/elara.svg',
      year: 2023,
      role: { en: 'Creative & Production', hu: 'Kreatív & Gyártás' },
    },
  ],

  team: [
    {
      name: 'Alex Kovács',
      role: { en: 'Co-Founder & Creative Director', hu: 'Társalapító & Kreatív igazgató' },
      bio: {
        en: 'With over a decade of experience in cinematic storytelling, Alex brings a unique vision to every project. His work blends emotion, artistry, and strategic thinking to create films that resonate deeply with audiences.',
        hu: 'Több mint egy évtizedes tapasztalattal a filmes történetmesélésben, Alex egyedi víziót hoz minden projektbe. Munkája ötvözi az érzelmet, a művészetet és a stratégiai gondolkodást.',
      },
      image: '/images/team/alex.svg',
      phoneParts: ['+36', '30', '123 4567'],
      emailParts: ['alex', 'wrapstudios', 'com'],
    },
    {
      name: 'Márk Tóth',
      role: { en: 'Co-Founder & Director of Photography', hu: 'Társalapító & Operatőr' },
      bio: {
        en: 'Márk is passionate about bringing visions to life through powerful, cinematic visuals. His work blends emotion, storytelling, cinematography, and color to create content that connects on a deeper level.',
        hu: 'Márk szenvedélyesen kelti életre az elképzeléseket erőteljes, filmes vizuálokon keresztül. Munkája ötvözi az érzelmet, a történetmesélést, az operatőri munkát és a színeket.',
      },
      image: '/images/team/mark.svg',
      phoneParts: ['+36', '30', '765 4321'],
      emailParts: ['mark', 'wrapstudios', 'com'],
    },
  ],

  testimonials: [
    {
      quote: {
        en: 'Working with Wrap Studios has taken our production and brand to a whole new level. They cut through the unnecessary fluff, delivering the full process from concept to post. The experience of working with a focused team who truly delivers better results has been a game changer.',
        hu: 'A Wrap Studios-szal való munka teljesen új szintre emelte a produkciónkat és márkánkat. Átvágták a felesleges részt, és a teljes folyamatot szállították a koncepciótól az utómunkáig.',
      },
      author: 'Sophie Laurent',
      company: 'Aurora Technologies',
      role: { en: 'Head of Marketing', hu: 'Marketing vezető' },
      image: '/images/work/aurora.svg',
    },
    {
      quote: {
        en: 'Working with Wrap Studios was seamless, even from across the globe. They understood our brand and vision right away, and delivered a cinematic, high-quality video that exceeded expectations. Communication was clear and easy throughout.',
        hu: 'A Wrap Studios-szal való munka zökkenőmentes volt, még a világ túlfeléről is. Azonnal megértették a márkánkat és a víziónkat, és egy filmes, kiváló minőségű videót szállítottak, ami felülmúlta az elvárásainkat.',
      },
      author: 'James Chen',
      company: 'Meridian Motors',
      role: { en: 'Brand Director', hu: 'Márkaigazgató' },
      image: '/images/work/meridian.svg',
    },
    {
      quote: {
        en: 'The team moved fast and efficiently, executing a full campaign shoot in just one day while maximising every setup. They delivered story-driven videos that felt cinematic and premium, clearly highlighting our product features in a compelling way.',
        hu: 'A csapat gyorsan és hatékonyan dolgozott, egy teljes kampányforgatást végrehajtva egyetlen nap alatt. Történetvezérelt videókat szállítottak, amelyek filmesnek és prémiumnak hatottak.',
      },
      author: 'Elena Rossi',
      company: 'Vantage',
      role: { en: 'CEO', hu: 'Vezérigazgató' },
      image: '/images/work/solace.svg',
    },
  ],

  socials: [
    { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
    { name: 'Vimeo', url: 'https://vimeo.com', icon: 'vimeo' },
    { name: 'YouTube', url: 'https://youtube.com', icon: 'youtube' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  ],
};

export function getLocalizedString(ls: LocaleString, locale: Locale): string {
  return ls[locale] || ls.en;
}

export function getWorkBySlug(slug: string): WorkItem | undefined {
  return siteConfig.work.find((w) => w.slug === slug);
}

export function getAllWorkSlugs(): string[] {
  return siteConfig.work.map((w) => w.slug);
}
