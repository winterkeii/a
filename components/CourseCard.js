import { useState } from "react"
import { Button, Card, CardSubtitle } from "react-bootstrap"

export default function CourseCard(){
    let [count, setCount] = useState(0)

    function Enroll(){
        if(count !== 30){
            setCount(count + 1)
        }else{
            alert("No Slot Left")
        }
        
    }

    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Sample Course</Card.Title>
          <CardSubtitle>Description</CardSubtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <CardSubtitle>Price</CardSubtitle>
          <Card.Text>
            $10,000
          </Card.Text>
          <CardSubtitle>Enrollees</CardSubtitle>
          <Card.Text>
            {count}
          </Card.Text>
          <Button variant="primary" onClick={Enroll}>Enroll</Button>
        </Card.Body>
      </Card>  
    )
}