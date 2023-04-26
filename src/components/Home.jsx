import React from 'react'
import Card from 'react-bootstrap/Card';

const Home = ({cards}) => {
    
  return (
    <div>
        {cards.map((item)=>(
        <Card key={item.id} style={{ width: '18rem' }}>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.surneme}</Card.Text>
           <Card.Body>
          <Card.Title>{item.phone}</Card.Title>
          <Card.Text>{item.mail}</Card.Text>

        </Card.Body>
      </Card>
    ))}
    </div>
  )
}

export default Home