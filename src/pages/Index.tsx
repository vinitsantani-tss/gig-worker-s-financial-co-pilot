import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  Shield,
  TrendingUp,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Wallet,
  Target,
  Heart,
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Welcome Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 gradient-hero opacity-5"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            {/* Welcome Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20 animate-scale-in">
              <Sparkles className="h-5 w-5" />
              Welcome to Your Financial Future
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-tight tracking-tight">
              Namaste!
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                MuneemAI
              </span>
              {" "}here
            </h1>

            {/* Subheading */}
            <p className="text-2xl md:text-3xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
              Your personal AI-powered money manager, built specially for{" "}
              <span className="text-primary font-semibold">India's gig workers</span>
            </p>

            {/* Value Props */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto pt-8">
              <div className="flex items-center gap-3 justify-center md:justify-start p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">Safe & Secure</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="p-2 rounded-lg bg-primary/10">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">Smart Growth</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">Made for You</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                size="lg"
                className="gradient-hero text-xl px-12 py-6 h-auto transition-smooth hover:scale-105 shadow-elevated font-semibold"
                onClick={() => navigate("/onboarding")}
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-xl px-12 py-6 h-auto transition-smooth hover:scale-105 border-2 font-semibold"
                onClick={() => navigate("/dashboard")}
              >
                See Demo
              </Button>
            </div>

            {/* Trust Indicator */}
            <p className="text-sm text-muted-foreground pt-6">
              <span className="inline-flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Manage everything via WhatsApp in Hinglish
              </span>
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-primary/50"></div>
          </div>
        </div>
      </section>

      {/* Quick Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              What Can I Do For You?
            </h2>
            <p className="text-muted-foreground text-xl">
              Everything you need to build wealth, one day at a time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Wallet,
                title: "Track Money",
                description: "Know exactly where every rupee goes",
              },
              {
                icon: Target,
                title: "Set Goals",
                description: "Plan for your dreams, step by step",
              },
              {
                icon: TrendingUp,
                title: "Invest Smart",
                description: "Grow your wealth with AI guidance",
              },
              {
                icon: Shield,
                title: "Stay Protected",
                description: "Emergency funds when you need them",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center shadow-card transition-smooth hover:shadow-elevated hover:-translate-y-2 animate-slide-up border-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex p-4 rounded-2xl gradient-primary mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-2">
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
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              How We Make It Sustainable
            </h2>
            <p className="text-muted-foreground text-xl">
              Growing together with you
            </p>
          </div>
          <Card className="p-8 shadow-elevated border-2">
            <div className="space-y-5">
              {[
                "Freemium model with premium AI features",
                "Affiliate commissions from financial products",
                "Small transaction fees on automated investments",
                "Partnership revenue with banks and NBFCs",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto text-center max-w-3xl space-y-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Ready to Transform Your Financial Life?
          </h2>
          <p className="text-2xl opacity-90 font-light">
            Join thousands of gig workers taking control of their future
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-xl px-12 py-6 h-auto transition-smooth hover:scale-105 shadow-elevated font-semibold"
            onClick={() => navigate("/onboarding")}
          >
            Let's Begin
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="text-sm">© 2024 MuneemAI. Built for Hackathon Demo.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
