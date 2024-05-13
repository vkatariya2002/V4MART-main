import React from 'react'
import './NewCollections.css'
import Item from '../Item/Item'
import { Link } from 'react-router-dom'

const NewCollections = (props) => {
  return (
    <div id='new-collection' className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {props.data.map((item,i)=>{
                return <Item id={item.id} key={i} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
            })}
      </div>
      <div className="shopcategory-loadmore">
        <Link to="/products" style={{ textDecoration: "none" }}>
          Explore More
        </Link>
      </div>
    </div>
  )
}

export default NewCollections
