import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  GraduationCap,
  ArrowRight,
  Calendar,
  CheckCircle,
  XCircle,
  Clock,
  Users,
  TrendingUp,
  Filter,
} from "lucide-react";

const AttendanceRecord = () => {
  const [viewType, setViewType] = useState<"daily" | "weekly" | "monthly">("daily");
  const [selectedClass, setSelectedClass] = useState("all");

  const classes = [
    { id: "all", name: "جميع الفصول" },
    { id: "2a", name: "الصف الثاني - أ" },
    { id: "2b", name: "الصف الثاني - ب" },
    { id: "3a", name: "الصف الثالث - أ" },
  ];

  const dailyAttendance = [
    { id: 1, name: "أحمد محمد علي", class: "2a", status: "present", time: "7:45 ص" },
    { id: 2, name: "محمود حسن أحمد", class: "2a", status: "present", time: "7:50 ص" },
    { id: 3, name: "عمر خالد محمد", class: "2a", status: "absent", time: "-" },
    { id: 4, name: "يوسف إبراهيم علي", class: "2b", status: "present", time: "7:48 ص" },
    { id: 5, name: "كريم عادل حسن", class: "2b", status: "late", time: "8:15 ص" },
    { id: 6, name: "علي سامي محمد", class: "3a", status: "present", time: "7:40 ص" },
  ];

  const weeklyStats = [
    { day: "الأحد", present: 28, absent: 2, late: 1 },
    { day: "الإثنين", present: 29, absent: 1, late: 1 },
    { day: "الثلاثاء", present: 27, absent: 3, late: 1 },
    { day: "الأربعاء", present: 30, absent: 0, late: 1 },
    { day: "الخميس", present: 28, absent: 2, late: 1 },
  ];

  const monthlyStats = [
    { week: "الأسبوع الأول", attendanceRate: 95 },
    { week: "الأسبوع الثاني", attendanceRate: 92 },
    { week: "الأسبوع الثالث", attendanceRate: 97 },
    { week: "الأسبوع الرابع", attendanceRate: 94 },
  ];

  const filteredAttendance = dailyAttendance.filter(
    (student) => selectedClass === "all" || student.class === selectedClass
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "present":
        return "bg-success/20 text-success";
      case "absent":
        return "bg-destructive/20 text-destructive";
      case "late":
        return "bg-accent/20 text-accent";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "present":
        return "حاضر";
      case "absent":
        return "غائب";
      case "late":
        return "متأخر";
      default:
        return status;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "present":
        return <CheckCircle className="w-5 h-5 text-success" />;
      case "absent":
        return <XCircle className="w-5 h-5 text-destructive" />;
      case "late":
        return <Clock className="w-5 h-5 text-accent" />;
      default:
        return null;
    }
  };

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
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Calendar className="w-8 h-8 text-primary" />
            سجل الحضور
          </h1>
          <div className="flex items-center gap-2">
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

        {/* View Toggle */}
        <div className="flex gap-2 mb-6">
          <Button
            variant={viewType === "daily" ? "default" : "outline"}
            onClick={() => setViewType("daily")}
          >
            يومي
          </Button>
          <Button
            variant={viewType === "weekly" ? "default" : "outline"}
            onClick={() => setViewType("weekly")}
          >
            أسبوعي
          </Button>
          <Button
            variant={viewType === "monthly" ? "default" : "outline"}
            onClick={() => setViewType("monthly")}
          >
            شهري
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <Card className="bg-success/10 border-success/30">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold text-success">
                  {filteredAttendance.filter((s) => s.status === "present").length}
                </p>
                <p className="text-sm text-muted-foreground">حاضرون اليوم</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-destructive/10 border-destructive/30">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <p className="text-2xl font-bold text-destructive">
                  {filteredAttendance.filter((s) => s.status === "absent").length}
                </p>
                <p className="text-sm text-muted-foreground">غائبون</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-accent/10 border-accent/30">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">
                  {filteredAttendance.filter((s) => s.status === "late").length}
                </p>
                <p className="text-sm text-muted-foreground">متأخرون</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content based on view type */}
        {viewType === "daily" && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                الحضور اليومي - {new Date().toLocaleDateString("ar-EG", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {filteredAttendance.map((student) => (
                  <div
                    key={student.id}
                    className="p-4 rounded-xl border border-border flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold">
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {classes.find((c) => c.id === student.class)?.name}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground">{student.time}</span>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(student.status)}
                        <span className={`text-sm px-3 py-1 rounded-full ${getStatusColor(student.status)}`}>
                          {getStatusText(student.status)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {viewType === "weekly" && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                إحصائيات الأسبوع
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyStats.map((day, index) => (
                  <div key={index} className="p-4 rounded-xl border border-border">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-bold">{day.day}</p>
                      <p className="text-sm text-muted-foreground">
                        نسبة الحضور: {Math.round((day.present / (day.present + day.absent + day.late)) * 100)}%
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span className="text-sm">{day.present} حاضر</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-destructive" />
                        <span className="text-sm">{day.absent} غائب</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-accent" />
                        <span className="text-sm">{day.late} متأخر</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {viewType === "monthly" && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                إحصائيات الشهر
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyStats.map((week, index) => (
                  <div key={index} className="p-4 rounded-xl border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-bold">{week.week}</p>
                      <span
                        className={`text-sm px-3 py-1 rounded-full ${
                          week.attendanceRate >= 95
                            ? "bg-success/20 text-success"
                            : week.attendanceRate >= 90
                            ? "bg-accent/20 text-accent"
                            : "bg-destructive/20 text-destructive"
                        }`}
                      >
                        {week.attendanceRate}%
                      </span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          week.attendanceRate >= 95
                            ? "bg-success"
                            : week.attendanceRate >= 90
                            ? "bg-accent"
                            : "bg-destructive"
                        }`}
                        style={{ width: `${week.attendanceRate}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default AttendanceRecord;