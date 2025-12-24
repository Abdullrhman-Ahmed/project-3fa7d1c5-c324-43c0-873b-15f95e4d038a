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
  const sizes = {
    sm: { logo: 40, text: "text-sm" },
    md: { logo: 48, text: "text-base" },
    lg: { logo: 56, text: "text-lg" },
  };

  const currentSize = sizes[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* WE Schools Official Logo */}
      <img 
        src={weSchoolsLogo} 
        alt="مدارس WE للتكنولوجيا التطبيقية"
        style={{ 
          width: currentSize.logo, 
          height: currentSize.logo,
          objectFit: "contain"
        }}
        className="flex-shrink-0"
      />

      {/* Text */}
      {showText && (
        <div className="flex flex-col leading-tight" style={{ color: textColor }}>
          <span className={`font-bold ${currentSize.text}`}>
            مدارس WE
          </span>
          <span className={`text-xs opacity-70`}>
            للتكنولوجيا التطبيقية
          </span>
        </div>
      )}
    </div>
  );
};

export { WESchoolsLogo };
