import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Settings, Zap, Globe, Gamepad2 } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Features 01",
    description: "You have received a new Exchange request sent by Roleplayer#3112"
  },
  {
    icon: Users,
    title: "Features 01", 
    description: "You have received a new Exchange request sent by Roleplayer#3112"
  },
  {
    icon: Settings,
    title: "Features 01",
    description: "You have received a new Exchange request sent by Roleplayer#3112"
  },
  {
    icon: Zap,
    title: "Features 01",
    description: "You have received a new Exchange request sent by Roleplayer#3112"
  },
  {
    icon: Globe,
    title: "Features 01",
    description: "You have received a new Exchange request sent by Roleplayer#3112"
  },
  {
    icon: Gamepad2,
    title: "Features 01",
    description: "You have received a new Exchange request sent by Roleplayer#3112"
  }
];

const ServerFeatures = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4">Server Features</h2>
          <p className="text-xl text-muted-foreground">Everything you need for the ultimate roleplay experience</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:bg-card/80 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-3 rounded-lg flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServerFeatures;