import React from 'react';
import {Link} from "react-router-dom";

export default function Product({cloth,addToCart,select}) {
  return (
    <div className="col-10 col-md-6 col-lg-3 text-center mb-5">
      <p className="text-primary">{cloth.name}</p>
      <p>KES: {cloth.price}</p>
      <Link to="/details">
        <div className="image-container p-0" onClick={() => select(cloth.id)} style={{ 'cursor': 'pointer' }}>
          <img style={{
            'height': "20rem",
            'maxWidth': "100%"
          }} src={cloth.img} alt="cloth" className="img-fluid prod-img" />
        </div>
      </Link>
      {cloth.inCart ? (<button disabled className="btn btn-outline-primary p-1 mt-2">In cart</button>) : (<button className="btn btn-outline-primary p-1 mt-2" onClick={()=>addToCart(cloth.id)}>Add to cart</button>) }
    </div>
  )
}
