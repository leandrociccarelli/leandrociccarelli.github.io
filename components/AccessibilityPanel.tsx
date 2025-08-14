import { useState } from 'react';
import { useAccessibility } from './AccessibilityContext';
import { useLanguage } from './LanguageContext';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from './ui/sheet';
import { 
  Accessibility, 
  Type, 
  Brain, 
  Eye, 
  Minus, 
  Plus,
  Keyboard
} from 'lucide-react';

export function AccessibilityPanel() {
  const { t } = useLanguage();
  const { 
    fontSize, 
    setFontSize, 
    isNeurodivergentMode,
    setIsNeurodivergentMode,
    reducedMotion,
    setReducedMotion
  } = useAccessibility();
  const [isOpen, setIsOpen] = useState(false);

  const increaseFontSize = () => {
    const sizes = ['small', 'medium', 'large', 'extra-large'] as const;
    const currentIndex = sizes.indexOf(fontSize);
    if (currentIndex < sizes.length - 1) {
      setFontSize(sizes[currentIndex + 1]);
    }
  };

  const decreaseFontSize = () => {
    const sizes = ['small', 'medium', 'large', 'extra-large'] as const;
    const currentIndex = sizes.indexOf(fontSize);
    if (currentIndex > 0) {
      setFontSize(sizes[currentIndex - 1]);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-4 right-4 z-50 bg-background border-2 border-foreground hover:bg-muted shadow-lg"
          aria-label={t('accessibility.title')}
        >
          <Accessibility className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[400px] overflow-y-auto pl-8">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Accessibility className="h-5 w-5" />
            {t('accessibility.title')}
          </SheetTitle>
        </SheetHeader>
        
        <div className="space-y-6 mt-6">
          {/* Font Size Controls */}
          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-sm font-medium">
              <Type className="h-4 w-4" />
              {t('accessibility.fontSize.title')}
            </h3>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={decreaseFontSize}
                disabled={fontSize === 'small'}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="text-sm capitalize px-3">{fontSize}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={increaseFontSize}
                disabled={fontSize === 'extra-large'}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              {t('accessibility.fontSize.shortcut')} | {t('accessibility.fontSize.current')}: {fontSize}
            </p>
          </div>

          {/* Neurodivergent Mode */}
          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-sm font-medium">
              <Brain className="h-4 w-4" />
              {t('accessibility.neurodivergent.title')}
            </h3>
            <Button
              variant={isNeurodivergentMode ? 'default' : 'outline'}
              onClick={() => setIsNeurodivergentMode(!isNeurodivergentMode)}
              className="w-full"
            >
              {isNeurodivergentMode ? t('accessibility.neurodivergent.deactivate') : t('accessibility.neurodivergent.activate')}
            </Button>
            {isNeurodivergentMode && (
              <div className="p-3 bg-muted rounded-md">
                <p className="text-xs text-muted-foreground">
                  {t('accessibility.neurodivergent.description')}
                </p>
              </div>
            )}
          </div>

          {/* Reduced Motion */}
          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-sm font-medium">
              <Eye className="h-4 w-4" />
              {t('accessibility.motion.title')}
            </h3>
            <Button
              variant={reducedMotion ? 'default' : 'outline'}
              onClick={() => setReducedMotion(!reducedMotion)}
              className="w-full"
            >
              {reducedMotion ? t('accessibility.motion.allow') : t('accessibility.motion.reduce')}
            </Button>
          </div>

          {/* Keyboard Navigation Info */}
          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-sm font-medium">
              <Keyboard className="h-4 w-4" />
              {t('accessibility.keyboard.title')}
            </h3>
            <div className="space-y-2 text-xs text-muted-foreground">
              <div>{t('accessibility.keyboard.tab')}</div>
              <div>{t('accessibility.keyboard.enter')}</div>
              <div>{t('accessibility.fontSize.shortcut')}</div>
            </div>
          </div>

          {/* Screen Reader Info */}
          <div className="space-y-3 p-3 bg-muted rounded-md">
            <h3 className="text-sm font-medium">{t('accessibility.screenReader.title')}</h3>
            <p className="text-xs text-muted-foreground">
              {t('accessibility.screenReader.description')}
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}