"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

export default function AirtableFormDialog({
  open,
  onOpenChange,
  formUrl = "https://airtable.com/appHLFreu9qL45DYg/pagzfbeOyZFOWDMmt/form",
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  formUrl?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-full p-0 overflow-hidden rounded-2xl">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="text-2xl font-bold text-gray-900">Start Your Project</DialogTitle>
        </DialogHeader>
        <div className="px-6 pb-6">
          <div className="relative group">
            {/* Gradient hairline border */}
            <div className="p-[1px] rounded-2xl bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]">
              <div className="rounded-[15px] bg-white shadow-lg">
                {/* Top subtle gradient bar to blend with brand */}
                <div className="h-1.5 rounded-t-[15px] bg-gradient-to-r from-[#3B82F6]/20 to-[#8B5CF6]/20" />
                {/* Iframe container */}
                <div className="relative">
                  {!loaded && (
                    <div className="absolute inset-0 z-10 animate-pulse bg-gradient-to-br from-slate-100 to-slate-50" />
                  )}
                  <iframe
                    title="Project Inquiry Form"
                    src={formUrl}
                    className="w-full h-[72vh] md:h-[78vh] rounded-b-[15px]"
                    loading="lazy"
                    onLoad={() => setLoaded(true)}
                  />
                </div>
              </div>
            </div>
            {/* Footer helpers */}
            <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
              <span>Secure Airtable form • Fast, simple onboarding</span>
              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6366F1] hover:underline"
              >
                Open in new tab
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}


