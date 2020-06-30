import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const ListItem = () => {
  return(
    <ListGroup>
      <h4>Appetizers</h4>
      <ListGroupItem  >A1. Crispy Spring Rolls (2) 4.95</ListGroupItem>
      <ListGroupItem  >A2. Veggie Crispy Rolls (2) 4.95</ListGroupItem>
      <ListGroupItem  >A3. Spring Chips (8) 2.95</ListGroupItem>
      <ListGroupItem  >A4. Deep Fried Wontons (8) 4.95</ListGroupItem>
      <ListGroupItem  >A5. Fresh Salad Rolls (2) 4.95
        <ul>
          <li>A. Shrimp & Pork</li>
          <li>B. Grilled Beef</li>
          <li>C. Grilled Chicken</li>
          <li>D. Vegetables</li>
        </ul>
      </ListGroupItem>
      <ListGroupItem  >A6. Marianated Minced Pork 5.95</ListGroupItem>
      <ListGroupItem  >A8. Golden Shrimp (8) 9.95</ListGroupItem>
      <ListGroupItem  >A9. Appetizer Platter
        <ul>
          <li>
            A. Cripsy Spring Rolls (4), Spring & Pork Salad Rolls (4), Fried Wontons (8), Shrimp Chips (8) 22.95
          </li>
          <li>
            B. Cripsy Spring Rolls (3), Spring & Pork Salad Rolls (3), Fried Wontons (6), Shrimp Chips (6) 17.95
          </li>
        </ul>
      </ListGroupItem>

  </ListGroup>
  )
}

export default ListItem;