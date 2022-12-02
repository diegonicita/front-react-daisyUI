import { render, screen } from '@testing-library/react';
import Login from './Login';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn())
}));

test('renders email and password labels', () => {
  render(<Login />);
  const linkElement1 = screen.getByText(/Email/i);
  expect(linkElement1).toBeInTheDocument();
  const linkElement2 = screen.getByText(/Password/i);
  expect(linkElement2).toBeInTheDocument();
});