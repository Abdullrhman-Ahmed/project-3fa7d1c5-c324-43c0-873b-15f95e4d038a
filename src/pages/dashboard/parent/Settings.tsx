import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  GraduationCap,
  ArrowRight,
  User,
  Bell,
  Lock,
  Smartphone,
  Globe,
  Eye,
} from "lucide-react";

const ParentSettings = () => {
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
        <h1 className="text-2xl font-bold mb-6">الإعدادات</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Profile Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                البيانات الشخصية
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">الاسم الكامل</label>
                <Input defaultValue="محمد علي" className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium">البريد الإلكتروني</label>
                <Input defaultValue="mohamed.ali@example.com" className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium">رقم الهاتف</label>
                <Input defaultValue="01012345678" className="mt-1" />
              </div>
              <Button variant="hero">حفظ التغييرات</Button>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-secondary" />
                إعدادات الإشعارات
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">إشعارات التقييمات</p>
                  <p className="text-sm text-muted-foreground">عند تقييم ابنك</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">إشعارات الحضور</p>
                  <p className="text-sm text-muted-foreground">عند الغياب أو التأخر</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">إشعارات الشارات</p>
                  <p className="text-sm text-muted-foreground">عند حصول ابنك على شارة جديدة</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">رسائل المعلمين</p>
                  <p className="text-sm text-muted-foreground">عند استلام رسالة جديدة</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-accent" />
                الأمان
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">كلمة المرور الحالية</label>
                <Input type="password" placeholder="••••••••" className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium">كلمة المرور الجديدة</label>
                <Input type="password" placeholder="••••••••" className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium">تأكيد كلمة المرور</label>
                <Input type="password" placeholder="••••••••" className="mt-1" />
              </div>
              <Button variant="outline">تغيير كلمة المرور</Button>
            </CardContent>
          </Card>

          {/* Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-purple-500" />
                التفضيلات
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">الوضع الليلي</p>
                  <p className="text-sm text-muted-foreground">تفعيل المظهر الداكن</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">التقارير الأسبوعية</p>
                  <p className="text-sm text-muted-foreground">استلام تقرير أسبوعي بالبريد</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ParentSettings;
