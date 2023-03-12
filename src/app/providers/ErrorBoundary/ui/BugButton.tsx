import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

// component for testing ErrorBoundary
export const BugButton: FC = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const throwError = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error('Error');
    }
  }, [error]);

  return (
    <Button onClick={throwError}>
      {t('bug_button')}
    </Button>
  );
};
