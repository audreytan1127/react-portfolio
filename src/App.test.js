import { render, screen } from '@testing-library/react';
import Hero from './components/hero/hero';

test('renders learn react link', () => {
  render(<Hero />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
