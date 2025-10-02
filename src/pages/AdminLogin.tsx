import { ArrowLeft, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import heroImage from "@/assets/hero-bg.jpg";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement admin authentication logic
    console.log("Admin login attempt:", email);
    navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(0.2)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
      
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-8 left-8 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors z-20"
      >
        <div className="border border-muted-foreground hover:border-foreground p-2 rounded">
          <ArrowLeft className="h-5 w-5" />
        </div>
        <span className="text-sm">Back to top</span>
      </button>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* Logo */}
        <div className="flex items-center justify-center mb-12">
          <div className="text-5xl font-bold">
            <span className="text-primary text-6xl">N</span>
            <span className="text-white text-4xl"> NodeX</span>
          </div>
        </div>

        {/* Welcome Text */}
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
          Welcome!
        </h1>
        
        <div className="text-center mb-12 max-w-md">
          <p className="text-muted-foreground text-lg leading-relaxed">
            We are excited to have your back.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Log in now and access your account.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="w-full max-w-md space-y-4">
          <Input
            type="email"
            placeholder="nome@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-background/10 border-border text-foreground placeholder:text-muted-foreground backdrop-blur-sm h-12"
          />
          
          <div className="relative">
            <Input
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-background/10 border-border text-foreground placeholder:text-muted-foreground backdrop-blur-sm h-12 pr-10"
            />
            <Lock className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base font-medium"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
