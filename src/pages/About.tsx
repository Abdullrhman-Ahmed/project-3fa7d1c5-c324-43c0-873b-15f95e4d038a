import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Users,
  Award,
  TrendingUp,
  Heart,
  Shield,
  BookOpen,
  GraduationCap,
  Lightbulb,
  Star,
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "الانضباط",
      description: "بناء شخصية منضبطة وملتزمة بقيم المجتمع والمدرسة",
    },
    {
      icon: TrendingUp,
      title: "التطور المستمر",
      description: "تشجيع الطلاب على التحسن المستمر في جميع الجوانب",
    },
    {
      icon: Heart,
      title: "القيم الأخلاقية",
      description: "غرس القيم الإيجابية والسلوك الحسن في نفوس الطلاب",
    },
    {
      icon: Users,
      title: "التعاون",
      description: "تعزيز روح الفريق والتعاون بين الطلاب والمعلمين",
    },
  ];

  const objectives = [
    "متابعة سلوك الطلاب بشكل يومي ودقيق",
    "تحفيز الطلاب على التميز من خلال نظام النقاط والمستويات",
    "إشراك أولياء الأمور في العملية التربوية",
    "توفير تقارير شاملة للإدارة لاتخاذ القرارات المناسبة",
    "بناء بيئة تعليمية إيجابية ومحفزة",
    "تطوير مهارات القيادة والمسؤولية لدى الطلاب",
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-bl from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">عن المنصة</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              منصة متابعة وتطوير سلوك الطلاب
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              منصة رقمية متكاملة تهدف إلى بناء جيل منضبط ومتميز من خلال نظام تقييم
              ذكي يشمل جميع أطراف العملية التعليمية
            </p>
            <div className="inline-block bg-gradient-to-l from-primary to-secondary text-primary-foreground px-8 py-4 rounded-2xl">
              <p className="text-2xl font-bold">قصتك مستقبلك</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold">رؤيتنا</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                نسعى في مدارس WE للتكنولوجيا التطبيقية إلى إعداد جيل من الطلاب
                المتميزين أخلاقيًا وسلوكيًا، قادرين على المساهمة الفعالة في بناء
                مجتمعهم ووطنهم. نؤمن بأن التعليم التقني يجب أن يترافق مع بناء
                الشخصية المتكاملة.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                من خلال هذه المنصة، نوفر أداة فعالة لمتابعة وتطوير سلوك الطلاب،
                بمشاركة المعلمين والإدارة وأولياء الأمور في رحلة بناء شخصية
                الطالب.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h2 className="text-3xl font-bold">أهداف المنصة</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {objectives.map((objective, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary">{index + 1}</span>
                  </div>
                  <p className="font-medium">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholders Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">الأطراف المشاركة</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              منظومة متكاملة تجمع جميع أطراف العملية التعليمية في منصة واحدة
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: "إدارة المدرسة",
                description: "إشراف شامل على النظام وإدارة السياسات والتقارير",
                color: "bg-primary",
              },
              {
                icon: Award,
                title: "المعلمون",
                description: "تقييم الطلاب ومتابعة تطورهم السلوكي والأكاديمي",
                color: "bg-secondary",
              },
              {
                icon: GraduationCap,
                title: "الطلاب",
                description: "متابعة النقاط والإنجازات والتحفيز على التميز",
                color: "bg-purple-600",
              },
              {
                icon: Users,
                title: "أولياء الأمور",
                description: "متابعة أداء الأبناء والتواصل مع المدرسة",
                color: "bg-accent",
              },
            ].map((item, index) => (
              <Card key={index} className="card-hover text-center">
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 rounded-2xl ${item.color} text-primary-foreground flex items-center justify-center mx-auto mb-4`}
                  >
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WE Schools Section */}
      <section className="py-16 bg-gradient-to-l from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-6">
              <Star className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              مدارس WE للتكنولوجيا التطبيقية
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              نفخر بكوننا جزءًا من منظومة مدارس WE للتكنولوجيا التطبيقية، التي
              تسعى إلى إعداد كوادر تقنية متميزة تجمع بين المهارات التقنية والقيم
              الأخلاقية الراسخة. نؤمن بأن كل طالب لديه قصة نجاح تنتظره، ومهمتنا
              مساعدته على كتابتها.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
