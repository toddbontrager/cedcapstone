import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import Layout from '../components/Layout';

class Suppliers extends Component {

  render() {
    return (
      <Layout>
        <Container style={{ marginTop: '30px' }}>
            <Header style={{ marginLeft: '10px', fontSize: '50px' }}as='h1'>Suppliers</Header>

        </Container>
      </Layout>
    );
  }
}

export default Suppliers;