// import dependencies and react components
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import CatNew from '../pages/CatNew';

describe('<CatNew />', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <CatNew />
      </BrowserRouter>
    )
  })
  it("renders the CatNew page", () => {
    // render(
    //   <BrowserRouter>
    //     <CatNew />
    //   </BrowserRouter>
    // )
    const element = screen.getByText(/catnew/i)
    expect(element).toBeInTheDocument()
  })

})