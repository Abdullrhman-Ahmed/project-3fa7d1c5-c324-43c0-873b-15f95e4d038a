import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  ArrowRight,
  Bell,
  BookOpen,
  Award,
  Target,
  Calendar,
  CheckCircle,
  Star,
} from "lucide-react";

const StudentNotifications = () => {
  const notifications = [
    {
      id: 1,
      type: "evaluation",
      title: "تقييم جديد في الرياضيات",
      description: "حصلت على +10 نقاط من أ. محمد أحمد",
      time: "منذ 5 دقائق",
      read: false,
      icon: BookOpen,
      iconBg: "bg-success/20",
      iconColor: "text-success",
    },
    {
      id: 2,
      type: "badge",
      title: "شارة جديدة!",
      description: "حصلت على شارة 'المثابر' - أكملت 10 تحديات",
      time: "منذ ساعة",
      read: false,
      icon: Award,
      iconBg: "bg-accent/20",
      iconColor: "text-accent",
    },
    {
      id: 3,
      type: "challenge",
      title: "اقتربت من إكمال التحدي!",
      description: "تبقى لك يوم واحد لإكمال تحدي الحضور",
      time: "منذ 3 ساعات",
      read: false,
      icon: Target,
      iconBg: "bg-primary/20",
      iconColor: "text-primary",
    },
    {
      id: 4,
      type: "evaluation",
      title: "تقييم جديد في اللغة العربية",
      description: "حصلت على +5 نقاط من أ. فاطمة علي",
      time: "أمس",
      read: true,
      icon: BookOpen,
      iconBg: "bg-success/20",
      iconColor: "text-success",
    },
    {
      id: 5,
      type: "level",
      title: "مبروك! ارتقيت لمستوى جديد",
      description: "أنت الآن في مستوى 'متميز'",
      time: "منذ يومين",
      read: true,
      icon: Star,
      iconBg: "bg-gold/20",
      iconColor: "text-gold",
    },
    {
      id: 6,
      type: "reminder",
      title: "تذكير: واجب الرياضيات",
      description: "موعد تسليم الواجب غدًا",
      time: "منذ يومين",
      read: true,
      icon: Calendar,
      iconBg: "bg-secondary/20",
      iconColor: "text-secondary",
    },
    {
      id: 7,
      type: "evaluation",
      title: "تنبيه سلوكي",
      description: "خصم -5 نقاط بسبب التأخر - أ. أحمد حسن",
      time: "منذ 3 أيام",
      read: true,
      icon: BookOpen,
      iconBg: "bg-destructive/20",
      iconColor: "text-destructive",
    },
    {
      id: 8,
      type: "challenge",
      title: "تحدي جديد متاح!",
      description: "تحدي الأسبوع: اجمع 50 نقطة",
      time: "منذ أسبوع",
      read: true,
      icon: Target,
      iconBg: "bg-primary/20",
      iconColor: "text-primary",
    },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

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

export default StudentNotifications;
