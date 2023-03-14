import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouteDecorator } from '../../src/shared/config/storybook/RouteDecorator/RouteDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import i18n from './i18next.js';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  i18n,
  locale: 'en',
  locales: {
    en: 'English',
    ua: 'Українська',
  },
};

addDecorator(StyleDecorator);
addDecorator(RouteDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
