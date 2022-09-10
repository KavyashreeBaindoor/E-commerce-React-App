import React from 'react';
import Item from '../items/item';
import "./item-container.styles.scss"

const ItemContainer = ({data}) => {
  return (
    <>
     <div className="cardsContainer">
        {data.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
    
    </>
  )
}

export default ItemContainer