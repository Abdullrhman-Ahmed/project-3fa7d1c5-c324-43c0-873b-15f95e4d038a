import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: "blue" | "green" | "gold" | "purple";
  className?: string;
}

const StatsCard = ({
  title,
  value,
  icon: Icon,
  trend,
  variant = "blue",
  className,
}: StatsCardProps) => {
  const variantClasses = {
    blue: "stats-gradient-blue",
    green: "stats-gradient-green",
    gold: "stats-gradient-gold",
    purple: "stats-gradient-purple",
  };

  return (
    <Card
      className={cn(
        "overflow-hidden border-0 card-hover",
        variantClasses[variant],
        className
      )}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-primary-foreground/80">{title}</p>
            <p className="text-3xl font-bold text-primary-foreground">{value}</p>
            {trend && (
              <p
                className={cn(
                  "text-xs font-medium",
                  trend.isPositive
                    ? "text-green-200"
                    : "text-red-200"
                )}
              >
                {trend.isPositive ? "+" : "-"}{Math.abs(trend.value)}% من الشهر الماضي
              </p>
            )}
          </div>
          <div className="rounded-full bg-primary-foreground/20 p-3">
            <Icon className="h-8 w-8 text-primary-foreground" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { StatsCard };
