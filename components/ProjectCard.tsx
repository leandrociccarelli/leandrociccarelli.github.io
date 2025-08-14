import { ProjectIllustration } from './ProjectIllustration';
import { Button } from './ui/button';
import { Download } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface ProjectCardProps {
  title: string;
  impact: string;
  index: number;
  variant?: 'comunica' | 'vertown' | 'isvor';
  onDownload: () => void;
}

export function ProjectCard({ title, impact, index, variant = 'comunica', onDownload }: ProjectCardProps) {
  const { t } = useLanguage();
  
  return (
    <article className="space-y-6">
      {/* Project number */}
      <div className="text-xs uppercase tracking-widest text-muted-foreground">
        {String(index + 1).padStart(2, '0')}
      </div>
      
      {/* Illustration */}
      <ProjectIllustration variant={variant} title={title} />
      
      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-xl font-light leading-tight text-foreground">
          {title}
        </h3>
        
        <div className="editorial-divider-short"></div>
        
        <p className="text-sm leading-relaxed text-muted-foreground">
          {impact}
        </p>

        {/* Download CTA - Primary Button */}
        <Button 
          onClick={onDownload}
          className="text-sm uppercase tracking-widest bg-foreground text-background hover:bg-foreground/90 transition-colors px-4 py-2 w-full"
        >
          <Download className="w-4 h-4 mr-2" />
          {t('projects.download.individual')}
        </Button>
      </div>
    </article>
  );
}