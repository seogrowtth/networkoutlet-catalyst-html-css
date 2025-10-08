const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-lg font-semibold mb-2">Network Outlet</p>
          <p className="text-sm opacity-90 mb-4">
            Your Trusted Source for Certified Refurbished Cisco Networking Equipment
          </p>
          <p className="text-xs opacity-75">
            © {new Date().getFullYear()} Network Outlet. All rights reserved. | Certified Refurbished Cisco Catalyst Switches | Enterprise Networking Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
