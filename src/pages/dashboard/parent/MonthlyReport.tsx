import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { toast } from "sonner";
import {
  GraduationCap,
  ArrowRight,
  FileText,
  Download,
  TrendingUp,
  Award,
  Calendar,
  CheckCircle,
  Target,
} from "lucide-react";

const MonthlyReport = () => {
  const handleDownload = () => {
    toast.success("جاري تحميل التقرير الشهري... 📄");
  };

  const report = {
    month: "يناير 2024",
    student: "أحمد محمد علي",
    class: "الصف الثاني - أ",
    totalPoints: 450,
    previousPoints: 380,
    rank: 3,
    totalStudents: 25,
    attendance: 95,
    badges: 2,
    evaluations: 15,
  };

  const categories = [
    { name: "الانضباط", score: 85, max: 100 },
    { name: "المشاركة", score: 70, max: 100 },
    { name: "الواجبات", score: 60, max: 100 },
    { name: "السلوك العام", score: 90, max: 100 },
  ];

  const achievements = [
    { title: "حضور 20 يوم متتالي", icon: Calendar, completed: true },
    { title: "تسليم جميع الواجبات", icon: CheckCircle, completed: true },
    { title: "الحصول على شارة المتميز", icon: Award, completed: true },
    { title: "إكمال 5 تحديات", icon: Target, completed: false },
  ];

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
            <Button variant="glass" size="sm" asChild>
              <Link to="/dashboard/parent">
                <ArrowRight className="w-4 h-4 ml-2" />
                العودة للوحة التحكم
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <FileText className="w-6 h-6 text-primary" />
            التقرير الشهري - {report.month}
          </h1>
          <Button variant="hero" onClick={handleDownload}>
            <Download className="w-4 h-4 ml-2" />
            تحميل PDF
          </Button>
        </div>

        {/* Student Info */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground text-2xl font-bold">
                أ
              </div>
              <div className="text-center md:text-right flex-1">
                <h2 className="text-xl font-bold">{report.student}</h2>
                <p className="text-muted-foreground">{report.class}</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-3 rounded-xl bg-primary/10">
                  <p className="text-2xl font-bold text-primary">{report.totalPoints}</p>
                  <p className="text-xs text-muted-foreground">النقاط</p>
                </div>
                <div className="p-3 rounded-xl bg-success/10">
                  <p className="text-2xl font-bold text-success">+{report.totalPoints - report.previousPoints}</p>
                  <p className="text-xs text-muted-foreground">التحسن</p>
                </div>
                <div className="p-3 rounded-xl bg-accent/10">
                  <p className="text-2xl font-bold text-accent">#{report.rank}</p>
                  <p className="text-xs text-muted-foreground">الترتيب</p>
                </div>
                <div className="p-3 rounded-xl bg-secondary/10">
                  <p className="text-2xl font-bold text-secondary">{report.attendance}%</p>
                  <p className="text-xs text-muted-foreground">الحضور</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Performance by Category */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                الأداء حسب المحور
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {categories.map((category) => (
                <div key={category.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{category.name}</span>
                    <span className="text-sm text-muted-foreground">{category.score}%</span>
                  </div>
                  <ProgressBar
                    value={category.score}
                    max={category.max}
                    showLabel={false}
                    variant={category.score >= 80 ? "success" : category.score >= 60 ? "default" : "accent"}
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent" />
                الإنجازات هذا الشهر
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div
                    key={index}
                    className={`p-4 rounded-xl flex items-center gap-3 ${
                      achievement.completed
                        ? "bg-success/10 border border-success/30"
                        : "bg-muted/50 border border-border"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        achievement.completed
                          ? "bg-success/20 text-success"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className={achievement.completed ? "font-medium" : "text-muted-foreground"}>
                      {achievement.title}
                    </span>
                    {achievement.completed && (
                      <CheckCircle className="w-5 h-5 text-success mr-auto" />
                    )}
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Monthly Summary */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>ملخص الشهر</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  أظهر الطالب <strong>{report.student}</strong> تقدماً ملحوظاً خلال شهر {report.month}. 
                  حصل على <strong className="text-success">{report.totalPoints - report.previousPoints} نقطة</strong> إضافية مقارنة بالشهر السابق، 
                  مما رفع ترتيبه إلى المركز <strong className="text-accent">الثالث</strong> على مستوى الفصل.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  تميز الطالب في محور <strong>السلوك العام</strong> بنسبة 90%، 
                  بينما يحتاج لمزيد من الاهتمام بمحور <strong>الواجبات</strong> الذي سجل 60%.
                  نوصي بمتابعة تسليم الواجبات في مواعيدها لتحسين هذا المحور.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default MonthlyReport;
