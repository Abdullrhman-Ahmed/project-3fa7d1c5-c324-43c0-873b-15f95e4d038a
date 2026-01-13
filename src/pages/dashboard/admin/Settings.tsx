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
  Shield,
  Database,
  Globe,
  Palette,
} from "lucide-react";

const AdminSettings = () => {
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
        <h1 className="text-2xl font-bold mb-6">إعدادات النظام</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* School Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                بيانات المدرسة
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">اسم المدرسة</label>
                <Input defaultValue="مدرسة WE للتكنولوجيا التطبيقية" className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium">الفرع</label>
                <Input defaultValue="الجيزة" className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium">العنوان</label>
                <Input defaultValue="الجيزة - مصر" className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium">رقم التواصل</label>
                <Input defaultValue="02-12345678" className="mt-1" />
              </div>
              <Button variant="hero">حفظ التغييرات</Button>
            </CardContent>
          </Card>

          {/* Admin Profile */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-secondary" />
                الملف الشخصي
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">اسم المدير</label>
                <Input defaultValue="أ. أحمد محمد" className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium">البريد الإلكتروني</label>
                <Input defaultValue="admin@weschools.edu" className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium">رقم الهاتف</label>
                <Input defaultValue="01012345678" className="mt-1" />
              </div>
              <Button variant="outline">تغيير كلمة المرور</Button>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-accent" />
                إعدادات الإشعارات
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">تنبيهات الطلاب</p>
                  <p className="text-sm text-muted-foreground">عند انخفاض نقاط الطالب</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">تقارير يومية</p>
                  <p className="text-sm text-muted-foreground">ملخص يومي بالبريد</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">تقارير أسبوعية</p>
                  <p className="text-sm text-muted-foreground">تقرير مفصل أسبوعي</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">رسائل أولياء الأمور</p>
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
                <Shield className="w-5 h-5 text-destructive" />
                الأمان
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">المصادقة الثنائية</p>
                  <p className="text-sm text-muted-foreground">طبقة حماية إضافية</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">تسجيل النشاطات</p>
                  <p className="text-sm text-muted-foreground">تتبع جميع العمليات</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">قفل الجلسات</p>
                  <p className="text-sm text-muted-foreground">بعد 30 دقيقة من عدم النشاط</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* System */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5 text-purple-500" />
                إعدادات النظام
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-muted/50">
                  <p className="font-medium mb-2">إصدار النظام</p>
                  <p className="text-2xl font-bold text-primary">v2.1.0</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/50">
                  <p className="font-medium mb-2">آخر تحديث</p>
                  <p className="text-2xl font-bold text-secondary">15 يناير 2024</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/50">
                  <p className="font-medium mb-2">حالة النظام</p>
                  <p className="text-2xl font-bold text-success">يعمل بشكل طبيعي</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminSettings;
