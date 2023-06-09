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
***
## Cat Tinder Testing 6/7/23
***The more your tests resemble the way your software is used, the more confidence they can give you. Kent Dodds/React Testing Library***
### TDD 
- Test Driven Development - gives us confidence in the functionality of our code    
We will use a combination of three categories of testing principles:  
- Static tests that look for syntax mistakes and spelling errors  
- Unit tests that look for isolated code actions 
- Integration tests that test how your code works together  

### RED-GREEN-REFACTOR
1. write the test
2. good failure
3. code to make the test pass
4. see it pass
5. refactor: less lines, more efficient code  

Running the terminal command S `yarn create react-app` give us access to React Testing Library and Jest.
- Jest: Javascript testing framework
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/): provides methods to help write tests  

To see the testing suite: $ `yarn test` 

```bash
Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press o to only run tests related to changed files.
 › Press q to quit watch mode.
 › Press i to run failing tests interactively.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press Enter to trigger a test run.
```

### React Testing folder/file structure
- create a test directory `__tests__` in the src directory
- create a test file named the same as the react component with extension `.test.js`

### React Testing methods
- render: method to virtually render the React component
- screen: access to the rendered HTML 
- debugging tools
  - screen.debug(): displays the result of the render() call
  - screen.logTestingPlaygroundURL(): returns a link that gives access to the rendered HTML, DOM, available RTL methods to query each DOM element, and proper syntax for each query
- query methods
  - getByText(): find the element by its text content
  - getByRole(): find the element by its role 
  - getByLabelText(): find the element by its label 
  - getAllByAltText(): find all the elements containing the alt text, stores them in an array
- assertive methods
  - toBeInTheDocument(): check if the element is present
  - toHaveAttribute(): check if the element contains a certain attribute with its assigned value

### Reference for accessibility roles
[ARIA associated with HTML tags](https://www.w3.org/TR/html-aria/)

### React Test Library Test Template
```js
  // import dependencies and react components
  import { render, screen } from '@testing-library/react';
  import { BrowserRouter } from 'react-router-dom'
  import App from './App';

  // describe-it-expect jest structure
  describe('<App />', () => {
    it('renders a greeting to the Kool Catz space', () => {
      // render the component
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      )

      // debugging tools
      screen.debug()
      screen.logTestingPlaygroundURL()

      // query with .getByRole
      const koolImg = screen.getByRole('img', {
        name: /cat fonts/i
      })

      // assertion that checks if the element is in the DOM
      expect(koolImg).toBeInTheDocument()
    })
  })
```
***
## Read Functionality: CatIndex
### Process
- modify the route: url and passing props
- accept props on the react component
- iterate across the array to display the values on the UI
- test coverage for the react component

### Modify the route
- props: read-only, pass in one direction down to the child/nested component  
`<Route path="/catindex" element={<CatIndex cats={cats}/>}/>`

### Accept the props on the react component
- destructure applicable prop for the react component  
`const CatIndex = ({cats}) => {`

### Display data to UI
- use styling components from [Reactstrap](https://reactstrap.github.io/)
```js
  <Card
    style={{
      width: '18rem'
    }}
  >
    <img
      alt={`image of ${value.name} who is a fluffy white cat`}
      src={value.image}
    />
    <CardBody>
      <CardTitle tag="h5">
        {value.name}
      </CardTitle>
      <Button>
        Click to View Meow
      </Button>
    </CardBody>
  </Card>
```

### Test coverage for react component
- Make sure to provide props to the component call on the render() for the test
```js
  import mockCats from '../mockCats'
  ...
  render(
    <BrowserRouter>
      <CatIndex cats={mockCats}/>
    </BrowserRouter>
  )
```
- Sometime the page can still be waiting for the data to load, this can cause some pages to fail to render because the functionality ran before the data could load. Therefore, setup conditional rendering `cats?` on CatIndex.js
`{cats?.map((value, index) => {`

## Read Functionality: CatShow
### Process
- modify the route: url and passing props
- accept props on the react component
- access params to identify the one value to display on the UI
- test coverage for the react component

### Modify the route
- props: read-only, pass in one direction down to the child/nested component    
`<Route path="/catshow/:id" element={<CatShow cats={cats}/>}/>`

### Accept the props on the react component
- destructure applicable prop for the react component  
`const CatShow = ({cats}) => {`

### Display data to UI
- access the id param from the URL by using react hook useParams()  
`const { id } = useParams()`
- iterate across the values in the array and return the value with the id that matches the id param
- since the id param is a string from the URL, use the unary operator `+` to convert it to a number
```js
  let currentCat = cats.find((cat) => {
    return cat.id === +id
  })
```
- use styling components from reactstrap to display data to UI
```js
  <Card
    style={{
      width: '18rem'
    }}
  >
    <CardBody>
      <CardTitle tag="h5">
        {currentCat.name}
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        {currentCat.age}
      </CardSubtitle>
    </CardBody>
    <img
      alt={`image of ${currentCat.name} who is a fluffy white cat`}
      src={currentCat.image}
      width="100%"
    />
    <CardBody>
      <CardText>
        {currentCat.hobby}
      </CardText>
    </CardBody>
  </Card>
```
- Setup conditional rendering
```js
  // cats? on the find method
  `let currentCat = cats?.find((cat) => {`
  // within the component return {currentCat && ()}
  {currentCat && (
    <Card>...</Card>
  )}
```

### Test coverage
- Provide the id params required for the url and the props required for the component call
- [Memory Router](https://reactrouter.com/en/main/router-components/memory-router)
```js
  import { MemoryRouter, Routes, Route } from 'react-router-dom'
  ...
  render(
    <MemoryRouter initialEntries={["/catshow/1"]}>
      <Routes>
        <Route path="/catshow/:id" element={<CatShow cats={mockCats}/>}/>
      </Routes>
    </MemoryRouter>
  )
```

## Create Functionality: CatNew

7 RESTful routes:
1) show
2) create
3) update

4) new
5) edit

6) destroy / delete
7) index

- **new** and **edit** are just routes that will display a form

## User Stories
✅ User can fill out a form to create a new cat
```js
  <Form>
    <FormGroup>
    // 'for' attr needs to match your id attr for the label below it
      <Label for="exampleEmail">
        Email
      </Label>
      <Input
        // 'id' needs to match the 'for' attr value
        id="exampleEmail"
        // name is correlated with our database key aka I want my input to go here 
        name="email"
        // Text to be seen on render
        placeholder="with a placeholder"
        // 
        type="email"
      />
    </FormGroup>
  </Form>
```


✅ On submit be redirected to cat index
```js
  <Button onClick={handleClick} name="submit">
    Submit
  </Button>
```

### Developer Stories
✅ As a developer, I can store the cat object in state.

```js
  const [newCat, setNewCat] = useState(
    {
      name: "",
      age: "",
      hobby: "",
      image: ""
    }
  )
```

✅ As a developer, I can pass the cat object to App.js on submit and see the cat object logged in the console.
  > created a state in CatNew
  > used event listeners to track and store user inputs
  > created createCat method to relay the information back to App.js
  > created a handleClick to send it back

✅ As a developer, I have test coverage on my new page.
```js
  // import dependencies and react components
  import { render, screen } from '@testing-library/react';
  import { BrowserRouter } from 'react-router-dom'
  // import component file
  import CatNew from '../pages/CatNew';

  describe('<CatNew />', () => {
    it("renders the CatNew page", () => {
      render(
        <BrowserRouter>
          <CatNew />
        </BrowserRouter>
      )
      const element = screen.getByText(/catnew/i)
      expect(element).toBeInTheDocument()
    })
  })
```

```js
  import { render, screen } from '@testing-library/react';
  import { BrowserRouter } from 'react-router-dom'
  import CatNew from '../pages/CatNew';

  describe('<CatNew />', () => {
    // beforeEach() is a method that we can use to render our component before each testing block
    beforeEach(() => {
      render(
        <BrowserRouter>
          <CatNew />
        </BrowserRouter>
      )
    })
    it("renders the CatNew page", () => {
      const element = screen.getByText(/catnew/i)
      expect(element).toBeInTheDocument()
    })
  })
```