import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"


export default function Register(){
   let [firstName, setFirstName] = useState("")
   let [lastName, setLastName] = useState("")
   let [middleName, setMiddleName] = useState("")
   let [email, setEmail] = useState("")
   let [contact, setContact] = useState("")
   let [password, setPassword] = useState("")

   console.log(firstName)

   function register(e){
    e.preventDefault();
    fetch("http://localhost:4001/users/register", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            email: email,
            contact: contact,
            password: password
        })
    })
    .then(result => result.json()).then(result => {
        if(result.code === "Registration Success"){
            alert(result.message)
        }else{
            alert("Something went wrong!")
        }
    })
   }
    return(
        <Container fluid className="vh-100">
            <Row> 
            <Col className="vh-100 bg-warning col-6 d-flex flex-column align-items-center justify-content-center">
                <h1 className="display-5 fw-bold">REGISTER NOW</h1>
                <p className="display-6">Your bright future Begins</p>
            </Col>
            <Col className="vh-100 col-6 ">
        <Container fluid className="p-5 d-flex flex-column align-items-center justify-content-center">
            <h1 className="display-3 fw-bold">Register</h1>

            <Form className="w-100 p-5 shadow rounded-3 border-bottom border-3 border-warning" onSubmit={e => register(e)}>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter your First Name" required onChange={e => setFirstName(e.target.value)} value = {firstName}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="Text" placeholder="Enter your Middle name" required onChange={e => setMiddleName(e.target.value)} value = {middleName}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="Text" placeholder="Enter your Last name" required onChange={e => setLastName(e.target.value)} value = {lastName}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" required onChange={e => setEmail(e.target.value)} value = {email}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="number" placeholder="Enter your mobile number" required onChange={e => setContact(e.target.value)} value = {contact} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="password" placeholder="Enter your Password" required onChange={e => setPassword(e.target.value)} value = {password}/>
        <Button variant="warning" className="mt-5 w-100 rounded-pill" type="submit">REGISTER</Button>
      </Form.Group>
     
        </Form>
        </Container>
            </Col>
            </Row>
        </Container>
    )
}