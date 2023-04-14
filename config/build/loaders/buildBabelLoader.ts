import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import { IBuildOptions } from '../types/config';

interface buildBabelLoaderOptions extends IBuildOptions {
  isTsx?: boolean;
}

export function buildBabelLoader({ isDev, isTsx }: buildBabelLoaderOptions) {
  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              nsSeparator: '~',
              locales: ['en', 'ua'],
              keyAsDefaultValue: true,
            },
          ],
          [
            '@babel/plugin-transform-typescript',
            { isTsx },
          ],
          [
            '@babel/plugin-transform-runtime',
          ],
          isTsx && [
            babelRemovePropsPlugin,
            {
              props: ['data-testid'],
            },
          ],
          isDev && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      },
    },
  };
}
