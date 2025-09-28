import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Image from "next/image";

const projects = [
  {
    id: "gatorex",
    title: "GatorEx",
    category: "Marketplace",
    description: "Marketplace for UF students",
    url: "gatorex.shop",
    image: "/gatorex.png",
    alt: "GatorEx marketplace application interface"
  },
  {
    id: "rydify",
    title: "Rydify",
    category: "Ride Sharing",
    description: "Split ride costs effortlessly",
    url: "rydify.co",
    image: "/rydify.png",
    alt: "Rydify ride sharing application interface"
  },
  {
    id: "vybr",
    title: "Vybr",
    category: "Housing Platform",
    description: "Discover your dream housing",
    url: "vybr.club",
    image: "/vybr.png",
    alt: "Vybr housing platform interface"
  }
];

export default function OurWork() {
  return (
    <section id="work" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real projects showcasing student innovation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all border-0 overflow-hidden">
              <div className="aspect-video overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={false}
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-[#6366F1]/10 text-[#6366F1] border-0">
                    {project.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{project.url}</span>
                  <a href={`https://${project.url}`} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="rounded-lg border-[#6366F1] text-[#6366F1] hover:bg-[#6366F1] hover:text-white">
                      View Live Project
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}