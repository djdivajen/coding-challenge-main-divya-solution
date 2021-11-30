import React from react
import {render, screen} from '@testing-library/react'
import App from './App'

test('renders landing page UI', () => {
  render(<App />)
  const navLinkELement = screen.getByText(/Page B/i)
  expect(navLinkELement).toBeInTheDocument()
})
