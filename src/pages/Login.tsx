import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  GraduationCap,
  School,
  UserCheck,
  Users,
  ChevronLeft,
  Eye,
  EyeOff,
  Mail,
  Lock,
} from "lucide-react";

type UserRole = "admin" | "teacher" | "student" | "parent";

const Login = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to dashboard based on role
    if (selectedRole) {
      window.location.href = `/dashboard/${selectedRole}`;
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
          <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="flex flex-col text-right">
              <span className="font-bold text-2xl text-foreground">WE Schools</span>
              <span className="text-sm text-primary font-medium">قصتك مستقبلك</span>
            </div>
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
              <CardDescription>
                أدخل بيانات الدخول للمتابعة
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">البريد الإلكتروني</Label>
                  <div className="relative">
                    <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="أدخل البريد الإلكتروني"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pr-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">كلمة المرور</Label>
                  <div className="relative">
                    <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="أدخل كلمة المرور"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-input" />
                    <span className="text-muted-foreground">تذكرني</span>
                  </label>
                  <Link to="/forgot-password" className="text-primary hover:underline">
                    نسيت كلمة المرور؟
                  </Link>
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  تسجيل الدخول
                </Button>

                <Button
                  type="button"
                  variant="ghost"
                  className="w-full"
                  onClick={() => setSelectedRole(null)}
                >
                  العودة لاختيار نوع الحساب
                </Button>
              </form>
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
