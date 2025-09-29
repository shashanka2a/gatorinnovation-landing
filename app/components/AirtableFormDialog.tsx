"use client";

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
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-full p-0 overflow-hidden rounded-2xl">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="text-2xl font-bold text-gray-900">Start Your Project</DialogTitle>
        </DialogHeader>
        <div className="px-6 pb-6">
          <div className="rounded-xl overflow-hidden bg-white shadow-sm border">
            <iframe
              title="Project Inquiry Form"
              src={formUrl}
              className="w-full h-[70vh]"
              loading="lazy"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}


