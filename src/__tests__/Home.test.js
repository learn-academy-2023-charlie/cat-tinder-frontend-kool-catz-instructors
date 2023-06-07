// import dependencies and react components
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home';

describe('<Home />', () => {
  // image
  it('has a heading', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
    const homeText = screen.getByRole('heading', {
      name: /aloha, kool catz/i
    })
    expect(homeText).toBeInTheDocument()
  })

})
