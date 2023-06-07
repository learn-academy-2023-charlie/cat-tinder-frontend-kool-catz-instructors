// import dependencies and react components
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import Footer from '../components/Footer';

describe('<Footer />', () => {
  // navbar
  it('has a link', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
    const footLink = screen.getByRole('link', {
      name: /charlean & nicole/i
    })
    expect(footLink).toBeInTheDocument()  
  })
})
