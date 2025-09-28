import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    id: "gatorex",
    title: "GatorEx",
    category: "Marketplace",
    description: "Marketplace for UF students",
    url: "gatorex.shop",
    image: "https://images.unsplash.com/photo-1619462729211-c8fd019ceae3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRwbGFjZSUyMGFwcCUyMGludGVyZmFjZSUyMHN0dWRlbnR8ZW58MXx8fHwxNzU5MDMwMTE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "rydify",
    title: "Rydify",
    category: "Ride Sharing",
    description: "Split ride costs effortlessly",
    url: "rydify.co",
    image: "https://images.unsplash.com/photo-1528033978085-52f315289665?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyaWRlJTIwc2hhcmluZyUyMG1vYmlsZSUyMGFwcHxlbnwxfHx8fDE3NTkwMzAxMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "vybr",
    title: "Vybr",
    category: "Housing Platform",
    description: "Discover your dream housing",
    url: "vybr.club",
    image: "https://images.unsplash.com/photo-1631799200294-0f1212ae90f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzaW5nJTIwcGxhdGZvcm0lMjB3ZWJzaXRlJTIwbW9kZXJufGVufDF8fHx8MTc1OTAzMDExOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
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