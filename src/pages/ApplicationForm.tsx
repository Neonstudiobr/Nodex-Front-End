import { Button } from "@/components/ui/button";
import { User, MessageSquare, Globe } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-bg.jpg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

const ApplicationForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const applicationTitles: Record<string, string> = {
    "leo": "LEO Application",
    "doj": "DOJ Application",
    "whitelisted": "Whitelisted Application",
    "staff": "FIVEM STAFF APPLICATION",
    "dev-uiux": "UI/UX Developer Application",
    "dev-lua": "Lua Developer Application"
  };

  const handleCheckboxChange = (value: string) => {
    setSelectedOptions(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    navigate("/applications");
  };

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
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Logo Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <span className="text-primary text-4xl font-bold">N</span>
          </div>
          <h1 className="text-5xl font-bold mb-2">
            <span className="text-foreground">NODEX</span>
          </h1>
          <h2 className="text-3xl font-bold text-primary">APPLICATION</h2>
        </div>

        {/* Form Card */}
        <div className="max-w-4xl mx-auto bg-card/80 backdrop-blur-sm border border-border rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-4">
            {applicationTitles[id || "staff"] || "APPLICATION"}
          </h3>
          <p className="text-muted-foreground text-center mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Select Dropdown 1 */}
            <div>
              <label className="text-foreground text-sm mb-2 block">
                Testing <span className="text-primary">*</span>
              </label>
              <Select>
                <SelectTrigger className="w-full bg-background/50 border-border text-foreground">
                  <SelectValue placeholder="Testing" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="option1">Testing</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Select Dropdown 2 */}
            <div>
              <label className="text-foreground text-sm mb-2 block">
                Testing <span className="text-primary">*</span>
              </label>
              <Select>
                <SelectTrigger className="w-full bg-background/50 border-border text-foreground">
                  <SelectValue placeholder="Testing" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="option1">Testing</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Checkboxes */}
            <div>
              <label className="text-foreground text-sm mb-3 block">
                Testing <span className="text-primary">*</span>
              </label>
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="flex items-center space-x-3">
                    <Checkbox
                      id={`option-${num}`}
                      checked={selectedOptions.includes(`option-${num}`)}
                      onCheckedChange={() => handleCheckboxChange(`option-${num}`)}
                      className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <label
                      htmlFor={`option-${num}`}
                      className="text-foreground text-sm cursor-pointer"
                    >
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Text Area */}
            <div>
              <label className="text-foreground text-sm mb-2 block">
                Testing <span className="text-primary">*</span>
              </label>
              <p className="text-muted-foreground text-sm mb-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              
              {/* Formatting Toolbar */}
              <div className="flex gap-2 mb-2 p-2 bg-background/50 border border-border rounded-t-lg">
                <button type="button" className="text-muted-foreground hover:text-foreground px-2 py-1 text-sm font-bold">
                  B
                </button>
                <button type="button" className="text-muted-foreground hover:text-foreground px-2 py-1 text-sm italic">
                  I
                </button>
                <button type="button" className="text-muted-foreground hover:text-foreground px-2 py-1 text-sm">
                  H
                </button>
                <button type="button" className="text-muted-foreground hover:text-foreground px-2 py-1 text-sm">
                  H2
                </button>
                <button type="button" className="text-muted-foreground hover:text-foreground px-2 py-1 text-sm">
                  H3
                </button>
                <button type="button" className="text-muted-foreground hover:text-foreground px-2 py-1 text-sm">
                  S
                </button>
              </div>
              
              <Textarea
                className="min-h-[200px] bg-background/50 border-border text-foreground resize-none rounded-t-none"
                placeholder=""
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button
                type="submit"
                variant="outline"
                className="border-border text-foreground hover:bg-muted px-12"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ApplicationForm;
