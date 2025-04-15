"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { TwitterIcon, InstagramIcon, YoutubeIcon } from "../Icons";
import Link from "next/link";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <footer className="w-full bg-dark text-light py-8">
      <div className="container mx-auto px-5 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Beyond the Arc</h3>
            <p className="text-sm mb-4">
              Your premier source for NBA basketball news, analysis, and insights.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://twitter.com/beyondthearc"
                className="hover:text-accent transition-colors"
                aria-label="Follow us on Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/beyondthearc"
                className="hover:text-accent transition-colors"
                aria-label="Follow us on Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/beyondthearc"
                className="hover:text-accent transition-colors"
                aria-label="Subscribe on YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-accent transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/teams" className="hover:text-accent transition-colors">
                  Teams
                </Link>
              </li>
              <li>
                <Link href="/stats-hub" className="hover:text-accent transition-colors">
                  Stats Hub
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest news and updates.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex">
              <input
                type="email"
                placeholder="Your email"
                {...register("email", { required: true })}
                className="bg-dark border border-light/30 rounded-l px-4 py-2 w-full focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="bg-accent text-light px-4 py-2 rounded-r font-medium hover:bg-accentDark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-light/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Beyond the Arc. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/sitemap" className="text-sm hover:text-accent transition-colors">
              Sitemap
            </Link>
            <Link href="/disclaimer" className="text-sm hover:text-accent transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;