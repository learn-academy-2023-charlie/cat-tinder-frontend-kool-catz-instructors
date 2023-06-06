import React, {useState} from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import CatIndex from "./pages/CatIndex"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import mockCats from "./mockCats"

const App = () => {
  const [cats, setCats] = useState(mockCats)
  console.log("all the cats", cats)
  return(
    <>
      <Header />
      <h1>Aloha, Galaxy!!!</h1>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/catindex" element={<CatIndex />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App