import { ProjectCard } from "./ProjectCard";
import { useLanguage } from "./LanguageContext";

export function CaseStudiesSection() {
  const { t, language } = useLanguage();

  const handleDownloadCase = async (caseSlug: string) => {
    // URLs dos PDFs dos cases para cada idioma
    const caseUrls = {
      'comunica-in': {
        pt: '/pdfs/cases/Case_Comunica_In_PT.pdf',
        en: '/pdfs/cases/Case_Comunica_In_EN.pdf',
        es: '/pdfs/cases/Case_Comunica_In_ES.pdf',
        fr: '/pdfs/cases/Case_Comunica_In_FR.pdf'
      },
      'vertown': {
        pt: '/pdfs/cases/Case_Vertown_PT.pdf',
        en: '/pdfs/cases/Case_Vertown_EN.pdf',
        es: '/pdfs/cases/Case_Vertown_ES.pdf',
        fr: '/pdfs/cases/Case_Vertown_FR.pdf'
      },
      'isvor': {
        pt: '/pdfs/cases/Case_Isvor_PT.pdf',
        en: '/pdfs/cases/Case_Isvor_EN.pdf',
        es: '/pdfs/cases/Case_Isvor_ES.pdf',
        fr: '/pdfs/cases/Case_Isvor_FR.pdf'
      }
    };

    const currentCaseUrls = caseUrls[caseSlug as keyof typeof caseUrls];
    if (!currentCaseUrls) return;
    
    const pdfUrl = currentCaseUrls[language] || currentCaseUrls.pt;
    
    try {
      // Verificar se o arquivo existe antes de tentar baixar
      const response = await fetch(pdfUrl, { method: 'HEAD' });
      
      if (response.ok) {
        // Arquivo existe, proceder com o download
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = `Case_${caseSlug.replace('-', '_')}_${language.toUpperCase()}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        // Fallback para o case em português se o idioma específico não existir
        const fallbackUrl = currentCaseUrls.pt;
        const fallbackResponse = await fetch(fallbackUrl, { method: 'HEAD' });
        
        if (fallbackResponse.ok) {
          const link = document.createElement('a');
          link.href = fallbackUrl;
          link.download = `Case_${caseSlug.replace('-', '_')}_PT.pdf`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          console.warn('Arquivo de case não encontrado');
          alert('Case study temporariamente indisponível. Tente novamente mais tarde.');
        }
      }
    } catch (error) {
      // Em caso de erro na verificação, tentar o download direto
      console.warn('Erro ao verificar arquivo:', error);
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = `Case_${caseSlug.replace('-', '_')}_${language.toUpperCase()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const projects = [
    {
      title: t('projects.case1.title'),
      impact: t('projects.case1.description'),
      variant: "comunica" as const,
      slug: "comunica-in"
    },
    {
      title: t('projects.case2.title'),
      impact: t('projects.case2.description'),
      variant: "vertown" as const,
      slug: "vertown"
    },
    {
      title: t('projects.case3.title'),
      impact: t('projects.case3.description'),
      variant: "isvor" as const,
      slug: "isvor"
    }
  ];

  return (
    <section id="projetos" className="pt-2 pb-8" role="main" aria-labelledby="projects-title">
      <div className="max-w-5xl mx-auto px-8">
        {/* Section header */}
        <div className="mb-8">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            {t('projects.section')}
          </div>
          
          <div className="mb-6">
            <h1 id="projects-title" className="text-4xl lg:text-5xl font-light leading-none text-foreground whitespace-pre-line">
              {t('projects.title')}
            </h1>
          </div>
          
          <div className="editorial-divider-short"></div>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20" role="list" aria-label="Lista de casos de estudo">
          {projects.map((project, index) => (
            <div key={index} role="listitem">
              <ProjectCard
                index={index}
                title={project.title}
                impact={project.impact}
                variant={project.variant}
                onDownload={() => handleDownloadCase(project.slug)}
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="editorial-divider"></div>
    </section>
  );
}