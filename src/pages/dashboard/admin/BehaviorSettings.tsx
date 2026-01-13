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
  Shield,
  Plus,
  Minus,
  Save,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

const BehaviorSettings = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "الانضباط", positivePoints: 5, negativePoints: -5, active: true },
    { id: 2, name: "المشاركة", positivePoints: 10, negativePoints: -3, active: true },
    { id: 3, name: "الواجبات", positivePoints: 10, negativePoints: -10, active: true },
    { id: 4, name: "السلوك العام", positivePoints: 5, negativePoints: -5, active: true },
    { id: 5, name: "التعاون", positivePoints: 8, negativePoints: -4, active: true },
  ]);

  const handleSave = () => {
    toast.success("تم حفظ إعدادات السلوك بنجاح! ✅");
  };

  const levels = [
    { name: "مبتدئ", minPoints: 0, maxPoints: 199, color: "bg-gray-400" },
    { name: "متميز", minPoints: 200, maxPoints: 399, color: "bg-blue-500" },
    { name: "متفوق", minPoints: 400, maxPoints: 599, color: "bg-green-500" },
    { name: "قائد", minPoints: 600, maxPoints: 999, color: "bg-purple-500" },
    { name: "نجم", minPoints: 1000, maxPoints: 9999, color: "bg-gold" },
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
          <Shield className="w-6 h-6 text-primary" />
          إعدادات السلوك والتقييم
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Evaluation Categories */}
          <Card>
            <CardHeader>
              <CardTitle>محاور التقييم</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={`p-4 rounded-xl border ${
                    category.active ? "border-border" : "border-border opacity-50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium">{category.name}</span>
                    <Switch
                      checked={category.active}
                      onCheckedChange={(checked) =>
                        setCategories((prev) =>
                          prev.map((c) => (c.id === category.id ? { ...c, active: checked } : c))
                        )
                      }
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Plus className="w-4 h-4 text-success" />
                      <Input
                        type="number"
                        value={category.positivePoints}
                        onChange={(e) =>
                          setCategories((prev) =>
                            prev.map((c) =>
                              c.id === category.id
                                ? { ...c, positivePoints: parseInt(e.target.value) || 0 }
                                : c
                            )
                          )
                        }
                        className="w-20"
                      />
                      <span className="text-sm text-muted-foreground">نقطة</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Minus className="w-4 h-4 text-destructive" />
                      <Input
                        type="number"
                        value={Math.abs(category.negativePoints)}
                        onChange={(e) =>
                          setCategories((prev) =>
                            prev.map((c) =>
                              c.id === category.id
                                ? { ...c, negativePoints: -(parseInt(e.target.value) || 0) }
                                : c
                            )
                          )
                        }
                        className="w-20"
                      />
                      <span className="text-sm text-muted-foreground">نقطة</span>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                <Plus className="w-4 h-4 ml-2" />
                إضافة محور جديد
              </Button>
            </CardContent>
          </Card>

          {/* Levels Configuration */}
          <Card>
            <CardHeader>
              <CardTitle>مستويات الطلاب</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {levels.map((level, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl border border-border flex items-center gap-4"
                >
                  <div className={`w-10 h-10 rounded-full ${level.color}`}></div>
                  <div className="flex-1">
                    <p className="font-medium">{level.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {level.minPoints} - {level.maxPoints} نقطة
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    تعديل
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Alerts Configuration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                إعدادات التنبيهات
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">تنبيه انخفاض النقاط</p>
                  <p className="text-sm text-muted-foreground">عند انخفاض نقاط الطالب بنسبة</p>
                </div>
                <div className="flex items-center gap-2">
                  <Input type="number" defaultValue={20} className="w-16" />
                  <span className="text-sm">%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">تنبيه الغياب</p>
                  <p className="text-sm text-muted-foreground">بعد غياب متتالي لمدة</p>
                </div>
                <div className="flex items-center gap-2">
                  <Input type="number" defaultValue={3} className="w-16" />
                  <span className="text-sm">أيام</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">تنبيه السلوك السلبي</p>
                  <p className="text-sm text-muted-foreground">عند تكرار التقييم السلبي</p>
                </div>
                <div className="flex items-center gap-2">
                  <Input type="number" defaultValue={3} className="w-16" />
                  <span className="text-sm">مرات</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                إعدادات الإشعارات
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">إشعار ولي الأمر</p>
                  <p className="text-sm text-muted-foreground">عند كل تقييم</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">ملخص يومي لولي الأمر</p>
                  <p className="text-sm text-muted-foreground">إرسال ملخص نهاية اليوم</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">إشعار ترقية المستوى</p>
                  <p className="text-sm text-muted-foreground">عند صعود الطالب لمستوى جديد</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">إشعار الشارات</p>
                  <p className="text-sm text-muted-foreground">عند حصول الطالب على شارة</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </div>

        <Button variant="hero" className="w-full mt-6" onClick={handleSave}>
          <Save className="w-4 h-4 ml-2" />
          حفظ جميع الإعدادات
        </Button>
      </main>
    </div>
  );
};

export default BehaviorSettings;
