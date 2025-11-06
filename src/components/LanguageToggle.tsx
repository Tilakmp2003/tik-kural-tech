import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export const LanguageToggle = () => {
  const [language, setLanguage] = useState<"en" | "ta">("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ta" : "en");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="gap-2 font-medium"
    >
      <Globe className="h-4 w-4" />
      <span className={language === "ta" ? "font-tamil" : ""}>
        {language === "en" ? "தமிழ்" : "EN"}
      </span>
    </Button>
  );
};
