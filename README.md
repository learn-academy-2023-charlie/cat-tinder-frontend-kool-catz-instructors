# Cat Tinder Project (Frontend) - 6/6/23 Charlie

## branch: main
### Empty repo
- Create empty repo through the github classroom link
### react app
- Create react app: 
  - $ `yarn create react-app cat-tinder-frontend`
  - $ `cd cat-tinder-frontend`
  - $ `git remote add origin https://github.com/learn-academy-2023-charlie/cat-tinder-frontend-kool-catz-instructors.git`
  - $ `git branch -m main`
  - $ `git status`
  - $ `code .`
  - $ `git status`
  - $ `git add .`
  - $ `git commit -m "initial commit"`
  - $ `git push origin main`
  - $ `yarn start`
- Request for branch protections

## branch: frontend-structure
### Basic functional component
```js
  import React from "react"

  const App = () => {
    return(
      <>
        <h1>Aloha, Galaxy!!!</h1>
      </>
    )
  }

  export default App
```
### Additional react component structure
Create Directories to organize files that will be needed for the Cat Tinder application in the src directory: assets, components, pages  
  - Assets: images
  - Components: Create Components Files to store the react components that will be present on every page: Header and Footer
  - Pages: Create Pages Files to store the react components that will store the code related to reading (CatIndex, CatShow, Home, NotFound), creating (CatNew), updating(CatEdit), and deleting data.

### Styling and Functionality dependencies for React components
- $ yarn add bootstrap
- $ yarn add reactstrap
- Add to src/index.js: import 'bootstrap/dist/css/bootstrap.min.css'

### React Routes
Setup structure to navigate between pages  
1. install dependencies: $ `yarn add react-router-dom`
2. import and use applicable built-in routing component BrowserRouter from `react-router-dom` onto index.js
  - BrowserRoute is the parent component used to store all other routing components.
```js
  // index.js
  import { BrowserRouter } from 'react-router-dom';

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
```
3. import and use applicable built-in routing components Routes and Route from `react-router-dom` onto App.js
  - `Routes` renders the applicable component by matching the request to to its nested `Route`
  - attributes used on each Route:
    - path will be assigned the custom url for each page 
    - element will be assigned the component call for each page
```js
  // App.js
  import { Routes, Route } from "react-router-dom"

  const App = () => {
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
```

### Mock data to test functionality of react app
- create a file to store mock data on the src directory
- store data in an array
```js
  // src/mockCats.js
  const cats = [ 
    ...
  ]
  export default cats
```
- import data onto App.js
- set data into state 
```js
  import mockCats from "./mockCats"

  const App = () => {
    const [cats, setCats] = useState(mockCats)
    console.log("all the cats", cats)
```
***
Additional Notes
***
Used [reactstrap](https://reactstrap.github.io) and [cat font](https://www.fontspace.com/category/cat) for styling
- header:
```js
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
```
- footer:
```js
  <Navbar
    className="my-2"
    color="info"
    fixed="bottom"
  >
    <NavbarBrand href="/">
      &copy; Charlean & Nicole | 2023
    </NavbarBrand>
  </Navbar>
```
- notfound:
```js
  <a href="/">
    <img 
      src="https://see.fontimg.com/api/renderfont4/2OzB8/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzAwMDAwMCIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/Tm90IEZvdW5k/oriental-cats-light.png" 
      alt="Cat fonts"
    />
  </a>
```