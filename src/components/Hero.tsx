import heroImage from "@/assets/hero-switches.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[600px] flex items-center justify-center text-center px-4 py-20">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 underline decoration-4 decoration-primary">
          Refurbished Cisco Catalyst 9300L-48UXG-4X Switches
        </h1>
        <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
          Discover enterprise-grade networking solutions from Network Outlet, your trusted provider of certified refurbished Cisco equipment in the USA. Our refurbished Cisco Catalyst switches deliver exceptional performance and reliability at a fraction of the cost, empowering businesses to modernize their infrastructure without breaking the budget.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-card p-6 rounded-lg shadow-md">
            <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">1000+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">100%</div>
            <div className="text-muted-foreground">Quality Guaranteed</div>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">70%</div>
            <div className="text-muted-foreground">Cost Savings</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
