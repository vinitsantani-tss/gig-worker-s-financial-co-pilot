import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, TrendingUp, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AIInsights = () => {
  const navigate = useNavigate();

  const insights = [
    {
      type: "opportunity",
      title: "Investment Opportunity",
      message: "Based on your risk profile, consider moving ₹5,000 to a liquid fund. Current returns: 7.2% p.a.",
      action: "View Details",
      icon: TrendingUp,
      variant: "success",
    },
    {
      type: "alert",
      title: "Spending Alert",
      message: "Your dining expenses are 25% higher this month. Consider budgeting ₹3,000 for next month.",
      action: "Set Budget",
      icon: AlertCircle,
      variant: "warning",
    },
  ];

  return (
    <div className="space-y-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-display font-bold">AI Insights</h2>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/chat")}
          className="text-primary hover:text-primary"
        >
          Chat with AI
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-3">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <Card
              key={index}
              className={`p-5 shadow-card border-l-4 transition-smooth hover:shadow-elevated ${
                insight.variant === "success"
                  ? "border-l-success"
                  : "border-l-warning"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-2 rounded-lg ${
                    insight.variant === "success"
                      ? "bg-success/10"
                      : "bg-warning/10"
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 ${
                      insight.variant === "success"
                        ? "text-success"
                        : "text-warning"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{insight.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {insight.message}
                  </p>
                  <Button
                    size="sm"
                    variant="ghost"
                    className={`${
                      insight.variant === "success"
                        ? "text-success hover:text-success"
                        : "text-warning hover:text-warning"
                    }`}
                  >
                    {insight.action}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default AIInsights;
