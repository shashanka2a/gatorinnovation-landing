import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Code, Smartphone, Palette, Users } from "lucide-react";

const services = [
  {
    id: "websites",
    title: "Websites",
    description: "Responsive modern sites",
    icon: Code,
    details: "Custom websites built with modern frameworks and optimized for performance"
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    description: "Native & cross-platform",
    icon: Smartphone,
    details: "iOS and Android applications using React Native and native technologies"
  },
  {
    id: "branding",
    title: "Branding",
    description: "Brand identity",
    icon: Palette,
    details: "Complete brand identity packages including logos, colors, and guidelines"
  },
  {
    id: "ux",
    title: "UX Design",
    description: "User-centered design",
    icon: Users,
    details: "Research-driven design solutions focused on user experience and conversion"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From concept to deployment, tailored solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all border-0 text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <p className="text-[#6366F1] font-medium">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{service.details}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}