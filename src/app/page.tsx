import Container from "@/components/container";
import Hero from "@/components/hero";
import GetVpnSection from "@/components/sections/get-vpn-section";
import ReviewsSection from "@/components/sections/reviews-section";
import ServersSection from "@/components/sections/servers-section";
import PlansSection from "@/components/sections/plans-section";
import VpnBenefitsSection from "@/components/sections/vpn-benefits-section";
import FaqSection from "@/components/sections/faq-sections";
import FeaturesSection from "@/components/sections/features-section";

export default function Home() {
  return (
    <Container className="flex flex-col gap-8">
      <Hero />
      <FeaturesSection />
      <GetVpnSection />
      <VpnBenefitsSection />
      <ServersSection />
      <PlansSection />
      <ReviewsSection />
      <FaqSection />
    </Container>
  );
}
