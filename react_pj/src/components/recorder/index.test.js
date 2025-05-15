import { render, screen } from '@testing-library/react';
import Record from './index';

test('renders learn react link', () => {
  render(<Record />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
