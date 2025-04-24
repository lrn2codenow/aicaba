"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav role="navigation" aria-label="Main navigation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <Link href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
          <div role="img" aria-label="AIC-ABA logo" className="inline-block w-8 h-8 bg-accent rounded-full shadow-md"></div>
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold text-neutral dark:text-light tracking-tight">AIC-ABA</span>
            <span className="hidden md:block text-xs italic text-accent uppercase">Ethical AI for Behavior Analysis</span>
          </div>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/resources" className="nav-link text-neutral dark:text-light hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Free Resources</Link>
          <Link href="/presentations" className="nav-link text-neutral dark:text-light hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Presentations</Link>
          <Link href="#contact" className="nav-link text-neutral dark:text-light hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Contact</Link>
        </div>
        {/* Hamburger menu button for mobile */}
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-neutral dark:text-light border-accent focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="Open main menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
      {/* Mobile menu - hidden by default, shown when hamburger is clicked */}
      <div id="mobile-menu" className={`md:hidden flex flex-col space-y-2 mt-2 bg-white dark:bg-neutral shadow-lg rounded-lg p-4 transition-all duration-300 ${mobileOpen ? '' : 'hidden'}`}>
        <Link href="/resources" className="nav-link text-neutral dark:text-light hover:text-primary px-3 py-2 rounded-md text-base font-medium transition-colors duration-200" onClick={() => setMobileOpen(false)}>Free Resources</Link>
        <Link href="/presentations" className="nav-link text-neutral dark:text-light hover:text-primary px-3 py-2 rounded-md text-base font-medium transition-colors duration-200" onClick={() => setMobileOpen(false)}>Presentations</Link>
        <Link href="#contact" className="nav-link text-neutral dark:text-light hover:text-primary px-3 py-2 rounded-md text-base font-medium transition-colors duration-200" onClick={() => setMobileOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
}
