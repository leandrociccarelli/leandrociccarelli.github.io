import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type FontSize = 'small' | 'medium' | 'large' | 'extra-large';

interface AccessibilityContextType {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  isNeurodivergentMode: boolean;
  setIsNeurodivergentMode: (enabled: boolean) => void;
  reducedMotion: boolean;
  setReducedMotion: (enabled: boolean) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSize] = useState<FontSize>('medium');
  const [isNeurodivergentMode, setIsNeurodivergentMode] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Apply font size changes to document
  useEffect(() => {
    const sizeMap = {
      small: '14px',
      medium: '16px',
      large: '18px',
      'extra-large': '20px'
    };
    
    document.documentElement.style.setProperty('--font-size', sizeMap[fontSize]);
    document.body.style.fontSize = sizeMap[fontSize];
  }, [fontSize]);

  // Apply neurodivergent mode changes
  useEffect(() => {
    if (isNeurodivergentMode) {
      document.documentElement.classList.add('neurodivergent-mode');
    } else {
      document.documentElement.classList.remove('neurodivergent-mode');
    }
  }, [isNeurodivergentMode]);

  // Apply reduced motion
  useEffect(() => {
    if (reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
  }, [reducedMotion]);

  // Basic keyboard navigation setup (only font size controls)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl + + : Increase font size
      if (e.ctrlKey && e.key === '+') {
        e.preventDefault();
        const sizes: FontSize[] = ['small', 'medium', 'large', 'extra-large'];
        const currentIndex = sizes.indexOf(fontSize);
        if (currentIndex < sizes.length - 1) {
          setFontSize(sizes[currentIndex + 1]);
        }
      }

      // Ctrl + - : Decrease font size
      if (e.ctrlKey && e.key === '-') {
        e.preventDefault();
        const sizes: FontSize[] = ['small', 'medium', 'large', 'extra-large'];
        const currentIndex = sizes.indexOf(fontSize);
        if (currentIndex > 0) {
          setFontSize(sizes[currentIndex - 1]);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [fontSize]);

  return (
    <AccessibilityContext.Provider value={{
      fontSize,
      setFontSize,
      isNeurodivergentMode,
      setIsNeurodivergentMode,
      reducedMotion,
      setReducedMotion
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}