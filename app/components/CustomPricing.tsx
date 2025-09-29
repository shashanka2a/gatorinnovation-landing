"use client";

import { useMemo, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Slider } from "./ui/slider";

type ProjectType = "landing" | "full-app" | null;

interface CustomPricingProps {
  open: boolean;
  onOpenChange: (nextOpen: boolean) => void;
}

export default function CustomPricing({ open, onOpenChange }: CustomPricingProps) {
  const [step, setStep] = useState<number>(1);
  const [projectType, setProjectType] = useState<ProjectType>(null);
  const [addons, setAddons] = useState<Record<string, boolean>>({});
  const [scale, setScale] = useState<number>(5000);

  const basePrice = useMemo(() => {
    if (projectType === "landing") return 500;
    if (projectType === "full-app") return 2500;
    return 0;
  }, [projectType]);

  const addonPrice = useMemo(() => {
    let sum = 0;
    if (projectType === "landing") {
      if (addons["lp_custom_sections"]) sum += 500;
      if (addons["lp_calendar_maps"]) sum += 500;
    }
    if (projectType === "full-app") {
      if (addons["fa_ai"]) sum += 5000;
      if (addons["fa_blockchain"]) sum += 5000;
    }
    return sum;
  }, [addons, projectType]);

  const scaleMultiplier = useMemo(() => {
    if (scale >= 200000) return 3;
    if (scale >= 50000) return 1.75;
    return 1; // 5k base
  }, [scale]);

  const total = useMemo(() => {
    return Math.round((basePrice + addonPrice) * scaleMultiplier);
  }, [basePrice, addonPrice, scaleMultiplier]);

  function reset() {
    setStep(1);
    setProjectType(null);
    setAddons({});
    setScale(5000);
  }

  function close() {
    onOpenChange(false);
    setTimeout(() => reset(), 200);
  }

  return (
    <Dialog open={open} onOpenChange={(o) => (o ? onOpenChange(o) : close())}>
      <DialogContent className="max-w-3xl w-full rounded-2xl p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Customize Your Plan
          </DialogTitle>
        </DialogHeader>

        <div className="px-6 pb-6">
          <ProgressStep step={step} />

          {step === 1 && (
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <SelectableCard
                selected={projectType === "landing"}
                onClick={() => setProjectType("landing")}
                title="Landing Page"
                price="$500"
                items={["Responsive design", "SEO ready", "Contact forms"]}
                emoji="🚀"
              />
              <SelectableCard
                selected={projectType === "full-app"}
                onClick={() => setProjectType("full-app")}
                title="Full Application"
                price="$2,500"
                items={["Auth", "Database", "API"]}
                emoji="💻"
              />
            </div>
          )}

          {step === 2 && (
            <div className="space-y-3 mt-6">
              {projectType === "landing" && (
                <>
                  <AddonToggle
                    label="Custom Sections/Logos/Animations"
                    price="+$500"
                    checked={!!addons["lp_custom_sections"]}
                    onChange={(v) => setAddons((a) => ({ ...a, lp_custom_sections: v }))}
                  />
                  <AddonToggle
                    label="Calendar/Maps Integration"
                    price="+$500"
                    checked={!!addons["lp_calendar_maps"]}
                    onChange={(v) => setAddons((a) => ({ ...a, lp_calendar_maps: v }))}
                  />
                </>
              )}
              {projectType === "full-app" && (
                <>
                  <AddonToggle
                    label="AI integration"
                    price="+$5,000"
                    checked={!!addons["fa_ai"]}
                    onChange={(v) => setAddons((a) => ({ ...a, fa_ai: v }))}
                  />
                  <AddonToggle
                    label="Blockchain integration"
                    price="+$5,000"
                    checked={!!addons["fa_blockchain"]}
                    onChange={(v) => setAddons((a) => ({ ...a, fa_blockchain: v }))}
                  />
                </>
              )}
            </div>
          )}

          {step === 3 && (
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">Scale</span>
                <div className="flex gap-3 text-xs">
                  <ScalePill label="Base" active={scale < 50000} />
                  <ScalePill label="Pro" active={scale >= 50000 && scale < 200000} />
                  <ScalePill label="Enterprise" active={scale >= 200000} />
                </div>
              </div>
              <Slider
                value={[scale]}
                onValueChange={(v) => setScale(v[0])}
                min={5000}
                max={200000}
                step={5000}
              />
              <div className="mt-3 text-sm text-gray-600">Estimated users: {scale.toLocaleString()}</div>
            </div>
          )}

          {step === 4 && (
            <div className="mt-6">
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-gray-900 text-lg">Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-gray-700">Plan: {projectType === "landing" ? "Landing Page" : "Full Application"}</div>
                  <div className="text-gray-700">Add-ons: {addonPrice > 0 ? "Selected" : "None"}</div>
                  <div className="text-gray-700">Scale: {scale.toLocaleString()}</div>
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
                    ${total.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">
                    {projectType === "landing" ? "Ready in 2 days" : "Ready in 1 week"} based on scope
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          <div className="mt-8 flex items-center justify-between">
            <div className="text-sm text-gray-500">Step {step} of 4</div>
            <div className="flex gap-3">
              <Button
                variant="secondary"
                className="rounded-xl"
                onClick={() => (step === 1 ? close() : setStep((s) => Math.max(1, s - 1)))}
              >
                Back
              </Button>
              {step < 4 ? (
                <Button
                  className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white rounded-xl shadow-lg hover:-translate-y-0.5 transition-transform"
                  onClick={() => setStep((s) => Math.min(4, s + 1))}
                  disabled={step === 1 && !projectType}
                >
                  Continue
                </Button>
              ) : (
                <Button className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white rounded-xl shadow-lg hover:-translate-y-0.5 transition-transform" onClick={() => window.dispatchEvent(new CustomEvent("open-airtable-form"))}>
                  Get Started Today
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ProgressStep({ step }: { step: number }) {
  return (
    <div className="grid grid-cols-4 gap-2 mt-2">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`h-2 rounded-full transition-all ${
            i <= step ? "bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]" : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

function SelectableCard({
  selected,
  onClick,
  title,
  price,
  items,
  emoji
}: {
  selected: boolean;
  onClick: () => void;
  title: string;
  price: string;
  items: string[];
  emoji: string;
}) {
  return (
    <Card
      onClick={onClick}
      className={`cursor-pointer bg-white rounded-2xl shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 border-2 ${
        selected ? "border-transparent ring-2 ring-[#6366F1]/30" : "border-transparent"
      }`}
    >
      <CardHeader className="text-center pb-4">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#3B82F6]/10 to-[#8B5CF6]/10 rounded-xl mb-4 mx-auto">
          <span className="text-2xl">{emoji}</span>
        </div>
        <CardTitle className="text-xl text-gray-900">{title}</CardTitle>
        <div className="text-[#6366F1] font-bold">{price}</div>
      </CardHeader>
      <CardContent className="text-sm text-gray-600">
        <ul className="space-y-2">
          {items.map((it) => (
            <li key={it} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]" />
              {it}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function AddonToggle({
  label,
  price,
  checked,
  onChange
}: {
  label: string;
  price: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label
      className={`flex items-center justify-between p-4 rounded-xl bg-white border transition-all cursor-pointer shadow-sm hover:shadow ${
        checked ? "ring-2 ring-[#6366F1]/30" : ""
      }`}
    >
      <div>
        <div className="text-gray-900 font-medium">{label}</div>
        <div className="text-gray-500 text-sm">{price}</div>
      </div>
      <button
        type="button"
        aria-pressed={checked}
        onClick={() => onChange(!checked)}
        className={`w-12 h-7 rounded-full p-1 transition-colors ${
          checked ? "bg-[#6366F1]" : "bg-gray-200"
        }`}
      >
        <span
          className={`block w-5 h-5 bg-white rounded-full transform transition-transform ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </label>
  );
}

function ScalePill({ label, active }: { label: string; active: boolean }) {
  return (
    <span
      className={`px-2 py-0.5 rounded-full text-[11px] ${
        active
          ? "bg-gradient-to-r from-[#3B82F6]/15 to-[#8B5CF6]/15 text-[#6366F1]"
          : "bg-gray-100 text-gray-500"
      }`}
    >
      {label}
    </span>
  );
}


