import { useLanguage } from './LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const handleBehanceClick = () => {
    window.open('https://behance.net/leandrociccarelli', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/leandrociccarelli', '_blank');
  };

  return (
    <footer className="bg-foreground text-background py-4" role="contentinfo">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-4 md:space-y-0">
            <div className="text-sm">
              {t('footer.portfolio')}
            </div>
            <div className="text-sm">
              {t('footer.contact')}: ux.strategist@leandrociccarelli.com.br
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleBehanceClick}
                className="hover:opacity-80 transition-opacity p-2 rounded focus:ring-2 focus:ring-background/50"
                aria-label="Perfil no Behance"
                title="Ver portfólio no Behance"
              >
                {/* Ícone Behance melhorado */}
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  className="text-background"
                  aria-hidden="true"
                >
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.54 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                </svg>
              </button>
              <button
                onClick={handleLinkedInClick}
                className="hover:opacity-80 transition-opacity p-2 rounded focus:ring-2 focus:ring-background/50"
                aria-label="Perfil no LinkedIn"
                title="Conectar no LinkedIn"
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  className="text-background"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="text-sm text-background/80">
            © 2025 Leandro Ciccarelli. {t('footer.rights')}
          </div>
        </div>
      </div>
    </footer>
  );
}