import React, { useState } from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"

const CatNew = ({ createCat }) => {
  const [newCat, setNewCat] = useState(
    {
      name: "",
      age: "",
      hobby: "",
      image: ""
    }
  )

  const navigate = useNavigate()

  const handleChange = (e) => {
    // displaying the changes from my user interaction
    // e.target.name will be telling us which key we are updating
    // e.target.value will telling us what value it will push into that key
    setNewCat({ ...newCat, [e.target.name]: e.target.value })
  }

  const handleClick = () => {
    createCat(newCat)
    navigate("/catindex")
  }

  return (
    <>
      <h3>CatNew page</h3>
      <Form>
        <FormGroup>
          <Label for="cat-name">
            Please enter name:
          </Label>
          <Input
            id="cat-name"
            name="name"
            placeholder="Kujo"
            type="text"
            onChange={handleChange}
            value={newCat.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="cat-age">
            Please enter age:
          </Label>
          <Input
            id="cat-age"
            name="age"
            placeholder="2 years old"
            type="text"
            onChange={handleChange}
            value={newCat.age}
          />
        </FormGroup>
        <FormGroup>
          <Label for="cat-hobby">
            What are your hobbies?
          </Label>
          <Input
            id="cat-hobby"
            name="hobby"
            placeholder="Enjoys rolling in the litterbox ..."
            type="text"
            onChange={handleChange}
            value={newCat.hobby}
          />
        </FormGroup>
        <FormGroup>
          <Label for="cat-image">
            Please upload a puuurrfect photo here!
          </Label>
          <Input
            id="cat-image"
            name="image"
            placeholder="Please attach a url here"
            type="url"
            onChange={handleChange}
            value={newCat.image}
          />
        </FormGroup>
        <Button onClick={handleClick} name="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default CatNew