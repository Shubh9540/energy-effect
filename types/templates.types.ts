export interface HeaderNavLink {
  id: string;
  label: string;
  url: string;
}

export interface HeaderData {
  logo: string;
  logoAlt: string;
  logoUrl: string;
  navLinksLeft: HeaderNavLink[];
  navLinksRight: HeaderNavLink[];
  navigationLabel: string;
  contactButton: { text: string; url: string; icon: string };
  openMenuLabel: string;
  closeMenuLabel: string;
}

export interface OurServicesItem {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  linkUrl: string;
  // Detail sections
  tag1?: string;
  heading1?: string;
  description1?: string;
  featureCards?: ServiceFeatureCard[];
  // Section 2: What We Offer
  tag2?: string;
  heading2?: string;
  description2?: string;
  offerPoints?: ServiceOfferPoint[];
  imageOffer?: string;
  imageOfferAlt?: string;
  // Section 3: Why Choose Us
  tag3?: string;
  heading3?: string;
  description3?: string;
  whyChoosePoints?: ServiceWhyChoosePoint[];
  imageWhyChoose?: string;
  imageWhyChooseAlt?: string;
}

export interface OurServicesData {
  scrollMotion: SectionScrollMotion;
  subtitle: string;
  titleLine1: string;
  highlightedTitle: string;
  description: string;
  button: {
    text: string;
    url: string;
    icon: string;
  };
  services: OurServicesItem[];
}

export interface OurServicesSectionProps {
  data?: OurServicesData;
  hideButton?: boolean;
}

export interface SectionScrollMotion {
  travel: number;
  imageScale: number;
}

export interface ServiceCardProps {
  item: OurServicesItem;
  isOffset: boolean;
  delayIndex: number;
  scrollMotion: SectionScrollMotion;
}

export interface ServiceOfferPoint {
  id: string;
  text: string;
}

export interface ServiceFeatureCard {
  id: string;
  icon: string;
  title: string;
}

export interface ServiceWhyChoosePoint {
  id: string;
  text: string;
}

export interface ServiceDetailItem {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  linkUrl: string;
  // Detail sections
  tag1?: string;
  heading1?: string;
  description1?: string;
  featureCards?: ServiceFeatureCard[];
  // Section 2: What We Offer
  tag2?: string;
  heading2?: string;
  description2?: string;
  offerPoints?: ServiceOfferPoint[];
  imageOffer?: string;
  imageOfferAlt?: string;
  // Section 3: Why Choose Us
  tag3?: string;
  heading3?: string;
  description3?: string;
  whyChoosePoints?: ServiceWhyChoosePoint[];
  imageWhyChoose?: string;
  imageWhyChooseAlt?: string;
}

export interface ServiceDetailSectionProps {
  data?: OurServicesData;
  serviceId: string;
}

export interface ServiceDetailPageProps {
  params: Promise<{ id: string }>;
}

export interface HeaderProps {
  data?: HeaderData;
}

export interface HeroHeadingData {
  firstLine: string;
  secondLine: string;
  image: string;
  scrollPerWord: number;
  wordSequenceEnd: number;
  bannerRevealStart: number;
  animationDuration: number;
  animationOffset: number;
  animationViewportAmount: number;
}

export interface HeroHeadingProps {
  data?: HeroHeadingData;
  bannerData?: HeroData;
}

export interface HeroScrollWordProps {
  word: string;
  index: number;
  count: number;
  image: string;
  sequenceEnd: number;
  progress: import('framer-motion').MotionValue<number>;
}

export interface TopBarData {
  tagline: string;
  taglineIcon: string;
  phoneValue: string;
  emailValue: string;
  locationValue: string;
  socialLinks?: { id: string; icon: string; url: string }[];
}

export interface TopBarProps {
  data?: TopBarData;
  logoData?: HeaderData;
}

export interface BreadcrumbPath {
  id: string;
  label: string;
  url?: string;
}

export interface BreadcrumbData {
  title: string;
  bgImage: string;
  paths: BreadcrumbPath[];
}

export interface FontSettingsData {
  primary: string;
  heading: string;
}

export interface GlobalUIData {
  breadcrumbSeparator: string;
}

export interface BreadcrumbProps {
  data?: BreadcrumbData;
  ui?: GlobalUIData;
}

export interface HeroButtonData {
  text: string;
  url: string;
  icon: string;
}

export interface HeroSlideData {
  id: string;
  eyebrow: string;
  titleLine1: string;
  highlightedTitle: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryButton: HeroButtonData;
}

export interface HeroData {
  slides: HeroSlideData[];
  autoplayDelay: number;
  slideNavigationLabel: string;
  animationDuration: number;
  animationViewportAmount: number;
  animationOffset: number;
  animationScale: number;
}

export interface HeroSectionProps {
  data?: HeroData;
}

export interface AboutFeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface AboutChecklistItem {
  id: string;
  text: string;
}

export interface AboutExpertImage {
  id: string;
  image: string;
  imageAlt: string;
}

export interface AboutUsData {
  scrollMotion: SectionScrollMotion;
  revealMotion: AboutRevealMotion;
  subtitle: string;
  titleLine1: string;
  titleLine2?: string;
  highlightedTitle: string;
  titleSuffix?: string;
  description: string;
  description2?: string;
  imageMain: string;
  imageMainAlt: string;
  imageSecondary?: string;
  imageSecondaryAlt?: string;
  experienceImage?: string;
  experienceImageAlt?: string;
  experienceValue?: string;
  experienceLabel?: string;
  features?: AboutFeatureItem[];
  excellenceTitle: string;
  checklist: AboutChecklistItem[];
  expertImages: AboutExpertImage[];
  expertsLabel: string;
  activeFieldsValue: number;
  activeFieldsSuffix: string;
  activeFieldsLabel: string;
  animationDuration: number;
  animationViewportAmount: number;
  imageAnimationOffset: number;
  button: { text: string; url: string };
}

export interface AboutUsSectionProps {
  data?: AboutUsData;
  hideButton?: boolean;
}

export interface AboutRevealMotion {
  stiffness: number;
  damping: number;
  travel: number;
  stagger: number;
}

export interface AboutRevealProps {
  children: import('react').ReactNode;
  settings: AboutRevealMotion;
  step?: number;
  image?: boolean;
}

export interface IndustryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
}

export interface IndustriesData {
  subtitle: string;
  title: string;
  highlightedTitle: string;
  description: string;
  items: IndustryItem[];
}

export interface IndustriesWeServeProps {
  data?: IndustriesData;
}

export interface SustainabilityIntroPillar {
  id: string;
  icon: string;
  title: string;
}

export interface SustainabilityPillarCard {
  id: string;
  icon: string;
  title: string;
}

export interface SustainabilityPracticeItem {
  id: string;
  icon: string;
  title: string;
}

export interface SustainabilityBadgeItem {
  id: string;
  code: string;
  subtext?: string;
  color?: string;
}

export interface SustainabilityData {
  // Row 1: Intro
  introTag: string;
  introTitle: string;
  introHighlightedTitle: string;
  introDescription: string;
  introPillars: SustainabilityIntroPillar[];
  // Row 2: People's Safety
  safetyTag: string;
  safetyTitle: string;
  safetyHighlightedTitle: string;
  safetyDescription: string;
  safetyChecklist: { id: string; text: string }[];
  safetyImage: string;
  safetyImageAlt: string;
  // Row 3: Protecting Environment
  envTag: string;
  envTitle: string;
  envHighlightedTitle: string;
  envDescription: string;
  envPillars: SustainabilityPillarCard[];
  envImage: string;
  envImageAlt: string;
  // Row 4: Strong Practices
  practicesTag: string;
  practicesTitle: string;
  practicesHighlightedTitle: string;
  practicesDescription: string;
  practicesItems: SustainabilityPracticeItem[];
  practicesImage: string;
  practicesImageAlt: string;
  // Row 5: Driving Cleaner
  cleanerTag: string;
  cleanerTitle: string;
  cleanerHighlightedTitle: string;
  cleanerDescription: string;
  cleanerChecklist: { id: string; text: string }[];
  cleanerImage: string;
  cleanerImageAlt: string;
  // Row 6: Meeting Standards
  standardsTag: string;
  standardsTitle: string;
  standardsHighlightedTitle: string;
  standardsDescription: string;
  standardsBadges: SustainabilityBadgeItem[];
  standardsImage: string;
  standardsImageAlt: string;
  // Row 7: Building Culture
  cultureTag: string;
  cultureTitle: string;
  cultureHighlightedTitle: string;
  cultureDescription: string;
  cultureImage: string;
  cultureImageAlt: string;
  // Row 8: Responsible Operations
  commitmentTag: string;
  commitmentTitle: string;
  commitmentHighlightedTitle: string;
  commitmentDescription: string;
  commitmentImage: string;
  commitmentImageAlt: string;
}

export interface SustainabilityProps {
  data?: SustainabilityData;
}

export interface TeamSocialLink {
  id: string;
  icon: string;
  url: string;
  label: string;
}

export interface TeamMemberItem {
  id: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  socials: TeamSocialLink[];
}

export interface TeamData {
  subtitle: string;
  title: string;
  highlightedTitle: string;
  description: string;
  members: TeamMemberItem[];
}

export interface TeamSectionProps {
  data?: TeamData;
}

export interface ProjectTabItem {
  id: string;
  label: string;
  category: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  categoryLabel?: string;
  location?: string;
  description: string;
  image: string;
  imageAlt: string;
  linkUrl?: string;
}

export interface ProjectsData {
  subtitle: string;
  title: string;
  highlightedTitle: string;
  description: string;
  allTabLabel: string;
  tabs: ProjectTabItem[];
  items: ProjectItem[];
}

export interface ProjectGridProps {
  data?: ProjectsData;
}

export interface PaginationItem {
  id: string;
  label: string;
  page: number;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  role?: string;
  company?: string;
  quote: string;
  rating: number;
  avatar: string;
  imageAlt?: string;
}

export interface TestimonialStackMotion {
  stickyTop: number;
  layerOffset: number;
  visibleLayers: number;
  entryTravel: number;
}

export interface TestimonialCardItemProps {
  item: TestimonialItem;
  index: number;
  total: number;
  cardBackground?: string;
  stackMotion: TestimonialStackMotion;
}

export interface TestimonialsData {
  subtitle: string;
  title1: string;
  highlightedTitle: string;
  title2?: string;
  previousLabel?: string;
  previousIcon?: string;
  nextLabel?: string;
  nextIcon?: string;
  slideLabel?: string;
  quoteIcon?: string;
  cardBackground?: string;
  stackMotion: TestimonialStackMotion;
  testimonials: TestimonialItem[];
}

export interface TestimonialsSectionProps {
  data?: TestimonialsData;
}

export interface FooterData {
  logo: string;
  logoAlt: string;
  logoUrl: string;
  backgroundImage: string;
  backgroundImageAlt: string;
  patternImage?: string;
  patternImageAlt?: string;
  copyrightText: string;
  description: string;
  quickLinksTitle: string;
  contactTitle: string;
  servicesTitle: string;
  linkIcon: string;
  galleryTitle?: string;
  galleryUrl?: string;
  socialLinks: { id: string; icon: string; label: string; url: string }[];
  quickLinks: { id: string; label: string; url: string }[];
  serviceLinks: { id: string; label: string; url: string }[];
  galleryImages?: { id: string; image: string; imageAlt: string }[];
  contactItems: { id: string; icon: string; title: string; value: string; subtext?: string; url?: string }[];
}

export interface FooterProps {
  data?: FooterData;
}

export interface NotFoundData {
  code: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export interface NotFoundSectionProps {
  data?: NotFoundData;
}

export interface TemplateComponentItem {
  key: string;
  component: string;
}

export interface TemplateComponentPage {
  components: TemplateComponentItem[];
}

export interface TemplateComponentsData {
  shared: {
    TopBar: string;
    Header: string;
    Footer: string;
  };
  pages: Record<string, TemplateComponentPage>;
}

export interface WhyChooseUsFeature {
  id: string;
  number?: string;
  icon: string;
  title: string;
  titleHighlight?: string;
  description: string;
}

export interface WhyChooseUsData {
  subtitle?: string;
  subtitleHighlight?: string;
  title1?: string;
  title2?: string;
  title?: string;
  highlightedTitle?: string;
  experienceYears?: string;
  experienceLabel?: string;
  description?: string;
  features: WhyChooseUsFeature[];
  imageMain?: string;
  imageAlt?: string;
  imagePlant?: string;
  imagePlantAlt?: string;
  imageEngineer?: string;
  imageEngineerAlt?: string;
}

export interface WhyChooseUsSectionProps {
  data?: WhyChooseUsData;
}

export interface ContactInfoLine {
  id: string;
  text: string;
}

export interface ContactInfoItem {
  id: string;
  icon: string;
  title: string;
  lines: ContactInfoLine[];
  url?: string;
}

export interface ContactSocialLink {
  id: string;
  icon: string;
  label: string;
  url: string;
}

export interface ContactCardItem {
  id: string;
  icon: string;
  title: string;
  lines: ContactInfoLine[];
  description?: string;
  url?: string;
  variant: string;
  socialLinks?: ContactSocialLink[];
}

export interface ContactSelectOption {
  id: string;
  label: string;
  value: string;
}

export interface ContactData {
  intro: {
    logo: string;
    logoAlt: string;
    eyebrow: string;
    title1: string;
    titleHighlight: string;
    title2: string;
    accentMark: string;
    description: string;
    experienceYears: string;
    experienceSuffix: string;
    experienceLabel: string;
    experienceImage: string;
  };
  contactCards: ContactCardItem[];
  form: {
    icon: string;
    decorativeIcon: string;
    title: string;
    description: string;
    fullNamePlaceholder: string;
    phonePlaceholder: string;
    emailPlaceholder: string;
    companyPlaceholder: string;
    projectTypePlaceholder: string;
    budgetRangePlaceholder: string;
    messagePlaceholder: string;
    buttonText: string;
    successMessage: string;
    projectTypeOptions: ContactSelectOption[];
    budgetRangeOptions: ContactSelectOption[];
  };
}

export interface ContactSectionProps {
  data?: ContactData;
}

export interface EnquiryFormOption {
  id: string;
  label: string;
  value: string;
}

export interface EnquiryData {
  intro: {
    title1: string;
    titleHighlight: string;
    title2: string;
    description: string;
  };
  backgroundImage: string;
  form: {
    eyebrow: string;
    title: string;
    description: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    companyPlaceholder: string;
    enquiryTypePlaceholder: string;
    locationPlaceholder: string;
    requirementsPlaceholder: string;
    messagePlaceholder: string;
    buttonText: string;
    successMessage: string;
    enquiryTypeOptions: EnquiryFormOption[];
    requirementOptions: EnquiryFormOption[];
    icons: {
      decorative: string;
      name: string;
      email: string;
      phone: string;
      company: string;
      enquiryType: string;
      location: string;
      requirements: string;
      message: string;
      button: string;
    };
  };
}

export interface EnquirySectionProps {
  data?: EnquiryData;
}

export interface BlogAuthor {
  id: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
}

export interface BlogPost {
  id: string;
  day?: string;
  monthYear?: string;
  category: string;
  title: string;
  description: string;
  date: string;
  image: string;
  imageAlt: string;
  url: string;
  authorId: string;
  breadcrumb: BreadcrumbData;
}

export interface BlogDetailFeature {
  id: string;
  icon?: string;
  title?: string;
  text: string;
}

export interface BlogDetailSectionItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  features: BlogDetailFeature[];
}

export interface BlogDetailContent {
  recentPostsTitle: string;
  authorLabel: string;
  quoteText: string;
  conclusionTitle: string;
  conclusionText: string;
  sections: BlogDetailSectionItem[];
}

export interface BlogData {
  subtitle: string;
  title1: string;
  highlightedTitle: string;
  description: string;
  backgroundImage: string;
  backgroundImageAlt: string;
  authorPrefix: string;
  readMoreText: string;
  viewAllText: string;
  viewAllUrl: string;
  itemsPerPage: number;
  paginationLabel: string;
  previousPageLabel: string;
  nextPageLabel: string;
  pagination: PaginationItem[];
  authors: BlogAuthor[];
  posts: BlogPost[];
  detail: BlogDetailContent;
}

export interface OurBlogPost {
  id: string;
  day: string;
  monthYear: string;
  category: string;
  date?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  url: string;
  readMoreText?: string;
}

export interface OurBlogData {
  subtitle?: string;
  title: string;
  highlightedTitle: string;
  description?: string;
  metaSeparator?: string;
  button?: {
    text: string;
    url: string;
    icon: string;
  };
  posts: OurBlogPost[];
}

export interface OurBlogProps {
  data?: OurBlogData;
}

export interface BlogGridProps {
  data?: BlogData;
}

export interface BlogDetailSectionProps {
  data?: BlogData;
  postId: string;
}

export interface BlogDetailsPageProps {
  params: Promise<{ id: string }>;
}

export interface TeamSocialLink {
  id: string;
  icon: string;
  label: string;
  url: string;
}

export interface TeamMemberItem {
  id: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  socials: TeamSocialLink[];
}

export interface TeamData {
  subtitle: string;
  title: string;
  highlightedTitle: string;
  description: string;
  members: TeamMemberItem[];
}

export interface TeamSectionProps {
  data?: TeamData;
}

export interface SiteMetadataData {
  title: string;
  description: string;
  icon: string;
}

export interface GlobalMotionData {
  sectionTravel: number;
  perspective: number;
  smoothing: number;
}

export interface SiteMotionProps {
  data?: GlobalMotionData;
}

export interface EnergyTemplateData {
  common: {
    metadata: SiteMetadataData;
    fonts?: FontSettingsData;
    globalUI: GlobalUIData;
    globalMotion?: GlobalMotionData;
    aboutBreadcrumb?: BreadcrumbData;
    servicesBreadcrumb?: BreadcrumbData;
    serviceDetailsBreadcrumb?: BreadcrumbData;
    projectsBreadcrumb?: BreadcrumbData;
    industriesBreadcrumb?: BreadcrumbData;
    sustainabilityBreadcrumb?: BreadcrumbData;
    teamBreadcrumb?: BreadcrumbData;
    contactBreadcrumb?: BreadcrumbData;
    blogsBreadcrumb?: BreadcrumbData;
    enquiryBreadcrumb?: BreadcrumbData;
    notFound?: NotFoundData;
    Footer?: FooterData;
  };
  categories: {
    Energy: {
      templateComponents?: TemplateComponentsData;
      sections: {
        TopBar?: { variants?: { EnergyTopBar1?: TopBarData } };
        Header?: { variants?: { EnergyHeader1?: HeaderData } };
        HeroHeading?: { variants?: { EnergyHeroHeading1?: HeroHeadingData } };
        Hero?: { variants?: { EnergyHero1?: HeroData } };
        AboutUs?: { variants?: { EnergyAboutUs1?: AboutUsData } };
        OurServices?: { variants?: { EnergyOurServices1?: OurServicesData } };
        Industries?: { variants?: { EnergyIndustries1?: IndustriesData } };
        Sustainability?: { variants?: { EnergySustainability1?: SustainabilityData } };
        Projects?: { variants?: { EnergyProjects1?: ProjectsData } };
        Testimonials?: { variants?: { EnergyTestimonials1?: TestimonialsData } };
        Team?: { variants?: { EnergyTeam1?: TeamData } };
        Blog?: { variants?: { EnergyBlog1?: BlogData } };
        OurBlog?: { variants?: { EnergyOurBlog1?: OurBlogData } };
        whyChooseUs?: { variants?: { EnergyWhyChooseUs1?: WhyChooseUsData } };
        contact?: { variants?: { EnergyContact1?: ContactData } };
        Enquiry?: { variants?: { EnergyEnquiry1?: EnquiryData } }; 
      };
    };
  };
}
