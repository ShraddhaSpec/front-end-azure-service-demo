import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const headingElement = screen.getByText(/Azure App Service/i);
  expect(headingElement).toBeInTheDocument();
});
