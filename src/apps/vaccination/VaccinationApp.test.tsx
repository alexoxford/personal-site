import React from 'react'
import { render, screen } from '@testing-library/react'
import VaccinationApp from './VaccinationApp'

// Uncomment when mocking is set up
// test('renders Vaccination App title', () => {
//   render(<App />);
//   const h1Element = screen.getByText(/VA COVID-19 Vaccination Progress/i);
//   expect(h1Element).toBeInTheDocument();
// });

test('renders loading indicator', () => {
  render(<VaccinationApp />)
  const text = screen.getByText(/Loading/)
  expect(text).toBeInTheDocument()
})
