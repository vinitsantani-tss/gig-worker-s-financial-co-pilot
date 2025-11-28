import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  Shield,
  TrendingUp,
  MessageSquare,
  Target,
  Wallet,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Insights",
      description: "Smart recommendations based on your spending patterns and goals",
    },
    {
      icon: Shield,
      title: "Secure & Trustworthy",
      description: "Your data is encrypted and protected with bank-level security",
    },
    {
      icon: TrendingUp,
      title: "Investment Guidance",
      description: "Personalized investment options matched to your risk appetite",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Integration",
      description: "Manage your finances through simple WhatsApp messages in Hinglish",
    },
  ];

  const businessModel = [
    "Freemium model with premium AI features",
    "Affiliate commissions from financial products",
    "Small transaction fees on automated investments",
    "Partnership revenue with banks and NBFCs",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 gradient-hero opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              <Sparkles className="h-4 w-4" />
              AI-Powered Financial Assistant
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
              Your Money Manager,
              <span className="bg-gradient-hero bg-clip-text text-transparent"> MuneemAI</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Empowering 90% of India's gig workers with intelligent financial management, 
              investment guidance, and wealth building tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="gradient-hero text-lg px-8 transition-smooth hover:scale-105 shadow-elevated"
                onClick={() => navigate("/onboarding")}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 transition-smooth hover:scale-105"
                onClick={() => navigate("/dashboard")}
              >
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Why Choose MuneemAI?
            </h2>
            <p className="text-muted-foreground text-lg">
              Built specifically for India's gig economy workers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-6 shadow-card transition-smooth hover:shadow-elevated hover:-translate-y-2 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 rounded-xl gradient-primary w-fit mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our Business Model
            </h2>
            <p className="text-muted-foreground text-lg">
              Sustainable growth while serving our users
            </p>
          </div>
          <Card className="p-8 shadow-elevated">
            <div className="space-y-4">
              {businessModel.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-xl opacity-90">
            Join thousands of gig workers building their financial future with MuneemAI
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 transition-smooth hover:scale-105"
            onClick={() => navigate("/onboarding")}
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 MuneemAI. Built for the Hackathon. Demo purposes only.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
