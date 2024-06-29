import i18next from 'i18next';
import deNs1 from './locales/de/common.json';
import enNs1 from './locales/en/common.json';
import { initReactI18next } from 'react-i18next';
import { detectLanguage } from '@features/prefrences/PrefrencesService';

export const defaultNS = 'common';

i18next
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    defaultNS,
    lng: detectLanguage(),
    resources: {
      en: {
        common: enNs1,
      },
      de: {
        common: deNs1,
      },
    },
  });

export default i18next;
