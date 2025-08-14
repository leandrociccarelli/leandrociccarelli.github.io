import profileImage from 'figma:asset/8388c9854e3ac5a210a8a0a8438fc9a91bc3195e.png';
import { Button } from './ui/button';
import { Search, Target, Palette, Settings } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export function AboutPage() {
  const { t, getSkillItems } = useLanguage() as any;

  const skills = [
    {
      category: t('about.skills.research'),
      icon: Search,
      items: getSkillItems('research')
    },
    {
      category: t('about.skills.strategy'),
      icon: Target,
      items: getSkillItems('strategy')
    },
    {
      category: t('about.skills.design'),
      icon: Palette,
      items: getSkillItems('design')
    },
    {
      category: t('about.skills.tools'),
      icon: Settings,
      items: getSkillItems('tools')
    }
  ];

  const handleLattesClick = () => {
    window.open('http://lattes.cnpq.br/2322904187959546', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Skip to main content anchor */}
      <div id="main-content" className="sr-only">Início do conteúdo principal</div>
      
      {/* Hero */}
      <section className="pt-2 pb-8" aria-labelledby="about-title">
        <div className="max-w-5xl mx-auto px-8">
          <div className="mb-4">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              {t('about.section')}
            </div>
            <div className="editorial-divider-short"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <h1 id="about-title" className="text-4xl lg:text-6xl font-light leading-none tracking-tight mb-8 text-foreground">
                {t('about.title')}
              </h1>
              
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-foreground">
                  {t('about.description1')}
                </p>
                
                <p className="text-muted-foreground">
                  {t('about.description2')}
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-4">
              <figure className="aspect-[3/4] w-full max-w-sm bg-muted overflow-hidden">
                <img
                  src={profileImage}
                  alt="Leandro Ciccarelli, Product Design Leader sorrindo, foto profissional em preto e branco"
                  className="w-full h-full object-cover grayscale"
                />
                <figcaption className="text-xs uppercase tracking-widest text-muted-foreground mt-4">
                  {t('about.photo.caption')}
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <div className="editorial-divider" role="separator" aria-hidden="true"></div>

      {/* Skills */}
      <section className="pt-2 pb-8" aria-labelledby="skills-title">
        <div className="max-w-5xl mx-auto px-8">
          <div className="mb-8">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              {t('about.skills.section')}
            </div>
            <h2 id="skills-title" className="text-3xl lg:text-4xl font-light mb-8 text-foreground">
              {t('about.skills.title')}
            </h2>
            <div className="editorial-divider-short"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16" role="list" aria-label="Lista de competências profissionais">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={index} className="space-y-6" role="listitem">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2" aria-label={`Competência ${index + 1} de ${skills.length}`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-muted flex items-center justify-center" aria-hidden="true">
                        <IconComponent className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <h3 className="text-lg font-medium text-foreground">
                        {skill.category}
                      </h3>
                    </div>
                  </div>
                  
                  <ul className="space-y-2" role="list">
                    {skill.items.map((item: string, itemIndex: number) => (
                      <li key={itemIndex} className="text-muted-foreground leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="editorial-divider" role="separator" aria-hidden="true"></div>

      {/* Research & Publications */}
      <section className="pt-2 pb-8" aria-labelledby="research-title">
        <div className="max-w-4xl mx-auto px-8">
          <div className="mb-8">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              {t('about.research.section')}
            </div>
            <h2 id="research-title" className="text-3xl lg:text-4xl font-light mb-8 text-foreground">
              {t('about.research.title')}
            </h2>
            <div className="editorial-divider-short"></div>
          </div>
          
          <p className="text-lg leading-relaxed text-foreground mb-16">
            {t('about.research.description')}
          </p>
          
          <div className="space-y-12" role="list" aria-label="Lista de publicações e trabalhos acadêmicos">
            <article className="border-l-2 border-border pl-8" role="listitem">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                {t('about.publication.book.type')}
              </div>
              <h3 className="text-xl font-light mb-4 text-foreground">
                {t('about.publication.book.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('about.publication.book.description')}
              </p>
            </article>
            
            <article className="border-l-2 border-border pl-8" role="listitem">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                {t('about.publication.article.type')}
              </div>
              <h3 className="text-xl font-light mb-4 text-foreground">
                {t('about.publication.article.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('about.publication.article.description')}
              </p>
            </article>
            
            <article className="border-l-2 border-border pl-8" role="listitem">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                {t('about.publication.workshop.type')}
              </div>
              <h3 className="text-xl font-light mb-4 text-foreground">
                {t('about.publication.workshop.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('about.publication.workshop.description')}
              </p>
            </article>
          </div>
          
          <div className="mt-16">
            <Button 
              onClick={handleLattesClick}
              variant="outline"
              className="text-sm uppercase tracking-widest border-border text-foreground hover:bg-muted transition-colors px-8 py-3"
              aria-label="Abrir currículo Lattes completo em nova janela"
            >
              {t('about.lattes.button')}
            </Button>
          </div>
        </div>
      </section>

      <div className="editorial-divider" role="separator" aria-hidden="true"></div>
    </div>
  );
}