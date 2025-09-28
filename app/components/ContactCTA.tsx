import { Button } from "./ui/button";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-r from-slate-900 to-purple-900">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
          <span className="text-sm text-white">Currently accepting new projects</span>
        </div>
        
        <h2 className="text-4xl font-bold text-white mb-4">Ready to Innovate?</h2>
        <p className="text-xl text-gray-300 mb-4">
          Let&apos;s discuss your project and get started this week
        </p>
        <p className="text-sm text-gray-400 mb-8 max-w-2xl mx-auto">
          Book a 15-minute discovery call to discuss your project scope, timeline, and budget. 
          No commitment required.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="https://app.gatorinnovation.com" target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 rounded-xl text-lg font-medium shadow-lg">
              Book Discovery Call
            </Button>
          </a>
          <a href="#work">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 rounded-xl text-lg font-medium">
              View Our Work
            </Button>
          </a>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-300">
          <div className="flex items-center gap-2">
            <span>📧</span>
            <span>hello@gatorinnovation.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📞</span>
            <span>(555) 123-INNOVATE</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🏢</span>
            <span>Student Innovation Hub</span>
          </div>
        </div>
      </div>
    </section>
  );
}