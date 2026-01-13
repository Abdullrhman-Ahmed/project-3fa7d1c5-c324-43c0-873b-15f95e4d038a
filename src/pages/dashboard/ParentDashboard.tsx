import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatsCard } from "@/components/ui/stats-card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { LevelBadge, getLevelFromPoints } from "@/components/ui/level-badge";
import { AchievementBadge, BadgeType } from "@/components/ui/achievement-badge";
import {
  GraduationCap,
  Bell,
  Settings,
  LogOut,
  Users,
  Trophy,
  TrendingUp,
  TrendingDown,
  MessageSquare,
  FileText,
  Calendar,
  BookOpen,
  ChevronLeft,
  AlertCircle,
  CheckCircle,
  Lightbulb,
} from "lucide-react";

const ParentDashboard = () => {
  // Mock data
  const parent = {
    name: "محمد علي",
  };

  const child = {
    name: "أحمد محمد علي",
    class: "الصف الثاني",
    section: "الفصل أ",
    points: 450,
    previousPoints: 400,
    level: getLevelFromPoints(450),
    attendance: 95,
    rank: 3,
  };

  const recentEvaluations = [
    {
      subject: "الرياضيات",
      teacher: "أ. محمد أحمد",
      date: "اليوم",
      points: 10,
      type: "positive",
      category: "المشاركة",
    },
    {
      subject: "اللغة العربية",
      teacher: "أ. فاطمة علي",
      date: "أمس",
      points: 5,
      type: "positive",
      category: "الانضباط",
    },
    {
      subject: "العلوم",
      teacher: "أ. أحمد حسن",
      date: "منذ يومين",
      points: -5,
      type: "negative",
      category: "الواجبات",
    },
  ];

  const notifications = [
    {
      type: "positive",
      message: "أحمد حصل على شارة 'نجم المشاركة' الجديدة!",
      time: "منذ ساعة",
    },
    {
      type: "info",
      message: "تذكير: اجتماع أولياء الأمور يوم الخميس القادم",
      time: "منذ 3 ساعات",
    },
    {
      type: "negative",
      message: "تنبيه: أحمد لم يسلم واجب العلوم",
      time: "أمس",
    },
  ];

  const tips = [
    "شجع ابنك على المشاركة في الحصص الدراسية",
    "راجع معه الواجبات المنزلية يوميًا",
    "احتفل بإنجازاته الصغيرة قبل الكبيرة",
  ];

  const earnedBadges: BadgeType[] = ["discipline", "persistent", "homework", "participation", "improvement"];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-l from-accent to-primary text-primary-foreground">
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
                <Link to="/dashboard/parent/evaluations">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -left-1 w-4 h-4 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center">
                    3
                  </span>
                </Link>
              </Button>
              <Button variant="glass" size="icon" asChild>
                <Link to="/dashboard/parent/settings">
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

        {/* Parent Info */}
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold mb-4">مرحبًا، {parent.name}</h1>
          <Card className="bg-primary-foreground/10 border-0">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-foreground to-accent flex items-center justify-center text-2xl font-bold text-foreground">
                  أ
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold">{child.name}</h2>
                  <p className="opacity-90">{child.class} - {child.section}</p>
                </div>
                <LevelBadge level={child.level} points={child.points} />
              </div>
            </CardContent>
          </Card>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatsCard
            title="النقاط الحالية"
            value={child.points}
            icon={Trophy}
            variant="blue"
            trend={{
              value: Math.round(((child.points - child.previousPoints) / child.previousPoints) * 100),
              isPositive: child.points > child.previousPoints,
            }}
          />
          <StatsCard
            title="نسبة الحضور"
            value={`${child.attendance}%`}
            icon={Calendar}
            variant="green"
          />
          <StatsCard
            title="الترتيب"
            value={`#${child.rank}`}
            icon={TrendingUp}
            variant="gold"
          />
          <StatsCard
            title="الشارات المكتسبة"
            value={earnedBadges.length}
            icon={Users}
            variant="purple"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Evaluations */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    آخر التقييمات
                  </CardTitle>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/dashboard/parent/evaluations">
                      عرض الكل
                      <ChevronLeft className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentEvaluations.map((evaluation, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-xl bg-muted/50"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            evaluation.type === "positive"
                              ? "bg-success/20 text-success"
                              : "bg-destructive/20 text-destructive"
                          }`}
                        >
                          {evaluation.type === "positive" ? (
                            <TrendingUp className="w-5 h-5" />
                          ) : (
                            <TrendingDown className="w-5 h-5" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">{evaluation.subject} - {evaluation.category}</p>
                          <p className="text-sm text-muted-foreground">{evaluation.teacher}</p>
                        </div>
                      </div>
                      <div className="text-left">
                        <p
                          className={`font-bold ${
                            evaluation.type === "positive" ? "text-success" : "text-destructive"
                          }`}
                        >
                          {evaluation.type === "positive" ? "+" : ""}{evaluation.points} نقطة
                        </p>
                        <p className="text-xs text-muted-foreground">{evaluation.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Progress Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-secondary" />
                  تطور مستوى الطالب
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">التقدم نحو المستوى التالي</span>
                    <LevelBadge level="leader" showLabel size="sm" />
                  </div>
                  <ProgressBar value={child.points} max={600} variant="default" size="lg" />
                  <p className="text-sm text-muted-foreground">
                    يحتاج {600 - child.points} نقطة للوصول إلى مستوى "قائد"
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="p-4 rounded-xl bg-success/10 text-center">
                      <p className="text-2xl font-bold text-success">+50</p>
                      <p className="text-sm text-muted-foreground">نقطة هذا الأسبوع</p>
                    </div>
                    <div className="p-4 rounded-xl bg-primary/10 text-center">
                      <p className="text-2xl font-bold text-primary">15</p>
                      <p className="text-sm text-muted-foreground">يوم انضباط متتالي</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Badges */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-accent" />
                  الشارات المكتسبة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 justify-center">
                  {earnedBadges.map((badge, index) => (
                    <AchievementBadge key={index} type={badge} size="md" earned />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-primary" />
                  الإشعارات
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {notifications.map((notification, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border-r-4 ${
                        notification.type === "positive"
                          ? "bg-success/10 border-success"
                          : notification.type === "negative"
                          ? "bg-destructive/10 border-destructive"
                          : "bg-primary/10 border-primary"
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {notification.type === "positive" ? (
                          <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                        ) : notification.type === "negative" ? (
                          <AlertCircle className="w-5 h-5 text-destructive mt-0.5" />
                        ) : (
                          <Bell className="w-5 h-5 text-primary mt-0.5" />
                        )}
                        <div className="flex-1">
                          <p className="text-sm">{notification.message}</p>
                          <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-accent" />
                  نصائح تربوية
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-bold mt-0.5">
                        {index + 1}
                      </span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">إجراءات سريعة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/dashboard/parent/contact-teacher">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    تواصل مع المعلم
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/dashboard/parent/monthly-report">
                    <FileText className="w-4 h-4 text-secondary" />
                    تحميل التقرير الشهري
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/dashboard/parent/schedule">
                    <Calendar className="w-4 h-4 text-accent" />
                    جدول الحصص
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

export default ParentDashboard;
