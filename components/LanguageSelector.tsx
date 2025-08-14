import { useLanguage } from './LanguageContext';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Globe } from 'lucide-react';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'pt', name: 'PT', fullName: 'Português' },
    { code: 'en', name: 'EN', fullName: 'English' },
    { code: 'es', name: 'ES', fullName: 'Español' },
    { code: 'fr', name: 'FR', fullName: 'Français' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <Select value={language} onValueChange={(value: 'pt' | 'en' | 'es' | 'fr') => setLanguage(value)}>
      <SelectTrigger className="w-auto border-none bg-transparent text-foreground hover:bg-muted px-2 min-w-16">
        <Globe className="w-4 h-4 mr-1" />
        <span className="font-medium">{currentLanguage?.name}</span>
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            <div className="flex items-center gap-2">
              <span className="font-medium">{lang.name}</span>
              <span className="text-muted-foreground text-xs">{lang.fullName}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}