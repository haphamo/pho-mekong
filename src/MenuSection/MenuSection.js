import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import MenuItem from '../MenuItem/MenuItem.js';

// TODO: install uuid for unique key
// retreives all menu items from a category, props
const MenuSection = (props) => {
  const { header, list } = props.section;

  const allCategoryItems = list.map(item => {
    return(
      <MenuItem item={item} />
    )
  });

  return(
    <ListGroup style={{width: '50%'}}>
      <h5 style={{padding: '1em 1em 0em 1em'}}>{header}</h5>
        {allCategoryItems}
    </ListGroup>
  )
}

export default MenuSection;