import React, { Component } from 'react'
import { Card, Icon, Grid } from 'semantic-ui-react'
import instance from '../ethereum/organicChecker';


const consumers = [
  'Amy is a violinist with 2 years experience in the wedding industry.',
  'She enjoys the outdoors and currently resides in upstate New York.',
].join(' ');

const suppliers = [
  'Test',
  '123'
].join(' ');

const admin = 'Yo'

class MainCards extends Component {
  state = {
    supplierCount: '',
  }

  async componentDidMount() {
    const getSupplierCount = await instance.methods.countSuppliers().call();
    this.setState({ supplierCount: getSupplierCount });
  }

  render() {
    return (
        <div>
          <Grid>
            <Grid.Column width={5} style={{ marginLeft: '10px' }}>
              <Card>
                <Card.Content header='Consumers' href='consumers' />
                <Card.Content description={consumers} />
              </Card>
            </Grid.Column>

            <Grid.Column width={5}>
              <Card>
                <Card.Content header='Suppliers' href='suppliers' />
                <Card.Content description={suppliers} />
                <Card.Content extra>
                  <Icon name='user' />
                {this.state.supplierCount} Suppliers on file
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column width={5}>
              <Card>
                <Card.Content header='Admin' href='admin'/>
                <Card.Content description={admin} />
              </Card>
            </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default MainCards