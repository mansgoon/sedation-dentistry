'use client'
import * as React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

function Logo() {
  return (
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets%2Fea3aca9057654e45a61207978509cdea%2F2e2f6a8c157a44ce8e15c88dc3e2e06b"
      alt="Company logo"
      className="shrink-0 ml-5 aspect-[1.02] w-[50px] max-sm:ml-5"
    />
  );
}

function NavigationLink({ children, href, onClick, isMobile }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} passHref>
      <div
        className={`text-[#282828] cursor-pointer max-md:text-xl max-md:text-center hover:text-[#5BA3BB] transition-colors duration-100 ${
          isActive ? 'text-[#5BA3BB]' : ''
        }`}
        onClick={onClick}
      >
        <span className={isMobile && isActive ? 'inline-block border-b-2 border-[#5BA3BB]' : ''}>
          {children}
        </span>
      </div>
    </Link>
  );
}

function NavigationMenu({ isMobile, onLinkClick }) {
  const pathname = usePathname();
  const navigationItems = [
    { label: "HOME", href: "/" },
    { label: "SEDATION", href: "/sedation" },
    { label: "SERVICES", href: "/services" },
    { label: "FORMS", href: "/contact" },
  ];

  const handleClick = (e, href) => {
    const isSamePageLink = href.startsWith('/#') && pathname === '/';
    if (isSamePageLink) {
      e.preventDefault();
      const targetId = href.slice(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    onLinkClick();
  };

  return (
    <nav className={`${isMobile ? 'flex flex-col gap-4' : 'flex gap-5 justify-between my-auto'} text-xs tracking-wider whitespace-nowrap text-zinc-800`}>
      {navigationItems.map(({ label, href }) => (
        <NavigationLink key={label} href={href} onClick={(e) => handleClick(e, href)} isMobile={isMobile}>
          {label}
        </NavigationLink>
      ))}
    </nav>
  );
}

export function AppointmentButton({ onClick }) {
  return (
    <Link href="/contact" passHref>
      <button
        className="box-border relative shrink-0 px-6 md:mr-5 max-md:ml-5 max-md:mb-52 max-md:mt-5 pt-4 pb-4 text-xs tracking-wide text-center rounded appearance-none cursor-pointer bg-[#5BA3BB] text-[white] hover:bg-[#057BA2] hover:scale-105 transition-all duration-100 transform"
        onClick={onClick}
      >
        REQUEST APPOINTMENT
      </button>
    </Link>
  );
}

function Header() {
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isMenuToggled, setIsMenuToggled] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMenuToggled(!isMenuToggled);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsMenuToggled(false);
  };

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      if (isMobile) return; // Don't apply scroll effect on mobile

      const currentScrollY = window.scrollY;
      if (!isMobileMenuOpen && currentScrollY !== 0) {
        setIsVisible(currentScrollY < lastScrollY);
        setLastScrollY(currentScrollY);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [lastScrollY, isMobileMenuOpen, isMobile]);

  return (
    <header
      className={`flex gap-5 justify-between items-center self-center w-full py-4 font-bold bg-white max-w-full sticky top-0 z-10 transition-transform duration-300 ${
        isVisible || isMobile ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
    >
      {/* <Link href="/" passHref>
        <div className="flex gap-2.5 text-2xl tracking-wide text-[#282828] hover:scale-105 transition-transform duration-300">
          <Logo />
          <div className="flex-auto my-auto text-[#282828] hidden md:block">
            Awake or<span className="text-[#688DAC]"> Asleep</span> Dentistry
          </div>
        </div>
      </Link> */}
      <Link href="/" passHref>
        <div className="flex gap-2.5 text-2xl tracking-wide text-[#282828] hover:scale-105 transition-transform duration-300">
          <Logo />
          <div className="flex-auto my-auto text-[#282828] hidden sm:block">
            Awake or Asleep Dentistry
          </div>
          <div className="flex-auto my-auto text-[#282828] sm:hidden">
            Awake <span className="text-[#688DAC]"> or</span> Asleep
          </div>
        </div>
      </Link>
      <div className="hidden md:flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
        <NavigationMenu isMobile={false} onLinkClick={handleLinkClick} />
        <AppointmentButton onClick={handleLinkClick} />
      </div>
      <div className="md:hidden">
        <button
          className="text-[#282828] focus:outline-none max-md:mr-5 cursor-pointer"
          onClick={handleMobileMenuToggle}
        >
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${isMenuToggled ? 'rotate-45' : 'rotate-0'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={`transition-opacity duration-300 ${isMenuToggled ? 'opacity-0' : 'opacity-100'}`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              className={`transition-opacity duration-300 ${isMenuToggled ? 'opacity-100' : 'opacity-0'}`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 6l12 12M6 18L18 6"
            />
          </svg>
        </button>
      </div>
      <div
        className={`md:hidden fixed top-0 right-0 h-screen overflow-hidden bg-white shadow-lg z-20 transition-all duration-200 ${
          isMobileMenuOpen ? 'max-w-xs w-64 opacity-100' : 'max-w-0 w-0 opacity-0'
        } flex flex-col justify-center`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-[#282828] focus:outline-none close-button cursor-pointer"
            onClick={handleMobileMenuToggle}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="px-4 flex flex-col justify-center h-full">
          <NavigationMenu isMobile={true} onLinkClick={handleLinkClick} />
          <div className="mt-4">
            <AppointmentButton onClick={handleLinkClick} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Navbar() {
  return <Header />;
}
