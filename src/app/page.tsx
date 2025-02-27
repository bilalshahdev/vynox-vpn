import Container from "@/components/container";
import Hero from "@/components/hero";
import GetVpnSection from "@/components/sections/get-vpn-section";
import TestimonialSection from "@/components/sections/testimonial-section";
import SecurityFeatures from "@/components/sections/security-features";
import ServerMapSection from "@/components/sections/server-map-section";
import VpnPlansSection from "@/components/sections/vpn-plans-section";
import VpnBenefitsSection from "@/components/sections/vpn-benefits-section";
import FaqSection from "@/components/sections/faq-sections";

export default function Home() {
  return (
    <Container className="flex flex-col gap-8">
      <Hero />
      <SecurityFeatures />
      <GetVpnSection />
      <VpnBenefitsSection />
      <ServerMapSection />
      <VpnPlansSection />
      <TestimonialSection />
      <FaqSection/>
    </Container>
  );
}
