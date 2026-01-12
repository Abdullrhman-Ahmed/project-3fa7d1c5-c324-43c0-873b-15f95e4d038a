import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  GraduationCap,
  ArrowRight,
  ClipboardCheck,
  Star,
  Send,
} from "lucide-react";

const StudentSelfEvaluation = () => {
  const questions = [
    {
      id: 1,
      question: "كيف تقيم مشاركتك في الفصل اليوم؟",
      options: [
        { value: "excellent", label: "ممتاز - شاركت بفعالية" },
        { value: "good", label: "جيد - شاركت أحيانًا" },
        { value: "fair", label: "مقبول - شاركت قليلاً" },
        { value: "poor", label: "ضعيف - لم أشارك" },
      ],
    },
    {
      id: 2,
      question: "هل أكملت واجباتك المطلوبة؟",
      options: [
        { value: "all", label: "نعم، جميع الواجبات" },
        { value: "most", label: "معظم الواجبات" },
        { value: "some", label: "بعض الواجبات فقط" },
        { value: "none", label: "لم أكمل أي واجب" },
      ],
    },
    {
      id: 3,
      question: "كيف كان انضباطك اليوم؟",
      options: [
        { value: "excellent", label: "ممتاز - التزمت بجميع القواعد" },
        { value: "good", label: "جيد - التزمت بمعظم القواعد" },
        { value: "fair", label: "مقبول - احتجت تذكيرات" },
        { value: "poor", label: "ضعيف - واجهت مشاكل" },
      ],
    },
    {
      id: 4,
      question: "كيف تعاملت مع زملائك اليوم؟",
      options: [
        { value: "excellent", label: "ممتاز - كنت متعاونًا ومحترمًا" },
        { value: "good", label: "جيد - تعاملت بشكل جيد" },
        { value: "fair", label: "مقبول - حدثت بعض المشاكل" },
        { value: "poor", label: "ضعيف - واجهت صعوبات" },
      ],
    },
    {
      id: 5,
      question: "هل تركزت أثناء الدروس؟",
      options: [
        { value: "excellent", label: "ممتاز - تركيز كامل" },
        { value: "good", label: "جيد - تركيز جيد" },
        { value: "fair", label: "مقبول - شرد ذهني أحيانًا" },
        { value: "poor", label: "ضعيف - لم أستطع التركيز" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-l from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="font-bold text-lg hidden sm:block">WE Schools</span>
              </Link>
            </div>
            <Button variant="glass" size="sm" asChild>
              <Link to="/dashboard/student">
                <ArrowRight className="w-4 h-4 ml-2" />
                العودة للوحة التحكم
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <ClipboardCheck className="w-8 h-8 text-primary" />
            التقييم الذاتي اليومي
          </h1>
          <p className="text-muted-foreground mb-8">
            قيّم نفسك بصدق لتتعرف على نقاط قوتك ومجالات التحسين
          </p>

          <div className="space-y-6">
            {questions.map((q) => (
              <Card key={q.id}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Star className="w-5 h-5 text-accent" />
                    {q.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup defaultValue="" className="space-y-3">
                    {q.options.map((option) => (
                      <div key={option.value} className="flex items-center space-x-2 space-x-reverse">
                        <RadioGroupItem value={option.value} id={`${q.id}-${option.value}`} />
                        <Label
                          htmlFor={`${q.id}-${option.value}`}
                          className="cursor-pointer flex-1 p-3 rounded-lg hover:bg-muted transition-colors"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>
            ))}

            {/* Additional Comments */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">ملاحظات إضافية (اختياري)</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="اكتب أي ملاحظات أو أهداف تريد تحقيقها..."
                  rows={4}
                />
              </CardContent>
            </Card>

            <Button size="lg" className="w-full">
              <Send className="w-5 h-5 ml-2" />
              إرسال التقييم الذاتي
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentSelfEvaluation;
