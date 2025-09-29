"use client";

import { useEffect, useState } from "react";
import AirtableFormDialog from "./AirtableFormDialog";

export default function AirtableFormProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-airtable-form", handler);
    return () => window.removeEventListener("open-airtable-form", handler);
  }, []);

  return (
    <>
      {children}
      <AirtableFormDialog open={open} onOpenChange={setOpen} />
    </>
  );
}


