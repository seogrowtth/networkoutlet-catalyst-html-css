import infrastructureImage from "@/assets/infrastructure.jpg";

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Why Choose Network Outlet?
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <img 
              src={infrastructureImage} 
              alt="Modern data center with organized network infrastructure"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-3">Trusted Quality & Reliability</h3>
              <p className="text-foreground leading-relaxed">
                Network Outlet is a highly trusted US-based supplier of certified refurbished networking equipment. With a focus on quality, reliability, and exceptional customer service, we provide businesses, educational institutions, and government agencies with top-tier branded hardware.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-3">Rigorous Testing Process</h3>
              <p className="text-foreground leading-relaxed">
                Every product undergoes a comprehensive multi-point inspection and testing process to ensure it meets original manufacturer specifications. Our certified technicians verify functionality, performance, and reliability before any unit reaches our customers.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-3">Comprehensive Warranty</h3>
              <p className="text-foreground leading-relaxed">
                All refurbished equipment is backed by a robust warranty, ensuring performance and peace of mind at a significantly reduced cost. We stand behind our products with industry-leading support and service.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-secondary mb-6 text-center">Our Commitment to Sustainability</h3>
          <p className="text-foreground leading-relaxed mb-6">
            Network Outlet specializes in providing sustainable, affordable refurbished products from all popular brands, including Cisco, Juniper, Aruba, HPE, and others. By choosing refurbished equipment, you're not only saving your organization money—you're contributing to a circular economy by reducing electronic waste.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            High-quality refurbished products from Network Outlet can help businesses save up to 70% compared to purchasing new equipment. This cost-effective approach allows organizations to allocate resources to other critical areas while still maintaining enterprise-grade network infrastructure.
          </p>
          <p className="text-foreground leading-relaxed">
            Our extensive inventory includes switches, routers, firewalls, and other networking components from the industry's most trusted manufacturers. Whether you're upgrading a single office or deploying infrastructure across multiple locations, Network Outlet has the expertise and inventory to support your project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
