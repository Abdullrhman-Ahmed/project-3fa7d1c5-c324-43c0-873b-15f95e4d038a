import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  GraduationCap,
  ArrowRight,
  BookOpen,
  TrendingUp,
  TrendingDown,
  Filter,
  Calendar,
} from "lucide-react";

const ParentAllEvaluations = () => {
  const evaluations = [
    { id: 1, subject: "الرياضيات", teacher: "أ. محمد أحمد", category: "المشاركة", points: 10, type: "positive", date: "اليوم - 10:30 ص", note: "مشاركة فعالة في حل التمارين" },
    { id: 2, subject: "اللغة العربية", teacher: "أ. فاطمة علي", category: "الانضباط", points: 5, type: "positive", date: "اليوم - 9:15 ص", note: "التزام بقواعد الحصة" },
    { id: 3, subject: "العلوم", teacher: "أ. أحمد حسن", category: "الواجبات", points: -10, type: "negative", date: "أمس", note: "لم يسلم واجب العلوم في الموعد" },
    { id: 4, subject: "اللغة الإنجليزية", teacher: "أ. سارة محمد", category: "المشاركة", points: 15, type: "positive", date: "منذ يومين", note: "تميز في الحوار باللغة الإنجليزية" },
    { id: 5, subject: "الرياضيات", teacher: "أ. محمد أحمد", category: "السلوك العام", points: 5, type: "positive", date: "منذ 3 أيام", note: "تعاون مع الزملاء" },
    { id: 6, subject: "العلوم", teacher: "أ. أحمد حسن", category: "المشاركة", points: 10, type: "positive", date: "منذ 4 أيام", note: "شرح تجربة علمية للفصل" },
    { id: 7, subject: "التربية الفنية", teacher: "أ. نور الدين", category: "الإبداع", points: 20, type: "positive", date: "منذ أسبوع", note: "رسم لوحة متميزة" },
    { id: 8, subject: "الرياضيات", teacher: "أ. محمد أحمد", category: "الانضباط", points: -5, type: "negative", date: "منذ أسبوع", note: "تأخر عن بداية الحصة" },
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
            <BookOpen className="w-6 h-6 text-primary" />
            جميع التقييمات
          </h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 ml-2" />
              هذا الشهر
            </Button>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 ml-2" />
              تصفية
            </Button>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <Card className="bg-success/10">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-success">+65</p>
              <p className="text-sm text-muted-foreground">نقاط إيجابية</p>
            </CardContent>
          </Card>
          <Card className="bg-destructive/10">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-destructive">-15</p>
              <p className="text-sm text-muted-foreground">نقاط سلبية</p>
            </CardContent>
          </Card>
          <Card className="bg-primary/10">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-primary">+50</p>
              <p className="text-sm text-muted-foreground">صافي النقاط</p>
            </CardContent>
          </Card>
        </div>

        {/* Evaluations List */}
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              {evaluations.map((evaluation) => (
                <div
                  key={evaluation.id}
                  className={`p-4 rounded-xl border ${
                    evaluation.type === "positive"
                      ? "border-success/30 bg-success/5"
                      : "border-destructive/30 bg-destructive/5"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
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
                        <p className="font-bold">{evaluation.subject} - {evaluation.category}</p>
                        <p className="text-sm text-muted-foreground">{evaluation.teacher}</p>
                        <p className="text-sm mt-1">{evaluation.note}</p>
                      </div>
                    </div>
                    <div className="text-left md:text-right shrink-0">
                      <p
                        className={`text-xl font-bold ${
                          evaluation.type === "positive" ? "text-success" : "text-destructive"
                        }`}
                      >
                        {evaluation.type === "positive" ? "+" : ""}{evaluation.points} نقطة
                      </p>
                      <p className="text-xs text-muted-foreground">{evaluation.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ParentAllEvaluations;
