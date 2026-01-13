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
  Users,
  Award,
  Calendar,
  BarChart3,
  PieChart,
} from "lucide-react";

const AdminMonthlyReport = () => {
  const handleDownload = () => {
    toast.success("جاري تحميل التقرير الشهري... 📄");
  };

  const report = {
    month: "يناير 2024",
    totalStudents: 520,
    totalEvaluations: 3456,
    averagePoints: 385,
    improvementRate: 12,
    attendanceRate: 94,
    badgesAwarded: 156,
  };

  const classPerformance = [
    { name: "الصف الأول - أ", avgPoints: 420, students: 28 },
    { name: "الصف الأول - ب", avgPoints: 380, students: 30 },
    { name: "الصف الثاني - أ", avgPoints: 450, students: 27 },
    { name: "الصف الثاني - ب", avgPoints: 395, students: 29 },
    { name: "الصف الثالث - أ", avgPoints: 520, students: 25 },
    { name: "الصف الثالث - ب", avgPoints: 480, students: 26 },
  ];

  const categoryBreakdown = [
    { name: "الانضباط", percentage: 30 },
    { name: "المشاركة", percentage: 25 },
    { name: "الواجبات", percentage: 20 },
    { name: "السلوك العام", percentage: 15 },
    { name: "الأنشطة", percentage: 10 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-sidebar text-sidebar-foreground">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-sidebar-accent flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="font-bold text-lg hidden sm:block">WE Schools</span>
              </Link>
            </div>
            <Button variant="secondary" size="sm" asChild>
              <Link to="/dashboard/admin">
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

        {/* Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <Card className="bg-primary/10">
            <CardContent className="p-4 text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold">{report.totalStudents}</p>
              <p className="text-xs text-muted-foreground">إجمالي الطلاب</p>
            </CardContent>
          </Card>
          <Card className="bg-secondary/10">
            <CardContent className="p-4 text-center">
              <BarChart3 className="w-8 h-8 mx-auto mb-2 text-secondary" />
              <p className="text-2xl font-bold">{report.totalEvaluations}</p>
              <p className="text-xs text-muted-foreground">التقييمات</p>
            </CardContent>
          </Card>
          <Card className="bg-accent/10">
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-accent" />
              <p className="text-2xl font-bold">{report.averagePoints}</p>
              <p className="text-xs text-muted-foreground">متوسط النقاط</p>
            </CardContent>
          </Card>
          <Card className="bg-success/10">
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-success" />
              <p className="text-2xl font-bold">+{report.improvementRate}%</p>
              <p className="text-xs text-muted-foreground">نسبة التحسن</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-500/10">
            <CardContent className="p-4 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-purple-500" />
              <p className="text-2xl font-bold">{report.attendanceRate}%</p>
              <p className="text-xs text-muted-foreground">نسبة الحضور</p>
            </CardContent>
          </Card>
          <Card className="bg-gold/10">
            <CardContent className="p-4 text-center">
              <Award className="w-8 h-8 mx-auto mb-2 text-gold" />
              <p className="text-2xl font-bold">{report.badgesAwarded}</p>
              <p className="text-xs text-muted-foreground">شارات ممنوحة</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Class Performance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                أداء الفصول
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {classPerformance.map((cls) => (
                <div key={cls.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{cls.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {cls.avgPoints} نقطة ({cls.students} طالب)
                    </span>
                  </div>
                  <ProgressBar
                    value={cls.avgPoints}
                    max={600}
                    showLabel={false}
                    variant={cls.avgPoints >= 450 ? "success" : "default"}
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Category Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="w-5 h-5 text-secondary" />
                توزيع التقييمات حسب المحور
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {categoryBreakdown.map((category, index) => {
                const colors = ["bg-primary", "bg-secondary", "bg-accent", "bg-success", "bg-purple-500"];
                return (
                  <div key={category.name} className="flex items-center gap-4">
                    <div className={`w-4 h-4 rounded-full ${colors[index]}`}></div>
                    <span className="text-sm font-medium flex-1">{category.name}</span>
                    <span className="text-sm text-muted-foreground">{category.percentage}%</span>
                    <div className="w-24 h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className={`h-full ${colors[index]}`}
                        style={{ width: `${category.percentage}%` }}
                      ></div>
                    </div>
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
                  شهد شهر <strong>{report.month}</strong> تقدماً ملحوظاً في الأداء العام للمدرسة. 
                  تم تسجيل <strong className="text-primary">{report.totalEvaluations} تقييم</strong> خلال الشهر، 
                  بمتوسط <strong className="text-accent">{report.averagePoints} نقطة</strong> للطالب.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  حقق الصف الثالث أ أعلى أداء بمتوسط <strong className="text-success">520 نقطة</strong>، 
                  بينما يحتاج الصف الأول ب إلى مزيد من المتابعة مع متوسط <strong>380 نقطة</strong>.
                  تم منح <strong className="text-gold">{report.badgesAwarded} شارة</strong> تحفيزية خلال الشهر.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  <strong>التوصيات:</strong> تكثيف برامج التحفيز للفصول ذات الأداء المنخفض، 
                  وتعزيز التواصل مع أولياء الأمور للطلاب الذين يحتاجون متابعة.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminMonthlyReport;
