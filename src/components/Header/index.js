"use client"
import Link from "next/link";
import Logo from "./Logo";
import { MoonIcon, SunIcon } from "../Icons";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "@/src/utils";

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  }
  
  return (
    <header className="w-full py-4 px-5 sm:px-10 bg-dark text-light flex items-center justify-between">
      <Logo />

      <button 
        className="inline-block sm:hidden z-50" 
        onClick={toggle} 
        aria-label="Hamburger Menu"
      >
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span 
              className="absolute top-0 inline-block w-full h-0.5 bg-light rounded transition-all ease duration-200" 
              style={{
                transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)"
              }}
            >&nbsp;</span>
            <span 
              className="absolute top-0 inline-block w-full h-0.5 bg-light rounded transition-all ease duration-200" 
              style={{
                opacity: click ? 0 : 1
              }}
            >&nbsp;</span>
            <span 
              className="absolute top-0 inline-block w-full h-0.5 bg-light rounded transition-all ease duration-200" 
              style={{
                transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)"
              }}
            >&nbsp;</span>
          </div>
        </div>
      </button>

      <nav 
        className="w-max py-3 px-6 sm:px-8 font-medium capitalize items-center flex sm:hidden
        fixed top-6 right-1/2 translate-x-1/2 bg-dark/90 backdrop-blur-sm z-50 rounded-full
        transition-all ease duration-300"
        style={{
          top: click ? "1rem" : "-5rem"
        }}
      >
        <Link href="/" className="mr-2 text-light">Home</Link>
        <Link href="/articles" className="mx-2 text-light">Articles</Link>
        <Link href="/teams" className="mx-2 text-light">Teams</Link>
        <Link href="/stats-hub" className="mx-2 text-light">Stats Hub</Link>
        <Link href="/about-us" className="mx-2 text-light">About Us</Link>
        <Link href="/contact" className="mx-2 text-light">Contact</Link>
        <button 
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1", 
            mode === "light" ? "bg-light text-dark" : "bg-dark text-light")}
          aria-label="theme-switcher"
        >
          {
            mode === "light" ? <MoonIcon className="fill-dark" /> : <SunIcon className="fill-light" />
          }
        </button>
      </nav>

      <nav className="w-max hidden sm:flex items-center text-light font-medium capitalize">
        <Link href="/" className="mr-4 hover:text-accent transition-colors">Home</Link>
        <Link href="/articles" className="mx-4 hover:text-accent transition-colors">Articles</Link>
        <Link href="/teams" className="mx-4 hover:text-accent transition-colors">Teams</Link>
        <Link href="/stats-hub" className="mx-4 hover:text-accent transition-colors">Stats Hub</Link>
        <Link href="/about-us" className="mx-4 hover:text-accent transition-colors">About Us</Link>
        <Link href="/contact" className="mx-4 hover:text-accent transition-colors">Contact</Link>
        <button 
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx("w-6 h-6 ease ml-4 flex items-center justify-center rounded-full p-1", 
            mode === "light" ? "bg-light text-dark" : "bg-dark text-light")}
          aria-label="theme-switcher"
        >
          {
            mode === "light" ? <MoonIcon className="fill-dark" /> : <SunIcon className="fill-light" />
          }
        </button>
      </nav>
    </header>
  )
}

export default Header;