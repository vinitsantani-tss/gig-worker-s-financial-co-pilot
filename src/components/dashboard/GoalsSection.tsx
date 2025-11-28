import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Target, Calendar, TrendingUp } from "lucide-react";

const GoalsSection = () => {
  const goals = [
    {
      title: "Emergency Fund",
      target: "₹50,000",
      current: "₹15,000",
      progress: 30,
      type: "immediate",
      icon: Target,
      color: "text-success",
    },
    {
      title: "New Bike",
      target: "₹80,000",
      current: "₹25,000",
      progress: 31,
      type: "short-term",
      icon: Calendar,
      color: "text-primary",
    },
    {
      title: "Retirement Fund",
      target: "₹10,00,000",
      current: "₹45,000",
      progress: 5,
      type: "long-term",
      icon: TrendingUp,
      color: "text-accent",
    },
  ];

  return (
    <div className="space-y-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
      <h2 className="text-xl font-display font-bold">Your Financial Goals</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {goals.map((goal, index) => {
          const Icon = goal.icon;
          return (
            <Card
              key={index}
              className="p-6 shadow-card transition-smooth hover:shadow-elevated"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className={`h-5 w-5 ${goal.color}`} />
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      {goal.type}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-lg">{goal.title}</h3>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{goal.progress}%</span>
                </div>
                <Progress value={goal.progress} className="h-2" />
                <div className="flex justify-between text-sm pt-2">
                  <span className="text-muted-foreground">Current</span>
                  <span className="font-medium">{goal.current}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Target</span>
                  <span className="font-medium">{goal.target}</span>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default GoalsSection;
