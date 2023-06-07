// import dependencies and react components
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import NotFound from '../pages/NotFound';

describe('<NotFound />', () => {
  // image
  it('has an image', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
    const notImg = screen.getByRole('img', {
      name: /cat fonts/i
    })

    const notText = screen.getByAltText(/cat fonts/i)

    expect(notText).toBeInTheDocument()  
  })

  // attributes
  it('has an image with attributes', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    const notText = screen.getByAltText(/cat fonts/i)
    expect(notText).toHaveAttribute("src", "https://see.fontimg.com/api/renderfont4/2OzB8/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzAwMDAwMCIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/Tm90IEZvdW5k/oriental-cats-light.png")
    expect(notText).toHaveAttribute("alt", "Cat fonts") 
  })

})
