import { cn } from "@/lib/utils";
import { 
  Shield, 
  Clock, 
  BookOpen, 
  Heart, 
  TrendingUp, 
  Star,
  Award,
  Target,
  Zap,
  Users
} from "lucide-react";

type BadgeType = 
  | "discipline" 
  | "persistent" 
  | "homework" 
  | "roleModel" 
  | "improvement"
  | "participation"
  | "leadership"
  | "teamwork"
  | "excellence"
  | "punctuality";

interface AchievementBadgeProps {
  type: BadgeType;
  earned?: boolean;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}

const badgeConfig = {
  discipline: {
    label: "نجم الانضباط",
    icon: Shield,
    color: "bg-blue-500",
    description: "التزام مثالي بقواعد المدرسة",
  },
  persistent: {
    label: "الطالب المثابر",
    icon: Target,
    color: "bg-green-500",
    description: "استمرارية في الأداء المتميز",
  },
  homework: {
    label: "بطل الواجبات",
    icon: BookOpen,
    color: "bg-purple-500",
    description: "التزام كامل بتسليم الواجبات",
  },
  roleModel: {
    label: "القدوة الحسنة",
    icon: Heart,
    color: "bg-pink-500",
    description: "سلوك قدوة يحتذى به",
  },
  improvement: {
    label: "تطور ملحوظ",
    icon: TrendingUp,
    color: "bg-amber-500",
    description: "تحسن كبير في الأداء السلوكي",
  },
  participation: {
    label: "نجم المشاركة",
    icon: Star,
    color: "bg-yellow-500",
    description: "مشاركة فعالة في الحصص",
  },
  leadership: {
    label: "روح القيادة",
    icon: Award,
    color: "bg-indigo-500",
    description: "مهارات قيادية متميزة",
  },
  teamwork: {
    label: "روح الفريق",
    icon: Users,
    color: "bg-teal-500",
    description: "تعاون مثالي مع الزملاء",
  },
  excellence: {
    label: "التميز",
    icon: Zap,
    color: "bg-orange-500",
    description: "أداء متميز في جميع المجالات",
  },
  punctuality: {
    label: "المواظبة",
    icon: Clock,
    color: "bg-cyan-500",
    description: "حضور منتظم ودقة في المواعيد",
  },
};

const AchievementBadge = ({
  type,
  earned = true,
  size = "md",
  showLabel = true,
  className,
}: AchievementBadgeProps) => {
  const config = badgeConfig[type];
  const Icon = config.icon;

  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-20 h-20",
  };

  const iconSizes = {
    sm: 18,
    md: 24,
    lg: 32,
  };

  return (
    <div className={cn("flex flex-col items-center gap-1", className)}>
      <div
        className={cn(
          "rounded-full flex items-center justify-center transition-all duration-300",
          sizeClasses[size],
          earned ? config.color : "bg-muted",
          earned ? "text-primary-foreground shadow-lg" : "text-muted-foreground",
          earned && "hover:scale-110 hover:shadow-xl",
          !earned && "opacity-50 grayscale"
        )}
      >
        <Icon size={iconSizes[size]} />
      </div>
      {showLabel && (
        <span
          className={cn(
            "text-xs font-medium text-center",
            earned ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {config.label}
        </span>
      )}
    </div>
  );
};

export { AchievementBadge, badgeConfig };
export type { BadgeType };
