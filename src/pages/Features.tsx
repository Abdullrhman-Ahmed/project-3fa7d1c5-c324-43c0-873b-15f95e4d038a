import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { LevelBadge } from "@/components/ui/level-badge";
import { AchievementBadge } from "@/components/ui/achievement-badge";
import {
  ClipboardCheck,
  TrendingUp,
  Users,
  Award,
  BarChart3,
  Bell,
  Shield,
  Target,
  Star,
  BookOpen,
  MessageSquare,
  FileText,
  Calendar,
  Zap,
  GraduationCap,
} from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      icon: ClipboardCheck,
      title: "نظام التقييم السلوكي",
      description:
        "تقييم شامل ومتعدد المحاور يشمل الانضباط والمشاركة والواجبات والسلوك العام",
      color: "bg-primary",
      details: [
        "تقييم يومي وأسبوعي",
        "محاور متعددة للتقييم",
        "إضافة ملاحظات تفصيلية",
        "سجل تاريخي كامل",
      ],
    },
    {
      icon: TrendingUp,
      title: "نظام النقاط والمستويات",
      description:
        "نظام تحفيزي متدرج يشجع الطلاب على التميز والتطور المستمر",
      color: "bg-secondary",
      details: [
        "خمسة مستويات متدرجة",
        "نقاط تراكمية",
        "شريط تقدم واضح",
        "مكافآت عند الترقية",
      ],
    },
    {
      icon: Award,
      title: "الشارات والإنجازات",
      description:
        "نظام شارات متنوع يكافئ الطلاب على إنجازاتهم المختلفة",
      color: "bg-accent",
      details: [
        "شارات متعددة الفئات",
        "إنجازات قابلة للفتح",
        "عرض الإنجازات للجميع",
        "تحديات أسبوعية",
      ],
    },
    {
      icon: BarChart3,
      title: "التقارير والإحصائيات",
      description:
        "تقارير شاملة ومفصلة تساعد في اتخاذ القرارات التربوية المناسبة",
      color: "bg-purple-600",
      details: [
        "تقارير شهرية وفصلية",
        "مقارنات بين الفصول",
        "رسوم بيانية واضحة",
        "تصدير بصيغة PDF",
      ],
    },
  ];

  const roleFeatures = [
    {
      role: "إدارة المدرسة",
      icon: Target,
      color: "bg-primary",
      features: [
        "لوحة تحكم شاملة",
        "متابعة جميع التقييمات",
        "تقارير إحصائية متقدمة",
        "إدارة السياسات والنقاط",
        "تنبيهات للحالات الخاصة",
        "إنشاء خطط تحسين",
      ],
    },
    {
      role: "المعلم",
      icon: BookOpen,
      color: "bg-secondary",
      features: [
        "واجهة تقييم سريعة",
        "تقييم متعدد المحاور",
        "إضافة ملاحظات",
        "ترشيح للمكافآت",
        "متابعة تطور الطلاب",
        "تواصل مع أولياء الأمور",
      ],
    },
    {
      role: "الطالب",
      icon: GraduationCap,
      color: "bg-purple-600",
      features: [
        "عرض النقاط والمستوى",
        "متابعة الإنجازات",
        "تحديات أسبوعية",
        "رسائل تحفيزية",
        "التقييم الذاتي",
        "ترتيب بين الزملاء",
      ],
    },
    {
      role: "ولي الأمر",
      icon: Users,
      color: "bg-accent",
      features: [
        "متابعة حساب الابن",
        "إشعارات فورية",
        "تقارير مبسطة",
        "نصائح تربوية",
        "تواصل مع المدرسة",
        "سجل السلوك الكامل",
      ],
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-bl from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">مميزات المنصة</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              نظام متكامل لمتابعة السلوك والتحفيز
            </h1>
            <p className="text-xl text-muted-foreground">
              مجموعة شاملة من الأدوات والمميزات المصممة لبناء بيئة تعليمية
              إيجابية ومحفزة
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <Card key={index} className="card-hover overflow-hidden">
                <CardContent className="p-0">
                  <div className={`${feature.color} p-6 text-primary-foreground`}>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary-foreground/20 flex items-center justify-center">
                        <feature.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{feature.title}</h3>
                        <p className="text-sm opacity-90">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                            <Star className="w-3 h-3 text-primary" />
                          </div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Levels System */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">نظام المستويات</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              خمسة مستويات تحفيزية يتدرج فيها الطالب حسب نقاطه المكتسبة
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { level: "beginner" as const, points: "0 - 99" },
              { level: "diligent" as const, points: "100 - 299" },
              { level: "distinguished" as const, points: "300 - 599" },
              { level: "leader" as const, points: "600 - 999" },
              { level: "ambassador" as const, points: "+1000" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <LevelBadge level={item.level} size="lg" className="mb-2" />
                <p className="text-sm text-muted-foreground">{item.points} نقطة</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Badges System */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">الشارات والإنجازات</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              شارات متنوعة تكافئ الطلاب على تميزهم في مختلف الجوانب
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              "discipline",
              "persistent",
              "homework",
              "roleModel",
              "improvement",
              "participation",
              "leadership",
              "teamwork",
              "excellence",
              "punctuality",
            ].map((badge, index) => (
              <AchievementBadge
                key={index}
                type={badge as any}
                size="lg"
                earned
              />
            ))}
          </div>
        </div>
      </section>

      {/* Role Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">مميزات حسب الدور</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              مميزات مخصصة لكل مستخدم حسب دوره في المنظومة التعليمية
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roleFeatures.map((role, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div
                    className={`w-14 h-14 rounded-2xl ${role.color} text-primary-foreground flex items-center justify-center mb-4`}
                  >
                    <role.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{role.role}</h3>
                  <ul className="space-y-2">
                    {role.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">مميزات إضافية</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Bell,
                title: "إشعارات فورية",
                description: "تنبيهات لحظية لجميع الأطراف",
              },
              {
                icon: MessageSquare,
                title: "نظام تواصل",
                description: "قنوات تواصل آمنة ومنظمة",
              },
              {
                icon: FileText,
                title: "تقارير PDF",
                description: "تصدير التقارير بسهولة",
              },
              {
                icon: Calendar,
                title: "سجل تاريخي",
                description: "حفظ كامل لجميع البيانات",
              },
              {
                icon: Shield,
                title: "أمان وخصوصية",
                description: "حماية كاملة للبيانات",
              },
              {
                icon: Target,
                title: "تحديات مخصصة",
                description: "تحديات أسبوعية محفزة",
              },
              {
                icon: TrendingUp,
                title: "تتبع التقدم",
                description: "متابعة التطور بالرسوم",
              },
              {
                icon: Award,
                title: "نظام مكافآت",
                description: "مكافآت معنوية ومادية",
              },
            ].map((feature, index) => (
              <Card key={index} className="card-hover text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Features;
