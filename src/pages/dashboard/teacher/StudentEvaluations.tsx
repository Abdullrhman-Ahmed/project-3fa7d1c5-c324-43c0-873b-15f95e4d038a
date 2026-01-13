import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ProgressBar } from "@/components/ui/progress-bar";
import { LevelBadge, getLevelFromPoints } from "@/components/ui/level-badge";
import { toast } from "sonner";
import {
  GraduationCap,
  ArrowRight,
  User,
  BookOpen,
  Award,
  Target,
  Star,
  TrendingUp,
  Calendar,
  CheckCircle,
  XCircle,
  Clock,
  Plus,
  Gift,
} from "lucide-react";

const StudentEvaluations = () => {
  const { studentId } = useParams();

  // Mock student data based on ID
  const students: Record<string, any> = {
    "1": { name: "أحمد محمد علي", class: "الصف الثاني - أ", points: 450 },
    "2": { name: "محمود حسن أحمد", class: "الصف الثاني - أ", points: 380 },
    "3": { name: "عمر خالد محمد", class: "الصف الثاني - أ", points: 220 },
    "4": { name: "يوسف إبراهيم علي", class: "الصف الثاني - ب", points: 520 },
    "5": { name: "كريم عادل حسن", class: "الصف الثاني - ب", points: 180 },
    "6": { name: "علي سامي محمد", class: "الصف الثالث - أ", points: 650 },
  };

  const student = students[studentId || "1"] || students["1"];

  const evaluations = [
    { id: 1, category: "الانضباط", points: 5, type: "positive", date: "اليوم - 10:30 ص", note: "حضور مبكر ومنتظم" },
    { id: 2, category: "المشاركة", points: 10, type: "positive", date: "اليوم - 9:15 ص", note: "مشاركة فعالة في الحصة" },
    { id: 3, category: "الواجبات", points: -10, type: "negative", date: "أمس", note: "لم يسلم الواجب" },
    { id: 4, category: "السلوك العام", points: 5, type: "positive", date: "منذ يومين", note: "تعاون مع الزملاء" },
    { id: 5, category: "المشاركة", points: 10, type: "positive", date: "منذ 3 أيام", note: "إجابة متميزة" },
    { id: 6, category: "الانضباط", points: -5, type: "negative", date: "منذ أسبوع", note: "تأخر عن الحصة" },
  ];

  const activities = [
    { id: 1, name: "مسابقة الرياضيات", status: "مكتمل", points: 50, date: "منذ أسبوع" },
    { id: 2, name: "مشروع العلوم", status: "قيد التنفيذ", points: 0, date: "مستمر" },
    { id: 3, name: "اختبار قصير", status: "مكتمل", points: 15, date: "منذ أسبوعين" },
  ];

  const badges = [
    { id: 1, name: "المنضبط", icon: Clock, unlocked: true, description: "حضور 30 يوم متتالي" },
    { id: 2, name: "المتميز", icon: Star, unlocked: true, description: "حصل على 100 نقطة في أسبوع" },
    { id: 3, name: "المثابر", icon: Target, unlocked: false, description: "أكمل 10 تحديات" },
    { id: 4, name: "القائد", icon: Award, unlocked: false, description: "ساعد 5 زملاء" },
  ];

  const categoryStats = [
    { name: "الانضباط", value: 85, color: "default" as const },
    { name: "المشاركة", value: 70, color: "default" as const },
    { name: "الواجبات", value: 60, color: "accent" as const },
    { name: "السلوك العام", value: 90, color: "success" as const },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-l from-secondary to-primary text-primary-foreground">
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
              <Link to="/dashboard/teacher">
                <ArrowRight className="w-4 h-4 ml-2" />
                العودة للوحة التحكم
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Student Info */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground text-3xl font-bold">
                {student.name.charAt(0)}
              </div>
              <div className="text-center md:text-right flex-1">
                <h1 className="text-2xl font-bold">{student.name}</h1>
                <p className="text-muted-foreground">{student.class}</p>
                <div className="mt-3">
                  <LevelBadge level={getLevelFromPoints(student.points)} points={student.points} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 rounded-xl bg-success/10">
                  <p className="text-2xl font-bold text-success">+85</p>
                  <p className="text-sm text-muted-foreground">نقاط هذا الشهر</p>
                </div>
                <div className="p-4 rounded-xl bg-primary/10">
                  <p className="text-2xl font-bold text-primary">15</p>
                  <p className="text-sm text-muted-foreground">تقييم</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Evaluations History */}
          <div className="lg:col-span-2 space-y-6">
            {/* Category Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  تقييم المحاور
                </CardTitle>
              </CardHeader>
            <CardContent className="space-y-4">
                {categoryStats.map((stat) => (
                  <div key={stat.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{stat.name}</span>
                      <span className="text-sm text-muted-foreground">{stat.value}%</span>
                    </div>
                    <ProgressBar value={stat.value} max={100} showLabel={false} variant={stat.color} />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Evaluations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  سجل التقييمات
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {evaluations.map((evaluation) => (
                    <div
                      key={evaluation.id}
                      className={`p-4 rounded-xl border ${
                        evaluation.type === "positive"
                          ? "border-success/30 bg-success/5"
                          : "border-destructive/30 bg-destructive/5"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {evaluation.type === "positive" ? (
                            <CheckCircle className="w-5 h-5 text-success" />
                          ) : (
                            <XCircle className="w-5 h-5 text-destructive" />
                          )}
                          <div>
                            <p className="font-medium">{evaluation.category}</p>
                            <p className="text-sm text-muted-foreground">{evaluation.note}</p>
                          </div>
                        </div>
                        <div className="text-left">
                          <p
                            className={`font-bold ${
                              evaluation.type === "positive" ? "text-success" : "text-destructive"
                            }`}
                          >
                            {evaluation.type === "positive" ? "+" : ""}
                            {evaluation.points}
                          </p>
                          <p className="text-xs text-muted-foreground">{evaluation.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Activities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-secondary" />
                  الأنشطة والمشاريع
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {activities.map((activity) => (
                    <div key={activity.id} className="p-4 rounded-xl border border-border">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{activity.name}</p>
                          <p className="text-sm text-muted-foreground">{activity.date}</p>
                        </div>
                        <div className="text-left">
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              activity.status === "مكتمل"
                                ? "bg-success/20 text-success"
                                : "bg-primary/20 text-primary"
                            }`}
                          >
                            {activity.status}
                          </span>
                          {activity.points > 0 && (
                            <p className="text-success font-bold mt-1">+{activity.points}</p>
                          )}
                        </div>
                      </div>
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
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  الشارات
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {badges.map((badge) => {
                    const IconComponent = badge.icon;
                    return (
                      <div
                        key={badge.id}
                        className={`p-4 rounded-xl text-center transition-all ${
                          badge.unlocked
                            ? "bg-gradient-to-br from-accent/20 to-gold/20 border border-accent/30"
                            : "bg-muted/50 opacity-50"
                        }`}
                      >
                        <div
                          className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2 ${
                            badge.unlocked
                              ? "bg-gradient-to-br from-accent to-gold text-accent-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <p className="font-medium text-sm">{badge.name}</p>
                        <p className="text-xs text-muted-foreground mt-1">{badge.description}</p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">إضافة تقييم جديد</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <select className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm">
                  <option value="">اختر نوع التقييم</option>
                  <option value="discipline">الانضباط</option>
                  <option value="participation">المشاركة</option>
                  <option value="homework">الواجبات</option>
                  <option value="behavior">السلوك العام</option>
                </select>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 text-success border-success hover:bg-success hover:text-success-foreground"
                    onClick={() => toast.success("تم إضافة تقييم إيجابي بنجاح! ✅")}
                  >
                    <Plus className="w-4 h-4" />
                    إيجابي
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
                    onClick={() => toast.success("تم إضافة تقييم سلبي! ⚠️")}
                  >
                    سلبي
                  </Button>
                </div>
                <textarea
                  className="w-full h-16 p-2 rounded-lg border border-input bg-background resize-none text-sm"
                  placeholder="ملاحظات إضافية..."
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">إجراءات سريعة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => toast.success("تم ترشيح الطالب للمكافأة بنجاح! ✨\n\nسيتم إرسال إشعار لولي الأمر.")}
                >
                  <Gift className="w-4 h-4 text-accent" />
                  ترشيح للمكافأة
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentEvaluations;