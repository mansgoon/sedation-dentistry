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

function NavigationLink({ children, href }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const handleClick = (e) => {
    const isSamePageLink = href.startsWith('/#') && pathname === '/';
    if (isSamePageLink) {
      e.preventDefault();
      const targetId = href.slice(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Link href={href} passHref>
      <div
        className={`text-[#282828] cursor-pointer hover:text-[#5BA3BB] transition-colors duration-100 ${
          isActive ? 'text-[#5BA3BB]' : ''
        }`}
        onClick={handleClick}
      >
        {children}
      </div>
    </Link>
  );
}

function NavigationMenu() {
  const navigationItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/#about" },
    { label: "SERVICES", href: "/services" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <nav className="flex gap-5 justify-between my-auto text-xs tracking-wider whitespace-nowrap text-zinc-800 max-md:hidden max-md:flex-wrap max-md:max-w-full max-sm:hidden">
      {navigationItems.map(({ label, href }) => (
        <NavigationLink key={label} href={href}>
          {label}
        </NavigationLink>
      ))}
    </nav>
  );
}

export function AppointmentButton() {
  return (
    <Link href="/contact" passHref>
    <button className="box-border relative shrink-0 px-6 pt-4 pb-4 text-xs tracking-wider text-center rounded appearance-none cursor-pointer bg-[#5BA3BB] text-[white] hover:bg-[#057BA2] hover:scale-105 transition-all duration-100 transform">
      REQUEST APPOINTMENT
    </button>
    </Link>
  );
}

function Header() {
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`flex gap-5 justify-between self-center w-full py-4 font-bold bg-white max-w-full max-md:flex-wrap max-md:max-w-full sticky top-0 z-10 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
    >
    <Link href="/" passHref>
      <div className="flex gap-2.5 text-2xl tracking-wide text-[#282828] hover:scale-105 transition-transform duration-300">
        <Logo/>
        <div className="flex-auto my-auto text-[#282828] hidden md:block">
          Awake <span className="text-[#688DAC]">or</span> Asleep
        </div>
      </div>
    </Link>
      <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
        <NavigationMenu />
        <AppointmentButton />
        <div className="flex flex-col justify-center text-xs tracking-wider text-center text-white" />
      </div>
    </header>
  );
}

export default function Navbar() {
  return <Header />;
}