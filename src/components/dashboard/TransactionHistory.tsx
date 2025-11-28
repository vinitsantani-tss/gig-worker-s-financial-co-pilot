import { Card } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownLeft, Coffee, Home, ShoppingBag, Zap } from "lucide-react";

const TransactionHistory = () => {
  const transactions = [
    {
      id: 1,
      type: "income",
      category: "Freelance Work",
      amount: "₹8,500",
      date: "Today, 2:30 PM",
      icon: ArrowUpRight,
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      id: 2,
      type: "expense",
      category: "Groceries",
      amount: "₹1,250",
      date: "Today, 11:00 AM",
      icon: ShoppingBag,
      color: "text-destructive",
      bgColor: "bg-destructive/10",
    },
    {
      id: 3,
      type: "expense",
      category: "Electricity Bill",
      amount: "₹850",
      date: "Yesterday",
      icon: Zap,
      color: "text-destructive",
      bgColor: "bg-destructive/10",
    },
    {
      id: 4,
      type: "expense",
      category: "Rent",
      amount: "₹6,000",
      date: "2 days ago",
      icon: Home,
      color: "text-destructive",
      bgColor: "bg-destructive/10",
    },
  ];

  return (
    <div className="space-y-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
      <h2 className="text-xl font-display font-bold">Recent Transactions</h2>
      <Card className="p-4 shadow-card">
        <div className="space-y-3">
          {transactions.map((transaction) => {
            const Icon = transaction.icon;
            return (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-3 rounded-lg transition-smooth hover:bg-muted/50"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${transaction.bgColor}`}>
                    <Icon className={`h-5 w-5 ${transaction.color}`} />
                  </div>
                  <div>
                    <p className="font-medium">{transaction.category}</p>
                    <p className="text-sm text-muted-foreground">{transaction.date}</p>
                  </div>
                </div>
                <p
                  className={`font-semibold ${
                    transaction.type === "income" ? "text-success" : "text-foreground"
                  }`}
                >
                  {transaction.type === "income" ? "+" : "-"}{transaction.amount}
                </p>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default TransactionHistory;
