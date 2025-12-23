import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl">WE Schools</span>
                <span className="text-sm text-sidebar-foreground/70">قصتك مستقبلك</span>
              </div>
            </Link>
            <p className="text-sidebar-foreground/80 leading-relaxed max-w-md">
              منصة رقمية متكاملة لمتابعة وتطوير سلوك الطلاب في مدارس WE للتكنولوجيا التطبيقية، 
              من خلال نظام تقييم ذكي قائم على النقاط والمستويات.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors">
                  عن المنصة
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors">
                  المميزات
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors">
                  تسجيل الدخول
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sidebar-foreground/70">
                <Mail className="w-4 h-4" />
                <span>info@weschools.edu.eg</span>
              </li>
              <li className="flex items-center gap-2 text-sidebar-foreground/70">
                <Phone className="w-4 h-4" />
                <span>+20 123 456 7890</span>
              </li>
              <li className="flex items-center gap-2 text-sidebar-foreground/70">
                <MapPin className="w-4 h-4" />
                <span>القاهرة، مصر</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sidebar-border mt-8 pt-8 text-center text-sidebar-foreground/60">
          <p>© {new Date().getFullYear()} مدارس WE للتكنولوجيا التطبيقية. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
