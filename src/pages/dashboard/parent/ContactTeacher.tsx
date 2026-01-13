import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  GraduationCap,
  ArrowRight,
  MessageSquare,
  User,
  Send,
  Clock,
  CheckCircle,
} from "lucide-react";

const ContactTeacher = () => {
  const [message, setMessage] = useState("");

  const teachers = [
    { id: 1, name: "أ. محمد أحمد", subject: "الرياضيات", lastMessage: "شكراً لتواصلك", time: "منذ ساعة" },
    { id: 2, name: "أ. فاطمة علي", subject: "اللغة العربية", lastMessage: "سيتم المتابعة", time: "أمس" },
    { id: 3, name: "أ. أحمد حسن", subject: "العلوم", lastMessage: "تم استلام الرسالة", time: "منذ 3 أيام" },
    { id: 4, name: "أ. سارة محمد", subject: "اللغة الإنجليزية", lastMessage: "", time: "" },
  ];

  const [selectedTeacher, setSelectedTeacher] = useState<number | null>(null);

  const handleSendMessage = () => {
    if (!selectedTeacher) {
      toast.error("الرجاء اختيار المعلم أولاً");
      return;
    }
    if (!message.trim()) {
      toast.error("الرجاء كتابة رسالة");
      return;
    }
    toast.success("تم إرسال الرسالة بنجاح! ✉️");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-l from-accent to-primary text-primary-foreground">
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
              <Link to="/dashboard/parent">
                <ArrowRight className="w-4 h-4 ml-2" />
                العودة للوحة التحكم
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <MessageSquare className="w-6 h-6 text-primary" />
          التواصل مع المعلمين
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Teachers List */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">المعلمون</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 p-4">
              {teachers.map((teacher) => (
                <div
                  key={teacher.id}
                  className={`p-4 rounded-xl cursor-pointer transition-all ${
                    selectedTeacher === teacher.id
                      ? "bg-primary/10 border-2 border-primary"
                      : "bg-muted/50 hover:bg-muted border-2 border-transparent"
                  }`}
                  onClick={() => setSelectedTeacher(teacher.id)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold">
                      {teacher.name.charAt(2)}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{teacher.name}</p>
                      <p className="text-sm text-muted-foreground">{teacher.subject}</p>
                    </div>
                    {teacher.lastMessage && (
                      <CheckCircle className="w-4 h-4 text-success" />
                    )}
                  </div>
                  {teacher.lastMessage && (
                    <div className="mt-2 pr-13 text-sm text-muted-foreground flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      {teacher.time}
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Message Area */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg">
                {selectedTeacher
                  ? `محادثة مع ${teachers.find((t) => t.id === selectedTeacher)?.name}`
                  : "اختر معلماً للتواصل"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedTeacher ? (
                <div className="space-y-4">
                  {/* Previous Messages (Placeholder) */}
                  <div className="h-64 rounded-xl bg-muted/30 p-4 overflow-y-auto space-y-4">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm">
                        أ
                      </div>
                      <div className="bg-primary/10 rounded-xl p-3 max-w-xs">
                        <p className="text-sm">مرحباً، كيف يمكنني مساعدتك؟</p>
                        <p className="text-xs text-muted-foreground mt-1">منذ يوم</p>
                      </div>
                    </div>
                    <div className="flex gap-3 justify-end">
                      <div className="bg-secondary/10 rounded-xl p-3 max-w-xs">
                        <p className="text-sm">شكراً لك، أردت الاستفسار عن أداء ابني في الرياضيات</p>
                        <p className="text-xs text-muted-foreground mt-1">منذ يوم</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-sm">
                        م
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm">
                        أ
                      </div>
                      <div className="bg-primary/10 rounded-xl p-3 max-w-xs">
                        <p className="text-sm">أحمد يتميز في المشاركة ويحتاج لمزيد من التركيز على الواجبات المنزلية</p>
                        <p className="text-xs text-muted-foreground mt-1">منذ ساعة</p>
                      </div>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="flex gap-2">
                    <Input
                      placeholder="اكتب رسالتك هنا..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="flex-1"
                    />
                    <Button variant="hero" onClick={handleSendMessage}>
                      <Send className="w-4 h-4" />
                      إرسال
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-16 text-muted-foreground">
                  <MessageSquare className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>اختر معلماً من القائمة للبدء في المحادثة</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ContactTeacher;
