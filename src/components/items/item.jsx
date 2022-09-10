import React from 'react'
import "./item.styles.scss"

const Item = (props) => {
         const {imageUrl,title,id}=props.item
  return (
    <>
    <div className="cardcontainer" >
                <div
                  className="image"
                  style={{ backgroundImage: `url(${imageUrl})` }}
                ></div>
                <div className="inner">
                  <h1>{title}</h1>
                </div>
              </div>
    
    </>
  )
}

export default Item