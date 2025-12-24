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
      {/* WE Schools Logo Icon */}
      <div 
        className="flex items-center justify-center rounded-xl bg-gradient-to-br from-[#5B2C6F] to-[#7D3C98] p-2"
        style={{ width: currentSize.logo, height: currentSize.logo }}
      >
        <svg 
          viewBox="0 0 60 60" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Code brackets symbol */}
          <path 
            d="M18 20L8 30L18 40" 
            stroke="white" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M42 20L52 30L42 40" 
            stroke="white" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          {/* Person icon in center */}
          <circle cx="30" cy="24" r="6" stroke="white" strokeWidth="2.5" fill="none"/>
          <path 
            d="M20 42C20 36.477 24.477 32 30 32C35.523 32 40 36.477 40 42" 
            stroke="white" 
            strokeWidth="2.5" 
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

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
