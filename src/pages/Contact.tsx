import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Building,
  Clock,
} from "lucide-react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      toast({
        title: "تم إرسال الرسالة بنجاح",
        description: "شكرًا لتواصلكم. سيتم الرد على رسالتكم في أقرب وقت ممكن.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsLoading(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: "info@weschools.edu.eg",
      description: "للاستفسارات العامة",
    },
    {
      icon: Phone,
      title: "الهاتف",
      value: "02-12345678",
      description: "من الأحد إلى الخميس",
    },
    {
      icon: MapPin,
      title: "العنوان",
      value: "القاهرة، جمهورية مصر العربية",
      description: "مقر الإدارة العامة",
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      value: "8:00 ص - 4:00 م",
      description: "الأحد - الخميس",
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-bl from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <MessageSquare className="w-4 h-4" />
              <span className="text-sm font-medium">تواصل معنا</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              نسعد بتواصلكم
            </h1>
            <p className="text-xl text-muted-foreground">
              لأي استفسارات أو اقتراحات، يسعدنا تلقي رسائلكم والرد عليها في
              أقرب وقت ممكن
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="w-5 h-5 text-primary" />
                    نموذج التواصل
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">الاسم الكامل</Label>
                        <div className="relative">
                          <User className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input
                            id="name"
                            type="text"
                            placeholder="أدخل اسمك الكامل"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="pr-10"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">البريد الإلكتروني</Label>
                        <div className="relative">
                          <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="أدخل بريدك الإلكتروني"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="pr-10"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">موضوع الرسالة</Label>
                      <div className="relative">
                        <MessageSquare className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="subject"
                          type="text"
                          placeholder="موضوع الرسالة"
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({ ...formData, subject: e.target.value })
                          }
                          className="pr-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">نص الرسالة</Label>
                      <textarea
                        id="message"
                        rows={6}
                        placeholder="اكتب رسالتك هنا..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        "جاري الإرسال..."
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          إرسال الرسالة
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">{info.title}</h3>
                        <p className="text-lg">{info.value}</p>
                        <p className="text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* School Info */}
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                      <Building className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold">مدارس WE للتكنولوجيا التطبيقية</h3>
                      <p className="text-sm text-muted-foreground">قصتك مستقبلك</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    نسعى دائمًا للتواصل الفعال مع جميع أطراف العملية التعليمية.
                    جميع الرسائل تصل مباشرة إلى الجهة المختصة ويتم الرد عليها
                    خلال يومي عمل.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-4">ملاحظة هامة</h3>
            <p className="text-muted-foreground">
              للاستفسارات المتعلقة بحسابات الطلاب أو المعلمين، يرجى التوجه
              مباشرة إلى إدارة المدرسة مع إحضار المستندات الرسمية المطلوبة. لا
              يتم معالجة طلبات إنشاء الحسابات عبر هذا النموذج.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
