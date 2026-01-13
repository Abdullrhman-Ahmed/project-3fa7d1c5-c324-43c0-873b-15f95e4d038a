import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  GraduationCap,
  ArrowRight,
  Target,
  Plus,
  CheckCircle,
  AlertTriangle,
  Calendar,
  User,
  Save,
} from "lucide-react";

const ImprovementPlan = () => {
  const [planTitle, setPlanTitle] = useState("");

  const studentsNeedingAttention = [
    { id: 1, name: "عمر خالد محمد", class: "الصف الثاني - أ", points: 85, issue: "انخفاض ملحوظ في النقاط" },
    { id: 2, name: "خالد أحمد علي", class: "الصف الثالث - ب", points: 120, issue: "غياب متكرر" },
    { id: 3, name: "سامي محمد حسن", class: "الصف الثاني - ب", points: 95, issue: "سلوك يحتاج متابعة" },
  ];

  const [selectedStudents, setSelectedStudents] = useState<number[]>([]);

  const toggleStudent = (id: number) => {
    setSelectedStudents((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleCreatePlan = () => {
    if (!planTitle) {
      toast.error("الرجاء إدخال عنوان للخطة");
      return;
    }
    if (selectedStudents.length === 0) {
      toast.error("الرجاء اختيار طالب واحد على الأقل");
      return;
    }
    toast.success("تم إنشاء خطة التحسين بنجاح! 📋");
  };

  const planTemplates = [
    { id: 1, title: "خطة متابعة الحضور", description: "للطلاب ذوي الغياب المتكرر", duration: "شهر" },
    { id: 2, title: "خطة تحسين السلوك", description: "للطلاب الذين يحتاجون دعم سلوكي", duration: "أسبوعين" },
    { id: 3, title: "خطة رفع المستوى", description: "للطلاب ذوي النقاط المنخفضة", duration: "شهر" },
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
          <Target className="w-6 h-6 text-primary" />
          إنشاء خطة تحسين
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Plan Creation Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>تفاصيل الخطة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">عنوان الخطة</label>
                  <Input
                    placeholder="مثال: خطة تحسين لطلاب الصف الثاني"
                    value={planTitle}
                    onChange={(e) => setPlanTitle(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">الوصف</label>
                  <textarea
                    className="w-full h-24 p-3 rounded-lg border border-input bg-background resize-none text-sm mt-1"
                    placeholder="وصف تفصيلي لأهداف الخطة..."
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">تاريخ البدء</label>
                    <Input type="date" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">تاريخ الانتهاء</label>
                    <Input type="date" className="mt-1" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Select Students */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  الطلاب المحتاجون للمتابعة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {studentsNeedingAttention.map((student) => (
                    <div
                      key={student.id}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        selectedStudents.includes(student.id)
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => toggleStudent(student.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center ${
                              selectedStudents.includes(student.id)
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted"
                            }`}
                          >
                            {selectedStudents.includes(student.id) && (
                              <CheckCircle className="w-4 h-4" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium">{student.name}</p>
                            <p className="text-sm text-muted-foreground">{student.class}</p>
                          </div>
                        </div>
                        <div className="text-left">
                          <p className="text-destructive font-bold">{student.points} نقطة</p>
                          <p className="text-xs text-muted-foreground">{student.issue}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Goals */}
            <Card>
              <CardHeader>
                <CardTitle>أهداف الخطة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-2">
                  <Input placeholder="أضف هدفاً جديداً..." className="flex-1" />
                  <Button variant="outline" size="icon">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">تحسين نسبة الحضور إلى 95%</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">رفع النقاط بمقدار 50 نقطة</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">تحقيق انضباط سلوكي لمدة أسبوعين</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button variant="hero" className="w-full" onClick={handleCreatePlan}>
              <Save className="w-4 h-4 ml-2" />
              إنشاء الخطة
            </Button>
          </div>

          {/* Templates Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">قوالب جاهزة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {planTemplates.map((template) => (
                  <div
                    key={template.id}
                    className="p-4 rounded-xl border border-border hover:border-primary/50 cursor-pointer transition-all"
                  >
                    <p className="font-medium">{template.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">{template.description}</p>
                    <div className="flex items-center gap-1 mt-2 text-xs text-primary">
                      <Calendar className="w-3 h-3" />
                      المدة: {template.duration}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 mx-auto mb-3 text-primary" />
                <h3 className="font-bold mb-2">خطط نشطة</h3>
                <p className="text-3xl font-bold text-primary">5</p>
                <p className="text-sm text-muted-foreground">خطة تحسين قيد التنفيذ</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ImprovementPlan;
