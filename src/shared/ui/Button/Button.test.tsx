import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button', () => {
  test('button with text', () => {
    render(<Button>Button</Button>);
    expect(screen.getByText('Button')).toBeInTheDocument();
  });

  test('button with "clear" class (theme)', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Button</Button>);
    expect(screen.getByText('Button')).toHaveClass('clear');
    screen.debug();
  });
});
