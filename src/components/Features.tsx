import { Network, Zap, Shield, TrendingUp, Award, DollarSign } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Network,
      title: "48 Port Multi-Gigabit Ethernet",
      description: "Supports 100M/1G/2.5G/5G speeds for flexible device connectivity across your entire network infrastructure."
    },
    {
      icon: Zap,
      title: "Full PoE+ on All Ports",
      description: "Delivers up to 740W total power for access points, phones, cameras, and other powered devices."
    },
    {
      icon: TrendingUp,
      title: "Four Built-in 10G SFP+ Uplinks",
      description: "Provides high-speed aggregation to the network core for maximum throughput and performance."
    },
    {
      icon: Shield,
      title: "Network Advantage License",
      description: "Enables advanced security features including Cisco TrustSec, MACsec encryption, and comprehensive application visibility."
    },
    {
      icon: Award,
      title: "Stacking Capabilities",
      description: "Allows for simplified management and scalability with Cisco StackWise technology for resilient architecture."
    },
    {
      icon: DollarSign,
      title: "Up to 70% Cost Savings",
      description: "Get enterprise-grade performance at a fraction of the cost while contributing to a sustainable circular economy."
    }
  ];

  return (
    <section id="features" className="py-16 px-4 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
          Key Features of the Refurbished Cisco C9300L-48UXG-4X-A
        </h2>
        <p className="text-center text-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          This switch comes pre-loaded with the Network Advantage license, unlocking advanced features for security, application visibility, and network segmentation. Every unit sold by Network Outlet undergoes a rigorous multi-point inspection and testing process to ensure it meets original manufacturer specifications.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
                <p className="text-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
