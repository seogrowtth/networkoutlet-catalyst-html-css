const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-muted">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8">
          About Network Outlet
        </h2>
        
        <div className="prose max-w-none text-foreground space-y-6">
          <p className="text-lg leading-relaxed">
            Network Outlet is a leading provider of high-quality refurbished Cisco networking equipment in the USA. We empower businesses of all sizes to deploy robust, scalable, and future-ready network infrastructure while significantly reducing capital expenditure. Our mission is to make enterprise-grade networking accessible and affordable for organizations across industries.
          </p>

          <p className="text-lg leading-relaxed">
            As a highly trusted US-based supplier, we specialize in certified refurbished networking equipment with a focus on quality, reliability, and exceptional customer service. We serve businesses, educational institutions, healthcare facilities, and government agencies with top-tier branded hardware from industry leaders including Cisco, Juniper, HPE/Aruba, and others.
          </p>

          <p className="text-lg leading-relaxed">
            Every product in our inventory undergoes a rigorous multi-point inspection and testing process performed by our certified technicians. We verify functionality, performance, and reliability to ensure each unit meets or exceeds original manufacturer specifications. This meticulous approach guarantees that our customers receive networking equipment they can trust.
          </p>

          <p className="text-lg leading-relaxed">
            Our comprehensive warranty program provides peace of mind and demonstrates our confidence in the quality of our refurbished products. We back every switch, router, and firewall with industry-leading support, ensuring your network infrastructure performs reliably for years to come.
          </p>

          <p className="text-lg leading-relaxed">
            By choosing Network Outlet, organizations gain access to a sustainable, cost-effective alternative to purchasing new equipment. Our customers typically save up to 70% compared to new retail prices, allowing them to allocate budget to other strategic initiatives while still deploying enterprise-grade networking solutions.
          </p>

          <p className="text-lg leading-relaxed">
            We're committed to environmental sustainability and the circular economy. By refurbishing and reselling quality networking equipment, we help reduce electronic waste and extend the lifecycle of valuable technology. This approach benefits both our customers and the environment, creating a win-win scenario for all stakeholders.
          </p>

          <div className="bg-card p-6 rounded-lg shadow-md mt-8">
            <h3 className="text-2xl font-bold text-secondary mb-4">Our Product Range</h3>
            <p className="leading-relaxed mb-4">
              Network Outlet maintains an extensive inventory of refurbished networking equipment including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
              <li>Cisco Catalyst switches (all series and models)</li>
              <li>Enterprise routers and firewalls</li>
              <li>Juniper networking equipment</li>
              <li>HPE/Aruba wireless and switching solutions</li>
              <li>Network security appliances</li>
              <li>Data center infrastructure components</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
