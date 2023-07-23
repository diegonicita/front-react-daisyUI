import { render, screen } from '@testing-library/react';
import Home from './Home';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn())
}));

test('renders learn react link', () => {
  render(<Home />);
  const linkElement1 = screen.getByText(/Webapp FrontEnd/i);
  expect(linkElement1).toBeInTheDocument();
  const linkElement2 = screen.getByText(/Provident cupiditate voluptatem/i);
  expect(linkElement2).toBeInTheDocument();
});