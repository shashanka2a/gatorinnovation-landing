"use client";

import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useState } from "react";
import CustomPricing from "./CustomPricing";
import AirtableFormDialog from "./AirtableFormDialog";

export default function Hero() {
  const [selectedPlan, setSelectedPlan] = useState("full-app");
  const [customOpen, setCustomOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  return (
    <section className="pt-32 pb-20 px-6 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center bg-white rounded-full px-4 py-2 mb-6 shadow-sm">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          <span className="text-sm text-gray-600">Available for new projects</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Build your <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">MVP fast</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Landing pages in 2 days or full apps in 1 week. Simple scope, great UX.
        </p>
        <p className="text-sm text-gray-500 mb-12 max-w-xl mx-auto">
          Trusted by 50+ student entrepreneurs at University of Florida
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <Card 
            className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 ${
              selectedPlan === "landing" 
                ? "border-2 border-[#6366F1] ring-2 ring-[#6366F1]/20" 
                : "border-0"
            }`}
            onClick={() => setSelectedPlan("landing")}
          >
            {selectedPlan === "landing" && (
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[#6366F1] text-white flex items-center justify-center shadow-sm">
                ✓
              </div>
            )}
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4 mx-auto">
                <span className="text-2xl">🚀</span>
              </div>
              <CardTitle className="text-2xl text-gray-900">Landing Page</CardTitle>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-gray-500">starts from</span>
                <span className="text-4xl font-bold text-[#6366F1]">$500</span>
              </div>
              <div className="inline-flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                Ready in 2 days
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="text-gray-600 space-y-3 mb-6 text-left">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#6366F1] rounded-full"></div>
                  Modern responsive design
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#6366F1] rounded-full"></div>
                  SEO optimized
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#6366F1] rounded-full"></div>
                  Contact forms
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#6366F1] rounded-full"></div>
                  2 revisions included
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card 
            className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 ${
              selectedPlan === "full-app" 
                ? "border-2 border-[#6366F1] ring-2 ring-[#6366F1]/20" 
                : "border-2 border-[#6366F1]"
            }`}
            onClick={() => setSelectedPlan("full-app")}
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
            {selectedPlan === "full-app" && (
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[#6366F1] text-white flex items-center justify-center shadow-sm">
                ✓
              </div>
            )}
            <CardHeader className="text-center pb-4 pt-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-4 mx-auto">
                <span className="text-2xl">💻</span>
              </div>
              <CardTitle className="text-2xl text-gray-900">Full Application</CardTitle>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-gray-500">starts from</span>
                <span className="text-4xl font-bold text-[#6366F1]">$2,500</span>
              </div>
              <div className="inline-flex items-center bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                Ready in 1 week
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="text-gray-600 space-y-3 mb-6 text-left">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#6366F1] rounded-full"></div>
                  Custom web application
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#6366F1] rounded-full"></div>
                  User authentication
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#6366F1] rounded-full"></div>
                  Database integration
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#6366F1] rounded-full"></div>
                  Unlimited revisions
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card 
            className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 border-0"
            onClick={() => setCustomOpen(true)}
          >
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#3B82F6]/10 to-[#8B5CF6]/10 rounded-xl mb-4 mx-auto">
                <span className="text-2xl">🎯</span>
              </div>
              <CardTitle className="text-2xl text-gray-900">Custom Pricing</CardTitle>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-gray-500">tailor your plan</span>
              </div>
              <div className="inline-flex items-center bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                Customize Your Plan
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="text-gray-600 space-y-3 mb-6 text-left">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#6366F1] rounded-full"></div>
                  Pick project type
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#6366F1] rounded-full"></div>
                  Add features
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#6366F1] rounded-full"></div>
                  Choose scale
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#6366F1] rounded-full"></div>
                  See total instantly
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button onClick={() => setFormOpen(true)} className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white text-lg px-8 py-6 rounded-xl hover:opacity-90 transition-opacity shadow-lg">
            {selectedPlan === "landing" ? "Start Landing Page Project →" : "Start Full App Project →"}
          </Button>
          <a href="#work" className="text-gray-600 hover:text-[#6366F1] transition-colors flex items-center gap-2">
            See our work <span>↓</span>
          </a>
        </div>
        <CustomPricing open={customOpen} onOpenChange={setCustomOpen} />
        <AirtableFormDialog open={formOpen} onOpenChange={setFormOpen} />
      </div>
    </section>
  );
}