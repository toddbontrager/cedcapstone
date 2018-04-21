import React, { Component } from 'react';
import { Container, Header, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';

class Consumers extends Component {

  render() {
    return (
      <Layout>
        <Container style={{ marginTop: '30px' }}>
          <Header style={{ marginLeft: '10px', fontSize: '50px' }}as='h1'>Consumers</Header>
          <Button
            content="See all suppliers"
          />
        </Container>
      </Layout>
    );
  }
}

export default Consumers;