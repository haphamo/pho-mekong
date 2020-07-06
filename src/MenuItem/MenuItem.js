import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';


const MenuItem = ({item}) => {

  const { code, name, price, desc, subOptions } = item;

  // If the item has sub options. Fresh salad rolls(A5) has 4 types
  const getAllSubOptions = (allOptions) => {
    return allOptions.map(option => {
      return(
        <li>{option}</li>
      )
    })
  };
  
  return(
    <ListGroupItem key={code}>
      <section className='main' style={{display: 'flex', justifyContent: 'space-between'}}> 
        <section className='item'>{code}. {name}</section>
        <section className='price'>{(price/100).toFixed(2)}</section>
      </section>
      {desc && <article className='description'>{desc}</article>}
      {subOptions &&         
        <ul>
          {getAllSubOptions(subOptions)}
        </ul>}
    </ListGroupItem>
  )
}

export default MenuItem;