import { Button } from "@/components/ui/button";
import { User, MessageSquare, Globe, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-bg.jpg";

const Applications = () => {
  const navigate = useNavigate();

  const applications = [
    {
      id: "leo",
      title: "LEO Application (Law Enforcement Officer)",
      description: "Serve and protect the community as part of our police department. Enforce the law, respond to emergencies, and keep the streets safe.",
      requirements: [
        "Must be 18+ years old",
        "Clean criminal record (in-city)",
        "Working microphone & Discord",
        "Basic knowledge of roleplay law enforcement"
      ]
    },
    {
      id: "doj",
      title: "DOJ Application (Department of Justice)",
      description: "Represent the law in the courtroom. Become an attorney, judge, or paralegal and handle the city's legal disputes with professionalism.",
      requirements: [
        "Must be 18+ years old",
        "Strong roleplay & communication skills",
        "Ability to read and interpret server rules/laws",
        "Clean criminal record (in-city)"
      ]
    },
    {
      id: "whitelisted",
      title: "Whitelisted Application",
      description: "Gain access to specialized careers such as mechanic, EMS, business owner, and more. Help keep the city running with unique whitelisted roles.",
      requirements: [
        "Must be 18+ years old",
        "Active and consistent roleplay presence",
        "Knowledge of chosen job's responsibilities",
        "Willingness to follow faction rules"
      ]
    },
    {
      id: "staff",
      title: "Staff Application",
      description: "Join our staff team and help maintain a fair and fun roleplay environment. Assist players, enforce rules, and contribute to the growth of the community.",
      requirements: [
        "Must be 18+ years old",
        "Clean history within the community",
        "Professional demeanor and attitude",
        "Good knowledge of server rules & systems"
      ]
    },
    {
      id: "dev-uiux",
      title: "Developer Application (UI/UX Designer)",
      description: "Help shape the visual experience of NodeX. As a UI/UX Designer, you'll create modern, intuitive, and immersive interfaces for our FiveM server and website.",
      requirements: [
        "Must be 18+ years old",
        "Proven experience with UI/UX design (portfolio required)",
        "Knowledge of Figma, Photoshop, or similar tools",
        "Ability to collaborate with developers & staff",
        "Creative mindset with attention to detail"
      ]
    },
    {
      id: "dev-lua",
      title: "Developer Application (Lua Scripter)",
      description: "Bring our ideas to life by coding custom scripts and optimizing server functionality. As a Lua Scripter, you'll help build unique features and maintain server performance.",
      requirements: [
        "Must be 18+ years old",
        "Strong knowledge of Lua & FiveM development",
        "Experience with frameworks (QB-Core / ESX preferred)",
        "Ability to debug, optimize, and document code",
        "Willingness to work with the team & meet deadlines"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(0.15)'
        }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

      {/* Header */}
      <header className="relative z-10 border-b border-border/50 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-primary text-3xl">N</span>
              <span className="text-white text-xl"> NodeX</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Dashboard</a>
            <a href="/support" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Support</a>
            <a href="/applications" className="text-primary hover:text-primary/80 transition-colors text-sm font-medium">Applications</a>
            <a href="/rules" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Rules</a>
          </nav>
          
          <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-white hover:bg-white/10 p-2"
            onClick={() => navigate("/admin/login")}
          >
            <MessageSquare className="h-4 w-4" />
          </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-2">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-2 flex items-center gap-1">
              <Globe className="h-4 w-4" />
              <span className="text-xs">ENG</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app) => (
            <div 
              key={app.id}
              className="bg-card/80 backdrop-blur-sm border border-border rounded-lg overflow-hidden"
            >
              <div className="p-6">
                {/* Icon */}
                <div className="w-14 h-14 bg-primary rounded flex items-center justify-center mb-4">
                  <Bell className="h-7 w-7 text-primary-foreground" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {app.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {app.description}
                </p>

                {/* Requirements */}
                <ul className="space-y-2 mb-6">
                  {app.requirements.map((req, index) => (
                    <li key={index} className="text-foreground text-sm flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Apply Button */}
              <div className="relative">
                <div 
                  className="bg-primary hover:bg-primary/90 transition-colors cursor-pointer group"
                  onClick={() => navigate(`/applications/${app.id}`)}
                  style={{
                    clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)"
                  }}
                >
                  <div className="py-4 text-center">
                    <span className="text-primary-foreground font-bold text-sm tracking-wide">
                      APPLY NOW
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Applications;
