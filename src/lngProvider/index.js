import thLang from './entries/th-TH';
import enLang from './entries/en-US';
import {addLocaleData} from 'react-intl';

const AppLocale = {
  th: thLang,
  en: enLang
};
addLocaleData(AppLocale.th.data);
addLocaleData(AppLocale.en.data);

export default AppLocale;
