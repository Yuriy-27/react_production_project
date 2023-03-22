import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface ILangSwitcherProps {
  className?: string;
  shortName?: boolean;
}

export const LangSwitcher = memo((props: ILangSwitcherProps) => {
  const { className, shortName } = props;
  const [t, i18n] = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');
  };

  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
    >
      {t(shortName ? 'short_lang_name' : 'language')}
    </Button>
  );
});
