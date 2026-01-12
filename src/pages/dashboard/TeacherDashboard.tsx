import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { StatsCard } from "@/components/ui/stats-card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { LevelBadge, getLevelFromPoints } from "@/components/ui/level-badge";
import {
  GraduationCap,
  Bell,
  Settings,
  LogOut,
  Users,
  ClipboardCheck,
  Search,
  Plus,
  Minus,
  Star,
  MessageSquare,
  ChevronLeft,
  BookOpen,
  Award,
  TrendingUp,
  Calendar,
  Filter,
} from "lucide-react";

const TeacherDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClass, setSelectedClass] = useState("all");

  // Mock data
  const teacher = {
    name: "أ. محمد أحمد",
    subject: "الرياضيات",
  };

  const classes = [
    { id: "all", name: "جميع الفصول" },
    { id: "2a", name: "الصف الثاني - أ" },
    { id: "2b", name: "الصف الثاني - ب" },
    { id: "3a", name: "الصف الثالث - أ" },
  ];

  const students = [
    { id: 1, name: "أحمد محمد علي", class: "2a", points: 450, todayStatus: "present", lastEvaluation: "إيجابي" },
    { id: 2, name: "محمود حسن أحمد", class: "2a", points: 380, todayStatus: "present", lastEvaluation: "إيجابي" },
    { id: 3, name: "عمر خالد محمد", class: "2a", points: 220, todayStatus: "absent", lastEvaluation: "سلبي" },
    { id: 4, name: "يوسف إبراهيم علي", class: "2b", points: 520, todayStatus: "present", lastEvaluation: "إيجابي" },
    { id: 5, name: "كريم عادل حسن", class: "2b", points: 180, todayStatus: "present", lastEvaluation: "محايد" },
    { id: 6, name: "علي سامي محمد", class: "3a", points: 650, todayStatus: "present", lastEvaluation: "إيجابي" },
  ];

  const evaluationCategories = [
    { id: "discipline", name: "الانضباط", points: { add: 5, remove: -5 } },
    { id: "participation", name: "المشاركة", points: { add: 10, remove: -3 } },
    { id: "homework", name: "الواجبات", points: { add: 10, remove: -10 } },
    { id: "behavior", name: "السلوك العام", points: { add: 5, remove: -5 } },
  ];

  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name.includes(searchQuery);
    const matchesClass = selectedClass === "all" || student.class === selectedClass;
    return matchesSearch && matchesClass;
  });

  const [selectedStudent, setSelectedStudent] = useState<number | null>(null);

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
            <div className="flex items-center gap-2">
              <Button variant="glass" size="icon" className="relative" asChild>
                <Link to="/dashboard/teacher/notifications">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -left-1 w-4 h-4 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center">
                    5
                  </span>
                </Link>
              </Button>
              <Button variant="glass" size="icon" asChild>
                <Link to="/dashboard/teacher/settings">
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

        {/* Teacher Info */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center text-2xl font-bold border-4 border-primary-foreground/30">
              م
            </div>
            <div>
              <h1 className="text-2xl font-bold">مرحبًا، {teacher.name}</h1>
              <p className="opacity-90">معلم {teacher.subject}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatsCard
            title="إجمالي الطلاب"
            value={students.length}
            icon={Users}
            variant="blue"
          />
          <StatsCard
            title="التقييمات اليوم"
            value={12}
            icon={ClipboardCheck}
            variant="green"
          />
          <StatsCard
            title="الطلاب المتميزون"
            value={4}
            icon={Award}
            variant="gold"
          />
          <StatsCard
            title="يحتاجون متابعة"
            value={2}
            icon={TrendingUp}
            variant="purple"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Students List */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    قائمة الطلاب
                  </CardTitle>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <div className="relative flex-1 sm:flex-initial">
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="ابحث عن طالب..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pr-9 w-full sm:w-48"
                      />
                    </div>
                    <select
                      value={selectedClass}
                      onChange={(e) => setSelectedClass(e.target.value)}
                      className="h-10 px-3 rounded-lg border border-input bg-background text-sm"
                    >
                      {classes.map((cls) => (
                        <option key={cls.id} value={cls.id}>
                          {cls.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {filteredStudents.map((student) => (
                    <Link
                      key={student.id}
                      to={`/dashboard/teacher/student/${student.id}`}
                      className={`p-4 rounded-xl border transition-all cursor-pointer block ${
                        selectedStudent === student.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50 hover:bg-muted/50"
                      }`}
                      onClick={() => setSelectedStudent(student.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold">
                            {student.name.charAt(0)}
                          </div>
                          <div>
                            <h3 className="font-bold">{student.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {classes.find((c) => c.id === student.class)?.name}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <LevelBadge level={getLevelFromPoints(student.points)} size="sm" />
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              student.todayStatus === "present"
                                ? "bg-success/20 text-success"
                                : "bg-destructive/20 text-destructive"
                            }`}
                          >
                            {student.todayStatus === "present" ? "حاضر" : "غائب"}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Evaluation Panel */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5 text-secondary" />
                  التقييم السريع
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedStudent ? (
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-muted/50 text-center">
                      <p className="font-bold text-lg">
                        {students.find((s) => s.id === selectedStudent)?.name}
                      </p>
                      <LevelBadge
                        level={getLevelFromPoints(
                          students.find((s) => s.id === selectedStudent)?.points || 0
                        )}
                        points={students.find((s) => s.id === selectedStudent)?.points}
                        className="mt-2"
                      />
                    </div>

                    <div className="space-y-3">
                      {evaluationCategories.map((category) => (
                        <div
                          key={category.id}
                          className="flex items-center justify-between p-3 rounded-lg border border-border"
                        >
                          <span className="font-medium">{category.name}</span>
                          <div className="flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="w-10 h-10 p-0 text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="w-10 h-10 p-0 text-success border-success hover:bg-success hover:text-success-foreground"
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">ملاحظات إضافية</label>
                      <textarea
                        className="w-full h-20 p-3 rounded-lg border border-input bg-background resize-none text-sm"
                        placeholder="أضف ملاحظة..."
                      />
                    </div>

                    <Button variant="hero" className="w-full">
                      حفظ التقييم
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <ClipboardCheck className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>اختر طالبًا لبدء التقييم</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">إجراءات سريعة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start" onClick={() => alert("تم ترشيح الطالب للمكافأة بنجاح! ✨\n\nسيتم إرسال إشعار لولي الأمر.")}>
                  <Star className="w-4 h-4 text-accent" />
                  ترشيح طالب للمكافأة
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => alert("سيتم فتح نافذة إرسال رسالة لولي الأمر")}>
                  <MessageSquare className="w-4 h-4 text-primary" />
                  إرسال رسالة لولي الأمر
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/dashboard/teacher/attendance">
                    <Calendar className="w-4 h-4 text-secondary" />
                    عرض سجل الحضور
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

export default TeacherDashboard;
