import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { WESchoolsLogo } from "@/components/ui/WESchoolsLogo";
import {
  GraduationCap,
  School,
  UserCheck,
  Users,
  ChevronLeft,
  Eye,
  EyeOff,
  Lock,
  IdCard,
  User,
  AlertCircle,
} from "lucide-react";

type UserRole = "admin" | "teacher" | "student" | "parent";

const Login = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Form states for different roles
  const [adminId, setAdminId] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  const [teacherId, setTeacherId] = useState("");
  const [teacherPassword, setTeacherPassword] = useState("");

  const [studentId, setStudentId] = useState("");
  const [studentPassword, setStudentPassword] = useState("");

  // Parent verification
  const [parentName, setParentName] = useState("");
  const [childName, setChildName] = useState("");
  const [childStudentId, setChildStudentId] = useState("");
  const [parentPassword, setParentPassword] = useState("");
  const [isParentVerified, setIsParentVerified] = useState(false);

  const roles = [
    {
      id: "admin" as UserRole,
      title: "إدارة المدرسة",
      description: "لوحة تحكم شاملة للإدارة",
      icon: School,
      color: "bg-primary",
    },
    {
      id: "teacher" as UserRole,
      title: "المعلم",
      description: "تقييم ومتابعة الطلاب",
      icon: UserCheck,
      color: "bg-secondary",
    },
    {
      id: "student" as UserRole,
      title: "الطالب",
      description: "عرض النقاط والإنجازات",
      icon: GraduationCap,
      color: "bg-purple-600",
    },
    {
      id: "parent" as UserRole,
      title: "ولي الأمر",
      description: "متابعة حساب الابن",
      icon: Users,
      color: "bg-accent",
    },
  ];

  const handleVerifyParent = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate verification - in real app this would check against database
    setTimeout(() => {
      // Mock verification - accepts any data for demo
      if (parentName && childName && childStudentId) {
        setIsParentVerified(true);
        toast({
          title: "تم التحقق بنجاح",
          description: "تم التحقق من بيانات الطالب. يمكنك الآن تسجيل الدخول.",
        });
      } else {
        toast({
          variant: "destructive",
          title: "البيانات غير صحيحة",
          description: "يرجى مراجعة إدارة المدرسة للحصول على البيانات الصحيحة.",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      // Navigate to dashboard based on role
      if (selectedRole) {
        window.location.href = `/dashboard/${selectedRole}`;
      }
      setIsLoading(false);
    }, 500);
  };

  const resetForm = () => {
    setSelectedRole(null);
    setShowPassword(false);
    setAdminId("");
    setAdminPassword("");
    setTeacherId("");
    setTeacherPassword("");
    setStudentId("");
    setStudentPassword("");
    setParentName("");
    setChildName("");
    setChildStudentId("");
    setParentPassword("");
    setIsParentVerified(false);
  };

  const renderLoginForm = () => {
    switch (selectedRole) {
      case "admin":
        return (
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 mb-4">
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-primary" />
                حسابات الإدارة تُنشأ داخليًا فقط من قبل مسؤول النظام
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="adminId">الرقم التعريفي للمسؤول</Label>
              <div className="relative">
                <IdCard className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="adminId"
                  type="text"
                  placeholder="أدخل الرقم التعريفي"
                  value={adminId}
                  onChange={(e) => setAdminId(e.target.value)}
                  className="pr-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="adminPassword">كلمة المرور</Label>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="adminPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="أدخل كلمة المرور"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  className="pr-10 pl-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isLoading}>
              {isLoading ? "جاري الدخول..." : "تسجيل الدخول"}
            </Button>
          </form>
        );

      case "teacher":
        return (
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20 mb-4">
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-secondary" />
                يتم تسجيل الدخول باستخدام الرقم التعريفي الصادر من إدارة المدرسة
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="teacherId">الرقم التعريفي للمعلم</Label>
              <div className="relative">
                <IdCard className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="teacherId"
                  type="text"
                  placeholder="أدخل الرقم التعريفي للمعلم"
                  value={teacherId}
                  onChange={(e) => setTeacherId(e.target.value)}
                  className="pr-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="teacherPassword">كلمة المرور</Label>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="teacherPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="أدخل كلمة المرور"
                  value={teacherPassword}
                  onChange={(e) => setTeacherPassword(e.target.value)}
                  className="pr-10 pl-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isLoading}>
              {isLoading ? "جاري الدخول..." : "تسجيل الدخول"}
            </Button>
          </form>
        );

      case "student":
        return (
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20 mb-4">
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-purple-500" />
                حسابات الطلاب تُنشأ من قبل إدارة المدرسة فقط
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="studentId">الرقم التعريفي للطالب</Label>
              <div className="relative">
                <IdCard className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="studentId"
                  type="text"
                  placeholder="أدخل الرقم التعريفي للطالب"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  className="pr-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="studentPassword">كلمة المرور</Label>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="studentPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="أدخل كلمة المرور"
                  value={studentPassword}
                  onChange={(e) => setStudentPassword(e.target.value)}
                  className="pr-10 pl-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isLoading}>
              {isLoading ? "جاري الدخول..." : "تسجيل الدخول"}
            </Button>
          </form>
        );

      case "parent":
        if (!isParentVerified) {
          return (
            <form onSubmit={handleVerifyParent} className="space-y-4">
              <div className="p-4 rounded-lg bg-accent/10 border border-accent/20 mb-4">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-accent" />
                  يرجى إدخال بيانات التحقق للربط بحساب الطالب
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="parentName">اسم ولي الأمر</Label>
                <div className="relative">
                  <User className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="parentName"
                    type="text"
                    placeholder="أدخل اسم ولي الأمر"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="pr-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="childName">اسم الطالب</Label>
                <div className="relative">
                  <GraduationCap className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="childName"
                    type="text"
                    placeholder="أدخل اسم الطالب"
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    className="pr-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="childStudentId">الرقم التعريفي للطالب</Label>
                <div className="relative">
                  <IdCard className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="childStudentId"
                    type="text"
                    placeholder="أدخل الرقم التعريفي للطالب"
                    value={childStudentId}
                    onChange={(e) => setChildStudentId(e.target.value)}
                    className="pr-10"
                    required
                  />
                </div>
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isLoading}>
                {isLoading ? "جاري التحقق..." : "التحقق من البيانات"}
              </Button>
            </form>
          );
        }

        return (
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="p-4 rounded-lg bg-success/10 border border-success/20 mb-4">
              <p className="text-sm text-success flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                تم التحقق من بيانات الطالب: {childName}
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="parentPassword">كلمة المرور</Label>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="parentPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="أدخل كلمة المرور"
                  value={parentPassword}
                  onChange={(e) => setParentPassword(e.target.value)}
                  className="pr-10 pl-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isLoading}>
              {isLoading ? "جاري الدخول..." : "تسجيل الدخول"}
            </Button>
          </form>
        );

      default:
        return null;
    }
  };

  const getFormDescription = () => {
    switch (selectedRole) {
      case "admin":
        return "الدخول لحسابات الإدارة";
      case "teacher":
        return "الدخول برقم المعلم التعريفي";
      case "student":
        return "الدخول برقم الطالب التعريفي";
      case "parent":
        return isParentVerified ? "أدخل كلمة المرور للمتابعة" : "التحقق من بيانات الطالب";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-primary/5 via-background to-secondary/5 p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary)/0.1),transparent_50%)]" />

      <div className="w-full max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 mb-6 group hover:opacity-90 transition-opacity">
            <WESchoolsLogo size="md" />
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-2">تسجيل الدخول</h1>
          <p className="text-muted-foreground">اختر نوع الحساب للمتابعة</p>
        </div>

        {!selectedRole ? (
          /* Role Selection */
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in">
            {roles.map((role) => (
              <Card
                key={role.id}
                className="cursor-pointer card-hover group"
                onClick={() => setSelectedRole(role.id)}
              >
                <CardContent className="p-6 flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl ${role.color} text-primary-foreground flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <role.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold">{role.title}</h3>
                    <p className="text-sm text-muted-foreground">{role.description}</p>
                  </div>
                  <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition-all" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          /* Login Form */
          <Card className="max-w-md mx-auto animate-scale-in">
            <CardHeader className="text-center">
              <div
                className={`w-16 h-16 rounded-2xl ${
                  roles.find((r) => r.id === selectedRole)?.color
                } text-primary-foreground flex items-center justify-center mx-auto mb-4`}
              >
                {(() => {
                  const Icon = roles.find((r) => r.id === selectedRole)?.icon;
                  return Icon ? <Icon className="w-8 h-8" /> : null;
                })()}
              </div>
              <CardTitle className="text-2xl">
                {roles.find((r) => r.id === selectedRole)?.title}
              </CardTitle>
              <CardDescription>{getFormDescription()}</CardDescription>
            </CardHeader>
            <CardContent>
              {renderLoginForm()}

              <Button
                type="button"
                variant="ghost"
                className="w-full mt-4"
                onClick={resetForm}
              >
                العودة لاختيار نوع الحساب
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
