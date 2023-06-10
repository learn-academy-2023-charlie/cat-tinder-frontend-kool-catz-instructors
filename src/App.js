import React, { useState, useEffect } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import CatIndex from "./pages/CatIndex"
import CatShow from "./pages/CatShow"
import CatNew from "./pages/CatNew"
import CatEdit from "./pages/CatEdit"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import { Routes, Route } from "react-router-dom"
import mockCats from "./mockCats"
import "./App.css"

const App = () => {
  const [cats, setCats] = useState([])
  // console.log("all the cats", cats)

  const readCat = () => {
    fetch("http://localhost:3000/cats")
    .then(response => response.json())
    .then(payload => {
      setCats(payload)
    })
    .catch(error => console.log(error))
  }

  useEffect(() => {
    readCat()
  }, [])

  const createCat = (createdCat) => {
    fetch("http://localhost:3000/cats", {
      // converts the object to a string that can be passed in the request
      body: JSON.stringify(createdCat),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "POST"
    })
      .then((response) => response.json())
      .then((payload) => readCat())
      .catch((errors) => console.log("Cat create errors:", errors))
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catindex" element={<CatIndex cats={cats} />} />
        <Route path="/catshow/:id" element={<CatShow cats={cats} />} />
        <Route path="/catnew" element={<CatNew createCat={createCat} />} />
        <Route path="/catedit" element={<CatEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App