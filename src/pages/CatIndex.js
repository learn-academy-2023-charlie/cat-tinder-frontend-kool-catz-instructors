import React from "react"
import { Card, CardBody, CardTitle, Button } from "reactstrap"
import { NavLink } from "react-router-dom"

const CatIndex = ({cats}) => {
  // console.log("catindex", cats)

  return(
    <div id="cat-index-card">
      {cats?.map((value, index) => {
        return(
          <Card
            style={{
              width: '18rem'
            }}
            key={index}
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
                <NavLink to={`/catshow/${value.id}`}>
                  Click to View Meow
                </NavLink>
              </Button>
            </CardBody>
          </Card>
        )
      })}
    </div>
  )
}

export default CatIndex