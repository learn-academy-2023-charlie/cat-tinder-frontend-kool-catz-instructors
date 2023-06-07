import React from "react"
import { Navbar } from "reactstrap"

const Header = () => {
  return(
    <>
      <Navbar
        className="my-2"
        color="info"  
      >
        <a href="/">
          <img 
            src="https://see.fontimg.com/api/renderfont4/VGWjy/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzAwMDAwMCIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/S29vbCBDYXR6/meows.png" 
            alt="Cat fonts" 
            height="20" 
          />
        </a>
      </Navbar>
    </>
  )
}

export default Header