import { mix } from 'polished';

const LIGHT_THEME = {
  background: 'var(--color-white)',
  headerColor: 'var(--color-black)',
  copyColor: 'var(--color-black)',
  linkColor: 'var(--color-blue-700)',
  heroColor: 'var(--color-white)',
  homepageLinkColor: 'var(--color-black)',
  titleColor: 'var(--color-charcoal)',
  titleShadow: 'none',
  hoverColor: 'var(--color-blue-600)',
  activeColor: 'var(--color-blue-400)',
  navLinkColor: 'var(--color-charcoal)',
  highlightColor: 'var(--color-blue-600)',
  auxiliaryColor: 'var(--color-gray-700)',
  borderColor: 'var(--color-charcoal)',
  cardColor: 'var(--color-black)',
  cardLinkColor: 'var(--color-blue-600)',
  cardHeaderColor: 'var(--color-black)',
  cardInfoColor: 'var(--color-charcoal)',
  inputColor: 'var(--color-black)',
  inputCaretColor: 'var(--color-gray-600)',
  inputBorderColor: 'var(--color-gray-600)',
  inputLabelColor: 'var(--color-charcoal)',
  inputAutofillColor: 'var(--color-blue-600)',
  cvHeaderColor: 'var(--color-black)',
  cvSubheaderColor: 'var(--color-black)',
  cvInterfaceColor: 'var(--color-gray-400)',
  cvBorderColor: 'var(--color-charcoal)',
  blogSyntaxColor: 'var(--color-gray-600)',
  overlay5: `${mix(0.95, '#edf2f7', 'rgb(18,18,18)')}`,
  overlay10: 'var(--color-white)',
  overlay15: 'var(--color-white)',
};

const DARK_THEME = {
  background: 'var(--color-black)',
  headerColor: 'var(--color-gray-200)',
  copyColor: 'var(--color-gray-200)',
  linkColor: 'var(--color-blue-400)',
  heroColor: 'var(--color-black)',
  homepageLinkColor: 'var(--color-gray-200)',
  titleColor: 'var(--color-orange-400)',
  titleShadow: '2px 2px rgba(0, 0, 0, 0.18)',
  hoverColor: 'var(--color-blue-600)',
  activeColor: 'var(--color-blue-700)',
  navLinkColor: 'var(--color-orange-400)',
  highlightColor: 'var(--color-blue-600)',
  auxiliaryColor: 'var(--color-gray-400)',
  borderColor: 'var(--color-charcoal)',
  cardColor: 'var(--color-gray-200)',
  cardLinkColor: 'var(--color-blue-600)',
  cardHeaderColor: 'var(--color-orange-200)',
  cardInfoColor: 'var(--color-gray-200)',
  inputColor: 'var(--color-gray-200)',
  inputCaretColor: 'var(--color-gray-400)',
  inputBorderColor: 'var(--color-gray-400)',
  inputLabelColor: 'var(--color-gray-200)',
  inputAutofillColor: 'var(--color-orange-400)',
  cvHeaderColor: 'var(--color-orange-400)',
  cvSubheaderColor: 'var(--color-orange-200)',
  cvInterfaceColor: 'var(--color-charcoal)',
  cvBorderColor: 'var(--color-orange-400)',
  blogSyntaxColor: 'var(--color-orange-400)',
  overlay5: `${mix(0.95, 'rgb(18,18,18)', 'rgb(255, 255, 255)')}`,
  overlay10: `${mix(0.925, 'rgb(18,18,18)', 'rgb(255,255,255)')}`,
  overlay15: `${mix(0.85, 'rgb(18,18,18)', 'rgb(255,255,255)')}`,
};

export const THEMES = {
  light: LIGHT_THEME,
  dark: DARK_THEME,
};

export const DEFAULT_THEME = 'dark';
