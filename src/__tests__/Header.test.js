// import dependencies and react components
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import Header from '../components/Header';

describe('<Header />', () => {
  // navbar
  it('has a nav bar', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
    const koolImg = screen.getByRole('img', {
      name: "Cat fonts"
    })
    expect(koolImg).toBeInTheDocument()
  })

  // alt text
  it('has attributes assigned to the image', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    const koolAlt = screen.getByAltText(/cat font/i)
    expect(koolAlt).toHaveAttribute("src", "https://see.fontimg.com/api/renderfont4/VGWjy/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzAwMDAwMCIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/S29vbCBDYXR6/meows.png")
    expect(koolAlt).toHaveAttribute("alt", "Cat fonts")
    expect(koolAlt).toHaveAttribute("height", "20")
  })

})
