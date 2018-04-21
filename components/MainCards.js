import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const consumers = [
  'Amy is a violinist with 2 years experience in the wedding industry.',
  'She enjoys the outdoors and currently resides in upstate New York.',
].join(' ');

const suppliers = [
    'Test',
    '123'
].join(' ');

const admin = 'Yo'

const MainCards = () => (
    <div>
  <Card>
    <Card.Content header='Consumers' href='consumers' />
    <Card.Content description={consumers} />
    <Card.Content extra>
      <Icon name='user' />
      4,278 Consumers have checked this week
    </Card.Content>
  </Card>
  
  <Card>
    <Card.Content header='Suppliers' href='suppliers'/>
    <Card.Content description={suppliers} />
    <Card.Content extra>
      <Icon name='user' />
      912 Suppiers on file
    </Card.Content>
  </Card>
  <Card>
    <Card.Content header='Admin' href='admin'/>
    <Card.Content description={admin} />
  </Card>
  </div>
)

export default MainCards