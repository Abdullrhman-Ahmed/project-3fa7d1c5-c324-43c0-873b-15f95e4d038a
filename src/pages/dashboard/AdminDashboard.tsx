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
  School,
  ClipboardCheck,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Award,
  FileText,
  Search,
  Filter,
  ChevronLeft,
  BarChart3,
  PieChart,
  Calendar,
  BookOpen,
  Shield,
  Download,
} from "lucide-react";

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("overview");

  // Mock data
  const admin = {
    name: "مدير المدرسة",
    school: "مدرسة WE للتكنولوجيا التطبيقية - الجيزة",
  };

  const overviewStats = {
    totalStudents: 520,
    totalTeachers: 45,
    totalClasses: 18,
    averagePoints: 385,
    attendanceRate: 94,
    improvementRate: 12,
  };

  const topStudents = [
    { name: "علي سامي محمد", class: "3أ", points: 890, level: getLevelFromPoints(890) },
    { name: "يوسف إبراهيم علي", class: "2ب", points: 750, level: getLevelFromPoints(750) },
    { name: "أحمد محمد علي", class: "2أ", points: 680, level: getLevelFromPoints(680) },
    { name: "محمود حسن أحمد", class: "2أ", points: 620, level: getLevelFromPoints(620) },
    { name: "كريم عادل حسن", class: "3ب", points: 580, level: getLevelFromPoints(580) },
  ];

  const needsAttention = [
    { name: "عمر خالد محمد", class: "2أ", points: 85, issue: "انخفاض ملحوظ في النقاط" },
    { name: "خالد أحمد علي", class: "3ب", points: 120, issue: "غياب متكرر" },
    { name: "سامي محمد حسن", class: "2ب", points: 95, issue: "سلوك يحتاج متابعة" },
  ];

  const classComparison = [
    { name: "الصف الأول - أ", avgPoints: 420, students: 28 },
    { name: "الصف الأول - ب", avgPoints: 380, students: 30 },
    { name: "الصف الثاني - أ", avgPoints: 450, students: 27 },
    { name: "الصف الثاني - ب", avgPoints: 395, students: 29 },
    { name: "الصف الثالث - أ", avgPoints: 520, students: 25 },
    { name: "الصف الثالث - ب", avgPoints: 480, students: 26 },
  ];

  const tabs = [
    { id: "overview", label: "نظرة عامة", icon: PieChart },
    { id: "students", label: "الطلاب", icon: Users },
    { id: "classes", label: "الفصول", icon: School },
    { id: "reports", label: "التقارير", icon: FileText },
    { id: "settings", label: "الإعدادات", icon: Settings },
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
                <div className="hidden sm:block">
                  <span className="font-bold text-lg block">WE Schools</span>
                  <span className="text-xs text-sidebar-foreground/70">لوحة التحكم</span>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-sidebar-foreground relative" asChild>
                <Link to="/dashboard/admin/notifications">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -left-1 w-4 h-4 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center">
                    8
                  </span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-sidebar-foreground" asChild>
                <Link to="/dashboard/admin/settings">
                  <Settings className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-sidebar-foreground" asChild>
                <Link to="/login">
                  <LogOut className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Admin Info & Tabs */}
        <div className="container mx-auto px-4 py-4">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">{admin.name}</h1>
            <p className="text-sidebar-foreground/70">{admin.school}</p>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={selectedTab === tab.id ? "secondary" : "ghost"}
                className={selectedTab === tab.id ? "" : "text-sidebar-foreground"}
                onClick={() => setSelectedTab(tab.id)}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {selectedTab === "overview" && (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
              <StatsCard
                title="إجمالي الطلاب"
                value={overviewStats.totalStudents}
                icon={Users}
                variant="blue"
              />
              <StatsCard
                title="المعلمين"
                value={overviewStats.totalTeachers}
                icon={School}
                variant="green"
              />
              <StatsCard
                title="الفصول"
                value={overviewStats.totalClasses}
                icon={BookOpen}
                variant="purple"
              />
              <StatsCard
                title="متوسط النقاط"
                value={overviewStats.averagePoints}
                icon={BarChart3}
                variant="gold"
              />
              <StatsCard
                title="نسبة الحضور"
                value={`${overviewStats.attendanceRate}%`}
                icon={Calendar}
                variant="blue"
              />
              <StatsCard
                title="نسبة التحسن"
                value={`+${overviewStats.improvementRate}%`}
                icon={TrendingUp}
                variant="green"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Class Comparison */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-primary" />
                        مقارنة الفصول
                      </CardTitle>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4" />
                        تصدير
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {classComparison.map((cls, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">{cls.name}</span>
                            <span className="text-muted-foreground">
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
                    </div>
                  </CardContent>
                </Card>

                {/* Top Students */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-accent" />
                        الطلاب المتميزون
                      </CardTitle>
                      <Button variant="ghost" size="sm" asChild>
                        <Link to="/dashboard/admin/students">
                          عرض الكل
                          <ChevronLeft className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {topStudents.map((student, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                              {index + 1}
                            </div>
                            <div>
                              <p className="font-medium">{student.name}</p>
                              <p className="text-xs text-muted-foreground">{student.class}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-bold text-primary">{student.points}</span>
                            <LevelBadge level={student.level} showLabel={false} size="sm" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Needs Attention */}
                <Card className="border-destructive/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-destructive">
                      <AlertTriangle className="w-5 h-5" />
                      يحتاجون متابعة
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {needsAttention.map((student, index) => (
                        <div
                          key={index}
                          className="p-3 rounded-lg bg-destructive/10 border border-destructive/20"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <p className="font-medium">{student.name}</p>
                            <span className="text-xs text-muted-foreground">{student.class}</span>
                          </div>
                          <p className="text-sm text-destructive">{student.issue}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {student.points} نقطة
                          </p>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4" asChild>
                      <Link to="/dashboard/admin/improvement-plan">
                        إنشاء خطة تحسين
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">إجراءات سريعة</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/dashboard/admin/monthly-report">
                        <FileText className="w-4 h-4 text-primary" />
                        تقرير شهري
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/dashboard/admin/behavior-settings">
                        <Shield className="w-4 h-4 text-secondary" />
                        إعدادات السلوك
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/dashboard/admin/rewards">
                        <Award className="w-4 h-4 text-accent" />
                        إدارة المكافآت
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/dashboard/admin/add-user">
                        <Users className="w-4 h-4 text-purple-500" />
                        إضافة معلم/طالب
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* System Health */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">حالة النظام</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">التقييمات اليومية</span>
                        <span className="text-sm font-bold text-success">156</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">رسائل أولياء الأمور</span>
                        <span className="text-sm font-bold text-primary">23</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">الشارات الممنوحة اليوم</span>
                        <span className="text-sm font-bold text-accent">8</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </>
        )}

        {selectedTab !== "overview" && (
          <Card className="text-center py-16">
            <CardContent>
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                {tabs.find((t) => t.id === selectedTab)?.icon &&
                  (() => {
                    const Icon = tabs.find((t) => t.id === selectedTab)?.icon;
                    return Icon ? <Icon className="w-10 h-10 text-muted-foreground" /> : null;
                  })()}
              </div>
              <h2 className="text-2xl font-bold mb-2">
                {tabs.find((t) => t.id === selectedTab)?.label}
              </h2>
              <p className="text-muted-foreground">
                هذا القسم قيد التطوير وسيكون متاحًا قريبًا
              </p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
