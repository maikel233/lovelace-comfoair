type Dict = Record<string, string>;

const STRINGS: Record<string, Dict> = {
  en: {
    invalid_config: 'Invalid configuration',
    no_entity: 'No climate entity defined',
    detected: 'entities detected',
    advanced: 'Advanced / manual mapping',
  },
  de: {
    invalid_config: 'Ungültige Konfiguration',
    no_entity: 'Keine climate-Entity ausgewählt',
    detected: 'Entities erkannt',
    advanced: 'Erweitert / manuelle Zuordnung',
  },
  nb: {
    invalid_config: 'Ikke gyldig konfigurasjon',
    no_entity: 'Ingen climate-enhet valgt',
    detected: 'enheter funnet',
    advanced: 'Avansert / manuell tilordning',
  },
};

export function localize(key: string, lang?: string): string {
  let code = (lang || 'en').replace(/['"]+/g, '').split('-')[0].toLowerCase();
  if (!STRINGS[code]) code = 'en';
  return STRINGS[code][key] ?? STRINGS.en[key] ?? key;
}
