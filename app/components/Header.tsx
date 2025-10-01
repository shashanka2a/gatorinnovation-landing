"use client";

import { Lightbulb, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F9FAFB]/95 backdrop-blur-sm border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Lightbulb className="w-6 h-6 text-[#6366F1]" />
            <span className="text-xl font-semibold text-gray-900">gatorinnovation</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#work" className="text-gray-700 hover:text-[#6366F1] transition-colors">Our Work</a>
            <a href="#services" className="text-gray-700 hover:text-[#6366F1] transition-colors">Services</a>
            <a href="https://airtable.com/appHLFreu9qL45DYg/pagzfbeOyZFOWDMmt/form" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white rounded-lg">
                Get Started
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#F9FAFB] border-b border-gray-200/80 py-4">
            <div className="flex flex-col space-y-4 px-6">
              <a href="#work" className="text-gray-700 hover:text-[#6366F1] transition-colors py-2">Our Work</a>
              <a href="#services" className="text-gray-700 hover:text-[#6366F1] transition-colors py-2">Services</a>
              <a href="https://airtable.com/appHLFreu9qL45DYg/pagzfbeOyZFOWDMmt/form" target="_blank" rel="noopener noreferrer" className="pt-2">
                <Button className="w-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white rounded-lg">
                  Get Started
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}