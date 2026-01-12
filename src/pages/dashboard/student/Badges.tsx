import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AchievementBadge, BadgeType, badgeConfig } from "@/components/ui/achievement-badge";
import {
  GraduationCap,
  ArrowRight,
  Award,
  Lock,
  Unlock,
} from "lucide-react";

const StudentBadges = () => {
  const earnedBadges: BadgeType[] = [
    "discipline",
    "persistent",
    "homework",
    "participation",
    "improvement",
  ];

  const lockedBadges: BadgeType[] = [
    "roleModel",
    "leadership",
    "teamwork",
    "excellence",
    "punctuality",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-l from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="font-bold text-lg hidden sm:block">WE Schools</span>
              </Link>
            </div>
            <Button variant="glass" size="sm" asChild>
              <Link to="/dashboard/student">
                <ArrowRight className="w-4 h-4 ml-2" />
                العودة للوحة التحكم
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Award className="w-8 h-8 text-accent" />
          جميع الشارات والإنجازات
        </h1>

        {/* Earned Badges */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Unlock className="w-6 h-6 text-success" />
            <h2 className="text-2xl font-bold">الشارات المكتسبة</h2>
            <span className="bg-success/20 text-success text-sm px-3 py-1 rounded-full">
              {earnedBadges.length} شارة
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {earnedBadges.map((badge, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-success/30">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <AchievementBadge type={badge} size="lg" earned showLabel />
                  <p className="text-xs text-muted-foreground mt-3">
                    {badgeConfig[badge].description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Locked Badges */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Lock className="w-6 h-6 text-muted-foreground" />
            <h2 className="text-2xl font-bold">الشارات المتبقية</h2>
            <span className="bg-muted text-muted-foreground text-sm px-3 py-1 rounded-full">
              {lockedBadges.length} شارة
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {lockedBadges.map((badge, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow opacity-70">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <AchievementBadge type={badge} size="lg" earned={false} showLabel />
                  <p className="text-xs text-muted-foreground mt-3">
                    {badgeConfig[badge].description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default StudentBadges;
