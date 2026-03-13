import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb = ({ items, className = "" }: BreadcrumbProps) => {
  const { t } = useLanguage();

  return (
    <nav 
      className={`flex items-center space-x-1 text-sm text-muted-foreground ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-1">
        <li>
          <a 
            href="#" 
            className="flex items-center hover:text-foreground transition-colors"
            aria-label={t("Home", "Inicio")}
          >
            <Home className="w-4 h-4" />
          </a>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-1">
            <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
            {item.href && !item.isActive ? (
              <a 
                href={item.href} 
                className="hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <span 
                className={item.isActive ? "text-foreground font-medium" : "text-muted-foreground"}
                aria-current={item.isActive ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;