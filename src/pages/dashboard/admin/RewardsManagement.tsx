import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import {
  GraduationCap,
  ArrowRight,
  Award,
  Gift,
  Star,
  Trophy,
  Plus,
  Edit,
  Trash2,
  CheckCircle,
} from "lucide-react";

const RewardsManagement = () => {
  const badges = [
    { id: 1, name: "المنضبط", description: "حضور 30 يوم متتالي", icon: "🎯", active: true, awarded: 45 },
    { id: 2, name: "المتميز", description: "100 نقطة في أسبوع", icon: "⭐", active: true, awarded: 32 },
    { id: 3, name: "المثابر", description: "إكمال 10 تحديات", icon: "💪", active: true, awarded: 28 },
    { id: 4, name: "القائد", description: "مساعدة 5 زملاء", icon: "👑", active: true, awarded: 15 },
    { id: 5, name: "نجم المشاركة", description: "50 مشاركة في الحصص", icon: "🌟", active: true, awarded: 40 },
    { id: 6, name: "بطل الواجبات", description: "تسليم الواجبات في موعدها", icon: "📚", active: true, awarded: 55 },
  ];

  const rewards = [
    { id: 1, name: "شهادة تقدير", points: 100, quantity: 50, active: true },
    { id: 2, name: "قسيمة مكتبة", points: 200, quantity: 30, active: true },
    { id: 3, name: "يوم ترفيهي", points: 500, quantity: 10, active: true },
    { id: 4, name: "جائزة الطالب المثالي", points: 1000, quantity: 5, active: true },
  ];

  const pendingNominations = [
    { id: 1, student: "أحمد محمد علي", class: "الصف الثاني - أ", teacher: "أ. محمد أحمد", reason: "تميز في الرياضيات" },
    { id: 2, student: "علي سامي محمد", class: "الصف الثالث - أ", teacher: "أ. فاطمة علي", reason: "مساعدة الزملاء" },
    { id: 3, student: "يوسف إبراهيم", class: "الصف الثاني - ب", teacher: "أ. أحمد حسن", reason: "انضباط متميز" },
  ];

  const handleApprove = (id: number) => {
    toast.success("تم قبول الترشيح وإرسال إشعار للطالب وولي الأمر! 🎉");
  };

  const handleReject = (id: number) => {
    toast.info("تم رفض الترشيح");
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
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Award className="w-6 h-6 text-accent" />
          إدارة المكافآت والشارات
        </h1>

        {/* Pending Nominations */}
        <Card className="mb-6 border-accent/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-accent" />
              ترشيحات بانتظار الموافقة
              <span className="mr-auto px-2 py-1 rounded-full bg-accent/20 text-accent text-sm">
                {pendingNominations.length}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pendingNominations.map((nomination) => (
                <div
                  key={nomination.id}
                  className="p-4 rounded-xl border border-border flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-gold flex items-center justify-center text-accent-foreground font-bold">
                      {nomination.student.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold">{nomination.student}</p>
                      <p className="text-sm text-muted-foreground">{nomination.class}</p>
                    </div>
                  </div>
                  <div className="flex-1 md:text-center">
                    <p className="text-sm text-muted-foreground">مرشح بواسطة: {nomination.teacher}</p>
                    <p className="font-medium">{nomination.reason}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="text-success border-success hover:bg-success hover:text-success-foreground"
                      onClick={() => handleApprove(nomination.id)}
                    >
                      <CheckCircle className="w-4 h-4 ml-1" />
                      قبول
                    </Button>
                    <Button variant="outline" onClick={() => handleReject(nomination.id)}>
                      رفض
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Badges */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-gold" />
                  الشارات
                </CardTitle>
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 ml-1" />
                  شارة جديدة
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {badges.map((badge) => (
                <div
                  key={badge.id}
                  className={`p-4 rounded-xl border ${
                    badge.active ? "border-border" : "border-border opacity-50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{badge.icon}</span>
                    <div className="flex-1">
                      <p className="font-bold">{badge.name}</p>
                      <p className="text-sm text-muted-foreground">{badge.description}</p>
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-primary">{badge.awarded}</p>
                      <p className="text-xs text-muted-foreground">ممنوحة</p>
                    </div>
                    <Switch checked={badge.active} />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Rewards */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Gift className="w-5 h-5 text-accent" />
                  المكافآت
                </CardTitle>
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 ml-1" />
                  مكافأة جديدة
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {rewards.map((reward) => (
                <div
                  key={reward.id}
                  className={`p-4 rounded-xl border ${
                    reward.active ? "border-border" : "border-border opacity-50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold">{reward.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {reward.points} نقطة للاستبدال
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-left">
                        <p className="font-bold text-secondary">{reward.quantity}</p>
                        <p className="text-xs text-muted-foreground">متاح</p>
                      </div>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Switch checked={reward.active} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Stats */}
          <Card className="lg:col-span-2 bg-gradient-to-br from-accent/10 to-gold/10 border-accent/20">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <Trophy className="w-10 h-10 mx-auto mb-2 text-gold" />
                  <p className="text-3xl font-bold text-gold">156</p>
                  <p className="text-sm text-muted-foreground">شارة ممنوحة</p>
                </div>
                <div>
                  <Gift className="w-10 h-10 mx-auto mb-2 text-accent" />
                  <p className="text-3xl font-bold text-accent">45</p>
                  <p className="text-sm text-muted-foreground">مكافأة مستبدلة</p>
                </div>
                <div>
                  <Star className="w-10 h-10 mx-auto mb-2 text-primary" />
                  <p className="text-3xl font-bold text-primary">12</p>
                  <p className="text-sm text-muted-foreground">ترشيح هذا الأسبوع</p>
                </div>
                <div>
                  <Award className="w-10 h-10 mx-auto mb-2 text-secondary" />
                  <p className="text-3xl font-bold text-secondary">8</p>
                  <p className="text-sm text-muted-foreground">طالب مثالي</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default RewardsManagement;
