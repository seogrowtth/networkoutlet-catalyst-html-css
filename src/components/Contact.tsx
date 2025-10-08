import { Mail, Globe, Facebook, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Connect With Network Outlet
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-secondary mb-6">Get Started Today</h3>
            <p className="text-foreground leading-relaxed mb-6">
              Ready to modernize your network infrastructure with certified refurbished Cisco equipment? Our team of networking experts is here to help you find the perfect solution for your organization's needs and budget.
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              Whether you're looking for a single switch or outfitting an entire data center, Network Outlet has the inventory, expertise, and support to ensure your project's success.
            </p>
            <div className="space-y-4">
              <a 
                href="https://networkoutlet.com/products/c9300l-48uxg-4x-a-catalyst-9300l-48p-12mgig-network-advantage-4x10g-uplink"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary hover:text-secondary transition-colors"
              >
                <Globe size={20} />
                <span className="font-semibold">Visit Our Product Page</span>
              </a>
              <a 
                href="mailto:info@networkoutlet.com"
                className="flex items-center gap-3 text-primary hover:text-secondary transition-colors"
              >
                <Mail size={20} />
                <span className="font-semibold">Email Us</span>
              </a>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-secondary mb-6">Follow Us</h3>
            <p className="text-foreground leading-relaxed mb-6">
              Stay connected with Network Outlet on social media for the latest product announcements, industry insights, networking tips, and special promotions.
            </p>
            <div className="space-y-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61564012032766"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary hover:text-secondary transition-colors"
              >
                <Facebook size={20} />
                <span className="font-semibold">Facebook</span>
              </a>
              <a 
                href="https://www.instagram.com/networkoutletusa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary hover:text-secondary transition-colors"
              >
                <Instagram size={20} />
                <span className="font-semibold">Instagram</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/networkoutlet"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary hover:text-secondary transition-colors"
              >
                <Linkedin size={20} />
                <span className="font-semibold">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-primary text-primary-foreground p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Transform Your Network Infrastructure Today</h3>
          <p className="text-lg leading-relaxed mb-6">
            Join the growing number of organizations that trust Network Outlet for their refurbished Cisco networking equipment. Experience enterprise-grade performance, significant cost savings, and exceptional customer service.
          </p>
          <a 
            href="https://networkoutlet.com/products/c9300l-48uxg-4x-a-catalyst-9300l-48p-12mgig-network-advantage-4x10g-uplink"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-card text-primary px-8 py-3 rounded-lg font-bold hover:bg-muted transition-colors"
          >
            Explore Our Full Catalog
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
