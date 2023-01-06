import React from 'react';
import { FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const AddProduct = () => {



const  handleaddproduct = event =>{
  event.preventDefault();
  const name = event.target.productName.value;
  const price = event.target.price.value;
  const desc= event.target.desc.value;
  console.log(name, price, desc);
}






  return (
    <>

      <Form onSubmit={handleaddproduct}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control type="text" placeholder="Product Name" name='productName' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control type="number" placeholder="Price" name='price' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              as="textarea"
              placeholder="Product description"
              style={{ height: '100px' }}
              name='desc'
            />
        </Form.Group>


        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default AddProduct;