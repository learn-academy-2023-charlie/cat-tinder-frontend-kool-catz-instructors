// import dependencies and react components
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import CatIndex from '../pages/CatIndex';
import mockCats from '../mockCats'

describe('<CatIndex />', () => {
  // image
  it('has a heading', () => {
    render(
      <BrowserRouter>
        <CatIndex cats={mockCats}/>
      </BrowserRouter>
    )
    // screen.logTestingPlaygroundURL()
    mockCats.forEach((cat) => {
      const altText = screen.getAllByAltText(/image of/i)
      screen.debug(altText[0])
      expect(altText[0]).toBeInTheDocument()
    })
  })

})
