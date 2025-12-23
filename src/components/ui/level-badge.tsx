import { cn } from "@/lib/utils";
import { Star, Award, Trophy, Crown, Medal } from "lucide-react";

type LevelType = "beginner" | "diligent" | "distinguished" | "leader" | "ambassador";

interface LevelBadgeProps {
  level: LevelType;
  points?: number;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const levelConfig = {
  beginner: {
    label: "مبتدئ",
    icon: Star,
    minPoints: 0,
    maxPoints: 99,
    className: "bg-muted text-muted-foreground border-muted-foreground/20",
  },
  diligent: {
    label: "مجتهد",
    icon: Medal,
    minPoints: 100,
    maxPoints: 299,
    className: "bg-success text-success-foreground border-success/50",
  },
  distinguished: {
    label: "متميز",
    icon: Award,
    minPoints: 300,
    maxPoints: 599,
    className: "bg-primary text-primary-foreground border-primary/50",
  },
  leader: {
    label: "قائد",
    icon: Trophy,
    minPoints: 600,
    maxPoints: 999,
    className: "bg-purple-600 text-primary-foreground border-purple-400/50",
  },
  ambassador: {
    label: "سفير المدرسة",
    icon: Crown,
    minPoints: 1000,
    maxPoints: Infinity,
    className: "bg-gradient-to-l from-amber-400 to-yellow-500 text-foreground border-amber-300 badge-glow",
  },
};

const getLevelFromPoints = (points: number): LevelType => {
  if (points >= 1000) return "ambassador";
  if (points >= 600) return "leader";
  if (points >= 300) return "distinguished";
  if (points >= 100) return "diligent";
  return "beginner";
};

const LevelBadge = ({
  level,
  points,
  showLabel = true,
  size = "md",
  className,
}: LevelBadgeProps) => {
  const config = levelConfig[level];
  const Icon = config.icon;

  const sizeClasses = {
    sm: "px-2 py-1 text-xs gap-1",
    md: "px-3 py-1.5 text-sm gap-1.5",
    lg: "px-4 py-2 text-base gap-2",
  };

  const iconSizes = {
    sm: 12,
    md: 16,
    lg: 20,
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border font-bold transition-all duration-300",
        sizeClasses[size],
        config.className,
        className
      )}
    >
      <Icon size={iconSizes[size]} />
      {showLabel && <span>{config.label}</span>}
      {points !== undefined && (
        <span className="opacity-80">({points})</span>
      )}
    </div>
  );
};

export { LevelBadge, getLevelFromPoints, levelConfig };
export type { LevelType };
