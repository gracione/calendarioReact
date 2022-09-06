import React from 'react';
import { render, screen } from '@testing-library/react';
import EtapaCalendario from './paginas/etapaCalendario/EtapaCalendario';

test('renders learn react link', () => {
  render(<EtapaCalendario />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
