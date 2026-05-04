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
  /** Optional dedicated 1200×630 JPEG/PNG for link previews. Falls back to coverImage, then site default. */
  ogImage?: string;
  year?: number;
  role: LocaleString;
  metrics?: { label: LocaleString; value: string }[];
  /** Video file path for work item */
  videoFile?: string;
  /** Optional HEVC version for better compression */
  videoFileHEVC?: string;
  /**
   * How the cover/poster image fits its frame across the work grid, detail page,
   * and featured/list cards. Defaults to 'cover' (cinematic crop). Use 'contain'
   * for posters/logos/key art that must be shown without cropping.
   */
  coverFit?: 'cover' | 'contain';
  /** CSS object-position for the cover image. Defaults to 'center'. */
  coverPosition?: string;
  /**
   * Background color/gradient painted behind the cover when coverFit is 'contain'
   * or the image has transparency. Any valid CSS background value.
   */
  coverBackground?: string;
  /**
   * CSS padding inside the cover frame, useful when the cover is a logo or square
   * key art. Accepts any CSS length, e.g. '12%' or '1.5rem'.
   */
  coverPadding?: string;
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

export interface FilmStill {
  /** Public path under /images, e.g. '/images/stills/dante-17.jpg' */
  src: string;
  /** Localized alt text for accessibility */
  alt: LocaleString;
  /** Optional eyebrow line above the heading (small uppercase) */
  eyebrow?: LocaleString;
  /** Optional headline rendered as a white-on-dark overlay */
  heading?: LocaleString;
  /** Optional CTA shown below the heading */
  cta?: { label: LocaleString; href: string };
  /** Optional CSS object-position to control crop focal point, e.g. 'center 30%' */
  focal?: string;
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
  /** When true, locks the site to English only and hides the language switcher */
  singleLocale?: boolean;
  brand: string;
  tagline: LocaleString;
  /** White/light logo — use on dark backgrounds (dark mode, hero) */
  logoLight: string;
  /** Black/dark logo — use on light backgrounds (light mode) */
  logoDark: string;
  /** Icon-only mark without "Film Factory" text — used in the intro/definition block */
  logoIcon: string;
  heroVideo: string;
  heroVideoMobile: string;
  heroVideoHEVC: string;
  heroVideoMobileHEVC: string;
  heroPoster: string;
  ogImage: string;
  favicon: string;
  siteUrl: string;
  contact: ContactInfo;
  legal: LegalInfo;
  navigation: NavigationItem[];
  work: WorkItem[];
  team: TeamMember[];
  testimonials: Testimonial[];
  /** Side image on the home page Definition section. Falls back to single-column layout if undefined. */
  homeDefinitionStill?: FilmStill;
  /** Single cinematic full-bleed break between BrandMarquee and Process. Auto-hides if undefined. */
  homeInterludeStill?: FilmStill;
  /** Full-bleed photo background for the home CTA section. Falls back to flat dark CTA if undefined. */
  homeCtaStill?: FilmStill;
  socials: SocialLink[];
  /** Maximum width for work video tiles in pixels */
  workTileMaxSize?: number;
  /** When true, hides the featured work section from the home page */
  hideFeaturedWork?: boolean;
}

export const siteConfig: SiteConfig = {
  singleLocale: true,
  brand: 'Wrap Film Factory',
  tagline: {
    en: 'Brand Storytelling in Motion',
    hu: 'Brand Storytelling in Motion',
  },
  logoLight: '/images/logo-white.png',
  logoDark: '/images/logo-black.png',
  logoIcon: '/images/logo-icon.jpg',
  // heroVideo: 'https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4',
  heroVideo: '/images/videos/hero-video.hevc.small.mp4',
  heroVideoMobile: '/images/videos/hero-video-mobile-portrait.hevc.small.mp4',
  heroVideoHEVC: '/images/videos/hero-video.hevc.small.mp4',
  heroVideoMobileHEVC: '/images/videos/hero-video-mobile-portrait.hevc.small.mp4',
  heroPoster: '/images/hero-poster.svg',
  heroHeading: {
    en: 'BRAND STORYTELLING IN MOTION',
    hu: 'BRAND STORYTELLING IN MOTION',
  },
  introText: {
    en: 'Where concept meets craft. We create high-impact films designed to stay with the audience. Bold visuals, clear intent, and zero fluff. This is how your story should look.\n\nWhen we say "it\'s a wrap," it means your vision has finally come to life.',
    hu: 'Ahol a koncepció találkozik a mesterséggel. Nagy hatású filmeket készítünk, amelyek a nézőkkel maradnak. Merész vizuálok, egyértelmű szándék, felesleges tartalom nélkül. Így kellene kinéznie a te történetednek.\n\nAmikor azt mondjuk: "it\'s a wrap" — a te víziód végre életre kelt.',
  },
  foundersBannerImage: '/images/hero-poster.svg',
  servicesImage: '/images/hero-poster.svg',
  brands: [
    { name: 'AutoWallis Group', image: '/images/brands/AutoWallisGroup_LOGO_black.png' },
    { name: 'NFI – Nemzeti Filmintézet', image: '/images/brands/NFI_alap_BLACK_HU.png' },
    { name: 'Ensana', image: '/images/brands/ensana_logo-2.webp' },
    { name: 'Kabinka', image: '/images/brands/kabinka_logo_allo-210x300.png' },
    { name: 'Magyar Autóklub', image: '/images/brands/magyar_autoklub_logo_ALAP.png' },
    { name: 'Müpa Budapest', image: '/images/brands/mupa_logo_black.png' },
    { name: 'Sooda', image: '/images/brands/sooda_logo_black.png' },
  ],
  homeDefinitionStill: { src: '/images/stills/dante-17.jpg', alt: { en: 'Dante — production still', hu: 'Dante — produkciós kép' } },
  homeInterludeStill:  { src: '/images/stills/dante-26.jpg', alt: { en: 'Dante — production still', hu: 'Dante — produkciós kép' } },
  homeCtaStill:        { src: '/images/stills/dante-27.jpg', alt: { en: 'Dante — production still', hu: 'Dante — produkciós kép' } },
  contactPageTitle: {
    en: 'Your story. Our wrap.',
    hu: 'A te történeted. A mi wrapünk.',
  },
  contactPageSubtitle: {
    en: 'Have a project in mind or just want to connect?\nDrop us a message — we\'d love to hear from you.',
    hu: 'Van egy projekted, vagy csak kapcsolatba szeretnél lépni?\nKüldj üzenetet — szívesen halljuk.',
  },
  contactEmail: ['hello', 'wrapfilm', 'hu'],
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
      slug: 'hero-reel',
      title: { en: '', hu: '' },
      subtitle: { en: 'Brand storytelling in motion', hu: 'Brand storytelling in motion' },
      category: { en: '', hu: '' },
      description: {
        en: 'A showcase of our cinematic approach to brand storytelling.',
        hu: 'A showcase of our cinematic approach to brand storytelling.',
      },
      coverImage: '/images/hero-thumbnail.jpeg',
      videoFile: '/images/videos/hero-video.mp4',
      videoFileHEVC: '/images/videos/hero-video.hevc.mp4',
      year: undefined,
      role: { en: 'Full Production', hu: 'Full Production' },
      metrics: [],
    },
    {
      slug: 'dante-1-percent',
      title: {
        en: 'Dante — 1% Campaign',
        hu: 'Dante — 1% Kampány',
      },
      subtitle: {
        en: 'A cinematic appeal for the Dante Foundation\u2019s 1% tax-donation campaign.',
        hu: 'Filmes felhívás a Dante Alapítvány 1%-os felajánlási kampányához.',
      },
      category: {
        en: 'NGO Campaign Film',
        hu: 'NGO kampányfilm',
      },
      description: {
        en: 'An emotionally driven campaign film made for the Dante Foundation to amplify their 1% tax-donation appeal. We blended documentary intimacy with cinematic craft so every viewer can feel the human story behind the choice — turning a single checkbox on a tax return into a meaningful act of support.',
        hu: 'Érzelmileg vezérelt kampányfilm a Dante Alapítvány számára, amely a szervezet 1%-os felajánlási kérését erősíti. Dokumentarista közelséget és filmes mívességet ötvöztünk, hogy minden néző átérezze a döntés mögötti emberi történetet — egy egyszerű adóbevallásbeli pipából értelmes támogatást formálva.',
      },
      coverImage: '/images/work/dante-1-percent.png',
      videoFile: '/images/videos/dante-1-percent.mp4',
      coverFit: 'contain',
      coverBackground: 'transparent',
      coverPadding: 'clamp(1.5rem, 12%, 4rem)',
      coverPosition: 'center',
      year: 2026,
      role: {
        en: 'Concept, Direction & Production',
        hu: 'Koncepció, rendezés és produkció',
      },
      metrics: [],
    }
  ],

  team: [
    /*
    {
      name: 'Alex Kovács',
      role: { en: 'Co-Founder & Creative Director', hu: 'Társalapító & Kreatív igazgató' },
      bio: {
        en: 'With over a decade of experience in cinematic storytelling, Alex brings a unique vision to every project. His work blends emotion, artistry, and strategic thinking to create films that resonate deeply with audiences.',
        hu: 'Több mint egy évtizedes tapasztalattal a filmes történetmesélésben, Alex egyedi víziót hoz minden projektbe. Munkája ötvözi az érzelmet, a művészetet és a stratégiai gondolkodást.',
      },
      image: '/images/team/alex.svg',
      phoneParts: ['+36', '30', '123 4567'],
      emailParts: ['alex', 'wrapfilm', 'hu'],
    },
    {
      name: 'Márk Tóth',
      role: { en: 'Co-Founder & Director of Photography', hu: 'Társalapító & Operatőr' },
      bio: {
        en: 'Márk is passionate about bringing visions to life through powerful, cinematic visuals. His work blends emotion, storytelling, cinematography, and color to create content that connects on a deeper level.',
        hu: 'Márk szenvedélyesen kelti életre az elképzeléseket erőtelmes, filmes vizuálokon keresztül. Munkája ötvözi az érzelmet, a történetmesélést, az operatőri munkát és a színeket.',
      },
      image: '/images/team/mark.svg',
      phoneParts: ['+36', '30', '765 4321'],
      emailParts: ['mark', 'wrapfilm', 'hu'],
    },
    */
  ],

  testimonials: [
  /*
    {
      quote: {
        en: 'Working with Wrap Film Factory has taken our production and brand to a whole new level. They cut through the unnecessary fluff, delivering the full process from concept to post. The experience of working with a focused team who truly delivers better results has been a game changer.',
        hu: 'A Wrap Film Factory-val való munka teljesen új szintre emelte a produkciónkat és márkánkat. Átvágták a felesleges részt, és a teljes folyamatot szállították a koncepciótól az utómunkáig.',
      },
      author: 'Sophie Laurent',
      company: 'Aurora Technologies',
      role: { en: 'Head of Marketing', hu: 'Marketing vezető' },
      image: '/images/work/aurora.svg',
    },
    {
      quote: {
        en: 'Working with Wrap Film Factory was seamless, even from across the globe. They understood our brand and vision right away, and delivered a cinematic, high-quality video that exceeded expectations. Communication was clear and easy throughout.',
        hu: 'A Wrap Film Factory-val való munka zökkenőmentes volt, még a világ túlfeléről is. Azonnal megértették a márkánkat és a víziónkat, és egy filmes, kiváló minőségű videót szállítottak, ami felülmúlta az elvárásainkat.',
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
    */
  ],

  socials: [
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61586592434128', icon: 'facebook' },
    { name: 'Instagram', url: 'https://www.instagram.com/wrapfilmfactory/', icon: 'instagram' },
    { name: 'YouTube', url: 'https://www.youtube.com/@Wrapfilmfactory', icon: 'youtube' },
  ],

  workTileMaxSize: 500, // Maximum width for work video tiles in pixels
  hideFeaturedWork: true, // Hide the featured work section from the home page
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

export interface CoverStyle {
  /** Inline style for the wrapping frame (carries the background color). */
  frame: string;
  /** Inline style for the cover <img> / poster overlay (object-fit, position, padding). */
  image: string;
  /** Resolved object-fit value, available for callers that need to pick a class. */
  fit: 'cover' | 'contain';
}

/**
 * Resolves a WorkItem's cover-* fields into ready-to-apply inline CSS strings
 * for both the surrounding frame and the inner image. Call sites can spread
 * these into `style={...}` attributes without further branching.
 *
 * Defaults preserve the existing cinematic crop (`cover` + transparent bg + no padding).
 */
export function resolveCoverStyle(work: WorkItem): CoverStyle {
  const fit = work.coverFit ?? 'cover';
  const position = work.coverPosition ?? 'center';
  const background = work.coverBackground ?? 'transparent';
  const padding = work.coverPadding ?? '0';

  return {
    fit,
    frame: `background:${background};`,
    image: `object-fit:${fit};object-position:${position};padding:${padding};background:${background};`,
  };
}
