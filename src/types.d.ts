type MenuItem = {
  href: string;
  label: string;
};

interface SecurityFeature {
  id: number;
  title: string;
  description: string;
  icon: StaticImageData;
}

interface GetVpn {
  id: number;
  title: string;
  description: string;
  icon: ElementType;
}

interface SubscriptionPlan {
  id: number;
  title: string;
  duration: string;
  price: number;
  discountPercentage: number;
  originalPrice: number;
  billedAmount: number;
  billingCycle: string;
  buttonText: string;
  guaranteeText: string;
  mostPopular: boolean;
}

interface Testimonial {
  id: number;
  name: string;
  review: string;
  rating: number;
  avatar: StaticImageData; 
  title: string;
}

interface Faq {
  id: string;
  question: string;
  answer: string;
}

interface FooterLinkCategory {
  title: string;
  links: { name: string; href: string }[];
}