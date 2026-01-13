import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  GraduationCap,
  ArrowRight,
  Calendar,
  Clock,
  BookOpen,
  User,
} from "lucide-react";

const Schedule = () => {
  const days = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس"];

  const schedule = {
    "الأحد": [
      { time: "8:00 - 8:45", subject: "الرياضيات", teacher: "أ. محمد أحمد" },
      { time: "9:00 - 9:45", subject: "اللغة العربية", teacher: "أ. فاطمة علي" },
      { time: "10:00 - 10:45", subject: "العلوم", teacher: "أ. أحمد حسن" },
      { time: "11:00 - 11:45", subject: "اللغة الإنجليزية", teacher: "أ. سارة محمد" },
      { time: "12:00 - 12:45", subject: "التربية الفنية", teacher: "أ. نور الدين" },
    ],
    "الإثنين": [
      { time: "8:00 - 8:45", subject: "العلوم", teacher: "أ. أحمد حسن" },
      { time: "9:00 - 9:45", subject: "الرياضيات", teacher: "أ. محمد أحمد" },
      { time: "10:00 - 10:45", subject: "اللغة العربية", teacher: "أ. فاطمة علي" },
      { time: "11:00 - 11:45", subject: "الحاسب الآلي", teacher: "أ. كريم سامي" },
      { time: "12:00 - 12:45", subject: "التربية البدنية", teacher: "أ. علي حسن" },
    ],
    "الثلاثاء": [
      { time: "8:00 - 8:45", subject: "اللغة الإنجليزية", teacher: "أ. سارة محمد" },
      { time: "9:00 - 9:45", subject: "الرياضيات", teacher: "أ. محمد أحمد" },
      { time: "10:00 - 10:45", subject: "الدراسات الاجتماعية", teacher: "أ. ياسر محمود" },
      { time: "11:00 - 11:45", subject: "العلوم", teacher: "أ. أحمد حسن" },
      { time: "12:00 - 12:45", subject: "اللغة العربية", teacher: "أ. فاطمة علي" },
    ],
    "الأربعاء": [
      { time: "8:00 - 8:45", subject: "الرياضيات", teacher: "أ. محمد أحمد" },
      { time: "9:00 - 9:45", subject: "العلوم", teacher: "أ. أحمد حسن" },
      { time: "10:00 - 10:45", subject: "اللغة الإنجليزية", teacher: "أ. سارة محمد" },
      { time: "11:00 - 11:45", subject: "اللغة العربية", teacher: "أ. فاطمة علي" },
      { time: "12:00 - 12:45", subject: "الموسيقى", teacher: "أ. منى خالد" },
    ],
    "الخميس": [
      { time: "8:00 - 8:45", subject: "اللغة العربية", teacher: "أ. فاطمة علي" },
      { time: "9:00 - 9:45", subject: "الرياضيات", teacher: "أ. محمد أحمد" },
      { time: "10:00 - 10:45", subject: "التربية الدينية", teacher: "أ. حسين أحمد" },
      { time: "11:00 - 11:45", subject: "أنشطة", teacher: "" },
    ],
  };

  const colors = [
    "bg-primary/10 border-primary/30",
    "bg-secondary/10 border-secondary/30",
    "bg-accent/10 border-accent/30",
    "bg-success/10 border-success/30",
    "bg-purple-500/10 border-purple-500/30",
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
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-primary" />
          جدول الحصص الأسبوعي
        </h1>

        {/* Mobile View - Tabs */}
        <div className="lg:hidden space-y-4">
          {days.map((day, dayIndex) => (
            <Card key={day}>
              <CardHeader>
                <CardTitle className="text-lg">{day}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {schedule[day as keyof typeof schedule]?.map((lesson, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-xl border ${colors[index % colors.length]}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">{lesson.subject}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {lesson.time}
                      </div>
                    </div>
                    {lesson.teacher && (
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <User className="w-3 h-3" />
                        {lesson.teacher}
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Desktop View - Table */}
        <Card className="hidden lg:block">
          <CardContent className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="p-3 text-right bg-muted/50 rounded-tr-xl">الوقت</th>
                    {days.map((day, index) => (
                      <th key={day} className={`p-3 text-center bg-muted/50 ${index === days.length - 1 ? 'rounded-tl-xl' : ''}`}>
                        {day}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {["8:00 - 8:45", "9:00 - 9:45", "10:00 - 10:45", "11:00 - 11:45", "12:00 - 12:45"].map((time, timeIndex) => (
                    <tr key={time} className="border-t border-border">
                      <td className="p-3 text-sm text-muted-foreground whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {time}
                        </div>
                      </td>
                      {days.map((day) => {
                        const lesson = schedule[day as keyof typeof schedule]?.find((l) => l.time === time);
                        return (
                          <td key={day} className="p-2">
                            {lesson ? (
                              <div className={`p-3 rounded-xl border ${colors[timeIndex % colors.length]}`}>
                                <p className="font-medium text-sm">{lesson.subject}</p>
                                {lesson.teacher && (
                                  <p className="text-xs text-muted-foreground mt-1">{lesson.teacher}</p>
                                )}
                              </div>
                            ) : (
                              <div className="p-3 text-center text-muted-foreground text-sm">-</div>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Schedule;
