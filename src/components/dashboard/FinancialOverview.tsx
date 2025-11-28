import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Wallet, Shield } from "lucide-react";

const FinancialOverview = () => {
  const stats = [
    {
      label: "Total Balance",
      value: "₹45,280",
      change: "+12.5%",
      trend: "up",
      icon: Wallet,
      gradient: "gradient-primary",
    },
    {
      label: "Emergency Fund",
      value: "₹15,000",
      change: "Safe",
      trend: "neutral",
      icon: Shield,
      gradient: "gradient-secondary",
    },
    {
      label: "This Month",
      value: "₹8,450",
      change: "-5.2%",
      trend: "down",
      icon: TrendingDown,
      gradient: "from-accent to-warning",
    },
  ];

  return (
    <div className="space-y-4 animate-slide-up">
      <h2 className="text-xl font-display font-bold">Financial Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card
              key={index}
              className="p-6 shadow-card transition-smooth hover:shadow-elevated hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${stat.gradient} bg-gradient-to-br`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                {stat.trend !== "neutral" && (
                  <span
                    className={`text-sm font-medium ${
                      stat.trend === "up" ? "text-success" : "text-destructive"
                    }`}
                  >
                    {stat.change}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-3xl font-display font-bold">{stat.value}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default FinancialOverview;
