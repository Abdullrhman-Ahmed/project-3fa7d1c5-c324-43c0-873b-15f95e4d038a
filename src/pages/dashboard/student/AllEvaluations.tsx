import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  ArrowRight,
  BookOpen,
  Calendar,
  Filter,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const StudentAllEvaluations = () => {
  const evaluations = [
    { id: 1, subject: "الرياضيات", teacher: "أ. محمد أحمد", date: "2024-01-15", points: 10, type: "positive", reason: "مشاركة ممتازة في الفصل" },
    { id: 2, subject: "اللغة العربية", teacher: "أ. فاطمة علي", date: "2024-01-14", points: 5, type: "positive", reason: "تسليم الواجب في الموعد" },
    { id: 3, subject: "العلوم", teacher: "أ. أحمد حسن", date: "2024-01-13", points: -5, type: "negative", reason: "التأخر عن الحصة" },
    { id: 4, subject: "اللغة الإنجليزية", teacher: "أ. سارة محمد", date: "2024-01-12", points: 15, type: "positive", reason: "أداء متميز في الاختبار" },
    { id: 5, subject: "الرياضيات", teacher: "أ. محمد أحمد", date: "2024-01-11", points: 10, type: "positive", reason: "حل جميع التمارين بشكل صحيح" },
    { id: 6, subject: "التربية الفنية", teacher: "أ. منى عبدالله", date: "2024-01-10", points: 5, type: "positive", reason: "إبداع في المشروع الفني" },
    { id: 7, subject: "اللغة العربية", teacher: "أ. فاطمة علي", date: "2024-01-09", points: -3, type: "negative", reason: "عدم إحضار الكتاب" },
    { id: 8, subject: "العلوم", teacher: "أ. أحمد حسن", date: "2024-01-08", points: 10, type: "positive", reason: "تجربة معملية ناجحة" },
    { id: 9, subject: "الرياضيات", teacher: "أ. محمد أحمد", date: "2024-01-07", points: 5, type: "positive", reason: "مساعدة زميل" },
    { id: 10, subject: "اللغة الإنجليزية", teacher: "أ. سارة محمد", date: "2024-01-06", points: 10, type: "positive", reason: "قراءة سليمة" },
    { id: 11, subject: "التربية البدنية", teacher: "أ. خالد عمر", date: "2024-01-05", points: 5, type: "positive", reason: "روح رياضية عالية" },
    { id: 12, subject: "العلوم", teacher: "أ. أحمد حسن", date: "2024-01-04", points: -5, type: "negative", reason: "عدم إكمال الواجب" },
  ];

  const totalPositive = evaluations.filter(e => e.type === "positive").reduce((sum, e) => sum + e.points, 0);
  const totalNegative = Math.abs(evaluations.filter(e => e.type === "negative").reduce((sum, e) => sum + e.points, 0));

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
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-primary" />
            جميع التقييمات
          </h1>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 ml-2" />
            تصفية
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <Card className="bg-success/10 border-success/30">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">النقاط الإيجابية</p>
                <p className="text-2xl font-bold text-success">+{totalPositive}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-destructive/10 border-destructive/30">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">النقاط السلبية</p>
                <p className="text-2xl font-bold text-destructive">-{totalNegative}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-primary/10 border-primary/30">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">إجمالي التقييمات</p>
                <p className="text-2xl font-bold text-primary">{evaluations.length}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Evaluations List */}
        <div className="space-y-4">
          {evaluations.map((evaluation) => (
            <Card key={evaluation.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        evaluation.type === "positive" ? "bg-success/20" : "bg-destructive/20"
                      }`}
                    >
                      <BookOpen
                        className={`w-6 h-6 ${
                          evaluation.type === "positive" ? "text-success" : "text-destructive"
                        }`}
                      />
                    </div>
                    <div>
                      <p className="font-medium">{evaluation.subject}</p>
                      <p className="text-sm text-muted-foreground">{evaluation.teacher}</p>
                      <p className="text-xs text-muted-foreground mt-1">{evaluation.reason}</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <p
                      className={`text-xl font-bold ${
                        evaluation.type === "positive" ? "text-success" : "text-destructive"
                      }`}
                    >
                      {evaluation.type === "positive" ? "+" : ""}{evaluation.points}
                    </p>
                    <p className="text-xs text-muted-foreground">{evaluation.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default StudentAllEvaluations;
