import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StatsCard } from "@/components/ui/stats-card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { LevelBadge, getLevelFromPoints } from "@/components/ui/level-badge";
import { AchievementBadge, BadgeType } from "@/components/ui/achievement-badge";
import {
  GraduationCap,
  Bell,
  Settings,
  LogOut,
  Trophy,
  Target,
  Calendar,
  TrendingUp,
  Star,
  Clock,
  BookOpen,
  Award,
  ChevronLeft,
  Flame,
  Gift,
} from "lucide-react";

const StudentDashboard = () => {
  // Mock data
  const student = {
    name: "أحمد محمد علي",
    class: "الصف الثاني",
    section: "الفصل أ",
    points: 450,
    nextLevelPoints: 600,
    streak: 15,
    rank: 3,
    totalStudents: 25,
  };

  const level = getLevelFromPoints(student.points);

  const recentEvaluations = [
    { subject: "الرياضيات", teacher: "أ. محمد أحمد", date: "اليوم", points: 10, type: "positive" },
    { subject: "اللغة العربية", teacher: "أ. فاطمة علي", date: "أمس", points: 5, type: "positive" },
    { subject: "العلوم", teacher: "أ. أحمد حسن", date: "منذ يومين", points: -5, type: "negative" },
    { subject: "اللغة الإنجليزية", teacher: "أ. سارة محمد", date: "منذ 3 أيام", points: 15, type: "positive" },
  ];

  const earnedBadges: BadgeType[] = ["discipline", "persistent", "homework", "participation", "improvement"];
  const lockedBadges: BadgeType[] = ["roleModel", "leadership", "teamwork", "excellence", "punctuality"];

  const challenges = [
    { title: "حضور 5 أيام متتالية", progress: 3, target: 5, reward: 20 },
    { title: "تسليم جميع الواجبات هذا الأسبوع", progress: 4, target: 5, reward: 25 },
    { title: "الحصول على 10 نقاط مشاركة", progress: 7, target: 10, reward: 15 },
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
            <div className="flex items-center gap-2">
              <Button variant="glass" size="icon" className="relative" asChild>
                <Link to="/dashboard/student/notifications">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -left-1 w-4 h-4 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center">
                    3
                  </span>
                </Link>
              </Button>
              <Button variant="glass" size="icon" asChild>
                <Link to="/dashboard/student/settings">
                  <Settings className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="glass" size="icon" asChild>
                <Link to="/login">
                  <LogOut className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Profile Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-primary-foreground/20 flex items-center justify-center text-4xl font-bold border-4 border-primary-foreground/30">
              أ
            </div>
            <div className="text-center md:text-right flex-1">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{student.name}</h1>
              <p className="opacity-90">{student.class} - {student.section}</p>
              <div className="flex items-center justify-center md:justify-start gap-3 mt-3">
                <LevelBadge level={level} points={student.points} />
                <div className="flex items-center gap-1 bg-primary-foreground/20 px-3 py-1 rounded-full text-sm">
                  <Flame className="w-4 h-4 text-orange-300" />
                  <span>{student.streak} يوم متتالي</span>
                </div>
              </div>
            </div>
            <div className="text-center bg-primary-foreground/10 rounded-2xl p-6">
              <p className="text-sm opacity-80 mb-1">ترتيبك بين زملائك</p>
              <p className="text-4xl font-bold">{student.rank}</p>
              <p className="text-sm opacity-80">من {student.totalStudents} طالب</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatsCard
            title="النقاط الحالية"
            value={student.points}
            icon={Trophy}
            variant="blue"
            trend={{ value: 12, isPositive: true }}
          />
          <StatsCard
            title="أيام الانضباط"
            value={28}
            icon={Calendar}
            variant="green"
          />
          <StatsCard
            title="الشارات المكتسبة"
            value={earnedBadges.length}
            icon={Award}
            variant="gold"
          />
          <StatsCard
            title="التحديات المكتملة"
            value={7}
            icon={Target}
            variant="purple"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progress to Next Level */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    التقدم نحو المستوى التالي
                  </h2>
                  <LevelBadge level="leader" showLabel size="sm" />
                </div>
                <ProgressBar
                  value={student.points}
                  max={student.nextLevelPoints}
                  variant="default"
                  size="lg"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  تحتاج {student.nextLevelPoints - student.points} نقطة إضافية للوصول إلى مستوى "قائد"
                </p>
              </CardContent>
            </Card>

            {/* Recent Evaluations */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    آخر التقييمات
                  </h2>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/dashboard/student/evaluations">
                      عرض الكل
                      <ChevronLeft className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <div className="space-y-4">
                  {recentEvaluations.map((evaluation, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            evaluation.type === "positive" ? "bg-success/20 text-success" : "bg-destructive/20 text-destructive"
                          }`}
                        >
                          <BookOpen className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-medium">{evaluation.subject}</p>
                          <p className="text-sm text-muted-foreground">{evaluation.teacher}</p>
                        </div>
                      </div>
                      <div className="text-left">
                        <p
                          className={`font-bold ${
                            evaluation.type === "positive" ? "text-success" : "text-destructive"
                          }`}
                        >
                          {evaluation.type === "positive" ? "+" : ""}{evaluation.points}
                        </p>
                        <p className="text-xs text-muted-foreground">{evaluation.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Weekly Challenges */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <Target className="w-5 h-5 text-accent" />
                    التحديات الأسبوعية
                  </h2>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Gift className="w-4 h-4" />
                    اكسب نقاط إضافية
                  </div>
                </div>
                <div className="space-y-4">
                  {challenges.map((challenge, index) => (
                    <div key={index} className="p-4 rounded-xl border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium">{challenge.title}</p>
                        <span className="text-sm text-accent font-bold">+{challenge.reward} نقطة</span>
                      </div>
                      <ProgressBar
                        value={challenge.progress}
                        max={challenge.target}
                        variant="accent"
                        size="sm"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Badges */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-accent" />
                  الشارات والإنجازات
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  {earnedBadges.map((badge, index) => (
                    <AchievementBadge key={index} type={badge} size="md" earned />
                  ))}
                  {lockedBadges.slice(0, 3).map((badge, index) => (
                    <AchievementBadge key={index} type={badge} size="md" earned={false} />
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link to="/dashboard/student/badges">
                    عرض جميع الشارات
                    <ChevronLeft className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Motivational Message */}
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Flame className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">أحسنت! استمر</h3>
                <p className="text-muted-foreground text-sm">
                  أنت تحقق تقدمًا رائعًا! حافظ على هذا المستوى وستصل إلى القمة قريبًا
                </p>
              </CardContent>
            </Card>

            {/* Self Evaluation */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-bold mb-4">التقييم الذاتي</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  قيّم سلوكك اليوم لتتعرف على نقاط قوتك وتحسينك
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/dashboard/student/self-evaluation">
                    ابدأ التقييم الذاتي
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
