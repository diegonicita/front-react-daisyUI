import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import axios from 'axios'
import Login from './Login'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}))

// Mock axios post method
jest.mock('axios')

test('renders email and password labels', () => {
  render(<Login />)
  const linkElement1 = screen.getByText(/Email/i)
  expect(linkElement1).toBeInTheDocument()
  const linkElement2 = screen.getByText(/Password/i)
  expect(linkElement2).toBeInTheDocument()
})

test('handles form submission', async () => {
  // Mock axios post response for successful login
  axios.post.mockResolvedValueOnce({
    data: {
      status: 200,
      error: false,
      token: 'mock-token',
    },
  })

  render(<Login />)
  const emailInput = screen.getByLabelText(/Email/i)
  const passwordInput = screen.getByLabelText(/Password/i)
  const loginButton = screen.getByText(/Login/i)

  // Fill in the form inputs
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
  fireEvent.change(passwordInput, { target: { value: 'testPassword' } })

  // Submit the form
  fireEvent.click(loginButton)

  // Wait for the form submission and response handling
  await waitFor(() => {
    expect(screen.queryBy(/Login Exitoso!/i)).toBeInTheDocument()
  })
})
