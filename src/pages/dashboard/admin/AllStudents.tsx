import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LevelBadge, getLevelFromPoints } from "@/components/ui/level-badge";
import {
  GraduationCap,
  ArrowRight,
  Award,
  Search,
  Filter,
  Download,
  Star,
} from "lucide-react";

const AllStudents = () => {
  const topStudents = [
    { id: 1, name: "علي سامي محمد", class: "الصف الثالث - أ", points: 890, rank: 1 },
    { id: 2, name: "يوسف إبراهيم علي", class: "الصف الثاني - ب", points: 750, rank: 2 },
    { id: 3, name: "أحمد محمد علي", class: "الصف الثاني - أ", points: 680, rank: 3 },
    { id: 4, name: "محمود حسن أحمد", class: "الصف الثاني - أ", points: 620, rank: 4 },
    { id: 5, name: "كريم عادل حسن", class: "الصف الثالث - ب", points: 580, rank: 5 },
    { id: 6, name: "عمر فاروق محمد", class: "الصف الأول - أ", points: 560, rank: 6 },
    { id: 7, name: "حسام خالد علي", class: "الصف الثالث - أ", points: 540, rank: 7 },
    { id: 8, name: "محمد سامي أحمد", class: "الصف الأول - ب", points: 520, rank: 8 },
    { id: 9, name: "أيمن حسين محمد", class: "الصف الثاني - أ", points: 500, rank: 9 },
    { id: 10, name: "ياسر محمود علي", class: "الصف الثاني - ب", points: 480, rank: 10 },
    { id: 11, name: "سامي أحمد محمد", class: "الصف الثالث - ب", points: 460, rank: 11 },
    { id: 12, name: "خالد يوسف أحمد", class: "الصف الأول - أ", points: 440, rank: 12 },
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
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Award className="w-6 h-6 text-accent" />
            الطلاب المتميزون
          </h1>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="ابحث عن طالب..." className="pr-9 w-48" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 ml-2" />
              تصدير
            </Button>
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {topStudents.slice(0, 3).map((student, index) => (
            <Card
              key={student.id}
              className={`${
                index === 0
                  ? "md:order-2 bg-gradient-to-br from-gold/20 to-accent/20 border-gold/50"
                  : index === 1
                  ? "md:order-1 bg-gradient-to-br from-gray-200/20 to-gray-300/20 border-gray-300/50"
                  : "md:order-3 bg-gradient-to-br from-orange-200/20 to-orange-300/20 border-orange-300/50"
              }`}
            >
              <CardContent className="p-6 text-center">
                <div className="relative inline-block">
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 ${
                      index === 0
                        ? "bg-gradient-to-br from-gold to-accent text-accent-foreground"
                        : index === 1
                        ? "bg-gradient-to-br from-gray-300 to-gray-400 text-foreground"
                        : "bg-gradient-to-br from-orange-300 to-orange-400 text-foreground"
                    }`}
                  >
                    {student.name.charAt(0)}
                  </div>
                  <div
                    className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      index === 0
                        ? "bg-gold text-gold-foreground"
                        : index === 1
                        ? "bg-gray-400 text-white"
                        : "bg-orange-400 text-white"
                    }`}
                  >
                    {student.rank}
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-1">{student.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{student.class}</p>
                <div className="flex items-center justify-center gap-2">
                  <Star className="w-5 h-5 text-accent" />
                  <span className="text-xl font-bold text-primary">{student.points}</span>
                  <span className="text-sm text-muted-foreground">نقطة</span>
                </div>
                <div className="mt-3">
                  <LevelBadge level={getLevelFromPoints(student.points)} showLabel />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Students List */}
        <Card>
          <CardHeader>
            <CardTitle>قائمة الترتيب الكاملة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topStudents.map((student) => (
                <div
                  key={student.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                        student.rank <= 3
                          ? "bg-gradient-to-br from-accent to-gold text-accent-foreground"
                          : "bg-primary/20 text-primary"
                      }`}
                    >
                      {student.rank}
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold">
                      {student.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold">{student.name}</p>
                      <p className="text-sm text-muted-foreground">{student.class}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-left">
                      <p className="font-bold text-primary text-lg">{student.points}</p>
                      <p className="text-xs text-muted-foreground">نقطة</p>
                    </div>
                    <LevelBadge level={getLevelFromPoints(student.points)} showLabel={false} size="sm" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AllStudents;
