import React from "react"
import { useParams } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"
const CatShow = ({cats}) => {
  console.log("show", cats)
  const { id } = useParams()
  // console.log("id", id)
  let currentCat = cats.find((cat) => {
    return cat.id === +id
  })
  console.log(currentCat)
  return(
    <main className="card">
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
    </main>
  )
}

export default CatShow