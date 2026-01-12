import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  ArrowRight,
  Bell,
  Users,
  Award,
  MessageSquare,
  Calendar,
  CheckCircle,
  AlertTriangle,
  ClipboardCheck,
} from "lucide-react";

const TeacherNotifications = () => {
  const notifications = [
    {
      id: 1,
      type: "absence",
      title: "تنبيه غياب",
      description: "الطالب عمر خالد محمد غائب اليوم - الصف الثاني أ",
      time: "منذ 10 دقائق",
      read: false,
      icon: AlertTriangle,
      iconBg: "bg-destructive/20",
      iconColor: "text-destructive",
    },
    {
      id: 2,
      type: "message",
      title: "رسالة من ولي أمر",
      description: "ولي أمر الطالب أحمد محمد أرسل استفسارًا",
      time: "منذ 30 دقيقة",
      read: false,
      icon: MessageSquare,
      iconBg: "bg-primary/20",
      iconColor: "text-primary",
    },
    {
      id: 3,
      type: "evaluation",
      title: "تقييم مكتمل",
      description: "تم حفظ تقييم الطالب يوسف إبراهيم بنجاح",
      time: "منذ ساعة",
      read: false,
      icon: ClipboardCheck,
      iconBg: "bg-success/20",
      iconColor: "text-success",
    },
    {
      id: 4,
      type: "reward",
      title: "ترشيح مقبول",
      description: "تم قبول ترشيح الطالب علي سامي للمكافأة",
      time: "منذ ساعتين",
      read: true,
      icon: Award,
      iconBg: "bg-accent/20",
      iconColor: "text-accent",
    },
    {
      id: 5,
      type: "class",
      title: "إحصائيات الفصل",
      description: "تقرير أسبوعي جاهز للصف الثاني - أ",
      time: "أمس",
      read: true,
      icon: Users,
      iconBg: "bg-secondary/20",
      iconColor: "text-secondary",
    },
    {
      id: 6,
      type: "reminder",
      title: "تذكير بالتقييم",
      description: "5 طلاب لم يتم تقييمهم هذا الأسبوع",
      time: "منذ يومين",
      read: true,
      icon: Calendar,
      iconBg: "bg-muted",
      iconColor: "text-muted-foreground",
    },
    {
      id: 7,
      type: "system",
      title: "تحديث النظام",
      description: "تم إضافة ميزة جديدة للتقييم السريع",
      time: "منذ 3 أيام",
      read: true,
      icon: Bell,
      iconBg: "bg-primary/20",
      iconColor: "text-primary",
    },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

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
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Bell className="w-8 h-8 text-primary" />
            الإشعارات
            {unreadCount > 0 && (
              <span className="bg-destructive text-destructive-foreground text-sm px-2 py-1 rounded-full">
                {unreadCount} جديد
              </span>
            )}
          </h1>
          <Button variant="outline" size="sm">
            <CheckCircle className="w-4 h-4 ml-2" />
            تحديد الكل كمقروء
          </Button>
        </div>

        <div className="space-y-4 max-w-3xl">
          {notifications.map((notification) => {
            const IconComponent = notification.icon;
            return (
              <Card
                key={notification.id}
                className={`transition-all hover:shadow-md ${
                  !notification.read ? "border-primary/50 bg-primary/5" : ""
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${notification.iconBg}`}
                    >
                      <IconComponent className={`w-6 h-6 ${notification.iconColor}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className={`font-medium ${!notification.read ? "text-foreground" : "text-muted-foreground"}`}>
                            {notification.title}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {notification.description}
                          </p>
                        </div>
                        {!notification.read && (
                          <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default TeacherNotifications;