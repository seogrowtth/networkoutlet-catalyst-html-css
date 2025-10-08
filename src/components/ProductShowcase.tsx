import catalystImage from "@/assets/catalyst-switch.jpg";
import { CheckCircle } from "lucide-react";

const ProductShowcase = () => {
  return (
    <section id="products" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Refurbished Cisco Catalyst 9300L-48UXG-4X Switches For Your Business
        </h2>

        <div className="bg-card rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div>
              <img 
                src={catalystImage} 
                alt="Cisco Catalyst 9300L switch with multiple ethernet ports"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Premium Refurbished Switches</h3>
              <p className="text-foreground mb-6 leading-relaxed">
                Network Outlet is proud to announce the availability of the certified refurbished Cisco Catalyst C9300L-48UXG-4X-A switch. This powerhouse addition to our extensive inventory empowers businesses to deploy robust, scalable, and future-ready network infrastructure while significantly reducing capital expenditure.
              </p>
              <p className="text-foreground mb-6 leading-relaxed">
                The Cisco Catalyst 9300 Series is the industry's leading stackable access switch, forming the foundation of intent-based networks. The refurbished C9300L-48UXG-4X model is ideal for bandwidth-intensive environments, featuring 48 PoE+ 1G/2.5G/5G Multi-Gigabit Ethernet ports and four built-in 10G SFP+ uplinks.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground">Perfect for modern workplaces, schools, and healthcare facilities</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground">Supports high-density Wi-Fi 6/6E deployments</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground">Ideal for IP telephony and IoT applications</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground">Rigorous multi-point inspection and testing</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="prose max-w-none text-foreground">
          <p className="text-lg mb-6 leading-relaxed">
            "Organizations are constantly pressured to upgrade their network edge to support new technologies without blowing their budget," said a spokesperson at Network Outlet. "By offering this fully certified, refurbished Cisco Catalyst 9300L, we are giving our customers a strategic, cost-effective path to modernize their infrastructure. They get the same enterprise-grade performance and reliability they expect from Cisco, but with the sustainability and savings that come with choosing a trusted refurbished provider."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
