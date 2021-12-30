import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Card,Button,InputGroup,FormControl,FloatingLabel,Form} from 'react-bootstrap'

const styles = {
    card:{
        width:320,
        height:180,
        marginTop:140,
        marginLeft:23,
        marginBottom:-120,
      },
    button:{
        marginLeft:230,
        marginTop:40,
        height:25,
        width:100,
        fontSize:9,
    },
    title:{
       fontSize:9,
       fontWeight:"bold",
    },
    inputgroup:{
        marginTop:30,
        height:30,
        width:280, 
        fontSize:10, 
    },
    container:{
        marginTop:-20,
        color:"black",
        backgroundColor:"white"
    },
    heading:{
        marginBottom:-20
    }

};
const Config = () => {
    return (
      
           
  
      <>
        <div style={styles.heading}><p>
            App Config
          </p></div>
       
 <Col>
 
<Row >  

      <Card style={styles.card}>
        <Card.Body>
          <Card.Title style={styles.title}>Commision (%)</Card.Title>
          <InputGroup size="sm" style={styles.inputgroup}>
    <FormControl aria-label="Dollar amount (with dot and two decimal places)" />
   
    <Button style={styles.button} variant="primary">Update</Button>
    </InputGroup>
        </Card.Body>
      </Card>
    <Card style={styles.card}>
        <Card.Body>
          <Card.Title style={styles.title} >Feature Commission (%)</Card.Title>
          <InputGroup size="sm" style={styles.inputgroup}>
    <FormControl aria-label="Dollar amount (with dot and two decimal places)" />
    <Button style={styles.button} variant="primary">Update</Button>
  </InputGroup>
        </Card.Body>
      </Card>
      <Card style={styles.card}>
        <Card.Body>
          <Card.Title style={styles.title}>Payment Gateway (%)</Card.Title>
          <InputGroup size="sm" style={styles.inputgroup}>
    <FormControl aria-label="Dollar amount (with dot and two decimal places)" />
    <Button style={styles.button} variant="primary">Update</Button>
  </InputGroup>
        </Card.Body>
      </Card>   

<Card style={styles.card}>
        <Card.Body>
          <Card.Title style={styles.title}>GST (%)</Card.Title>
          <InputGroup size="sm" style={styles.inputgroup}>
    <FormControl aria-label="Dollar amount (with dot and two decimal places)" />
    <Button style={styles.button} variant="primary">Update</Button>
  </InputGroup>
        </Card.Body>
      </Card>
      
    <Card style={styles.card}>
        <Card.Body>
          <Card.Title style={styles.title}>Payment Gateway Name</Card.Title>
          <InputGroup >
          <FormControl aria-label="Dollar amount (with dot and two decimal places)" />
    <Button style={styles.button} variant="primary">Update</Button>
  </InputGroup>
     
        </Card.Body>
      </Card>
      <Card style={styles.card}>
        <Card.Body>
          <Card.Title style={styles.title}>Home Project</Card.Title>
          <InputGroup   >
          <FloatingLabel controlId="floatingSelectGrid">
      <Form.Select style={styles.inputgroup} aria-label="Floating label select example">
      <option value="1">Feed cows with the grass of love</option>
        <option value="2">Paying children education fees</option>
        <option value="3">Sponsoring books for students</option>
        <option value="4">feeding pigeons grains</option>
        <option value="5">Sponsoring stationary for students</option>
      </Form.Select>
    </FloatingLabel>
    <Button style={styles.button} variant="primary">Update</Button>
  </InputGroup>
     
        </Card.Body>
      </Card>  
      </Row>
</Col>
</>
    )
}


export default Config;
