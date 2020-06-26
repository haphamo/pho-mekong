import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button, ButtonGroup
} from 'reactstrap';

const MenuItem = (props) => {
  return (
      <Card style={{width: '20%'}}>
        <CardBody>
          <CardTitle>P10. Pho Mekong</CardTitle>
        </CardBody>
        <section id="P10" style={{display: 'flex', justifyContent: 'center'}}>
          <img width="90%" src="https://www.fodmapeveryday.com/wp-content/uploads/2017/06/Pho-closeup-copy-855x570.jpg" alt="Card image cap" /> 
        </section>
        <CardBody>
          <CardText>Pho with assorted beef, rare, well done, beef balls, and assorted vegatables.</CardText>
          <ButtonGroup style={{marginBottom: '1em'}}>
            <Button>Medium</Button>
            <Button>Large</Button>
            <Button>X-Large</Button>
          </ButtonGroup>
          <Button color="primary">Add to Order</Button>{' '}
        </CardBody>
      </Card>
  );
};

export default MenuItem;