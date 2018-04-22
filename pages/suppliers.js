import React, { Component } from 'react';
import { Container, Header, Form, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';

class Suppliers extends Component {

  render() {
    return (
      <Layout>
        <Container style={{ marginTop: '30px' }}>
            <Header style={{ marginLeft: '10px', fontSize: '50px' }} as='h1'>Suppliers</Header>
            <Header style={{ marginLeft: '10px' }} as='h2'>Register as a supplier. Get more customers by providing them with proof of organic certification.</Header>
            <Header style={{ marginLeft: '10px', marginBottom: '30px' }} as='h3'>Please enter the required fields below. Provide evidence of your certifications and verifications directly to the administrator. You will pay the required "gas" fee.</Header>
            
            <Form style={{ marginLeft: '10px' }}>
              <Form.Group>
                <Form.Input label='Company name' placeholder='Company name' width={8} required/>
                <Form.Input label='License Number' placeholder='License Number' width={8} required/>
              </Form.Group>
              <Form.Group>
                <Form.Input label='Email' placeholder='Email' width={8} required/>
                <Form.Input label='Phone number' placeholder='Phone number' width={8} required/>
                </Form.Group>
              <Button type='submit'>Submit</Button>
            </Form>
        </Container>
      </Layout>
    );
  }
}

export default Suppliers;