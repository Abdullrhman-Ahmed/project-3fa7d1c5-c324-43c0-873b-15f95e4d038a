import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  GraduationCap,
  ArrowRight,
  Users,
  UserPlus,
  User,
  Mail,
  Phone,
  School,
  BookOpen,
  Save,
} from "lucide-react";

const AddUser = () => {
  const [userType, setUserType] = useState<"student" | "teacher">("student");

  const handleSubmit = () => {
    toast.success(
      userType === "student"
        ? "تم إضافة الطالب بنجاح! 🎓"
        : "تم إضافة المعلم بنجاح! 👨‍🏫"
    );
  };

  const classes = [
    "الصف الأول - أ",
    "الصف الأول - ب",
    "الصف الثاني - أ",
    "الصف الثاني - ب",
    "الصف الثالث - أ",
    "الصف الثالث - ب",
  ];

  const subjects = [
    "الرياضيات",
    "اللغة العربية",
    "اللغة الإنجليزية",
    "العلوم",
    "الدراسات الاجتماعية",
    "الحاسب الآلي",
    "التربية الفنية",
    "التربية البدنية",
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
          <UserPlus className="w-6 h-6 text-primary" />
          إضافة مستخدم جديد
        </h1>

        {/* User Type Selection */}
        <div className="flex gap-4 mb-6">
          <Button
            variant={userType === "student" ? "hero" : "outline"}
            className="flex-1"
            onClick={() => setUserType("student")}
          >
            <GraduationCap className="w-5 h-5 ml-2" />
            طالب جديد
          </Button>
          <Button
            variant={userType === "teacher" ? "hero" : "outline"}
            className="flex-1"
            onClick={() => setUserType("teacher")}
          >
            <User className="w-5 h-5 ml-2" />
            معلم جديد
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Personal Information */}
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
                <Input placeholder="أدخل الاسم الكامل" className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium">الرقم القومي</label>
                <Input placeholder="أدخل الرقم القومي" className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium">تاريخ الميلاد</label>
                <Input type="date" className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium">الجنس</label>
                <select className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm mt-1">
                  <option value="">اختر الجنس</option>
                  <option value="male">ذكر</option>
                  <option value="female">أنثى</option>
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-secondary" />
                بيانات التواصل
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">البريد الإلكتروني</label>
                <Input type="email" placeholder="example@email.com" className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium">رقم الهاتف</label>
                <Input placeholder="01xxxxxxxxx" className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium">العنوان</label>
                <Input placeholder="أدخل العنوان" className="mt-1" />
              </div>
              {userType === "student" && (
                <div>
                  <label className="text-sm font-medium">اسم ولي الأمر</label>
                  <Input placeholder="أدخل اسم ولي الأمر" className="mt-1" />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Academic Information */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <School className="w-5 h-5 text-accent" />
                البيانات الأكاديمية
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {userType === "student" ? (
                  <>
                    <div>
                      <label className="text-sm font-medium">الفصل</label>
                      <select className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm mt-1">
                        <option value="">اختر الفصل</option>
                        {classes.map((cls) => (
                          <option key={cls} value={cls}>
                            {cls}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">سنة القبول</label>
                      <Input type="number" defaultValue={2024} className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">رقم الجلوس</label>
                      <Input placeholder="أدخل رقم الجلوس" className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">الحالة</label>
                      <select className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm mt-1">
                        <option value="active">نشط</option>
                        <option value="inactive">غير نشط</option>
                      </select>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="text-sm font-medium">المادة</label>
                      <select className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm mt-1">
                        <option value="">اختر المادة</option>
                        {subjects.map((subject) => (
                          <option key={subject} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">الفصول المسؤول عنها</label>
                      <select className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm mt-1">
                        <option value="">اختر الفصول</option>
                        {classes.map((cls) => (
                          <option key={cls} value={cls}>
                            {cls}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">تاريخ التعيين</label>
                      <Input type="date" className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">المؤهل الدراسي</label>
                      <Input placeholder="مثال: بكالوريوس تربية" className="mt-1" />
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-4 mt-6">
          <Button variant="hero" className="flex-1" onClick={handleSubmit}>
            <Save className="w-4 h-4 ml-2" />
            {userType === "student" ? "إضافة الطالب" : "إضافة المعلم"}
          </Button>
          <Button variant="outline" asChild>
            <Link to="/dashboard/admin">إلغاء</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default AddUser;
