export function detectLanguage(): string {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || navigator.language || 'en';
  }
  
  export function detectThemeMode(): boolean {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'true' : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  
  export function saveLanguage(newLang: string): void {
    localStorage.setItem('language', newLang);
  }
  
  export function saveThemeMode(newT: boolean): void {
    localStorage.setItem('theme', newT.toString());
  }
  