import React, { Component } from 'react';
import { Container, Header, Form, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';

class Admin extends Component {
  state = {}

  certHandleChange = (e, { certvalue }) => this.setState({ certvalue })
  verifiedHandleChange = (e, { verifiedvalue }) => this.setState({ verifiedvalue })

  render() {
    const { certvalue } = this.state;
    const { verifiedvalue } = this.state;
    return (
      <Layout>
        <Container style={{ marginTop: '30px' }}>
            <Header style={{ marginLeft: '10px', fontSize: '50px' }}as='h1'>Admin</Header>
            <Header style={{ marginLeft: '10px' }} as='h2'>For the administrator only.</Header>
            <Header style={{ marginLeft: '10px', marginBottom: '30px' }} as='h3'>Update the certifications and lab verifications here. Gas will be required.</Header>
            
            <Form style={{ marginLeft: '10px' }}>
              <Form.Group>
                <Form.Input label='Supplier hex address' placeholder='Supplier hex address' width={8} required/>
              </Form.Group>
              <Form.Group inline>
                <label>Organic Certification</label>
                <Form.Radio label='Certified' certvalue='true' checked={certvalue === 'true'} onChange={this.certHandleChange} />
                <Form.Radio label='Not certified' certvalue='false' checked={certvalue === 'false'} onChange={this.certHandleChange} />
              </Form.Group>
              <Form.Group inline>
                <label>3rd Party Lab Verified</label>
                <Form.Radio label='Lab verified' verifiedvalue='true' checked={verifiedvalue === 'true'} onChange={this.verifiedHandleChange} />
                <Form.Radio label='No lab verification' verifiedvalue='false' checked={verifiedvalue === 'false'} onChange={this.verifiedHandleChange} />
              </Form.Group>
              <Button type='submit'>Submit</Button>
            </Form>
        </Container>
      </Layout>
    );
  }
}

export default Admin;