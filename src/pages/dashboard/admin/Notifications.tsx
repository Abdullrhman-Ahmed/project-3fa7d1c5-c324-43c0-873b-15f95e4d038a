import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  GraduationCap,
  ArrowRight,
  Bell,
  AlertTriangle,
  CheckCircle,
  Info,
  Users,
  Award,
  TrendingDown,
  MessageSquare,
  Clock,
} from "lucide-react";

const AdminNotifications = () => {
  const notifications = [
    {
      id: 1,
      type: "alert",
      title: "انخفاض في نقاط طالب",
      message: "الطالب عمر خالد من الصف الثاني أ يحتاج متابعة - انخفضت نقاطه بنسبة 30%",
      time: "منذ 30 دقيقة",
      icon: TrendingDown,
      read: false,
    },
    {
      id: 2,
      type: "success",
      title: "شارة جديدة ممنوحة",
      message: "تم منح شارة 'القائد المتميز' للطالب علي سامي من الصف الثالث أ",
      time: "منذ ساعة",
      icon: Award,
      read: false,
    },
    {
      id: 3,
      type: "info",
      title: "رسالة من ولي أمر",
      message: "استلام رسالة جديدة من ولي أمر الطالب أحمد محمد بخصوص الأداء الدراسي",
      time: "منذ ساعتين",
      icon: MessageSquare,
      read: false,
    },
    {
      id: 4,
      type: "alert",
      title: "غياب متكرر",
      message: "الطالب خالد أحمد غاب 3 أيام متتالية - يرجى المتابعة",
      time: "منذ 3 ساعات",
      icon: AlertTriangle,
      read: true,
    },
    {
      id: 5,
      type: "success",
      title: "تقييمات مرتفعة",
      message: "الصف الثالث أ حقق أعلى متوسط نقاط هذا الأسبوع",
      time: "منذ 5 ساعات",
      icon: CheckCircle,
      read: true,
    },
    {
      id: 6,
      type: "info",
      title: "تقرير يومي جاهز",
      message: "تقرير التقييمات اليومي جاهز للمراجعة - 156 تقييم تم إضافته اليوم",
      time: "أمس",
      icon: Info,
      read: true,
    },
    {
      id: 7,
      type: "info",
      title: "معلم جديد",
      message: "تم تسجيل المعلم أ. كريم محمد في النظام وتم تعيينه للصف الأول ب",
      time: "منذ يومين",
      icon: Users,
      read: true,
    },
  ];

  const getTypeStyles = (type: string, read: boolean) => {
    const baseStyles = read ? "opacity-70" : "";
    switch (type) {
      case "alert":
        return `bg-destructive/10 border-destructive/30 ${baseStyles}`;
      case "success":
        return `bg-success/10 border-success/30 ${baseStyles}`;
      default:
        return `bg-primary/10 border-primary/30 ${baseStyles}`;
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case "alert":
        return "text-destructive";
      case "success":
        return "text-success";
      default:
        return "text-primary";
    }
  };

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
            <Bell className="w-6 h-6 text-primary" />
            الإشعارات
          </h1>
          <Button variant="outline">تحديد الكل كمقروء</Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <Card className="bg-destructive/10">
            <CardContent className="p-4 flex items-center gap-4">
              <AlertTriangle className="w-10 h-10 text-destructive" />
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-muted-foreground">تنبيهات مهمة</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-primary/10">
            <CardContent className="p-4 flex items-center gap-4">
              <MessageSquare className="w-10 h-10 text-primary" />
              <div>
                <p className="text-2xl font-bold">5</p>
                <p className="text-sm text-muted-foreground">رسائل جديدة</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-success/10">
            <CardContent className="p-4 flex items-center gap-4">
              <CheckCircle className="w-10 h-10 text-success" />
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">إشعارات إيجابية</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Notifications List */}
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              {notifications.map((notification) => {
                const IconComponent = notification.icon;
                return (
                  <div
                    key={notification.id}
                    className={`p-4 rounded-xl border ${getTypeStyles(notification.type, notification.read)}`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                          notification.type === "alert"
                            ? "bg-destructive/20"
                            : notification.type === "success"
                            ? "bg-success/20"
                            : "bg-primary/20"
                        }`}
                      >
                        <IconComponent className={`w-5 h-5 ${getIconColor(notification.type)}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-bold">{notification.title}</p>
                            <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                          </div>
                          {!notification.read && (
                            <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></span>
                          )}
                        </div>
                        <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {notification.time}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminNotifications;
