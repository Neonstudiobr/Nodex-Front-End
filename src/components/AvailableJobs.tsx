import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Users } from "lucide-react";

const jobCategories = [
  "ALL JOBS",
  "ALL JOBS", 
  "ALL JOBS",
  "ALL JOBS",
  "ALL JOBS",
  "ALL JOBS",
  "ALL JOBS",
  "ALL JOBS"
];

const jobs = [
  {
    title: "Police Officer",
    description: "Protect and serve the city, maintain law and order",
    requirements: {
      age: "18+ years old",
      level: "Level required",
      clean: "Clean Record",
      test: "Test"
    },
    price: "$0.00",
    icon: Shield
  },
  {
    title: "Police Officer",
    description: "Protect and serve the city, maintain law and order", 
    requirements: {
      age: "18+ years old",
      level: "Level required", 
      clean: "Clean Record",
      test: "Test"
    },
    price: "$0.00",
    icon: Shield
  },
  {
    title: "Police Officer",
    description: "Protect and serve the city, maintain law and order",
    requirements: {
      age: "18+ years old",
      level: "Level required",
      clean: "Clean Record", 
      test: "Test"
    },
    price: "$0.00",
    icon: Shield
  },
  {
    title: "Police Officer",
    description: "Protect and serve the city, maintain law and order",
    requirements: {
      age: "18+ years old",
      level: "Level required",
      clean: "Clean Record",
      test: "Test" 
    },
    price: "$0.00",
    icon: Shield
  },
  {
    title: "Police Officer",
    description: "Protect and serve the city, maintain law and order",
    requirements: {
      age: "18+ years old",
      level: "Level required",
      clean: "Clean Record",
      test: "Test"
    },
    price: "$0.00",
    icon: Shield
  },
  {
    title: "Police Officer",
    description: "Protect and serve the city, maintain law and order",
    requirements: {
      age: "18+ years old", 
      level: "Level required",
      clean: "Clean Record",
      test: "Test"
    },
    price: "$0.00",
    icon: Shield
  }
];

const AvailableJobs = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-left mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-2">
            AVAILABLE <span className="text-primary">JOBS</span>
          </h2>
          <p className="text-xl text-muted-foreground">Choose your career path</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Job Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {jobCategories.map((category, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-lg border border-border cursor-pointer transition-colors ${
                    index === 0 ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5" />
                    <span className="font-medium">{category}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-secondary rounded-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-foreground">1,327</div>
                  <div className="text-sm text-muted-foreground">Total Jobs</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">1,327</div>
                  <div className="text-sm text-muted-foreground">Active Workers</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Jobs Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jobs.map((job, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="bg-primary/20 p-3 rounded-lg">
                        <job.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">{job.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">• {job.requirements.age}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">• {job.requirements.level}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">• {job.requirements.clean}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">• {job.requirements.test}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-muted-foreground">PRICE</span>
                        <div className="text-xl font-bold text-success">{job.price}</div>
                      </div>
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">
                        APPLY NOW
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailableJobs;