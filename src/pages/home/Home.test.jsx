import { render, screen } from '@testing-library/react';
import Home from './Home';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn())
}));

test('renders learn react link', () => {
  render(<Home />);
  const linkElement1 = screen.getByText(/Alcance Tech/i);
  expect(linkElement1).toBeInTheDocument();
  const linkElement2 = screen.getByText(/Reaching Out For A Bright Future/i);
  expect(linkElement2).toBeInTheDocument();
});