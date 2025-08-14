import { useState } from 'react';
import newLogo from 'figma:asset/2aa674e95d7bf9371d9475ed3ff3b46c327f4109.png';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, Download } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface NavbarProps {
  setCurrentPage: (page: string) => void;
  currentPage: string;
}

export function Navbar({ setCurrentPage, currentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language } = useLanguage();

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5521964457598', '_blank');
  };

  const handleCurriculumDownload = async () => {
    // URLs dos PDFs do currículo para cada idioma
    const cvUrls = {
      pt: '/pdfs/CV_Leandro_Ciccarelli_PT.pdf',
      en: '/pdfs/CV_Leandro_Ciccarelli_EN.pdf', 
      es: '/pdfs/CV_Leandro_Ciccarelli_ES.pdf',
      fr: '/pdfs/CV_Leandro_Ciccarelli_FR.pdf'
    };
    
    // Usar o PDF correspondente ao idioma atual
    const pdfUrl = cvUrls[language] || cvUrls.pt;
    
    try {
      // Verificar se o arquivo existe antes de tentar baixar
      const response = await fetch(pdfUrl, { method: 'HEAD' });
      
      if (response.ok) {
        // Arquivo existe, proceder com o download
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = `CV_Leandro_Ciccarelli_${language.toUpperCase()}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        // Fallback para o currículo em português se o idioma específico não existir
        const fallbackUrl = cvUrls.pt;
        const fallbackResponse = await fetch(fallbackUrl, { method: 'HEAD' });
        
        if (fallbackResponse.ok) {
          const link = document.createElement('a');
          link.href = fallbackUrl;
          link.download = 'CV_Leandro_Ciccarelli_PT.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          // Se nem o arquivo de fallback existir, mostrar uma mensagem
          console.warn('Arquivo de currículo não encontrado');
          alert('Currículo temporariamente indisponível. Tente novamente mais tarde.');
        }
      }
    } catch (error) {
      // Em caso de erro na verificação, tentar o download direto
      console.warn('Erro ao verificar arquivo:', error);
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = `CV_Leandro_Ciccarelli_${language.toUpperCase()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleLogoClick = () => {
    setCurrentPage('about');
  };

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setIsOpen(false); // Close mobile menu after navigation
  };

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50" role="navigation" aria-label="Navegação principal">
      <div className="max-w-7xl mx-auto px-8 py-1">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={handleLogoClick} 
              className="focus:outline-none focus:ring-2 focus:ring-ring rounded"
              aria-label="Leandro Ciccarelli - Página inicial"
            >
              <img 
                src={newLogo} 
                alt="Leandro Ciccarelli" 
                className="h-8 w-auto hover:opacity-80 transition-opacity cursor-pointer"
              />
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => handleNavClick('about')}
              data-nav="about"
              className={`text-sm uppercase tracking-widest transition-colors px-3 py-2 rounded ${
                currentPage === 'about' 
                  ? 'bg-muted text-foreground' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
              aria-current={currentPage === 'about' ? 'page' : undefined}
              title="Navegar para página Sobre (F1)"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => handleNavClick('projetos')}
              data-nav="projects"
              className={`text-sm uppercase tracking-widest transition-colors px-3 py-2 rounded ${
                currentPage === 'projetos' 
                  ? 'bg-muted text-foreground' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
              aria-current={currentPage === 'projetos' ? 'page' : undefined}
              title="Navegar para página Projetos (F2)"
            >
              {t('nav.projects')}
            </button>
            <Button 
              onClick={handleCurriculumDownload}
              variant="outline"
              className="text-sm uppercase tracking-widest border-border text-foreground hover:bg-muted transition-colors px-4 py-2"
              aria-label="Baixar currículo em PDF"
            >
              <Download className="w-4 h-4 mr-2" aria-hidden="true" />
              {t('nav.curriculum')}
            </Button>
            <Button 
              onClick={handleWhatsAppClick}
              data-nav="contact"
              className="text-sm uppercase tracking-widest bg-foreground text-background hover:bg-foreground/90 transition-colors px-6 py-2"
              title="Entrar em contato via WhatsApp (F3)"
            >
              {t('nav.contact')}
            </Button>
            <LanguageSelector />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-foreground hover:bg-muted"
                  aria-label="Abrir menu de navegação"
                >
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-8 mt-8 pl-6">
                  <button 
                    onClick={() => handleNavClick('about')}
                    className={`text-left text-lg uppercase tracking-widest transition-colors px-3 py-2 rounded ${
                      currentPage === 'about' 
                        ? 'bg-muted text-foreground' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                    aria-current={currentPage === 'about' ? 'page' : undefined}
                  >
                    {t('nav.about')}
                  </button>
                  <button 
                    onClick={() => handleNavClick('projetos')}
                    className={`text-left text-lg uppercase tracking-widest transition-colors px-3 py-2 rounded ${
                      currentPage === 'projetos' 
                        ? 'bg-muted text-foreground' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                    aria-current={currentPage === 'projetos' ? 'page' : undefined}
                  >
                    {t('nav.projects')}
                  </button>
                  <button 
                    onClick={handleCurriculumDownload}
                    className="text-left text-lg uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors flex items-center"
                    aria-label="Baixar currículo em PDF"
                  >
                    <Download className="w-5 h-5 mr-3" aria-hidden="true" />
                    {t('nav.curriculum')}
                  </button>
                  <button 
                    onClick={handleWhatsAppClick}
                    className="text-left text-lg uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t('nav.contact')}
                  </button>
                  <div className="pt-4 border-t border-border">
                    <LanguageSelector />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}