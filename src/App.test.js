import {render, screen} from '@testing-library/react'
import App from './App'

test('renders landing page UI', () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  render(<App />)
  const navLinkELement = screen.getByText(/Page B/i)
  expect(navLinkELement).toBeInTheDocument()
})
