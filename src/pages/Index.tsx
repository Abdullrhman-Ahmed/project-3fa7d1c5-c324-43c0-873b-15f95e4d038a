import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MainLayout } from "@/components/layout/MainLayout";
import { LevelBadge } from "@/components/ui/level-badge";
import { AchievementBadge } from "@/components/ui/achievement-badge";
import { ProgressBar } from "@/components/ui/progress-bar";
import {
  GraduationCap,
  Users,
  Shield,
  TrendingUp,
  Award,
  BookOpen,
  ChevronLeft,
  Star,
  Target,
  Sparkles,
  School,
  UserCheck,
  ClipboardCheck,
  BarChart3,
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: School,
      title: "إدارة المدرسة",
      description: "لوحة تحكم شاملة لمتابعة جميع الطلاب والتقييمات والتقارير",
      color: "bg-primary",
    },
    {
      icon: UserCheck,
      title: "المعلم",
      description: "واجهة سهلة وسريعة لتقييم الطلاب ومتابعة تطورهم",
      color: "bg-secondary",
    },
    {
      icon: GraduationCap,
      title: "الطالب",
      description: "لوحة شخصية لعرض النقاط والمستويات والإنجازات",
      color: "bg-purple-600",
    },
    {
      icon: Users,
      title: "ولي الأمر",
      description: "متابعة حساب الابن والتقييمات وتلقي الإشعارات الفورية",
      color: "bg-accent",
    },
  ];

  const levels = [
    { level: "beginner" as const, label: "مبتدئ", points: "0-99" },
    { level: "diligent" as const, label: "مجتهد", points: "100-299" },
    { level: "distinguished" as const, label: "متميز", points: "300-599" },
    { level: "leader" as const, label: "قائد", points: "600-999" },
    { level: "ambassador" as const, label: "سفير المدرسة", points: "+1000" },
  ];

  const stats = [
    { value: "5000+", label: "طالب مسجل" },
    { value: "200+", label: "معلم متميز" },
    { value: "50+", label: "مدرسة" },
    { value: "95%", label: "رضا المستخدمين" },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 via-secondary/5 to-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary)/0.15),transparent_50%)]" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-20 h-20 rounded-full bg-primary/10 float-animation" style={{ animationDelay: "0s" }} />
        <div className="absolute top-40 left-32 w-16 h-16 rounded-full bg-secondary/10 float-animation" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-32 right-40 w-24 h-24 rounded-full bg-accent/10 float-animation" style={{ animationDelay: "2s" }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">منصة تعليمية متكاملة</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="text-foreground">مدارس</span>{" "}
              <span className="text-gradient">WE</span>{" "}
              <span className="text-foreground">للتكنولوجيا</span>
              <br />
              <span className="text-foreground">التطبيقية</span>
            </h1>

            {/* Slogan */}
            <p className="text-2xl md:text-3xl font-bold text-primary mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              قصتك مستقبلك
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
              منصة رقمية متكاملة لمتابعة وتطوير سلوك الطلاب من خلال نظام تقييم ذكي
              قائم على النقاط والمستويات والإنجازات
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/login">
                  ابدأ الآن
                  <ChevronLeft className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/about">
                  تعرف على المزيد
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">أربعة أدوار متكاملة</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              منصة واحدة تجمع الإدارة والمعلمين والطلاب وأولياء الأمور في نظام متكامل
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="card-hover group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 rounded-2xl ${feature.color} text-primary-foreground flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gamification Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                نظام تحفيز ذكي
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                نظام متكامل من النقاط والمستويات والشارات لتحفيز الطلاب على التميز
                السلوكي والأكاديمي
              </p>

              {/* Levels */}
              <div className="space-y-4 mb-8">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  المستويات
                </h3>
                <div className="flex flex-wrap gap-2">
                  {levels.map((level, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <LevelBadge level={level.level} />
                      <span className="text-xs text-muted-foreground">({level.points})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Badges */}
              <div className="space-y-4">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  الشارات والإنجازات
                </h3>
                <div className="flex flex-wrap gap-4">
                  <AchievementBadge type="discipline" size="sm" />
                  <AchievementBadge type="persistent" size="sm" />
                  <AchievementBadge type="homework" size="sm" />
                  <AchievementBadge type="roleModel" size="sm" />
                  <AchievementBadge type="improvement" size="sm" />
                </div>
              </div>
            </div>

            {/* Demo Card */}
            <div>
              <Card className="card-hover">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground text-2xl font-bold">
                      أ
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">أحمد محمد</h3>
                      <p className="text-muted-foreground">الصف الثاني - الفصل أ</p>
                    </div>
                    <LevelBadge level="distinguished" className="mr-auto" />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">النقاط الحالية</span>
                        <span className="font-bold text-primary">450 نقطة</span>
                      </div>
                      <ProgressBar value={450} max={600} variant="default" />
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="text-center p-4 bg-muted rounded-xl">
                        <p className="text-2xl font-bold text-primary">28</p>
                        <p className="text-sm text-muted-foreground">يوم انضباط</p>
                      </div>
                      <div className="text-center p-4 bg-muted rounded-xl">
                        <p className="text-2xl font-bold text-secondary">5</p>
                        <p className="text-sm text-muted-foreground">شارات مكتسبة</p>
                      </div>
                    </div>

                    <div className="flex justify-center gap-3 pt-4">
                      <AchievementBadge type="discipline" size="sm" showLabel={false} />
                      <AchievementBadge type="persistent" size="sm" showLabel={false} />
                      <AchievementBadge type="homework" size="sm" showLabel={false} />
                      <AchievementBadge type="participation" size="sm" showLabel={false} earned={false} />
                      <AchievementBadge type="leadership" size="sm" showLabel={false} earned={false} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Criteria Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">محاور التقييم</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              نظام تقييم شامل يغطي جميع جوانب السلوك والأداء الأكاديمي
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "الانضباط", description: "الالتزام بقواعد المدرسة والحضور المنتظم", color: "text-blue-500" },
              { icon: Star, title: "المشاركة", description: "التفاعل الإيجابي داخل الحصص الدراسية", color: "text-yellow-500" },
              { icon: BookOpen, title: "الواجبات", description: "الالتزام بتسليم الواجبات في موعدها", color: "text-purple-500" },
              { icon: Target, title: "السلوك العام", description: "الأخلاق والتعامل مع الزملاء والمعلمين", color: "text-green-500" },
            ].map((item, index) => (
              <Card key={index} className="card-hover text-center">
                <CardContent className="p-6">
                  <item.icon className={`w-12 h-12 mx-auto mb-4 ${item.color}`} />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ابدأ رحلتك نحو التميز
            </h2>
            <p className="text-xl mb-8 opacity-90">
              انضم إلى آلاف الطلاب والمعلمين وأولياء الأمور في بناء مستقبل أفضل
            </p>
            <Button variant="glass" size="xl" asChild>
              <Link to="/login">
                سجل دخولك الآن
                <ChevronLeft className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
