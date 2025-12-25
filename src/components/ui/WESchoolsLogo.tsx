import weSchoolsLogo from "@/assets/we-schools-logo.png";

interface WESchoolsLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  textColor?: string;
}

const WESchoolsLogo = ({ 
  className = "", 
  size = "md", 
  showText = true,
  textColor = "currentColor"
}: WESchoolsLogoProps) => {
  // Width-based sizing between 140px and 160px as requested
  const sizes = {
    sm: { logoWidth: 50 },
    md: { logoWidth: 60 },
    lg: { logoWidth: 70 },
  };

  const currentSize = sizes[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* WE Schools Official Logo */}
      <img 
        src={weSchoolsLogo} 
        alt="مدارس WE للتكنولوجيا التطبيقية"
        style={{ 
          width: currentSize.logoWidth,
          height: "auto",
          objectFit: "contain"
        }}
        className="flex-shrink-0"
      />

      {/* Text */}
      {showText && (
        <div className="flex flex-col leading-tight" style={{ color: textColor }}>
          <span className="font-bold text-sm">
            مدارس WE
          </span>
          <span className="text-xs text-muted-foreground">
            للتكنولوجيا التطبيقية
          </span>
        </div>
      )}
    </div>
  );
};

export { WESchoolsLogo };
