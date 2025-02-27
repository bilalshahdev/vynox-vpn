import { FaDownload, FaStar, FaCheckCircle } from "react-icons/fa";
import layers from "../../public/icons/layers.png";
import install from "../../public/icons/install.png";
import wifi from "../../public/icons/wifi.png";
import protection from "../../public/icons/protection.png";
import User from "../../public/images/user.jpg";

import img1 from "../../public/images/users/image-1.png";
import img2 from "../../public/images/users/image-2.png";
import img3 from "../../public/images/users/image-3.png";
import img4 from "../../public/images/users/image-4.png";
import img5 from "../../public/images/users/image-5.png";
import img6 from "../../public/images/users/image-6.png";
import img7 from "../../public/images/users/image-7.png";

export const navMenu: MenuItem[] = [
  { label: "Home", id: "home" },
  { label: "features", id: "features" },
  { label: "servers", id: "servers"},
  { label: "pricing", id: "pricing"},
  { label: "reviews", id: "reviews"},
  // { label: "about us", id: "about-us" },
  { label: "FAQs", id: "faqs" },
];

export const appLinks = {
  playstore:
    "https://play.google.com/store/apps/details?id=vynox.secure.vpn.proxy.master",
  appstore:
    "https://apps.apple.com/pk/app/free-vpn-proxy-vpn-master/id6737821640",
};

export const features: SecurityFeature[] = [
  {
    id: 1,
    title: "6 layers of security",
    description:
      "Effortlessly run smart scans on software, files, and apps to help find vulnerabilities, plus analyze suspicious files in the cloud, get threat alerts, and more.",
    icon: layers,
  },
  {
    id: 2,
    title: "Easy to install and use",
    description:
      "It only takes a moment to install Avast Free Antivirus and once it's done, it'll run quietly in the background, helping to protect you against viruses and other malware in real time, 24/7.",
    icon: install,
  },
  {
    id: 3,
    title: "Wi-Fi network security",
    description:
      "Connect more safely to any Wi-Fi network, even unsecured public networks, plus see who’s using your home Wi-Fi and help block intruders with a click.",
    icon: wifi,
  },
  {
    id: 4,
    title: "Protection against ransomware attacks",
    description:
      "Help protect your information. Don't let your personal photos, files, and documents fall victim to hackers using ransomware.",
    icon: protection,
  },
];

export const getVpnData: GetVpn[] = [
  {
    id: 1,
    title: "Download VPN",
    description:
      "Sign up your account, download Vynox VPN on all your devices for free, and sign in your account.",
    icon: FaDownload,
  },
  {
    id: 2,
    title: "Choose a VPN plan",
    description:
      "Pick a premium plan with a free trial for more VPN online features. Or, stay with the free VPN services.",
    icon: FaStar,
  },
  {
    id: 3,
    title: "Connect to the VPN server",
    description:
      "Tap your desired server location, and you'll be instantly connected. Then, browse the internet freely and safely on all your devices with Turbo protection.",
    icon: FaCheckCircle,
  },
];

export const vpnBenefits: Faq[] = [
  {
    id: "faq-1",
    question: "Protect your internet connection",
    answer:
      "A VPN adds an extra layer of protection to your daily browsing. By encrypting your internet traffic, a VPN helps you shield your online activity from hackers, especially when using public Wi-Fi. Whether you're working remotely or browsing on-the-go, a VPN makes your connection safer.",
  },
  {
    id: "faq-2",
    question: "Improve your online privacy",
    answer:
      "VPNs protect your privacy by hiding your IP address and encrypting your traffic. This prevents ISPs, advertisers, and governments from tracking your online activity.",
  },
  {
    id: "faq-3",
    question: "Securely access the internet",
    answer:
      "With a VPN, you can securely access the internet from anywhere, bypassing restrictions and ensuring a private connection, even on public networks.",
  },
];

export const plans: SubscriptionPlan[] = [
  // {
  //   id: 2,
  //   title: "6 Months Plan",
  //   duration: 6, // Now it's a number
  //   discountPercentage: 45,
  //   originalPrice: 12.73, // Hardcoded 100% price
  //   price: (12.73 * (1 - 45 / 100)) / 6, // Monthly price calculated
  //   billedAmount: 12.73 * (1 - 45 / 100), // Total billed amount calculated
  //   billingCycle: "every 6 months",
  //   buttonText: "Get Plan",
  //   guaranteeText: "30-day money-back guarantee",
  //   mostPopular: false,
  // },

  {
    id: 3,
    title: "1 Month Plan",
    duration: 1,
    discountPercentage: 0,
    originalPrice: 2.99,
    price: 2.99,
    billedAmount: 2.99,
    billingCycle: "every month",
    buttonText: "Get Plan",
    guaranteeText: "30-day money-back guarantee",
    mostPopular: false,
  },
  {
    id: 1,
    title: "12 Months Plan",
    duration: 12,
    discountPercentage: 44,
    originalPrice: 35.7,
    price: (35.7 * (1 - 44 / 100)) / 12,
    billedAmount: 35.7 * (1 - 44 / 100),
    billingCycle: "every 12 months",
    buttonText: "Get Plan",
    guaranteeText: "30-day money-back guarantee",
    mostPopular: true,
  },
];

export const reviews: Testimonial[] = [
  {
    id: 1,
    name: "Charles Watkins",
    review:
      "Very quick connect. Needs to be better still receiving videos. Really really I love this thank you. I can't live without it! Keep it up. Good free VPN and vpn proxy for VPN. I love it.",
    rating: 5,
    avatar: User,
    title: "Best free vpn",
  },
  {
    id: 2,
    name: "Flavia Flower",
    review:
      "Great and reliable vpn! Works great. It saves a lot of time because it is super fast. I love this one. Worth a try. It's a good free VPN and vpn proxy it does what it supposed to do.",
    rating: 5,
    avatar: User,
    title: "Protect your privacy with a free VPN",
  },
  {
    id: 3,
    name: "Steve Parker",
    review:
      "It’s super useful. Yeah skyvpn is definitely the best one. Free and gets the job done right. Good free VPN and vpn proxy server for everyone. Simple and easy to get along.",
    rating: 5,
    avatar: User,
    title: "Free VPN for iPhone",
  },
];

export const avatars = [
  {
    id: 1,
    avatar: img1,
  },
  {
    id: 2,
    avatar: img2,
  },
  {
    id: 3,
    avatar: img3,
  },
  {
    id: 4,
    avatar: img4,
  },
  {
    id: 5,
    avatar: img5,
  },
  {
    id: 6,
    avatar: img6,
  },
  {
    id: 7,
    avatar: img7,
  },
];

export const faqs: Faq[] = [
  {
    id: "faq-1",
    question: "How does Vynox VPN work?",
    answer:
      "Vynox VPN creates a secure, encrypted tunnel between your device and the internet, protecting your online activities from hackers, trackers, and surveillance.",
  },
  {
    id: "faq-2",
    question: "How do I install Vynox VPN?",
    answer:
      "You can install Vynox VPN by downloading the app from our official website or from the App Store/Google Play. Once installed, sign up or log in, then connect to a server of your choice.",
  },
  {
    id: "faq-3",
    question: "Can I watch Netflix, Hulu, or Disney+ with Vynox VPN?",
    answer:
      "Yes! Vynox VPN allows you to bypass geo-restrictions and stream content from platforms like Netflix, Hulu, and Disney+ from anywhere in the world.",
  },
  {
    id: "faq-4",
    question: "Is there a free trial?",
    answer:
      "Yes, Vynox VPN offers a free trial for new users. You can experience premium features before committing to a subscription.",
  },
  {
    id: "faq-5",
    question: "Can I cancel my plan?",
    answer:
      "Absolutely! You can cancel your subscription anytime from your account settings. Your access will remain active until the end of your billing cycle.",
  },
  {
    id: "faq-6",
    question: "Can I upgrade or downgrade my current plan?",
    answer:
      "Yes, you can upgrade or downgrade your plan anytime. The changes will take effect immediately or at the start of the next billing cycle, depending on your selection.",
  },
];

export const footerLinks: FooterLinkCategory[] = [
  {
    title: "Product",
    links: [
      { name: "Download", href: "/download" },
      { name: "Pricing", href: "/pricing" },
      { name: "Locations", href: "/locations" },
      { name: "Server", href: "/server" },
      { name: "Countries", href: "/countries" },
      { name: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Engage",
    links: [
      { name: "VynoxVPN", href: "/vpn" },
      { name: "FAQ", href: "/faq" },
      { name: "Tutorials", href: "/tutorials" },
      { name: "About Us", href: "/about" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
    ],
  },
  {
    title: "Earn Money",
    links: [
      { name: "Affiliate", href: "/affiliate" },
      { name: "Become Partner", href: "/partner" },
    ],
  },
];

export const heroTexts = {
  heading: "Huge Global Network of Fast Vynox VPN",
  highlightWords: ["global", "network", "vynox", "vpn"],
  subheading:
    "See VynoxVPN everywhere to make it easier for you when you move locations.",
};

export const featuresTexts = {
  heading: "Get free VPN that comes with advanced privacy and security tools",
  subheading:
    "Avast Free Antivirus is more than just an antivirus — it also includes these specialist tools:",
};

export const getAndUseVpnText = {
  heading: "How to get and use Vynox VPN?",
};

export const serversText = {
  heading: "Our Global Fast Server Network",
  subheading:
    "You get 5 locations to choose from on a free version, no traffic, bandwidth or time limits. Our servers provide high speeds (same level as premium paid VPNs) with no registration or any personal data collection.",
};

export const plansText = {
  heading: "Choose the Best VPN Plan for You",
  subheading:
    "Select from our affordable plans and enjoy secure browsing with Vynox VPN.",
};

export const reviewsText = {
  heading: "+18 Million Creators using Vynox VPN",
  highlightWords: ["+18", "Million", "Creators"],
  subheading:
    "Our users love using Vynox to build their marketing assets. We empower them to create assets at scale, faster than ever, with cutting-edge technology.",
};

export const faqsText = {
  heading: "Have questions? We have answers!",
  subheading:
    "Want to know more? You can email us anytime at @web.support@lorem.pk",
};

export const subscriptionText = {
  heading: "Subscribe Now To Get Special Features!",
  highlightWords: ["Special", "Features"],
  subheading: "Let's subscribe with us and find the fun.",
};
