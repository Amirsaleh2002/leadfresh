"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "FAQ", href: "#faq" },
  ];

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#000111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Mobile: Hamburger Button (Left) */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
          aria-label="Open Menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Brand Logo (Center on mobile, Left on desktop) */}
        <div className="flex items-center">
          <div className="relative w-[224px] h-[77px]">
            <Image src={"/Logo.png"} fill className="w-full h-full" />
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-white transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          <button className="cursor-pointer px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-black bg-white rounded-full hover:bg-slate-100 transition shadow-sm">
            Sign In
          </button>
          <button className="cursor-pointer hidden sm:inline-flex px-5 py-2 text-sm font-medium text-white rounded-full bg-[linear-gradient(102.51deg,rgba(166,230,87,0.37)_-6.65%,rgba(64,199,228,0.37)_94.57%)] hover:opacity-90 transition shadow-[0_0_20px_rgba(45,212,191,0.35)]">
            Start Free Trial
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Drawer (Sliding from Left) */}
      <div
        className={`fixed inset-0 z-50 bg-[#060b13] flex flex-col justify-between p-6 transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-5">
          {/* <Logo /> */}
          {/* <div className="relative w-[224px] h-[77px]">
            <Image src={"/Logo.png"} fill className="w-full h-full" />
          </div> */}
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800/60 transition focus:outline-none"
            aria-label="Close Menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Drawer Nav Links */}
        <div className="flex flex-col gap-5 py-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-semibold text-slate-200 hover:text-teal-400 transition-colors py-1"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Drawer Footer CTA Buttons */}
        <div className="flex flex-col gap-3 pt-6 border-t border-slate-800/80">
          <button
            onClick={() => setIsOpen(false)}
            className="w-full py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(45,212,191,0.3)]"
          >
            <span>Start Free Trial</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="w-full py-3 rounded-xl font-medium text-white border border-slate-700 bg-slate-900/60 text-sm"
          >
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
