"use client";
import { Lightbulb, Twitter, Instagram } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-purple-900 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Lightbulb className="w-6 h-6 text-[#6366F1]" />
              <span className="text-xl font-semibold text-white">gatorinnovation</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering entrepreneurs and small businesses with fast, affordable web solutions. 
              From MVPs to full applications, we bring your ideas to life.
            </p>
            <div className="flex items-center gap-2 text-gray-300 mb-4">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm">Available for new projects</span>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="https://twitter.com/gatorinnovation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span className="text-sm">@gatorinnovation</span>
              </a>
              <a 
                href="https://instagram.com/gatorinnovation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm">@gatorinnovation</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Our Work</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="https://gatorex.shop" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  GatorEx <span className="text-xs bg-gray-700 px-2 py-1 rounded">Marketplace</span>
                </a>
              </li>
              <li>
                <a href="https://rydify.co" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  Rydify <span className="text-xs bg-gray-700 px-2 py-1 rounded">Ride Share</span>
                </a>
              </li>
              <li>
                <a href="https://vybr.club" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  Vybr <span className="text-xs bg-gray-700 px-2 py-1 rounded">Housing</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Get Started</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="https://app.gatorinnovation.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Book Discovery Call
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services & Pricing
                </a>
              </li>
              <li className="pt-2">
                <div className="text-sm">
                  <div>hello@gatorinnovation.com</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © 2025 GatorInnovation. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Student Innovation Hub
            </p>
          </div>
          <a href="https://airtable.com/appHLFreu9qL45DYg/pagzfbeOyZFOWDMmt/form" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white rounded-lg hover:opacity-90 transition-opacity px-6 py-3">
              Get Started Today →
            </Button>
          </a>
        </div>
      </div>
    </footer>
  );
}