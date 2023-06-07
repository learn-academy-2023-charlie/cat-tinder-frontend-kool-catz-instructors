// import dependencies and react components
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import App from '../App';


describe('<App />', () => {
  it('renders a greeting to the Kool Catz space', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    // screen.debug
    screen.logTestingPlaygroundURL()
    const koolImg = screen.getByRole('img', {
      name: /cat fonts/i
    })

    expect(koolImg).toBeInTheDocument()
  })
})
