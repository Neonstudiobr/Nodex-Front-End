import { useState } from "react";
import { User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-bg.jpg";

const Rules = () => {
  const [activeSection, setActiveSection] = useState("terms");

  const sections = [
    { id: "terms", label: "Terms of Service" },
    { id: "privacy", label: "Privacy Policies" },
    { id: "rules", label: "Rules" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            filter: 'brightness(0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        
        <div className="relative z-10 text-center px-6 py-16">
          <div className="flex items-center justify-center mb-4">
            <span className="text-primary text-4xl font-bold">N</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold">
            <span className="text-white">NODEX</span>
            <br />
            <span className="text-primary">RULES</span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-80 space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-2">Rules</h2>
              <p className="text-muted-foreground text-sm mb-6">ToS / Privacy Policies / Rules</p>
            </div>

            {/* Navigation */}
            <div className="space-y-2">
              {sections.map((section) => (
                <div
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-3 p-3 rounded cursor-pointer transition-colors ${
                    activeSection === section.id
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-card text-muted-foreground hover:bg-muted'
                  }`}
                >
                  <User className="h-4 w-4" />
                  <span className="text-sm font-medium">{section.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            {activeSection === "terms" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">Terms of Service</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Welcome to the Terms of Service (ToS) for NodeXRP, a GTA 5 and FiveM roleplay server, 
                    which is hosted on the domain ProdigyWorld.net. By accessing or using our services, 
                    you agree to be bound by these ToS, our Privacy Policy, and our Ruleset.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">General Terms</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-foreground">·</span>
                      <span>NodeXRP reserves the right to change, modify, or update these ToS at any time without prior notice.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-foreground">·</span>
                      <span>We reserve the right to terminate, suspend, or modify our services, or any portion thereof, at any time.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-foreground">·</span>
                      <span>We are not responsible for any damages or losses incurred as a result of using our services.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-foreground">·</span>
                      <span>ProdigyRP is not affiliated with Rockstar or any entity associated with the Grand Theft Auto series.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Prohibited Conduct</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-foreground">·</span>
                      <span>You may not use our services for any illegal or unauthorized purpose.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-foreground">·</span>
                      <span>Harassment, threats, or intimidation of other players is strictly prohibited.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-foreground">·</span>
                      <span>Exploiting bugs or glitches is not allowed. Report issues immediately to our staff.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-foreground">·</span>
                      <span>You may not claim ownership of any materials from GTA 5 or FiveM.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-foreground">·</span>
                      <span>You must be at least 18 years of age to play on our server.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Refund Policy</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-foreground">·</span>
                      <span>All purchases made through our Tebex store are final and non-refundable.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-foreground">·</span>
                      <span>Chargebacks may result in a permanent ban from our server.</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeSection === "privacy" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">Privacy Policies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-foreground">·</span>
                      <span>Account information (username, email address)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-foreground">·</span>
                      <span>Game play data and statistics</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-foreground">·</span>
                      <span>Communication logs and chat history</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-foreground">·</span>
                      <span>Technical information (IP address, device information)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-foreground">·</span>
                      <span>To provide and maintain our services</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-foreground">·</span>
                      <span>To improve user experience and gameplay</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-foreground">·</span>
                      <span>To prevent fraud and enforce our rules</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-foreground">·</span>
                      <span>To communicate with you about updates and changes</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeSection === "rules" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">Server Rules</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Please read and follow these rules to ensure a positive experience for all players.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">General Rules</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-foreground">·</span>
                      <span>Respect all players and staff members at all times</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-foreground">·</span>
                      <span>No metagaming, powergaming, or fail RP</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-foreground">·</span>
                      <span>Stay in character at all times while in-game</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-foreground">·</span>
                      <span>Follow New Life Rule (NLR) after respawning</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Roleplay Rules</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-foreground">·</span>
                      <span>Value your character's life at all times (Fear RP)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-foreground">·</span>
                      <span>No random deathmatch (RDM) or vehicle deathmatch (VDM)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-foreground">·</span>
                      <span>All robberies and crimes must have valid RP reasons</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-foreground">·</span>
                      <span>Communication must be done through in-game voice</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Rules;
